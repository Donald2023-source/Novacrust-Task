"use client";
import Navbar from "./components/Navbar";
import { useState } from "react";
import { countries, currencies } from "./data/data";
import CryptToCash from "./components/Tabs/Crypto-to-cash";
import RecipientDetails from "./components/RecipientDetails";
import CashToCrypto from "./components/Tabs/Cash-to-crypto";
import CryptoToLoan from "./components/Tabs/Crypto-to-loan";

export default function Home() {
  const navItems = ["Crypto to cash", "Cash to crypto", "Crypto to flat loan"];
  const [activeTab, setActiveTab] = useState("Crypto to cash");
  const [showRecieptientDetails, setShowReciepientDetails] = useState(false);
  return (
    <div className="max-w-2xl md:p-5 p-2 flex items-center justify-center m-auto w-full h-fit">
      <div
        className={`flex md:shadow-xl py-5 md:px-5 px-1 rounded-xl w-full  h-full my-auto flex-col ${
          showRecieptientDetails && "hidden"
        }`}
      >
        <Navbar
          navItems={navItems}
          activeTab={activeTab}
          setActiveTab={setActiveTab}
        />

        <div className="w-full py-8 mx-auto">
          {activeTab === navItems[0] && (
            <CryptToCash setShowReciepientDetails={setShowReciepientDetails} />
          )}

          {activeTab === navItems[1] && <CashToCrypto />}

          {activeTab === navItems[2] && <CryptoToLoan />}
        </div>
      </div>

      {showRecieptientDetails && (
        <RecipientDetails setShowRecipientDetails={setShowReciepientDetails} />
      )}
    </div>
  );
}
