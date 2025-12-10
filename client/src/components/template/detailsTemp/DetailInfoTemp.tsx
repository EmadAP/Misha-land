import { Button } from "@/components/ui/button";
import type { Product } from "@/lib/types/type";
import { useState } from "react";
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";

type Props = {
  product: Product;
};

const colorMap: Record<string, string> = {
  قرمز: "#ff0000",
  سفید: "#ffffff",
  مشکی: "#000000",
  "قهوه ای": "#8B4513",
  سبز: "#008000",
  آبی: "#0000FF",
  زرد: "#FFD700",
  طوسی: "#808080",
};

const DetailInfoTemp = ({ product }: Props) => {
  const [expanded, setExpanded] = useState(false);
  const [selectedSize, setSelectedSize] = useState("");
  const [selectedColor, setSelectedColor] = useState("");
  const [count, setCount] = useState(1);

  const increase = () => {
    setCount((prev) => Math.min(prev + 1, product.quantity));
  };

  const decrease = () => {
    setCount((prev) => Math.max(prev - 1, 1));
  };

  return (
    <div className="w-full space-y-6 items-start">
      <div className="space-y-2">
        <h3 className="text-2xl font-semibold">{product.title}</h3>
        <p className="text-sm">{product.description}</p>
        {expanded && <p className="text-sm">{product.info}</p>}
        <Button
          variant={"link"}
          onClick={() => setExpanded((v) => !v)}
          className="text-primary-30 text-xs"
        >
          {expanded ? "مشاهده کمتر" : "مشاهده بیشتر"}
          {expanded ? <MdKeyboardArrowUp /> : <MdKeyboardArrowDown />}
        </Button>
      </div>
      <div className="space-y-2">
        <div className="flex flex-row gap-2 items-center">
          <p className="font-semibold text-lg ">قیمت: </p>
          {product.onSale ? (
            <p className="text-red-400 line-through text-xs">
              {product.price.toLocaleString()} تومان
            </p>
          ) : (
            <p className="text-sm">{product.price.toLocaleString()} تومان</p>
          )}
        </div>
        {product.onSale && product.discount && (
          <div className="flex flex-row gap-2 items-center">
            <p className="font-semibold text-lg ">قیمت با تخفیف: </p>
            <p className="text-sm">
              {(
                product.price -
                (product.price * product.discount) / 100
              ).toLocaleString()}
              تومان
            </p>
          </div>
        )}
      </div>
      <div className="space-y-2">
        <p className="font-semibold text-lg">
          اندازه :{" "}
          <span className="font-medium text-sm uppercase">{selectedSize}</span>
        </p>
        <div className="flex gap-4">
          {product.size.map((s) => (
            <button
              onClick={() => setSelectedSize(s)}
              key={s}
              className={`border uppercase pt-0.5 border-primary-30 rounded-full h-10 w-10 text-xs font-semibold ${
                s === selectedSize
                  ? "bg-primary-30 text-background-10"
                  : "bg-background-10 text-text-10"
              }`}
            >
              {s}
            </button>
          ))}
        </div>
      </div>
      <div className="space-y-2">
        <p className="font-semibold text-lg">
          رنگ : <span className="font-medium text-sm">{selectedColor}</span>
        </p>
        <div className="flex gap-4">
          {product.color.map((c) => {
            const isWhite = c === "سفید";

            return (
              <button
                onClick={() => setSelectedColor(c)}
                key={c}
                style={{ backgroundColor: colorMap[c] }}
                className={`rounded-full h-6 w-6 ${
                  isWhite ? "border border-primary-30" : ""
                }`}
              />
            );
          })}
        </div>
      </div>
      <div className="flex flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <p className="font-semibold text-lg pl-4">تعداد :</p>
          <button
            onClick={increase}
            disabled={count >= product.quantity}
            className={`border border-primary-30 rounded-full h-6 w-6 
      hover:bg-primary-30 hover:text-background-10 
      disabled:opacity-40 disabled:cursor-not-allowed`}
          >
            +
          </button>
          <span className="w-8 text-center">{count}</span>
          <button
            onClick={decrease}
            disabled={count <= 1}
            className={`border border-primary-30 rounded-full h-6 w-6 
      hover:bg-primary-30 hover:text-background-10 
      disabled:opacity-40 disabled:cursor-not-allowed`}
          >
            -
          </button>
        </div>
      </div>
      {product.quantity < 5 && (
        <p className="text-sm text-red-500">
          فقط {product.quantity} عدد موجود در انبار
        </p>
      )}

      <div className="flex w-full justify-end">
        <Button className="bg-accent-30 hover:bg-accent-20">
          افزودن به سبد خرید
        </Button>
      </div>
    </div>
  );
};

export default DetailInfoTemp;
