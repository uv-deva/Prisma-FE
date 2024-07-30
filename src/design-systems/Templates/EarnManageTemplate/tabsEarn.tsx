import { ABI } from "@/abis/ABI";
import { ApproveABI } from "@/abis/ApproveABI";
import { AddressString } from "@/interfaces";
import {
  DebtTokenContractAdd,
  StabilityPoolContractAdd,
} from "@/utils/Contract";
import { ethers } from "ethers";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { useAccount } from "wagmi";
import { DepositProps, WithdrawProps } from "./interface";

const approveToken = async (
  spenderAdd: any,
  amount: number,
  setIsLoadingApprove: any
) => {
  toast.info("Please wait...");
  if (!window.ethereum || !window.ethereum.isMetaMask) {
    console.error("MetaMask is not installed or not enabled.");
    toast.error("MetaMask is not installed or not enabled.");
    return;
  }
  try {
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const signer = provider.getSigner();
    const tokenContract = new ethers.Contract(
      DebtTokenContractAdd,
      ApproveABI,
      signer
    );

    const tx = await tokenContract.approve(
      spenderAdd,
      ethers.utils.parseUnits(amount.toString(), 18)
    );
    await tx.wait();
    setIsLoadingApprove(false);
    toast.success("Token approved successfully.");
    return true;
  } catch (error) {
    setIsLoadingApprove(false);
    console.error("Error approving token:", error);
    toast.error("Failed to approve token.");
    return false;
  }
};

export const Deposit = ({ data }: DepositProps) => {
  const [isLoadingApprove, setIsLoadingApprove] = useState<boolean>(false);
  const { address, isConnected } = useAccount();
  const [balance, setBalance] = useState<string | null>(null);
  const router = useRouter();
  const [deposit, setDeposit] = useState<number>(0);
  const fetchBalance = async () => {
    if (address) {
      try {
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        const balance = await provider.getBalance(address);
        setBalance(ethers.utils.formatEther(balance));
      } catch (error) {
        console.error("Error fetching balance:", error);
      }
    }
  };
  useEffect(() => {
    fetchBalance();
  }, [address]);
  const balanceDisplay =
    balance && Math.round(parseFloat(balance) * 1000) / 1000;
  const handleConnect = async () => {
    if (!isConnected) {
      toast.warning("Please connect your wallet.");
      return;
    }
    if (deposit === 0) {
      toast.warning("Please enter an amount.");
      return;
    }
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const signer = provider.getSigner();
    const spenderAdd = address;
    const amount = deposit;
    try {
      setIsLoadingApprove(true);
      const approve = await approveToken(
        spenderAdd,
        amount,
        setIsLoadingApprove
      );
      console.log("approve", approve);
      if (approve) {
        setIsLoadingApprove(true);
        toast.info("Please wait...");
        const StabilityContract = new ethers.Contract(
          StabilityPoolContractAdd,
          ABI,
          signer
        );
        // const estimatedGasLimit = await StabilityContract.estimateGas.provideToSP(
        //   ethers.utils.parseUnits(amount.toString(), 18)
        // );
        const tx = await StabilityContract.provideToSP(
          ethers.utils.parseUnits(amount.toString(), 18),
          { gasLimit: ethers.utils.hexlify(3401649) }
          // { gasLimit: estimatedGasLimit }
        );
        const receipt = await tx.wait();
        toast.success("Deposit successful!");
        setIsLoadingApprove(false);
        router.push("/earn");
      }
    } catch (error) {
      setIsLoadingApprove(false);
      console.error("Error during deposit:", error);
      toast.error("Failed to deposit.");
    }
  };
  return (
    <div className="">
      <div className="flex justify-between w-full text-lightBlack text-[12px] sm:text-[14px] font-medium">
        <div>
          Deposit <span className="font-bold">{data?.name}</span>
        </div>
        <div className="!font-normal">
          Balance: <span className="font-bold">{balanceDisplay}</span>
        </div>
      </div>
      <div className="flex justify-between border-primary border-[1px] rounded-[8px] mt-[4px] mb-[12px]">
        <div className="p-2 flex justify-between w-full">
          <input
            type="number"
            className="w-full bg-transparent focus-visible:outline-none"
            placeholder="Enter an amount"
            onChange={(e) => setDeposit(Number(e.target.value))}
          />
        </div>
        <div className="flex items-center bg-lightBlack p-2 text-white text-[12px] sm:text-[14px] font-bold rounded-r-[7px]">
          {data?.name}
        </div>
      </div>
      <button
        onClick={handleConnect}
        className="bg-primary py-[6px] px-[16px] rounded w-full text-[14px] font-bold shadow-button-active text-white"
      >
        {isLoadingApprove ? "Loading..." : "Deposit"}
      </button>
    </div>
  );
};

export const Withdraw = ({ data }: WithdrawProps) => {
  const [isLoadingApprove, setIsLoadingApprove] = useState<boolean>(false);
  const { address, isConnected } = useAccount();
  const router = useRouter();
  const [withdrawAmount, setWithdrawAmount] = useState<number>(0);
  const [balance, setBalance] = useState<string | null>(null);
  const fetchBalance = async () => {
    if (address) {
      try {
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        const balance = await provider.getBalance(address);
        setBalance(ethers.utils.formatEther(balance));
      } catch (error) {
        console.error("Error fetching balance:", error);
      }
    }
  };
  useEffect(() => {
    fetchBalance();
  }, [address]);
  const balanceDisplay =
    balance && Math.round(parseFloat(balance) * 1000) / 1000;
  const handleConnect = async () => {
    if (!isConnected) {
      toast.warning("Please connect your wallet.");
      return;
    }
    if (withdrawAmount <= 0) {
      toast.warning("Please enter a valid amount.");
      return;
    }
    try {
      setIsLoadingApprove(true);
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const signer = provider.getSigner();
      const spenderAdd = address;
      const amount = withdrawAmount;
      const approve = await approveToken(
        spenderAdd,
        amount,
        setIsLoadingApprove
      );
      if (approve) {
        setIsLoadingApprove(true);
        toast.info("Please wait...");
        const StabilityContract = new ethers.Contract(
          StabilityPoolContractAdd,
          ABI,
          signer
        );
        // const estimatedGasLimit = await StabilityContract.estimateGas.withdrawFromSP(
        //   ethers.utils.parseUnits(amount.toString(), 18)
        // );
        const tx = await StabilityContract.withdrawFromSP(
          ethers.utils.parseUnits(amount.toString(), 18),
          { gasLimit: ethers.utils.hexlify(3401649) }
        );
        const receipt = await tx.wait();
        toast.success("Withdraw successful!");
        router.push("/earn");
        setIsLoadingApprove(false);
      }
    } catch (error) {
      setIsLoadingApprove(false);
      console.error("Error during withdrawal:", error);
      toast.error("An error occurred during withdrawal.");
    }
  };
  return (
    <div>
      <div className="flex justify-between w-full text-lightBlack text-[12px] sm:text-[14px] font-medium">
        <div>
          Withdraw <span className="font-bold">{data.name}</span>
        </div>
        <div className="!font-normal">
          Balance: <span className="font-bold">{balanceDisplay}</span>
        </div>
      </div>
      <div className="flex justify-between border-primary border-[1px] rounded-[8px] mt-[4px] mb-[12px]">
        <div className="p-2 flex justify-between w-full">
          <input
            type="number"
            className="w-full bg-transparent focus-visible:outline-none"
            placeholder="Enter an amount"
            onChange={(e) => setWithdrawAmount(Number(e.target.value))}
          />
        </div>
        <div className="flex items-center bg-lightBlack p-2 text-white text-[12px] sm:text-[14px] font-bold rounded-r-[7px]">
          {data.name}
        </div>
      </div>
      <button
        onClick={handleConnect}
        className="bg-primary py-[6px] px-[16px] rounded w-full text-[14px] font-bold shadow-button-active text-white"
      >
        {isLoadingApprove ? "Loading..." : "Withdraw"}
      </button>
    </div>
  );
};
