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