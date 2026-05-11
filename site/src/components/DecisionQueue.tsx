const lanes = [
  { title: "Required", copy: "Choose the next surface to inspect.", tone: "amber" },
  { title: "Next", copy: "Capture the hero screenshot after build.", tone: "cyan" },
  { title: "Optional", copy: "Refine gallery labels after visual review.", tone: "slate" },
];

export default function DecisionQueue() {
  return (
    <div className="decision-queue" aria-label="Decision Queue exhibit">
      {lanes.map((lane) => (
        <div className={`queue-lane tone-${lane.tone}`} key={lane.title}>
          <span>{lane.title}</span>
          <p>{lane.copy}</p>
        </div>
      ))}
    </div>
  );
}
