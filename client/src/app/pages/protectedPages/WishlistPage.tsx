import ProductItemCard from "@/components/sections/ProductItemCard";
import React from "react";

/* --------------------------------------
    WISHLIST INTERFACE
--------------------------------------- */
export interface WishlistItem {
  id: string;
  title: string;
  category: string;
  price: number;
  oldPrice?: number | null;
  image: string;
  colors: string[];
  sizes: string[];
  inStock: boolean;
}

/* --------------------------------------
      DUMMY DATA
  --------------------------------------- */
export const wishlistMock: WishlistItem[] = [
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

function WishlistPage() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-10">
      {wishlistMock.map((item) => (
        <ProductItemCard key={item.id} item={item} />
      ))}
    </div>
  );
}

export default WishlistPage;
