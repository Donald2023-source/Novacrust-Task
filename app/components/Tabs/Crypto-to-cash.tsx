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
import SelectComponent from "../SelectComponent";

export default function CryptToCash({
  setShowReciepientDetails,
}: {
  setShowReciepientDetails: React.Dispatch<SetStateAction<boolean>>;
}) {
  const paymentType = [
    { name: "Metamask", icon: img10, code: "MT" },
    { name: "Rainbow", icon: img11, code: "MT" },
    { name: "WalletConnect", icon: img12, code: "MT" },
    {
      name: "Other Crypto Wallets (Binance, Conibase, Bybit etc)",
      icon: img13,
      code: "MT",
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
        <SelectComponent
          value={paymentFrom}
          data={paymentType}
          label="Pay From"
          onChange={(value) => setPaymentFrom(value)}
        />
      </div>

      {/* Payment to */}
      <div className="flex flex-col gap-3">
        <SelectComponent
          value={paymentTo}
          data={paymentType}
          label="Pay To"
          onChange={(value) => setPaymentTo(value)}
        />
      </div>
      

      <Button onClick={() => handleSubmit()} text="Convert now" />
    </div>
  );
}
