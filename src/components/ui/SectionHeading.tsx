interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  className?: string;
}

export default function SectionHeading({ title, subtitle, className = '' }: SectionHeadingProps) {
  return (
    <div className={`mb-12 md:mb-16 ${className}`}>
      <h2 className="text-2xl font-semibold tracking-tight text-stone-900 dark:text-stone-100 md:text-3xl">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-3 text-base text-stone-600 dark:text-stone-400 md:text-lg">{subtitle}</p>
      )}
    </div>
  );
}
