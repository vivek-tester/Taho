import { motion, useReducedMotion, useScroll, useTransform } from 'motion/react';
import { useRef } from 'react';

export function ProductVisual({ static: isStatic = false }: { static?: boolean } = {}) {
  const ref = useRef<HTMLDivElement>(null);
  const reduced = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] });

  const y = useTransform(scrollYProgress, [0, 1], [40, -40]);
  const rotate = useTransform(scrollYProgress, [0, 1], [2.5, -2.5]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.94, 1, 0.94]);
  const animate = !isStatic && !reduced;

  return (
    <div ref={ref} className="pv-stage" data-reduced={reduced || isStatic ? 'true' : 'false'}>
      <motion.div
        className="pv-depth"
        style={animate ? { y, rotate, scale } : undefined}
      >
        <div className="pv-halo" aria-hidden="true" />
        <div className="pv-device" role="img" aria-label="Taho workbench showing a GET request to api.example.com/users with Bearer auth, headers, and parameters, and a 200 OK JSON response">
          <div className="pv-device-frame">
            <div className="pv-statusbar" aria-hidden="true">
              <span className="pv-dot pv-dot-live" />
              <span className="pv-statusbar-label">TAHO · WORKBENCH</span>
              <span className="pv-statusbar-time">09:41</span>
              <span className="pv-statusbar-batt">86%</span>
            </div>
            <div className="pv-body">
              <div className="pv-method-line">
                <span className="pv-method-chip">GET</span>
                <span className="pv-url">api.example.com/users</span>
                <span className="pv-send">SEND →</span>
              </div>
              <div className="pv-response-line">
                <span className="pv-status-ok">200 OK</span>
                <span className="pv-latency">428 ms</span>
                <span className="pv-ctype">application/json</span>
                <span className="pv-badge-sec">SEC A-</span>
                <span className="pv-badge-tests">3/4</span>
              </div>
              <div className="pv-json">
                <pre className="pv-json-pre">{`{
  "user": {
    "id": 1842,
    "name": "Ada",
    "roles": ["developer"]
  }
}`}</pre>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
