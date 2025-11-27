import { CitySelect } from "@/components/sections/protectedPages/addressPage/CitySelect";
import { ProvinceSelect } from "@/components/sections/protectedPages/addressPage/ProvinceSelect";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import React, { useState } from "react";

function AddressesPage() {
  const [province, setProvince] = useState("");
  const [city, setCity] = useState("");

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 justify-between items-center gap-10">
      <label
        htmlFor="firstName"
        className="flex flex-col gap-2 items-start justify-between"
      >
        <span className="pr-2">نام :</span>
        <Input id="firstName" type="text" placeholder="نام" />
      </label>
      <label
        htmlFor="lastName"
        className="flex flex-col gap-2 items-start justify-between"
      >
        <span className="pr-2">نام خانوادگی :</span>
        <Input id="lastName" type="text" placeholder="نام خانوادگی" />
      </label>
      <label
        htmlFor="address"
        className="md:col-span-2 flex flex-col gap-2 items-start justify-between"
      >
        <span className="pr-2">آدرس :</span>
        <Input id="address" type="text" placeholder="آدرس" />
      </label>
      <ProvinceSelect
        selectedProvince={province}
        setSelectedProvince={setProvince}
      />

      <CitySelect
        selectedProvince={province}
        selectedCity={city}
        setSelectedCity={setCity}
      />
      <label
        htmlFor="postId"
        className="md:col-span-2 flex flex-col gap-2 items-start justify-between"
      >
        <span className="pr-2">کد پستی :</span>
        <Input id="postId" type="text" placeholder="کد پستی" />
      </label>

      <Button className="w-fit bg-primary-30 hover:bg-primary-20 text-background-10">
        ثبت
      </Button>
    </div>
  );
}

export default AddressesPage;
