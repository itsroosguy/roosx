/**
 * Roos StudioX® Ultra-Premium Eye-Tracking Engine
 * Features: Saccadic Micro-Jitters, Spring Physics with Overshoot, Pupil Dilation/Contraction,
 * Organic Blinking Engine, 3D Head Yaw/Pitch/Roll Parallax, 60 FPS GPU Performance.
 */

document.addEventListener('DOMContentLoaded', () => {
  // DOM Elements
  const headSubsystem = document.getElementById('head-subsystem');
  const irisLeft = document.getElementById('iris-left');
  const irisRight = document.getElementById('iris-right');
  const pupilLeft = document.getElementById('pupil-left');
  const pupilRight = document.getElementById('pupil-right');
  const eyelidsTop = document.querySelectorAll('.eyelid-top');
  const eyelidsBottom = document.querySelectorAll('.eyelid-bottom');

  // Pointer Coordinates & Targets
  const pointer = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
  const targetNorm = { x: 0, y: 0 };
  const currentNorm = { x: 0, y: 0 };

  // Eyeball Physics Constants
  const MAX_EYE_OFFSET = 12.0; // Max offset within white socket
  const LERP_SPEED_HEAD = 0.07;
  const LERP_SPEED_EYES = 0.14;

  // Eye Offset State with Velocity Overshoot
  const eyesState = {
    x: 0,
    y: 0,
    vx: 0,
    vy: 0,
    saccadeX: 0,
    saccadeY: 0,
    pupilScale: 1.0,
  };

  // 3D Head Physics Constants
  const maxHeadYaw = 10.0;     // ±10° left/right
  const maxHeadPitch = 7.0;    // ±7° up/down
  const maxHeadRoll = 3.0;     // ±3° ear tilt
  const maxHeadTx = 10;        // ±10px translation X
  const maxHeadTy = 6;         // ±6px translation Y

  let headState = { yaw: 0, pitch: 0, roll: 0, tx: 0, ty: 0 };

  // Idle Saccades Micro-Jitter Generator
  let saccadeTimer = 0;
  function triggerMicroSaccade() {
    // Subtle human eye micro-adjustments
    eyesState.saccadeX = (Math.random() - 0.5) * 2.5;
    eyesState.saccadeY = (Math.random() - 0.5) * 2.5;
  }

  setInterval(() => {
    if (Math.random() > 0.4) {
      triggerMicroSaccade();
    }
  }, 1800);

  // Organic Random Blinking Engine
  function scheduleNextBlink() {
    const nextBlinkDelay = Math.random() * 4000 + 3200; // 3.2s to 7.2s
    setTimeout(() => {
      triggerBlink();
      scheduleNextBlink();
    }, nextBlinkDelay);
  }

  function triggerBlink() {
    eyelidsTop.forEach((el) => el.classList.add('blinking'));
    eyelidsBottom.forEach((el) => el.classList.add('blinking'));

    setTimeout(() => {
      eyelidsTop.forEach((el) => el.classList.remove('blinking'));
      eyelidsBottom.forEach((el) => el.classList.remove('blinking'));
    }, 140); // 140ms human blink duration
  }

  scheduleNextBlink();

  // Pointer Event Listeners
  function handlePointerMove(e) {
    const clientX = e.touches ? e.touches[0].clientX : e.clientX;
    const clientY = e.touches ? e.touches[0].clientY : e.clientY;

    pointer.x = clientX;
    pointer.y = clientY;

    targetNorm.x = (clientX / window.innerWidth) * 2 - 1;
    targetNorm.y = -(clientY / window.innerHeight) * 2 + 1;
  }

  window.addEventListener('mousemove', handlePointerMove);
  window.addEventListener('touchmove', handlePointerMove);

  // Handle Pointer Leave Viewport (Return to Soft Resting Position)
  window.addEventListener('mouseleave', () => {
    targetNorm.x = 0;
    targetNorm.y = 0;
  });

  // Calculate Eyeball Vector with Focus Contraction
  function calculateEyeOffsets() {
    if (!headSubsystem) return { x: 0, y: 0, focusScale: 1.0 };

    const rect = headSubsystem.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    const dx = pointer.x - centerX;
    const dy = pointer.y - centerY;
    const dist = Math.sqrt(dx * dx + dy * dy);

    if (dist === 0) return { x: 0, y: 0, focusScale: 1.0 };

    const angle = Math.atan2(dy, dx);
    const clampedDist = Math.min(dist * 0.08, MAX_EYE_OFFSET);

    // Pupil Focus Contraction (pupils contract when cursor gets close)
    const focusScale = Math.max(0.82, Math.min(1.15, dist / 350));

    return {
      x: Math.cos(angle) * clampedDist,
      y: Math.sin(angle) * clampedDist,
      focusScale,
    };
  }

  // 60 FPS GPU Accelerated Animation Engine
  let startTime = performance.now();

  function animate(now) {
    requestAnimationFrame(animate);

    const time = (now - startTime) * 0.001;

    // 1. Lerp Normalized Pointer Coordinates
    currentNorm.x += (targetNorm.x - currentNorm.x) * LERP_SPEED_HEAD;
    currentNorm.y += (targetNorm.y - currentNorm.y) * LERP_SPEED_HEAD;

    // 2. Calculate Eyeball Vector + Spring Physics + Saccades
    const targetEye = calculateEyeOffsets();
    const desiredX = targetEye.x + eyesState.saccadeX;
    const desiredY = targetEye.y + eyesState.saccadeY;

    // Spring damping & velocity overshoot
    const ax = (desiredX - eyesState.x) * 0.2;
    const ay = (desiredY - eyesState.y) * 0.2;
    eyesState.vx = (eyesState.vx + ax) * 0.78;
    eyesState.vy = (eyesState.vy + ay) * 0.78;

    eyesState.x += eyesState.vx;
    eyesState.y += eyesState.vy;
    eyesState.pupilScale += (targetEye.focusScale - eyesState.pupilScale) * 0.1;

    // Decay saccade micro-jitter
    eyesState.saccadeX *= 0.92;
    eyesState.saccadeY *= 0.92;

    // Render Irises Translation
    if (irisLeft && irisRight) {
      const transformStr = `translate3d(${eyesState.x.toFixed(2)}px, ${eyesState.y.toFixed(2)}px, 0px)`;
      irisLeft.style.transform = transformStr;
      irisRight.style.transform = transformStr;
    }

    // Render Pupil Contraction / Dilation
    if (pupilLeft && pupilRight) {
      const pupilTransformStr = `scale(${eyesState.pupilScale.toFixed(3)})`;
      pupilLeft.style.transform = pupilTransformStr;
      pupilRight.style.transform = pupilTransformStr;
    }

    // 3. 3D Head Yaw/Pitch/Roll + Sub-pixel Ambient Breathing Sine Wave
    const breathingY = Math.sin(time * 2.2) * 1.5; // Ambient 0.35Hz breathing

    const targetYaw = currentNorm.x * maxHeadYaw;
    const targetPitch = -currentNorm.y * maxHeadPitch;
    const targetRoll = currentNorm.x * maxHeadRoll;
    const targetTx = currentNorm.x * maxHeadTx;
    const targetTy = -currentNorm.y * maxHeadTy + breathingY;

    headState.yaw += (targetYaw - headState.yaw) * LERP_SPEED_HEAD;
    headState.pitch += (targetPitch - headState.pitch) * LERP_SPEED_HEAD;
    headState.roll += (targetRoll - headState.roll) * LERP_SPEED_HEAD;
    headState.tx += (targetTx - headState.tx) * LERP_SPEED_HEAD;
    headState.ty += (targetTy - headState.ty) * LERP_SPEED_HEAD;

    if (headSubsystem) {
      headSubsystem.style.transform = `
        perspective(1200px)
        translate3d(${headState.tx.toFixed(2)}px, ${headState.ty.toFixed(2)}px, 0px)
        rotateY(${headState.yaw.toFixed(2)}deg)
        rotateX(${headState.pitch.toFixed(2)}deg)
        rotateZ(${headState.roll.toFixed(2)}deg)
      `;
    }
  }

  animate(performance.now());
});
