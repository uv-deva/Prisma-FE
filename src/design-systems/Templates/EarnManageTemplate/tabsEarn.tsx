import { ABI } from "@/design-systems/web3Utils/ABI";
import { ApproveABI } from "@/design-systems/web3Utils/ApproveABI";
import {
  DebtTokenContractAdd,
  StabilityPoolContractAdd,
} from "@/design-systems/web3Utils/ContractAddress";
import { ethers } from "ethers";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useMemo, useState } from "react";
import { toast } from "react-toastify";
import { useAccount } from "wagmi";
import { bigPoolData } from "../PooltableTemplate/utils";

const approveToken = async (spenderAdd: any, amount: number) => {
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

    toast.success("Token approved successfully.");
    return true;
  } catch (error) {
    console.error("Error approving token:", error);
    toast.error("Failed to approve token.");
    return false;
  }
};

export const Deposit = ({data}:any) => {
  const { address, isConnected } = useAccount();
  const [balance, setBalance] = useState<any>(null);
  const router = useRouter();
  const [deposit, setDeposit] = useState(0);


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
  }, []);
  var balanceDisplay = balance && Math.round(balance * 1000) / 1000;


  const HandleConnect = async () => {
    if (!isConnected) {
      toast.warning("Please connect your wallet.");
      return;
    }
    if (deposit === 0) {
      toast.warning("Please enter the field...");
      return;
    }
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const signer = provider.getSigner();

    const spenderAdd = address;
    const amount = deposit;
    const approve = await approveToken(spenderAdd, amount);

    if (approve) {
      toast.info("Please wait...");
      const StabilityContract = new ethers.Contract(
        StabilityPoolContractAdd,
        ABI,
        signer
      );

      try {
        const estimatedGasLimit =
          await StabilityContract.estimateGas.provideToSP(
            ethers.utils.parseUnits(amount.toString(), 18)
          );

        const tx = await StabilityContract.provideToSP(
          ethers.utils.parseUnits(amount.toString(), 18),
          { gasLimit: estimatedGasLimit }
        );
        const receipt = await tx.wait();
        toast.success("Deposit successful!");
        router.push("/earn");
      } catch (error) {
        console.error("Error during deposit:", error);
        toast.error("Failed to deposit.");
      }
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
            onChange={(e: any) => setDeposit(e.target.value)}
          />
          {/* <div className="bg-primary rounded py-[1px] px-1 text-white flex items-center text-[11px]">
            MAX
          </div> */}
        </div>
        <div className="flex items-center bg-lightBlack p-2 text-white text-[12px] sm:text-[14px] font-bold rounded-r-[7px]">
          {data?.name}
        </div>
      </div>
      <button
        onClick={() => HandleConnect()}
        className="bg-primary py-[6px] px-[16px] rounded w-full text-[14px] font-bold shadow-button-active text-white"
      >
        Deposit
      </button>
    </div>
  );
};

export const Withdraw = ({data}:any) => {
  const { address, isConnected } = useAccount();
  const router = useRouter();
  const [Withdraw, setWithdraw] = useState(0);
  const [balance, setBalance] = useState<any>(null);
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
  }, []);
  var balanceDisplay = balance && Math.round(balance * 1000) / 1000;
  const HandleConnect = async () => {
    if (!isConnected) {
      toast.warning("Please connect your wallet.");
      return;
    }
    if (Withdraw === 0) {
      toast.warning("Please enter the field...");
      return;
    }
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const signer = provider.getSigner();

    const spenderAdd = address;
    const amount = Withdraw;
    const approve = await approveToken(spenderAdd, amount);

    if (approve) {
      toast.info("Please wait...");

      const StabilityContract = new ethers.Contract(
        StabilityPoolContractAdd,
        ABI,
        signer
      );
      const estimatedGasLimit = await StabilityContract.estimateGas.provideToSP(
        ethers.utils.parseUnits(amount.toString(), 18)
      );
      const tx = await StabilityContract.withdrawFromSP(
        ethers.utils.parseUnits(amount.toString(), 18),
        { gasLimit: estimatedGasLimit }
      );
      const receipt = await tx.wait();
      toast.success("Withdraw successfully!");
      router.push("/earn");
    }
  };

  return (
    <div className="">
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
            onClick={(e: any) => setWithdraw(e.target.value)}
          />
          {/* <div className="bg-primary rounded py-[1px] px-1 text-white flex items-center text-[11px]">
            MAX
          </div> */}
        </div>
        <div className="flex items-center bg-lightBlack p-2 text-white text-[12px] sm:text-[14px] font-bold rounded-r-[7px]">
          {data.name}
        </div>
      </div>
      <button
        onClick={() => HandleConnect()}
        className="bg-primary py-[6px] px-[16px] rounded w-full text-[14px] font-bold shadow-button-active text-white"
      >
        Connect Wallet
      </button>
    </div>
  );
};
