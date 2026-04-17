import { getCategoryBySlug } from '@/data/products';
import ProductCategoryPage from '@/components/sections/ProductCategoryPage';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: '灵巧手 - 凯为传动',
  description: '高精度仿人五指灵巧手，15-20自由度，适用于人形机器人、协作机器人等领域',
};

export default function DexterousHandsPage() {
  const category = getCategoryBySlug('dexterous-hands')!;
  return <ProductCategoryPage category={category} />;
}
