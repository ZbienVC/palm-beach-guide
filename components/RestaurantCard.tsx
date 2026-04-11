// components/RestaurantCard.tsx
import { MapPin, ExternalLink } from "lucide-react";
import type { Restaurant } from "@/data/guide";

const CATEGORY_COLORS: Record<string, string> = {
  "Best Overall": "bg-amber-100 text-amber-700",
  "Nice Dinner / Date Night": "bg-rose-100 text-rose-700",
  "Casual / Easy": "bg-emerald-100 text-emerald-700",
  "Breakfast / Coffee": "bg-orange-100 text-orange-700",
  "Drinks / Cocktails": "bg-purple-100 text-purple-700",
  "Dessert / Sweet Treats": "bg-pink-100 text-pink-700",
};

export function RestaurantCard({ r }: { r: Restaurant }) {
  const pill = CATEGORY_COLORS[r.category] ?? "bg-slate-100 text-slate-600";
  return (
    <div className="bg-white rounded-2xl p-5 shadow-sm border border-sand-100">
      <div className="flex items-start justify-between gap-3 mb-3">
        <div className="flex-1 min-w-0">
          <span className={`inline-block text-[10px] font-bold px-2 py-0.5 rounded-full mb-1.5 ${pill}`}>
            {r.category}
          </span>
          <h3 className="font-display text-[17px] text-slate-800 leading-snug">{r.name}</h3>
        </div>
        <a
          href={r.mapsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-shrink-0 w-9 h-9 rounded-xl bg-ocean-50 flex items-center justify-center text-ocean-500 active:bg-ocean-100 transition-colors"
          aria-label={`Open ${r.name} in Maps`}
        >
          <MapPin size={16} />
        </a>
      </div>

      <p className="text-sm text-slate-600 leading-relaxed mb-2">{r.description}</p>

      <div className="bg-sand-50 rounded-xl p-3 mb-3">
        <p className="text-xs font-semibold text-sand-500 mb-0.5 uppercase tracking-wide">Why go</p>
        <p className="text-sm text-slate-700 leading-relaxed">{r.why}</p>
      </div>

      <div className="flex flex-wrap gap-x-4 gap-y-1">
        {r.area && (
          <span className="text-xs text-slate-400 flex items-center gap-1">
            <MapPin size={11} /> {r.area}
          </span>
        )}
        {r.reservationTip && (
          <span className="text-xs text-amber-600 font-medium">📅 {r.reservationTip}</span>
        )}
      </div>

      {r.hostNote && (
        <div className="mt-3 pt-3 border-t border-sand-100">
          <p className="text-xs text-slate-500 italic">
            <span className="font-semibold text-slate-600 not-italic">Host tip: </span>
            {r.hostNote}
          </p>
        </div>
      )}
    </div>
  );
}
