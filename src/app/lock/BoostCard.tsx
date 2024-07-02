import React from "react";

const BoostCard: React.FC = () => {
  return (
    <div className="bg-white shadow-md rounded-lg p-6">
      <div className="grid grid-cols-2 gap-4">
        <div className="flex items-center">
          <p className="text-gray-800">Your Lock Weight&nbsp;</p>
          <svg
            className="h-5 w-5 text-gray-500"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path d="M11 7h2v2h-2zm0 4h2v6h-2zm1-9C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"></path>
          </svg>
        </div>
        <div className="flex items-center">
          <p className="text-gray-800">Your Share &nbsp;</p>
          <svg
            className="h-5 w-5 text-gray-500"
            viewBox="0 0 24 24"
            fill="currentColor"
            aria-label="The current total value you have deposited into the PRISMA platform, this includes collateral deposited into vaults, and mkUSD, and ULTRA deposited into the stability pool and LP tokens staked."
          >
            <path d="M11 7h2v2h-2zm0 4h2v6h-2zm1-9C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"></path>
          </svg>
        </div>
        <div>
          <p className="text-gray-800 font-bold">$0.00</p>
          <p className="text-gray-500">of 3.25b</p>
        </div>
        <div>
          <p className="text-2xl font-bold">0.00</p>
          <p className="text-gray-500 text-sm">of total lock weight.</p>
        </div>
      </div>
    </div>
  );
};

export default BoostCard;
