import { getCategoryBySlug } from '@/data/products';
import ProductCategoryPage from '@/components/sections/ProductCategoryPage';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: '微型管状直线电机',
  description: 'KPR微型管状直线电机，外径10.5mm，结构紧凑，适用于贴片机、医疗设备等精密场景。',
};

export default function Page() {
  const category = getCategoryBySlug('tubular-motors')!;
  return <ProductCategoryPage category={category} />;
}
