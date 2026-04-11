// components/SectionHeader.tsx
interface Props {
  label: string;
  title: string;
  subtitle?: string;
}

export function SectionHeader({ label, title, subtitle }: Props) {
  return (
    <div className="mb-6">
      <span className="text-xs font-semibold tracking-[0.15em] uppercase text-sand-400 mb-1 block">
        {label}
      </span>
      <h2 className="font-display text-2xl text-slate-800 leading-tight">{title}</h2>
      {subtitle && (
        <p className="mt-1.5 text-sm text-slate-500 leading-relaxed">{subtitle}</p>
      )}
    </div>
  );
}
