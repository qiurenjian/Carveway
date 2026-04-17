export type ProductSpec = {
  name: string;
  unit: string;
  values: (string | number)[];
};

export type ProductModel = {
  name: string;
  description: string;
  highlights: string[];
  specs: ProductSpec[];
  image?: string;
  drawings?: { label: string; src: string }[];
};

export type ProductCategory = {
  slug: string;
  title: string;
  subtitle: string;
  description: string;
  image?: string;
  heroImage?: string;
  applications: string[];
  models: ProductModel[];
};

export const productCategories: ProductCategory[] = [
  {
    slug: 'linear-motors',
    title: '有铁芯直线电机',
    subtitle: 'Iron-Core Linear Motors',
    image: '/images/products/linear-motor-kpt.png',
    heroImage: '/images/products/iron-core-hero.png',
    description:
      '凯为传动有铁芯直线电机系列采用高性能稀土永磁材料，推力密度大、刚性好、高响应速度。适用于推力密度要求高、响应速度快的工业自动化应用。',
    applications: [
      '高精度激光切割设备',
      '半导体加工检测设备',
      '玻璃检测行业',
      '精密数控机床',
    ],
    models: [
      {
        name: 'KPT 双板式有铁芯系列',
        description:
          '采用独特的双磁轨电机构造，磁吸力会相互抵消，可减小对导轨及机械强度的担忧。推力密度大，刚性好，高响应速度，结构紧凑。适用于推力密度要求高，响应速度快的应用。',
        highlights: ['磁吸力相互抵消', '推力密度大', '刚性好', '结构紧凑'],
        image: '/images/products/linear-motor-kpt.png',
        specs: [
          { name: '型号', unit: '', values: ['KPT-25', 'KPT-35', 'KPT-45', 'KPT-65'] },
          { name: '持续推力', unit: 'N', values: [430, 610, 810, 1100] },
          { name: '峰值推力', unit: 'N', values: [900, 1462, 2232, 2615] },
          { name: '电机常数', unit: 'N/√W', values: [19.9, 44.6, 40.6, 64.1] },
          { name: '持续电流', unit: 'Arms', values: [8, 10, 10, 10] },
          { name: '峰值电流', unit: 'Arms', values: [25, 30, 30, 30] },
          { name: '动子质量', unit: 'kg', values: [4.5, 5.5, 8.8, 8] },
          { name: '定子可选长度', unit: 'mm', values: ['64,128,256,512', '64,128,256,512', '64,128,256,512', '64,128,256,512'] },
        ],
      },
      {
        name: 'KPF 平板式有铁芯系列',
        description:
          '采用扁平构造，体积小、力密度大、响应快、安装空间小，在动子与定子之间的磁吸力作用下，可实现导轨的高刚性化。适用于点到点微米级快速定位，可满足5m/s甚至更高速度，行程不受限。',
        highlights: ['扁平构造', '安装空间小', '速度可达5m/s', '行程不受限'],
        image: '/images/products/linear-motor-kpf.png',
        specs: [
          { name: '型号', unit: '', values: ['KPF-25', 'KPF-35', 'KPF-45', 'KPF-55', 'KPF-65'] },
          { name: '持续推力', unit: 'N', values: [140, 190, 260, 310, 380] },
          { name: '峰值推力', unit: 'N', values: [248, 382, 480, 595, 685] },
          { name: '电机常数', unit: 'N/√W', values: [16.9, 21.3, 26.8, 28.2, 34.2] },
          { name: '持续电流', unit: 'Arms', values: [2.9, 3.4, 4, 5.2, 6.1] },
          { name: '磁吸力', unit: 'kN', values: [0.72, 0.96, 1.2, 1.5, 1.8] },
          { name: '定子可选长度', unit: 'mm', values: ['64,128,256,512', '64,128,256,512', '64,128,256,512', '64,128,256,512', '64,128,256,512'] },
        ],
      },
      {
        name: 'KPH 中心磁轨有铁芯系列',
        description:
          '中心磁铁型电机自身可消除磁吸引力，由此可简化设备的构造。动力加速度可达到25G。可高速驱动设备，达到缩短生产节拍时间和提高生产率的目的。',
        highlights: ['无磁吸力', '加速度达25G', '简化设备构造', '高生产率'],
        image: '/images/products/linear-motor-kph.png',
        specs: [
          { name: '型号', unit: '', values: ['KPH-30'] },
          { name: '持续推力', unit: 'N', values: [352] },
          { name: '峰值推力', unit: 'N', values: [720] },
          { name: '电机常数', unit: 'N/√W', values: [29.5] },
          { name: '持续电流', unit: 'Arms', values: [4.5] },
          { name: '峰值电流', unit: 'Arms', values: [11.5] },
          { name: '磁吸力', unit: 'kN', values: [0] },
          { name: '定子可选长度', unit: 'mm', values: ['64,128,256,512'] },
        ],
      },
    ],
  },
  {
    slug: 'ironless-motors',
    title: '无铁芯直线电机',
    subtitle: 'Ironless Linear Motors',
    image: '/images/products/ironless-motor-kpu.png',
    heroImage: '/images/products/ironless-motor-hero.png',
    description:
      'KPU系列直线电机使用无铁芯技术研制，在较小体积获得较高的推力，具有力密度较高的优势。非常适合高加速度、高精度定位要求的应用场合。无齿槽力，高持续推力和峰值推力。',
    applications: [
      '晶圆搬运及检测设备',
      '光伏片及锂电池',
      '玻璃及液晶面板',
      '生物医疗设备',
      '工业印刷机',
      '激光加工',
    ],
    models: [
      {
        name: 'KPU2 无铁芯系列',
        description: '紧凑型无铁芯直线电机，磁变周期30mm，适用于空间受限的高精度应用。无铁芯技术，零齿槽力，高持续推力和峰值推力。',
        highlights: ['零齿槽力', '紧凑设计', '串/并联可选', '高电机常数'],
        image: '/images/products/ironless-motor-kpu.png',
        drawings: [
          { label: '订购说明', src: '/images/drawings/kpu-order.png' },
          { label: '参数规格', src: '/images/drawings/kpu-params.png' },
          { label: '线圈规格', src: '/images/drawings/kpu-coil.png' },
        ],
        specs: [
          { name: '型号', unit: '', values: ['KPU2-S1', 'KPU2-S2', 'KPU2-S4', 'KPU2-S8'] },
          { name: '持续推力', unit: 'N', values: [9.1, 17.9, 36, 71.4] },
          { name: '峰值推力', unit: 'N', values: [45, 88.7, 178, 353] },
          { name: '电机常数', unit: 'N/√W', values: [2.53, 3.52, 5.1, 7.3] },
          { name: '定子可选长度', unit: 'mm', values: ['120,180,240,300', '120,180,240,300', '120,180,240,300', '120,180,240,300'] },
        ],
      },
      {
        name: 'KPU3 无铁芯系列',
        description: '中等推力无铁芯电机，磁变周期60mm，推力范围28N-173N，适用于中等负载高精度定位。',
        highlights: ['推力范围宽', '高电机常数', '适合中等负载', '高加速度'],
        image: '/images/products/ironless-motor-alt.png',
        drawings: [
          { label: '参数规格', src: '/images/drawings/kpu-params.png' },
          { label: '线圈规格', src: '/images/drawings/kpu-coil.png' },
        ],
        specs: [
          { name: '型号', unit: '', values: ['KPU3-S1', 'KPU3-S2', 'KPU3-S4', 'KPU3-S6'] },
          { name: '持续推力', unit: 'N', values: [28, 59, 115, 173] },
          { name: '峰值推力', unit: 'N', values: [150, 300, 580, 870] },
          { name: '电机常数', unit: 'N/√W', values: [5.9, 8.5, 12, 14.8] },
          { name: '定子可选长度', unit: 'mm', values: ['120,180,240,300,360', '120,180,240,300,360', '120,180,240,300,360', '120,180,240,300,360'] },
        ],
      },
      {
        name: 'KPU4 无铁芯系列',
        description: '高推力无铁芯电机，磁变周期60mm，推力范围55N-442N，支持600mm超长磁轨。',
        highlights: ['高推力输出', '高加速性能', '长行程支持', '超长600mm磁轨'],
        image: '/images/products/ironless-motor-kpu.png',
        specs: [
          { name: '型号', unit: '', values: ['KPU4-S1', 'KPU4-S2', 'KPU4-S4', 'KPU4-S8'] },
          { name: '持续推力', unit: 'N', values: [55, 110, 221, 442] },
          { name: '峰值推力', unit: 'N', values: [312, 624, 1248, 2496] },
          { name: '电机常数', unit: 'N/√W', values: [9.1, 12.9, 18.2, 25.7] },
          { name: '定子可选长度', unit: 'mm', values: ['120,180,240,300,600', '120,180,240,300,600', '120,180,240,300,600', '120,180,240,300,600'] },
        ],
      },
      {
        name: 'KPU5 无铁芯系列',
        description: '大推力无铁芯电机，磁变周期84mm，推力范围98N-596N，峰值推力可达4250N。',
        highlights: ['最大推力等级', '峰值4250N', '84mm磁变周期', '高动态响应'],
        image: '/images/products/ironless-motor-alt.png',
        specs: [
          { name: '型号', unit: '', values: ['KPU5-S1', 'KPU5-S2', 'KPU5-S4', 'KPU5-S6'] },
          { name: '持续推力', unit: 'N', values: [98, 200, 395, 596] },
          { name: '峰值推力', unit: 'N', values: [707, 1430, 2850, 4250] },
          { name: '电机常数', unit: 'N/√W', values: [16, 22.7, 31.9, 40] },
          { name: '定子可选长度', unit: 'mm', values: ['168,252,420', '168,252,420', '168,252,420', '168,252,420'] },
        ],
      },
    ],
  },
  {
    slug: 'tubular-motors',
    title: '微型管状直线电机',
    subtitle: 'Tubular Linear Motors',
    image: '/images/products/tubular-motor-kpr.png',
    heroImage: '/images/products/tubular-motor-hero.png',
    description:
      '微型管状直线电机结构紧凑，易于安装。拥有高推力密度和动态响应。适用于贴片机、医疗设备、检测设备等需要高速运动及精确定位的场景。',
    applications: ['贴片机', '医疗设备', '检测设备', '精密组装'],
    models: [
      {
        name: 'KPR 微型管状直线电机系列',
        description: '超紧凑管状设计，外径仅10.5mm，行程23mm，适用于空间极度受限的应用。磁吸力为零，结构简单易安装。',
        highlights: ['外径10.5mm', '行程23mm', '零磁吸力', '高动态响应'],
        image: '/images/products/tubular-motor-kpr.png',
        drawings: [
          { label: '参数规格', src: '/images/drawings/kpr-params.png' },
          { label: '电机外形图', src: '/images/drawings/kpr-drawing.png' },
        ],
        specs: [
          { name: '型号', unit: '', values: ['KPR-10.5-23'] },
          { name: '持续推力', unit: 'N', values: [1.52] },
          { name: '峰值推力', unit: 'N', values: [3.8] },
          { name: '电机常数', unit: 'N/√W', values: [1.3] },
          { name: '持续电流', unit: 'Arms', values: [0.2] },
          { name: '力常数', unit: 'N/Arms', values: [7.6] },
          { name: '行程', unit: 'mm', values: [23] },
          { name: '动子质量', unit: 'kg', values: [0.032] },
          { name: '定子质量', unit: 'kg', values: [0.035] },
        ],
      },
    ],
  },
  {
    slug: 'dd-motors',
    title: 'DD直驱电机',
    subtitle: 'Direct Drive Motors',
    image: '/images/products/dd-motor.png',
    heroImage: '/images/products/dd-motor-hero.png',
    description:
      '凯为传动KPD系列直驱电机是一种低速大扭矩、高定位精度、高解析度、高刚性的直接驱动电机。适用于半导体制造设备、电极制造设备、液晶制造装置等需要高精度旋转定位的设备。',
    applications: [
      '半导体划片机',
      '伺服压力机',
      '彩色滤光片镀膜机',
      '高精密机床',
      '医疗器械',
    ],
    models: [
      {
        name: 'KPDFI40 有框直驱电机',
        image: '/images/products/dd-motor-kpdfi40.png',
        description: '小型有框直驱电机，外径40mm，DC48V供电，适用于小空间高精度旋转定位应用。编码器分辨率2048，绝对精度±40 arc sec。',
        highlights: ['外径40mm', 'DC48V', '编码器2048', '绝对精度±40"'],
        drawings: [
          { label: '订购说明', src: '/images/drawings/dd-order.png' },
          { label: '40系列参数', src: '/images/drawings/dd-params.png' },
          { label: '40系列图形', src: '/images/drawings/dd-40-drawing.png' },
        ],
        specs: [
          { name: '型号', unit: '', values: ['KPDFI40-P02', 'KPDFI40-P05'] },
          { name: '电压', unit: 'VDC', values: [48, 48] },
          { name: '额定转矩', unit: 'Nm', values: [0.25, 0.5] },
          { name: '瞬时最大转矩', unit: 'Nm', values: [0.8, 1.33] },
          { name: '重复定位精度', unit: 'arc sec', values: ['±5', '±5'] },
          { name: '重量', unit: 'kg', values: [0.40, 0.55] },
          { name: '电机高度', unit: 'mm', values: [48, 65] },
        ],
      },
      {
        name: 'KPDFI60 有框直驱电机',
        image: '/images/products/dd-motor-kpdfi60.png',
        description: '中型有框直驱电机，外径60mm，AC220V供电，编码器分辨率4096，绝对精度±40 arc sec，重复定位精度±4 arc sec。',
        highlights: ['外径60mm', 'AC220V', '编码器4096', '重复精度±4"'],
        drawings: [
          { label: '60系列参数', src: '/images/drawings/dd-60-params.png' },
          { label: '60系列图形', src: '/images/drawings/dd-60-drawing.png' },
        ],
        specs: [
          { name: '型号', unit: '', values: ['KPDFI60-P05', 'KPDFI60-T01'] },
          { name: '电压', unit: 'VAC', values: [220, 220] },
          { name: '额定转矩', unit: 'Nm', values: [0.5, 1] },
          { name: '瞬时最大转矩', unit: 'Nm', values: [1.5, 3] },
          { name: '重复定位精度', unit: 'arc sec', values: ['±4', '±4'] },
          { name: '重量', unit: 'kg', values: [0.8, 1] },
          { name: '电机高度', unit: 'mm', values: [60, 80] },
        ],
      },
      {
        name: 'KPDFE140 有框直驱电机',
        image: '/images/products/dd-motor-kpdfe140.png',
        description: '大扭矩有框直驱电机，外径140mm，AC220V供电，编码器分辨率8192，绝对精度±25 arc sec，重复定位精度±1.5 arc sec。',
        highlights: ['外径140mm', '扭矩达40Nm', '编码器8192', '重复精度±1.5"'],
        specs: [
          { name: '型号', unit: '', values: ['KPDFE140-T18-EC30', 'KPDFE140-T18-EC30(大)', 'KPDFE140-T40-EC30'] },
          { name: '额定转矩', unit: 'Nm', values: [6, 18, 40] },
          { name: '瞬时最大转矩', unit: 'Nm', values: [16, 50, 110] },
          { name: '重复定位精度', unit: 'arc sec', values: ['±1.5', '±1.5', '±1.5'] },
          { name: '重量', unit: 'kg', values: [3.4, 5.6, 7.4] },
          { name: '电机高度', unit: 'mm', values: [50, 80, 120] },
        ],
      },
      {
        name: 'KPDFE224 有框直驱电机',
        image: '/images/products/dd-motor-kpdfe224.png',
        description: '超大扭矩有框直驱电机，外径224mm，AC220V供电，编码器分辨率11740，绝对精度±20 arc sec，重复定位精度±1 arc sec。',
        highlights: ['外径224mm', '扭矩达35Nm', '编码器11740', '重复精度±1"'],
        specs: [
          { name: '型号', unit: '', values: ['KPDFE224-T20', 'KPDFE224-T35'] },
          { name: '额定转矩', unit: 'Nm', values: [20, 35] },
          { name: '瞬时最大转矩', unit: 'Nm', values: [30, 50] },
          { name: '重复定位精度', unit: 'arc sec', values: ['±1', '±1'] },
          { name: '重量', unit: 'kg', values: [5.5, 9.5] },
          { name: '电机高度', unit: 'mm', values: [42, 62] },
        ],
      },
    ],
  },
  {
    slug: 'platforms',
    title: '精密运动平台',
    subtitle: 'Precision Motion Platforms',
    image: '/images/platforms/platform-1.png',
    heroImage: '/images/platforms/platform-2.png',
    description:
      '凯为传动精密运动平台采用直驱直线电机驱动，大理石平台系统稳定性好，可实现微米(um)级定位精度。根据客户需求客制化定制，广泛应用于半导体、激光加工、检测设备等高精度场景。',
    applications: [
      '半导体加工检测设备',
      '玻璃检测行业',
      '激光行业',
      '精密数控机床',
      '高端医疗器械',
      'LED封装检测',
    ],
    models: [
      {
        name: '大理石龙门双驱精密运动平台',
        description:
          'XYZ工作台，X轴底座为大理石横梁，为三轴精密定位平台。龙门结构，横梁随XY轴运动，双Y轴各由1个驱动器驱动。直线电机驱动，光栅尺或磁栅尺反馈，um级重复定位精度。',
        highlights: ['大理石横梁', '三轴精密定位', 'um级重复精度', '可定制行程'],
        image: '/images/platforms/platform-3.png',
        specs: [
          { name: '参数', unit: '', values: ['X轴(上轴)', 'Y1/Y2轴(下轴)'] },
          { name: '速度', unit: 'mm/s', values: ['<1500', '<1500'] },
          { name: '加速度', unit: 'G', values: ['<1', '<1'] },
          { name: '定位精度', unit: 'μm', values: ['≤±1.5', '≤±1.5'] },
          { name: '重复定位精度', unit: 'μm', values: ['≤±1', '≤±1'] },
          { name: '直线度', unit: 'μm', values: ['≤±2/300mm', '≤±2/300mm'] },
        ],
      },
      {
        name: '十字精密运动平台',
        description:
          'XY工作台，可以实现微米级重复定位精度。最大速度1500mm/s，最大加速度2G。直线电机驱动，光栅尺或磁栅尺反馈，采用板金+风琴罩双重防尘方式。',
        highlights: ['微米级精度', '最大速度1500mm/s', '风琴罩双重防尘', '可选大理石/铝型材'],
        image: '/images/platforms/platform-4.png',
        specs: [
          { name: '参数', unit: '', values: ['X轴(上轴)', 'Y轴(下轴)'] },
          { name: '有效行程', unit: 'mm', values: ['100-600', '100-600'] },
          { name: '最大速度', unit: 'm/s', values: [1.5, 1.5] },
          { name: '最大加速度', unit: 'G', values: [2, 2] },
          { name: '重复精度', unit: 'μm', values: ['±1', '±1'] },
          { name: '绝对精度', unit: 'μm', values: ['3(补偿后)', '3(补偿后)'] },
        ],
      },
    ],
  },
  {
    slug: 'voice-coil',
    title: '音圈执行器',
    subtitle: 'Voice Coil Actuators',
    image: '/images/products/voice-coil-kplr.png',
    heroImage: '/images/products/kplr-hero.png',
    description:
      'KPLR直线旋转音圈执行器集直线与旋转运动于一体，力重复精度高，参数可调，高速高频，使用寿命达亿次。广泛应用于半导体、光电等行业高力控精度生产组装场景。',
    applications: [
      '半导体芯片贴装',
      '光电器件组装',
      '精密检测设备',
      '医疗精密组装',
    ],
    models: [
      {
        name: 'KPLR-20-15 直线旋转音圈执行器',
        description:
          '集直线行程和旋转功能于一体，力重复精度在±3g以内，满足半导体、光电等行业高力控精度生产组装需求。产品设计紧凑轻薄，空载可达30Hz以上，使用寿命上亿次。',
        highlights: [
          '力重复精度±3g',
          '寿命达亿次',
          '直线+旋转一体',
          '真空气路',
          '空载30Hz+',
        ],
        image: '/images/products/voice-coil-kplr.png',
        drawings: [
          { label: '订购说明', src: '/images/drawings/kplr-order.png' },
          { label: '技术参数', src: '/images/drawings/kplr-params.png' },
          { label: '尺寸图', src: '/images/drawings/kplr-drawing.png' },
        ],
        specs: [
          { name: '型号', unit: '', values: ['KPLR-20-15'] },
          { name: '峰值推力', unit: 'N', values: [16.5] },
          { name: '持续推力', unit: 'N', values: [8] },
          { name: '总行程', unit: 'mm', values: [15] },
          { name: '力重复精度', unit: 'g', values: ['±3'] },
          { name: '力常数', unit: 'N/A', values: [6.7] },
          { name: '最大转速', unit: 'rpm', values: [2000] },
          { name: '位置重复定位精度', unit: 'μm', values: ['±2'] },
          { name: '直线行程分辨率', unit: 'μm', values: [0.5] },
          { name: '整体质量', unit: 'g', values: [600] },
          { name: '尺寸', unit: 'mm', values: ['160×83×20'] },
        ],
      },
    ],
  },
  {
    slug: 'dexterous-hands',
    title: '灵巧手',
    subtitle: 'Dexterous Hand',
    image: '/images/products/dexterous-hand-kdh5f.png',
    heroImage: '/images/products/dexterous-hand-hero.png',
    description:
      '高精度仿人五指灵巧手，采用先进的传感器和控制算法，实现精准的力控和位置控制。每个手指独立驱动，可实现复杂的抓取和操作动作，广泛应用于人形机器人、协作机器人和科研教学等领域。',
    applications: [
      '人形机器人手部系统',
      '协作机器人精密操作',
      '科研教学与实验平台',
      '精密装配与检测',
      '医疗康复训练设备',
    ],
    models: [
      {
        name: 'KDH-5F 五指标准型灵巧手',
        description:
          '15自由度仿人五指灵巧手，适用于人形机器人和服务机器人。每指3个关节，实现灵活的抓取和操作动作。',
        highlights: [
          '15个自由度，灵活操作',
          '单指负载3-5kg',
          '重复定位精度±0.1mm',
          'EtherCAT/CAN通讯接口',
        ],
        image: '/images/products/dexterous-hand-kdh5f.png',
        specs: [
          { name: '型号', unit: '', values: ['KDH-5F-15', 'KDH-5F-20'] },
          { name: '自由度', unit: 'DOF', values: [15, 15] },
          { name: '单指负载', unit: 'kg', values: [3, 5] },
          { name: '重复定位精度', unit: 'mm', values: ['±0.1', '±0.1'] },
          { name: '通讯接口', unit: '', values: ['EtherCAT', 'EtherCAT/CAN'] },
          { name: '重量', unit: 'kg', values: [1.2, 1.5] },
          { name: '最大张开角度', unit: '°', values: [180, 180] },
          { name: '响应时间', unit: 'ms', values: ['<10', '<10'] },
        ],
      },
      {
        name: 'KDH-5F-Pro 五指增强型灵巧手',
        description:
          '20自由度高精度灵巧手，拇指4个关节，其他指各4个关节。具备力控功能，适用于精密装配和医疗手术辅助等高精度应用。',
        highlights: [
          '20个自由度，超高灵活性',
          '单指负载5-8kg',
          '重复定位精度±0.05mm',
          '力控精度±0.1N',
        ],
        image: '/images/products/dexterous-hand-kdh5f-pro.png',
        specs: [
          { name: '型号', unit: '', values: ['KDH-5F-Pro'] },
          { name: '自由度', unit: 'DOF', values: [20] },
          { name: '单指负载', unit: 'kg', values: [8] },
          { name: '重复定位精度', unit: 'mm', values: ['±0.05'] },
          { name: '力控精度', unit: 'N', values: ['±0.1'] },
          { name: '通讯接口', unit: '', values: ['EtherCAT/CAN/RS485'] },
          { name: '重量', unit: 'kg', values: [1.8] },
          { name: '最大张开角度', unit: '°', values: [200] },
          { name: '响应时间', unit: 'ms', values: ['<5'] },
        ],
      },
      {
        name: 'KDH-3F 三指夹爪型灵巧手',
        description:
          '9自由度三指夹爪，每指3个关节。结构紧凑，负载能力强，适用于工业抓取和物流分拣等应用场景。',
        highlights: [
          '9个自由度',
          '单指负载5-10kg',
          '结构紧凑',
          '高可靠性',
        ],
        image: '/images/products/dexterous-hand-kdh3f.png',
        specs: [
          { name: '型号', unit: '', values: ['KDH-3F-09'] },
          { name: '自由度', unit: 'DOF', values: [9] },
          { name: '单指负载', unit: 'kg', values: [10] },
          { name: '重复定位精度', unit: 'mm', values: ['±0.1'] },
          { name: '通讯接口', unit: '', values: ['EtherCAT/CAN'] },
          { name: '重量', unit: 'kg', values: [1.0] },
          { name: '最大张开角度', unit: '°', values: [120] },
          { name: '响应时间', unit: 'ms', values: ['<10'] },
        ],
      },
    ],
  },
  {
    slug: 'joint-modules',
    title: '关节模组',
    subtitle: 'Joint Module',
    image: '/images/products/joint-module-kjm30.png',
    heroImage: '/images/products/joint-module-hero.png',
    description:
      '专为人形机器人应用设计的高性能关节执行器，集成行星滚柱丝杠、力传感器、电机和编码器于一体，实现灵活而强大的肢体运动控制。支持EtherCAT/CANopen通讯协议，最大推力可达8000N，速度可达400mm/s。',
    applications: [
      '人形机器人肢体驱动',
      '双足机器人关节控制',
      '高负载仿生机器人',
      '协作机器人手臂关节',
      '外骨骼机器人',
    ],
    models: [
      {
        name: 'KJM-10 轻量型关节模组',
        description:
          '轻量化设计，最大推力600N，速度300mm/s，重量仅0.5kg。集成力传感器和反向式行星滚柱丝杠技术，适用于人形机器人和轻型协作机器人。',
        highlights: [
          '最大推力600N',
          '速度300mm/s',
          '重量0.5kg',
          '内置力传感器',
        ],
        image: '/images/products/joint-module-kjm10.png',
        specs: [
          { name: '型号', unit: '', values: ['KJM-10-600', 'KJM-10-800'] },
          { name: '最大推力', unit: 'N', values: [600, 800] },
          { name: '速度', unit: 'mm/s', values: [300, 280] },
          { name: '行程', unit: 'mm', values: [100, 100] },
          { name: '重量', unit: 'kg', values: [0.5, 0.6] },
          { name: '通讯接口', unit: '', values: ['EtherCAT', 'EtherCAT'] },
          { name: '防护等级', unit: '', values: ['IP40', 'IP40'] },
        ],
      },
      {
        name: 'KJM-30 标准型关节模组',
        description:
          '标准型关节模组，最大推力2000N，速度350mm/s，重量1.2kg。采用反向式行星滚柱丝杠技术，内置拉压力传感器，适用于人形机器人和双足机器人。',
        highlights: [
          '最大推力2000N',
          '速度350mm/s',
          '重量1.2kg',
          'EtherCAT通讯',
        ],
        image: '/images/products/joint-module-kjm30.png',
        specs: [
          { name: '型号', unit: '', values: ['KJM-30-2000', 'KJM-30-2500', 'KJM-30-3000'] },
          { name: '最大推力', unit: 'N', values: [2000, 2500, 3000] },
          { name: '速度', unit: 'mm/s', values: [350, 330, 310] },
          { name: '行程', unit: 'mm', values: [150, 150, 150] },
          { name: '重量', unit: 'kg', values: [1.2, 1.3, 1.4] },
          { name: '通讯接口', unit: '', values: ['EtherCAT', 'EtherCAT', 'CANopen'] },
          { name: '防护等级', unit: '', values: ['IP40', 'IP40', 'IP40'] },
        ],
      },
      {
        name: 'KJM-60 增强型关节模组',
        description:
          '增强型关节模组，最大推力5000N，速度380mm/s，重量2.0kg。高刚性设计，适用于高负载仿生机器人和工业机器人应用。',
        highlights: [
          '最大推力5000N',
          '速度380mm/s',
          '重量2.0kg',
          '高刚性设计',
        ],
        image: '/images/products/joint-module-kjm60.png',
        specs: [
          { name: '型号', unit: '', values: ['KJM-60-5000', 'KJM-60-6000'] },
          { name: '最大推力', unit: 'N', values: [5000, 6000] },
          { name: '速度', unit: 'mm/s', values: [380, 360] },
          { name: '行程', unit: 'mm', values: [200, 200] },
          { name: '重量', unit: 'kg', values: [2.0, 2.2] },
          { name: '通讯接口', unit: '', values: ['EtherCAT', 'EtherCAT'] },
          { name: '防护等级', unit: '', values: ['IP40', 'IP40'] },
        ],
      },
      {
        name: 'KJM-100 重载型关节模组',
        description:
          '重载型关节模组，最大推力8000N，速度400mm/s，重量3.5kg。超强承载能力，适用于特种机器人和重型工业机器人应用。',
        highlights: [
          '最大推力8000N',
          '速度400mm/s',
          '重量3.5kg',
          '超强承载能力',
        ],
        image: '/images/products/joint-module-kjm100.png',
        specs: [
          { name: '型号', unit: '', values: ['KJM-100-8000', 'KJM-100-10000', 'KJM-100-12000'] },
          { name: '最大推力', unit: 'N', values: [8000, 10000, 12000] },
          { name: '速度', unit: 'mm/s', values: [400, 380, 360] },
          { name: '行程', unit: 'mm', values: [250, 250, 250] },
          { name: '重量', unit: 'kg', values: [3.5, 3.8, 4.0] },
          { name: '通讯接口', unit: '', values: ['EtherCAT', 'EtherCAT', 'CANopen'] },
          { name: '防护等级', unit: '', values: ['IP40', 'IP40', 'IP40'] },
        ],
      },
    ],
  },
];

export function getCategoryBySlug(slug: string) {
  return productCategories.find((c) => c.slug === slug);
}
