import type { Product } from "@/lib/types/type";
import { GoHeart, GoHeartFill } from "react-icons/go";
import { IoShareSocial } from "react-icons/io5";
import { AiOutlineFullscreen, AiOutlineFullscreenExit } from "react-icons/ai";
import { useState } from "react";
import { Alert, AlertTitle } from "@/components/ui/alert";

type Props = {
  product: Product;
};

const DetailImgTemp = ({ product }: Props) => {
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [copied, setCopied] = useState(false);
  const [isFavarite, setIsFavarite] = useState(false);

  const handleShare = async () => {
    await navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const rawUrl =
    typeof product.image === "string"
      ? product.image
      : product.image?.url || "";

  const imageUrl = rawUrl.startsWith("http")
    ? rawUrl
    : `http://localhost:3000${rawUrl}`;
  return (
    <div className="relative w-full h-[800px] overflow-hidden rounded-lg">
      <img
        src={imageUrl}
        alt={product.title}
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 items-end flex flex-col gap-2 justify-start p-4  pb-10">
        <button
          onClick={() => setIsFullscreen(true)}
          className="p-2 rounded-full text-primary-30 bg-background-10 hover:bg-primary-30 hover:text-background-10 transition-all duration-200"
        >
          <AiOutlineFullscreen size={20} />
        </button>
        {isFullscreen && (
          <div
            className="fixed inset-0 bg-black/80 flex items-center justify-center z-9999"
            onClick={() => setIsFullscreen(false)}
          >
            <img
              src={imageUrl}
              alt={product.title}
              className="max-w-[90%] max-h-[90%] object-contain rounded-lg"
            />

            <button
              onClick={() => setIsFullscreen(false)}
              className="absolute top-6 right-6 p-2 bg-background-10 text-primary-30 hover:bg-primary-30 hover:text-background-10 transition-all duration-200 rounded-full"
            >
              <AiOutlineFullscreenExit size={22} />
            </button>
          </div>
        )}
        <button
          onClick={handleShare}
          className="p-2 rounded-full text-primary-30 bg-background-10 hover:bg-primary-30 hover:text-background-10 transition-all duration-200"
        >
          <IoShareSocial size={20} />
        </button>
        {copied && (
          <Alert className="w-fit absolute top-2">
            <AlertTitle>لینک کپی شد</AlertTitle>
          </Alert>
        )}
        <button
          onClick={() => setIsFavarite(true)}
          className="p-2 rounded-full text-primary-30 bg-background-10 hover:bg-primary-30 hover:text-background-10 transition-all duration-200"
        >
          {isFavarite ? <GoHeartFill size={20} /> : <GoHeart size={20} />}
        </button>
      </div>
    </div>
  );
};

export default DetailImgTemp;
