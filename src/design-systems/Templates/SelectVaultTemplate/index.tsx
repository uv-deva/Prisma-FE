"use client";

import SelectVaultForm from "@/design-systems/Molecules/SelectVaultForm";
import { ArrowLeftIcon } from "@heroicons/react/16/solid";
import Link from "next/link";
import { SelectVaultsTempProps } from "./interface";

const SelectVaultTemplate: React.FC<SelectVaultsTempProps> = ({address}) => {
  return (
    <div className="">
      <Link
        href="/"
        className="flex gap-1 items-center justify-start w-full ml-20"
      >
        <ArrowLeftIcon className="h-[16px] w-[16px] fill-darkBlue" />
        <div className="!text-darkBlue text-body font-medium text-left">
          Go back to Collateral Selection
        </div>
      </Link>
      <div 
      // className="flex flex-col items-center justify-center"
      >
        {/* <Typography className="text-darkBlue text-[28px] font-semibold w-1/4 text-center">
          Determine how much mkUSD you want
        </Typography> */}

        <div className="w-full flex justify-center">
          <SelectVaultForm urlAddress={address} />
        </div>
      </div>
    </div>
  );
};
export default SelectVaultTemplate;
