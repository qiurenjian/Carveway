import { getCategoryBySlug } from '@/data/products';
import ProductCategoryPage from '@/components/sections/ProductCategoryPage';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: '精密运动平台',
  description: '大理石龙门双驱平台、十字精密运动平台，直驱电机驱动，微米级定位精度，支持客制化定制。',
};

export default function Page() {
  const category = getCategoryBySlug('platforms')!;
  return <ProductCategoryPage category={category} />;
}
