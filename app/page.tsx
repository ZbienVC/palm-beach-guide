"use client";

import { MapPin, Car, Waves, Home, CalendarCheck, MessageCircle, Wifi, Phone, Clock, Star, ChevronDown } from "lucide-react";
import { guide } from "@/data/guide";
import { SectionHeader } from "@/components/SectionHeader";
import { RestaurantCard } from "@/components/RestaurantCard";
import { ActivityCard, AttractionCard, NightlifeCard, GemCard, ThoughtCard } from "@/components/Cards";
import { useState } from "react";

const ICON_MAP: Record<string, React.ComponentType<{ size?: number; className?: string }>> = {
  MapPin, Car, Waves, Home, CalendarCheck, MessageCircle,
};

const CATEGORY_ORDER = [
  "Best Overall",
  "Nice Dinner / Date Night",
  "Casual / Easy",
  "Breakfast / Coffee",
  "Drinks / Cocktails",
  "Dessert / Sweet Treats",
];

function QuickActions() {
  return (
    <section className="px-4 mb-10">
      <div className="grid grid-cols-3 gap-3">
        {guide.quickActions.map((action) => {
          const Icon = ICON_MAP[action.icon];
          return (
            <a
              key={action.label}
              href={action.href}
              className={`${action.accent ?? "bg-slate-700"} rounded-2xl p-4 flex flex-col items-center justify-center gap-2 text-white active:opacity-80 transition-opacity min-h-[76px]`}
            >
              {Icon && <Icon size={20} className="opacity-90" />}
              <span className="text-[11px] font-semibold text-center leading-tight opacity-95">{action.label}</span>
            </a>
          );
        })}
      </div>
    </section>
  );
}

function RestaurantsSection() {
  const [activeCategory, setActiveCategory] = useState<string>("Best Overall");
  const filtered = guide.restaurants.filter((r) => r.category === activeCategory);

  return (
    <section id="restaurants" className="px-4 mb-12">
      <SectionHeader
        label="Where to eat"
        title="Restaurants"
        subtitle="Handpicked for every occasion — from a perfect date night to a quick beach bite."
      />
      {/* Category pills */}
      <div className="flex gap-2 overflow-x-auto pb-2 mb-5 -mx-4 px-4 scrollbar-hide">
        {CATEGORY_ORDER.map((cat) => {
          const count = guide.restaurants.filter((r) => r.category === cat).length;
          if (count === 0) return null;
          return (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`flex-shrink-0 text-xs font-semibold px-3.5 py-1.5 rounded-full border transition-all ${
                activeCategory === cat
                  ? "bg-slate-800 text-white border-slate-800"
                  : "bg-white text-slate-600 border-slate-200 active:bg-slate-50"
              }`}
            >
              {cat}
            </button>
          );
        })}
      </div>
      <div className="space-y-4">
        {filtered.map((r) => <RestaurantCard key={r.name} r={r} />)}
      </div>
    </section>
  );
}

function HouseInfoSection() {
  const { houseInfo: h } = guide;
  return (
    <section id="house-info" className="px-4 mb-12">
      <SectionHeader label="Guest essentials" title="House Info" subtitle="Everything you need for a smooth stay." />
      <div className="space-y-4">
        {/* WiFi */}
        <div className="bg-white rounded-2xl p-5 shadow-sm border border-sand-100">
          <div className="flex items-center gap-2 mb-3">
            <Wifi size={16} className="text-ocean-500" />
            <span className="font-semibold text-sm text-slate-700">Wi-Fi</span>
          </div>
          <div className="grid grid-cols-2 gap-3">
            <div className="bg-sand-50 rounded-xl p-3">
              <p className="text-[10px] text-slate-400 uppercase font-semibold mb-0.5">Network</p>
              <p className="text-sm font-mono font-semibold text-slate-800">{h.wifi.name}</p>
            </div>
            <div className="bg-sand-50 rounded-xl p-3">
              <p className="text-[10px] text-slate-400 uppercase font-semibold mb-0.5">Password</p>
              <p className="text-sm font-mono font-semibold text-slate-800">{h.wifi.password}</p>
            </div>
          </div>
        </div>

        {/* Parking */}
        <div className="bg-white rounded-2xl p-5 shadow-sm border border-sand-100">
          <div className="flex items-center gap-2 mb-2">
            <Car size={16} className="text-slate-500" />
            <span className="font-semibold text-sm text-slate-700">Parking</span>
          </div>
          <p className="text-sm text-slate-600 leading-relaxed">{h.parking}</p>
        </div>

        {/* Check-out */}
        <div className="bg-white rounded-2xl p-5 shadow-sm border border-sand-100">
          <div className="flex items-center gap-2 mb-3">
            <Clock size={16} className="text-amber-500" />
            <span className="font-semibold text-sm text-slate-700">Check-out: {h.checkoutTime}</span>
          </div>
          <ul className="space-y-1.5">
            {h.checkoutReminders.map((r, i) => (
              <li key={i} className="text-sm text-slate-600 flex items-start gap-2">
                <span className="text-palm-400 mt-0.5 flex-shrink-0">✓</span>
                {r}
              </li>
            ))}
          </ul>
        </div>

        {/* Important notes */}
        <div className="bg-amber-50 rounded-2xl p-5 border border-amber-100">
          <p className="text-xs font-bold uppercase tracking-wide text-amber-600 mb-3">Important notes</p>
          <ul className="space-y-2">
            {h.importantNotes.map((n, i) => (
              <li key={i} className="text-sm text-slate-700 flex items-start gap-2">
                <span className="text-amber-500 flex-shrink-0 mt-0.5">•</span>
                {n}
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div className="bg-slate-900 rounded-2xl p-5 text-white">
          <div className="flex items-center gap-2 mb-2">
            <MessageCircle size={16} className="text-ocean-300" />
            <span className="font-semibold text-sm">Contact Host</span>
          </div>
          <p className="text-sm text-slate-300 mb-3">{h.contactHost}</p>
          <p className="text-xs text-slate-500 border-t border-slate-700 pt-3">{h.emergency}</p>
        </div>
      </div>
    </section>
  );
}

export default function Page() {
  return (
    <main className="min-h-screen bg-sand-50 max-w-lg mx-auto">
      {/* ── HERO ── */}
      <section className="relative overflow-hidden bg-gradient-to-b from-ocean-600 via-ocean-500 to-ocean-400 px-6 pt-14 pb-16 text-white">
        {/* Decorative circles */}
        <div className="absolute -top-20 -right-20 w-64 h-64 rounded-full bg-white/5" />
        <div className="absolute -bottom-10 -left-16 w-48 h-48 rounded-full bg-white/5" />
        <div className="relative z-10">
          <div className="flex items-center gap-1.5 mb-5">
            <MapPin size={14} className="text-ocean-200" />
            <span className="text-xs font-semibold tracking-wider text-ocean-200 uppercase">Palm Beach, Florida</span>
          </div>
          <h1 className="font-display text-4xl text-white mb-3 text-balance leading-tight">
            {guide.hero.greeting}
          </h1>
          <p className="text-ocean-100 text-base leading-relaxed mb-5 text-balance">
            {guide.hero.tagline}
          </p>
          <p className="text-sm text-ocean-200 leading-relaxed text-balance">
            {guide.hero.hostIntro}
          </p>
        </div>
        {/* Wave bottom */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 375 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
            <path d="M0 40V20C60 10 120 40 187.5 20C255 0 315 30 375 20V40H0Z" fill="#fdfaf5" />
          </svg>
        </div>
      </section>

      <div className="pt-6">
        {/* Quick Actions */}
        <QuickActions />

        {/* Restaurants */}
        <RestaurantsSection />

        {/* Things To Do */}
        <section id="things-to-do" className="px-4 mb-12">
          <SectionHeader
            label="Get out"
            title="Best Things To Do"
            subtitle="From morning walks to afternoon adventures — the island has more than you think."
          />
          <div className="space-y-4">
            {guide.thingsToDo.map((item) => <ActivityCard key={item.title} item={item} />)}
          </div>
        </section>

        {/* Attractions */}
        <section id="attractions" className="px-4 mb-12">
          <SectionHeader label="Discover" title="Attractions" subtitle="Signature destinations worth putting on the list." />
          <div className="space-y-4">
            {guide.attractions.map((item) => <AttractionCard key={item.name} item={item} />)}
          </div>
        </section>

        {/* Nightlife */}
        <section id="nightlife" className="px-4 mb-12">
          <SectionHeader label="Evening" title="Nightlife" subtitle="Where to take the night — from low-key to lively." />
          <div className="space-y-3">
            {guide.nightlife.map((spot) => <NightlifeCard key={spot.name} spot={spot} />)}
          </div>
        </section>

        {/* Hidden Gems */}
        <section id="hidden-gems" className="px-4 mb-12">
          <SectionHeader
            label="Insider picks"
            title="Hidden Gems"
            subtitle="The places most visitors never find. These are the ones worth knowing."
          />
          <div className="space-y-4">
            {guide.hiddenGems.map((gem) => <GemCard key={gem.name} gem={gem} />)}
          </div>
        </section>

        {/* Personal Thoughts */}
        <section id="thoughts" className="px-4 mb-12">
          <SectionHeader
            label="From your host"
            title="My Thoughts"
            subtitle="Personal takes — honest, brief, and worth reading before you go out."
          />
          <div className="space-y-4">
            {guide.personalThoughts.map((t) => <ThoughtCard key={t.label} t={t} />)}
          </div>
        </section>

        {/* House Info */}
        <HouseInfoSection />

        {/* Footer */}
        <footer className="px-4 pb-12 text-center">
          <div className="w-12 h-px bg-sand-200 mx-auto mb-4" />
          <p className="text-xs text-slate-400">
            Enjoy your stay · Palm Beach, Florida
          </p>
        </footer>
      </div>
    </main>
  );
}
