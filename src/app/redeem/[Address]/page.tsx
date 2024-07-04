"use client";
import { RedeemPageProps } from "./interface";
import RedeemPageTemplate from "@/design-systems/Templates/RedeemTemplate";

const SelectVaultPage: React.FC<RedeemPageProps> = ({ params }) => {
  return (
    <>
      <RedeemPageTemplate urlAddress = {params.Address}  />
    </>
  );
};

export default SelectVaultPage;
