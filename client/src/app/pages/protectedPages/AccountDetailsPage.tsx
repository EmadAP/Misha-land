import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import React from "react";

function AccountDetailsPage() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 justify-between gap-10 items-center">
      <p className="md:col-span-2 pr-2 text-xl font-semibold">اطلاعات کاربر:</p>
      <label
        htmlFor="username"
        className="flex flex-col gap-2 items-start justify-between"
      >
        <span className="pr-2">نام کاربری</span>
        <Input id="username" type="text" placeholder="نام کاربری" />
      </label>
      <label
        htmlFor="email"
        className="flex flex-col gap-2 items-start justify-between"
      >
        <span className="pr-2">ایمیل</span>
        <Input id="email" type="text" placeholder="ایمیل" />
      </label>
      <p className="md:col-span-2 pr-2 text-xl font-semibold">تغییر رمز عبور</p>
      <label
        htmlFor="oldPassword"
        className="md:col-span-2 flex flex-col gap-2 items-start justify-between"
      >
        <span className="pr-2">رمز</span>
        <Input id="oldPassword" type="text" placeholder="رمز" />
      </label>
      <label
        htmlFor="newPassword"
        className="flex flex-col gap-2 items-start justify-between"
      >
        <span className="pr-2">رمز جدید</span>
        <Input id="newPassword" type="text" placeholder="رمز جدید" />
      </label>
      <label
        htmlFor="repeatPassword"
        className="flex flex-col gap-2 items-start justify-between"
      >
        <span className="pr-2">تکرار رمز جدید</span>
        <Input id="repeatPassword" type="text" placeholder="تکرار رمز جدید" />
      </label>
      <Button className="w-fit bg-primary-30 hover:bg-primary-20 text-background-10">
        ثبت
      </Button>
    </div>
  );
}

export default AccountDetailsPage;
