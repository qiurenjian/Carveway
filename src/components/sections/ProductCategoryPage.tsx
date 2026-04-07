'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import type { ProductCategory } from '@/data/products';
import Breadcrumb from '@/components/ui/Breadcrumb';
import SectionHeader from '@/components/ui/SectionHeader';
import ContactCTA from '@/components/sections/ContactCTA';
import { CheckCircle2, ChevronDown, ChevronUp, ZoomIn } from 'lucide-react';

function DrawingGallery({ drawings }: { drawings: { label: string; src: string }[] }) {
  const [open, setOpen] = useState(false);
  const [zoom, setZoom] = useState<string | null>(null);

  return (
    <div className="mt-5">
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center gap-2 text-sm font-medium text-primary hover:text-primary-light transition-colors"
      >
        {open ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
        技术图纸 ({drawings.length} 张)
      </button>

      {open && (
        <div className="mt-3 grid grid-cols-2 sm:grid-cols-3 gap-3">
          {drawings.map((d) => (
            <button
              key={d.label}
              onClick={() => setZoom(d.src)}
              className="group relative bg-gray-50 border border-gray-200 rounded-lg overflow-hidden hover:border-primary/40 transition-colors text-left"
            >
              <div className="relative h-28">
                <Image src={d.src} alt={d.label} fill className="object-contain p-2" sizes="200px" />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors flex items-center justify-center opacity-0 group-hover:opacity-100">
                  <ZoomIn className="w-5 h-5 text-white drop-shadow" />
                </div>
              </div>
              <div className="px-2 py-1.5 text-xs text-center text-gray-600">{d.label}</div>
            </button>
          ))}
        </div>
      )}

      {/* Zoom modal */}
      {zoom && (
        <div
          className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4"
          onClick={() => setZoom(null)}
        >
          <div className="relative max-w-3xl w-full max-h-[90vh]" onClick={(e) => e.stopPropagation()}>
            <Image
              src={zoom}
              alt="技术图纸"
              width={900}
              height={600}
              className="w-full h-auto object-contain rounded-lg bg-white p-4"
            />
            <button
              onClick={() => setZoom(null)}
              className="absolute top-2 right-2 w-8 h-8 bg-black/50 hover:bg-black/70 text-white rounded-full flex items-center justify-center text-sm"
            >
              ✕
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default function ProductCategoryPage({
  category,
}: {
  category: ProductCategory;
}) {
  const heroImg = category.heroImage || category.image;

  return (
    <>
      {/* Hero */}
      <section className="bg-navy py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumb
            items={[
              { label: '产品中心', href: '/products/' },
              { label: category.title },
            ]}
          />
          <div className="mt-6 flex flex-col lg:flex-row lg:items-center lg:gap-16">
            <div className="max-w-xl">
              <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white">{category.title}</h1>
              <p className="mt-3 text-sm sm:text-base text-white/65 leading-relaxed">{category.description}</p>

              {/* Quick anchors */}
              <div className="mt-4 sm:mt-6 flex flex-wrap gap-2">
                {category.models.map((m) => (
                  <a
                    key={m.name}
                    href={`#${m.name.replace(/\s+/g, '-')}`}
                    className="px-3 py-2 text-xs font-medium bg-white/10 hover:bg-white/20 text-white/80 hover:text-white rounded-md transition-colors"
                  >
                    {m.name}
                  </a>
                ))}
              </div>
            </div>

            {heroImg && (
              <div className="mt-6 lg:mt-0 lg:shrink-0 relative w-full max-w-xs mx-auto lg:mx-0 lg:w-80 h-44 sm:h-52 lg:h-64 bg-navy">
                <Image
                  src={heroImg}
                  alt={category.title}
                  fill
                  className="object-contain"
                  sizes="(max-width: 1024px) 320px, 320px"
                  priority
                />
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Models */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader title="产品型号" align="left" />
          <div className="space-y-10">
            {category.models.map((model, mi) => (
              <motion.div
                key={model.name}
                id={model.name.replace(/\s+/g, '-')}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: mi * 0.05 }}
                className="bg-white rounded-xl border border-gray-200 overflow-hidden shadow-sm"
              >
                <div className="flex flex-col lg:flex-row">
                  {/* Left: Product image */}
                  <div className="lg:w-72 xl:w-80 shrink-0 bg-navy flex items-center justify-center p-6 min-h-[180px] lg:min-h-[220px]">
                    {model.image ? (
                      <div className="relative w-full h-36 sm:h-44">
                        <Image
                          src={model.image}
                          alt={model.name}
                          fill
                          className="object-contain"
                          sizes="(max-width: 1024px) 100vw, 288px"
                        />
                      </div>
                    ) : (
                      <div className="text-white/20 text-sm text-center">产品图片</div>
                    )}
                  </div>

                  {/* Right: Info + specs */}
                  <div className="flex-1 p-4 sm:p-6 lg:p-8">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{model.name}</h3>
                    <p className="text-gray-500 text-sm leading-relaxed mb-4">{model.description}</p>

                    {/* Highlights */}
                    <div className="flex flex-wrap gap-2 mb-5">
                      {model.highlights.map((h) => (
                        <span
                          key={h}
                          className="inline-flex items-center gap-1.5 px-3 py-1 bg-primary/5 text-primary text-xs font-medium rounded-full"
                        >
                          <CheckCircle2 className="w-3 h-3" />
                          {h}
                        </span>
                      ))}
                    </div>

                    {/* Specs Table */}
                    <div className="overflow-x-auto -mx-6 lg:-mx-8 px-6 lg:px-8">
                      <table className="w-full min-w-[420px] text-sm border-collapse">
                        <thead>
                          <tr className="bg-navy text-white">
                            {model.specs[0] && (
                              <>
                                <th className="text-left py-2.5 px-4 font-semibold text-xs uppercase tracking-wide rounded-tl-lg">
                                  参数
                                </th>
                                {model.specs[0].values.map((v, vi) => (
                                  <th
                                    key={vi}
                                    className="text-center py-2.5 px-3 font-semibold text-xs last:rounded-tr-lg"
                                  >
                                    {v}
                                  </th>
                                ))}
                              </>
                            )}
                          </tr>
                        </thead>
                        <tbody>
                          {model.specs.slice(1).map((spec, si) => (
                            <tr
                              key={spec.name}
                              className={si % 2 === 0 ? 'bg-white hover:bg-primary/3' : 'bg-gray-50 hover:bg-primary/3'}
                            >
                              <td className="py-2.5 px-4 text-gray-700 text-xs font-medium whitespace-nowrap border-b border-gray-100">
                                {spec.name}
                                {spec.unit && (
                                  <span className="text-gray-400 ml-1">({spec.unit})</span>
                                )}
                              </td>
                              {spec.values.map((v, vi) => (
                                <td
                                  key={vi}
                                  className="py-2.5 px-3 text-center text-gray-700 text-xs border-b border-gray-100"
                                >
                                  {v}
                                </td>
                              ))}
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>

                    {/* Drawings */}
                    {model.drawings && model.drawings.length > 0 && (
                      <DrawingGallery drawings={model.drawings} />
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Applications */}
      <section className="py-14 bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader title="典型应用" align="left" />
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {category.applications.map((app) => (
              <div
                key={app}
                className="flex items-center gap-3 p-4 bg-white rounded-lg border border-gray-200 hover:border-primary/30 hover:shadow-sm transition-all"
              >
                <div className="w-2 h-2 rounded-full bg-accent shrink-0" />
                <span className="text-sm text-gray-700">{app}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Inquiry CTA */}
      <section className="py-10 bg-white border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <h3 className="text-lg font-bold text-gray-900">需要技术咨询或报价？</h3>
            <p className="text-sm text-gray-500 mt-1">我们的工程师将为您提供专业的选型建议</p>
          </div>
          <Link
            href="/contact/"
            className="shrink-0 px-6 py-3 bg-accent hover:bg-accent-light text-white font-semibold rounded-md transition-colors text-sm"
          >
            获取报价
          </Link>
        </div>
      </section>

      <ContactCTA />
    </>
  );
}
