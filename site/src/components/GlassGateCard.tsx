export default function GlassGateCard() {
  return (
    <div className="glass-gate">
      <div>
        <span className="status-chip amber">Decision waiting</span>
        <h4>Glass Gate</h4>
        <p>One focused surface for the choice that changes the next step.</p>
      </div>
      <div className="gate-lines" aria-hidden="true">
        <span />
        <span />
        <span />
      </div>
      <button type="button" className="glass-button primary">
        Mark reviewed
      </button>
    </div>
  );
}
