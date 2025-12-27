import OtherPagesInfoSection from "@/components/sections/OtherPagesInfoSection";
import OtherPagesTitle from "@/components/sections/OtherPagesTitle";
import MaxWidthWrapper from "@/hooks/MaxWithWrapper";

function WarrantyRulesPage() {
  return (
    <div className="py-28">
      <MaxWidthWrapper>
        <div className="flex flex-col gap-20">
          <OtherPagesTitle title="شرایط گارانتی" />
          <div className="flex flex-col space-y-8 items-start">
            <p>
              در راستای آسودگی خاطر مشتریان عزیز، میشا لند شرایطی را برای بازگشت
              و تعویض کالاهای خریداری‌شده در نظر گرفته است تا در صورت بروز
              هرگونه مشکل، بتوانید با اطمینان از خدمات پس از فروش استفاده
              نمایید.
            </p>

            <OtherPagesInfoSection
              title="نکته مهم هنگام تحویل کالا"
              items={[
                "لطفاً در زمان دریافت سفارش، کالا را از نظر ظاهری (پارگی، لک، آسیب‌دیدگی بسته‌بندی یا مغایرت ظاهری) بررسی نمایید.",
                "تحویل گرفتن کالا به منزله‌ی تأیید سلامت ظاهری آن بوده و پس از آن، اعلام ایرادات ظاهری قابل پذیرش نخواهد بود.",
              ]}
            />

            <OtherPagesInfoSection title="مهلت بازگشت و تعویض">
              <ul className="list-disc list-inside space-y-2">
                <li className="text-sm leading-7">
                  مشتریان می‌توانند تا ۷ روز کاری پس از دریافت کالا، درخواست
                  بازگشت یا تعویض ثبت نمایند.
                </li>

                <li className="text-sm leading-7">
                  <span>کالا باید:</span>

                  <ul className="list-disc list-inside space-y-2 pr-6 mt-2">
                    <li className="text-sm leading-7">
                      <span className="text-base font-semibold">
                        استفاده‌نشده
                      </span>{" "}
                      باشد
                    </li>
                    <li className="text-sm leading-7">
                      <span className="text-base font-semibold">
                        کاملاً سالم
                      </span>{" "}
                      و بدون بوی عطر، شست‌وشو یا لکه
                    </li>
                    <li className="text-sm leading-7">
                      دارای{" "}
                      <span className="text-base font-semibold">
                        برچسب، تگ و بسته‌بندی اصلی
                      </span>{" "}
                      باشد
                    </li>
                  </ul>
                </li>
              </ul>
              <p className="text-sm leading-7">
                در غیر این صورت، امکان رسیدگی به درخواست وجود نخواهد داشت.
              </p>
            </OtherPagesInfoSection>

            <OtherPagesInfoSection title="شرایط تعویض یا بازگشت کالا">
              <ul className="list-disc list-inside space-y-2">
                <li className="text-sm leading-7">
                  <span>
                    تعویض یا بازگشت کالا تنها در موارد زیر امکان‌پذیر است:
                  </span>
                  <ul className="list-disc list-inside space-y-2 pr-6 mt-2">
                    <li className="text-sm leading-7">
                      ارسال اشتباه کالا (مدل، رنگ یا سایز مغایر با سفارش)
                    </li>
                    <li className="text-sm leading-7">
                      وجود ایراد ظاهری یا نقص در دوخت که قبل از استفاده وجود
                      داشته باشد
                    </li>
                  </ul>
                </li>

                <li className="text-sm leading-7">
                  در صورت تأیید مشکل توسط کارشناسان میشا لند، کالا تعویض یا وجه
                  آن عودت داده خواهد شد.
                </li>
              </ul>
            </OtherPagesInfoSection>
            <OtherPagesInfoSection
              title="عدم موجودی برای تعویض"
              description="در صورتی که کالای مورد نظر برای تعویض موجود نباشد:"
              items={[
                "مبلغ پرداختی طبق قوانین فروشگاه به حساب مشتری واریز می‌شود",
                "با انتخاب مشتری، کالا با محصولی دیگر تعویض شده و اختلاف قیمت محاسبه خواهد شد.",
              ]}
            />
            <OtherPagesInfoSection
              title="کالاهای غیرقابل بازگشت"
              description="به دلایل بهداشتی و ماهیت برخی محصولات، کالاهای زیر امکان بازگشت یا تعویض ندارند:"
              items={[
                "لباس‌های زیر",
                "جوراب",
                "اکسسوری‌هایی که تماس مستقیم با بدن دارند",
                "کالاهایی که برچسب یا بسته‌بندی آن‌ها جدا شده باشد",
              ]}
            />

            <OtherPagesInfoSection
              title="هزینه‌های ارسال"
              items={[
                "در صورت تأیید ایراد یا اشتباه از سوی میشا لند، هزینه ارسال و بازگشت بر عهده فروشگاه خواهد بود.",
                "در سایر موارد (مانند انصراف از خرید)، هزینه ارسال و بازگشت کالا بر عهده مشتری است.",
                "لطفاً پیش از ارسال کالا، حتماً با پشتیبانی میشا لند هماهنگ نمایید.",
              ]}
            />
            <OtherPagesInfoSection
              title="مغایرت در سفارش دریافتی"
              description="در صورتی که کالای دریافتی با سفارش ثبت‌شده مطابقت نداشته باشد:"
              items={[
                "موضوع باید حداکثر تا ۲۴ ساعت پس از دریافت کالا به پشتیبانی میشا لند اطلاع داده شود.",
                "در صورت قابل تشخیص بودن مغایرت بدون استفاده از کالا، محصول باید کاملاً سالم و استفاده‌نشده بازگردانده شود.",
                "پس از بررسی کارشناسان، در صورت تأیید مغایرت، کالا برای مشتری تعویض خواهد شد.",
              ]}
            />
            <OtherPagesInfoSection
              title="بررسی و پاسخگویی"
              items={[
                "درخواست‌های بازگشت یا تعویض حداکثر ظرف ۷۲ ساعت کاری بررسی می‌شوند.",
                "در سایر موارد (مانند انصراف از خرید)، هزینه ارسال و بازگشت کالا بر عهده مشتری است.",
                "نتیجه نهایی از طریق تماس یا پیامک به مشتری اطلاع داده خواهد شد.",
              ]}
            />
          </div>
        </div>
      </MaxWidthWrapper>
    </div>
  );
}

export default WarrantyRulesPage;
