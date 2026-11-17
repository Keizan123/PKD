/**
 * data.js — PKD (Persatuan Kucing Depok)
 * Menyimpan semua data statis: kucing, makanan, petshop
 */

// =============================================
// DATA KUCING
// =============================================
const catsData = [
  {
    id: 1,
    name: "Persia",
    emoji: "🐱",
    image: "images/persia.webp",
    bgColor: "#F2C5A0",
    type: "berbulu-panjang",
    typeLabel: "Berbulu Panjang",
    description: "Kucing Persia dikenal dengan bulu panjangnya yang lebat dan wajah peseknya yang menggemaskan.",
    characteristics: ["Wajah pesek (flat-faced)", "Bulu panjang dan lebat", "Temperamen tenang & kalem", "Cocok untuk apartemen"],
    origin: "Persia (Iran)"
  },
  {
    id: 2,
    name: "Anggora",
    emoji: "🐈",
    image: "images/anggora.jpg",
    bgColor: "#D6C5F0",
    type: "berbulu-panjang",
    typeLabel: "Berbulu Panjang",
    description: "Kucing Anggora berasal dari Turki dan terkenal dengan keanggunan bulu putihnya serta sifatnya yang lincah.",
    characteristics: ["Bulu panjang dan halus", "Lincah dan aktif", "Sangat cerdas", "Berasal dari Turki"],
    origin: "Turki"
  },
  {
    id: 3,
    name: "Maine Coon",
    emoji: "🦁",
    image: "images/maine-coon.jpg",
    bgColor: "#C5D6F0",
    type: "berbulu-panjang",
    typeLabel: "Berbulu Panjang",
    description: "Maine Coon adalah salah satu ras kucing terbesar di dunia dengan bulu tebal dan sifat ramah seperti anjing.",
    characteristics: ["Tubuh besar dan kokoh", "Bulu tebal berlapis", "Sangat ramah & sosial", "Suka bermain air"],
    origin: "Amerika Serikat"
  },
  {
    id: 4,
    name: "Siamese",
    emoji: "😺",
    image: "images/siamese.jpg",
    bgColor: "#F0D6C5",
    type: "berbulu-pendek",
    typeLabel: "Berbulu Pendek",
    description: "Kucing Siamese memiliki mata biru yang indah dan sangat vokal — mereka suka berkomunikasi dengan pemiliknya.",
    characteristics: ["Mata biru menawan", "Sangat vokal & ekspresif", "Pola warna point (ujung gelap)", "Sangat setia"],
    origin: "Thailand"
  },
  {
    id: 5,
    name: "British Shorthair",
    emoji: "🐾",
    image: "images/british-shorthair.jpg",
    bgColor: "#C5F0D6",
    type: "berbulu-pendek",
    typeLabel: "Berbulu Pendek",
    description: "British Shorthair dikenal dengan tubuhnya yang bulat, pipi chubby, dan temperamen kalem yang cocok untuk keluarga.",
    characteristics: ["Tubuh bulat dan gemuk", "Wajah chubby menggemaskan", "Kalem dan mandiri", "Minim perawatan bulu"],
    origin: "Inggris"
  },
  {
    id: 6,
    name: "Scottish Fold",
    emoji: "🐈‍⬛",
    image: "images/scottish-fold.jpg",
    bgColor: "#F0C5D6",
    type: "berbulu-pendek",
    typeLabel: "Berbulu Pendek",
    description: "Scottish Fold terkenal dengan telinga terlipat ke depan yang unik, membuat wajahnya terlihat sangat menggemaskan.",
    characteristics: ["Telinga terlipat ke depan", "Ekspresi wajah seperti burung hantu", "Sifat manis dan penyayang", "Suka duduk posisi unik"],
    origin: "Skotlandia"
  },
  {
    id: 7,
    name: "Bengal",
    emoji: "🐯",
    image: "images/bengal.jpg",
    bgColor: "#F0EAC5",
    type: "berbulu-pendek",
    typeLabel: "Berbulu Pendek",
    description: "Kucing Bengal memiliki corak bulu seperti macan tutul yang eksotis dan sifat yang sangat aktif serta energik.",
    characteristics: ["Corak bulu seperti macan tutul", "Sangat aktif dan atletis", "Suka bermain dan menjelajah", "Bulu pendek berkilau"],
    origin: "Amerika Serikat (hibrida)"
  },
  {
    id: 8,
    name: "Kucing Kampung",
    emoji: "😸",
    image: "images/kucing-kampung.jpg",
    bgColor: "#D6F0C5",
    type: "berbulu-pendek",
    typeLabel: "Berbulu Pendek",
    description: "Kucing Domestik atau Kucing Kampung adalah kucing asli Indonesia yang lincah, tangguh, dan mudah beradaptasi.",
    characteristics: ["Sangat adaptif", "Tubuh ramping dan lincah", "Daya tahan kuat", "Beragam warna bulu"],
    origin: "Indonesia"
  },
  {
    id: 9,
    name: "Ragdoll",
    emoji: "🐱",
    image: "images/ragdoll.jpg",
    bgColor: "#C5EAF0",
    type: "berbulu-panjang",
    typeLabel: "Berbulu Panjang",
    description: "Ragdoll mendapatkan namanya karena kebiasaan mereka yang suka rileks di gendongan seperti boneka kain.",
    characteristics: ["Sangat jinak saat digendong", "Mata biru cerah", "Bulu semi-panjang lembut", "Temperamen sangat tenang"],
    origin: "Amerika Serikat"
  },
  {
    id: 10,
    name: "Abyssinian",
    emoji: "🐈",
    image: "images/abyssinian.jpg",
    bgColor: "#F0C5EA",
    type: "berbulu-pendek",
    typeLabel: "Berbulu Pendek",
    typeLabel_en: "Short Hair",
    description: "Kucing Abyssinian adalah salah satu ras tertua dengan penampilan atletis dan sifat yang sangat ingin tahu.",
    description_en: "The Abyssinian is one of the oldest cat breeds, known for its athletic build and inquisitive nature.",
    characteristics: ["Tubuh atletis dan ramping", "Sangat ingin tahu", "Aktif dan suka menjelajah", "Bulu ticked (agouti)"],
    characteristics_en: ["Athletic and slender build", "Curious and alert", "Loves climbing and exploring", "Ticked agouti coat pattern"],
    origin: "Ethiopia",
    origin_en: "Ethiopia"
  },
  {
    id: 11,
    name: "Russian Blue",
    emoji: "🐈‍⬛",
    image: "images/russian-blue.jpg",
    bgColor: "#D0DCE5",
    type: "berbulu-pendek",
    typeLabel: "Berbulu Pendek",
    typeLabel_en: "Short Hair",
    description: "Kucing Russian Blue dikenal dengan bulu perak kebiruan yang mewah, mata hijau zamrud memukau, dan temperamen tenang.",
    description_en: "The Russian Blue is renowned for its plush silvery-blue coat, vivid emerald green eyes, and gentle, loyal temperament.",
    characteristics: ["Bulu perak kebiruan berkilau", "Mata hijau zamrud indah", "Sifat tenang & manis", "Sangat cerdas & setia"],
    characteristics_en: ["Shimmering silver-blue coat", "Stunning emerald green eyes", "Gentle and quiet personality", "Highly intelligent and loyal"],
    origin: "Rusia",
    origin_en: "Russia"
  },
  {
    id: 12,
    name: "Sphynx",
    emoji: "🐱",
    image: "images/sphynx.jpg",
    bgColor: "#FDE2D6",
    type: "berbulu-pendek",
    typeLabel: "Bulu Khusus / Unik",
    typeLabel_en: "Unique / Hairless",
    description: "Kucing Sphynx sangat ikonik karena tidak memiliki mantel bulu tebal, kulitnya hangat dan lembut, serta sifatnya sangat ramah.",
    description_en: "The Sphynx is famous for its lack of a thick fur coat, velvety warm skin, and an outgoing, cuddly personality.",
    characteristics: ["Hampir tanpa bulu (hairless)", "Kulit berkerut hangat & lembut", "Telinga besar seperti kelelawar", "Sangat penyayang & suka dipeluk"],
    characteristics_en: ["Hairless suede-like skin", "Warm and soft body", "Large expressive ears", "Extremely affectionate and playful"],
    origin: "Kanada",
    origin_en: "Canada"
  },
  {
    id: 13,
    name: "Munchkin",
    emoji: "🐾",
    image: "images/munchkin.jpg",
    bgColor: "#FDE8C8",
    type: "berbulu-pendek",
    typeLabel: "Bulu Pendek",
    typeLabel_en: "Short Hair",
    description: "Kucing Munchkin terkenal dengan kakinya yang pendek menggemaskan, lincah saat berlari, dan gemar duduk ala kelinci.",
    description_en: "The Munchkin cat is beloved for its cute short legs, energetic personality, and habit of sitting up like a rabbit.",
    characteristics: ["Kaki pendek yang menggemaskan", "Suka duduk posisi 'kelinci'", "Sangat energik & lincah", "Ceria dan ramah anak"],
    characteristics_en: ["Adorable short legs", "Perches upright like a bunny", "Surprisingly fast and agile", "Sweet-natured and playful"],
    origin: "Amerika Serikat",
    origin_en: "United States"
  },
  {
    id: 14,
    name: "Norwegian Forest",
    emoji: "🦁",
    image: "images/norwegian-forest.jpg",
    bgColor: "#E2E8F0",
    type: "berbulu-panjang",
    typeLabel: "Berbulu Panjang",
    typeLabel_en: "Long Hair",
    description: "Kucing Hutan Norwegia (Skogkatt) memiliki mantel ganda tebal anti air, berbadan gagah perkasa, dan merupakan pemanjat ulung.",
    description_en: "The Norwegian Forest Cat (Skogkatt) features a waterproof double coat, sturdy muscular body, and impressive climbing agility.",
    characteristics: ["Bulu tebal tahan cuaca dingin", "Tubuh besar & otot kuat", "Pemanjat pohon ulung", "Ramah, tenang & mandiri"],
    characteristics_en: ["Thick water-repellent double coat", "Large muscular athletic frame", "Expert climber with strong claws", "Gentle, calm, and friendly"],
    origin: "Norwegia",
    origin_en: "Norway"
  },
  {
    id: 15,
    name: "Birman",
    emoji: "😺",
    image: "images/birman.jpg",
    bgColor: "#E9D8FD",
    type: "berbulu-panjang",
    typeLabel: "Berbulu Panjang",
    typeLabel_en: "Long Hair",
    description: "Kucing Birman (Kucing Suci Burma) memiliki mata biru safir memikat, bulu halus selembut sutra, serta keempat cakar putih berkaus kaki.",
    description_en: "The Birman (Sacred Cat of Burma) charms with striking sapphire eyes, silky coat, and pure white 'gloves' on all four paws.",
    characteristics: ["Mata biru safir menawan", "Ujung cakar putih (white gloves)", "Bulu semi-panjang selembut sutra", "Suara lembut & sangat manis"],
    characteristics_en: ["Deep sapphire blue eyes", "Distinctive pure white paws (gloves)", "Silky single coat that rarely mats", "Sweet, gentle, and quiet nature"],
    origin: "Myanmar (Burma)",
    origin_en: "Myanmar (Burma)"
  }
];

// =============================================
// DATA PETSHOP
// =============================================
const petshopsData = [
  {
    id: 1,
    name: "PetMart Depok",
    emoji: "🏪",
    area: "Beji",
    address: "Jl. Margonda Raya No. 45, Beji, Depok",
    hours: "08.00 – 21.00 WIB",
    phone: "(021) 7765-4321",
    services: ["Grooming", "Pakan", "Aksesoris", "Obat-obatan"],
    mapsUrl: "https://maps.google.com/?q=PetMart+Depok+Margonda"
  },
  {
    id: 2,
    name: "Petshop Kucing Lucu",
    emoji: "😻",
    area: "Sukmajaya",
    address: "Jl. Siliwangi No. 12, Sukmajaya, Depok",
    hours: "09.00 – 20.00 WIB",
    phone: "(021) 7712-9988",
    services: ["Grooming", "Pakan", "Kandang", "Konsultasi"],
    mapsUrl: "https://maps.google.com/?q=Petshop+Kucing+Lucu+Sukmajaya+Depok"
  },
  {
    id: 3,
    name: "Animal Kingdom Depok",
    emoji: "🐾",
    area: "Cimanggis",
    address: "Jl. Raya Bogor KM 32, Cimanggis, Depok",
    hours: "09.00 – 19.00 WIB",
    phone: "(021) 8770-5566",
    services: ["Semua hewan peliharaan", "Pakan", "Aksesoris", "Vaksinasi"],
    mapsUrl: "https://maps.google.com/?q=Animal+Kingdom+Depok+Cimanggis"
  },
  {
    id: 4,
    name: "Happy Paws",
    emoji: "🐱",
    area: "Limo",
    address: "Jl. Limo Raya No. 8, Limo, Depok",
    hours: "08.00 – 20.00 WIB",
    phone: "(021) 7534-2211",
    services: ["Grooming", "Hotel Hewan", "Pakan", "Aksesoris"],
    mapsUrl: "https://maps.google.com/?q=Happy+Paws+Limo+Depok"
  },
  {
    id: 5,
    name: "Petshop Sawangan",
    emoji: "🏬",
    area: "Sawangan",
    address: "Jl. Raya Sawangan No. 23, Sawangan, Depok",
    hours: "08.00 – 18.00 WIB",
    phone: "(021) 7441-8899",
    services: ["Pakan", "Obat-obatan", "Aksesoris", "Kandang"],
    mapsUrl: "https://maps.google.com/?q=Petshop+Sawangan+Depok"
  },
  {
    id: 6,
    name: "Meow & Friends",
    emoji: "😺",
    area: "Cinere",
    address: "Jl. Cinere Raya No. 56, Cinere, Depok",
    hours: "10.00 – 21.00 WIB",
    phone: "(021) 7623-3344",
    services: ["Khusus Kucing", "Grooming Premium", "Spa Kucing", "Pakan Premium"],
    mapsUrl: "https://maps.google.com/?q=Meow+Friends+Cinere+Depok"
  },
  {
    id: 7,
    name: "Depok Pet Center",
    emoji: "🐈",
    area: "Pancoran Mas",
    address: "Jl. Nusantara Raya No. 10, Pancoran Mas, Depok",
    hours: "09.00 – 20.00 WIB",
    phone: "(021) 7752-6677",
    services: ["Grooming", "Pakan", "Kandang Mewah", "Penitipan"],
    mapsUrl: "https://maps.google.com/?q=Depok+Pet+Center+Pancoran+Mas"
  }
];

// =============================================
// DATA MAKANAN (untuk referensi)
// =============================================
const foodTips = [
  "Pilih makanan yang mencantumkan daging asli (bukan by-product) sebagai bahan utama.",
  "Pastikan makanan mengandung taurin yang cukup — nutrisi penting untuk jantung dan mata kucing.",
  "Hindari makanan dengan pengawet buatan berlebihan seperti BHA, BHT, dan ethoxyquin.",
  "Sesuaikan porsi dengan berat badan dan usia kucing Anda.",
  "Selalu sediakan air minum segar di tempat terpisah dari tempat makan.",
  "Perkenalkan makanan baru secara bertahap selama 7-10 hari untuk menghindari gangguan pencernaan.",
  "Kucing yang sudah disterilisasi membutuhkan makanan dengan kalori lebih rendah.",
  "Jangan berikan makanan manusia terutama bawang, cokelat, anggur, dan makanan berlemak tinggi."
];
