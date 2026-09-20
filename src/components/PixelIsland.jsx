import { ISLAND_RECTS, ISLAND_SIZE } from '../pixel/island.js';

export default function PixelIsland() {
  return (
    <svg
      viewBox={`0 0 ${ISLAND_SIZE.w} ${ISLAND_SIZE.h}`}
      shapeRendering="crispEdges"
      aria-hidden="true"
      focusable="false"
    >
      {ISLAND_RECTS.map((r, i) => (
        <rect key={i} x={r.x} y={r.y} width={r.w} height="1" fill={r.fill} />
      ))}
    </svg>
  );
}
