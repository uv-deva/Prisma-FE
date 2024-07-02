"use client";

import { useState } from "react";
import Typography from "@/design-systems/Atoms/Typography";
import { VaultsFormProps } from "./interface";
import Toggle from "@/design-systems/Atoms/Toggle";
import Input from "@/design-systems/Atoms/Input";
import ethIcon from "@/assets/Icons/ethIcon.svg";
import Image from "next/image";
import UltraIcon from "@/assets/Icons/ultraIcon.svg";

const SelectVaultForm: React.FC<VaultsFormProps> = ({}) => {
  const [isSendAutometic, setIsSendAutometic] = useState<boolean>(false);
  const [activeTab, setActiveTab] = useState<string>("all");

  const handleTabChange = (tab: string) => setActiveTab(tab);

  const handleThemeChange = (isChecked: boolean) => {
    setIsSendAutometic(true);
  };

  return (
    <div className="bg-white w-[500px] max-w-[500px] rounded-sm shadow-lg items-center">
      <div className="bg-darkBlue flex justify-between py-4 px-3 items-center rounded-t-sm">
        <Typography className="font-semibold text-body text-white">
          Mint mkUSD
        </Typography>
        <div className="bg-lightBlue font-semibold text-[13px] py-2 px-3 text-white rounded-[10px]">
          <Typography>3.47% - 6.94% APR</Typography>
        </div>
      </div>

      <div className="w-full px-6 pb-4">
        <div className="flex items-center justify-end gap-2 mt-6">
          <Typography className="text-md font-medium">
            Zap ETH/wETH to wstETH
          </Typography>
          <Toggle
            className="h-[20px] w-[60px]"
            defaultCheck={false}
            onChange={handleThemeChange}
          />
        </div>

        <div className="mt-4 flex justify-between">
          <Typography className="text-md text-darkBlue font-medium">
            Enter amount of wstETH
          </Typography>

          <div className="flex">
            <Typography className="text-md text-darkBlue font-medium">
              Balance:
            </Typography>
            <Image src={ethIcon} alt="eth" className="w-6 h-6" />

            <Typography className="text-md text-darkBlue font-medium">
              0.000
            </Typography>
          </div>
        </div>

        <div className="pl-3 flex justify-between rounded-[8px] border border-blue">
            <div className="py-3">
            <Input
            inWrpClassName="border-0 p-0 text-[#002237]"
            inputClassNames="!p-0 text-[#002237]"
            placeholder="Enter an amount"
            type="text"
          />
            </div>
         
          <div className="flex gap-2 items-center">
            <Typography className="text-sm font-normal text-[#794DEC]">
              =$0.0
            </Typography>
            <button className="bg-lightBlue rounded text-sm font-bold py-[1px] px-1 text-white">
              Max
            </button>
            <div className="bg-darkBlue flex justify-between min-w-[110px] p-3 rounded-tr-[8px] rounded-br-[8px] ">
              <Image src={ethIcon} alt="eth" className="w-6 h-6" />

              <Typography className="text-body text-white font-bold">
                wstETH
              </Typography>
            </div>
          </div>
        </div>

        <Typography className="text-left font-medium text-md mt-4 mb-1">
          Calculate Debt
        </Typography>

        <div className="flex justify-between">
          <div className="flex">
            {["auto", "custom"].map((tab) => (
              <button
                key={tab}
                onClick={() => handleTabChange(tab)}
                className={`px-3 py-2 rounded text-md font-medium hover:bg-[#0022370a] text-lightGray ${
                  activeTab === tab
                    ? "bg-[#00223714] text-[#002237]"
                    : "text-[#0000008a] bg-gray-200"
                }`}
              >
                {tab.charAt(0).toUpperCase() + tab.slice(1)} Pools
              </button>
            ))}
          </div>

          <div className="px-3 py-2 flex items-center rounded-[8px] border border-blue w-1/3">
            <Input
              inWrpClassName="border-0 p-0 text-[#002237]"
              inputClassNames="!p-0 text-[#002237]"
              placeholder="0"
              type="text"
            />
            <Typography className="text-body font-bold text-[#794DEC]">
              %
            </Typography>
          </div>
        </div>

        <div className="flex flex-col rounded-[8px] border border-blue mt-2">
          <div className="bg-lightBlue w-full rounded-tr-[8px] px-2 py-1">
            <Typography className="text-white font-medium text-md text-left">
              Minting mkUSD
            </Typography>
          </div>
          <div className="pl-3 flex justify-between rounded-[8px]">
            <div className="py-3">
            <Input
              inWrpClassName="border-0 p-0 text-[#002237]"
              inputClassNames="!p-0 text-[#002237]"
              placeholder="Enter an amount"
              type="text"
            />
            </div>
          
            <div className="flex gap-2 items-center">
              <button className="bg-lightBlue rounded text-sm font-bold py-[1px] px-1 text-white">
                Max
              </button>
              <div className="bg-darkBlue flex justify-between min-w-[110px] p-3 rounded-br-[8px] ">
                <Image src={UltraIcon} alt="" className="w-6 h-6" />

                <Typography className="text-body text-white font-bold">
                  wstETH
                </Typography>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-[#F7F7F7] text-md flex flex-col gap-1 font-medium text-darkBlue mt-4 rounded-sm p-2">
          <div className="flex justify-between">
          <Typography>+Net debt</Typography>
          <Typography>0.00 mkUSD</Typography>
          </div>  
           
              <div className="flex justify-between">
          <Typography>+Mint Fee</Typography>
          <Typography>(0.64%) 0.00 mkUSD</Typography>
          </div> 
              <div className="flex justify-between">
          <Typography>+Liquidation Reserve </Typography>
          <Typography>200 mkUSD</Typography>
          </div> 
          <div className="w-full bg-theme-gradient !w-full h-[1px]"></div>
              <div className="flex justify-between">
          <Typography>Your total debt</Typography>
          <Typography className="text-[#16C720]">0.00 mkUSD</Typography>
          </div> 
        </div>

        <div className="border border-[#FF0000] bg-[#ff00001a] text-md font-normal text-[#FF0000] flex items-center justify-center p-3 rounded-sm mt-4">
            <Typography>A minimum debt of 1800 mkUSD is required</Typography>
        </div>

        <Typography className="text-darkBlue text-body font-normal text-center mt-3">Please connect to Ethereum Mainnet in your wallet.</Typography>

        <div className="w-full bg-theme-gradient !w-full h-[1px] mt-3"></div>

        <div className="font-normal text-md text-darkBlue mt-4 gap-2">
            <Typography className="font-bold mb-3 text-left">Information</Typography>

            <div className="flex justify-between">
            <Typography>Vault position</Typography>
            <Typography className="font-bold text-[#FF747A]">0/13</Typography>
            </div>

            <div className="flex justify-between">
            <Typography>Debt in front</Typography>
            <Typography className="font-bold text-[#FF747A]">0.0 mkUSD</Typography>
            </div>

            <div className="flex justify-between">
            <Typography>Collat. Ratio</Typography>
            <Typography className="font-bold text-[#16C784]">0.00%</Typography>
            </div>

            <div className="flex justify-between">
            <Typography>Liquidation Price</Typography>
            <Typography className="font-bold text-[#16C784]">$0.00</Typography>
            </div>

            <div className="flex justify-between">
            <Typography>Borrow Interest Rate</Typography>
            <Typography>10.00%</Typography>
            </div>

            <div className="flex justify-between">
            <Typography>Remaining Mintable mkUSD</Typography>
            <Typography>95,690,007.21</Typography>
            </div>



        </div>

      </div>
    </div>
  );
};

export default SelectVaultForm;
