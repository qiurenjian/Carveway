'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Target, Award, Lightbulb, Users } from 'lucide-react';

const values = [
  { icon: Target, label: '专业专注', desc: '专注传动技术研发制造' },
  { icon: Award, label: '品质卓越', desc: '严格质量管控体系' },
  { icon: Lightbulb, label: '技术创新', desc: '持续探索技术新边界' },
  { icon: Users, label: '全程服务', desc: '从咨询到售后全方位' },
];

export default function AboutTeaser() {
  return (
    <section className="py-20 md:py-28 bg-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
          {/* Left: Text */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="inline-block text-xs font-semibold text-primary uppercase tracking-widest mb-3 border-b-2 border-accent pb-1">
              关于我们
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-5">
              关于凯为传动
            </h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              凯为传动技术（深圳）有限公司是一家致力于高速高精传动部件研发、制造、销售与服务于一体的高科技企业，专注于传动系统解决方案的创新与应用。
            </p>
            <p className="text-gray-500 leading-relaxed mb-8">
              公司拥有由行业专家和资深工程师组成的研发团队，主打产品有直线电机、DD马达、音圈电机、直线电机模组、直线平台、驱动器等，广泛应用于半导体行业、智能装备行业、医疗器械行业、新能源行业等多个领域。
            </p>

            {/* Values grid */}
            <div className="grid grid-cols-2 gap-3 mb-8">
              {values.map((v) => {
                const Icon = v.icon;
                return (
                  <div
                    key={v.label}
                    className="flex items-start gap-3 p-4 bg-white rounded-lg border border-gray-200"
                  >
                    <div className="w-8 h-8 rounded-md bg-primary/10 flex items-center justify-center shrink-0">
                      <Icon className="w-4 h-4 text-primary" />
                    </div>
                    <div>
                      <div className="text-sm font-bold text-gray-900">{v.label}</div>
                      <div className="text-xs text-gray-500 mt-0.5">{v.desc}</div>
                    </div>
                  </div>
                );
              })}
            </div>

            <Link
              href="/about/"
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-primary hover:bg-primary-light text-white font-semibold rounded-md transition-colors text-sm"
            >
              了解更多
              <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>

          {/* Right: Product image */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden bg-navy shadow-2xl">
              <div className="grid grid-cols-2 gap-1 p-4">
                {[
                  '/images/products/iron-core-hero.png',
                  '/images/products/dd-motor-hero.png',
                  '/images/platforms/platform-2.png',
                  '/images/products/voice-coil-kplr.png',
                ].map((src, i) => (
                  <div key={i} className="relative h-36 bg-white/5 rounded-lg overflow-hidden">
                    <Image
                      src={src}
                      alt="产品图片"
                      fill
                      className="object-contain p-3"
                      sizes="200px"
                    />
                  </div>
                ))}
              </div>
              <div className="px-4 pb-4 text-center text-white/40 text-xs">
                直线电机 · DD马达 · 精密运动平台 · 音圈执行器
              </div>
            </div>
            {/* Decorative accent */}
            <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-accent/10 rounded-full blur-2xl -z-10" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
