import type { Exhibit } from "../data/exhibits";

type ExhibitCardProps = {
  exhibit: Exhibit;
  index: number;
};

export default function ExhibitCard({ exhibit, index }: ExhibitCardProps) {
  return (
    <a className={`exhibit-card accent-${exhibit.accent}`} href={`#${exhibit.id}`}>
      <div className="card-topline">
        <span className="card-index">{String(index + 1).padStart(2, "0")}</span>
        <span className="semantic-chip">{exhibit.accent}</span>
      </div>
      <div className={`mini-preview preview-${exhibit.id}`} aria-hidden="true">
        <span />
        <span />
        <span />
      </div>
      <h3>{exhibit.title}</h3>
      <p>{exhibit.purpose}</p>
      <span className="card-state">Open exhibit</span>
    </a>
  );
}
