"use client"; // v4.0 2026-04-12 visual/UX polish

import React, { useState, useCallback } from "react";
import {
  MapPin, Car, Wifi, Clock, Copy, Check, Share2,
  Info, Star, Utensils, Compass, MessageCircle,
  UtensilsCrossed, Sunset, Waves
} from "lucide-react";
import { guide } from "@/data/guide";
import { SectionHeader } from "@/components/SectionHeader";
import { RestaurantCard } from "@/components/RestaurantCard";
import { ActivityCard, AttractionCard, NightlifeCard, GemCard, ThoughtCard } from "@/components/Cards";
import { PhotoGallery } from "@/components/PhotoGallery";

// ─── Category filter order ────────────────────────────────────────────────────

const CATEGORY_ORDER = ["Best Overall", "Upscale", "Casual", "Breakfast", "Drinks", "Dessert"];

// ─── Bottom nav ───────────────────────────────────────────────────────────────

const BOTTOM_NAV = [
  { id: "top",         label: "Home",    icon: Waves },
  { id: "restaurants", label: "Food",    icon: Utensils },
  { id: "explore",     label: "Explore", icon: Compass },
  { id: "house-info",  label: "Stay",    icon: Wifi },
];

// ─── Quick Actions ────────────────────────────────────────────────────────────

function QuickActions() {
  return (
    <section className="px-4 mb-6">
      <div className="grid grid-cols-3 gap-2">
        {guide.quickActions.map((action: any) => (
          <a
            key={action.label}
            href={action.href}
            target={action.href.startsWith("http") ? "_blank" : undefined}
            rel={action.href.startsWith("http") ? "noopener noreferrer" : undefined}
            className="bg-white rounded-xl py-3.5 px-2 flex flex-col items-center gap-1.5 shadow-sm border border-sand-100 active:scale-[0.96] transition-transform"
          >
            <span className="text-2xl leading-none">{action.emoji ?? "⭐"}</span>
            <span className="text-[10px] font-bold text-slate-600 text-center leading-tight">{action.label}</span>
          </a>
        ))}
      </div>
    </section>
  );
}

// ─── Host Picks strip ─────────────────────────────────────────────────────────

function HostPicks() {
  const picks = guide.restaurants
    .filter((r: any) => r.hostNote || r.category === "Best Overall")
    .slice(0, 4);

  // Map restaurant names to their uploaded photos
  const PICK_PHOTOS: Record<string, string> = {
    "Harry\u2019s": "/images/pick-harrys.jpg",
    "El Camino": "/images/pick-elcamino.jpg",
    "Avocado Grill": "/images/pick-avocadogrill.jpg",
    "City Cellar Wine Bar": "/images/pick-citycellar.jpg",
    "Shanghai\u2019d": "/images/pick-harrys.jpg",
  };

  return (
    <section className="mb-8">
      <div className="px-4 flex items-center gap-2 mb-3">
        <Star size={13} className="text-amber-400 fill-amber-400" />
        <span className="text-[10px] font-black uppercase tracking-[0.18em] text-amber-600">Host&rsquo;s Picks</span>
      </div>
      <div className="flex gap-3 overflow-x-auto pl-4 pr-4 pb-1 no-scrollbar">
        {picks.map((r: any) => {
          const photo = PICK_PHOTOS[r.name];
          return (
            <a
              key={r.name}
              href={r.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-shrink-0 w-44 rounded-2xl overflow-hidden shadow-card border border-sand-100 active:scale-[0.97] transition-transform bg-white"
            >
              <div className="h-28 relative overflow-hidden">
                {photo ? (
                  <img src={photo} alt={r.name} className="w-full h-full object-cover" />
                ) : (
                  <div className="w-full h-full bg-gradient-to-br from-ocean-500 to-ocean-700" />
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex flex-col justify-end p-3">
                  <p className="text-white font-semibold text-sm leading-tight">{r.name}</p>
                  {r.area && <p className="text-white/60 text-[10px] mt-0.5">{r.area.split(",")[0]}</p>}
                </div>
              </div>
              <div className="p-3 flex items-center justify-between">
                {r.priceRange
                  ? <span className="text-xs font-bold text-slate-500">{r.priceRange}</span>
                  : <span />
                }
                <span className="text-[10px] text-ocean-500 font-bold flex items-center gap-0.5">
                  <MapPin size={9} />Maps
                </span>
              </div>
            </a>
          );
        })}
      </div>
    </section>
  );
}

// ─── Restaurants ─────────────────────────────────────────────────────────────

function RestaurantsSection() {
  const [activeCategory, setActiveCategory] = useState("Best Overall");
  const filtered = guide.restaurants.filter((r: any) => r.category === activeCategory);

  return (
    <section id="restaurants" className="mb-12">
      <div className="px-4">
        <SectionHeader
          label="Where to eat"
          title="Restaurants"
          subtitle="Handpicked for every occasion."
        />
      </div>
      <div className="flex gap-2 overflow-x-auto pb-2 mb-5 pl-4 pr-4 no-scrollbar">
        {CATEGORY_ORDER.map((cat) => {
          const count = guide.restaurants.filter((r: any) => r.category === cat).length;
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
              <span className={`ml-1 text-[10px] ${activeCategory === cat ? "text-slate-300" : "text-slate-400"}`}>{count}</span>
            </button>
          );
        })}
      </div>
      <div className="px-4 space-y-4">
        {filtered.map((r: any) => <RestaurantCard key={r.name} r={r} />)}
      </div>
    </section>
  );
}

// ─── Explore (tabbed: activities / attractions / nightlife / gems) ─────────────

const EXPLORE_TABS = [
  { id: "activities",  emoji: "🏄", label: "Things To Do" },
  { id: "attractions", emoji: "🏛️", label: "Attractions"  },
  { id: "nightlife",   emoji: "🌙", label: "Nightlife"    },
  { id: "gems",        emoji: "💎", label: "Hidden Gems"  },
] as const;

function ExploreSection() {
  const [tab, setTab] = useState<typeof EXPLORE_TABS[number]["id"]>("activities");

  return (
    <section id="explore" className="mb-12">
      <div className="px-4">
        <SectionHeader label="Get out" title="Explore" subtitle="From sunrise to late night." />
      </div>
      <div className="flex gap-2 overflow-x-auto pb-2 mb-5 pl-4 pr-4 no-scrollbar">
        {EXPLORE_TABS.map((t) => (
          <button
            key={t.id}
            onClick={() => setTab(t.id)}
            className={`flex-shrink-0 text-xs font-semibold px-3.5 py-1.5 rounded-full border transition-all flex items-center gap-1.5 ${
              tab === t.id
                ? "bg-slate-800 text-white border-slate-800"
                : "bg-white text-slate-600 border-slate-200 active:bg-slate-50"
            }`}
          >
            <span>{t.emoji}</span>
            {t.label}
          </button>
        ))}
      </div>
      <div className="px-4 space-y-4">
        {tab === "activities"  && guide.thingsToDo.map((item: any)  => <ActivityCard    key={item.title} item={item} />)}
        {tab === "attractions" && guide.attractions.map((item: any) => <AttractionCard  key={item.name}  item={item} />)}
        {tab === "nightlife"   && guide.nightlife.map((spot: any)   => <NightlifeCard   key={spot.name}  spot={spot} />)}
        {tab === "gems"        && guide.hiddenGems.map((gem: any)   => <GemCard         key={gem.name}   gem={gem}   />)}
      </div>
    </section>
  );
}

// ─── House Info ───────────────────────────────────────────────────────────────

function HouseInfoSection() {
  const { houseInfo: h } = guide;
  const [wifiCopied, setWifiCopied] = useState(false);

  const copyWifi = useCallback(() => {
    if (typeof navigator !== "undefined" && navigator.clipboard) {
      navigator.clipboard.writeText(h.wifi.password).then(() => {
        setWifiCopied(true);
        setTimeout(() => setWifiCopied(false), 2500);
      });
    }
  }, [h.wifi.password]);

  return (
    <section id="house-info" className="px-4 mb-12">
      <SectionHeader label="Guest essentials" title="Your Stay" subtitle="Everything you need for a smooth stay." />
      <div className="space-y-3">

        {/* Address */}
        <a
          href={guide.property.mapsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-4 bg-white rounded-2xl p-4 shadow-sm border border-sand-100 active:bg-sand-50 transition-colors"
        >
          <div className="w-10 h-10 rounded-xl bg-ocean-50 flex items-center justify-center flex-shrink-0">
            <MapPin size={18} className="text-ocean-500" />
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wide mb-0.5">Address</p>
            <p className="text-sm font-semibold text-slate-800">{guide.property.address}{guide.property.unit ? `, ${guide.property.unit}` : ""}</p>
            <p className="text-xs text-slate-400">{guide.property.city}</p>
          </div>
          <span className="text-xs text-ocean-500 font-bold flex-shrink-0">Directions →</span>
        </a>

        {/* WiFi */}
        <div className="bg-white rounded-2xl p-4 shadow-sm border border-sand-100">
          <div className="flex items-center gap-2 mb-3">
            <Wifi size={15} className="text-ocean-500" />
            <span className="font-bold text-sm text-slate-700">Wi-Fi</span>
          </div>
          <div className="flex items-center gap-3 bg-sand-50 rounded-xl p-3">
            <div className="flex-1 min-w-0">
              <p className="text-[10px] text-slate-400 uppercase font-bold mb-0.5">Network</p>
              <p className="text-sm font-mono font-semibold text-slate-800 truncate">{h.wifi.name}</p>
            </div>
            <div className="h-8 w-px bg-sand-200 flex-shrink-0" />
            <div className="flex-1 min-w-0">
              <p className="text-[10px] text-slate-400 uppercase font-bold mb-0.5">Password</p>
              <p className="text-sm font-mono font-semibold text-slate-800 truncate">{h.wifi.password}</p>
            </div>
            <button
              onClick={copyWifi}
              className={`flex-shrink-0 w-9 h-9 rounded-xl flex items-center justify-center transition-all ${
                wifiCopied ? "bg-emerald-100 text-emerald-600" : "bg-ocean-100 text-ocean-600 active:bg-ocean-200"
              }`}
              aria-label="Copy WiFi password"
            >
              {wifiCopied ? <Check size={16} /> : <Copy size={16} />}
            </button>
          </div>
          {wifiCopied && <p className="text-xs text-emerald-600 font-medium text-center mt-2">Copied!</p>}
        </div>

        {/* Parking */}
        <div className="bg-white rounded-2xl p-4 shadow-sm border border-sand-100">
          <div className="flex items-center gap-2 mb-1.5">
            <Car size={15} className="text-slate-500" />
            <span className="font-bold text-sm text-slate-700">Parking</span>
          </div>
          <p className="text-sm text-slate-500 leading-relaxed">{h.parking}</p>
        </div>

        {/* Check-out */}
        <div className="bg-white rounded-2xl p-4 shadow-sm border border-sand-100">
          <div className="flex items-center gap-2 mb-3">
            <Clock size={15} className="text-amber-500" />
            <span className="font-bold text-sm text-slate-700">Check-out: {h.checkoutTime}</span>
          </div>
          <ul className="space-y-1.5">
            {h.checkoutReminders.map((reminder: string, i: number) => (
              <li key={i} className="text-sm text-slate-500 flex items-start gap-2">
                <span className="text-emerald-400 mt-0.5 flex-shrink-0">✓</span>
                {reminder}
              </li>
            ))}
          </ul>
        </div>

        {/* Important notes */}
        <div className="bg-amber-50 rounded-2xl p-4 border border-amber-100">
          <div className="flex items-center gap-2 mb-2.5">
            <Info size={14} className="text-amber-600" />
            <p className="text-[10px] font-black uppercase tracking-widest text-amber-600">Important</p>
          </div>
          <ul className="space-y-2">
            {h.importantNotes.map((note: string, i: number) => (
              <li key={i} className="text-sm text-slate-700 flex items-start gap-2">
                <span className="text-amber-400 flex-shrink-0 mt-0.5">•</span>
                {note}
              </li>
            ))}
          </ul>
        </div>

        {/* Contact host */}
        <a
          href="sms:+19738656437"
          className="block rounded-2xl p-4 text-white active:opacity-90 transition-opacity"
          style={{ background: "linear-gradient(135deg, #1e293b 0%, #0f172a 100%)" }}
        >
          <div className="flex items-center gap-2 mb-1.5">
            <MessageCircle size={15} className="text-ocean-300" />
            <span className="font-bold text-sm">Contact Host</span>
          </div>
          <p className="text-sm text-slate-300">{h.contactHost}</p>
          <p className="text-xs text-slate-500 border-t border-slate-700/50 pt-3 mt-3">{h.emergency}</p>
        </a>

        {/* Host thoughts */}
        <div className="pt-2">
          <p className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 mb-3 px-1">From your host</p>
          <div className="space-y-3">
            {guide.personalThoughts.map((t: any) => <ThoughtCard key={t.label} t={t} />)}
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── Bottom Nav ───────────────────────────────────────────────────────────────

function BottomNav() {
  const [active, setActive] = React.useState("top");

  const scrollTo = (id: string) => {
    if (id === "top") window.scrollTo({ top: 0, behavior: "smooth" });
    else document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
    setActive(id);
  };

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50">
      <div className="bg-white border-t border-slate-100 pb-safe-bottom shadow-[0_-1px_12px_rgba(0,0,0,0.06)]">
        <div className="max-w-lg mx-auto flex">
          {BOTTOM_NAV.map(({ id, label, icon: Icon }) => (
            <button
              key={id}
              onClick={() => scrollTo(id)}
              className={`flex-1 flex flex-col items-center justify-center py-2.5 gap-1 transition-colors ${
                active === id ? "text-ocean-600" : "text-slate-400"
              }`}
            >
              <Icon size={20} strokeWidth={active === id ? 2.5 : 1.8} />
              <span className={`text-[10px] font-bold leading-none ${active === id ? "text-ocean-600" : "text-slate-400"}`}>
                {label}
              </span>
              {active === id && <span className="w-1 h-1 rounded-full bg-ocean-500 mt-0.5" />}
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
}

// ─── Share Button ─────────────────────────────────────────────────────────────

function ShareButton() {
  const [shared, setShared] = useState(false);
  const handleShare = async () => {
    if (typeof navigator !== "undefined" && navigator.share) {
      try { await navigator.share({ title: "Stay West Palm — Local Guide", url: window.location.href }); }
      catch { /* cancelled */ }
    } else if (navigator.clipboard) {
      await navigator.clipboard.writeText(window.location.href);
      setShared(true);
      setTimeout(() => setShared(false), 2000);
    }
  };
  return (
    <button
      onClick={handleShare}
      className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white/15 border border-white/20 text-white text-xs font-semibold active:bg-white/25 transition-all"
    >
      {shared ? <Check size={12} /> : <Share2 size={12} />}
      {shared ? "Copied!" : "Share"}
    </button>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function Page() {
  return (
    <>
      <main className="min-h-screen bg-sand-50 max-w-lg mx-auto" style={{ paddingBottom: "calc(4rem + env(safe-area-inset-bottom, 0px))" }}>
        <div id="top" />

        {/* ── Hero ── */}
        <section
          className="relative overflow-hidden px-6 pt-12 pb-14 text-white"
          style={{ background: "linear-gradient(155deg, #0e4a54 0%, #1f7d8e 45%, #3d9aaa 80%, #6cb8c2 100%)" }}
        >
          {/* Decorative circles */}
          <div className="absolute -top-16 -right-16 w-56 h-56 rounded-full bg-white/5" />
          <div className="absolute top-8 -right-8 w-32 h-32 rounded-full bg-white/5" />
          <div className="absolute -bottom-12 -left-12 w-44 h-44 rounded-full bg-white/5" />

          <div className="relative z-10 text-center">
            <div className="flex items-center justify-between mb-6 text-left">
              <a href={guide.property.mapsUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 active:opacity-70">
                <MapPin size={13} className="text-white/50" />
                <span className="text-xs font-semibold text-white/60 tracking-wider">West Palm Beach, FL</span>
              </a>
              <ShareButton />
            </div>

            <h1 className="font-display text-white mb-2.5 leading-tight" style={{ fontSize: "clamp(2rem, 9vw, 2.5rem)" }}>Welcome to<br />West Palm Beach</h1>
            <p className="text-white/70 text-sm leading-relaxed mb-5">Your curated local guide to restaurants, hidden gems &amp; more</p>

            {/* Content-type tag row */}
            {/* Content-type tag row */}
            <div className="flex gap-1.5 flex-nowrap overflow-x-auto no-scrollbar justify-center">
              {[
                { emoji: "🍽️", label: "Food" },
                { emoji: "🏄", label: "Activities" },
                { emoji: "🌙", label: "Nightlife" },
                { emoji: "🏠", label: "House Info" },
              ].map(({ emoji, label }) => (
                <span key={label} className="flex-shrink-0 flex items-center gap-1 px-2 py-0.5 rounded-full bg-white/10 border border-white/15 text-white/75 text-[11px] font-medium whitespace-nowrap">
                  {emoji} {label}
                </span>
              ))}
            </div>
          </div>

          {/* Wave divider */}
          <div className="absolute bottom-0 left-0 right-0">
            <svg viewBox="0 0 375 32" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full block">
              <path d="M0 32V16C60 6 120 28 187.5 14C255 0 315 22 375 14V32H0Z" fill="#faf7f2" />
            </svg>
          </div>
        </section>

        {/* ── Content ── */}
        <div className="pt-5">
          <QuickActions />
          <HostPicks />

          {/* Photos — slightly warm background band */}
          <div className="bg-sand-100/60 py-10 mb-0">
            <section id="photos" className="px-4">
              <SectionHeader label="Take a look" title="Photos" subtitle="The apartment and the area." />
              <PhotoGallery apartmentPhotos={guide.photos.apartmentPhotos} areaPhotos={guide.photos.areaPhotos} />
            </section>
          </div>

          {/* Restaurants — white */}
          <div className="bg-white py-10">
            <RestaurantsSection />
          </div>

          {/* Explore — sand */}
          <div className="bg-sand-50 py-10">
            <ExploreSection />
          </div>

          {/* Stay — white */}
          <div className="bg-white py-10">
            <HouseInfoSection />
          </div>

          <footer className="bg-sand-50 px-4 py-6 text-center">
            <div className="w-8 h-px bg-sand-300 mx-auto mb-3" />
            <p className="text-xs text-slate-400">Enjoy your stay &middot; Palm Beach, Florida</p>
          </footer>
        </div>
      </main>

      <BottomNav />
    </>
  );
}
