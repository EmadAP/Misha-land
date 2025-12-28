import { useState } from "react";
import { Button } from "@/components/ui/button";
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";

function TestimonialsAboutSection() {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="space-y-10">
      <div className="flex flex-col gap-4 justify-between items-start text-start">
        <h3 className="text-xl sm:text-2xl font-semibold">
          تجربه‌ای جدید از خرید لباس در میشا لند
        </h3>
        <p className="text-sm sm:text-base">
          میشا لند جایی است که تنوع، کیفیت و قیمت مناسب در کنار هم قرار
          گرفته‌اند تا انتخاب لباس برای شما ساده‌تر، لذت‌بخش‌تر و مطمئن‌تر شود.
          در اینجا مجموعه‌ای گسترده از پوشاک زنانه، مردانه و بچگانه با طراحی‌های
          متنوع و مناسب هر فصل ارائه می‌شود. ما تلاش کرده‌ایم تا هر سلیقه و هر
          سبک پوششی، انتخابی مناسب و دلخواه خود را در میشا لند پیدا کند؛ از
          مانتوهای سبک تابستانی گرفته تا مدل‌های گرم زمستانی، از شلوارهای جین
          راحت تا لباس‌های رسمی‌تر برای موقعیت‌های مهم.
        </p>
      </div>

      {expanded && (
        <>
          <div className="flex flex-col gap-4 justify-between items-start text-start">
            <h3 className="text-xl sm:text-2xl font-semibold">
              پوشاکی مناسب تمام سلیقه‌ها و تمام فصل‌ها
            </h3>
            <p className="text-sm sm:text-base">
              در میشا لند اهمیت فصل‌ها و تغییرات آن‌ها جدی گرفته شده است.
              مدل‌های خنک و نخی برای روزهای گرم سال، انواع لباس‌های پشمی و ضخیم
              برای زمستان و گزینه‌های کژوال و روزمره برای پاییز و بهار، همگی با
              دقت انتخاب و عرضه می‌شوند. این تنوع باعث شده مشتریان بتوانند در
              طول سال، استایلی تازه و مناسب شرایط داشته باشند. همچنین در بخش
              پوشاک مردانه و زنانه تلاش شده تا ترکیبی از طراحی‌های ساده، مدرن و
              پرطرفدار ارائه شود تا هر فرد بتواند لباس‌هایی هماهنگ با روحیه و
              ظاهر خود پیدا کند.
            </p>
          </div>

          <div className="flex flex-col gap-4 justify-between items-start text-start">
            <h3 className="text-xl sm:text-2xl font-semibold">
              راحتی، کیفیت و زیبایی در کنار هم
            </h3>
            <p className="text-sm sm:text-base">
              میشا لند باور دارد که لباسی خوب، لباسی است که علاوه بر ظاهر جذاب،
              احساس راحتی ایجاد کند و دوام بالایی داشته باشد. به همین دلیل تمرکز
              ما بر انتخاب پارچه‌های باکیفیت، دوخت تمیز و ارائه مدل‌هایی با برش
              دقیق است. این رویکرد در پوشاک بچگانه نیز رعایت شده تا والدین
              بتوانند با خیال راحت لباس‌هایی راحت، مقاوم و با طراحی شاد برای
              فرزندان خود انتخاب کنند. لباس‌های کودک و نوزاد در میشا لند با
              حساسیت زیاد انتخاب می‌شوند تا مناسب پوست لطیف و فعالیت روزانه
              آن‌ها باشند.
            </p>
          </div>

          <div className="flex flex-col gap-4 justify-between items-start text-start">
            <h3 className="text-xl sm:text-2xl font-semibold">
              تکمیل استایل با اکسسوری‌های متنوع
            </h3>
            <p className="text-sm sm:text-base">
              برای آنکه استایل شما کامل شود، میشا لند مجموعه‌ای از اکسسوری‌های
              کاربردی و زیبا ارائه می‌دهد؛ از کیف و کمربند گرفته تا عینک‌های
              ساده یا طرح‌دار که می‌توانند ظاهر شما را متفاوت و جذاب‌تر کنند.
              این محصولات در کنار پوشاک اصلی، تجربه‌ای کامل از انتخاب استایل
              فراهم می‌کنند.
            </p>
          </div>

          <div className="flex flex-col gap-4 justify-between items-start text-start">
            <h3 className="text-xl sm:text-2xl font-semibold">
              خرید آسان، تجربه‌ای قابل اعتماد
            </h3>
            <p className="text-sm sm:text-base">
              هدف میشا لند همیشه این بوده که خرید لباس برای مشتریان خود تجربه‌ای
              بدون دردسر و همراه با اطمینان باشد. چه از طریق سایت ما خرید کنید و
              چه از فروشگاه‌های حضوری بازدید داشته باشید، تلاش کرده‌ایم فضایی
              حرفه‌ای، قابل اعتماد و مشتری‌محور ایجاد کنیم. کیفیت محصولات، قیمت
              منصفانه و پشتیبانی دقیق، بخش مهمی از هویت میشا لند را تشکیل
              می‌دهند و باعث شده مشتریان با آرامش و اطمینان بیشتری خرید کنند.
            </p>
          </div>
        </>
      )}

      <Button
        variant={"link"}
        onClick={() => setExpanded((v) => !v)}
        className="text-primary-30"
      >
        {expanded ? "مشاهده کمتر" : "مشاهده بیشتر"}
        {expanded ? <MdKeyboardArrowUp /> : <MdKeyboardArrowDown />}
      </Button>
    </div>
  );
}

export default TestimonialsAboutSection;
