import React, { useEffect, useRef } from 'react';
import styles from './KangarooMascot.module.css';

interface KangarooMascotProps {
  className?: string;
}

export const KangarooMascot: React.FC<KangarooMascotProps> = ({ className = '' }) => {
  const headSubsystemRef = useRef<HTMLDivElement>(null);
  const layerEyesRef = useRef<HTMLImageElement>(null);
  const socketLeftRef = useRef<HTMLDivElement>(null);
  const socketRightRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const HEAD_LERP = 0.06;
    const EYES_LERP = 0.12;
    const MAX_EYE_RADIUS = 6.0;

    let animFrameId: number;
    let pointer = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
    let normPointer = { x: 0, y: 0 };
    let targetNormPointer = { x: 0, y: 0 };

    let headState = { yaw: 0, pitch: 0, roll: 0, tx: 0, ty: 0 };
    let eyesOffset = { x: 0, y: 0, targetX: 0, targetY: 0 };

    const handlePointerMove = (e: MouseEvent | PointerEvent) => {
      pointer.x = e.clientX;
      pointer.y = e.clientY;

      targetNormPointer.x = (e.clientX / window.innerWidth) * 2 - 1;
      targetNormPointer.y = -(e.clientY / window.innerHeight) * 2 + 1;
    };

    window.addEventListener('pointermove', handlePointerMove);
    window.addEventListener('mousemove', handlePointerMove);

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
      const clampedDist = Math.min(dist * 0.05, MAX_EYE_RADIUS);

      return {
        x: Math.cos(angle) * clampedDist,
        y: Math.sin(angle) * clampedDist,
      };
    };

    const animate = () => {
      animFrameId = requestAnimationFrame(animate);

      normPointer.x += (targetNormPointer.x - normPointer.x) * HEAD_LERP;
      normPointer.y += (targetNormPointer.y - normPointer.y) * HEAD_LERP;

      // Eyeball tracking
      const targetEyes = calculateEyeballClampedVector();
      eyesOffset.targetX = targetEyes.x;
      eyesOffset.targetY = targetEyes.y;

      eyesOffset.x += (eyesOffset.targetX - eyesOffset.x) * EYES_LERP;
      eyesOffset.y += (eyesOffset.targetY - eyesOffset.y) * EYES_LERP;

      if (layerEyesRef.current) {
        layerEyesRef.current.style.transform = `translate3d(${eyesOffset.x.toFixed(2)}px, ${eyesOffset.y.toFixed(2)}px, 0)`;
      }

      // Head 20% responsive motion
      const targetYaw = normPointer.x * 8.0;
      const targetPitch = -normPointer.y * 5.0;
      const targetRoll = normPointer.x * 2.5;
      const targetTx = normPointer.x * 8.0;
      const targetTy = -normPointer.y * 4.0 + 0.5;

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

    animate();

    return () => {
      window.removeEventListener('pointermove', handlePointerMove);
      window.removeEventListener('mousemove', handlePointerMove);
      cancelAnimationFrame(animFrameId);
    };
  }, []);

  return (
    <div className={`${styles.mascotContainer} ${className}`}>
      <img src="/Body 1.png" alt="Body Base" className={styles.bodyAsset} />

      <div ref={headSubsystemRef} className={styles.headSubsystem}>
        <img src="/Head 1.png" alt="Head Asset" className={styles.headAsset} />
        <img ref={layerEyesRef} src="/eye balls.png" alt="Eye Balls" className={styles.eyesAsset} />

        <div ref={socketLeftRef} className={`${styles.eyeSocketBounds} ${styles.socketLeft}`} />
        <div ref={socketRightRef} className={`${styles.eyeSocketBounds} ${styles.socketRight}`} />
      </div>
    </div>
  );
};

export default KangarooMascot;
