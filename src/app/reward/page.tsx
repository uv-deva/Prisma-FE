"use client";
import BoostCard from "./BoostCard";
import BoostDelegationFees from "./BoostDelegationFees";
import EarnedWithMaxBoostCard from "./EarnedWithMaxBoostCard";
import LPTokens from "./LPTokens";
import RewardCard from "./RewardCard";
import StabilityPool from "./StabilityPool";
import Vaults from "./Vaults";
import VePrismaFeesCard from "./VePrismaFeesCard";

const Reward: React.FC = () => {
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

export default Reward;
