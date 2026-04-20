'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Card from '@/components/ui/Card';
import Breadcrumb from '@/components/ui/Breadcrumb';
import ContactCTA from '@/components/sections/ContactCTA';
import { productCategories } from '@/data/products';
import { ArrowRight } from 'lucide-react';
import { cn } from '@/lib/utils';

const filters = [
  { label: '全部', slug: '' },
  { label: '驱动器', slug: 'servo-drivers' },
  { label: '有铁芯', slug: 'linear-motors' },
  { label: '无铁芯', slug: 'ironless-motors' },
  { label: '管状', slug: 'tubular-motors' },
  { label: 'DD直驱', slug: 'dd-motors' },
  { label: '灵巧手', slug: 'dexterous-hands' },
  { label: '运动平台', slug: 'platforms' },
  { label: '关节模组', slug: 'joint-modules' },
  { label: '音圈', slug: 'voice-coil' },
];

export default function ProductsPage() {
  const [active, setActive] = useState('');

  const filtered = active
    ? productCategories.filter((c) => c.slug === active)
    : productCategories;

  return (
    <>
      <section className="bg-navy py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumb items={[{ label: '产品中心' }]} />
          <h1 className="mt-4 text-3xl md:text-4xl font-bold text-white">
            产品中心
          </h1>
          <p className="mt-2 text-white/60">
            九大产品系列，覆盖高速高精传动全场景
          </p>
        </div>
      </section>

      <section className="py-12 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Filters */}
          <div className="flex flex-wrap gap-2 mb-10">
            {filters.map((f) => (
              <button
                key={f.slug}
                onClick={() => setActive(f.slug)}
                className={cn(
                  'px-4 py-2 text-sm rounded-full border transition-colors',
                  active === f.slug
                    ? 'bg-tech text-white border-tech'
                    : 'bg-white text-[#334155] border-[#E2E8F0] hover:border-tech/50'
                )}
              >
                {f.label}
              </button>
            ))}
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((cat, i) => (
              <motion.div
                key={cat.slug}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: i * 0.05 }}
              >
                <Card
                  href={`/products/${cat.slug}/`}
                  className="p-6 h-full flex flex-col group"
                >
                  <h3 className="text-lg font-bold text-[#0F172A] mb-3">
                    {cat.title}
                  </h3>
                  <p className="text-sm text-[#64748B] flex-1 line-clamp-3">
                    {cat.description}
                  </p>
                  <div className="mt-4 text-xs text-[#94A3B8]">
                    {cat.models.length} 个系列 ·{' '}
                    {cat.models.reduce(
                      (sum, m) => sum + (m.specs[0]?.values.length || 0),
                      0
                    )}{' '}
                    个型号
                  </div>
                  <div className="mt-3 flex items-center gap-1 text-sm text-tech font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                    查看详情
                    <ArrowRight className="w-3.5 h-3.5" />
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <ContactCTA />
    </>
  );
}
