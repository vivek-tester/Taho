import { useReducedMotion, useScroll, useTransform } from 'motion/react';
import type { MotionValue } from 'motion/react';
import { useRef } from 'react';

export type StageOffset = {
  y?: number;
  x?: number;
  depth?: number;
  rotate?: number;
  scale?: number;
  opacity?: number;
  blur?: number;
};

function hasOffsets(offsets: StageOffset): boolean {
  return (
    (offsets.y ?? 0) !== 0 ||
    (offsets.x ?? 0) !== 0 ||
    (offsets.depth ?? 0) !== 0 ||
    (offsets.rotate ?? 0) !== 0 ||
    (offsets.scale ?? 0) !== 0 ||
    (offsets.opacity ?? 0) !== 0 ||
    (offsets.blur ?? 0) !== 0
  );
}

export function useParallax<T extends HTMLElement>(offsets: StageOffset = {}, distance = 1) {
  const ref = useRef<T>(null);
  const reduced = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] });
  const active = !reduced && hasOffsets(offsets);
  const range = active ? 900 * distance : 0;

  const y = useTransform(scrollYProgress, [0, 0.5, 1], [-(offsets.y ?? 0) * range, 0, (offsets.y ?? 0) * range]);
  const x = useTransform(scrollYProgress, [0, 0.5, 1], [-(offsets.x ?? 0) * range, 0, (offsets.x ?? 0) * range]);
  const opacity = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    [offsets.opacity ? 1 - offsets.opacity : 1, 1, offsets.opacity ? 1 - offsets.opacity : 1],
  );
  const filter = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    [`blur(${(offsets.blur ?? 0) * 10}px)`, 'blur(0px)', `blur(${(offsets.blur ?? 0) * 10}px)`],
  );

  return { ref, y, x, opacity, filter, active, scrollYProgress };
}

export type { MotionValue };
