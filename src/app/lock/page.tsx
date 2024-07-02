"use client";

import BoostCard from "./BoostCard";
import LockPrismaPage from "./LockPrismaPage";
import LockWeightPage from "./LockWeightPage";
import RewardCard from "./RewardCard";

const Lock: React.FC = () => {
  return (
    <div>
      <div className="flex justify-center gap-4">
        <RewardCard />
        <BoostCard />
      </div>
      <div className="flex flex-row">
        <div className="w-1/2 p-4">
        <LockPrismaPage/>
        </div>
        <div className="w-1/2 p-4">
     
          <LockWeightPage />
        </div>
      </div>
    </div>
  );
};

export default Lock;
