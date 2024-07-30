
import { useState } from "react";

const BoostDelegationFees:React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <div className="mx-auto rounded-lg bg-white p-4 shadow-md">
      <div className="flex items-center justify-between p-4">
        <p className="text-xl font-semibold">Boost Delegation Fees</p>
        <div className="flex items-center space-x-2">
          <button
            className="bg-blue-500 rounded px-4 py-1 text-black disabled:opacity-50"
            disabled
          >
            Claim All
          </button>
          <button
            className="focus:outline-none"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="expand card content"
          >
            <svg
              className={`transform transition-transform ${
                isOpen ? "rotate-180" : ""
              }`}
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              width="24"
              height="24"
            >
              <path d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z" />
            </svg>
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="">
          <table className="w-full ">
            <thead>
              <tr className="bg-gray-100">
                <th className="py-2 font-semibold"></th>
                <th className="py-2 font-semibold">Fee</th>
                <th className="py-2 font-semibold">Earned</th>
              </tr>
            </thead>

            <tbody className="border-t">
              <tr> 
                <td className="py-2 font-bold">Disabled</td>
                <td className="py-2 font-bold">0.00%</td>
                <td className="py-2 font-bold">0.00</td>
              </tr>
            </tbody>
          </table>
        </div>
      )}

    </div>
  );
};

export default BoostDelegationFees;
