import type { Product } from "@/lib/types/type";
import type React from "react";

interface ProductItemCardProps {
  product: Product;
}

const ProductItemCard: React.FC<ProductItemCardProps> = ({ product }) => {
  const rawUrl =
    typeof product.image === "string"
      ? product.image
      : product.image?.url || "";

  const imageUrl = rawUrl.startsWith("http")
    ? rawUrl
    : `http://localhost:3000${rawUrl}`;
  return (
    <div className="bg-white/10 backdrop-blur rounded-xl p-4 shadow-md border border-white/20">
      <div className="w-full aspect-[3/4] overflow-hidden rounded-lg">
        <img
          src={imageUrl}
          alt={product.title}
          className="w-full h-full object-cover"
        />
      </div>

      <h3 className="mt-3 font-bold text-xl">{product.title}</h3>

      <div className="flex flex-row items-center gap-4">
        {product.onSale && (
          <p className="text-red-400 line-through text-sm">
            {product.price.toLocaleString()} تومان
          </p>
        )}
        <p className="text-primary font-semibold mt-1">
          {product.price.toLocaleString()} تومان
        </p>
      </div>

      <p className="text-sm text-gray-400 mt-2">
        وضعیت: {product.quantity ? "موجود" : "ناموجود"}
      </p>
    </div>
  );
};

export default ProductItemCard;
