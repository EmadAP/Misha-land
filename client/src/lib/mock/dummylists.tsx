import type { ProductItemCardProps } from "../types/type";

import winter1 from "@/assets/banner/seasonItems/winter/winter-Earplugs.jpg";
import winter2 from "@/assets/banner/seasonItems/winter/winter-glove.jpg";
import winter3 from "@/assets/banner/seasonItems/winter/winter-hat.jpg";
import winter4 from "@/assets/banner/seasonItems/winter/winter-scarf.jpg";

import summer1 from "@/assets/banner/seasonItems/summer/summer-bag.jpg";
import summer2 from "@/assets/banner/seasonItems/summer/summer-hat.jpg";
import summer3 from "@/assets/banner/seasonItems/summer/summer-scarf.jpg";
import summer4 from "@/assets/banner/seasonItems/summer/summer-sunglasses.jpg";

import spring1 from "@/assets/banner/seasonItems/spring/spring-bag.jpg";
import spring2 from "@/assets/banner/seasonItems/spring/spring-hat.jpg";
import spring3 from "@/assets/banner/seasonItems/spring/spring-sunglasses.jpg";
import spring4 from "@/assets/banner/seasonItems/spring/spring-thinScarf.jpg";

import fall1 from "@/assets/banner/seasonItems/fall/fall-gloves.jpg";
import fall2 from "@/assets/banner/seasonItems/fall/fall-scarf.jpg";
import fall3 from "@/assets/banner/seasonItems/fall/fall-umbrella.jpg";
import fall4 from "@/assets/banner/seasonItems/fall/fall-watch.jpg";

import springMen from "@/assets/banner/landing/springCollectionBanner.jpg";
import springWomen from "@/assets/banner/landing/springCollectionBanner.jpg";

import summerMen from "@/assets/banner/landing/summerCollectionBanner.jpg";
import summerWomen from "@/assets/banner/landing/summerCollectionBanner.jpg";

import fallMen from "@/assets/banner/landing/fallCollectionBanner.jpg";
import fallWomen from "@/assets/banner/landing/fallCollectionBanner.jpg";

import winterMen from "@/assets/banner/landing/winterCollectionBanner.jpg";
import winterWomen from "@/assets/banner/landing/winterCollectionBanner.jpg";

export const footerPages = [
  { label: "سوالات متداول", href: "/faq" },
  { label: "چرا میشا لند", href: "/why-mishaland" },
  { label: "تماس با ما", href: "/contact" },
  { label: "راهنمای خرید و مقررات", href: "/how-to-buy" },
  { label: "شرایط گارانتی", href: "/waranty-rules" },
  { label: "درباره ما", href: "/about-us" },
];

export const navMenItems = [
  { label: "تی‌شرت", href: "/browse?gender=men&subType=tshirt" },
  { label: "پیراهن", href: "/browse?gender=men&subType=shirt" },
  { label: "هودی / سویشرت", href: "/browse?gender=men&subType=hoodie" },
  { label: "پلیور / بافت", href: "/browse?gender=men&subType=sweater" },
  { label: "کاپشن", href: "/browse?gender=men&subType=jacket" },
  { label: "شلوارک", href: "/browse?gender=men&subType=shorts" },
  { label: "شلوار کتان", href: "/browse?gender=men&subType=chino_pants" },
  { label: "شلوار جین", href: "/browse?gender=men&subType=jeans" },
];

export const navWomenItems = [
  { label: "بلوز", href: "/browse?gender=women&subType=blouse" },
  { label: "پیراهن", href: "/browse?gender=women&subType=dress" },
  { label: "هودی / سویشرت", href: "/browse?gender=women&subType=hoodie" },
  { label: "ژاکت", href: "/browse?gender=women&subType=cardigan" },
  { label: "کاپشن", href: "/browse?gender=women&subType=jacket" },
  { label: "دامن", href: "/browse?gender=women&subType=skirt" },
  { label: "لگ زنانه", href: "/browse?gender=women&subType=leggings" },
  { label: "شلوار جین", href: "/browse?gender=women&subType=jeans" },
];

export const navAccessoryItems = [
  { label: "کیف", href: "/browse?type=accessories&subType=bag" },
  { label: "کفش", href: "/browse?type=accessories&subType=shoes" },
  { label: "کلاه", href: "/browse?type=accessories&subType=hat" },
  { label: "چتر", href: "/browse?type=accessories&subType=umbrella" },
  { label: "شال / روسری", href: "/browse?type=accessories&subType=scarf" },
  { label: "ساعت", href: "/browse?type=accessories&subType=watch" },
  { label: "دستکش", href: "/browse?type=accessories&subType=gloves" },
  { label: "ست هدیه", href: "/browse?type=accessories&subType=gift_set" },
];

export const iranProvinces = [
  "آذربایجان شرقی",
  "آذربایجان غربی",
  "اردبیل",
  "اصفهان",
  "البرز",
  "ایلام",
  "بوشهر",
  "تهران",
  "چهارمحال و بختیاری",
  "خراسان جنوبی",
  "خراسان رضوی",
  "خراسان شمالی",
  "خوزستان",
  "زنجان",
  "سمنان",
  "سیستان و بلوچستان",
  "فارس",
  "قزوین",
  "قم",
  "کردستان",
  "کرمان",
  "کرمانشاه",
  "کهگیلویه و بویراحمد",
  "گلستان",
  "گیلان",
  "لرستان",
  "مازندران",
  "مرکزی",
  "هرمزگان",
  "همدان",
  "یزد",
];

export const iranCities: Record<string, string[]> = {
  "آذربایجان شرقی": ["تبریز", "مراغه", "مرند", "اهر", "سراب"],
  "آذربایجان غربی": ["ارومیه", "خوی", "میاندوآب", "بوکان", "سلماس"],
  اردبیل: ["اردبیل", "مشگین‌شهر", "پارس‌آباد", "خلخال"],
  اصفهان: ["اصفهان", "کاشان", "خمینی‌شهر", "نجف‌آباد"],
  البرز: ["کرج", "فردیس", "نظرآباد", "هشتگرد"],
  ایلام: ["ایلام", "دهلران", "آبدانان"],
  بوشهر: ["بوشهر", "برازجان", "کنگان"],
  تهران: ["تهران", "ری", "اسلام‌شهر", "شهریار"],
  "چهارمحال و بختیاری": ["شهرکرد", "فارسان", "بروجن"],
  "خراسان جنوبی": ["بیرجند", "قاین", "طبس"],
  "خراسان رضوی": ["مشهد", "نیشابور", "سبزوار", "تربت‌حیدریه"],
  "خراسان شمالی": ["بجنورد", "شیروان", "اسفراین"],
  خوزستان: ["اهواز", "آبادان", "دزفول", "خرمشهر"],
  زنجان: ["زنجان", "ابهر", "خرمدره"],
  سمنان: ["سمنان", "شاهرود", "دامغان"],
  "سیستان و بلوچستان": ["زاهدان", "چابهار", "ایرانشهر"],
  فارس: ["شیراز", "مرودشت", "کازرون", "لار"],
  قزوین: ["قزوین", "البرز", "تاکستان"],
  قم: ["قم"],
  کردستان: ["سنندج", "سقز", "بانه"],
  کرمان: ["کرمان", "رفسنجان", "جیرفت"],
  کرمانشاه: ["کرمانشاه", "اسلام‌آباد غرب", "سنقر"],
  "کهگیلویه و بویراحمد": ["یاسوج", "دوگنبدان"],
  گلستان: ["گرگان", "گنبدکاووس", "علی‌آباد"],
  گیلان: ["رشت", "انزلی", "لاهیجان", "ماسال"],
  لرستان: ["خرم‌آباد", "بروجرد", "دورود"],
  مازندران: ["ساری", "آمل", "بابل", "قائم‌شهر"],
  مرکزی: ["اراک", "ساوه", "خمین"],
  هرمزگان: ["بندرعباس", "قشم", "میناب"],
  همدان: ["همدان", "ملایر", "نهاوند"],
  یزد: ["یزد", "اردکان", "میبد"],
};

export const ProductDummyData: ProductItemCardProps[] = [
  {
    id: "1",
    title: "تی‌شرت نخی طرح ساده",
    category: "مردانه",
    price: 320000,
    oldPrice: 380000,
    image: "https://dummyimage.com/400x500/dfdfdf/000000&text=T-Shirt",
    colors: ["مشکی", "سفید", "سرمه‌ای"],
    sizes: ["M", "L", "XL"],
    inStock: true,
  },
  {
    id: "2",
    title: "شلوار جین کلاسیک",
    category: "مردانه",
    price: 680000,
    oldPrice: 750000,
    image: "https://dummyimage.com/400x500/cfcfcf/000000&text=Jeans",
    colors: ["آبی تیره", "آبی روشن"],
    sizes: ["30", "31", "32", "33"],
    inStock: true,
  },
  {
    id: "3",
    title: "هودی کلاهدار دخترانه",
    category: "زنانه",
    price: 540000,
    oldPrice: null,
    image: "https://dummyimage.com/400x500/dddddd/000000&text=Hoodie",
    colors: ["یشمی", "صورتی", "مشکی"],
    sizes: ["S", "M", "L"],
    inStock: false,
  },
  {
    id: "4",
    title: "پیراهن مردانه چهارخانه",
    category: "مردانه",
    price: 450000,
    oldPrice: 520000,
    image: "https://dummyimage.com/400x500/d0d0d0/000000&text=Shirt",
    colors: ["قرمز", "سبز", "آبی"],
    sizes: ["M", "L", "XL"],
    inStock: true,
  },
  {
    id: "5",
    title: "کت کوتاه زنانه",
    category: "زنانه",
    price: 820000,
    oldPrice: 950000,
    image: "https://dummyimage.com/400x500/c6c6c6/000000&text=Short+Coat",
    colors: ["مشکی", "کرم"],
    sizes: ["S", "M"],
    inStock: true,
  },
  {
    id: "6",
    title: "ست لباس بچگانه تابستانی",
    category: "بچگانه",
    price: 390000,
    oldPrice: null,
    image: "https://dummyimage.com/400x500/e1e1e1/000000&text=Kids+Wear",
    colors: ["زرد", "آبی", "سبز"],
    sizes: ["2 سال", "3 سال", "4 سال"],
    inStock: true,
  },
  {
    id: "7",
    title: "پالتو زمستانی بلند",
    category: "زنانه",
    price: 1450000,
    oldPrice: 1600000,
    image: "https://dummyimage.com/400x500/bdbdbd/000000&text=Long+Coat",
    colors: ["مشکی", "زیتونی"],
    sizes: ["M", "L", "XL"],
    inStock: false,
  },
  {
    id: "8",
    title: "شلوار اسلش راحتی",
    category: "مردانه",
    price: 410000,
    oldPrice: 460000,
    image: "https://dummyimage.com/400x500/c8c8c8/000000&text=Jogger",
    colors: ["طوسی", "مشکی"],
    sizes: ["M", "L", "XL", "XXL"],
    inStock: true,
  },
  {
    id: "9",
    title: "دامن کوتاه دخترانه",
    category: "زنانه",
    price: 360000,
    oldPrice: null,
    image: "https://dummyimage.com/400x500/e0e0e0/000000&text=Skirt",
    colors: ["صورتی", "مشکی"],
    sizes: ["S", "M"],
    inStock: true,
  },
  {
    id: "10",
    title: "کاپشن پسرانه ضدآب",
    category: "بچگانه",
    price: 670000,
    oldPrice: 720000,
    image: "https://dummyimage.com/400x500/dcdcdc/000000&text=Kids+Jacket",
    colors: ["آبی", "قرمز"],
    sizes: ["6 سال", "7 سال", "8 سال"],
    inStock: true,
  },
];

export interface AccessoryItem {
  image: string;
  label: string;
}

export const accessoriesData: Record<string, AccessoryItem[]> = {
  بهاری: [
    { image: spring1, label: "کلاه" },
    { image: spring2, label: "شال نازک" },
    { image: spring3, label: "عینک آفتابی" },
    { image: spring4, label: "کیف سبک" },
  ],

  تابستانی: [
    { image: summer1, label: "کلاه آفتابی" },
    { image: summer2, label: "عینک تابستانی" },
    { image: summer3, label: "کیف ساحلی" },
    { image: summer4, label: "روسری خنک" },
  ],

  پاییزی: [
    { image: fall1, label: "چتر" },
    { image: fall2, label: "شالگردن" },
    { image: fall3, label: "ساعت" },
    { image: fall4, label: "دستکش چرمی" },
  ],

  زمستانی: [
    { image: winter1, label: "کلاه پشمی" },
    { image: winter2, label: "شالگردن ضخیم" },
    { image: winter3, label: "دستکش پشمی" },
    { image: winter4, label: "گوش‌گیر" },
  ],
};

export interface ClothSeasonImages {
  men: string;
  women: string;
}

export const clothCollectionData: Record<string, ClothSeasonImages> = {
  بهاری: {
    men: springMen,
    women: springWomen,
  },

  تابستانی: {
    men: summerMen,
    women: summerWomen,
  },

  پاییزی: {
    men: fallMen,
    women: fallWomen,
  },

  زمستانی: {
    men: winterMen,
    women: winterWomen,
  },
};
