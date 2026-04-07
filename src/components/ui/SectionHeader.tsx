import { cn } from '@/lib/utils';

type SectionHeaderProps = {
  title: string;
  subtitle?: string;
  align?: 'left' | 'center';
  light?: boolean;
  className?: string;
};

export default function SectionHeader({
  title,
  subtitle,
  align = 'center',
  light = false,
  className,
}: SectionHeaderProps) {
  return (
    <div
      className={cn(
        'mb-12',
        align === 'center' && 'text-center',
        className
      )}
    >
      <h2
        className={cn(
          'text-3xl md:text-4xl font-bold',
          light ? 'text-white' : 'text-[#0F172A]'
        )}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={cn(
            'mt-3 text-base md:text-lg max-w-2xl',
            align === 'center' && 'mx-auto',
            light ? 'text-white/70' : 'text-[#64748B]'
          )}
        >
          {subtitle}
        </p>
      )}
      <div
        className={cn(
          'mt-4 h-1 w-16 rounded-full',
          align === 'center' && 'mx-auto',
          light ? 'bg-accent' : 'bg-accent'
        )}
      />
    </div>
  );
}
