'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Zap, Target, Shield } from 'lucide-react';
import { company } from '@/data/company';

const heroImages = [
  { src: '/images/products/servo-driver-hero.png', label: '伺服驱动器', href: '/products/servo-drivers/' },
  { src: '/images/products/iron-core-hero.png', label: '有铁芯直线电机', href: '/products/linear-motors/' },
  { src: '/images/products/ironless-motor-hero.png', label: '无铁芯直线电机', href: '/products/ironless-motors/' },
  { src: '/images/products/tubular-motor-hero.png', label: '微型管状电机', href: '/products/tubular-motors/' },
  { src: '/images/products/dd-motor-hero.png', label: 'DD直驱电机', href: '/products/dd-motors/' },
  { src: '/images/products/dexterous-hand-hero.png', label: '灵巧手', href: '/products/dexterous-hands/' },
  { src: '/images/platforms/platform-1.png', label: '精密运动平台', href: '/products/platforms/' },
  { src: '/images/products/joint-module-hero.png', label: '关节模组', href: '/products/joint-modules/' },
  { src: '/images/products/voice-coil-kplr.png', label: '音圈执行器', href: '/products/voice-coil/' },
];

const features = [
  { icon: Zap, label: '高速高精' },
  { icon: Target, label: '微米级定位' },
  { icon: Shield, label: '工业级可靠' },
];

export default function HeroSection() {
  return (
    <section className="relative min-h-[100svh] sm:min-h-[88vh] flex items-center bg-navy overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-navy via-navy-light/20 to-navy" />
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              'linear-gradient(rgba(255,255,255,.15) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.15) 1px, transparent 1px)',
            backgroundSize: '48px 48px',
          }}
        />
        <div className="absolute top-1/3 right-1/3 w-[600px] h-[600px] bg-primary/8 rounded-full blur-[140px]" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-accent/5 rounded-full blur-[100px]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* Left: Text */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 bg-white/5 border border-white/10 rounded-full text-white/60 text-xs mb-6"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
              {company.nameEn}
            </motion.div>

            <motion.h1
              className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem] font-bold text-white leading-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              {company.slogan}
            </motion.h1>

            <motion.p
              className="mt-5 text-base sm:text-lg text-white/60 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              {company.description}
              <br />
              主打产品有直线电机、DD马达、音圈电机、直线平台、驱动器等。
            </motion.p>

            {/* Feature tags */}
            <motion.div
              className="mt-6 flex flex-wrap gap-3"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.25 }}
            >
              {features.map(({ icon: Icon, label }) => (
                <div
                  key={label}
                  className="flex items-center gap-1.5 px-3 py-1.5 bg-white/5 border border-white/10 rounded-md text-white/70 text-sm"
                >
                  <Icon className="w-3.5 h-3.5 text-accent" />
                  {label}
                </div>
              ))}
            </motion.div>

            <motion.div
              className="mt-8 flex flex-col sm:flex-row gap-3"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <Link
                href="/products/"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-accent hover:bg-accent-light text-white font-semibold rounded-md transition-colors text-sm"
              >
                查看产品
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/contact/"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 border border-white/20 hover:border-white/40 text-white/80 hover:text-white font-semibold rounded-md transition-colors text-sm"
              >
                联系我们
              </Link>
            </motion.div>
          </div>

          {/* Right: Product image grid */}
          <motion.div
            className="hidden lg:block"
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="grid grid-cols-2 lg:grid-cols-3 gap-3">
              {heroImages.map((img, i) => (
                <motion.div
                  key={img.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.3 + i * 0.08 }}
                >
                  <Link
                    href={img.href}
                    className="group block relative bg-white/5 border border-white/10 rounded-xl overflow-hidden hover:border-primary/40 hover:bg-white/8 transition-all duration-300"
                  >
                    <div className="relative h-36 p-3">
                      <Image
                        src={img.src}
                        alt={img.label}
                        fill
                        className="object-contain p-2 group-hover:scale-105 transition-transform duration-300"
                        sizes="(max-width: 1024px) 0px, 200px"
                        priority={i < 2}
                      />
                    </div>
                    <div className="px-3 pb-3 text-center">
                      <span className="text-xs text-white/60 group-hover:text-white/80 transition-colors">
                        {img.label}
                      </span>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom wave divider */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
          <path d="M0 40L1440 40L1440 20C1200 40 960 0 720 20C480 40 240 0 0 20L0 40Z" fill="#F8FAFC" />
        </svg>
      </div>
    </section>
  );
}
