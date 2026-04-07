import Breadcrumb from '@/components/ui/Breadcrumb';
import { company } from '@/data/company';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';
import type { Metadata } from 'next';
import ContactMap from '@/components/sections/ContactMap';

export const metadata: Metadata = {
  title: '联系我们',
  description: `联系${company.shortName}，获取专业传动解决方案和产品报价。`,
};

export default function ContactPage() {
  return (
    <>
      <section className="bg-navy py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumb items={[{ label: '联系我们' }]} />
          <h1 className="mt-4 text-3xl md:text-4xl font-bold text-white">
            联系我们
          </h1>
          <p className="mt-2 text-white/60">
            欢迎联系我们获取专业的技术方案和产品报价
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Cards */}
            <div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                {[
                  { icon: Phone, title: '电话', value: company.phone, href: `tel:${company.phone}` },
                  { icon: Mail, title: '邮箱', value: company.email, href: `mailto:${company.email}` },
                  { icon: MapPin, title: '地址', value: company.address },
                  { icon: Clock, title: '工作时间', value: '周一至周五 9:00 - 18:00' },
                ].map((c) => {
                  const Icon = c.icon;
                  const content = (
                    <div className="p-6 bg-white rounded-lg border border-[#E2E8F0] hover:shadow-md transition-shadow h-full">
                      <div className="w-10 h-10 rounded-lg bg-tech/10 flex items-center justify-center mb-4">
                        <Icon className="w-5 h-5 text-tech" />
                      </div>
                      <h3 className="font-semibold text-[#0F172A] mb-1">{c.title}</h3>
                      <p className="text-sm text-[#334155]">{c.value}</p>
                    </div>
                  );
                  return c.href ? (
                    <a key={c.title} href={c.href}>{content}</a>
                  ) : (
                    <div key={c.title}>{content}</div>
                  );
                })}
              </div>

            </div>

            {/* Map */}
            <ContactMap />
          </div>
        </div>
      </section>
    </>
  );
}
