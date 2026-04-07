'use client';

import { motion } from 'framer-motion';
import Breadcrumb from '@/components/ui/Breadcrumb';
import ContactCTA from '@/components/sections/ContactCTA';
import { industries } from '@/data/industries';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';

export default function ApplicationsPage() {
  return (
    <>
      <section className="bg-navy py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumb items={[{ label: '应用领域' }]} />
          <h1 className="mt-4 text-3xl md:text-4xl font-bold text-white">
            应用领域
          </h1>
          <p className="mt-2 text-white/60">
            深耕半导体、智能装备、医疗器械、新能源四大行业
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
          {industries.map((ind, i) => {
            const Icon = ind.icon;
            return (
              <motion.div
                key={ind.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="grid grid-cols-1 lg:grid-cols-5 gap-10 items-start"
              >
                <div className="lg:col-span-3">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 rounded-lg bg-tech/10 flex items-center justify-center">
                      <Icon className="w-6 h-6 text-tech" />
                    </div>
                    <h2 className="text-2xl font-bold text-[#0F172A]">
                      {ind.name}
                    </h2>
                  </div>
                  <p className="text-[#334155] leading-relaxed mb-6">
                    {ind.description}
                  </p>
                </div>
                <div className="lg:col-span-2">
                  <h3 className="text-sm font-semibold text-[#94A3B8] uppercase tracking-wider mb-3">
                    推荐产品
                  </h3>
                  <ul className="space-y-2">
                    {ind.products.map((p) => (
                      <li key={p}>
                        <Link
                          href="/products/"
                          className="flex items-center gap-2 text-sm text-[#334155] hover:text-tech transition-colors group"
                        >
                          <ArrowRight className="w-3.5 h-3.5 text-accent group-hover:translate-x-0.5 transition-transform" />
                          {p}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            );
          })}
        </div>
      </section>

      <ContactCTA />
    </>
  );
}
