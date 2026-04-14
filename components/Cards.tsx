// components/Cards.tsx
import { Clock, MapPin } from "lucide-react";
import type { Activity, Attraction, NightlifeSpot, HiddenGem, PersonalThought } from "@/data/guide";

// ─── Activity Card ────────────────────────────────────────────────────────────

export function ActivityCard({ item }: { item: Activity }) {
  return (
    <a
      href={item.mapsUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="block bg-white rounded-xl px-4 py-3 shadow-sm border border-sand-100/80 active:scale-[0.98] transition-transform"
    >
      <div className="flex items-start justify-between gap-2 mb-1">
        <h3 className="font-semibold text-sm text-slate-800 leading-snug">{item.title}</h3>
        {item.bestTime && (
          <span className="text-[10px] text-slate-400 flex items-center gap-1 flex-shrink-0">
            <Clock size={10} className="text-sand-400" />
            {item.bestTime}
          </span>
        )}
      </div>
      <p className="text-xs text-slate-500 leading-relaxed mb-2 line-clamp-2">{item.description}</p>
      <p className="text-xs text-slate-600 leading-relaxed line-clamp-2">{item.why}</p>
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
      className="block bg-white rounded-xl px-4 py-3 shadow-sm border border-sand-100/80 active:scale-[0.98] transition-transform"
    >
      <h3 className="font-semibold text-sm text-slate-800 leading-snug mb-1">{item.name}</h3>
      <p className="text-xs text-slate-500 leading-relaxed mb-1 line-clamp-2">{item.description}</p>
      <p className="text-xs text-slate-600 leading-relaxed line-clamp-2">{item.why}</p>
      {item.tip && (
        <p className="text-[11px] text-ocean-600 font-semibold mt-2 flex items-start gap-1">
          <span className="flex-shrink-0">💡</span>{item.tip}
        </p>
      )}
    </a>
  );
}

// ─── Nightlife Card ───────────────────────────────────────────────────────────

export function NightlifeCard({ spot }: { spot: NightlifeSpot }) {
  return (
    <a
      href={spot.mapsUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="block rounded-xl px-4 py-3 active:scale-[0.98] transition-transform overflow-hidden"
      style={{ background: "linear-gradient(135deg, #1a1b2e 0%, #0f1824 100%)" }}
    >
      <div className="flex items-start justify-between gap-2">
        <h3 className="font-semibold text-sm text-white leading-snug">{spot.name}</h3>
        {spot.reservationNote && (
          <span className="text-[10px] text-amber-400 font-semibold flex-shrink-0">Reserve</span>
        )}
      </div>
      <p className="text-xs leading-relaxed mt-1 line-clamp-2" style={{ color: "rgba(255,255,255,0.6)" }}>{spot.vibe}</p>
      <p className="text-[10px] mt-1.5" style={{ color: "rgba(255,255,255,0.35)" }}>
        Best for: <span style={{ color: "rgba(255,255,255,0.55)" }}>{spot.bestFor}</span>
      </p>
    </a>
  );
}

// ─── Hidden Gem Card ──────────────────────────────────────────────────────────

export function GemCard({ gem }: { gem: HiddenGem }) {
  const inner = (
    <div
      className="rounded-xl px-4 py-3 border flex items-start gap-3"
      style={{ background: "linear-gradient(135deg, #faf7f2 0%, #f0ece3 100%)", borderColor: "#e8d8bc" }}
    >
      <span className="text-xl flex-shrink-0 mt-0.5">💎</span>
      <div>
        <h3 className="font-semibold text-sm text-slate-800 leading-snug">{gem.name}</h3>
        <p className="text-xs text-slate-500 leading-relaxed mt-0.5 line-clamp-2">{gem.description}</p>
        <p className="text-xs text-slate-600 leading-relaxed mt-1 line-clamp-2">{gem.why}</p>
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
  return <div>{inner}</div>;
}

// ─── Personal Thought Card ────────────────────────────────────────────────────

export function ThoughtCard({ t }: { t: PersonalThought }) {
  const inner = (
    <div className="bg-white rounded-xl shadow-sm border border-sand-100/80 overflow-hidden flex">
      <div className="w-1 flex-shrink-0" style={{ background: "linear-gradient(180deg, #c8a06a, #b58240)" }} />
      <div className="flex-1 px-4 py-3">
        <p className="text-[10px] font-black uppercase tracking-[0.2em] text-sand-400 mb-0.5">{t.label}</p>
        <p className="font-semibold text-sm text-slate-800 leading-snug mb-1">{t.place}</p>
        <p className="text-xs text-slate-500 leading-relaxed italic line-clamp-2">&ldquo;{t.note}&rdquo;</p>
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
  return <div>{inner}</div>;
}
