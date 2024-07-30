
import { useState } from 'react';

const PrismaInput: React.FC = () => {
  const [amount, setAmount] = useState<string>('');

  return (
    <div className="flex flex-col">
      <div className="flex justify-between text-sm text-gray-700 mb-2">
        <label htmlFor="prisma-amount" className="font-semibold">
          Enter amount PRISMA
        </label>
        <div className="flex items-center">
          <span className="mr-1">Balance</span>
          <span className="text-black font-bold">0</span>
        </div>
      </div>
      <div className="relative flex items-center">
        <input
          id="prisma-amount"
          type="text"
          placeholder="Enter an amount"
          className="w-full py-2 pl-4 pr-32 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-300"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
        <button className="absolute mx-4 border border-gray-300 right-20 bg-blue-200 text-blue-700 px-2 py-1 rounded-md">
          MAX
        </button>
        <div className=" text-black border border-gray-300 absolute right-0 flex items-center bg-blue-900 px-4 py-2 rounded-r-md">
          <span>PRISMA</span>
        </div>
      </div>
    </div>
  );
};

export default PrismaInput;
