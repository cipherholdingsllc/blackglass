const nodes = [
  { label: "Context", x: 18, y: 57, tone: "slate", active: false },
  { label: "Signal", x: 48, y: 30, tone: "cyan", active: true },
  { label: "Trust", x: 80, y: 52, tone: "green", active: false },
  { label: "Boundary", x: 36, y: 78, tone: "red", active: false },
  { label: "Abstract", x: 70, y: 78, tone: "purple", active: false },
];

export default function SignalNodeMap() {
  return (
    <div className="node-map" aria-label="Signal Node Map exhibit">
      <svg viewBox="0 0 100 100" role="img" aria-label="Connected synthetic signal nodes">
        <path className="map-primary" d="M18 57 L48 30 L80 52 L70 78 L36 78 Z" />
        <path className="map-secondary" d="M48 30 L36 78 M80 52 L36 78 M18 57 L70 78 M48 30 L70 78" />
        {nodes.map((node) => (
          <g
            key={node.label}
            className={`svg-node tone-${node.tone} ${node.active ? "active" : "quiet"}`}
          >
            <circle cx={node.x} cy={node.y} r={node.active ? "5.6" : "4"} />
            <text x={node.x} y={node.y - (node.active ? 9 : 7)}>
              {node.label}
            </text>
          </g>
        ))}
      </svg>
      <p>One active signal is supported by quiet context, trust, and boundary cues.</p>
    </div>
  );
}
