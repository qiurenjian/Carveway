import Link from 'next/link';
import { cn } from '@/lib/utils';

type ButtonProps = {
  href?: string;
  variant?: 'primary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  children: React.ReactNode;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

const variants = {
  primary: 'bg-accent hover:bg-accent-light text-white',
  outline: 'border-2 border-white text-white hover:bg-white hover:text-navy',
  ghost: 'text-tech hover:text-tech/80 underline-offset-4 hover:underline',
};

const sizes = {
  sm: 'px-4 py-2 text-sm',
  md: 'px-6 py-3 text-sm',
  lg: 'px-8 py-3.5 text-base',
};

export default function Button({
  href,
  variant = 'primary',
  size = 'md',
  className,
  children,
  ...props
}: ButtonProps) {
  const cls = cn(
    'inline-flex items-center justify-center font-semibold rounded-md transition-colors',
    variants[variant],
    sizes[size],
    className
  );

  if (href) {
    return (
      <Link href={href} className={cls}>
        {children}
      </Link>
    );
  }

  return (
    <button className={cls} {...props}>
      {children}
    </button>
  );
}
