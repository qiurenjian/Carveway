import { getCategoryBySlug } from '@/data/products';
import ProductCategoryPage from '@/components/sections/ProductCategoryPage';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: '伺服驱动器 - 凯为传动',
  description: 'KSD-L轻载、KSD-M标准、KSD-H高性能、KSD-DD直驱专用系列伺服驱动器，高响应速度、高控制精度。',
};

export default function Page() {
  const category = getCategoryBySlug('servo-drivers')!;
  return <ProductCategoryPage category={category} />;
}
