/* --------------------------------------
    WISHLIST INTERFACE
--------------------------------------- */
export interface ProductItemCardProps {
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

export type ProductSize = "sm" | "md" | "lg" | "xl" | "xxl" | "xxxl";

export type ProductColor =
  | "black"
  | "white"
  | "red"
  | "green"
  | "blue"
  | "yellow"
  | "orange"
  | "brown";

export type CategoryGender = "men" | "women";

export type CategorySeason = "spring" | "summer" | "fall" | "winter";

export interface CartItem {
  product: string;
  price: number;
  quantity: number;
  lineTotal: number;
}

export interface Media {
  id: string;
  url: string;
  filename: string;
  mimeType: string;
  width: number;
  height: number;
  filesize: number;
  alt?: string;
}

export interface Cart {
  id: string;
  userId: string;
  items: CartItem[];
  total: number;

  createdAt?: string;
  updatedAt?: string;
}

export interface Category {
  id: string;
  name: string;
  slug: string;
  gender: CategoryGender;
  season: CategorySeason[];
  createdAt?: string;
  updatedAt?: string;
}

export interface Product {
  id: string;
  title: string;
  image: string | Media;
  description?: string;
  price: number;
  onSale: boolean;
  discount?: number;
  size: ProductSize[];
  color: ProductColor[];
  quantity: number;
  categories: string[] | Category[];
  createdAt?: string;
  updatedAt?: string;
}
