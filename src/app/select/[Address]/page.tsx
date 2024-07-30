"use client";
import SelectVaultTemplate from "@/design-systems/Templates/SelectVaultTemplate";
import { SelectVaultPageProps } from "./interface";

const SelectVaultPage: React.FC<SelectVaultPageProps> = ({params}) => {
  return (
    <>
      <SelectVaultTemplate address={params.Address} />
    </>
  );
};

export default SelectVaultPage;
