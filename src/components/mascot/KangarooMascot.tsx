import React, { useEffect, useRef, useState } from 'react';
import styles from './KangarooMascot.module.css';

interface KangarooMascotProps {
  className?: string;
}

export const KangarooMascot: React.FC<KangarooMascotProps> = ({ className = '' }) => {
  const headSubsystemRef = useRef<HTMLDivElement>(null);
  const layerEyesRef = useRef<HTMLImageElement>(null);
  const socketLeftRef = useRef<HTMLDivElement>(null);
  const socketRightRef = useRef<HTMLDivElement>(null);
  const [isBlinking, setIsBlinking] = useState<boolean>(false);

  useEffect(() => {
    const HEAD_LERP = 0.07;
    const EYES_LERP = 0.14;
    const MAX_EYE_RADIUS_X = 3.6;
    const MAX_EYE_RADIUS_Y = 2.8;

    let animFrameId: number;
    let pointer = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
    let normPointer = { x: 0, y: 0 };
    let targetNormPointer = { x: 0, y: 0 };

    let headState = { yaw: 0, pitch: 0, roll: 0, tx: 0, ty: 0 };
    let eyesOffset = { x: 0, y: 0, vx: 0, vy: 0, saccadeX: 0, saccadeY: 0 };

    // Organic Random Blinking Engine
    let blinkTimeout: ReturnType<typeof setTimeout>;
    const scheduleNextBlink = () => {
      const delay = Math.random() * 4000 + 3500;
      blinkTimeout = setTimeout(() => {
        setIsBlinking(true);
        setTimeout(() => {
          setIsBlinking(false);
          scheduleNextBlink();
        }, 140);
      }, delay);
    };

    scheduleNextBlink();

    // Idle Saccades Micro-Jitter
    const saccadeInterval = setInterval(() => {
      if (Math.random() > 0.45) {
        eyesOffset.saccadeX = (Math.random() - 0.5) * 1.8;
        eyesOffset.saccadeY = (Math.random() - 0.5) * 1.4;
      }
    }, 2000);

    const handlePointerMove = (e: MouseEvent | PointerEvent) => {
      pointer.x = e.clientX;
      pointer.y = e.clientY;

      targetNormPointer.x = (e.clientX / window.innerWidth) * 2 - 1;
      targetNormPointer.y = -(e.clientY / window.innerHeight) * 2 + 1;
    };

    const handleTouchMove = (e: TouchEvent) => {
      if (e.touches && e.touches[0]) {
        const touch = e.touches[0];
        pointer.x = touch.clientX;
        pointer.y = touch.clientY;

        targetNormPointer.x = (touch.clientX / window.innerWidth) * 2 - 1;
        targetNormPointer.y = -(touch.clientY / window.innerHeight) * 2 + 1;
      }
    };

    window.addEventListener('pointermove', handlePointerMove);
    window.addEventListener('mousemove', handlePointerMove);
    window.addEventListener('touchmove', handleTouchMove, { passive: true });
    window.addEventListener('touchstart', handleTouchMove, { passive: true });

    const calculateEyeballClampedVector = () => {
      if (!socketLeftRef.current || !socketRightRef.current) return { x: 0, y: 0 };

      const rectL = socketLeftRef.current.getBoundingClientRect();
      const rectR = socketRightRef.current.getBoundingClientRect();

      const eyesCenterX = (rectL.left + rectR.right) / 2;
      const eyesCenterY = (rectL.top + rectR.bottom) / 2;

      const dx = pointer.x - eyesCenterX;
      const dy = pointer.y - eyesCenterY;
      const dist = Math.sqrt(dx * dx + dy * dy);

      if (dist === 0) return { x: 0, y: 0 };

      const angle = Math.atan2(dy, dx);
      const clampedX = Math.cos(angle) * Math.min(dist * 0.025, MAX_EYE_RADIUS_X);
      const clampedY = Math.sin(angle) * Math.min(dist * 0.025, MAX_EYE_RADIUS_Y);

      return {
        x: clampedX,
        y: clampedY,
      };
    };

    let startTime = performance.now();

    const animate = (now: number) => {
      animFrameId = requestAnimationFrame(animate);
      const time = (now - startTime) * 0.001;

      normPointer.x += (targetNormPointer.x - normPointer.x) * HEAD_LERP;
      normPointer.y += (targetNormPointer.y - normPointer.y) * HEAD_LERP;

      // Eyeball tracking with spring physics & velocity overshoot
      const targetEyes = calculateEyeballClampedVector();
      const desiredX = targetEyes.x + eyesOffset.saccadeX;
      const desiredY = targetEyes.y + eyesOffset.saccadeY;

      const ax = (desiredX - eyesOffset.x) * EYES_LERP;
      const ay = (desiredY - eyesOffset.y) * EYES_LERP;
      eyesOffset.vx = (eyesOffset.vx + ax) * 0.78;
      eyesOffset.vy = (eyesOffset.vy + ay) * 0.78;

      eyesOffset.x += eyesOffset.vx;
      eyesOffset.y += eyesOffset.vy;

      // Decay micro-saccade offset
      eyesOffset.saccadeX *= 0.92;
      eyesOffset.saccadeY *= 0.92;

      if (layerEyesRef.current) {
        layerEyesRef.current.style.transform = `translate3d(${eyesOffset.x.toFixed(2)}px, ${eyesOffset.y.toFixed(2)}px, 0)`;
      }

      // Head 3D motion + ambient breathing sine wave
      const breathingY = Math.sin(time * 2.2) * 1.5;

      const targetYaw = normPointer.x * 8.5;
      const targetPitch = -normPointer.y * 5.5;
      const targetRoll = normPointer.x * 2.8;
      const targetTx = normPointer.x * 8.5;
      const targetTy = -normPointer.y * 4.5 + breathingY;

      headState.yaw += (targetYaw - headState.yaw) * HEAD_LERP;
      headState.pitch += (targetPitch - headState.pitch) * HEAD_LERP;
      headState.roll += (targetRoll - headState.roll) * HEAD_LERP;
      headState.tx += (targetTx - headState.tx) * HEAD_LERP;
      headState.ty += (targetTy - headState.ty) * HEAD_LERP;

      if (headSubsystemRef.current) {
        headSubsystemRef.current.style.transform = `
          perspective(1200px)
          translate3d(${headState.tx.toFixed(2)}px, ${headState.ty.toFixed(2)}px, 0px)
          rotateY(${headState.yaw.toFixed(2)}deg)
          rotateX(${headState.pitch.toFixed(2)}deg)
          rotateZ(${headState.roll.toFixed(2)}deg)
        `;
      }
    };

    animate(performance.now());

    return () => {
      window.removeEventListener('pointermove', handlePointerMove);
      window.removeEventListener('mousemove', handlePointerMove);
      window.removeEventListener('touchmove', handleTouchMove);
      window.removeEventListener('touchstart', handleTouchMove);
      cancelAnimationFrame(animFrameId);
      clearTimeout(blinkTimeout);
      clearInterval(saccadeInterval);
    };
  }, []);

  return (
    <div className={`${styles.mascotContainer} ${className}`}>
      <img src="/Body 1.png" alt="Body Base" className={styles.bodyAsset} />

      <div ref={headSubsystemRef} className={styles.headSubsystem}>
        <img src="/Head 1.png" alt="Head Asset" className={styles.headAsset} />
        <img
          ref={layerEyesRef}
          src="/eye balls.png"
          alt="Eye Balls"
          className={`${styles.eyesAsset} ${isBlinking ? styles.blinking : ''}`}
        />

        <div ref={socketLeftRef} className={`${styles.eyeSocketBounds} ${styles.socketLeft}`} />
        <div ref={socketRightRef} className={`${styles.eyeSocketBounds} ${styles.socketRight}`} />
      </div>
    </div>
  );
};

export default KangarooMascot;
