"use client";
import { useEffect, useRef, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

/**
 * Cursor.jsx
 *
 * - Smooth two-layer cursor (inner dot + outer ring) using motion values + springs
 * - Inner dot always centered inside outer ring when idle (we use translate(-50%,-50%) centering)
 * - Click pulse (ripples) use same yellow neon color as dot & ring
 * - Hover detection (elements opt-in via: a, button, .cursor-hover, [data-cursor="pointer"])
 * - Hides automatically on touch devices
 *
 * Drop into /components and render in your root layout (app/layout.jsx or _app.js)
 */

export default function Cursor() {
  // Detect touch devices and avoid rendering custom cursor there
  const [isTouch, setIsTouch] = useState(false);
  useEffect(() => {
    setIsTouch(typeof window !== "undefined" && "ontouchstart" in window);
  }, []);

  // Theme / sizes (tweak if needed)
  const DOT_COLOR = "rgba(250,204,21,1)"; // #facc15
  const DOT_GLOW = "rgba(250,204,21,0.95)";
  const INNER_SIZE = 10;
  const OUTER_BASE = 34;
  const OUTER_HOVER = 56;
  const PULSE_DURATION = 0.64;

  // Raw motion values for pointer position (center coordinates)
  const pointerX = useMotionValue(-9999);
  const pointerY = useMotionValue(-9999);

  // Two springs: inner (fast) and outer (laggy)
  const innerX = useSpring(pointerX, { stiffness: 1500, damping: 90 });
  const innerY = useSpring(pointerY, { stiffness: 1500, damping: 90 });

  const outerX = useSpring(pointerX, { stiffness: 350, damping: 35 });
  const outerY = useSpring(pointerY, { stiffness: 350, damping: 35 });

  // Interaction state
  const [hovered, setHovered] = useState(false);
  const [pressed, setPressed] = useState(false);

  // Pulses state (click ripples)
  const [pulses, setPulses] = useState([]);
  const pulsesRef = useRef([]);
  pulsesRef.current = pulses;

  useEffect(() => {
    if (isTouch) return; // do nothing for touch devices

    // Initialize cursor to center of viewport so it's visually centered on load
    if (typeof window !== "undefined") {
      const cx = Math.round(window.innerWidth / 2);
      const cy = Math.round(window.innerHeight / 2);
      pointerX.set(cx);
      pointerY.set(cy);
    }

    // Check whether element under the pointer should trigger hover mode
    const isHoverTarget = (el) =>
      el && el.closest && !!el.closest("a, button, .cursor-hover, [data-cursor='pointer']");

    // pointer move handler - updates position + hover detection
    const handlePointerMove = (e) => {
      // update raw pointer coords (center coords)
      pointerX.set(e.clientX);
      pointerY.set(e.clientY);

      // Efficient hover detection using elementFromPoint
      try {
        const under = document.elementFromPoint(e.clientX, e.clientY);
        setHovered(Boolean(isHoverTarget(under)));
      } catch {
        // ignore if any cross-origin / weirdness
      }
    };

    const handlePointerDown = (e) => {
      setPressed(true);
      // create a pulse at click location
      const id = Date.now() + Math.random();
      const pulse = { id, x: e.clientX, y: e.clientY };
      setPulses((p) => [...p, pulse]);
      // cleanup after animation duration
      setTimeout(() => {
        setPulses((prev) => prev.filter((pp) => pp.id !== id));
      }, PULSE_DURATION * 1000 + 100);
    };
    const handlePointerUp = () => setPressed(false);

    const handleLeave = () => {
      // move off-screen when leaving window to mimic hiding
      pointerX.set(-9999);
      pointerY.set(-9999);
    };

    window.addEventListener("pointermove", handlePointerMove, { passive: true });
    window.addEventListener("pointerdown", handlePointerDown);
    window.addEventListener("pointerup", handlePointerUp);
    window.addEventListener("mouseleave", handleLeave);
    window.addEventListener("blur", handleLeave);

    return () => {
      window.removeEventListener("pointermove", handlePointerMove);
      window.removeEventListener("pointerdown", handlePointerDown);
      window.removeEventListener("pointerup", handlePointerUp);
      window.removeEventListener("mouseleave", handleLeave);
      window.removeEventListener("blur", handleLeave);
    };
  }, [isTouch, pointerX, pointerY]);

  if (isTouch) return null;

  // Derived sizes / scales
  const outerSize = hovered ? OUTER_HOVER : OUTER_BASE;
  const outerScale = pressed ? 0.86 : hovered ? 1.04 : 1;
  const innerScale = pressed ? 0.72 : 1;

  return (
    <>
      {/* Outer ring (lagging) */}
      <motion.div
        aria-hidden
        style={{
          x: outerX,
          y: outerY,
        }}
        className="pointer-events-none fixed left-0 top-0 z-[9999] will-change-transform"
        animate={{ scale: outerScale }}
        transition={{ type: "spring", stiffness: 400, damping: 36 }}
      >
        <div
          style={{
            width: outerSize,
            height: outerSize,
            borderRadius: "9999px",
            transform: "translate(-50%, -50%)", // center the circle at (x,y)
            border: `2px solid ${DOT_GLOW}`,
            boxShadow: `0 8px 36px rgba(250,204,21,0.12), 0 2px 10px rgba(250,204,21,0.06)`,
            backdropFilter: "blur(6px)",
            mixBlendMode: "screen",
            background: "transparent",
          }}
        />
      </motion.div>

      {/* Inner dot (fast) */}
      <motion.div
        aria-hidden
        style={{
          x: innerX,
          y: innerY,
        }}
        className="pointer-events-none fixed left-0 top-0 z-[10000] will-change-transform"
        animate={{ scale: innerScale }}
        transition={{ type: "spring", stiffness: 1000, damping: 80 }}
      >
        <div
          style={{
            width: INNER_SIZE,
            height: INNER_SIZE,
            borderRadius: 9999,
            transform: "translate(-50%, -50%)",
            background: DOT_COLOR,
            boxShadow: `0 0 12px rgba(250,204,21,0.95), 0 4px 30px rgba(123,58,237,0.06)`,
            border: "1px solid rgba(255,255,255,0.05)",
            willChange: "transform, opacity",
          }}
        />
      </motion.div>

      {/* Click pulses (ripples) - same color as dot & ring */}
      {pulses.map((p) => (
        <motion.div
          key={p.id}
          aria-hidden
          initial={{ opacity: 0.7, scale: 0.6 }}
          animate={{ opacity: 0, scale: 2.2 }}
          transition={{ duration: PULSE_DURATION, ease: "easeOut" }}
          onAnimationComplete={() => {
            // ensure removal (extra safety)
            setPulses((prev) => prev.filter((pp) => pp.id !== p.id));
          }}
          style={{
            position: "fixed",
            left: 0,
            top: 0,
            x: p.x,
            y: p.y,
            zIndex: 9998,
            pointerEvents: "none",
            transform: "translate(-50%, -50%)",
          }}
        >
          <div
            style={{
              width: OUTER_HOVER,
              height: OUTER_HOVER,
              borderRadius: 9999,
              border: `2px solid ${DOT_GLOW}`,
              background: "transparent",
              boxShadow: `0 6px 30px rgba(250,204,21,0.12)`,
            }}
          />
        </motion.div>
      ))}

      {/* Small "Click" label that appears near outer ring when hovering interactive elements */}
      <motion.div
        aria-hidden
        style={{
          x: outerX,
          y: outerY,
        }}
        className="pointer-events-none fixed left-0 top-0 z-[9997] will-change-transform"
        initial={{ opacity: 0 }}
        animate={{ opacity: hovered ? 1 : 0 }}
        transition={{ duration: 0.14 }}
      >
        <div
          style={{
            transform: "translate(-50%, 42px)",
            padding: "6px 8px",
            borderRadius: 8,
            background: "rgba(255,255,255,0.06)",
            border: "1px solid rgba(255,255,255,0.06)",
            color: "#fff",
            fontSize: 12,
            backdropFilter: "blur(6px)",
            textAlign: "center",
            whiteSpace: "nowrap",
          }}
        >
          Click
        </div>
      </motion.div>
    </>
  );
}
