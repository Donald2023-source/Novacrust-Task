import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { data } from "../types/types";
import Image from "next/image";
import { twMerge } from "tailwind-merge";

interface dataArray {
  data: data[];
  label: string;
  value: string;
  className?: string;
  onChange?: (value: string) => void;
}

export default function SelectComponent({
  data,
  label,
  className,
  value,
  onChange,
}: dataArray) {
  return (
    <div className={twMerge("flex flex-col gap-3", className)}>
      <label className="font-semibold text-sm md:text-base text-[#013941] ml-2">
        {label}
      </label>

      <Select value={value} onValueChange={onChange}>
        <SelectTrigger className="w-full p-7 bg-white border">
          <SelectValue placeholder="Select a payment option" />
        </SelectTrigger>

        <SelectContent position="popper" side="bottom" sideOffset={8}>
          {data.map((item) => (
            <SelectItem
              key={item.code}
              value={item.name}
              className="flex items-center gap-5 py-3"
            >
              <Image
                className="size-8"
                src={item.icon}
                alt={`${item.name} icon`}
              />
              <span className="text-xs md:text-base">{item.name}</span>
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
}
