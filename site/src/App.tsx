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
      <Hero />

      <section className="thesis-band" id="thesis">
        <span className="eyebrow">Thesis</span>
        <h2>AI can generate screens. Taste still needs architecture.</h2>
        <p>
          Blackglass turns premium dark interface taste into reusable doctrine, tokens, exhibits,
          and screenshot-ready patterns.
        </p>
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
              <span>{tier.tier}</span>
              <strong>{tier.job}</strong>
              <p>{tier.intensity}</p>
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

      <section className="section">
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

      <section className="anti-slop">
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

      <section className="section gallery-area">
        <div className="section-heading">
          <p className="eyebrow">Screenshot-ready gallery</p>
          <h2>Reserved capture slots</h2>
          <p>Use these slots for rendered screenshots after local visual review.</p>
        </div>
        <div className="screenshot-grid">
          {["Hero", "Exhibit Grid", "Trust Surface", "Boundary Panel"].map((slot) => (
            <div className="screenshot-slot" key={slot}>
              <span>{slot}</span>
              <strong>Capture pending</strong>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </main>
  );
}
