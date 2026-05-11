import type { ReactNode } from "react";
import type { Exhibit } from "../data/exhibits";

type DemoFrameProps = {
  exhibit: Exhibit;
  children: ReactNode;
};

export default function DemoFrame({ exhibit, children }: DemoFrameProps) {
  return (
    <article className={`demo-frame accent-${exhibit.accent}`} id={exhibit.id}>
      <div className="demo-copy">
        <p className="eyebrow">{exhibit.title}</p>
        <h3>{exhibit.purpose}</h3>
        <dl>
          <div>
            <dt>Why it exists</dt>
            <dd>{exhibit.why}</dd>
          </div>
          <div>
            <dt>Visual state</dt>
            <dd>{exhibit.state}</dd>
          </div>
          <div>
            <dt>Accessibility note</dt>
            <dd>{exhibit.accessibility}</dd>
          </div>
          <div>
            <dt>Do not use when</dt>
            <dd>{exhibit.avoid}</dd>
          </div>
        </dl>
      </div>
      <div className="demo-stage" aria-label={`${exhibit.title} visual example`}>
        {children}
      </div>
    </article>
  );
}
