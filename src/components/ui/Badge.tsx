interface BadgeProps {
  children: string;
  variant?: 'default' | 'status' | 'tech';
}

export default function Badge({ children, variant = 'default' }: BadgeProps) {
  const variants = {
    default: 'bg-neutral-800/60 text-neutral-400',
    status: 'bg-emerald-950/40 text-emerald-400 border border-emerald-800/30',
    tech: 'bg-neutral-800/40 text-neutral-500 border border-neutral-800',
  };

  return (
    <span
      className={`inline-block rounded px-2 py-0.5 text-xs font-medium ${variants[variant]}`}
    >
      {children}
    </span>
  );
}
