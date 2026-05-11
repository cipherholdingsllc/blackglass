const nodes = [
  { label: "Context", x: 18, y: 42, tone: "slate" },
  { label: "Signal", x: 48, y: 26, tone: "cyan" },
  { label: "Trust", x: 76, y: 42, tone: "green" },
  { label: "Boundary", x: 42, y: 72, tone: "red" },
  { label: "Abstract", x: 70, y: 72, tone: "purple" },
];

export default function SignalNodeMap() {
  return (
    <div className="node-map" aria-label="Signal Node Map exhibit">
      <svg viewBox="0 0 100 100" role="img" aria-label="Connected synthetic signal nodes">
        <path d="M18 42 L48 26 L76 42 L70 72 L42 72 Z" />
        <path d="M48 26 L42 72 M76 42 L42 72 M18 42 L70 72" />
        {nodes.map((node) => (
          <g key={node.label} className={`svg-node tone-${node.tone}`}>
            <circle cx={node.x} cy={node.y} r="4.5" />
            <text x={node.x} y={node.y - 7}>
              {node.label}
            </text>
          </g>
        ))}
      </svg>
      <p>One active signal is supported by quiet context, trust, and boundary cues.</p>
    </div>
  );
}
