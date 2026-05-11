const nodes = [
  { label: "Frame", state: "Done" },
  { label: "Token", state: "Done" },
  { label: "Surface", state: "Done" },
  { label: "Gallery", state: "Now" },
  { label: "Capture", state: "Next" },
  { label: "Host", state: "Next" },
];

export default function ActiveRoadRail() {
  return (
    <ol className="road-rail" aria-label="Active Road Rail exhibit">
      {nodes.map((node) => (
        <li className={`road-node ${node.state.toLowerCase()}`} key={node.label}>
          <span aria-hidden="true" />
          <strong>{node.label}</strong>
          <em>{node.state}</em>
        </li>
      ))}
    </ol>
  );
}
