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

export interface BaseDoc {
  id: string;
  createdAt?: string;
  updatedAt?: string;
}

export interface Media extends BaseDoc {
  alt: string;
  url?: string;
  filename?: string;
  mimeType?: string;
  filesize?: number;
  width?: number;
  height?: number;
}

export type Season = "spring" | "summer" | "fall" | "winter";

export interface Category extends BaseDoc {
  name: string;
  slug: string;
  season: Season;
}

export type BaseProduct = {
  id: string;
  title: string;
  description?: string;
  price: number;
  onSale: boolean;
  discount?: number;
  quantity: number;
  image: Media | string;
  categories: string[] | Category[];
};

export type ProductSize = "sm" | "md" | "lg" | "xl" | "xxl" | "xxxl";
export interface MenClothing extends BaseProduct {
  size: ProductSize[];
  subType:
    | "tshirt"
    | "shirt"
    | "hoodie"
    | "sweater"
    | "jacket"
    | "shorts"
    | "chino_pants"
    | "jeans";
}

export interface WomenClothing extends BaseProduct {
  size: ProductSize[];
  subType:
    | "blouse"
    | "dress"
    | "hoodie"
    | "cardigan"
    | "jacket"
    | "skirt"
    | "leggings"
    | "jeans";
}

export interface Accessory extends BaseProduct {
  subType:
    | "bag"
    | "shoes"
    | "hat"
    | "umbrella"
    | "scarf"
    | "watch"
    | "gloves"
    | "gift_set";
}

export type Product = Accessory | MenClothing | WomenClothing;

export type CartProductRelation =
  | "women-clothing"
  | "men-clothing"
  | "accessories";

export interface CartProductRef {
  relationTo: CartProductRelation;
  value: string; // product ID
}

export interface CartItem {
  product: CartProductRef | Product;
  price: number;
  quantity: number;
  lineTotal?: number;
}

export interface Cart extends BaseDoc {
  userId: string;
  items: CartItem[];
  total: number;
}
