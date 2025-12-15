"use client";

import { ArrowLeft } from "lucide-react";
import SelectComponent from "./SelectComponent";
import img from "@/public/Accessbank.png";
import img1 from "@/public/Zenith.png";
import img2 from "@/public/Firstbank.png";
import { SetStateAction, useEffect, useState } from "react";
import Button from "./Button";

export default function RecipientDetails({
  setShowRecipientDetails,
}: {
  setShowRecipientDetails: React.Dispatch<SetStateAction<boolean>>;
}) {
  const bankData = [
    { name: "Access Bank", icon: img, code: "AB" },
    { name: "Zenith Bank", icon: img1, code: "ZB" },
    { name: "First Bank", icon: img2, code: "FB" },
  ];

  const [formData, setFormData] = useState({
    bank: "",
    accountNumber: "",
  });

  const [loading, setLoading] = useState(false);
  const [accountName, setAccountName] = useState("");

  useEffect(() => {
    if (formData.accountNumber.length === 10) {
      setLoading(true);

      const timeout = setTimeout(() => {
        setAccountName("ODUTUGA GBEKE");
        setLoading(false);
      }, 2000);

      return () => clearTimeout(timeout);
    } else {
      setAccountName("");
    }
  }, [formData.accountNumber]);

  const handleUserInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <div className="flex shadow-xl md:max-w-xl h-[90vh] py-5 justify-center items-center my-auto px-4 rounded-xl w-full flex-col">
      <header className="w-full flex items-center justify-between">
        <ArrowLeft
          onClick={() => setShowRecipientDetails(false)}
          className="cursor-pointer"
        />
        <span className="font-semibold text-primary">Recipient details</span>
        <span />
      </header>

      <form className="flex flex-col gap-5 w-full mt-10 flex-1">
        <SelectComponent
          data={bankData}
          label="Bank"
          value={formData.bank}
          onChange={(value) =>
            setFormData((prev) => ({ ...prev, bank: value }))
          }
        />

        <fieldset className="flex flex-col gap-2">
          <label className="font-semibold md:text-base text-sm py-2 ml-2">
            Account Number
          </label>
          <input
            type="text"
            inputMode="numeric"
            maxLength={10}
            className="py-4 px-6 text-sm rounded-full border"
            placeholder="Enter your account number"
            value={formData.accountNumber}
            onChange={(e) =>
              setFormData({
                ...formData,
                accountNumber: e.target.value.replace(/\D/g, ""),
              })
            }
          />
        </fieldset>

        <fieldset className="flex flex-col gap-2">
          <label className="font-semibold md:text-base py-2 text-sm ml-2">
            Account Name
          </label>
          <div className="py-2 px-6 flex items-center bg-[#F2F2F2] h-14 text-sm font-medium rounded-full border">
            {loading ? "Verifying..." : accountName}
          </div>
        </fieldset>

        <div className="mt-auto">
          <Button text="Next" />
        </div>
      </form>
    </div>
  );
}
