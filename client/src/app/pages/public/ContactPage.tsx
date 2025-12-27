import ContactCopyableInfo from "@/components/sections/contactPageSection/ContactCopyableInfo";
import ContactFormField from "@/components/sections/contactPageSection/ContactFormField";
import { Button } from "@/components/ui/button";
import MaxWidthWrapper from "@/hooks/MaxWithWrapper";
import { useState } from "react";

function ContactPage() {
  const [copied, setCopied] = useState<null | "email" | "phone" | "address">(
    null
  );

  const copyToClipboard = async (
    text: string,
    type: "email" | "phone" | "address"
  ) => {
    await navigator.clipboard.writeText(text);
    setCopied(type);
    setTimeout(() => setCopied(null), 2000);
  };
  return (
    <div className="py-28 md:pt-48">
      <MaxWidthWrapper>
        <div className="flex flex-col gap-20">
          <div className="flex flex-row gap-3 items-center">
            <div className="relative flex size-3">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent-20"></span>
              <span className="relative inline-flex size-3 rounded-full bg-accent-30"></span>
            </div>
            <h1 className="text-2xl font-semibold">تماس با ما</h1>
          </div>
          <div className="flex flex-col md:flex-row justify-between gap-10">
            <form className="w-full md:w-1/2 xl:w-2/3 flex flex-col items-start justify-between gap-10">
              <ContactFormField
                label="نام و نام خانوادگی :"
                id="username"
                placeholder="نام و نام خانوادگی خود را وارد کنید"
              />

              <ContactFormField
                label="آدرس ایمیل :"
                id="email"
                type="email"
                placeholder="آدرس ایمیل خود را وارد کنید"
              />

              <ContactFormField
                label="شماره تماس :"
                id="phone"
                placeholder="شماره تماس خود را وارد کنید"
              />

              <ContactFormField
                label="پیام شما :"
                id="msg"
                type="textarea"
                placeholder="پیام خود را وارد کنید"
              />
              <Button className="bg-primary-30 hover:bg-primary-20 ">
                ارسال پیام
              </Button>
            </form>
            <div className="w-full md:w-1/2 xl:w-1/3 flex flex-col gap-6">
              <ContactCopyableInfo
                title="آدرس ایمیل میشا اند :"
                value="info@mishaland.com"
                type="email"
                copied={copied}
                onCopy={copyToClipboard}
              />

              <ContactCopyableInfo
                title="شماره تماس میشا اند :"
                value="021-91005666"
                type="phone"
                copied={copied}
                onCopy={copyToClipboard}
              />

              <ContactCopyableInfo
                title="آدرس فروشگاه میشا اند :"
                value="تهران، خیابان حافظ، بالاتر از زرتشت، کوچه جاوید، پلاک ۲۴"
                type="address"
                copied={copied}
                onCopy={copyToClipboard}
              />
            </div>
          </div>
        </div>
      </MaxWidthWrapper>
    </div>
  );
}

export default ContactPage;
