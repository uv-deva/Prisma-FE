
import { useState } from "react";

const Accordian1: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <div className="bg-white shadow-md rounded-lg p-4 mt-4">
      <div className="flex justify-between items-center">
        <h2 className="text-lg font-bold">Your Lock</h2>
        <button
          className="bg-blue-200 text-blue-700 px-4 py-1 rounded-md"
          onClick={() => setIsOpen(!isOpen)}
        >
          Enable Auto Lock {isOpen ? "▲" : "▼"}
        </button>
      </div>
      {isOpen && (
        <div className="mt-4">
          <p className="text-gray-500 text-sm">
          No active locks, lock some PRISMA to gain Lock Weight    </p>
        </div>
      )}
    </div>
  );
};

export default Accordian1;
