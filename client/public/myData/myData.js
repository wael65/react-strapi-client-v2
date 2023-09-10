export const categories = [
  {
    id: "1",
    category: "games",
    deescription: "BlaBlaBla",
    subMenu: ["play station ", "X Box", "VR"],
    icon: "../assets/icons/game-icons-64.png",
  },
  {
    id: "2",
    category: "mobiles",
    deescription: "BlaBlaBla",
    subMenu: ["Mobile", "Tablet", "Accessories"],
    icon: "../assets/icons/mobile-icon-64.png",
  },

  {
    id: "3",
    category: "fashion",
    deescription: "BlaBlaBla",
    subMenu: ["Men", "Women", "Kids"],
    icon: "../assets/icons/fashion-icon-64.png",
  },
];

export const cat = categories.map((i) => i.category);

export const categor = categories.map((i) => ({ ca: i.category, ic: i.icon }));

export const subCategory = [
  { title: "play station", desc: "", upCat: "games" },
  { title: "X Box", desc: "", upCat: "games" },
  { title: "VR", desc: "", upCat: "games" },
  { title: "mobile", desc: "", upCat: "mobiles" },
  { title: "Tablet", desc: "", upCat: "mobiles" },
  { title: "Accessories", desc: "", upCat: "mobiles" },
  { title: "Men", desc: "", upCat: "fashion" },
  { title: "Women", desc: "", upCat: "fashion" },
  { title: "Kids", desc: "", upCat: "fashion" },
];

export const subCat = subCategory.map((s) => ({
  title: s.title,
  category: s.upCat,
}));

export const Products = [
  {
    img: "../assets/img-list-1.png",
    title: "Meta Quest 2",
    category: "games",
    shortDesc: "Advanced All-In-One Virtual Reality ",
    description:
      "Meta Quest 2 — Advanced All-In-One Virtual Reality Headset — 128 GB",
  },
  {
    img: "../assets/img-list-2.png",
    title: "Amazon Essentials",
    category: "fashion",
    shortDesc: "2 Pack Mens T-Shirt",
    description:
      "Amazon Essentials 2 Pack Mens Regular Fit Short Sleeve Crew Neck T-Shirt",
  },
  {
    img: "../assets/img-list-3.png",
    title: "Google Pixel 7a",
    category: "mobile",
    shortDesc: "5G Enabled Android Smartphone",
    description:
      "Google Pixel 7a and Charger - 5G Enabled Android Smartphone without SIM Lock, with Wide Angle Lens and Impressive Battery Life - Charcoal",
  },
];

export const bannerData = [
  {
    img: "../assets/banner1.jpg",
    title: "Fashion",
    subTitle: "For All",
    Link: "*",
  },
  {
    img: "../assets/banner2.jpg",
    title: "Beauty Products",
    subTitle: "explore top sellers",
    Link: "*",
  },
  {
    img: "../assets/banner3.jpg",
    title: "Shop Gaming ",
    subTitle: "Essentials",
    Link: "*",
  },
  {
    img: "../assets/banner4.jpg",
    title: "Explor Our ",
    subTitle: "Selection Device",
    Link: "*",
  },
];
