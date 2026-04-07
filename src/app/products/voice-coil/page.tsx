import { getCategoryBySlug } from '@/data/products';
import ProductCategoryPage from '@/components/sections/ProductCategoryPage';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: '音圈执行器',
  description: 'KPLR直线旋转音圈执行器，力重复精度±3g，直线+旋转一体，寿命达亿次。',
};

export default function Page() {
  const category = getCategoryBySlug('voice-coil')!;
  return <ProductCategoryPage category={category} />;
}
