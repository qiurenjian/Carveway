import { getCategoryBySlug } from '@/data/products';
import ProductCategoryPage from '@/components/sections/ProductCategoryPage';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: '有铁芯直线电机',
  description: 'KPT双板式、KPF平板式、KPH中心磁轨有铁芯直线电机，推力密度大、刚性好、高响应速度。',
};

export default function Page() {
  const category = getCategoryBySlug('linear-motors')!;
  return <ProductCategoryPage category={category} />;
}
