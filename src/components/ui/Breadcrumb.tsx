import Link from 'next/link';
import { ChevronRight } from 'lucide-react';

type BreadcrumbItem = {
  label: string;
  href?: string;
};

export default function Breadcrumb({ items }: { items: BreadcrumbItem[] }) {
  return (
    <nav className="flex items-center gap-1.5 text-sm text-[#94A3B8] py-4">
      <Link href="/" className="hover:text-tech transition-colors">
        首页
      </Link>
      {items.map((item, i) => (
        <span key={i} className="flex items-center gap-1.5">
          <ChevronRight className="w-3.5 h-3.5" />
          {item.href ? (
            <Link href={item.href} className="hover:text-tech transition-colors">
              {item.label}
            </Link>
          ) : (
            <span className="text-[#334155]">{item.label}</span>
          )}
        </span>
      ))}
    </nav>
  );
}
