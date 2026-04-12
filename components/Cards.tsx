// components/Cards.tsx
// Improved: better visual hierarchy, consistent shadows, warmer colors

import { Clock } from "lucide-react";
import type { Activity, Attraction, NightlifeSpot, HiddenGem, PersonalThought } from "@/data/guide";

// ─── Activity Card ────────────────────────────────────────────────────────────

export function ActivityCard({ item }: { item: Activity }) {
  return (
    <a
      href={item.mapsUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="block bg-white rounded-2xl p-5 shadow-card border border-sand-100/80 active:scale-[0.98] transition-transform"
    >
      <h3 className="font-display text-lg text-slate-800 leading-snug mb-1.5">{item.title}</h3>
      <p className="text-sm text-slate-500 leading-relaxed mb-3">{item.description}</p>
      <div className="bg-ocean-50 rounded-xl px-3.5 py-3 mb-3">
        <p className="text-2xs font-black text-ocean-500 mb-1 uppercase tracking-widest">Why go</p>
        <p className="text-sm text-slate-700 leading-relaxed">{item.why}</p>
      </div>
      {item.bestTime && (
        <span className="text-xs text-slate-400 flex items-center gap-1.5">
          <Clock size={11} className="text-sand-400" />
          Best time: <span className="text-slate-600">{item.bestTime}</span>
        </span>
      )}
    </a>
  );
}

// ─── Attraction Card ──────────────────────────────────────────────────────────

export function AttractionCard({ item }: { item: Attraction }) {
  return (
    <a
      href={item.mapsUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="block bg-white rounded-2xl p-5 shadow-card border border-sand-100/80 active:scale-[0.98] transition-transform"
    >
      <h3 className="font-display text-lg text-slate-800 leading-snug mb-1.5">{item.name}</h3>
      <p className="text-sm text-slate-500 leading-relaxed mb-2">{item.description}</p>
      <p className="text-sm text-slate-700 leading-relaxed">{item.why}</p>
      {item.tip && (
        <div className="mt-3 pt-3 border-t border-sand-100">
          <p className="text-xs text-ocean-600 font-medium">💡 {item.tip}</p>
        </div>
      )}
    </a>
  );
}

// ─── Nightlife Card ───────────────────────────────────────────────────────────
// Deep dusk palette — warmer dark than pure slate-900

export function NightlifeCard({ spot }: { spot: NightlifeSpot }) {
  return (
    <a
      href={spot.mapsUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="block rounded-2xl p-5 active:scale-[0.98] transition-transform"
      style={{ background: "linear-gradient(135deg, #1a1b2e 0%, #0f1824 100%)" }}
    >
      <h3 className="font-display text-lg text-white leading-snug mb-1.5">{spot.name}</h3>
      <p className="text-sm leading-relaxed mb-2" style={{ color: "rgba(255,255,255,0.65)" }}>{spot.vibe}</p>
      <div className="flex items-center justify-between">
        <p className="text-xs" style={{ color: "rgba(255,255,255,0.4)" }}>
          Best for: <span style={{ color: "rgba(255,255,255,0.65)" }}>{spot.bestFor}</span>
        </p>
        {spot.reservationNote && (
          <p className="text-xs text-amber-400 font-medium">📅 Reserve ahead</p>
        )}
      </div>
    </a>
  );
}

// ─── Hidden Gem Card ──────────────────────────────────────────────────────────
// Warm sand gradient — feels discovered/special

export function GemCard({ gem }: { gem: HiddenGem }) {
  const inner = (
    <div
      className="rounded-2xl p-5 border"
      style={{
        background: "linear-gradient(135deg, #faf7f2 0%, #f0ece3 100%)",
        borderColor: "#e8d8bc",
      }}
    >
      <div className="flex items-start gap-3 mb-3">
        <span className="text-xl mt-0.5">💎</span>
        <div>
          <h3 className="font-display text-lg text-slate-800 leading-snug">{gem.name}</h3>
          <p className="text-sm text-slate-500 leading-relaxed mt-0.5">{gem.description}</p>
        </div>
      </div>
      <div className="bg-white/80 rounded-xl px-3.5 py-3 border border-sand-200/60">
        <p className="text-sm text-slate-700 leading-relaxed">{gem.why}</p>
      </div>
    </div>
  );

  if (gem.mapsUrl) {
    return (
      <a href={gem.mapsUrl} target="_blank" rel="noopener noreferrer" className="block active:scale-[0.98] transition-transform">
        {inner}
      </a>
    );
  }
  return <div className="block">{inner}</div>;
}

// ─── Personal Thought Card ────────────────────────────────────────────────────
// Warm white with left accent border — editorial feel

export function ThoughtCard({ t }: { t: PersonalThought }) {
  const inner = (
    <div className="bg-white rounded-2xl shadow-card border border-sand-100/80 overflow-hidden flex">
      <div className="w-1 flex-shrink-0 rounded-l-2xl" style={{ background: "linear-gradient(180deg, #c8a06a, #b58240)" }} />
      <div className="flex-1 p-5">
        <p className="text-2xs font-black uppercase tracking-[0.15em] text-sand-400 mb-1.5">{t.label}</p>
        <p className="font-display text-lg text-slate-800 leading-snug mb-2">{t.place}</p>
        <p className="text-sm text-slate-500 leading-relaxed italic">"{t.note}"</p>
      </div>
    </div>
  );

  if (t.mapsUrl) {
    return (
      <a href={t.mapsUrl} target="_blank" rel="noopener noreferrer" className="block active:scale-[0.98] transition-transform">
        {inner}
      </a>
    );
  }
  return <div className="block">{inner}</div>;
}
