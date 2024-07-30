"use client";

import { useState } from "react";
import { tabs } from "../HomePageTemplate/utils";
import { PrismaLRT, PrismaSvg } from "@/design-systems/Atoms/Icons";
import Typography from "@/design-systems/Atoms/Typography";
import Image from "next/image";
import { DropDownIcon } from "@/design-systems/Atoms/Icons"
import ethIcon from "@/assets/image/Icons/ethIcon.svg";
import VaultListTable from "@/design-systems/Molecules/VaultListTable";
import { VaultListData, vaultcolumnData } from "./utils";


const VaultListTemplate: React.FC = () => {
  const [saleType, setSaleType] = useState<string>("prisma");
  return (
    <div className="flex flex-col items-center">
      <div className="w-[576px] flex items-center justify-between rounded-full bg-[#F0F0F0]">
        {tabs.map(({ label, name }) => (
          <button key={name} onClick={() => setSaleType(name)}>
            <div
              className={`enabled:active:bg-brand-hover cursor-pointer text-md bg-white rounded-full px-24 w-[335px] py-2 font-poppins text-small font-semibold leading-[14px] hover:bg-gradient-to-t disabled:opacity-30 ${
                name === saleType
                  ? "border border-[3px] border-blue"
                  : "border border-[3px] border-blue opacity-[0.5] z-0"
              }`}
            >
              {name === "prisma" ? <PrismaSvg /> : <PrismaLRT />}
            </div>
          </button>
        ))}
      </div>

      <div className="mt-8 flex gap-2">
        {/* one */}
        <div className="p-4 flex gap-16 shadow-lg rounded-tl-sm nav-image bg-white w-[452px] max-w-[452px]">
          <div className="flex flex-col items-start">
            <Typography className="font-bold text-md text-[#667A87]">
              Total LRT Collateral{" "}
            </Typography>
            <Typography className="font-bold text-[32px] text-darkBlue">
              $1.96m
            </Typography>
          </div>

          <div>
            <Typography className="font-bold text-md text-[#667A87]">
              Total ULTRA Debt{" "}
            </Typography>
            <Typography className="font-bold text-[32px] text-darkBlue">
              932.84k
            </Typography>
          </div>
        </div>

        {/* two */}
        <div className="p-4 flex gap-16 shadow-lg rounded-tr-sm nav-image bg-white w-[452px] max-w-[452px]">
          <div className="flex flex-col items-start">
            <Typography className="font-bold text-md text-[#667A87]">
              Total LRT Vaults{" "}
            </Typography>
            <Typography className="font-bold text-[32px] text-darkBlue">
              22
            </Typography>
          </div>

          <div>
            <Typography className="font-bold text-md text-[#667A87]">
              ULTRA Price
            </Typography>
            <Typography className="font-bold text-[32px] text-darkBlue">
              $1.032
            </Typography>
          </div>
        </div>
      </div>


      <div className="w-full bg-white shadow-lg rounded-[12px] max-w-[1152px] mt-5">
        <div className="flex flex-col gap-3 items-start p-4">
      <Typography className="text-[24px] font-semibold text-darkBlue">
          Vaults
        </Typography>

        <Typography className="text-body font-normal text-left text-darkBlue">
        Vaults with the lowest collateral ratio are the first to be redeemed against.<span className="text-blue225 border-b border-blue225">Learn more.</span>   Additionally vaults below 150% collateral ratio are at risk of liquidation if the system enters recovery mode. <span className="text-blue225 border-b border-blue225">Learn more.</span>  
        </Typography>
        </div>
        <div className="w-full bg-theme-gradient !w-full h-[1px] mt-2"></div>

<div className="flex justify-between p-4">

<div className="flex items-cent mt-1">
              <Image src={ethIcon} alt="eth" className="w-8 h-8" />

              <Typography className="font-body text-blue225 font-normal">
                wstETH-V1
              </Typography>
              <div className="h-[24px] w-[24px]">
                <DropDownIcon />
              </div>
            </div>

<div className="flex gap-8">
            <div className="flex flex-col items-start">
            <Typography className="font-normal text-body text-[#667A87]">
            Collateral Price
            </Typography>
            <Typography className="font-semibold text-lg text-darkBlue">
            $3,639.56
            </Typography>
          </div>


          <div className="flex flex-col items-start">
            <Typography className="font-normal text-body text-[#667A87]">
            Total Collateral
            </Typography>
            <Typography className="font-semibold text-lg text-darkBlue">
            $13.57m
            </Typography>
          </div>

          <div className="flex flex-col items-start">
            <Typography className="font-normal text-body text-[#667A87]">
            Total Debt
            </Typography>
            <Typography className="font-semibold text-lg text-darkBlue">
            4.23m
            </Typography>
          </div>

          </div>

</div>

      
          <VaultListTable
            data={VaultListData}
            columns={vaultcolumnData}
            isPagination

          />
          {" "}
        </div>

    </div>
  );
};

export default VaultListTemplate;
