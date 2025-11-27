import React from "react";
import Img7days from "@/assets/badge/landing/7days.png";
import imgDelivery from "@/assets/badge/landing/delivery.png";
import imgGuarantee from "@/assets/badge/landing/guarantee.png";
import imgSupport from "@/assets/badge/landing/support.png";
import { Separator } from "@/components/ui/separator";

function TestimonialsBanner() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 items-center justify-between">
      <div className="w-fit mx-auto flex flex-col justify-between gap-2 items-center">
        <div className="relative w-24 h-24">
          <img
            src={Img7days}
            alt="7day return"
            className="absolute inset-0 object-contain"
          />
        </div>
        <Separator />
        <span className="text-xs">۷ روز ضمانت بازگشت</span>
      </div>
      <div className="w-fit mx-auto flex flex-col justify-between gap-2 items-center">
        <div className="relative w-24 h-24">
          <img
            src={imgDelivery}
            alt="delivery"
            className="absolute inset-0 object-contain"
          />
        </div>
        <Separator />
        <span className="text-xs">تحویل فوری</span>
      </div>
      <div className="w-fit mx-auto flex flex-col justify-between gap-2 items-center">
        <div className="relative w-24 h-24">
          <img
            src={imgGuarantee}
            alt="guarantee"
            className="absolute inset-0 object-contain"
          />
        </div>
        <Separator />
        <span className="text-xs">گارانتی کیفیت</span>
      </div>
      <div className="w-fit mx-auto flex flex-col justify-between gap-2 items-center">
        <div className="relative w-24 h-24">
          <img
            src={imgSupport}
            alt="support"
            className="absolute inset-0 object-contain"
          />
        </div>
        <Separator />
        <span className="text-xs">۷ روز هفته, ۲۴ ساعت روز</span>
      </div>
    </div>
  );
}

export default TestimonialsBanner;
