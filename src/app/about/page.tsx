'use client';

import { motion } from 'framer-motion';
import Breadcrumb from '@/components/ui/Breadcrumb';
import ContactCTA from '@/components/sections/ContactCTA';
import { company } from '@/data/company';
import { Target, Award, Lightbulb, Users, Shield, Globe } from 'lucide-react';

const values = [
  {
    icon: Target,
    title: '专业专注',
    desc: '专注传动技术领域研发制造，由行业专家和资深工程师组成的研发团队',
  },
  {
    icon: Award,
    title: '品质卓越',
    desc: '严格质量管控体系，从项目咨询到售后支持的全方位服务',
  },
  {
    icon: Lightbulb,
    title: '技术创新',
    desc: '秉承"科技创新，驱动未来"理念，持续探索传动技术新边界',
  },
  {
    icon: Users,
    title: '合作共赢',
    desc: '坚持"客户至上，合作共赢"，快速响应客户需求，创造最大价值',
  },
  {
    icon: Shield,
    title: '可靠耐用',
    desc: '产品经过严苛测试验证，满足工业级可靠性和稳定性要求',
  },
  {
    icon: Globe,
    title: '行业深耕',
    desc: '广泛应用于半导体、智能装备、医疗器械、新能源等多个领域',
  },
];

export default function AboutPage() {
  return (
    <>
      <section className="bg-navy py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumb items={[{ label: '关于我们' }]} />
          <h1 className="mt-4 text-3xl md:text-4xl font-bold text-white">
            关于我们
          </h1>
          <p className="mt-2 text-white/60">{company.slogan}</p>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl font-bold text-[#0F172A] mb-6">
                公司简介
              </h2>
              <p className="text-[#334155] leading-relaxed mb-4">
                凯为传动技术（深圳）有限公司是一家致力于高速高精传动部件研发、制造、销售与服务于一体的高科技企业，专注于传动系统解决方案的创新与应用。有一支由行业专家和资深工程师组成的研发团队，主打产品有直线电机、DD马达、音圈电机、伺服电机、直线电机模组、直线平台、驱动器等。
              </p>
              <p className="text-[#334155] leading-relaxed mb-4">
                广泛应用于半导体行业、智能装备行业、医疗器械行业、新能源行业等多个领域。公司秉承&ldquo;科技创新，驱动未来&rdquo;的发展理念，不断加强与国内外知名高校及研究机构的合作，积极探索传动技术的新边界。
              </p>
              <p className="text-[#64748B] leading-relaxed">
                面向未来，凯为传动将继续深耕传动领域，推动产业升级，致力于成为全球领先的传动系统解决方案提供商，携手客户共同开创更加绿色、智能的传动时代。
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-[#0F172A] mb-12 text-center">
            核心价值
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {values.map((v, i) => {
              const Icon = v.icon;
              return (
                <motion.div
                  key={v.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.08 }}
                  className="p-6 bg-white rounded-lg border border-[#E2E8F0]"
                >
                  <div className="w-10 h-10 rounded-lg bg-tech/10 flex items-center justify-center mb-4">
                    <Icon className="w-5 h-5 text-tech" />
                  </div>
                  <h3 className="font-bold text-[#0F172A] mb-2">{v.title}</h3>
                  <p className="text-sm text-[#64748B]">{v.desc}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <ContactCTA />
    </>
  );
}
