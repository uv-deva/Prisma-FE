import { useState } from 'react';

const LockDuration = () => {
  const [duration, setDuration] = useState<number>(2);

  const handleSliderChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDuration(Number(e.target.value));
  };

  return (
    <div className="p-4 bg-white shadow-md rounded-lg">
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700 mb-2">Duration of lock in weeks</label>
        <input
          type="range"
          min="2"
          max="52"
          value={duration}
          onChange={handleSliderChange}
          className="w-full"
        />
        <div className="flex justify-between text-xs text-gray-600 mt-2">
          <span>2</span>
          <span>8</span>
          <span>16</span>
          <span>26</span>
          <span>52</span>
        </div>
      </div>
      <p className="text-center text-sm text-gray-700 mb-4">Please connect to Ethereum Mainnet in your wallet.</p>
      <hr className="border-t border-gray-300 mb-4" />
      <div className="text-sm">
        <div className="mb-2">
          <span className="font-semibold">Information</span>
        </div>
        <div className="mb-2">
          <span className="text-gray-500">Weekly protocol fees</span>
          <span className="float-right">-</span>
        </div>
        <div className="mb-2">
          <span className="text-gray-500">Lock weight</span>
          <span className="float-right">-</span>
        </div>
        <div className="mb-2">
          <span className="text-gray-500">Total locked PRISMA</span>
          <span className="float-right">-</span>
        </div>
        <div>
          <span className="text-gray-500">Unlock date</span>
          <span className="float-right">-</span>
        </div>
      </div>
    </div>
  );
};

export default LockDuration;
