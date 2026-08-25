document.addEventListener('DOMContentLoaded', () => {
  // Asset Elements
  const layerBody = document.getElementById('layer-body');
  const headSubsystem = document.getElementById('head-subsystem');
  const layerHead = document.getElementById('layer-head');
  const layerEyes = document.getElementById('layer-eyes');

  const socketLeftBounds = document.getElementById('eye-bounds-left');
  const socketRightBounds = document.getElementById('eye-bounds-right');

  // Physics Easing Constants
  const HEAD_LERP = 0.06; // Head: Subtle, 20% responsive, slightly delayed
  const EYES_LERP = 0.12; // Eyes: More responsive than head movement

  // Pointer Coordinates
  let pointer = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
  let normPointer = { x: 0, y: 0 };
  let targetNormPointer = { x: 0, y: 0 };

  // Head Motion State (Controlled 20% Range: Max ±8°, Max ±8px X, Max ±4px Y)
  let headState = { yaw: 0, pitch: 0, roll: 0, tx: 0, ty: 0 };
  const maxHeadYaw = 8.0;       // Max ±8° rotation left/right
  const maxHeadPitch = 5.0;     // Max ±5° rotation up/down
  const maxHeadRoll = 2.5;     // Max ±2.5° ear tilt
  const maxHeadTranslateX = 8;  // Max ±8px translation X
  const maxHeadTranslateY = 4;  // Max ±4px translation Y

  // Eyeball Clamped Translation State (Strict 6.0px Max Radius: 100% inside white socket!)
  let eyesOffset = { x: 0, y: 0, targetX: 0, targetY: 0 };
  const MAX_EYE_RADIUS = 6.0; // Hard Clamped Boundary: Never leaves white eye area!

  // Pointer Movement Tracking
  function updatePointer(e) {
    pointer.x = e.clientX;
    pointer.y = e.clientY;

    targetNormPointer.x = (e.clientX / window.innerWidth) * 2 - 1;
    targetNormPointer.y = -(e.clientY / window.innerHeight) * 2 + 1;
  }

  window.addEventListener('mousemove', updatePointer);
  window.addEventListener('pointermove', updatePointer);

  // Calculate Eyeball Vector Clamped strictly inside White Eye Socket Radius
  function calculateEyeballClampedVector(pointerPos) {
    if (!socketLeftBounds || !socketRightBounds) return { x: 0, y: 0 };
    
    // Get average center of eye sockets
    const rectL = socketLeftBounds.getBoundingClientRect();
    const rectR = socketRightBounds.getBoundingClientRect();

    const eyesCenterX = (rectL.left + rectR.right) / 2;
    const eyesCenterY = (rectL.top + rectR.bottom) / 2;

    const dx = pointerPos.x - eyesCenterX;
    const dy = pointerPos.y - eyesCenterY;
    const dist = Math.sqrt(dx * dx + dy * dy);

    if (dist === 0) return { x: 0, y: 0 };

    const angle = Math.atan2(dy, dx);
    const clampedDist = Math.min(dist * 0.05, MAX_EYE_RADIUS);

    return {
      x: Math.cos(angle) * clampedDist,
      y: Math.sin(angle) * clampedDist
    };
  }

  // 60FPS Production Animation Loop
  function animate() {
    requestAnimationFrame(animate);

    // 1. Lerp Normalized Pointer
    normPointer.x += (targetNormPointer.x - normPointer.x) * HEAD_LERP;
    normPointer.y += (targetNormPointer.y - normPointer.y) * HEAD_LERP;

    // 2. EYEBALLS CONTINUOUS TRACKING & STRICT HARD BOUNDARY CLAMPING
    const targetEyes = calculateEyeballClampedVector(pointer);
    eyesOffset.targetX = targetEyes.x;
    eyesOffset.targetY = targetEyes.y;

    eyesOffset.x += (eyesOffset.targetX - eyesOffset.x) * EYES_LERP;
    eyesOffset.y += (eyesOffset.targetY - eyesOffset.y) * EYES_LERP;

    if (layerEyes) {
      layerEyes.style.transform = `translate3d(${eyesOffset.x.toFixed(2)}px, ${eyesOffset.y.toFixed(2)}px, 0)`;
    }

    // 3. HEAD 20% RESPONSIVE MOTION (Subtle tilt ±8°, precise 0.5px offset)
    const targetYaw = normPointer.x * maxHeadYaw;
    const targetPitch = -normPointer.y * maxHeadPitch;
    const targetRoll = normPointer.x * maxHeadRoll;
    const targetTx = normPointer.x * maxHeadTranslateX;
    
    // Ty with 0.5px sub-pixel offset
    const targetTy = -normPointer.y * maxHeadTranslateY + 0.5;

    headState.yaw += (targetYaw - headState.yaw) * HEAD_LERP;
    headState.pitch += (targetPitch - headState.pitch) * HEAD_LERP;
    headState.roll += (targetRoll - headState.roll) * HEAD_LERP;
    headState.tx += (targetTx - headState.tx) * HEAD_LERP;
    headState.ty += (targetTy - headState.ty) * HEAD_LERP;

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

  animate();
});
