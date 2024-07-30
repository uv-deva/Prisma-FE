"use client";
import { useMemo, useState } from "react";
import Typography from "@/design-systems/Atoms/Typography";
import RedeemForm from "@/design-systems/Molecules/RedeemForm";
import { RedeemData, RedeemcolumnData } from "./utils";
import RedeemTable from "@/design-systems/Molecules/RedeemTable";
import { RedeemTemplateProps } from "./interface";
import { RedeemDataProps } from "@/design-systems/Molecules/RedeemForm/interface";
import { RedeemFetchData } from "@/design-systems/Molecules/RedeemForm/utils";

const RedeemPageTemplate: React.FC<RedeemTemplateProps> = ({ urlAddress }) => {
  const [data, setData] = useState<RedeemDataProps | undefined>(undefined);


  useMemo(() => {
    const cardData = RedeemFetchData?.find(
      (card) => card.address === urlAddress
    );
    setData(cardData);
  }, [urlAddress]);

  return (
    <div className="container">
      <Typography className="text-darkBlue text-[28px] font-semibold text-center">
        Redeem {data?.type} for a collateral
      </Typography>
      <div className="flex items-start p-5">
        <RedeemForm urlAddress={urlAddress} />

        <div className="w-full bg-white shadow-lg rounded-[12px]">
          <RedeemTable data={RedeemData} columns={RedeemcolumnData} />
        </div>
      </div>
    </div>
  );
};
export default RedeemPageTemplate;
