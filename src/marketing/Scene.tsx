import { useRef } from 'react';
import type { CSSProperties, ReactNode } from 'react';
import { motion, useReducedMotion, useScroll, useTransform } from 'motion/react';

export type StageOffset = {
  y?: number;
  x?: number;
  depth?: number;
  rotate?: number;
  scale?: number;
  opacity?: number;
  blur?: number;
};

function hasOffsets(offsets?: StageOffset | null): boolean {
  if (!offsets) return false;
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

export function Scene({ id, kicker, headline, giant, lede, note, offsets, visual, tags, children }: {
  id: string;
  kicker?: string;
  headline: ReactNode;
  giant?: boolean;
  lede?: ReactNode;
  note?: ReactNode;
  offsets?: StageOffset;
  visual?: ReactNode;
  tags?: string[];
  children?: ReactNode;
}) {
  const ref = useRef<HTMLElement>(null);
  const reduced = useReducedMotion();
  const enabled = !reduced && hasOffsets(offsets);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start 0.85', 'end 0.35'],
  });
  const y = useTransform(scrollYProgress, [0, 1], ['24px', '-24px']);
  const rotateX = useTransform(scrollYProgress, [0, 0.5, 1], ['6deg', '0deg', '-6deg']);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.985, 1, 0.985]);
  const visualY = useTransform(scrollYProgress, [0, 1], ['60px', '-60px']);
  const visualScale = useTransform(scrollYProgress, [0, 0.5, 1], [0.96, 1, 0.96]);
  const visualRotateY = useTransform(scrollYProgress, [0, 0.5, 1], ['-8deg', '0deg', '8deg']);
  const visualOpacity = useTransform(scrollYProgress, [0, 0.35, 1], [0.55, 1, 0.85]);
  const pulse = useTransform(scrollYProgress, [0.2, 0.75], [0, 1]);

  const style = {
    '--stage-y': enabled ? y : 0,
    '--stage-rotate-x': enabled ? rotateX : 0,
    '--stage-scale': enabled ? scale : 1,
    '--stage-visual-y': enabled ? visualY : 0,
    '--stage-visual-scale': enabled ? visualScale : 1,
    '--stage-visual-rotate-y': enabled ? visualRotateY : 0,
    '--stage-visual-opacity': enabled ? visualOpacity : 1,
    '--stage-visual-p': enabled ? pulse : 0,
  } as CSSProperties;

  return (
    <motion.section
      id={id}
      ref={ref}
      className="taho-stage"
      style={style}
      data-motion={enabled ? 'true' : 'false'}
    >
      <div className="taho-stage-inner">
        <div className="taho-stage-copy">
          {kicker && <p className="taho-kicker">{kicker}</p>}
          <h2 className={`taho-headline${giant ? ' taho-headline--giant' : ''}`}>{headline}</h2>
          {lede && <p className="taho-lede">{lede}</p>}
          {tags && tags.length > 0 && (
            <p className="taho-tagrow">
              {tags.map((tag) => (
                <span key={tag} className="taho-tag taho-tag--outline">
                  {tag}
                </span>
              ))}
            </p>
          )}
        </div>
        {visual && (
          <motion.div
            className="taho-stage-visual"
            style={{ '--stage-visual-opacity': enabled ? visualOpacity : 1 } as CSSProperties}
          >
            {visual}
          </motion.div>
        )}
        {children}
        {note && <p className="taho-note">{note}</p>}
      </div>
    </motion.section>
  );
}
