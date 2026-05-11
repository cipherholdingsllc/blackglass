import Hero from "./components/Hero";
import ExhibitCard from "./components/ExhibitCard";
import DemoFrame from "./components/DemoFrame";
import CommandDeck from "./components/CommandDeck";
import GlassGateCard from "./components/GlassGateCard";
import SystemPulseStrip from "./components/SystemPulseStrip";
import DecisionQueue from "./components/DecisionQueue";
import ActiveRoadRail from "./components/ActiveRoadRail";
import SignalNodeMap from "./components/SignalNodeMap";
import BlackglassButton from "./components/BlackglassButton";
import TrustSurfaceCard from "./components/TrustSurfaceCard";
import TimelineRail from "./components/TimelineRail";
import BoundaryPanel from "./components/BoundaryPanel";
import TokenSwatch from "./components/TokenSwatch";
import Footer from "./components/Footer";
import { exhibitById, exhibits } from "./data/exhibits";
import { glassTiers, colorTokens } from "./data/tokens";
import { principles, signalGrammar } from "./data/principles";

const navItems = [
  { label: "Hero", href: "#hero" },
  { label: "Thesis", href: "#thesis" },
  { label: "Gallery", href: "#exhibits" },
  { label: "Command Deck", href: "#command-deck" },
  { label: "Signal Map", href: "#signal-node-map" },
  { label: "Tokens", href: "#tokens" },
  { label: "Anti-Slop", href: "#anti-slop" },
  { label: "Capture Slots", href: "#capture-slots" },
];

const whyCards = [
  {
    title: "Signal-heavy software needs hierarchy.",
    copy: "Dense context has to resolve into focus, state, and next motion.",
    tone: "cyan",
  },
  {
    title: "Glass must earn its existence.",
    copy: "Material only stays when it clarifies depth, boundary, or decision.",
    tone: "amber",
  },
  {
    title: "Taste has to survive AI generation.",
    copy: "Tokens, names, and artifacts keep fast screens from drifting.",
    tone: "purple",
  },
];

const captureCards = [
  {
    title: "Hero Screenshot Card",
    copy: "Suggested capture: hero + command deck",
    tone: "cyan",
    type: "hero",
  },
  {
    title: "Exhibit Grid Screenshot Card",
    copy: "Suggested capture: ten named exhibits",
    tone: "purple",
    type: "grid",
  },
  {
    title: "Trust Surface Screenshot Card",
    copy: "Suggested capture: confidence + source cues",
    tone: "green",
    type: "trust",
  },
  {
    title: "Boundary Panel Screenshot Card",
    copy: "Suggested capture: calm blocked state",
    tone: "red",
    type: "boundary",
  },
];

const demoComponents = [
  { id: "command-deck", node: <CommandDeck /> },
  { id: "glass-gate-card", node: <GlassGateCard /> },
  { id: "system-pulse-strip", node: <SystemPulseStrip /> },
  { id: "decision-queue", node: <DecisionQueue /> },
  { id: "active-road-rail", node: <ActiveRoadRail /> },
  { id: "signal-node-map", node: <SignalNodeMap /> },
  { id: "blackglass-button", node: <BlackglassButton /> },
  { id: "trust-surface-card", node: <TrustSurfaceCard /> },
  { id: "timeline-event-rail", node: <TimelineRail /> },
  { id: "boundary-panel", node: <BoundaryPanel /> },
];

export default function App() {
  return (
    <main>
      <nav className="exhibit-nav" aria-label="Blackglass exhibit navigation">
        {navItems.map((item) => (
          <a href={item.href} key={item.href}>
            <span aria-hidden="true" />
            {item.label}
          </a>
        ))}
      </nav>

      <Hero />

      <section className="thesis-band" id="thesis">
        <span className="eyebrow">Thesis</span>
        <h2>AI can generate screens. Taste still needs architecture.</h2>
        <p>
          Blackglass turns premium dark interface taste into reusable doctrine, tokens, exhibits,
          and screenshot-ready patterns.
        </p>
      </section>

      <section className="section why-section" id="why">
        <div className="section-heading compact-heading">
          <p className="eyebrow">Why this exists</p>
          <h2>Visual discipline for dense work.</h2>
        </div>
        <div className="why-grid">
          {whyCards.map((card) => (
            <article className={`why-card tone-${card.tone}`} key={card.title}>
              <div className="why-motif" aria-hidden="true">
                <span />
                <span />
                <span />
              </div>
              <h3>{card.title}</h3>
              <p>{card.copy}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section" id="exhibits">
        <div className="section-heading">
          <p className="eyebrow">Museum gallery</p>
          <h2>Ten named exhibits</h2>
          <p>
            Each exhibit has a job: focus, sequence, trust, boundary, signal, or decision. None of
            the surfaces exist just to look glassy.
          </p>
        </div>
        <div className="exhibit-grid">
          {exhibits.map((exhibit, index) => (
            <ExhibitCard exhibit={exhibit} index={index} key={exhibit.id} />
          ))}
        </div>
      </section>

      <section className="section demo-stack">
        <div className="section-heading">
          <p className="eyebrow">Interactive examples</p>
          <h2>Signal-heavy surfaces, public-safe content</h2>
        </div>
        {demoComponents.map((demo) => (
          <DemoFrame exhibit={exhibitById[demo.id]} key={demo.id}>
            {demo.node}
          </DemoFrame>
        ))}
      </section>

      <section className="section split-section">
        <div>
          <p className="eyebrow">Liquid glass</p>
          <h2>Glass has to do work.</h2>
          <p>
            Use glass to separate hierarchy, focus attention, frame a decision, or clarify a
            boundary. Remove any layer that is only decorative.
          </p>
        </div>
        <div className="tier-grid">
          {glassTiers.map((tier) => (
            <div className={`tier-card tier-${tier.tier.toLowerCase()}`} key={tier.tier}>
              <div className="tier-visual" aria-hidden="true">
                <span />
                <span />
              </div>
              <span>{tier.tier}</span>
              <strong>{tier.purpose}</strong>
              <p>Use: {tier.use}</p>
              <p>Skip: {tier.avoid}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="section">
        <div className="section-heading">
          <p className="eyebrow">Signal grammar</p>
          <h2>Color is semantic, never random.</h2>
        </div>
        <div className="signal-rail">
          {signalGrammar.map((signal) => (
            <div className={`signal-pill tone-${signal.color}`} key={signal.label}>
              <span>{signal.label}</span>
              <strong>{signal.meaning}</strong>
            </div>
          ))}
        </div>
      </section>

      <section className="section split-section">
        <div>
          <p className="eyebrow">Timeline interfaces</p>
          <h2>Sequence beats scattered snapshots.</h2>
          <p>
            The strongest complex interfaces show what changed, where attention sits now, and what
            checkpoint comes next.
          </p>
        </div>
        <TimelineRail />
      </section>

      <section className="section split-section">
        <TrustSurfaceCard />
        <div>
          <p className="eyebrow">Trust surfaces</p>
          <h2>Trust is visible structure.</h2>
          <p>
            Source labels, confidence language, explanation lines, and boundary cues make a surface
            feel reliable without overclaiming.
          </p>
        </div>
      </section>

      <section className="section" id="tokens">
        <div className="section-heading">
          <p className="eyebrow">Tokens</p>
          <h2>Public-safe constraints</h2>
        </div>
        <div className="token-grid">
          {colorTokens.map((token) => (
            <TokenSwatch {...token} key={token.name} />
          ))}
        </div>
      </section>

      <section className="anti-slop" id="anti-slop">
        <div>
          <p className="eyebrow">Anti-slop gate</p>
          <h2>No fake data. No decorative blur. No generic AI gloss.</h2>
        </div>
        <ul>
          {principles.map((principle) => (
            <li key={principle}>{principle}</li>
          ))}
        </ul>
      </section>

      <section className="section gallery-area" id="capture-slots">
        <div className="section-heading">
          <p className="eyebrow">Screenshot-ready gallery</p>
          <h2>Capture-ready surfaces</h2>
          <p>Each card is already composed as a public-safe screenshot target.</p>
        </div>
        <div className="screenshot-grid">
          {captureCards.map((card) => (
            <div className={`screenshot-slot screenshot-${card.type} tone-${card.tone}`} key={card.title}>
              <div className="shot-composition" aria-hidden="true">
                <span />
                <span />
                <span />
                <span />
              </div>
              <span>{card.title}</span>
              <strong>{card.copy}</strong>
            </div>
          ))}
        </div>
      </section>

      <section className="public-band" aria-label="Public boundary">
        <strong>Public lab. Synthetic content. No private product claims.</strong>
        <div>
          <span>Synthetic data</span>
          <span>No backend</span>
          <span>No private context</span>
        </div>
      </section>

      <Footer />
    </main>
  );
}
