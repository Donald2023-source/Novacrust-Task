"use client";
import Navbar from "./components/Navbar";
import { useState } from "react";
import { countries, currencies } from "./data/data";
import TransactionCard from "./components/transactionCard";
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
import Button from "./components/Button";
export default function Home() {
  const paymentType = [
    { name: "Metamask", icon: img10 },
    { name: "Rainbow", icon: img11 },
    { name: "WalletConnect", icon: img12 },
    {
      name: "Other Crypto Wallets (Binance, Conibase, Bybit etc)",
      icon: img13,
    },
  ];
  const navItems = ["Crypto to cash", "Cash to crypto", "Crypto to flat loan"];
  const [activeTab, setActiveTab] = useState("Crypto to cash");
  return (
    <div className="max-w-2xl md:p-5 p-3 flex items-center justify-center m-auto w-full h-fit">
      <div className="flex shadow-xl py-5 border rounded-xl w-full  h-full my-auto flex-col">
        <Navbar
          navItems={navItems}
          activeTab={activeTab}
          setActiveTab={setActiveTab}
        />

        <div className="w-[95%] py-8 mx-auto">
          {activeTab === navItems[0] && (
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

                <Select>
                  <SelectTrigger className="w-full p-7 bg-white border">
                    <SelectValue placeholder="Select a payment option" />
                  </SelectTrigger>

                  <SelectContent position="popper" side="bottom" sideOffset={8}>
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
                        <span className="text-xs md:text-base">
                          {item.name}
                        </span>
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

                <Select>
                  <SelectTrigger className="w-full p-7 bg-white border">
                    <SelectValue placeholder="Select a payment option" />
                  </SelectTrigger>

                  <SelectContent position="popper" side="bottom" sideOffset={8}>
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
                        <span className="text-xs md:text-base">
                          {item.name}
                        </span>
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <Button text="Convert now" />
            </div>
          )}

          {activeTab === navItems[1] && (
            <div className="mt-8 text-center font-semibold">
              Cash to Cryto Tab coming soon!
            </div>
          )}

          {activeTab === navItems[2] && (
            <div className="mt-8 text-center font-semibold">
              Crypto to flat loan coming soon!
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
