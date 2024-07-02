// components/Accordion.js
import { useState } from "react";
import PrismaInput from "./PrismaInput";
import LockDuration from "./LockDuration";
import IncentiveBanner from "./IncentiveBanner";

const Accordion = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="bg-white shadow-md rounded-lg p-4 mt-4">
      <div className="flex justify-between items-center">
        <h2 className="text-lg font-bold">Your Prisma</h2>
        <button
          className="bg-blue-200 text-blue-700 px-4 py-1 rounded-md"
          onClick={() => setIsOpen(!isOpen)}
        >
          Enable Auto Lock {isOpen ? "▲" : "▼"}
        </button>
      </div>
      {isOpen && (
        <>
          <div className="mt-4">
            <p className="text-gray-500 text-sm">
              Lock for up to 52 weeks. Locked PRISMA gives lock weight to direct
              emissions, allows boosted claiming and earns you a share of
              protocol fees.
            </p>
          </div>

          <PrismaInput />
          <LockDuration />
          <IncentiveBanner />
        </>
      )}
    </div>
  );
};

export default Accordion;
