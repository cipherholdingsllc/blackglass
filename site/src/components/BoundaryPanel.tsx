export default function BoundaryPanel() {
  return (
    <div className="boundary-panel">
      <span className="status-chip red">Blocked</span>
      <h4>Boundary Panel</h4>
      <p>This path stops here. Use public-safe synthetic content and remove anything outside the lab boundary.</p>
      <div className="boundary-rule" aria-hidden="true" />
    </div>
  );
}
