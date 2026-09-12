import type { ReactNode } from 'react';

interface ButtonProps {
  children: ReactNode;
  href?: string;
  onClick?: () => void;
  variant?: 'primary' | 'secondary' | 'ghost';
  external?: boolean;
  className?: string;
}

export default function Button({
  children,
  href,
  onClick,
  variant = 'primary',
  external = false,
  className = '',
}: ButtonProps) {
  const base =
    'inline-flex items-center gap-2 text-sm font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-stone-300 focus-visible:ring-offset-2 focus-visible:ring-offset-[#fafaf9]';

  const variants = {
    primary:
      'bg-stone-900 text-stone-50 hover:bg-stone-800 active:bg-stone-950 dark:bg-stone-100 dark:text-stone-900 dark:hover:bg-stone-200 dark:active:bg-white px-5 py-2.5 rounded',
    secondary:
      'border border-stone-300 text-stone-600 hover:border-stone-500 hover:text-stone-900 dark:border-stone-700 dark:text-stone-300 dark:hover:border-stone-500 dark:hover:text-stone-100 px-5 py-2.5 rounded',
    ghost: 'text-stone-500 hover:text-stone-900 dark:text-stone-400 dark:hover:text-stone-100',
  };

  const classes = `${base} ${variants[variant]} ${className}`;

  if (href) {
    return (
      <a
        href={href}
        className={classes}
        {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
      >
        {children}
      </a>
    );
  }

  return (
    <button onClick={onClick} className={classes}>
      {children}
    </button>
  );
}
