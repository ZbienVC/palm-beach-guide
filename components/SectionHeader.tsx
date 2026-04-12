// components/SectionHeader.tsx
// Improved: stronger hierarchy, better contrast on sand background

interface Props {
  label: string;
  title: string;
  subtitle?: string;
  alt?: boolean; // alternate (warm section) style
}

export function SectionHeader({ label, title, subtitle, alt }: Props) {
  return (
    <div className="mb-6">
      <div className="flex items-center gap-2 mb-2">
        <div className="h-px flex-1 bg-sand-200" />
        <span className="text-2xs font-black tracking-[0.18em] uppercase text-sand-400 px-1">
          {label}
        </span>
        <div className="h-px flex-1 bg-sand-200" />
      </div>
      <h2 className={`font-display text-2xl leading-tight mb-1.5 ${alt ? "text-white" : "text-slate-800"}`}>
        {title}
      </h2>
      {subtitle && (
        <p className={`text-sm leading-relaxed ${alt ? "text-white/70" : "text-slate-500"}`}>
          {subtitle}
        </p>
      )}
    </div>
  );
}
