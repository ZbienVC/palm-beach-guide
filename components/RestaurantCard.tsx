// components/RestaurantCard.tsx
"use client";
import { MapPin, Clock } from "lucide-react";
import type { Restaurant } from "@/data/guide";

const CATEGORY_COLORS: Record<string, string> = {
  "Best Overall":  "bg-amber-100 text-amber-700 border-amber-200",
  "Date Night":    "bg-rose-100 text-rose-700 border-rose-200",
  "Casual / Easy": "bg-emerald-100 text-emerald-700 border-emerald-200",
  "Breakfast":     "bg-orange-100 text-orange-700 border-orange-200",
  "Drinks":        "bg-violet-100 text-violet-700 border-violet-200",
  "Dessert":       "bg-pink-100 text-pink-700 border-pink-200",
};

const PRICE_COLORS: Record<string, string> = {
  "$":    "text-emerald-600 bg-emerald-50",
  "$$":   "text-amber-600 bg-amber-50",
  "$$$":  "text-rose-600 bg-rose-50",
  "$$$$": "text-purple-600 bg-purple-50",
};

export function RestaurantCard({ r }: { r: Restaurant }) {
  const pill = CATEGORY_COLORS[r.category] ?? "bg-slate-100 text-slate-600 border-slate-200";

  return (
    <div className="bg-white rounded-2xl shadow-card border border-sand-100/80 overflow-hidden">
      {/* Card header */}
      <div className="px-5 pt-5 pb-4">
        <div className="flex items-start justify-between gap-3">
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-2 mb-2 flex-wrap">
              <span className={`inline-block text-2xs font-black px-2.5 py-1 rounded-full border ${pill}`}>
                {r.category}
              </span>
              {r.priceRange && (
                <span className={`text-2xs font-black px-2 py-0.5 rounded-full ${PRICE_COLORS[r.priceRange] ?? "text-slate-500 bg-slate-50"}`}>
                  {r.priceRange}
                </span>
              )}
            </div>
            <h3 className="font-display text-lg text-slate-800 leading-snug">{r.name}</h3>
          </div>
          {r.mapsUrl && (
            <a
              href={r.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-shrink-0 flex items-center gap-1 text-xs font-semibold text-ocean-500 active:text-ocean-700 transition-colors mt-1"
              aria-label={`Open ${r.name} in Maps`}
            >
              <MapPin size={13} />
              <span>Map</span>
            </a>
          )}
        </div>
        <p className="text-sm text-slate-500 leading-relaxed mt-1.5">{r.description}</p>
      </div>

      {/* Why go - accent block */}
      <div className="mx-5 mb-4 bg-sand-50 rounded-xl px-3.5 py-3 border border-sand-200/60">
        <p className="text-2xs font-black text-sand-500 mb-1 uppercase tracking-widest">Why go</p>
        <p className="text-sm text-slate-700 leading-relaxed">{r.why}</p>
      </div>

      {/* Footer row */}
      <div className="px-5 pb-4 flex flex-wrap gap-x-4 gap-y-1">
        {r.walkMins && (
          <span className="text-xs text-slate-400 flex items-center gap-1.5">
            <Clock size={11} className="text-sand-400" />
            {r.walkMins} min walk
          </span>
        )}
        {r.area && !r.walkMins && (
          <span className="text-xs text-slate-400 flex items-center gap-1.5">
            <MapPin size={11} className="text-sand-400" />
            {r.area}
          </span>
        )}
        {r.reservationTip && (
          <span className="text-xs text-amber-600 font-semibold">
            Reserve: {r.reservationTip}
          </span>
        )}
      </div>

      {/* Host tip - bottom stripe */}
      {r.hostNote && (
        <div className="px-5 py-3 border-t border-sand-100 bg-sand-50/60">
          <p className="text-xs text-slate-500 leading-relaxed">
            <span className="font-bold text-sand-500 not-italic">Host: </span>
            <span className="italic">{r.hostNote}</span>
          </p>
        </div>
      )}
    </div>
  );
}