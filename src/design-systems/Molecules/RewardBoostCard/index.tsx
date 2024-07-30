import React from 'react';

const RewardBoostCard: React.FC = () => {
  return (
    <div className="bg-white shadow-md rounded-lg p-6">
      <div className="grid grid-cols-2 gap-4">
        <div className="flex items-center">
          <p className="text-gray-800">Your Boost&nbsp;</p>
          <svg className="h-5 w-5 text-gray-500" viewBox="0 0 24 24" fill="currentColor"><path d="M11 7h2v2h-2zm0 4h2v6h-2zm1-9C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"></path></svg>
        </div>
  
      <div className="col-span-6 sm:col-span-6 md:col-span-6 lg:col-span-6">
        <p className="text-base  font-bold">1.00x</p>
        <p className="text-base">Up to 0.00 PRISMA</p>
      </div>

      </div>
    </div>
  );
};

export default RewardBoostCard;
