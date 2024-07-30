import React from 'react';

const IncentiveBanner:React.FC = () => {
  return (
    <div className="bg-black text-white p-4 flex items-center justify-center">
      <div className="text-center">
        <div className="text-2xl font-bold mb-2 text-black">HIDDEN HAND</div>
        <div className="text-lg text-black">
          <span className="font-bold">$3,616.9</span> in incentives on the{' '}
          <a
            href="https://prisma.hiddenhand.marketplace"
            className="text-black underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            Prisma Hidden Hand marketplace
          </a>{' '}
          will be paid out to PRISMA lockers who vote on select pools this week.
        </div>
      </div>
    </div>
  );
};

export default IncentiveBanner;
