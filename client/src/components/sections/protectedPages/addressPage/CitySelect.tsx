import React from "react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import { iranCities } from "@/lib/mock/dummylists";

interface CitySelectProps {
  selectedProvince: string;
  selectedCity: string;
  setSelectedCity: (city: string) => void;
}

export function CitySelect({
  selectedProvince,
  selectedCity,
  setSelectedCity,
}: CitySelectProps) {
  return (
    <Select
      dir="rtl"
      disabled={!selectedProvince}
      onValueChange={setSelectedCity}
      value={selectedCity}
    >
      <SelectTrigger className="w-full">
        <SelectValue
          placeholder={
            selectedProvince
              ? "شهر را انتخاب کنید"
              : "ابتدا استان را انتخاب کنید"
          }
        />
      </SelectTrigger>

      <SelectContent>
        <ScrollArea className="h-64 w-full">
          <SelectGroup>
            {selectedProvince &&
              iranCities[selectedProvince]?.map((city, index) => (
                <React.Fragment key={city}>
                  <SelectItem value={city}>{city}</SelectItem>
                  {index !== iranCities[selectedProvince].length - 1 && (
                    <Separator className="my-1" />
                  )}
                </React.Fragment>
              ))}
          </SelectGroup>
        </ScrollArea>
      </SelectContent>
    </Select>
  );
}
