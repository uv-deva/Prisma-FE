"use client";
import BoostCard from "@/design-systems/Molecules/RewardBoostCard";
import BoostDelegationFees from "@/design-systems/Molecules/BoostDelegationFees";
import EarnedWithMaxBoostCard from "@/design-systems/Molecules/EarnedWithMaxBoostCard";
import LPTokens from "@/design-systems/Molecules/LPTokens";
import RewardCard from "@/design-systems/Molecules/YourRewardCard";
import StabilityPool from "@/design-systems/Molecules/StabilityPool";
import Vaults from "@/design-systems/Molecules/Vaults";
import VePrismaFeesCard from "@/design-systems/Molecules/VePrismaFeesCard"

const RewardPageTemplate: React.FC = () => {
  return (
    <div>
      
      <div className="flex justify-center gap-4">
        <RewardCard />
        <BoostCard />
      </div>

      <div className="flex justify-between">
        <EarnedWithMaxBoostCard />
      </div>

      <div className="p-4 ">
        <VePrismaFeesCard />
      </div>

      <div className="p-4 ">
        <Vaults />
      </div>

      <div className="p-4 ">
        <StabilityPool />
      </div>

      <div className="p-4 ">
        <LPTokens />
      </div>

      <div className="p-4 ">
        <BoostDelegationFees />
      </div>


    </div>
  );
};

export default RewardPageTemplate;
