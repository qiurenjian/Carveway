import { getCategoryBySlug } from '@/data/products';
import ProductCategoryPage from '@/components/sections/ProductCategoryPage';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: '无铁芯直线电机',
  description: 'KPU系列无铁芯直线电机，零齿槽力，微米/纳米级快速定位，适用于高加速度高精度应用。',
};

export default function Page() {
  const category = getCategoryBySlug('ironless-motors')!;
  return <ProductCategoryPage category={category} />;
}
