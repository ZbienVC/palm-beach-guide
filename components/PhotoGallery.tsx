"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { X, ChevronLeft, ChevronRight, Camera, MapPin } from "lucide-react";
import type { Photo } from "@/data/guide";

// ─── Lightbox ─────────────────────────────────────────────────────────────────

function Lightbox({
  photos,
  startIndex,
  onClose,
}: {
  photos: Photo[];
  startIndex: number;
  onClose: () => void;
}) {
  const [index, setIndex] = useState(startIndex);
  const photo = photos[index];

  // Keyboard nav
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") setIndex((i) => Math.max(0, i - 1));
      if (e.key === "ArrowRight") setIndex((i) => Math.min(photos.length - 1, i + 1));
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [photos.length, onClose]);

  // Prevent scroll on body while open
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => { document.body.style.overflow = ""; };
  }, []);

  return (
    <div
      className="fixed inset-0 z-[100] flex flex-col"
      style={{ background: "rgba(0,0,0,0.96)" }}
      onClick={onClose}
    >
      {/* Top bar */}
      <div className="flex items-center justify-between px-4 pt-safe-top py-3 flex-shrink-0" onClick={(e) => e.stopPropagation()}>
        <span className="text-xs text-white/50 font-medium">
          {index + 1} / {photos.length}
        </span>
        <button
          onClick={onClose}
          className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center text-white active:bg-white/20 transition-colors"
          aria-label="Close"
        >
          <X size={18} />
        </button>
      </div>

      {/* Image */}
      <div className="flex-1 relative flex items-center justify-center px-4" onClick={(e) => e.stopPropagation()}>
        <div className="relative w-full max-h-full aspect-[4/3] rounded-2xl overflow-hidden">
          <Image
            src={photo.src}
            alt={photo.alt}
            fill
            className="object-cover"
            sizes="100vw"
            priority
            unoptimized={photo.src.startsWith("http")}
          />
        </div>
      </div>

      {/* Caption + nav */}
      <div className="flex-shrink-0 px-4 py-4 pb-safe-bottom" onClick={(e) => e.stopPropagation()}>
        {photo.caption && (
          <p className="text-white/80 text-sm text-center mb-4">{photo.caption}</p>
        )}
        <div className="flex items-center justify-between gap-4">
          <button
            onClick={() => setIndex((i) => Math.max(0, i - 1))}
            disabled={index === 0}
            className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center text-white disabled:opacity-20 active:bg-white/20 transition-colors"
          >
            <ChevronLeft size={22} />
          </button>
          {/* Dot indicators */}
          <div className="flex gap-1.5 flex-wrap justify-center flex-1">
            {photos.map((_, i) => (
              <button
                key={i}
                onClick={() => setIndex(i)}
                className={`rounded-full transition-all ${i === index ? "w-4 h-1.5 bg-white" : "w-1.5 h-1.5 bg-white/30"}`}
              />
            ))}
          </div>
          <button
            onClick={() => setIndex((i) => Math.min(photos.length - 1, i + 1))}
            disabled={index === photos.length - 1}
            className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center text-white disabled:opacity-20 active:bg-white/20 transition-colors"
          >
            <ChevronRight size={22} />
          </button>
        </div>
      </div>
    </div>
  );
}

// ─── Photo Grid ───────────────────────────────────────────────────────────────

function PhotoGrid({
  photos,
  onTap,
}: {
  photos: Photo[];
  onTap: (index: number) => void;
}) {
  if (photos.length === 0) return null;

  // Featured first photo, then 2-column grid
  const [first, ...rest] = photos;

  return (
    <div className="space-y-2">
      {/* Hero photo */}
      <button
        className="relative w-full aspect-[16/9] rounded-2xl overflow-hidden active:scale-[0.98] transition-transform"
        onClick={() => onTap(0)}
        aria-label={first.alt}
      >
        <Image
          src={first.src}
          alt={first.alt}
          fill
          className="object-cover"
          sizes="100vw"
          unoptimized={first.src.startsWith("http")}
        />
        {first.caption && (
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent px-4 py-3">
            <p className="text-white text-xs font-medium">{first.caption}</p>
          </div>
        )}
        <div className="absolute top-3 right-3 bg-black/40 backdrop-blur-sm rounded-full px-2.5 py-1">
          <p className="text-white text-xs font-semibold">{photos.length} photos</p>
        </div>
      </button>

      {/* Grid of remaining photos */}
      {rest.length > 0 && (
        <div className="grid grid-cols-2 gap-2">
          {rest.slice(0, 4).map((photo, i) => (
            <button
              key={i}
              className="relative aspect-square rounded-xl overflow-hidden active:scale-[0.96] transition-transform"
              onClick={() => onTap(i + 1)}
              aria-label={photo.alt}
            >
              <Image
                src={photo.src}
                alt={photo.alt}
                fill
                className="object-cover"
                sizes="50vw"
                unoptimized={photo.src.startsWith("http")}
              />
              {/* Show "+X more" on last visible thumb if there are more */}
              {i === 3 && rest.length > 4 && (
                <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                  <span className="text-white font-bold text-lg">+{rest.length - 4}</span>
                </div>
              )}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

// ─── Main Gallery Component ───────────────────────────────────────────────────

export function PhotoGallery({
  apartmentPhotos,
  areaPhotos,
}: {
  apartmentPhotos: Photo[];
  areaPhotos: Photo[];
}) {
  const [tab, setTab] = useState<"apartment" | "area">("apartment");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const photos = tab === "apartment" ? apartmentPhotos : areaPhotos;

  const hasApartment = apartmentPhotos.length > 0;
  const hasArea = areaPhotos.length > 0;

  if (!hasApartment && !hasArea) return null;

  return (
    <div>
      {/* Tab switcher — only show if both sets have photos */}
      {hasApartment && hasArea && (
        <div className="flex gap-2 mb-5">
          <button
            onClick={() => setTab("apartment")}
            className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold border transition-all ${
              tab === "apartment"
                ? "bg-slate-800 text-white border-slate-800"
                : "bg-white text-slate-600 border-slate-200 active:bg-slate-50"
            }`}
          >
            <Camera size={14} />
            The Apartment
          </button>
          <button
            onClick={() => setTab("area")}
            className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold border transition-all ${
              tab === "area"
                ? "bg-slate-800 text-white border-slate-800"
                : "bg-white text-slate-600 border-slate-200 active:bg-slate-50"
            }`}
          >
            <MapPin size={14} />
            The Area
          </button>
        </div>
      )}

      <PhotoGrid photos={photos} onTap={setLightboxIndex} />

      {lightboxIndex !== null && (
        <Lightbox
          photos={photos}
          startIndex={lightboxIndex}
          onClose={() => setLightboxIndex(null)}
        />
      )}
    </div>
  );
}
