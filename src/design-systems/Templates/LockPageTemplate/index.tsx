"use client";

import LockPrismaTemplate from "../LockPrismaTemplate";
import BoostCard from "@/design-systems/Molecules/BoostCard";
import RewardCard from "@/design-systems/Molecules/RewardCard";
import LockWeightTemplate from "../LockWeightTemplate";

const LockPageTemplate: React.FC = () => {
  return (
    <div>
      <div className="flex justify-center gap-4">
        <RewardCard />
        <BoostCard />
      </div>
      <div className="flex flex-row">
        <div className="w-1/2 p-4">
        <LockPrismaTemplate />
        </div>
        <div className="w-1/2 p-4">
     
          <LockWeightTemplate />
        </div>
      </div>
    </div>
  );
};

export default LockPageTemplate;
