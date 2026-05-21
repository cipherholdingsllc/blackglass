type Tone = "teal" | "green" | "amber" | "rust" | "slate";

type Pattern = {
  id: string;
  title: string;
  purpose: string;
  states: string[];
  invariant: string;
  accessibility: string;
  avoid: string;
  tone: Tone;
};

const navItems = [
  { label: "Patterns", href: "#patterns" },
  { label: "Tokens", href: "#tokens" },
  { label: "Glass", href: "#glass" },
  { label: "Quality", href: "#quality" },
];

const patterns: Pattern[] = [
  {
    id: "mobile-screen-shell",
    title: "Mobile Screen Shell",
    purpose: "Safe-area layout, dark base, compact context, and thumb-zone action placement.",
    states: ["loading", "empty", "success", "blocked"],
    invariant: "The primary object and primary action are clear within three seconds.",
    accessibility: "Uses semantic regions, readable contrast, and stable action placement.",
    avoid: "Do not use a web dashboard grid as the first mobile structure.",
    tone: "teal",
  },
  {
    id: "glass-surface-card",
    title: "Glass Surface Card",
    purpose: "Functional material tiering for hierarchy, focus, and boundary.",
    states: ["whisper", "present", "prominent"],
    invariant: "Glass must clarify state or depth; it never exists as decoration.",
    accessibility: "Meaning survives through labels, borders, and contrast when blur or motion is reduced.",
    avoid: "Do not apply glass to every repeated row.",
    tone: "green",
  },
  {
    id: "mobile-action-button",
    title: "Mobile Action Button",
    purpose: "Touch-sized command control for primary, secondary, and quiet actions.",
    states: ["default", "pressed", "disabled", "loading"],
    invariant: "Primary actions are at least 56px tall and stay in the reachable lower screen.",
    accessibility: "Uses native button semantics, visible focus, and text labels.",
    avoid: "Do not use tiny icon-only controls for critical actions.",
    tone: "green",
  },
  {
    id: "capture-control",
    title: "Capture Control",
    purpose: "A 72px prominent input control for high-value capture moments.",
    states: ["idle", "active", "paused", "review", "disabled"],
    invariant: "The control never drops below 72px and every state has a plain label.",
    accessibility: "State is conveyed through label, icon shape, color, and size.",
    avoid: "Do not hide important capture states behind animation alone.",
    tone: "teal",
  },
  {
    id: "timeline-event",
    title: "Timeline Event",
    purpose: "A sequence item with source badge, time, status dots, and detail affordance.",
    states: ["new", "reviewed", "needs context", "archived"],
    invariant: "Every item shows when it happened and where its context came from.",
    accessibility: "Status dots are paired with labels and left-edge structure.",
    avoid: "Do not use for unordered items with no time relationship.",
    tone: "slate",
  },
  {
    id: "bottom-sheet-preview",
    title: "Bottom Sheet Preview",
    purpose: "Context-preserving disclosure for details, edits, and confirmation.",
    states: ["closed", "open", "saving", "error"],
    invariant: "The sheet never hides the parent context or primary escape path.",
    accessibility: "Includes heading, focus trap expectations, and a visible dismiss affordance.",
    avoid: "Do not use a full-screen takeover for small detail review.",
    tone: "amber",
  },
  {
    id: "trust-row",
    title: "Trust Row",
    purpose: "Source, context, confidence, and limit cues before action is requested.",
    states: ["source", "review", "stable", "limited"],
    invariant: "Confidence is never implied without visible context.",
    accessibility: "Source and confidence are text-readable and not color-only.",
    avoid: "Do not use to overstate certainty or hide limits.",
    tone: "green",
  },
  {
    id: "empty-state",
    title: "Empty State",
    purpose: "A calm zero-state with one direct next action.",
    states: ["empty", "first use", "offline", "blocked"],
    invariant: "The state explains what is true now and gives exactly one next step.",
    accessibility: "No fake urgency, no tiny dismiss targets, and no motion requirement.",
    avoid: "Do not shame the user or imply missing activity.",
    tone: "rust",
  },
];

const tokenGroups = [
  { name: "Color", values: ["bg.deep", "bg.card", "action.primary", "signal.early", "status.waiting"] },
  { name: "Tap", values: ["min 44px", "primary 56px", "prominent 72px"] },
  { name: "Motion", values: ["quick 150ms", "base 200ms", "slow 300ms", "slowest 450ms"] },
  { name: "Radius", values: ["sm 4px", "md 8px", "lg 12px", "full 999px"] },
];

const glassTiers = [
  { name: "Whisper", detail: "quiet separation", use: "secondary rows, rails, low-context badges" },
  { name: "Present", detail: "primary material", use: "cards, sheets, focused inputs" },
  { name: "Prominent", detail: "active focus", use: "capture controls, save states, boundaries" },
];

const qualityChecks = [
  "One primary object and one primary action are obvious.",
  "All controls meet the tap target rule.",
  "Glass clarifies hierarchy, focus, boundary, or state.",
  "Color is paired with text, shape, position, or pattern.",
  "Reduced motion preserves the same meaning.",
  "Demo content is synthetic and domain-neutral.",
];

function PhonePreview() {
  return (
    <div className="phone-frame" aria-label="Mobile design preview">
      <div className="phone-speaker" aria-hidden="true" />
      <div className="phone-screen">
        <div className="screen-status">
          <span>09:41</span>
          <span>Ready</span>
        </div>

        <section className="screen-hero" aria-label="Screen shell example">
          <p className="screen-kicker">Workspace</p>
          <h2>Review queue</h2>
          <p>Three items are ready. One needs source context before action.</p>
        </section>

        <button className="capture-control" type="button" aria-label="Start capture">
          <span aria-hidden="true" />
          Capture
        </button>

        <div className="timeline-card">
          <div className="timeline-meta">
            <span className="source-chip">Source</span>
            <span>Today, 8:20</span>
          </div>
          <strong>Draft brief added to the review stack.</strong>
          <div className="status-dots" aria-label="Status: reviewed">
            <span />
            <span />
            <span />
          </div>
        </div>

        <div className="trust-row">
          <span className="trust-dot" aria-hidden="true" />
          <div>
            <strong>Context checked</strong>
            <p>Confidence: medium. Source: synthetic demo.</p>
          </div>
        </div>

        <div className="sheet-preview">
          <div className="sheet-handle" aria-hidden="true" />
          <strong>Bottom sheet</strong>
          <p>Detail appears without losing parent context.</p>
        </div>
      </div>
    </div>
  );
}

function PatternCard({ pattern }: { pattern: Pattern }) {
  const renderDemo = () => {
    switch (pattern.id) {
      case "glass-surface-card":
        return (
          <div className="glass-demo-bg">
            <div className="glass-box-whisper" />
            <div className="glass-box-present" />
            <div className="glass-box-prominent" />
          </div>
        );
      case "mobile-action-button":
        return (
          <div className="demo-bg-deep">
            <button className="button-link primary" style={{ flex: 1 }}>Primary</button>
            <button className="button-link" style={{ flex: 1 }}>Ghost</button>
          </div>
        );
      case "capture-control":
        return (
          <div className="demo-bg-deep centered">
            <button className="capture-control" style={{ width: '72px', borderRadius: '50%', padding: '0' }} aria-label="Capture">
               <span aria-hidden="true" style={{ margin: 0 }} />
            </button>
          </div>
        );
      case "timeline-event":
        return (
          <div className="demo-bg-deep">
            <div className="timeline-card" style={{ width: '100%' }}>
              <div className="timeline-meta">
                <span className="source-chip">Sys</span>
                <span>Just now</span>
              </div>
              <div className="status-dots"><span></span><span></span><span></span></div>
            </div>
          </div>
        );
      case "trust-row":
        return (
          <div className="demo-bg-deep">
            <div className="trust-row" style={{ width: '100%' }}>
              <span className="trust-dot" />
              <div><strong style={{marginTop: 0}}>Verified</strong><p style={{fontSize: '12px', marginBottom: 0}}>Source: API</p></div>
            </div>
          </div>
        );
      case "bottom-sheet-preview":
        return (
          <div className="demo-bg-deep bottom-aligned">
            <div className="sheet-preview" style={{ width: '100%', margin: 0 }}>
              <div className="sheet-handle" />
              <strong style={{fontSize: '14px', marginTop: 0}}>Sheet</strong>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <article className={`pattern-card tone-${pattern.tone}`} id={pattern.id}>
      <div className="pattern-card-top">
        <span className="pattern-id">{pattern.id}</span>
        <span className="tone-mark" aria-hidden="true" />
      </div>
      {renderDemo()}
      <h3>{pattern.title}</h3>
      <p>{pattern.purpose}</p>
      <div className="state-list" aria-label={`${pattern.title} states`}>
        {pattern.states.map((state) => (
          <span key={state}>{state}</span>
        ))}
      </div>
      <dl className="pattern-contract">
        <dt>Invariant</dt>
        <dd>{pattern.invariant}</dd>
        <dt>Accessibility</dt>
        <dd>{pattern.accessibility}</dd>
        <dt>Avoid</dt>
        <dd>{pattern.avoid}</dd>
      </dl>
    </article>
  );
}

export default function App() {
  return (
    <main>
      <header className="topbar">
        <a className="brand" href="#top" aria-label="Blackglass home">
          <span aria-hidden="true" />
          Blackglass
        </a>
        <nav aria-label="Blackglass sections">
          {navItems.map((item) => (
            <a href={item.href} key={item.href}>
              {item.label}
            </a>
          ))}
        </nav>
      </header>

      <section className="hero-section" id="top">
        <div className="hero-copy">
          <p className="eyebrow">Public mobile design reference</p>
          <h1>Calm glass patterns for dense mobile workflows.</h1>
          <p>
            Blackglass teaches touch-first hierarchy, semantic tokens, restrained motion, and
            trust-forward surfaces through a static, synthetic pattern gallery.
          </p>
          <div className="hero-actions" aria-label="Primary links">
            <a className="button-link primary" href="#patterns">
              View patterns
            </a>
            <a className="button-link" href="#quality">
              Quality gate
            </a>
          </div>
        </div>
        <PhonePreview />
      </section>

      <section className="principle-band" aria-label="Blackglass principles">
        <span>Tokens first</span>
        <span>Touch sized</span>
        <span>Glass with a job</span>
        <span>Trust visible</span>
      </section>

      <section className="section" id="patterns">
        <div className="section-heading">
          <p className="eyebrow">Pattern set</p>
          <h2>Mobile jobs, not decoration.</h2>
          <p>
            Each pattern defines its purpose, states, invariant, accessibility expectation, and
            rejection rule.
          </p>
        </div>
        <div className="pattern-grid">
          {patterns.map((pattern) => (
            <PatternCard pattern={pattern} key={pattern.id} />
          ))}
        </div>
      </section>

      <section className="section split-section" id="tokens">
        <div className="section-heading">
          <p className="eyebrow">Tokens</p>
          <h2>Constraints that keep mobile screens from drifting.</h2>
          <p>
            Values are semantic and compact: colors, spacing, radius, motion, typography, tap
            targets, and phone breakpoints.
          </p>
        </div>
        <div className="token-grid">
          {tokenGroups.map((group) => (
            <article className="token-group" key={group.name}>
              <h3>{group.name}</h3>
              {group.values.map((value) => (
                <span key={value}>{value}</span>
              ))}
            </article>
          ))}
        </div>
      </section>

      <section className="section" id="glass">
        <div className="section-heading narrow">
          <p className="eyebrow">Liquid glass</p>
          <h2>Material only stays when it clarifies state.</h2>
        </div>
        <div className="glass-grid">
          {glassTiers.map((tier) => (
            <article className={`glass-tier tier-${tier.name.toLowerCase()}`} key={tier.name}>
              <div className="tier-visual" aria-hidden="true">
                <span />
              </div>
              <p>{tier.name}</p>
              <h3>{tier.detail}</h3>
              <span>{tier.use}</span>
            </article>
          ))}
        </div>
      </section>

      <section className="quality-section" id="quality">
        <div>
          <p className="eyebrow">Quality gate</p>
          <h2>No fake data. No tiny controls. No decorative glass.</h2>
        </div>
        <ul>
          {qualityChecks.map((check, i) => (
            <li key={check} style={{ animationDelay: `${i * 100}ms`, animation: `fadeSlideUp 0.6s ease-out forwards ${i * 100}ms`, opacity: 0 }}>{check}</li>
          ))}
        </ul>
      </section>

      <section className="public-band" aria-label="Public boundary">
        <strong>Static gallery. Synthetic content. Public-safe patterns.</strong>
        <div>
          <span>No backend</span>
          <span>No accounts</span>
          <span>No live data</span>
        </div>
      </section>

      <footer>
        <span>Blackglass</span>
        <span>Mobile interface reference for touch-first, trust-forward design.</span>
      </footer>
    </main>
  );
}
