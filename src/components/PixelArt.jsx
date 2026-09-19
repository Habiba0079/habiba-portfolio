import { memo } from 'react';
import { ICON_RECTS } from '../pixel/icons.js';

// Draws one of the 12 x 12 pixel icons.
function PixelArt({ icon, className }) {
  const rects = ICON_RECTS[icon] ?? [];
  return (
    <svg viewBox="0 0 12 12" className={className} shapeRendering="crispEdges" aria-hidden="true" focusable="false">
      {rects.map((r, i) => (
        <rect key={i} x={r.x} y={r.y} width={r.w} height="1" fill={r.fill} />
      ))}
    </svg>
  );
}

export default memo(PixelArt);
