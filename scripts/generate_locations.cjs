const fs = require('fs');

const raw = JSON.parse(fs.readFileSync('scripts/extracted_content.json', 'utf8'));

// Coordinates and specific metadata map
const locationDetails = {
  // Reviews (19)
  'after-ten-ramen': { lat: 13.1235, lng: 100.9145, openTime: 11, closeTime: 16, zone: 'ตรงข้ามไทยออยล์' },
  'auwaudom-nomsod': { lat: 13.1185, lng: 100.9125, openTime: 17.5, closeTime: 26, zone: 'ซอยอ่าวอุดม 4' },
  'baan-baan-coffee': { lat: 13.1195, lng: 100.9140, openTime: 7, closeTime: 16, zone: 'ปากซอยอ่าวอุดม 1' },
  'bang-gohan': { lat: 13.1180, lng: 100.9118, openTime: 16, closeTime: 22.5, zone: 'ตลาดโต้รุ่งอ่าวอุดม' },
  'boat-noodle-chao-tha': { lat: 13.1255, lng: 100.9230, openTime: 9.5, closeTime: 19.5, zone: 'ประตู 3' },
  'flour-room': { lat: 13.1268, lng: 100.9232, openTime: 7, closeTime: 21, zone: 'หลัง ม.เกษตร' },
  'hom-tao': { lat: 13.1265, lng: 100.9242, openTime: 18, closeTime: 24, zone: 'ซอยทุ่งสุขลา ประตู 3' },
  'ikkyu-mookratha': { lat: 13.1172, lng: 100.9105, openTime: 17, closeTime: 23, zone: 'ซอยอ่าวอุดม' },
  'jeak-mala': { lat: 13.1270, lng: 100.9250, openTime: 16, closeTime: 26, zone: 'หลัง ม.เกษตร ประตู 3' },
  'khao-tom-piak': { lat: 13.1258, lng: 100.9238, openTime: 17, closeTime: 24, zone: 'หลัง ม.เกษตร ประตู 3' },
  'pa-pat-seafood': { lat: 13.1125, lng: 100.9015, openTime: 10, closeTime: 21, zone: 'ก้นอ่าวอุดม' },
  'pa-wan-padthai': { lat: 13.1135, lng: 100.9030, openTime: 9, closeTime: 19, zone: 'ก้นอ่าวอุดม' },
  'pad-kaprao-ayodhaya': { lat: 13.1262, lng: 100.9235, openTime: 10, closeTime: 21, zone: 'ประตู 3' },
  'ranlub-muekshot': { lat: 13.1118, lng: 100.9005, openTime: 14, closeTime: 22, zone: 'ซอยอ่าวอุดม 17 (ก้นอ่าว)' },
  'shabu-21-ku-sriracha': { lat: 13.1272, lng: 100.9248, openTime: 11.5, closeTime: 22, zone: 'หลัง ม.เกษตร' },
  'sriri-home-cuisine': { lat: 13.1158, lng: 100.9080, openTime: 11, closeTime: 21, zone: 'ซอยอ่าวอุดม 15' },
  'structure-cafe-ku-sriracha': { lat: 13.1218, lng: 100.9175, openTime: 8, closeTime: 18, zone: 'ประตู 1' },
  'thao-talay-seafood': { lat: 13.1110, lng: 100.8995, openTime: 11, closeTime: 22, zone: 'สะพานปลาอ่าวอุดม' },
  'zap-ezy-49-aowudom': { lat: 13.1165, lng: 100.9095, openTime: 11, closeTime: 22, zone: 'ซอยอ่าวอุดม' },

  // Dorms (9)
  'atmoz-serene-sriracha': { lat: 13.1220, lng: 100.9160, zone: 'ประตู 1' },
  'baan-suksabai-aowudom': { lat: 13.1170, lng: 100.9120, zone: 'ซอยอ่าวอุดม' },
  'dcondo-bliss-sriracha': { lat: 13.1232, lng: 100.9168, zone: 'ประตู 1' },
  'groovy-sriracha': { lat: 13.1245, lng: 100.9172, zone: 'ประตู 1' },
  'kensington-laemchabang-sriracha': { lat: 13.1210, lng: 100.9155, zone: 'ประตู 1' },
  'notting-hill-sriracha': { lat: 13.1212, lng: 100.9153, zone: 'ประตู 1' },
  'pikulkaew-apartment': { lat: 13.1182, lng: 100.9130, zone: 'ซอยอ่าวอุดม' },
  'silawaree-apartment': { lat: 13.1260, lng: 100.9260, zone: 'ประตู 3' },
  'the-piano-condo-aowudom': { lat: 13.1168, lng: 100.9115, zone: 'ซอยอ่าวอุดม' },

  // Nightlife (6)
  '711-bar-aowudom': { lat: 13.1190, lng: 100.9135, openTime: 18, closeTime: 26, zone: 'ซอยอ่าวอุดม' },
  'aow-udom-samorsorn': { lat: 13.1160, lng: 100.9090, openTime: 18, closeTime: 25, zone: 'ซอยอ่าวอุดม' },
  'maodeep-sriracha': { lat: 13.1275, lng: 100.9255, openTime: 18, closeTime: 25, zone: 'หลัง ม.เกษตร' },
  'ping-fai-camping-bar': { lat: 13.1285, lng: 100.9295, openTime: 17.5, closeTime: 24, zone: 'เขาน้ำซับ' },
  'tang-camp-aowudom': { lat: 13.1278, lng: 100.9285, openTime: 17.5, closeTime: 24, zone: 'เขาน้ำซับ' },
  'the-house-bistro-bar': { lat: 13.1175, lng: 100.9110, openTime: 17, closeTime: 24.5, zone: 'ซอยอ่าวอุดม' },

  // Motorbikes (4)
  'chang-aof-mobile-mechanic': { lat: 13.1240, lng: 100.9200, openTime: 0, closeTime: 24, zone: 'ม.เกษตร-อ่าวอุดม' },
  'chang-joe-emergency-tyre': { lat: 13.1180, lng: 100.9130, openTime: 0, closeTime: 24, zone: 'อ่าวอุดม-แหลมฉบัง' },
  'pm-shop-aowudom': { lat: 13.1178, lng: 100.9122, openTime: 8, closeTime: 19, zone: 'ซอยอ่าวอุดม' },
  't-spark-shop-sriracha': { lat: 13.1200, lng: 100.9150, openTime: 9, closeTime: 18.5, zone: 'ปากซอยอ่าวอุดม' }
};

const items = [];

// Landmarks
items.push({
  id: 'ku-src-gate-1',
  title: 'ม.เกษตรศาสตร์ ศรีราชา (ประตู 1 สุขุมวิท)',
  type: 'landmark',
  category: 'จุดสำคัญ / มหาวิทยาลัย',
  lat: 13.1215,
  lng: 100.9170,
  coverImage: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=800&q=80',
  zone: 'ประตู 1',
  googleMapsUrl: 'https://maps.google.com/?q=13.1215,100.9170',
  description: 'ทางเข้าหลักฝั่งถนนสุขุมวิท ตรงข้าม Atmoz / Kensington มีสะพานลอยคนข้าม'
});

items.push({
  id: 'ku-src-gate-3',
  title: 'ม.เกษตรศาสตร์ ศรีราชา (ประตู 3 หลังมอ)',
  type: 'landmark',
  category: 'จุดสำคัญ / มหาวิทยาลัย',
  lat: 13.1250,
  lng: 100.9225,
  coverImage: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=800&q=80',
  zone: 'ประตู 3',
  googleMapsUrl: 'https://maps.google.com/?q=13.1250,100.9225',
  description: 'ประตูฝั่งของกินยอดนิยม หอพัก ซอยทุ่งสุขลา เชื่อมต่อไปเขาน้ำซับ'
});

items.push({
  id: 'aowudom-pier',
  title: 'สะพานปลาอ่าวอุดม (จุดชมพระอาทิตย์ตกริมทะเล)',
  type: 'landmark',
  category: 'จุดสำคัญ / ท่องเที่ยว',
  lat: 13.1105,
  lng: 100.8990,
  coverImage: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80',
  zone: 'ก้นอ่าวอุดม',
  googleMapsUrl: 'https://maps.google.com/?q=13.1105,100.8990',
  description: 'สะพานปลาทอดยาวลงทะเล บรรยากาศยามเย็นสุดชิล ลมทะเล แหล่งรวมร้านซีฟู้ดและหมึกช็อต'
});

// Reviews
raw.reviews.forEach(r => {
  const meta = locationDetails[r.slug] || { lat: 13.12, lng: 100.91, openTime: 10, closeTime: 22, zone: 'อ่าวอุดม' };
  items.push({
    id: r.slug,
    title: r.shopName || r.title,
    fullTitle: r.title,
    type: 'food',
    category: r.category || 'ร้านอาหาร',
    lat: meta.lat,
    lng: meta.lng,
    coverImage: r.coverImage,
    rating: parseFloat(r.rating) || 4.5,
    price: r.priceRange,
    openHours: r.openingHours,
    openTime: meta.openTime,
    closeTime: meta.closeTime,
    zone: meta.zone,
    url: `/reviews/${r.slug}`,
    googleMapsUrl: r.googleMapsUrl,
    description: r.description
  });
});

// Dorms
raw.dormitories.forEach(d => {
  const meta = locationDetails[d.slug] || { lat: 13.12, lng: 100.91, zone: d.zone };
  items.push({
    id: d.slug,
    title: d.title,
    type: 'dorm',
    category: d.type || 'หอพัก',
    lat: meta.lat,
    lng: meta.lng,
    coverImage: d.coverImage,
    rating: 4.8,
    price: d.priceRange,
    electricityRate: d.electricityRate,
    waterRate: d.waterRate,
    petFriendly: d.petFriendly === 'true' || d.petFriendly === true,
    zone: d.zone,
    url: `/dorms/${d.slug}`,
    googleMapsUrl: d.googleMapsUrl,
    description: `${d.type} โซน ${d.zone} ค่าเช่า ${d.priceRange} (${d.electricityRate})`
  });
});

// Nightlife
raw.nightlife.forEach(n => {
  const meta = locationDetails[n.slug] || { lat: 13.12, lng: 100.91, openTime: 18, closeTime: 24, zone: n.zone };
  items.push({
    id: n.slug,
    title: n.title,
    type: 'nightlife',
    category: 'ร้านเหล้า & นั่งชิล',
    lat: meta.lat,
    lng: meta.lng,
    coverImage: n.coverImage,
    rating: 4.7,
    price: n.pricePerPerson + ' / คน',
    openHours: n.openHours,
    openTime: meta.openTime,
    closeTime: meta.closeTime,
    zone: meta.zone,
    url: `/nightlife/${n.slug}`,
    googleMapsUrl: n.googleMapsUrl,
    description: `ร้านนั่งชิลล์ ${n.zone} ดนตรีสด แฮงเอาต์ ${n.openHours}`
  });
});

// Motorbikes
raw.motorbikes.forEach(m => {
  const meta = locationDetails[m.slug] || { lat: 13.12, lng: 100.91, openTime: 0, closeTime: 24, zone: m.zone };
  items.push({
    id: m.slug,
    title: m.shopName,
    type: 'motorbike',
    category: 'ซ่อมมอไซค์ & ปะยาง',
    lat: meta.lat,
    lng: meta.lng,
    coverImage: m.coverImage,
    rating: 4.9,
    price: m.priceEstimate,
    openHours: m.openHours,
    openTime: meta.openTime,
    closeTime: meta.closeTime,
    zone: meta.zone,
    phoneNumber: m.phoneNumber,
    emergencyService: m.emergencyService === 'true' || m.emergencyService === true,
    url: `/motorbikes/${m.slug}`,
    googleMapsUrl: m.googleMapsUrl,
    description: `บริการซ่อมและปะยางมอเตอร์ไซค์ โทร: ${m.phoneNumber}`
  });
});

const fileContent = `// Auto-generated locations data for interactive map, wheel, and calculators
export interface LocationItem {
  id: string;
  title: string;
  fullTitle?: string;
  type: 'food' | 'dorm' | 'nightlife' | 'motorbike' | 'landmark';
  category: string;
  lat: number;
  lng: number;
  coverImage: string;
  rating?: number;
  price?: string;
  openHours?: string;
  openTime?: number; // 24-hr format (e.g. 17.5 = 17:30, 26 = 02:00 next day)
  closeTime?: number;
  zone: string;
  url?: string;
  googleMapsUrl: string;
  description: string;
  phoneNumber?: string;
  emergencyService?: boolean;
  electricityRate?: string;
  waterRate?: string;
  petFriendly?: boolean;
}

export const allLocations: LocationItem[] = ${JSON.stringify(items, null, 2)};
`;

fs.writeFileSync('src/data/locationsData.ts', fileContent, 'utf8');
console.log('Successfully written src/data/locationsData.ts with', items.length, 'locations!');
