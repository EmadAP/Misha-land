import type { ProductItemCardProps } from "@/lib/type";
import React from "react";

/* --------------------------------------
    CARD COMPONENT
--------------------------------------- */
export default function ProductItemCard({ item }: { item: ProductItemCardProps }) {
  return (
    <div className="bg-white/10 backdrop-blur rounded-xl p-4 shadow-md border border-white/20">
      <img
        src={item.image}
        alt={item.title}
        className="w-full rounded-lg object-cover"
      />

      <h3 className="mt-3 font-bold text-lg">{item.title}</h3>

      <p className="text-primary font-semibold mt-1">
        {item.price.toLocaleString()} تومان
      </p>

      {item.oldPrice && (
        <p className="text-red-400 line-through text-sm">
          {item.oldPrice.toLocaleString()} تومان
        </p>
      )}

      <p className="text-sm text-gray-400 mt-2">
        وضعیت: {item.inStock ? "موجود" : "ناموجود"}
      </p>
    </div>
  );
}
