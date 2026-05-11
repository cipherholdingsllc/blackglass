const pulses = [
  { label: "Active", value: "Focus", tone: "cyan" },
  { label: "Verified", value: "Stable", tone: "green" },
  { label: "Waiting", value: "Review", tone: "amber" },
  { label: "Blocked", value: "Boundary", tone: "red" },
  { label: "Deferred", value: "Quiet", tone: "slate" },
];

export default function SystemPulseStrip() {
  return (
    <div className="pulse-strip" aria-label="System Pulse Strip exhibit">
      {pulses.map((pulse) => (
        <div className={`pulse-item tone-${pulse.tone}`} key={pulse.label}>
          <span className="pulse-dot" aria-hidden="true" />
          <span>{pulse.label}</span>
          <strong>{pulse.value}</strong>
        </div>
      ))}
    </div>
  );
}
