import React from "react";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export function TestimonialsFaq() {
  return (
    <Accordion
      type="single"
      collapsible
      className="w-full"
      defaultValue="item-1"
    >
      <AccordionItem value="item-1">
        <AccordionTrigger>
          میشا لند چه تفاوتی با فروشگاه‌های لباس دیگر دارد؟
        </AccordionTrigger>
        <AccordionContent className="flex flex-col gap-4 text-balance">
          <p>
            میشا لند روی ترکیب کیفیت، قیمت مناسب و ارائه مدل‌های به‌روز تمرکز
            دارد تا خرید لباس برای مشتری کاملاً ساده و مطمئن باشد.
          </p>
          <p>
            فرآیند انتخاب و خرید هم طوری طراحی شده که سریع، شفاف و بدون سردرگمی
            انجام شود.
          </p>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger>
          آیا محصولات میشا لند برای همه سنین مناسب هستند؟
        </AccordionTrigger>
        <AccordionContent className="flex flex-col gap-4 text-balance">
          <p>
            بله، در میشا لند مجموعه‌ای کامل از لباس‌های زنانه، مردانه و بچگانه
            ارائه می‌شود.
          </p>
          <p>
            هر گروه سنی می‌تواند مدل‌هایی متناسب با نیاز، سلیقه و فصل پیدا کند.
          </p>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3">
        <AccordionTrigger>
          میشا لند چطور کیفیت لباس‌ها را تضمین می‌کند؟
        </AccordionTrigger>
        <AccordionContent className="flex flex-col gap-4 text-balance">
          <p>
            تمام محصولات قبل از عرضه بررسی می‌شوند تا از نظر دوخت، پارچه و دوام
            استاندارد باشند.
          </p>
          <p>
            ما فقط با تولیدکنندگان قابل اعتماد همکاری می‌کنیم تا مشتری خریدی
            بدون نگرانی داشته باشد.
          </p>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-4">
        <AccordionTrigger>
          آیا امکان خرید لباس‌های فصلی یا مناسب شرایط آب‌وهوایی خاص وجود دارد؟
        </AccordionTrigger>
        <AccordionContent className="flex flex-col gap-4 text-balance">
          <p>
            بله، در هر فصل کالاهای مناسب همان دوره مثل خنک تابستانی یا گرم
            زمستانی ارائه می‌شود.
          </p>
          <p>
            به‌روزرسانی محصولات متناسب با تغییر فصل انجام می‌شود تا همیشه انتخاب
            مناسب در دسترس باشد.
          </p>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-5">
        <AccordionTrigger>
          اگر سایز مناسب خودم را ندانم، میشا لند چه کمکی می‌کند؟
        </AccordionTrigger>
        <AccordionContent className="flex flex-col gap-4 text-balance">
          <p>
            در صفحه هر محصول راهنمای دقیق سایزبندی همراه با اندازه‌های استاندارد
            نمایش داده شده است.
          </p>
          <p>
            با مقایسه اندازه‌ها با لباس‌های خودتان، می‌توانید بهترین سایز را
            انتخاب کنید.
          </p>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-6">
        <AccordionTrigger>
          آیا عکس‌های محصولات با کالای واقعی مطابقت دارند؟
        </AccordionTrigger>
        <AccordionContent className="flex flex-col gap-4 text-balance">
          <p>
            تمام عکس‌ها از نمونه واقعی محصول گرفته شده تا رنگ و فرم لباس
            به‌درستی نمایش داده شود.
          </p>
          <p>
            هدف ما این است که مشتری دقیقاً همان چیزی را دریافت کند که در سایت
            دیده است.
          </p>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-7">
        <AccordionTrigger>
          میشا لند چه ضمانتی برای خرید مطمئن ارائه می‌دهد؟
        </AccordionTrigger>
        <AccordionContent className="flex flex-col gap-4 text-balance">
          <p>
            از لحظه ثبت سفارش تا زمان تحویل، وضعیت ارسال به‌صورت شفاف قابل
            پیگیری است.
          </p>
          <p>
            همچنین تیم پشتیبانی آماده پاسخگویی است تا هرگونه مشکل یا سوال سریع
            حل شود.
          </p>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-8">
        <AccordionTrigger>
          آیا قیمت‌های میشا لند منصفانه و رقابتی هستند؟
        </AccordionTrigger>
        <AccordionContent className="flex flex-col gap-4 text-balance">
          <p>
            با حذف واسطه‌ها و همکاری مستقیم با تولیدکنندگان، قیمت‌ها تا حد ممکن
            اقتصادی ارائه می‌شود.
          </p>
          <p>در کنار آن، تخفیف‌های دوره‌ای خرید را حتی به‌صرفه‌تر می‌کنند.</p>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}
