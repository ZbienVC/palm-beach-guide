// components/ActivityCard.tsx
import { MapPin, Clock } from "lucide-react";
import type { Activity } from "@/data/guide";

export function ActivityCard({ item }: { item: Activity }) {
  return (
    <a
      href={item.mapsUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="block bg-white rounded-2xl p-5 shadow-sm border border-sand-100 active:bg-sand-50 transition-colors"
    >
      <h3 className="font-display text-[17px] text-slate-800 mb-1.5">{item.title}</h3>
      <p className="text-sm text-slate-600 leading-relaxed mb-3">{item.description}</p>
      <div className="bg-ocean-50 rounded-xl p-3 mb-3">
        <p className="text-xs font-semibold text-ocean-600 mb-0.5 uppercase tracking-wide">Why go</p>
        <p className="text-sm text-slate-700 leading-relaxed">{item.why}</p>
      </div>
      {item.bestTime && (
        <span className="text-xs text-slate-400 flex items-center gap-1">
          <Clock size={11} /> Best time: {item.bestTime}
        </span>
      )}
    </a>
  );
}

// components/AttractionCard.tsx
import type { Attraction } from "@/data/guide";

export function AttractionCard({ item }: { item: Attraction }) {
  return (
    <a
      href={item.mapsUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="block bg-white rounded-2xl p-5 shadow-sm border border-sand-100 active:bg-sand-50 transition-colors"
    >
      <h3 className="font-display text-[17px] text-slate-800 mb-1.5">{item.name}</h3>
      <p className="text-sm text-slate-600 leading-relaxed mb-2">{item.description}</p>
      <p className="text-sm text-slate-700 mb-2">{item.why}</p>
      {item.tip && (
        <div className="mt-2 pt-2 border-t border-sand-100">
          <p className="text-xs text-palm-700 font-medium">💡 {item.tip}</p>
        </div>
      )}
    </a>
  );
}

// components/NightlifeCard.tsx
import type { NightlifeSpot } from "@/data/guide";

export function NightlifeCard({ spot }: { spot: NightlifeSpot }) {
  return (
    <a
      href={spot.mapsUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="block bg-slate-900 rounded-2xl p-5 active:bg-slate-800 transition-colors"
    >
      <h3 className="font-display text-[17px] text-white mb-1.5">{spot.name}</h3>
      <p className="text-sm text-slate-300 leading-relaxed mb-2">{spot.vibe}</p>
      <p className="text-xs text-slate-400 mb-2">Best for: <span className="text-slate-300">{spot.bestFor}</span></p>
      {spot.reservationNote && (
        <p className="text-xs text-amber-400">📅 {spot.reservationNote}</p>
      )}
    </a>
  );
}

// components/GemCard.tsx
import type { HiddenGem } from "@/data/guide";

export function GemCard({ gem }: { gem: HiddenGem }) {
  const inner = (
    <div className="bg-gradient-to-br from-palm-50 to-ocean-50 rounded-2xl p-5 border border-palm-100">
      <h3 className="font-display text-[17px] text-slate-800 mb-1.5">{gem.name}</h3>
      <p className="text-sm text-slate-600 leading-relaxed mb-2">{gem.description}</p>
      <div className="bg-white/70 rounded-xl p-3">
        <p className="text-sm text-slate-700 leading-relaxed">{gem.why}</p>
      </div>
    </div>
  );

  if (gem.mapsUrl) {
    return (
      <a href={gem.mapsUrl} target="_blank" rel="noopener noreferrer" className="block active:opacity-80 transition-opacity">
        {inner}
      </a>
    );
  }
  return inner;
}

// components/ThoughtCard.tsx
import type { PersonalThought } from "@/data/guide";

export function ThoughtCard({ t }: { t: PersonalThought }) {
  const inner = (
    <div className="bg-white rounded-2xl p-5 shadow-sm border border-sand-100">
      <p className="text-xs font-bold uppercase tracking-[0.12em] text-sand-400 mb-1">{t.label}</p>
      <p className="font-display text-[17px] text-slate-800 mb-2">{t.place}</p>
      <p className="text-sm text-slate-600 leading-relaxed italic">"{t.note}"</p>
    </div>
  );

  if (t.mapsUrl) {
    return (
      <a href={t.mapsUrl} target="_blank" rel="noopener noreferrer" className="block active:opacity-80 transition-opacity">
        {inner}
      </a>
    );
  }
  return inner;
}
