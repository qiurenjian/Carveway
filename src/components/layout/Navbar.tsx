'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { Menu, X, ChevronDown, Phone } from 'lucide-react';
import { navigation, company } from '@/data/company';
import { cn } from '@/lib/utils';

const productImages: Record<string, string> = {
  '/products/linear-motors/': '/images/products/linear-motor-kpt.png',
  '/products/ironless-motors/': '/images/products/ironless-motor-kpu.png',
  '/products/tubular-motors/': '/images/products/tubular-motor-kpr.png',
  '/products/dd-motors/': '/images/products/dd-motor.png',
  '/products/platforms/': '/images/platforms/platform-1.png',
  '/products/voice-coil/': '/images/products/voice-coil-kplr.png',
};

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [productOpen, setProductOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={cn(
        'sticky top-0 z-50 transition-shadow duration-300',
        scrolled ? 'bg-navy shadow-xl' : 'bg-navy shadow-lg'
      )}
    >
      {/* Top bar */}
      <div className="hidden lg:flex bg-navy-light/30 border-b border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex justify-end items-center h-8 gap-6">
          <a
            href={`tel:${company.phone}`}
            className="flex items-center gap-1.5 text-white/50 hover:text-white text-xs transition-colors"
          >
            <Phone className="w-3 h-3" />
            {company.phone}
          </a>
          <a
            href={`mailto:${company.email}`}
            className="text-white/50 hover:text-white text-xs transition-colors"
          >
            {company.email}
          </a>
        </div>
      </div>

      {/* Main nav */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 shrink-0">
            <div className="relative h-11 w-44">
              <Image
                src="/images/logo/logo.png"
                alt={company.name}
                fill
                className="object-contain object-left"
                priority
              />
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {navigation.map((item) =>
              item.children ? (
                <div
                  key={item.name}
                  className="relative"
                  onMouseEnter={() => setProductOpen(true)}
                  onMouseLeave={() => setProductOpen(false)}
                >
                  <Link
                    href={item.href}
                    className={cn(
                      'flex items-center gap-1 px-4 py-2 text-sm font-medium rounded-md transition-colors',
                      pathname.startsWith('/products')
                        ? 'text-accent'
                        : 'text-white/80 hover:text-white'
                    )}
                  >
                    {item.name}
                    <ChevronDown
                      className={cn(
                        'w-3.5 h-3.5 transition-transform duration-200',
                        productOpen ? 'rotate-180' : ''
                      )}
                    />
                  </Link>

                  {/* Mega Menu */}
                  <div
                    className={cn(
                      'absolute top-full left-1/2 -translate-x-1/2 mt-0 w-[640px] bg-white rounded-xl shadow-2xl border border-gray-100 overflow-hidden transition-all duration-200',
                      productOpen
                        ? 'opacity-100 visible translate-y-0'
                        : 'opacity-0 invisible -translate-y-2'
                    )}
                  >
                    <div className="p-4">
                      <div className="grid grid-cols-2 gap-1">
                        {item.children.map((child) => (
                          <Link
                            key={child.href}
                            href={child.href}
                            onClick={() => setProductOpen(false)}
                            className={cn(
                              'flex items-center gap-3 p-3 rounded-lg transition-colors group',
                              pathname === child.href
                                ? 'bg-primary/5 text-primary'
                                : 'hover:bg-gray-50 text-gray-700 hover:text-primary'
                            )}
                          >
                            <div className="w-12 h-10 relative shrink-0 bg-navy/5 rounded-md overflow-hidden">
                              {productImages[child.href] && (
                                <Image
                                  src={productImages[child.href]}
                                  alt={child.name}
                                  fill
                                  className="object-contain p-1"
                                  sizes="48px"
                                />
                              )}
                            </div>
                            <span className="text-sm font-medium">{child.name}</span>
                          </Link>
                        ))}
                      </div>
                      <div className="mt-3 pt-3 border-t border-gray-100 flex items-center justify-between">
                        <span className="text-xs text-gray-400">高速高精传动部件专家</span>
                        <Link
                          href="/products/"
                          onClick={() => setProductOpen(false)}
                          className="text-xs text-primary hover:text-primary-light font-medium"
                        >
                          查看全部产品 →
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                <Link
                  key={item.name}
                  href={item.href}
                  className={cn(
                    'px-4 py-2 text-sm font-medium rounded-md transition-colors',
                    pathname === item.href
                      ? 'text-accent'
                      : 'text-white/80 hover:text-white'
                  )}
                >
                  {item.name}
                </Link>
              )
            )}
          </nav>

          {/* CTA + Mobile Toggle */}
          <div className="flex items-center gap-2">
            <Link
              href="/contact/"
              className="hidden lg:inline-flex px-5 py-2 bg-accent hover:bg-accent-light text-white text-sm font-semibold rounded-md transition-colors"
            >
              获取报价
            </Link>
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden p-2 text-white/80 hover:text-white"
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      <div
        className={cn(
          'lg:hidden fixed inset-0 top-16 bg-navy z-40 transition-transform duration-300',
          mobileOpen ? 'translate-x-0' : 'translate-x-full'
        )}
      >
        <nav className="flex flex-col p-6 gap-2 overflow-y-auto h-full">
          {navigation.map((item) =>
            item.children ? (
              <div key={item.name}>
                <Link
                  href={item.href}
                  onClick={() => setMobileOpen(false)}
                  className="block px-4 py-3 text-white/80 font-medium text-base"
                >
                  {item.name}
                </Link>
                <div className="pl-6 flex flex-col gap-1">
                  {item.children.map((child) => (
                    <Link
                      key={child.href}
                      href={child.href}
                      onClick={() => setMobileOpen(false)}
                      className="block px-4 py-2.5 text-white/60 text-sm hover:text-white"
                    >
                      {child.name}
                    </Link>
                  ))}
                </div>
              </div>
            ) : (
              <Link
                key={item.name}
                href={item.href}
                onClick={() => setMobileOpen(false)}
                className="block px-4 py-3 text-white/80 font-medium text-base hover:text-white"
              >
                {item.name}
              </Link>
            )
          )}
          <Link
            href="/contact/"
            onClick={() => setMobileOpen(false)}
            className="mt-4 mx-4 py-3 bg-accent text-white text-center font-semibold rounded-md"
          >
            获取报价
          </Link>
          <div className="mt-4 px-4 border-t border-white/10 pt-4">
            <a href={`tel:${company.phone}`} className="flex items-center gap-2 text-white/50 text-sm">
              <Phone className="w-4 h-4" />
              {company.phone}
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
}
