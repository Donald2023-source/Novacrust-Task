"use client";
import { useState } from "react";

export default function Navbar() {
  const navItems = ["Crypto to cash", "Cash to crypto", "Crypto to flat loan"];
  const [activeTab, setActiveTab] = useState("Crypto to cash");
  return (
    <nav className="md:w-[60%] w-[9 0%] bg-[#F2F2F2] px-3 rounded-full border mx-auto">
      <div className="flex justify-between items-center">
        {navItems.map((item, id) => (
          <span
            onClick={() => setActiveTab(item)}
            key={id}
            className={`${
              item === activeTab && "bg-primary     py-3 px-5  text-white "
            } rounded-full md:text-base text-xs cursor-pointer transition-all duration-500`}
          >
            {item}
          </span>
        ))}
      </div>
    </nav>
  );
}
