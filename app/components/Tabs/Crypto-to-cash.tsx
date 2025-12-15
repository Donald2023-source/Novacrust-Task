"use client";
import TransactionCard from "../transactionCard";
import { currencies, countries } from "@/app/data/data";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import img10 from "@/public/fox.png";
import img11 from "@/public/rainbow.png";
import img12 from "@/public/walletconnect-seeklogo.png";
import img13 from "@/public/wallet-filled-money-tool.png";
import Image from "next/image";
import Button from "../Button";
import { SetStateAction, useState } from "react";
import { toast } from "sonner";

export default function CryptToCash({
  setShowReciepientDetails,
}: {
  setShowReciepientDetails: React.Dispatch<SetStateAction<boolean>>;
}) {
  const paymentType = [
    { name: "Metamask", icon: img10 },
    { name: "Rainbow", icon: img11 },
    { name: "WalletConnect", icon: img12 },
    {
      name: "Other Crypto Wallets (Binance, Conibase, Bybit etc)",
      icon: img13,
    },
  ];

  const [paymentFrom, setPaymentFrom] = useState("");
  const [paymentTo, setPaymentTo] = useState("");

  // console.log("payment type", paymentFrom, paymentTo);

  function handleSubmit() {
    if (!paymentFrom || !paymentTo) {
      toast.error("Please select a payment options");
      return;
    }
    setShowReciepientDetails(true);
  }
  return (
    <div className="flex flex-col gap-8 h-full">
      <TransactionCard
        data={currencies}
        initialState="ETH"
        text="You Pay"
        isSearch={true}
      />
      <TransactionCard
        data={countries}
        initialState="NG"
        text="You Recieve"
        isSearch={false}
      />

      {/* Payment from  */}
      <div className="flex flex-col gap-3">
        <label className="font-semibold text-sm md:text-base text-[#013941] ml-2">
          Pay from
        </label>

        <Select onValueChange={(value) => setPaymentFrom(value)}>
          <SelectTrigger className="w-full p-7 bg-white border">
            <SelectValue placeholder="Select a payment option" />
          </SelectTrigger>

          <SelectContent
            className="text-sm"
            position="popper"
            side="bottom"
            sideOffset={8}
          >
            {paymentType.map((item, idx) => (
              <SelectItem
                key={idx}
                value={item.name}
                className="flex items-center gap-5 py-3"
              >
                <Image
                  className="size-8"
                  src={item.icon}
                  alt={`${item.name} icon`}
                />
                <span className="text-xs md:text-sm">{item.name}</span>
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      {/* Payment to */}
      <div className="flex flex-col gap-3">
        <label className="font-semibold text-sm md:text-base text-[#013941] ml-2">
          Pay to
        </label>

        <Select onValueChange={(value) => setPaymentTo(value)}>
          <SelectTrigger className="w-full p-7 bg-white border">
            <SelectValue placeholder="Select a payment option" />
          </SelectTrigger>

          <SelectContent
            className="text-sm"
            position="popper"
            side="bottom"
            sideOffset={8}
          >
            {paymentType.map((item, idx) => (
              <SelectItem
                key={idx}
                value={item.name}
                className="flex items-center gap-5 py-3"
              >
                <Image
                  className="size-8"
                  src={item.icon}
                  alt={`${item.name} icon`}
                />
                <span className="text-xs md:text-sm">{item.name}</span>
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      <Button onClick={() => handleSubmit()} text="Convert now" />
    </div>
  );
}
