import Link from 'next/link';
import { Phone, Mail, ArrowRight } from 'lucide-react';
import { company } from '@/data/company';

export default function ContactCTA() {
  return (
    <section className="bg-gradient-to-r from-navy via-primary to-navy py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">
              需要传动系统解决方案？
            </h2>
            <p className="text-white/60">
              我们的工程师团队将为您提供专业的技术咨询和产品选型支持
            </p>
          </div>
          <div className="flex flex-col sm:flex-row items-center gap-5 shrink-0">
            <div className="flex flex-col gap-2">
              <a
                href={`tel:${company.phone}`}
                className="flex items-center gap-2 text-white/80 hover:text-white transition-colors text-sm"
              >
                <Phone className="w-4 h-4 text-accent" />
                {company.phone}
              </a>
              <a
                href={`mailto:${company.email}`}
                className="flex items-center gap-2 text-white/80 hover:text-white transition-colors text-sm"
              >
                <Mail className="w-4 h-4 text-accent" />
                {company.email}
              </a>
            </div>
            <Link
              href="/contact/"
              className="inline-flex items-center gap-2 px-6 py-3 bg-accent hover:bg-accent-light text-white font-semibold rounded-md transition-colors text-sm whitespace-nowrap"
            >
              获取报价
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
