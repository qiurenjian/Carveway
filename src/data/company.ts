export const company = {
  name: '凯为传动技术（深圳）有限公司',
  nameEn: 'CarveWay Drive Technology (ShenZhen) Co., LTD',
  shortName: '凯为传动',
  shortNameEn: 'CARVE WAY',
  slogan: '专业品质 追求卓越',
  sloganEn: 'Professional Quality, Pursuit of Excellence',
  description:
    '致力于高速高精传动部件研发、制造、销售与服务于一体的高科技企业，专注于传动系统解决方案的创新与应用。',
  phone: '18665953568',
  email: 'terry.wu@carveway.com.cn',
  website: 'https://carveway.com.cn',
  address: '深圳市南山区西丽街道阳光社区松白路1059号百旺二工业园3栋厂房501',
  icp: '', // ICP 备案号待补充
} as const;

type NavItem = {
  name: string;
  href: string;
  children?: { name: string; href: string }[];
};

export const navigation: NavItem[] = [
  { name: '首页', href: '/' },
  {
    name: '产品中心',
    href: '/products/',
    children: [
      { name: '有铁芯直线电机', href: '/products/linear-motors/' },
      { name: '无铁芯直线电机', href: '/products/ironless-motors/' },
      { name: '微型管状直线电机', href: '/products/tubular-motors/' },
      { name: 'DD直驱电机', href: '/products/dd-motors/' },
      { name: '精密运动平台', href: '/products/platforms/' },
      { name: '音圈执行器', href: '/products/voice-coil/' },
    ],
  },
  { name: '应用领域', href: '/applications/' },
  { name: '关于我们', href: '/about/' },
  { name: '联系我们', href: '/contact/' },
];
