import { Cpu, Settings, HeartPulse, Zap } from 'lucide-react';

export const industries = [
  {
    id: 'semiconductor',
    name: '半导体行业',
    icon: Cpu,
    brief: '晶圆搬运、芯片封装、检测设备',
    description:
      '在半导体制造中，直线电机和DD马达为晶圆搬运、光刻对准、芯片贴装等工序提供微米级定位精度，满足前道/后道工艺的高速高精需求。',
    products: ['有铁芯直线电机', '无铁芯直线电机', 'DD直驱电机', '精密运动平台'],
  },
  {
    id: 'smart-equipment',
    name: '智能装备行业',
    icon: Settings,
    brief: '激光加工、精密机床、工业印刷',
    description:
      '为智能制造装备提供高速高精传动解决方案，广泛应用于激光切割、精密数控机床、工业打印等场景，助力产线效率提升。',
    products: ['有铁芯直线电机', '无铁芯直线电机', '精密运动平台'],
  },
  {
    id: 'medical',
    name: '医疗器械行业',
    icon: HeartPulse,
    brief: '检测分析、精密组装、手术机器人',
    description:
      '为医疗器械提供高可靠性传动方案，应用于生物样本分析、高精密组装、医用影像设备等领域，确保运动精度与稳定性。',
    products: ['微型管状直线电机', '音圈执行器', 'DD直驱电机'],
  },
  {
    id: 'new-energy',
    name: '新能源行业',
    icon: Zap,
    brief: '光伏制造、锂电池、氢能装备',
    description:
      '在光伏片检测、锂电池极片制造等环节，提供高速搬运和精准定位方案，适应新能源产线高产能高一致性的要求。',
    products: ['有铁芯直线电机', '无铁芯直线电机', '精密运动平台'],
  },
] as const;
