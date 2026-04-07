import Link from 'next/link';
import { cn } from '@/lib/utils';

type CardProps = {
  href?: string;
  className?: string;
  children: React.ReactNode;
};

export default function Card({ href, className, children }: CardProps) {
  const cls = cn(
    'bg-white rounded-lg border border-[#E2E8F0] shadow-sm hover:shadow-lg hover:-translate-y-1 hover:border-tech/30 transition-all duration-300',
    className
  );

  if (href) {
    return (
      <Link href={href} className={cn(cls, 'block')}>
        {children}
      </Link>
    );
  }

  return <div className={cls}>{children}</div>;
}
