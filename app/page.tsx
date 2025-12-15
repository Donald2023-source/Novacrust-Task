"use client";
import Navbar from "./components/Navbar";
import { useState } from "react";
import { countries, currencies } from "./data/data";
import TransactionCard from "./components/transactionCard";
export default function Home() {
  const navItems = ["Crypto to cash", "Cash to crypto", "Crypto to flat loan"];
  const [activeTab, setActiveTab] = useState("Crypto to cash");
  return (
    <div className="max-w-4xl p-5 flex items-center justify-center m-auto w-full h-screen  ">
      <div className="flex shadow-xl py-5 border rounded-xl w-full  h-full my-auto flex-col">
        <Navbar
          navItems={navItems}
          activeTab={activeTab}
          setActiveTab={setActiveTab}
        />

        <div className="w-[90%] py-12 mx-auto">
          {activeTab === navItems[0] && (
            <div>
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

              <div>
                <label htmlFor="">Pay From</label>
              </div>
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
