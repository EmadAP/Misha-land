import type { Product } from "@/lib/types/type";
import type React from "react";

interface ProductItemCardProps {
  product: Product;
}

const ProductItemCard: React.FC<ProductItemCardProps> = ({ product }) => {
  const imageUrl =
    typeof product.image === "string"
      ? product.image
      : product.image?.url
      ? "http://localhost:3000" + product.image.url
      : "";
  return (
    <div className="bg-white/10 backdrop-blur rounded-xl p-4 shadow-md border border-white/20">
      <img
        src={imageUrl}
        alt={product.title}
        className="w-full rounded-lg object-cover"
      />

      <h3 className="mt-3 font-bold text-lg">{product.title}</h3>

      <p className="text-primary font-semibold mt-1">
        {product.price.toLocaleString()} تومان
      </p>

      {product.onSale && (
        <p className="text-red-400 line-through text-sm">
          {product.price.toLocaleString()} تومان
        </p>
      )}

      <p className="text-sm text-gray-400 mt-2">
        وضعیت: {product.quantity ? "موجود" : "ناموجود"}
      </p>
    </div>
  );
};

export default ProductItemCard;
