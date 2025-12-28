import OtherPagesInfoSection from "@/components/sections/OtherPagesInfoSection";
import OtherPagesTitle from "@/components/sections/OtherPagesTitle";
import MaxWidthWrapper from "@/hooks/MaxWithWrapper";

function AboutUsPage() {
  return (
    <div className="py-28">
      <MaxWidthWrapper>
        <div className="flex flex-col gap-20">
          <OtherPagesTitle title="درباره ما" />
          <div className="flex flex-col space-y-8 items-start">
            <p className="text-sm leading-7">
              <span className="text-base font-semibold">میشا لند </span>
              فعالیت خود را با هدف ارائه‌ی پوشاک و اکسسوری باکیفیت، به‌روز و
              مطابق با سبک زندگی ایرانی، آغاز کرده است. ما از ابتدا تلاش
              کرده‌ایم تا تجربه‌ای متفاوت از خرید آنلاین لباس را برای مشتریان
              خود فراهم کنیم؛ تجربه‌ای که در آن کیفیت، سادگی، تنوع و اعتماد در
              اولویت قرار دارد.
            </p>
            <p className="text-sm leading-7">
              میشا لند با تمرکز بر{" "}
              <span className="text-base font-semibold">
                پوشاک زنانه، مردانه و اکسسوری{" "}
              </span>
              ، مجموعه‌ای متنوع از محصولات را ارائه می‌دهد که متناسب با
              سلیقه‌های مختلف، فصل‌های سال و نیازهای روزمره و رسمی طراحی و
              انتخاب شده‌اند. تمامی محصولات با دقت بالا از نظر کیفیت پارچه، دوخت
              و جزئیات بررسی می‌شوند تا خریدی مطمئن و رضایت‌بخش برای شما رقم
              بخورد.
            </p>
            <p className="text-sm leading-7">
              ما باور داریم که لباس فقط یک کالا نیست؛ بلکه{" "}
              <span className="text-base font-semibold">
                بیانگر شخصیت، سبک و حال‌وهوای زندگی{" "}
              </span>
              هر فرد است. به همین دلیل، میشا لند همواره تلاش می‌کند تا با دنبال
              کردن ترندهای روز دنیای مد و در عین حال حفظ سادگی و کاربردی بودن،
              انتخابی هوشمندانه برای مشتریان خود باشد.
            </p>
            <OtherPagesInfoSection
              title="تعهد ما به مشتریان"
              items={[
                "ارائه محصولات با کیفیت و قیمت منصفانه",
                "ارسال سریع و مطمئن به سراسر کشور",
                "پشتیبانی پاسخگو و همراه در تمامی مراحل خرید",
                "شفافیت در اطلاعات محصولات و تصاویر واقعی",
                "امکان بازگشت و تعویض طبق قوانین فروشگاه",
              ]}
            />
            <OtherPagesInfoSection
              title="میشا لند؛ فراتر از یک فروشگاه آنلاین"
              description="میشا لند تنها یک فروشگاه اینترنتی نیست؛ بلکه تلاشی است برای ساختن یک برند قابل اعتماد در دنیای پوشاک آنلاین. ما با تولید محتوای مرتبط با استایل، راهنمای خرید، معرفی ترندها و ترکیب لباس‌ها، سعی داریم به شما کمک کنیم انتخابی آگاهانه‌تر و متناسب‌تر با سبک شخصی خود داشته باشید."
            />
            <OtherPagesInfoSection title="چشم‌انداز ما">
              <p className="text-sm leading-7">
                هدف ما تبدیل شدن به یکی از مراجع معتبر خرید آنلاین پوشاک و
                اکسسوری در ایران است؛ جایی که مشتریان با خیال راحت خرید کنند و
                از تجربه‌ی خود احساس رضایت و آرامش داشته باشند.
              </p>
              <span className="text-sm leading-7">
                میشا لند با این باور شکل گرفته است که
              </span>
              <span className="text-center font-semibold text-lg">
                {"<<"}
                پوشاکی برای هر روز، هر فصل, هر سبک{">>"}
              </span>
            </OtherPagesInfoSection>
          </div>
        </div>
      </MaxWidthWrapper>
    </div>
  );
}

export default AboutUsPage;
