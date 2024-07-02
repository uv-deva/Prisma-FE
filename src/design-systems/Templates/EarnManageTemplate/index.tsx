"use client";

import { InfoOutlineIcon } from "@/assets/icons";
import Typography from "@/design-systems/Atoms/Typography";
import { ArrowLeftIcon } from "@heroicons/react/16/solid";
import { useState } from "react";
import { Deposit, Withdraw } from "./tabsEarn";
import { useRouter } from "next/navigation";

const EarnManageTemplate: React.FC = () => {
  const [activeTab, setActiveTab] = useState(0);
  const router = useRouter();
  const tabs = [
    { label: "Deposit", content: <Deposit /> },
    { label: "Withdraw", content: <Withdraw /> },
  ];
  return (
    <div className="max-sm:p-[20px] max-w-[700px] lg:max-w-[1200px] w-full">
      <div className="flex justify-between w-full flex-wrap">
        <div className="flex gap-1 items-center cursor-pointer" onClick={()=>router.push("/earn")}>
          <div className="h-[16px] w-[16px] text-primary">
           <ArrowLeftIcon />
          </div>
          <Typography className="text-primary text-[14px] sm:text-[16px]">Back</Typography>
        </div>
        <div className="flex gap-2 flex-wrap text-[14px] sm:text-[16px]">
          <div className="bg-skyBlue py-[6px] px-[8px] sm:px-[12px] rounded-[18px] text-primary">
            mkUSD: 0x459...BB28
          </div>
          <div className="bg-skyBlue py-[6px] px-[8px] sm:px-[12px] rounded-[18px] text-primary">
            mkUSD Stability Pool: 0x459...BB28
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 text-start mt-3 ">
        <div className="shadow-card-shadow rounded-[8px] bg-white">
          <div className="bg-lightBlack p-2 sm:p-4 rounded-t-[12px] text-white text-[14px] sm:text-[16px] font-semibold">
            Manage mkUSD Stability Pool
          </div>
          <div className="w-full bg-gradient-radial-main h-[1px]" />
          <div>
            <div className="p-3 sm:p-6 text-[14px] sm:text-[16px] text-center text-lightBlack">
              Deposit mkUSD to earn PRISMA rewards. During liquidations, your
              deposit will be used to purchase discounted collaterals. Read
              more.
            </div>

            <div>
              <div className="flex border-b border-gray-300">
                {tabs.map((tab, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveTab(index)}
                    className={`py-2 px-4 transition-colors duration-300 font-medium text-sm sm:text-md ${
                      activeTab === index
                        ? "border-b-2 border-primary text-primary"
                        : "text-blue135 "
                    }`}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>
              <div className=" p-3 sm:p-6 rounded-b-[8px] px-[15px] sm:px-[32px]">
                {tabs[activeTab].content}
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="grid grid-cols-3 text-blue135 text-[11px] sm:text-[14px] font-bold px-[8px] sm:px-[13px] py-[10px] sm:py-[16px] bg-white rounded-[8px] shadow-card-shadow">
            <div>APR</div>
            <div className="flex gap-1 items-center">
              TVL{" "}
              <div className="h-[14px] w-[14px]">
                <InfoOutlineIcon />
              </div>
            </div>
            <div>Your Deposits </div>
          </div>
          <div className="w-full bg-gradient-radial-main h-[1px]" />
          <div className="grid grid-cols-3 text-lightBlack text-[20px] sm:text-[32px] font-bold px-[13px] py-[11px] sm:py-[16px] bg-white rounded-[8px] shadow-card-shadow">
            <div className="text-primary  font-bold flex items-start">
              16.71% <span className="text-[16px]">(2x)</span>{" "}
            </div>
            <div className="flex gap-1 items-center">$2.26m</div>
            <div>$0.00</div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default EarnManageTemplate;
