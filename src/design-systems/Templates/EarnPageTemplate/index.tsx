"use client";

import StabilityTable from "@/design-systems/Molecules/StabilityTable";
import PoolTableTemplate from "../PooltableTemplate";

const EarnPageTemplate: React.FC = () => {
  return (
    <div className="">
      <div className="flex flex-col items-center p-5">
        <StabilityTable />

        <PoolTableTemplate />
      </div>
    </div>
  );
};
export default EarnPageTemplate;
