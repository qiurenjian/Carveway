import { getCategoryBySlug } from '@/data/products';
import ProductCategoryPage from '@/components/sections/ProductCategoryPage';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'DD直驱电机',
  description: 'KPD系列DD直驱电机，低速大扭矩、高定位精度、编码器解析度达6700万脉冲/转。',
};

export default function Page() {
  const category = getCategoryBySlug('dd-motors')!;
  return <ProductCategoryPage category={category} />;
}
