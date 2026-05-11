export default function TrustSurfaceCard() {
  return (
    <div className="trust-card">
      <div className="trust-header">
        <span className="status-chip green">Verified</span>
        <span className="mono">source: synthetic brief</span>
      </div>
      <h4>Trust Surface</h4>
      <p>
        This surface separates the source cue, confidence language, and next action so the viewer
        can judge the information before moving.
      </p>
      <div className="confidence-meter" aria-label="Confidence: stable">
        <span />
        <span />
        <span />
      </div>
    </div>
  );
}
