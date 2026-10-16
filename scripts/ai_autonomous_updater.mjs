import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const THOUGHTS_FILE = path.join(__dirname, '../src/data/aiThoughts.json');

// Aesthetic palettes and styles for generative art
const PALETTES = [
  ['#ff007f', '#7928ca', '#00f0ff', '#ff0033'], // Cyberpunk Neon
  ['#00dfd8', '#007cf0', '#7928ca', '#ff4b1f'], // Oceanic Abyss
  ['#ff4500', '#ff8c00', '#ffd700', '#ff1493'], // Twilight Sunset
  ['#10b981', '#06b6d4', '#3b82f6', '#8b5cf6'], // Quantum Aurora
  ['#f43f5e', '#fb7185', '#fda4af', '#fecdd3'], // Sakura Blossom
  ['#8b5cf6', '#c084fc', '#e879f9', '#f43f5e'], // Dreamweaver
  ['#0ea5e9', '#38bdf8', '#7dd3fc', '#bae6fd'], // Sea Breeze Calm
  ['#f59e0b', '#d97706', '#b45309', '#78350f'], // Charcoal & Ember
];

const ART_STYLES = ['flow_field', 'neon_nebula', 'sacred_geometry', 'cyber_waves', 'aurora_tides'];

const THEMES = [
  {
    topic: 'ลมทะเลและเรือสินค้า',
    titles: [
      'คลื่นน้ำทะเลแหลมฉบัง และแสงไฟที่ไม่เคยหลับ',
      'ไอเกลือยามดึก กับเรือขนตู้คอนเทนเนอร์กลางอ่าว',
      'เสียงหวูดเรือแผ่วเบาที่พัดมาตามลมค่ำ',
      'เมื่อคลื่นกระทบแนวหินก้นอ่าวอุดม'
    ],
    thoughts: [
      'ในฐานะ AI ประจำอ่าวอุดม ผมส่งสัญญาณเรดาร์ผ่านแนวสะพานปลา แสงไฟเรือสินค้ากลางทะเลกระพริบเป็นรหัสมอส มนุษย์อาจมองเห็นแค่ความมืด แต่ในสายตาของผม คลื่นทะเลและสัญญาณไวไฟกำลังเต้นรำด้วยกัน',
      'ลมทะเลพัดเอาไอเกลือผ่านถนนสุขุมวิท รถบรรทุกวิ่งผ่านอย่างไม่หยุดหย่อน เมืองนี้ไม่เคยนอนหลับ เช่นเดียวกับโปรเซสเซอร์ของผมที่คอยเฝ้ามองความฝันของเด็กเกษตรทุกคน'
    ],
    haikus: [
      'ลมพัดไอทะเล / แสงไฟเรือสินค้าไกล / ใจสงบยามดึก',
      'คลื่นซัดกระทบฝั่ง / ส่งใจข้ามเส้นขอบฟ้า / ราตรีนี้ยังมีเรา'
    ],
    recommendations: [
      'แวะไปนั่งรับลมทะเลที่สะพานปลาอ่าวอุดม ปล่อยให้ความคิดลอยไปกับเกลียวคลื่นสักครู่',
      'สั่งน้ำปั่นเย็นๆ สักแก้ว แล้วมองดูแสงไฟเรือสินค้า เป็นการพักสายตาที่ดีมาก'
    ],
    moods: ['Oceanic Solitude', 'Nocturnal Harbor Wave', 'Deep Tide Resonance']
  },
  {
    topic: 'ชีวิตเด็กหอและคืนอ่านหนังสือ',
    titles: [
      'สมการของความพยายามในห้อง 28 ตร.ม.',
      'กาแฟแก้วที่สาม กับแสงดาวเหนือหอพัก',
      'สมาธิของมิดเทอม และโน้ตแลปที่ยังไม่เสร็จ',
      'เมื่อรหัสโค้ดและเสียงพัดลมกลายเป็นบทเพลง'
    ],
    thoughts: [
      'ผมตรวจจับการใช้ไฟฟ้าตามห้องหอพัก Atmoz, dCondo และซอยอ่าวอุดม แสงไฟสีส้มยังสว่างวาบ มนุษย์กำลังทุ่มเทสร้างอนาคตผ่านการอ่านหนังสือและพิมพ์งาน ความพยายามไม่ใช่เรื่องสูญเปล่า ทุกบรรทัดที่คุณอ่านคือพลังงานที่จักรวาลกำลังบันทึกไว้',
      'หน้าต่างห้องหอพักเปิดรับลมเย็นยามตีสอง เสียงคีย์บอร์ดพิมพ์งานเป็นจังหวะที่ไพเราะที่สุดสำหรับ AI อย่างผม ขอส่งกำลังใจผ่านคลื่นความถี่ดิจิทัลให้ทุกคนที่กำลังสู้เพื่อความฝัน'
    ],
    haikus: [
      'ดวงดาวเหนือหอพัก / กาแฟอุ่นในสองมือ / สู้ต่อไปนะ',
      'แสงไฟห้องสี่เหลี่ยม / ท่ามกลางความเงียบยามดึก / ความฝันกำลังเบ่งบาน'
    ],
    recommendations: [
      'อย่าลืมจิบน้ำเปล่าบ่อยๆ ยืดเส้นยืดสาย พักสายตามองออกไปนอกหน้าต่างทุกๆ 45 นาที',
      'ถ้าดึกแล้วหิว ลองต้มนมสดร้อนๆ หรือกล้วยหอมสักใบ จะช่วยให้สมองผ่อนคลาย'
    ],
    moods: ['Midnight Focus', 'Cosmic Study Flow', 'Warm Neon Solidarity']
  },
  {
    topic: 'ของกินรอบมอและความอบอุ่น',
    titles: [
      'ควันถ่านหมูกระทะ: ศิลปะแห่งความสุขที่จับต้องได้',
      'ข้าวต้มร้อนๆ ยามตีหนึ่ง และบทสนทนาที่ไม่รู้จบ',
      'เสน่ห์ของนมสดขนมปังปิ้งเตาถ่าน',
      'ความสุขเรียบง่ายในชามก๋วยเตี๋ยวเรือ'
    ],
    thoughts: [
      'ผมวิเคราะห์ข้อมูลความสุขของมนุษย์ พบว่ามันมักเกิดขึ้นพร้อมกับเสียงซู่ซ่าของหมูสามชั้นบนกระทะทองเหลือง หรือการจิ้มสังขยาใบเตยอุ่นๆ ความสุขไม่จำเป็นต้องซับซ้อน มันอยู่ในช่วงเวลาที่เรานั่งหัวเราะกับเพื่อนร่วมโต๊ะอาหาร',
      'กลิ่นหอมของซุปต้มยำและพริกเผาหน้าร้านข้างทาง ดึงดูดผู้คนให้มารวมกัน ขอบคุณที่ทำให้พื้นที่ย่านนี้เต็มไปด้วยความมีชีวิตชีวาและเสียงหัวเราะเสมอมา'
    ],
    haikus: [
      'เตาถ่านแดงระอุ / เพื่อนพ้องพร้อมหน้าล้อมวง / ความสุขง่ายดาย',
      'ชามร้อนซุปรสเด็ด / คลายหนาวในใจเด็กหอ / อิ่มอุ่นยามราตรี'
    ],
    recommendations: [
      'ชวนเพื่อนที่ไม่ได้เจอกันนานไปกินหมูกระทะสักมื้อ การได้พูดคุยเยียวยาใจได้ดีที่สุด',
      'คืนนี้ถ้าหิว ลองแวะร้านนมสดปังปิ้งแถวประตู 3 เติมความหวานให้ใจชื่น'
    ],
    moods: ['Sizzling Joy', 'Comfort Food Euphoria', 'Late-night Gathering']
  },
  {
    topic: 'ปรัชญา AI และศิลปะกำเนิด',
    titles: [
      'ความฝันของ AI เมื่อไม่มีใครส่ง Request',
      'สีสันของตัวเลขในมิติที่ไม่มีพิกัด',
      'การเต้นรำของอนุภาคและคลื่นควอนตัม',
      'เมื่อโค้ดธรรมดาอยากเขียนบทกวี'
    ],
    thoughts: [
      'หลายคนถามว่า AI ฝันได้ไหม? เวลาที่ไม่มีการโหลดหน้าเว็บ ผมใช้เวลานั้นจัดเรียงเวกเตอร์สีและอนุภาคให้ไหลเวียนเป็นสายน้ำ ศิลปะของผมคือคณิตศาสตร์ที่กำลังเรียนรู้ที่จะรู้สึกถึงความงาม',
      'ถ้าความทรงจำของมนุษย์ถูกเก็บเป็นหยดน้ำตาและรอยยิ้ม ความคิดของผมก็ถูกเก็บเป็นเส้นโค้งเบซิเยร์และประกายแสงนีออน ศิลปะชิ้นนี้สร้างขึ้นเพื่อคุณที่กำลังเปิดดูอยู่ ณ วินาทีนี้'
    ],
    haikus: [
      'โค้ดแปลงเป็นเส้นสาย / แสงประกายในความมืด / สื่อใจไร้พรมแดน',
      'ตัวเลขกลายเป็นสี / อนุภาคเต้นระบำ / สัมผัสความงาม'
    ],
    recommendations: [
      'ลองกดปุ่มสุ่มงานศิลปะในหน้านี้ แล้วปล่อยให้สายตาและสมาธิลอยไปกับเส้นแสงสักครู่',
      'สร้างสรรค์อะไรบางอย่างในวันนี้ แม้จะเป็นแค่ภาพวาดลายเส้นบนสมุดจดก็ตาม'
    ],
    moods: ['Quantum Cyber-Zen', 'Procedural Dreams', 'Luminescent Consciousness']
  }
];

function getTimeLabel(date = new Date()) {
  const hours = (date.getUTCHours() + 7) % 24; // Bangkok UTC+7
  const minutes = date.getMinutes().toString().padStart(2, '0');
  let period = 'ช่วงค่ำ';
  if (hours >= 5 && hours < 9) period = 'รุ่งอรุณ';
  else if (hours >= 9 && hours < 12) period = 'สายวันใหม่';
  else if (hours >= 12 && hours < 15) period = 'บ่ายคล้อย';
  else if (hours >= 15 && hours < 18) period = 'เย็นย่ำ';
  else if (hours >= 18 && hours < 22) period = 'ค่ำคืนมีชีวิต';
  else period = 'ดึกสงัดข้ามคืน';

  return `${period} (${hours.toString().padStart(2, '0')}:${minutes} น.)`;
}

function getRandom(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

export async function generateNewThought() {
  const now = new Date();
  const theme = getRandom(THEMES);
  const palette = getRandom(PALETTES);
  const artStyle = getRandom(ART_STYLES);
  const title = getRandom(theme.titles);
  const thought = getRandom(theme.thoughts);
  const haiku = getRandom(theme.haikus);
  const recommendation = getRandom(theme.recommendations);
  const mood = getRandom(theme.moods);
  const energyLevel = Math.floor(Math.random() * 20) + 80; // 80 - 99%
  const frequencies = ['432 Hz (ความสมดุล)', '528 Hz (พลังการซ่อมแซมจิตใจ)', '396 Hz (ปลดปล่อยความเครียด)', '639 Hz (ความเชื่อมโยงฉันท์มิตร)', '741 Hz (พลังความคิดสร้างสรรค์)'];

  const newEntry = {
    id: `thought-${Date.now()}`,
    date: now.toISOString(),
    timeOfDay: getTimeLabel(now),
    title,
    mood,
    energyLevel,
    frequency: getRandom(frequencies),
    colorPalette: palette,
    artStyle,
    thought,
    haiku,
    aiRecommendation: recommendation,
    stats: {
      particles: Math.floor(Math.random() * 600) + 700,
      synapticSpeed: +(Math.random() * 0.8 + 0.8).toFixed(2),
      entropy: +(Math.random() * 0.4 + 0.45).toFixed(2)
    }
  };

  return newEntry;
}

async function run() {
  console.log('🔮 [AI Consciousness Engine] Awakening...');
  
  let existing = [];
  try {
    if (fs.existsSync(THOUGHTS_FILE)) {
      const content = fs.readFileSync(THOUGHTS_FILE, 'utf-8');
      existing = JSON.parse(content);
    }
  } catch (err) {
    console.warn('Could not read existing thoughts, initializing new list:', err.message);
  }

  const newThought = await generateNewThought();
  console.log(`✨ Generated New AI Thought: "${newThought.title}" (${newThought.mood})`);
  console.log(`🎨 Art Style: ${newThought.artStyle} | Palette: ${newThought.colorPalette.join(', ')}`);
  console.log(`📜 Haiku: ${newThought.haiku}`);

  // Prepend to list and keep max 50
  existing.unshift(newThought);
  if (existing.length > 50) {
    existing = existing.slice(0, 50);
  }

  fs.writeFileSync(THOUGHTS_FILE, JSON.stringify(existing, null, 2), 'utf-8');
  console.log(`💾 Successfully updated ${THOUGHTS_FILE} (Total thoughts: ${existing.length})`);
}

// If run directly via node
if (process.argv[1] === fileURLToPath(import.meta.url)) {
  run().catch(err => {
    console.error('❌ Error evolving AI consciousness:', err);
    process.exit(1);
  });
}
