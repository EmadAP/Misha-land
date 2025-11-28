import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import React from "react";

function AccountDetailsPage() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 justify-between gap-10 items-center">
      <p className="md:col-span-2 pr-2 text-lg font-semibold">
        user info :
      </p>
      <label
        htmlFor="username"
        className="flex flex-col gap-2 items-start justify-between"
      >
        <span className="pr-2">username</span>
        <Input id="username" type="text" placeholder="نام" />
      </label>
      <label
        htmlFor="email"
        className="flex flex-col gap-2 items-start justify-between"
      >
        <span className="pr-2">email</span>
        <Input id="email" type="text" placeholder="نام" />
      </label>
      <p className="md:col-span-2 pr-2 text-lg font-semibold">
        change the password :
      </p>
      <label
        htmlFor="oldPassword"
        className="md:col-span-2 flex flex-col gap-2 items-start justify-between"
      >
        <span className="pr-2">old password</span>
        <Input id="oldPassword" type="text" placeholder="نام" />
      </label>
      <label
        htmlFor="newPassword"
        className="flex flex-col gap-2 items-start justify-between"
      >
        <span className="pr-2">new password</span>
        <Input id="newPassword" type="text" placeholder="نام" />
      </label>
      <label
        htmlFor="repeatPassword"
        className="flex flex-col gap-2 items-start justify-between"
      >
        <span className="pr-2">repeat password</span>
        <Input id="repeatPassword" type="text" placeholder="نام" />
      </label>
      <Button className="w-fit bg-primary-30 hover:bg-primary-20 text-background-10">
        ثبت
      </Button>
    </div>
  );
}

export default AccountDetailsPage;
