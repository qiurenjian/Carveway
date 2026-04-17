import { getCategoryBySlug } from '@/data/products';
import ProductCategoryPage from '@/components/sections/ProductCategoryPage';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: '关节模组 - 凯为传动',
  description: '高性能机器人关节执行器，集成无刷电机、行星减速器、编码器和驱动器',
};

export default function JointModulesPage() {
  const category = getCategoryBySlug('joint-modules')!;
  return <ProductCategoryPage category={category} />;
}
