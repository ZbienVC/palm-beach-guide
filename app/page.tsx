"use client";

import React, { useState, useCallback } from "react";
import {
  MapPin, Car, Waves, Home, CalendarCheck, MessageCircle,
  Wifi, Clock, Copy, Check, Share2, UtensilsCrossed,
  Sunset, Sparkles, Heart, Info, Camera
} from "lucide-react";
import { guide } from "@/data/guide";
import { SectionHeader } from "@/components/SectionHeader";
import { RestaurantCard } from "@/components/RestaurantCard";
import { ActivityCard, AttractionCard, NightlifeCard, GemCard, ThoughtCard } from "@/components/Cards";
import { PhotoGallery } from "@/components/PhotoGallery";

// ─── Icon map for quick actions ───────────────────────────────────────────────

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const ICON_MAP: Record<string, React.ComponentType<any>> = {
  MapPin, Car, Waves, Home, CalendarCheck, MessageCircle,
};

// ─── Category filter order ────────────────────────────────────────────────────

const CATEGORY_ORDER = [
  "Best Overall",
  "Nice Dinner / Date Night",
  "Casual / Easy",
  "Breakfast / Coffee",
  "Drinks / Cocktails",
  "Dessert / Sweet Treats",
];

// ─── Section nav config ───────────────────────────────────────────────────────

const NAV_SECTIONS = [
  { id: "photos", label: "Photos", icon: Camera },
  { id: "restaurants", label: "Food", icon: UtensilsCrossed },
  { id: "things-to-do", label: "Do", icon: Waves },
  { id: "nightlife", label: "Night", icon: Sunset },
  { id: "hidden-gems", label: "Gems", icon: Sparkles },
  { id: "thoughts", label: "Host", icon: Heart },
  { id: "house-info", label: "House", icon: Home },
];

// ─── Quick Actions ────────────────────────────────────────────────────────────

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
              className={`${action.accent ?? "bg-slate-700"} rounded-2xl p-4 flex flex-col items-center justify-center gap-2 text-white active:scale-95 transition-all min-h-[76px] shadow-action`}
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

// ─── Restaurants section ──────────────────────────────────────────────────────

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
      <div className="flex gap-2 overflow-x-auto pb-2 mb-5 -mx-4 px-4 no-scrollbar">
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
              <span className={`ml-1 text-[10px] ${activeCategory === cat ? "text-slate-300" : "text-slate-400"}`}>
                {count}
              </span>
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
      <SectionHeader label="Guest essentials" title="House Info" subtitle="Everything you need for a smooth stay." />
      <div className="space-y-4">
        {/* Property address */}
        <a
          href={guide.property.mapsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-4 bg-white rounded-2xl p-5 shadow-sm border border-sand-100 active:bg-sand-50 transition-colors"
        >
          <div className="w-10 h-10 rounded-xl bg-ocean-50 flex items-center justify-center flex-shrink-0">
            <MapPin size={18} className="text-ocean-500" />
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-xs font-semibold text-slate-400 uppercase tracking-wide mb-0.5">Your address</p>
            <p className="text-sm font-semibold text-slate-800">{guide.property.address}</p>
            <p className="text-xs text-slate-500">{guide.property.city}</p>
          </div>
          <span className="text-xs text-ocean-500 font-semibold flex-shrink-0">Directions →</span>
        </a>

        {/* WiFi with copy */}
        <div className="bg-white rounded-2xl p-5 shadow-sm border border-sand-100">
          <div className="flex items-center gap-2 mb-3">
            <Wifi size={16} className="text-ocean-500" />
            <span className="font-semibold text-sm text-slate-700">Wi-Fi</span>
          </div>
          <div className="flex items-center gap-3 bg-sand-50 rounded-xl p-3.5">
            <div className="flex-1 min-w-0">
              <p className="text-[10px] text-slate-400 uppercase font-semibold mb-0.5">Network</p>
              <p className="text-sm font-mono font-semibold text-slate-800 truncate">{h.wifi.name}</p>
            </div>
            <div className="h-8 w-px bg-sand-200 flex-shrink-0" />
            <div className="flex-1 min-w-0">
              <p className="text-[10px] text-slate-400 uppercase font-semibold mb-0.5">Password</p>
              <p className="text-sm font-mono font-semibold text-slate-800 truncate">{h.wifi.password}</p>
            </div>
            <button
              onClick={copyWifi}
              className={`flex-shrink-0 w-9 h-9 rounded-xl flex items-center justify-center transition-all ${
                wifiCopied
                  ? "bg-emerald-100 text-emerald-600"
                  : "bg-ocean-100 text-ocean-600 active:bg-ocean-200"
              }`}
              aria-label="Copy WiFi password"
            >
              {wifiCopied ? <Check size={16} /> : <Copy size={16} />}
            </button>
          </div>
          {wifiCopied && (
            <p className="text-xs text-emerald-600 font-medium text-center mt-2">Password copied!</p>
          )}
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
          <div className="flex items-center gap-2 mb-3">
            <Info size={15} className="text-amber-600" />
            <p className="text-xs font-bold uppercase tracking-wide text-amber-600">Important notes</p>
          </div>
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
        <a
          href={`sms:${h.contactHost.match(/\(?\d[\d\s\-().+]{7,}/)?.[0] ?? ""}`}
          className="block bg-slate-900 rounded-2xl p-5 text-white active:opacity-90 transition-opacity"
        >
          <div className="flex items-center gap-2 mb-2">
            <MessageCircle size={16} className="text-ocean-300" />
            <span className="font-semibold text-sm">Contact Host</span>
          </div>
          <p className="text-sm text-slate-300 mb-3">{h.contactHost}</p>
          <p className="text-xs text-slate-500 border-t border-slate-700 pt-3">{h.emergency}</p>
        </a>
      </div>
    </section>
  );
}

// ─── Sticky bottom nav ────────────────────────────────────────────────────────

function BottomNav() {
  const [active, setActive] = React.useState("restaurants");
  const scrollTo = (id: string) => {
    setActive(id);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 max-w-lg mx-auto">
      <div className="bg-white/95 backdrop-blur-md border-t border-slate-100 px-2 pb-safe-bottom">
        <div className="flex">
          {NAV_SECTIONS.map(({ id, label, icon: Icon }) => (
            <button
              key={id}
              onClick={() => scrollTo(id)}
              className={`flex-1 flex flex-col items-center justify-center py-2 gap-0.5 transition-colors ${active === id ? "text-ocean-500" : "text-slate-400"}`}
            >
              <Icon size={18} />
              <span className="text-[10px] font-semibold">{label}</span>
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
}

// ─── Share button ─────────────────────────────────────────────────────────────

function ShareButton() {
  const [shared, setShared] = useState(false);

  const handleShare = async () => {
    if (typeof navigator !== "undefined" && navigator.share) {
      try {
        await navigator.share({
          title: "Palm Beach Local Guide",
          text: "Check out this curated Palm Beach guide!",
          url: window.location.href,
        });
      } catch { /* cancelled */ }
    } else if (navigator.clipboard) {
      await navigator.clipboard.writeText(window.location.href);
      setShared(true);
      setTimeout(() => setShared(false), 2000);
    }
  };

  return (
    <button
      onClick={handleShare}
      className="flex items-center gap-1.5 px-4 py-2 rounded-full bg-white/20 text-white text-xs font-semibold backdrop-blur-sm active:bg-white/30 transition-all"
    >
      {shared ? <Check size={13} /> : <Share2 size={13} />}
      {shared ? "Copied!" : "Share guide"}
    </button>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function Page() {
  return (
    <>
      <main className="min-h-screen bg-sand-50 max-w-lg mx-auto pb-20">
        {/* HERO */}
        <section className="relative overflow-hidden px-6 pt-14 pb-16 text-white" style={{ background: "linear-gradient(160deg, #155e6a 0%, #1f7d8e 40%, #3d9aaa 80%, #6cb8c2 100%)" }}>
          <div className="absolute -top-20 -right-20 w-64 h-64 rounded-full bg-white/5" />
          <div className="absolute -bottom-10 -left-16 w-48 h-48 rounded-full bg-white/5" />
          <div className="relative z-10">
            <div className="flex items-center justify-between mb-5">
              <a href={guide.property.mapsUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 active:opacity-70 transition-opacity">
                <MapPin size={14} className="text-ocean-200" />
                <span className="text-xs font-semibold tracking-wider text-ocean-200 uppercase">West Palm Beach, FL</span>
              </a>
              <ShareButton />
            </div>
            <h1 className="font-display text-4xl text-white mb-3 leading-tight">
              {guide.hero.greeting}
            </h1>
            <p className="text-ocean-100 text-base leading-relaxed mb-5">
              {guide.hero.tagline}
            </p>
            <p className="text-sm text-ocean-200 leading-relaxed">
              {guide.hero.hostIntro}
            </p>
          </div>
          <div className="absolute bottom-0 left-0 right-0">
            <svg viewBox="0 0 375 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
              <path d="M0 40V20C60 10 120 40 187.5 20C255 0 315 30 375 20V40H0Z" fill="#faf7f2" />
            </svg>
          </div>
        </section>

        <div className="pt-6">
          <QuickActions />

          {/* Photos */}
          <section id="photos" className="px-4 mb-12">
            <SectionHeader
              label="Take a look"
              title="Photos"
              subtitle="The apartment and the area — tap any photo to view full screen."
            />
            <PhotoGallery
              apartmentPhotos={guide.photos.apartmentPhotos}
              areaPhotos={guide.photos.areaPhotos}
            />
          </section>

          <RestaurantsSection />

          <section id="things-to-do" className="px-4 mb-12">
            <SectionHeader label="Get out" title="Best Things To Do" subtitle="From morning walks to afternoon adventures." />
            <div className="space-y-4">
              {guide.thingsToDo.map((item) => <ActivityCard key={item.title} item={item} />)}
            </div>
          </section>

          <section id="attractions" className="px-4 mb-12">
            <SectionHeader label="Discover" title="Attractions" subtitle="Signature destinations worth putting on the list." />
            <div className="space-y-4">
              {guide.attractions.map((item) => <AttractionCard key={item.name} item={item} />)}
            </div>
          </section>

          <section id="nightlife" className="px-4 mb-12">
            <SectionHeader label="Evening" title="Nightlife" subtitle="Where to take the night — from low-key to lively." />
            <div className="space-y-3">
              {guide.nightlife.map((spot) => <NightlifeCard key={spot.name} spot={spot} />)}
            </div>
          </section>

          <section id="hidden-gems" className="px-4 mb-12">
            <SectionHeader label="Insider picks" title="Hidden Gems" subtitle="The places most visitors never find." />
            <div className="space-y-4">
              {guide.hiddenGems.map((gem) => <GemCard key={gem.name} gem={gem} />)}
            </div>
          </section>

          <section id="thoughts" className="px-4 mb-12">
            <SectionHeader label="From your host" title="My Thoughts" subtitle="Personal takes — honest, brief, worth reading." />
            <div className="space-y-4">
              {guide.personalThoughts.map((t) => <ThoughtCard key={t.label} t={t} />)}
            </div>
          </section>

          <HouseInfoSection />

          <footer className="px-4 pb-6 text-center">
            <div className="w-12 h-px bg-sand-200 mx-auto mb-4" />
            <p className="text-xs text-slate-400">Enjoy your stay · Palm Beach, Florida</p>
          </footer>
        </div>
      </main>

      <BottomNav />
    </>
  );
}
