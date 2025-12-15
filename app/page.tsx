"use client";
import Navbar from "./components/Navbar";
import { useState } from "react";
import { countries, currencies } from "./data/data";
import CryptToCash from "./components/Tabs/Crypto-to-cash";

export default function Home() {
  const navItems = ["Crypto to cash", "Cash to crypto", "Crypto to flat loan"];
  const [activeTab, setActiveTab] = useState("Crypto to cash");
  return (
    <div className="max-w-2xl md:p-5 p-3 flex items-center justify-center m-auto w-full h-fit">
      <div className="flex shadow-xl py-5 px-4 rounded-xl w-full  h-full my-auto flex-col">
        <Navbar
          navItems={navItems}
          activeTab={activeTab}
          setActiveTab={setActiveTab}
        />

        <div className="w-[95%] py-8 mx-auto">
          {activeTab === navItems[0] && <CryptToCash />}

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
