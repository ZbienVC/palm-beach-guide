// components/RestaurantCard.tsx
"use client";
import { MapPin } from "lucide-react";
import type { Restaurant } from "@/data/guide";

const CATEGORY_COLORS: Record<string, string> = {
  "Best Overall":  "#f59e0b",
  "Upscale":    "#f43f5e",
  "Casual":        "#10b981",
  "Breakfast":     "#f97316",
  "Drinks":        "#8b5cf6",
  "Dessert":       "#ec4899",
};

const PRICE_COLORS: Record<string, string> = {
  "$":    "text-emerald-600 bg-emerald-50",
  "$$":   "text-amber-600 bg-amber-50",
  "$$$":  "text-rose-600 bg-rose-50",
  "$$$$": "text-purple-600 bg-purple-50",
};

export function RestaurantCard({ r }: { r: Restaurant }) {
  const accentColor = CATEGORY_COLORS[r.category] ?? "#94a3b8";

  return (
    <div
      className="bg-white rounded-2xl shadow-card border border-sand-100/80 overflow-hidden"
      style={{ borderLeft: `3px solid ${accentColor}` }}
    >
      {/* Header */}
      <div className="px-5 pt-5 pb-3">
        <div className="flex items-start justify-between gap-3 mb-1">
          <h3 className="font-display text-xl text-slate-800 leading-snug flex-1">{r.name}</h3>
          {r.mapsUrl && (
            <a
              href={r.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-shrink-0 flex items-center gap-1 bg-ocean-50 text-ocean-600 text-[11px] font-bold px-2.5 py-1.5 rounded-full border border-ocean-100 active:bg-ocean-100 transition-colors"
              aria-label={`Open ${r.name} in Maps`}
            >
              <MapPin size={11} />
              Map
            </a>
          )}
        </div>
        {/* Meta row */}
        <div className="flex items-center gap-2 flex-wrap mb-2.5">
          {r.area && (
            <span className="text-[11px] text-slate-400 font-medium">{r.area.split(",")[0]}</span>
          )}
          {r.area && r.priceRange && <span className="text-slate-200">·</span>}
          {r.priceRange && (
            <span className={`text-[11px] font-black px-2 py-0.5 rounded-full ${PRICE_COLORS[r.priceRange] ?? "text-slate-500 bg-slate-50"}`}>
              {r.priceRange}
            </span>
          )}
        </div>
        <p className="text-sm text-slate-500 leading-relaxed">{r.description}</p>
      </div>

      {/* Why go */}
      <div className="mx-5 mb-4 rounded-xl px-3.5 py-3" style={{ backgroundColor: `${accentColor}10`, border: `1px solid ${accentColor}25` }}>
        <p className="text-[10px] font-black uppercase tracking-widest mb-1" style={{ color: accentColor }}>Why go</p>
        <p className="text-sm text-slate-700 leading-relaxed">{r.why}</p>
      </div>

      {/* Reservation + host note */}
      {(r.reservationTip || r.hostNote) && (
        <div className="px-5 pb-4 space-y-2">
          {r.reservationTip && (
            <div className="flex items-start gap-2">
              <span className="text-amber-500 text-sm mt-0.5 flex-shrink-0">📅</span>
              <span className="text-xs text-amber-700 font-semibold leading-snug">{r.reservationTip}</span>
            </div>
          )}
          {r.hostNote && (
            <div className="flex items-start gap-2 border-t border-sand-100 pt-2">
              <span className="text-sand-400 text-sm mt-0.5 flex-shrink-0">💬</span>
              <p className="text-xs text-slate-500 italic leading-snug">{r.hostNote}</p>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
