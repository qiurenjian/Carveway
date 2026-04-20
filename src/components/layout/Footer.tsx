'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Phone, Mail, MapPin } from 'lucide-react';
import { company } from '@/data/company';

const productLinks = [
  { name: '伺服驱动器', href: '/products/servo-drivers/' },
  { name: '有铁芯直线电机', href: '/products/linear-motors/' },
  { name: '无铁芯直线电机', href: '/products/ironless-motors/' },
  { name: '微型管状直线电机', href: '/products/tubular-motors/' },
  { name: 'DD直驱电机', href: '/products/dd-motors/' },
  { name: '灵巧手', href: '/products/dexterous-hands/' },
  { name: '精密运动平台', href: '/products/platforms/' },
  { name: '关节模组', href: '/products/joint-modules/' },
  { name: '音圈执行器', href: '/products/voice-coil/' },
];

const industryLinks = ['半导体行业', '智能装备', '医疗器械', '新能源行业', '激光加工', '玻璃检测'];

export default function Footer() {
  return (
    <footer className="bg-navy text-white/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="mb-4">
              <div className="relative h-10 w-36">
                <Image
                  src="/images/logo/logo.png"
                  alt={company.name}
                  fill
                  className="object-contain object-left brightness-0 invert"
                  sizes="144px"
                />
              </div>
            </div>
            <p className="text-sm leading-relaxed text-white/50 mb-4">{company.description}</p>
            <p className="text-xs text-white/30 leading-relaxed">{company.nameEn}</p>
          </div>

          {/* Product Links */}
          <div>
            <h3 className="text-white font-semibold mb-4 text-sm">产品中心</h3>
            <ul className="space-y-2">
              {productLinks.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-sm text-white/50 hover:text-white transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Industry Links */}
          <div>
            <h3 className="text-white font-semibold mb-4 text-sm">应用行业</h3>
            <ul className="space-y-2">
              {industryLinks.map((name) => (
                <li key={name}>
                  <Link
                    href="/applications/"
                    className="text-sm text-white/50 hover:text-white transition-colors"
                  >
                    {name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-semibold mb-4 text-sm">联系我们</h3>
            <ul className="space-y-3">
              <li>
                <a
                  href={`tel:${company.phone}`}
                  className="flex items-start gap-2.5 text-sm text-white/50 hover:text-white transition-colors"
                >
                  <Phone className="w-4 h-4 mt-0.5 shrink-0 text-accent" />
                  {company.phone}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${company.email}`}
                  className="flex items-start gap-2.5 text-sm text-white/50 hover:text-white transition-colors"
                >
                  <Mail className="w-4 h-4 mt-0.5 shrink-0 text-accent" />
                  {company.email}
                </a>
              </li>
              <li className="flex items-start gap-2.5 text-sm text-white/50">
                <MapPin className="w-4 h-4 mt-0.5 shrink-0 text-accent" />
                <span>{company.address}</span>
              </li>
            </ul>

            <div className="mt-6">
              <Link
                href="/contact/"
                className="inline-block px-4 py-2 border border-white/20 hover:border-accent hover:text-white text-sm rounded-md transition-colors"
              >
                获取报价
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-2">
          <p className="text-xs text-white/30">
            &copy; {new Date().getFullYear()} {company.name} 版权所有
          </p>
          <div className="flex items-center gap-4 text-xs text-white/30">
            {company.icp && <span>{company.icp}</span>}
            {company.beian && (
              <a
                href={`https://beian.mps.gov.cn/#/query/webSearch?code=${company.beian.code}`}
                rel="noreferrer"
                target="_blank"
                className="flex items-center gap-1 hover:text-white/60 transition-colors"
              >
                <Image
                  src="/images/gongan.png"
                  alt="公安备案"
                  width={14}
                  height={15}
                  className="opacity-60"
                />
                {company.beian.number}
              </a>
            )}
            <Link href="/about/" className="hover:text-white/60 transition-colors">关于我们</Link>
            <Link href="/contact/" className="hover:text-white/60 transition-colors">联系我们</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
