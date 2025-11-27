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
import { iranProvinces } from "@/lib/mock/dummylists";

interface ProvinceSelectProps {
  selectedProvince: string;
  setSelectedProvince: (province: string) => void;
}

export function ProvinceSelect({
  selectedProvince,
  setSelectedProvince,
}: ProvinceSelectProps) {
  return (
    <Select
      dir="rtl"
      onValueChange={(value) => {
        setSelectedProvince(value);
      }}
      value={selectedProvince}
    >
      <SelectTrigger className="w-full">
        <SelectValue placeholder="استان" />
      </SelectTrigger>

      <SelectContent>
        <ScrollArea className="h-64 w-full">
          <SelectGroup>
            {iranProvinces.map((province, index) => (
              <React.Fragment key={province}>
                <SelectItem value={province}>{province}</SelectItem>
                {index !== iranProvinces.length - 1 && (
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
