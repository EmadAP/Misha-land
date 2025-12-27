import OtherPagesTitle from "@/components/sections/OtherPagesTitle";
import MaxWidthWrapper from "@/hooks/MaxWithWrapper";
import { Link } from "react-router-dom";

function HowToBuyPage() {
  return (
    <div className="py-28 md:pt-48">
      <MaxWidthWrapper>
        <div className="flex flex-col gap-20">
          <OtherPagesTitle title="راهنمای خرید" />
          <div className="flex flex-col space-y-8 items-start">
            <div className="flex flex-col gap-4">
              <h3 className="text-lg font-semibold">ثبت سفارش</h3>
              <p className="text-sm">
                پس از انتخاب کالاهای مورد نظر (پوشاک و اکسسوری) و افزودن آن‌ها
                به سبد خرید، با تکمیل اطلاعات و پرداخت نهایی، سفارش شما در سیستم
                میشا لند ثبت خواهد شد.
              </p>
            </div>
            <div className="flex flex-col gap-4">
              <h3 className="text-lg font-semibold">
                زمان آماده‌سازی و ارسال سفارش
              </h3>
              <ul className="list-disc list-inside space-y-2">
                <li className="text-sm">
                  سفارش‌ها حداکثر ۲ تا ۳ روز کاری پس از ثبت و پرداخت، آماده و
                  ارسال می‌شوند.
                </li>
                <li className="text-sm">
                  در زمان‌های پرترافیک (مانند جشنواره‌ها یا تخفیف‌های ویژه) ممکن
                  است ارسال با کمی تأخیر انجام شود که از طریق پیامک یا تماس
                  اطلاع‌رسانی خواهد شد.
                </li>
              </ul>
            </div>
            <div className="flex flex-col gap-4">
              <h3 className="text-lg font-semibold">روش و شرایط ارسال</h3>
              <ul className="list-disc list-inside space-y-2">
                <li className="text-sm">
                  ارسال سفارش‌ها از طریق شرکت‌های معتبر حمل‌ونقل انجام می‌شود.
                </li>
                <li className="text-sm">
                  سفارش‌های شهر تهران تا درب ورودی ساختمان تحویل داده می‌شوند.
                </li>
                <li className="text-sm">
                  مسئولیت پیگیری سفارش پس از تحویل به شرکت حمل‌ونقل، بر عهده
                  مشتری است.
                </li>
                <li className="text-sm">
                  در صورتی که در زمان تحویل، مشتری پاسخ‌گو نباشد، ارسال سفارش به
                  زمان دیگری موکول خواهد شد.
                </li>
              </ul>
            </div>
            <div className="flex flex-col gap-4">
              <h3 className="text-lg font-semibold">پیگیری سفارش</h3>
              <ul className="list-disc list-inside space-y-2">
                <li className="text-sm">
                  برای پیگیری وضعیت سفارش، می‌توانید در ساعات کاری از طریق چت
                  آنلاین سایت یا تماس با پشتیبانی میشا لند اقدام نمایید.
                </li>
                <li className="text-sm">
                  در صورت نیاز به هرگونه تغییر در سفارش (مانند تغییر آدرس یا روش
                  ارسال)، موضوع از طریق تماس تلفنی به اطلاع مشتری خواهد رسید.
                </li>
              </ul>
            </div>
            <div className="flex flex-col gap-4">
              <h3 className="text-lg font-semibold">مغایرت یا مشکل در سفارش</h3>
              <ul className="list-disc list-inside space-y-2">
                <li className="text-sm">
                  در صورتی که کالای دریافتی با سفارش ثبت‌شده مغایرت داشته باشد
                  (مدل، رنگ یا سایز اشتباه)، مشتری موظف است حداکثر تا ۲۴ ساعت پس
                  از دریافت، موضوع را به پشتیبانی اطلاع دهد.
                </li>
                <li className="text-sm">
                  کالای دریافتی باید استفاده‌نشده، سالم و با برچسب‌ها باشد.
                </li>
              </ul>
            </div>
            <div className="flex flex-col gap-4">
              <h3 className="text-lg font-semibold">
                شرایط بازگشت و تعویض کالا
              </h3>
              <ul className="list-disc list-inside space-y-2">
                <li className="text-sm">
                  امکان تعویض یا بازگشت کالا فقط در صورت وجود مغایرت یا ایراد
                  ظاهری مورد تأیید میشا لند امکان‌پذیر است.
                </li>
                <li className="text-sm">
                  به دلایل بهداشتی، برخی کالاها (مانند لباس‌های زیر یا
                  اکسسوری‌های خاص) امکان بازگشت ندارند.
                </li>
                <li className="text-sm">
                  در صورت انصراف از خرید بدون وجود ایراد، هزینه ارسال و بازگشت
                  کالا بر عهده مشتری خواهد بود.
                </li>
              </ul>
            </div>
            <div className="flex flex-col gap-4">
              <h3 className="text-lg font-semibold">هزینه ارسال</h3>
              <ul className="list-disc list-inside space-y-2">
                <li className="text-sm">
                  در صورت تأیید مغایرت یا ایراد توسط میشا لند، هزینه ارسال و
                  بازگشت بر عهده فروشگاه خواهد بود.
                </li>
                <li className="text-sm">
                  در سایر موارد، هزینه ارسال طبق تعرفه شرکت حمل‌ونقل محاسبه
                  می‌شود.
                </li>
              </ul>
            </div>
            <div className="flex flex-col gap-4">
              <h3 className="text-lg font-semibold">اطلاعات تماس</h3>
              <ul className="list-disc list-inside space-y-2">
                <p className="text-sm">
                  در صورت بروز هرگونه سؤال یا نیاز به راهنمایی، می‌توانید از
                  طریق راه‌های ارتباطی درج‌شده در صفحه «
                  <Link
                    to="/contact"
                    className="text-accent-30 hover:underline"
                  >
                    تماس با ما
                  </Link>
                  » با کارشناسان میشا لند در ارتباط باشید.
                </p>
              </ul>
            </div>
          </div>
        </div>
      </MaxWidthWrapper>
    </div>
  );
}

export default HowToBuyPage;
