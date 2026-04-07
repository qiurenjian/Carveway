'use client';

import { company } from '@/data/company';

// Geocoded coordinates for 深圳市南山区松白路1059号百旺二工业园
// Source: Tencent Maps Geocoder API (similarity 0.99)
const LAT = 22.632545;
const LNG = 113.931483;

const title = '凯为传动技术（深圳）有限公司';
const addr = company.address;

// poimarker: shows marker with title+addr popup, built-in "去这里" opens routing in Tencent Maps
const mapSrc = `https://apis.map.qq.com/tools/poimarker?type=0&marker=coord:${LAT},${LNG};title:${encodeURIComponent(title)};addr:${encodeURIComponent(addr)}&key=OB4BZ-D4W3U-B7VVO-4PJWW-6TKDJ-WPB77&referer=carveway`;

export default function ContactMap() {
  return (
    <div className="rounded-xl overflow-hidden border border-[#E2E8F0] shadow-sm" style={{ minHeight: 400 }}>
      <iframe
        title="凯为传动地址"
        src={mapSrc}
        width="100%"
        height="480"
        style={{ border: 0, display: 'block' }}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        allowFullScreen
      />
    </div>
  );
}
