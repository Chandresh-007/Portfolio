interface ImagePlaceholderProps {
  title: string;
  className?: string;
}

export default function ImagePlaceholder({ title, className = '' }: ImagePlaceholderProps) {
  const initials = title
    .split(' ')
    .map((w) => w[0])
    .join('')
    .slice(0, 2)
    .toUpperCase();

  return (
    <div
      className={`flex aspect-video w-full items-center justify-center rounded-md border border-neutral-800 bg-neutral-900/50 ${className}`}
    >
      <div className="flex flex-col items-center gap-2">
        <span className="text-2xl font-semibold tracking-wider text-neutral-700">
          {initials}
        </span>
        <div className="h-px w-8 bg-neutral-800" />
      </div>
    </div>
  );
}
