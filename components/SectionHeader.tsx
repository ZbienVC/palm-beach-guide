// components/SectionHeader.tsx
interface Props {
  label: string;
  title: string;
  subtitle?: string;
}

export function SectionHeader({ label, title, subtitle }: Props) {
  return (
    <div className="mb-6">
      <span className="text-[10px] font-black tracking-[0.2em] uppercase text-ocean-500 mb-1.5 block">
        {label}
      </span>
      <h2 className="font-display text-2xl text-slate-800 leading-tight mb-1">
        {title}
      </h2>
      {subtitle && (
        <p className="text-sm text-slate-400 leading-relaxed">{subtitle}</p>
      )}
    </div>
  );
}
