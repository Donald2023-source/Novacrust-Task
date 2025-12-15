import {
  Select,
  SelectValue,
  SelectTrigger,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";

import { Search } from "lucide-react";
import Image, { StaticImageData } from "next/image";
import { useState } from "react";
import { PropsType } from "../types/types";
export default function TransactionCard({
  data,
  initialState,
  isSearch,
  text,
}: PropsType) {
  const [value, setValue] = useState(initialState);

  const [search, setSearch] = useState("");
  const filteredData = data.filter(
    (item) =>
      item.name.toLowerCase().includes(search.toLowerCase()) ||
      item.code.toLowerCase().includes(search.toLowerCase())
  );
  return (
    <div className="border py-5 md:py-4 px-5 flex flex-col gap-2 rounded-4xl">
      <p className="text-[#828282] md:text-base text-sm font-semibold">
        {text}
      </p>
      <div className="flex items-center justify-between">
        <span className="text-xl">1.00</span>
        <Select value={value} onValueChange={setValue}>
          <SelectTrigger className="w-fit">
            <SelectValue />
          </SelectTrigger>

          <SelectContent className="w-65 p-2">
            {isSearch && (
              <div className="flex items-center gap-2 px-3 py-2 mb-2 border rounded-full">
                <Search className="size-4 text-gray-400" />
                <input
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  className="w-full outline-none text-sm bg-transparent"
                  placeholder="Search"
                />
              </div>
            )}

            {filteredData.map((item) => (
              <SelectItem key={item.code} value={item.code} className="py-3">
                <div className="flex items-center gap-3">
                  <Image src={item.icon} alt="icon" className="h-7 w-7" />
                  <div className="flex flex-col">
                    <span className="font-medium">{item.name}</span>
                    <span className="text-xs hidden text-muted-foreground">
                      {item.name}
                    </span>
                  </div>
                </div>
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
    </div>
  );
}
