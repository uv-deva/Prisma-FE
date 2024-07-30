"use client";

import { useMemo, useState } from "react";
import Typography from "@/design-systems/Atoms/Typography";
import { RedeemDataProps, RedeemFormProps } from "./interface";
import Input from "@/design-systems/Atoms/Input";
import ethIcon from "@/assets/image/Icons/ethIcon.svg";
import Image from "next/image";
import { DropDownIcon } from "@/design-systems/Atoms/Icons";
import { RedeemFetchData } from "./utils";

const RedeemForm: React.FC<RedeemFormProps> = ({ urlAddress }) => {
  const [isSendAutometic, setIsSendAutometic] = useState<boolean>(false);
  const [data, setData] = useState<RedeemDataProps | undefined>(undefined);
  const [activeTab, setActiveTab] = useState<string>("auto");
  const [amount, setAmount] = useState<string>("");
  const handleTabChange = (tab: string) => setActiveTab(tab);


  const handleThemeChange = (isChecked: boolean) => {
    setIsSendAutometic(true);
  };

  useMemo(() => {
    const cardData = RedeemFetchData?.find(
      (card) => card.address === urlAddress
    );
    setData(cardData);
  }, [urlAddress]);

  const handleAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAmount(e.target.value);
  };

  return (
    <div className="flex items-start justify-center w-full">
      <div className="bg-white w-[564px] max-w-[564px] rounded-sm shadow-lg items-center">
        <div className="bg-darkBlue flex justify-center py-4 px-3 items-center rounded-t-sm">
          <Typography className="font-semibold text-body text-white">
           Redeem {data?.type ? data.type : "mkUSD"}
          </Typography>
        </div>

        <div className="px-8">
          <div className="border border-blue225 bg-[#316eff4d] p-3 text-md font-normal text-blue225 flex items-center justify-center rounded-sm mt-4">
            <Typography className="w-1/2">
              {/* A minimum debt of 1800{" "}
              {data?.prismaType === "prisma" ? "mkUSD" : "ULTRA"} is required */}
              If you want to close your Vault please go to the Manage Vault page
              here.
            </Typography>
          </div>
          <div className="text-body font-normal text-darkBlue flex justify-center w-full my-3">
            <Typography>
              1 {data?.type} is always redeemable for $1 of collateral.
            </Typography>
          </div>

          <div className="text-body font-normal text-darkBlue flex flex-col w-full items-start mt-5">
            <Typography>Select a collateral to redeem for:</Typography>
            <div className="flex items-center mt-1">
              <Image src={ethIcon} alt="eth" className="w-8 h-8" />

              <Typography className="font-body text-blue225 font-normal">
                wstETH-V1
              </Typography>
              <div className="h-[24px] w-[24px]">
                <DropDownIcon />
              </div>
            </div>
          </div>
        </div>

        <div className="w-full pb-6">
          <div className="px-8">
            <div className="mt-4 flex justify-between">
              <Typography className="text-md text-darkBlue font-medium">
                Redeem {data?.name}
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
                  value={amount}
                  onChange={handleAmountChange}
                />
              </div>

              <div className="flex gap-2 items-center">
                <button className="bg-lightBlue rounded text-sm font-bold py-[1px] px-1 text-white">
                  Max
                </button>
                <div className="bg-darkBlue flex justify-between min-w-[110px] p-3 rounded-tr-[8px] rounded-br-[8px] ">
                  <Image src={ethIcon} alt="eth" className="w-6 h-6" />

                  <Typography className="text-body text-white font-bold">
                    {data?.name}
                  </Typography>
                </div>
              </div>
            </div>

            <div className="w-full mt-3">
              <button
                className={`mt-1 w-full bg-lightBlue text-white font-bold rounded text-md py-[6px] px-4 mb-4`}
              >
                Connect wallet
              </button>
            </div>
          </div>

          <div className="bg-theme-gradient !w-full h-[1px] mt-2"></div>

          <div className="font-normal text-md text-darkBlue px-8 mt-4 gap-2">
            <Typography className="font-bold mb-3 text-left">
              Information
            </Typography>

            <div className="flex justify-between">
              <Typography>Collateral Price</Typography>
              <Typography>$3,774.20</Typography>
            </div>

            <div className="flex justify-between">
              <Typography>Redemption Feet</Typography>
              <Typography>0.00%</Typography>
            </div>

            <div className="flex justify-between">
              <Typography>Redemption Fee Amount</Typography>
              <Typography>0.00000 wstETH</Typography>
            </div>

            <div className="flex justify-between">
              <Typography>Expected Collateral Received</Typography>
              <Typography>0.0000 wstETH</Typography>
            </div>

            <div className="flex justify-between">
              <Typography>Value of Collateral Received</Typography>
              <Typography>$0.00</Typography>
            </div>

            <div className="flex justify-between">
              <Typography>
                Actual Redemption Amount{" "}
                {data?.prismaType === "prisma" ? "mkUSD" : "ULTRA"}
              </Typography>
              <Typography>0.00 {data?.name}</Typography>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RedeemForm;
