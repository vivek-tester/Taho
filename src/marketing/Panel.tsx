import type { ReactNode } from 'react';

export function Panel({ title, meta, tone, children }: {
  title: string;
  meta?: ReactNode;
  tone?: 'ok' | 'warn' | 'bad' | 'gold';
  children: ReactNode;
}) {
  return (
    <div className={`tn-panel${tone ? ` tn-panel--${tone}` : ''}`}>
      <div className="tn-panel-head">
        <span className="tn-panel-title">{title}</span>
        {meta && <span className="tn-panel-meta">{meta}</span>}
      </div>
      <div className="tn-panel-body">{children}</div>
    </div>
  );
}
