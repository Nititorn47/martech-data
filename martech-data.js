/**
 * MarTech Members Data File
 * ไฟล์นี้เก็บข้อมูลสมาชิก MarTech Association
 * สามารถแก้ไขข้อมูลได้โดยตรงในไฟล์นี้
 */

const MARTECH_COMPANIES = [
  {
    id: "choco-crm",
    nameTh: "บริษัท ช็อคโก้ คาร์ด เอ็นเตอร์ไพรส์ จำกัด",
    nameEn: "CHOCO CARD ENTERPRISE COMPANY LIMITED",
    logo: "https://martechthai.org/wp-content/uploads/2024/03/Company-Logo-2.png",
    businessType: "Tech Platform",
    contact: "Pitiporn Seeiam",
    phone: "099-382-6945",
    email: "pitiporn.se@chococrm.com",
    website: "https://chococrm.com/",
    description: "Choco CRM มีความเชี่ยวชาญด้าน Loyalty Program และการทำ Marketing Automation ผ่านแพลตฟอร์มที่ออกแบบมาเพื่อช่วยธุรกิจของลูกค้าให้เกิดประโยชน์สูงสุด",
    tags: ["CRM", "Loyalty", "Automation"]
  },
  {
    id: "digital-integrate",
    nameTh: "บริษัท ดิจิทัล อินทิเกรท จำกัด",
    nameEn: "Digital Integrated Co., Ltd.",
    logo: "https://martechthai.org/wp-content/uploads/2024/03/Company-Logo-3.png",
    businessType: "Agency",
    website: "https://www.digitalintegrated.co.th/",
    description: "Digital Integrated is an award-winning digital marketing agency based in Thailand.",
    tags: ["Agency", "Marketing"]
  },
  {
    id: "crescendo-lab",
    nameTh: "บริษัท เครสเซนโด้ แล็บ จำกัด",
    nameEn: "Crescendo Lab Co., Ltd.",
    logo: "https://martechthai.org/wp-content/uploads/2024/03/Company-Logo-11.png",
    businessType: "Tech Platform",
    website: "https://www.cresclab.com/",
    description: "MAAC is an AI-powered marketing automation platform for LINE OA.",
    tags: ["Marketing Automation", "LINE OA", "CRM"]
  },
  {
    id: "shipnity",
    nameTh: "บริษัท ชิปนิตี้ จำกัด",
    nameEn: "Shipnity Co.,Ltd.",
    logo: "https://martechthai.org/wp-content/uploads/2024/03/Company-Logo-12.png",
    businessType: "Tech Platform",
    contact: "ภาวิตา",
    phone: "083-959-6263",
    email: "pawita@shipnity.com",
    website: "http://www.shipnity.com",
    description: "Shipnity ระบบจัดการร้านค้าออนไลน์แบบครบวงจร ที่ช่วยเจ้าของธุรกิจบริหารงานได้ตั้งแต่การจัดการออเดอร์",
    tags: ["eCommerce", "Order Management", "Stock"]
  },
  {
    id: "data-first",
    nameTh: "บริษัท ดาต้า เฟิร์ส จำกัด",
    nameEn: "Data First Co., Ltd.",
    logo: "https://martechthai.org/wp-content/uploads/2024/03/Company-Logo-13.png",
    businessType: "Agency",
    contact: "ชญานิศ เติมแก้ว",
    phone: "02-354-3570",
    email: "support@datafirst.id",
    website: "https://www.datafirst.co.th/",
    description: "Data First คือที่ปรึกษาและโซลูชันด้านเดต้าที่ช่วยเร่งการเติบโตของธุรกิจด้วยข้อมูลและเทคโนโลยี",
    tags: ["Data", "CRM", "Consult"]
  },
  {
    id: "dgs-digital",
    nameTh: "บริษัท ดีจีเอส ดิจิตอล จำกัด",
    nameEn: "DGS Digital Co.,Ltd",
    logo: "https://martechthai.org/wp-content/uploads/2024/03/Company-Logo-15.png",
    businessType: "Agency",
    website: "https://digisaws.com/",
    description: "Digisaws เป็นผู้ให้บริการด้านการตลาดแบบครบวงจร (Full-Funnel Marketing Agency)",
    tags: ["Agency", "Full-Funnel"]
  },
  {
    id: "demeter-ict",
    nameTh: "บริษัท ดีมีเตอร์ ไอซีที จำกัด",
    nameEn: "DEMETER ICT CO.,LTD.",
    logo: "https://martechthai.org/wp-content/uploads/2024/03/Company-Logo-16.png",
    businessType: "Consult",
    website: "https://dmit.co.th",
    description: "ผู้ให้บริการและให้คำปรึกษาด้าน Business Transformation ด้วยเทคโนโลยีสารสนเทศบนระบบคลาวด์",
    tags: ["Cloud", "CRM", "Chatbot"]
  },
  {
    id: "dentsu-holdings",
    nameTh: "บริษัท เดนท์สุ โฮลดิ้งส์ (ประเทศไทย) จำกัด",
    nameEn: "Dentsu Holdings (Thailand) Co., Ltd.",
    logo: "https://martechthai.org/wp-content/uploads/2024/03/Company-Logo-17.png",
    businessType: "Agency",
    website: "https://www.dentsu.com/",
    description: "Dentsu is a global advertising and digital marketing agency network.",
    tags: ["Agency", "Media"]
  },
  {
    id: "3ds-interactive",
    nameTh: "บริษัท ทรีดีเอส อินเตอร์แอคทีฟ จำกัด",
    nameEn: "3DS Interactive Co., Ltd.",
    logo: "https://martechthai.org/wp-content/uploads/2024/03/Company-Logo-18.png",
    businessType: "Tech Platform",
    website: "https://pams.ai/",
    description: "PAM Marketing Automation Platform helps marketers automate everyday tasks.",
    tags: ["Marketing Automation", "CDP", "Personalization"]
  },
  {
    id: "tellscore",
    nameTh: "บริษัท เทลสกอร์ จำกัด",
    nameEn: "Tellscore Co., Ltd.",
    logo: "https://martechthai.org/wp-content/uploads/2024/03/Company-Logo-20.png",
    businessType: "Tech Platform",
    website: "https://th.tellscore.com/th",
    description: "Tellscore เป็นแพลตฟอร์มและเอเจนซี่ด้าน Influencer Marketing ชั้นนำของประเทศไทย",
    tags: ["Influencer", "Platform"]
  },
  {
    id: "buzzebees",
    nameTh: "บริษัท บัซซี่บีส์ จำกัด",
    nameEn: "Buzzebees Co., Ltd.",
    logo: "https://martechthai.org/wp-content/uploads/2024/03/Company-Logo-24.png",
    businessType: "Tech Platform",
    website: "https://crm.buzzebees.com/",
    description: "Leading CRM & Loyalty Platform in Thailand.",
    tags: ["CRM", "Loyalty", "Rewards"]
  },
  {
    id: "bookola",
    nameTh: "บริษัท บุโคล่า จำกัด",
    nameEn: "BOOKOLA CO., LTD.",
    logo: "https://martechthai.org/wp-content/uploads/2024/03/Company-Logo-26.png",
    businessType: "Tech Platform",
    website: "https://www.bookola.ai",
    description: "BOOKOLA คือ AI-MarTech สตาร์ทอัปไทยที่ช่วยโรงแรมขนาด 50-200 ห้อง",
    tags: ["Chatbot", "Hotel", "AI"]
  },
  {
    id: "privage-app",
    nameTh: "บริษัท พริเวจ แอป จำกัด",
    nameEn: "PRIVAGE APP COMPANY LIMITED",
    logo: "https://martechthai.org/wp-content/uploads/2025/09/Privage_Logo.png",
    businessType: "Tech Platform",
    website: "https://privageapp.com/th",
    description: "พริเวจ CRM Solution บัตรสะสมแต้มด้วยเบอร์โทรศัพท์ ใช้งานง่ายผ่าน LINE OA",
    tags: ["CRM", "Loyalty", "LINE OA"]
  },
  {
    id: "predictive",
    nameTh: "บริษัท พรีดิกทิฟ จำกัด",
    nameEn: "Predictive Co., Ltd.",
    logo: "https://martechthai.org/wp-content/uploads/2024/03/Company-Logo-28.png",
    businessType: "Consult",
    website: "https://predictive.co.th/",
    description: "Predictive is a leading data & analytics consultancy in Thailand.",
    tags: ["Data", "Analytics", "CDP"]
  },
  {
    id: "readyplanet",
    nameTh: "บริษัท เรดดี้แพลนเน็ต จำกัด (มหาชน)",
    nameEn: "Readyplanet Public Company Limited",
    logo: "https://martechthai.org/wp-content/uploads/2024/03/Company-Logo-35.png",
    businessType: "Tech Platform",
    website: "https://www.readyplanet.com/",
    description: "เราคือบริษัทแพลตฟอร์มการขายและการตลาดแบบรวมเป็นหนึ่งเดียว",
    tags: ["Website", "CRM", "Ads"]
  },
  {
    id: "real-smart",
    nameTh: "บริษัท เรียล สมาร์ท จำกัด",
    nameEn: "REAL SMART PUBLIC COMPANY LIMITED",
    logo: "https://martechthai.org/wp-content/uploads/2024/03/Company-Logo-37.png",
    businessType: "Tech Platform",
    website: "https://www.realsmart.co.th/",
    description: "บริษัท เรียล สมาร์ท จำกัด (มหาชน) ให้บริการ AI Data Technology แบบครบวงจร",
    tags: ["Social Listening", "AI", "Data"]
  },
  {
    id: "robolingo",
    nameTh: "บริษัท โรโบลิงโก้ จำกัด",
    nameEn: "Robolingo Co.,Ltd.",
    logo: "https://martechthai.org/wp-content/uploads/2024/03/Company-Logo-38.png",
    businessType: "Tech Platform",
    website: "https://zwiz.ai",
    description: "ZWIZ.AI แชทบอท เป็น Social Media Automation Tool ที่ตอบโจทย์ทุกธุรกิจออนไลน์",
    tags: ["Chatbot", "AI", "Automation"]
  },
  {
    id: "aiya",
    nameTh: "บริษัท มีจีเนียส จำกัด",
    nameEn: "Megenius Co.,Ltd",
    logo: "https://martechthai.org/wp-content/uploads/2024/03/Company-Logo-33.png",
    businessType: "Tech Platform",
    website: "https://aiya.ai/",
    description: "AIYA คือแพลตฟอร์มที่เชื่อมโยงการขาย การตลาด และบริหารจัดการธุรกิจไว้ในที่เดียว",
    tags: ["CRM", "AI", "Unified Workspace"]
  },
  {
    id: "one-moby",
    nameTh: "บริษัท วันม๊อบบี้ จำกัด",
    nameEn: "One Moby Co., Ltd.",
    logo: "https://martechthai.org/wp-content/uploads/2024/03/Company-Logo-40.png",
    businessType: "Tech Platform",
    website: "https://onemoby.com/",
    description: "One Moby provides digital solutions including SMS marketing and LINE Official Account management.",
    tags: ["SMS", "LINE OA", "CDP"]
  },
  {
    id: "insight-era",
    nameTh: "บริษัท อินไซท์เอรา จำกัด",
    nameEn: "Insight Era Co., Ltd.",
    logo: "https://martechthai.org/wp-content/uploads/2024/03/Company-Logo-48.png",
    businessType: "Consult",
    website: "https://www.insightera.co.th",
    description: "อินไซท์เอรา ผู้ให้บริการ End-to-End MarTech ที่ตอบโจทย์การวิเคราะห์ข้อมูลการตลาดครบทุกมิติ",
    tags: ["Social Listening", "CRM", "CDP"]
  },
  {
    id: "wisesight",
    nameTh: "บริษัท ไวซ์ไซท์ จำกัด",
    nameEn: "Wisesight (Thailand) Co., Ltd.",
    logo: "https://martechthai.org/wp-content/uploads/2025/12/primary-logo-Thanaporn-Proud-Nuchphadung.png",
    businessType: "Tech Platform",
    website: "https://wisesight.com/",
    description: "Wisesight เป็นบริษัทที่มีความเชี่ยวชาญในการวิเคราะห์ข้อมูล",
    tags: ["Social Listening", "Data"]
  },
  {
    id: "bitkub",
    nameTh: "บริษัท บิทคับ แคปปิตอล กรุ๊ป โฮลดิ้งส์ จำกัด",
    nameEn: "Bitkub Capital Group Holdings Co., Ltd.",
    logo: "https://martechthai.org/wp-content/uploads/2024/09/Company-Logo-59.png",
    businessType: "Tech Platform",
    website: "https://www.bitkubcapital.com/",
    description: "Bitkub Capital Group drives Thailand's digital economy through blockchain.",
    tags: ["Blockchain", "Digital Asset"]
  },
  {
    id: "anymind",
    nameTh: "บริษัท เอนี่มายด์ กรุ๊ป จำกัด",
    nameEn: "AnyMind Group Inc.",
    logo: "https://martechthai.org/wp-content/uploads/2024/09/Company-Logo-58.png",
    businessType: "Tech Platform",
    website: "https://anymindgroup.com/",
    description: "End-to-end commerce enablement company providing platforms for influencer marketing.",
    tags: ["Influencer", "eCommerce", "Logistics"]
  },
  {
    id: "winter-egency",
    nameTh: "บริษัท วินเทอร์ อีเจนซี่ จำกัด",
    nameEn: "Winter Egency Co., Ltd.",
    logo: "https://martechthai.org/wp-content/uploads/2024/03/Company-Logo-42.png",
    businessType: "Agency",
    website: "https://www.winter.co.th/",
    description: "W/E blends data-driven strategy with bold creativity to create breakthrough brand experiences.",
    tags: ["Agency", "Creative"]
  }
];

// Tab 2: บุคคลธรรมดา
const MARTECH_PERSONS = [
  { id: "p1", name: "ธีรพล อำไพ" },
  { id: "p2", name: "ชาติชาย มีสุขโข" },
  { id: "p3", name: "รวี อัญญากาญจน์" },
  { id: "p4", name: "ภรต หอมดอก" },
  { id: "p5", name: "เอกพล สมเจริญ" },
  { id: "p6", name: "ปัณณภัต จอมจักร์" },
  { id: "p7", name: "ปริชญ์ เหตระกุล" },
  { id: "p8", name: "ปรางสิริน พิมพ์กิตติ์สิริกุล" },
  { id: "p9", name: "วณิตา เรืองสิตกุล" },
  { id: "p10", name: "พิมพิกา คุณพรหม" },
  { id: "p11", name: "อนุชิต พงศ์ภักดารานนท์" },
  { id: "p12", name: "ศิรพงษ์ สีสไพร" },
  { id: "p13", name: "ธนัทพิชร์ ตั้งวงค์ศรี" }
];

// Popular Tags สำหรับ filter
const MARTECH_POPULAR_TAGS = [
  "CRM",
  "Marketing Automation",
  "AI",
  "CDP",
  "Data",
  "Agency",
  "Loyalty",
  "LINE OA",
  "Chatbot",
  "Social Listening"
];
