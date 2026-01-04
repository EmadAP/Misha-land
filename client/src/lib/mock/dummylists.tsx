import type { Product } from "../types/type";

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
  { label: "تماس با ما", href: "/contact" },
  { label: "راهنمای خرید و مقررات", href: "/how-to-buy" },
  { label: "شرایط گارانتی", href: "/warranty-rules" },
  { label: "درباره ما", href: "/about-us" },
];

export const navMenItems = [
  { label: "تی‌شرت", href: "/browse?gender=men&subType=tshirt" },
  { label: "پیراهن", href: "/browse?gender=men&subType=shirt" },
  { label: "سویشرت", href: "/browse?gender=men&subType=hoodie" },
  { label: "پلیور / بافت", href: "/browse?gender=men&subType=sweater" },
  { label: "کاپشن", href: "/browse?gender=men&subType=jacket" },
  { label: "شلوارک", href: "/browse?gender=men&subType=shorts" },
  { label: "شلوار کتان", href: "/browse?gender=men&subType=chino_pants" },
  { label: "شلوار جین", href: "/browse?gender=men&subType=jeans" },
];

export const navWomenItems = [
  { label: "بلوز", href: "/browse?gender=women&subType=blouse" },
  { label: "پیراهن", href: "/browse?gender=women&subType=dress" },
  { label: "سویشرت", href: "/browse?gender=women&subType=hoodie" },
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

export const ProductDummyData: Product[] = [
  {
    id: "1",
    title: "تی‌شرت نخی ساده",
    description: "تی‌شرت نخی مناسب استفاده روزمره",
    price: 320000,
    onSale: true,
    discount: 15,
    quantity: 10,
    size: ["md", "lg", "xl"],
    color: ["مشکی", "سفید"],
    image: "https://dummyimage.com/400x500/dfdfdf/000000&text=T-Shirt",
    categories: ["tshirt"],
    collection: "men-clothing",
    subType: "tshirt",
  },

  {
    id: "2",
    title: "شلوار جین کلاسیک",
    price: 680000,
    onSale: false,
    quantity: 5,
    size: ["lg", "xl"],
    color: ["آبی"],
    image: "https://dummyimage.com/400x500/cfcfcf/000000&text=Jeans",
    categories: ["jeans"],
    collection: "men-clothing",
    subType: "jeans",
  },

  {
    id: "3",
    title: "هودی زنانه",
    price: 540000,
    onSale: false,
    quantity: 0,
    size: ["sm", "md", "lg"],
    color: ["مشکی"],
    image: "https://dummyimage.com/400x500/dddddd/000000&text=Hoodie",
    categories: ["hoodie"],
    collection: "women-clothing",
    subType: "hoodie",
  },

  {
    id: "4",
    title: "کت زنانه کوتاه",
    price: 820000,
    onSale: true,
    discount: 10,
    quantity: 3,
    size: ["sm", "md"],
    color: ["مشکی"],
    image: "https://dummyimage.com/400x500/c6c6c6/000000&text=Jacket",
    categories: ["jacket"],
    collection: "women-clothing",
    subType: "jacket",
  },

  {
    id: "5",
    title: "کیف دستی چرمی",
    price: 950000,
    onSale: false,
    quantity: 7,
    size: [],
    color: ["قهوه ای", "مشکی"],
    image: "https://dummyimage.com/400x500/bdbdbd/000000&text=Bag",
    categories: ["bag"],
    collection: "accessories",
    subType: "bag",
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
