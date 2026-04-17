'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import SectionHeader from '@/components/ui/SectionHeader';

const categories = [
  {
    name: '有铁芯直线电机',
    models: 'KPT · KPF · KPH',
    desc: '高推力密度，高刚性，适用于高响应速度场景',
    spec: '峰值推力达 2615N',
    href: '/products/linear-motors/',
    image: '/images/products/iron-core-hero.png',
  },
  {
    name: '无铁芯直线电机',
    models: 'KPU2 · KPU3 · KPU4 · KPU5',
    desc: '零齿槽力，微米/纳米级定位，高速高精应用',
    spec: '峰值推力达 4250N',
    href: '/products/ironless-motors/',
    image: '/images/products/ironless-motor-hero.png',
  },
  {
    name: '微型管状直线电机',
    models: 'KPR',
    desc: '结构紧凑，外径10.5mm，高推力密度，易于安装',
    spec: '外径 10.5mm',
    href: '/products/tubular-motors/',
    image: '/images/products/tubular-motor-hero.png',
  },
  {
    name: 'DD直驱电机',
    models: 'KPDFI40/60 · KPDFE140/224',
    desc: '低速大扭矩，高定位精度，编码器解析度高',
    spec: '重复精度 ±1 arc sec',
    href: '/products/dd-motors/',
    image: '/images/products/dd-motor-hero.png',
  },
  {
    name: '精密运动平台',
    models: '龙门平台 · 十字平台',
    desc: '大理石/铝基材，微米级重复定位精度，支持客制化',
    spec: '定位精度 ≤±1μm',
    href: '/products/platforms/',
    image: '/images/platforms/platform-1.png',
  },
  {
    name: '音圈执行器',
    models: 'KPLR',
    desc: '直线旋转一体，力重复精度±3g，寿命达亿次',
    spec: '力精度 ±3g',
    href: '/products/voice-coil/',
    image: '/images/products/voice-coil-kplr.png',
  },
  {
    name: '灵巧手',
    models: 'KDH-5F · KDH-5F-Pro · KDH-3F',
    desc: '仿人五指灵巧手，15-20自由度，精准力控',
    spec: '定位精度 ±0.05mm',
    href: '/products/dexterous-hands/',
    image: '/images/products/dexterous-hand-hero.png',
  },
  {
    name: '关节模组',
    models: 'KJM-10 · KJM-30 · KJM-60 · KJM-100',
    desc: '集成行星滚柱丝杠、力传感器，人形机器人专用',
    spec: '推力达 8000N',
    href: '/products/joint-modules/',
    image: '/images/products/joint-module-hero.png',
  },
];

export default function ProductGrid() {
  return (
    <section className="py-20 md:py-28 bg-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          title="产品中心"
          subtitle="八大产品系列，覆盖高速高精传动全场景"
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {categories.map((cat, i) => (
            <motion.div
              key={cat.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.4, delay: i * 0.07 }}
            >
              <Link
                href={cat.href}
                className="group flex flex-col bg-white rounded-xl border border-gray-200 overflow-hidden hover:border-primary/30 hover:shadow-lg transition-all duration-300"
              >
                {/* Image area */}
                <div className="relative h-52 bg-navy overflow-hidden">
                  <Image
                    src={cat.image}
                    alt={cat.name}
                    fill
                    className="object-contain p-5 group-hover:scale-105 transition-transform duration-400"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  {/* Spec badge */}
                  <div className="absolute top-3 right-3 px-2.5 py-1 bg-accent/90 text-white text-xs font-semibold rounded-md">
                    {cat.spec}
                  </div>
                  {/* Blue top border on hover */}
                  <div className="absolute top-0 left-0 right-0 h-0.5 bg-primary scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                </div>

                {/* Content */}
                <div className="p-5 flex flex-col flex-1">
                  <div className="flex items-start justify-between gap-2 mb-2">
                    <h3 className="text-base font-bold text-gray-900 group-hover:text-primary transition-colors">
                      {cat.name}
                    </h3>
                  </div>
                  <p className="text-xs text-primary font-medium mb-3">{cat.models}</p>
                  <p className="text-sm text-gray-500 flex-1 leading-relaxed">{cat.desc}</p>
                  <div className="mt-4 flex items-center gap-1 text-sm text-primary font-medium">
                    了解详情
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
