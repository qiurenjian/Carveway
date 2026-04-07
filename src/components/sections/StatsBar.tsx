'use client';

import { useRef, useEffect, useState } from 'react';
import { motion, useInView } from 'framer-motion';

const stats = [
  { value: 6, suffix: '+', label: '产品系列', desc: '直线电机·DD马达·音圈执行器等' },
  { value: 100, suffix: '+', label: '产品型号', desc: '覆盖各种推力范围和精度需求' },
  { value: 10, suffix: '+', label: '应用行业', desc: '半导体·医疗·新能源·智能装备' },
  { value: 15, suffix: '+', label: '年行业经验', desc: '专注高速高精传动技术研发' },
];

function Counter({ value, suffix }: { value: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const step = Math.max(1, Math.floor(value / 40));
    const timer = setInterval(() => {
      start += step;
      if (start >= value) {
        setCount(value);
        clearInterval(timer);
      } else {
        setCount(start);
      }
    }, 30);
    return () => clearInterval(timer);
  }, [inView, value]);

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  );
}

export default function StatsBar() {
  return (
    <section className="bg-navy py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          {stats.map((stat, i) => (
            <div key={stat.label} className={`text-center ${i < stats.length - 1 ? 'md:border-r md:border-white/10' : ''}`}>
              <div className="text-3xl sm:text-4xl md:text-5xl font-bold text-accent">
                <Counter value={stat.value} suffix={stat.suffix} />
              </div>
              <div className="mt-2 text-base font-semibold text-white">{stat.label}</div>
              <div className="mt-1 text-xs text-white/40 hidden sm:block">{stat.desc}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
