import * as React from "react";
import { Slider } from "@/components/ui/slider";
import { cn } from "@/lib/utils";

const persianDigits = ["۰", "۱", "۲", "۳", "۴", "۵", "۶", "۷", "۸", "۹"];

// 1234567 -> ۱٬۲۳۴٬۵۶۷
function formatPersianNumber(value: number) {
  return value
    .toLocaleString("fa-IR") // adds separators + Persian digits
    .replace(/٬/g, "٬"); // optional: explicit separator
}

// ۱٬۲۳۴٬۵۶۷ -> 1234567
function parsePersianNumber(value: string) {
  const english = value
    .replace(/[۰-۹]/g, (d) => String(persianDigits.indexOf(d)))
    .replace(/[٬,/]/g, ""); // remove separators (, / ،)

  return Number(english);
}

export interface SliderSectionProps {
  min?: number;
  max?: number;
  step?: number;
  defaultValue?: [number, number];
  value?: [number, number];
  onValueChange?: (value: [number, number]) => void;
  className?: string;
}

export function SliderSection({
  min = 0,
  max = 10_000_000,
  step = 100_000,
  defaultValue = [min, max],
  value,
  onValueChange,
  className,
}: SliderSectionProps) {
  const [internalValue, setInternalValue] =
    React.useState<[number, number]>(defaultValue);

  const range = value ?? internalValue;

  const updateRange = (next: [number, number]) => {
    const clamped: [number, number] = [
      Math.max(min, Math.min(next[0], next[1])),
      Math.min(max, Math.max(next[1], next[0])),
    ];

    setInternalValue(clamped);
    onValueChange?.(clamped);
  };

  const handleSliderChange = (values: number[]) => {
    if (values.length !== 2) return;
    updateRange([values[0], values[1]]);
  };

  const onInputChange = (index: 0 | 1, val: string) => {
    const num = parsePersianNumber(val);
    if (Number.isNaN(num)) return;

    updateRange(index === 0 ? [num, range[1]] : [range[0], num]);
  };

  return (
    <div className={cn("w-full space-y-4", className)} dir="rtl">
      <Slider
        min={min}
        max={max}
        step={step}
        value={range}
        onValueChange={handleSliderChange}
        className="w-full"
        dir="rtl"
      />

      <div className="flex gap-2">
        <div className="flex flex-col gap-1 w-full">
          <label className="text-xs text-muted-foreground">حداقل قیمت</label>
          <input
            type="text"
            inputMode="numeric"
            value={formatPersianNumber(range[0])}
            onChange={(e) => onInputChange(0, e.target.value)}
            className="w-full rounded-md bg-background-20 px-2 py-2 text-sm outline-0"
          />
        </div>

        <div className="flex flex-col gap-1 w-full">
          <label className="text-xs text-muted-foreground">حداکثر قیمت</label>
          <input
            type="text"
            inputMode="numeric"
            value={formatPersianNumber(range[1])}
            onChange={(e) => onInputChange(1, e.target.value)}
            className="w-full rounded-md bg-background-20 px-2 py-2 text-sm outline-0"
          />
        </div>
      </div>
    </div>
  );
}
