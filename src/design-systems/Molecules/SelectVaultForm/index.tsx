"use client";

import { useEffect, useMemo, useState } from "react";
import Typography from "@/design-systems/Atoms/Typography";
import { VaultsFormProps } from "./interface";
import Toggle from "@/design-systems/Atoms/Toggle";
import Input from "@/design-systems/Atoms/Input";
import ethIcon from "@/assets/image/Icons/ethIcon.svg";
import Image from "next/image";
import UltraIcon from "@/assets/image/Icons/ultraIcon.svg";
import { VaultCardData } from "@/design-systems/Templates/HomePageTemplate/utils";
import { vaultsCardPrismaData } from "./utils";
import { useAccount } from "wagmi";
import { toast } from "react-toastify";
import { ethers } from "ethers";

import { TroveApproveABI } from "@/abis/TroveApprovalABI";
import { BorrowerABI } from "@/abis/BorrowerABI";
import {
  BorrowerContractAdd,
  LinkTokenContractAdd,
  OpenTroveContractAdd,
} from "@/utils/Contract";
import { TroveManager } from "@/abis/TroveManager";

const SelectVaultForm: React.FC<VaultsFormProps> = ({ urlAddress }) => {
  const { chainId, address } = useAccount();
  const [isSendAutometic, setIsSendAutometic] = useState<boolean>(false);
  const [data, setData] = useState<VaultCardData | undefined>(undefined);
  const [activeTab, setActiveTab] = useState<string>("auto");
  const [amount, setAmount] = useState<string>("");
  const [isApproved, setIsApproved] = useState<boolean>(false);
  const [isLoadingTrove, setIsLoadingTrove] = useState<boolean>(false);
  const [isLoadingApprove, setIsLoadingApprove] = useState<boolean>(false);
  const [resSuccess, setResSuccess] = useState<boolean>(false);
  const handleTabChange = (tab: string) => setActiveTab(tab);
  const [balance, setBalance] = useState<string | null>(null);

  const handleThemeChange = (isChecked: boolean) => {
    setIsSendAutometic(true);
  };

  useMemo(() => {
    const cardData = vaultsCardPrismaData.find(
      (card) => card.address === urlAddress
    );
    setData(cardData);
  }, [urlAddress]);

  const handleApprove = async () => {
    setIsLoadingApprove(true);
    toast.info("Please wait...");
    if (!window.ethereum || !window.ethereum.isMetaMask) {
      console.error("MetaMask is not installed or not enabled.");
      toast.error("MetaMask is not installed or not enabled.");
      return;
    }
    try {
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const signer = provider.getSigner();

      const contract = new ethers.Contract(
        OpenTroveContractAdd,
        TroveManager,
        signer
      );

      const result = await contract.Troves(address);
      if (result.status === 1) {
        toast.info("You already have a Trove.");
      } else {
        const tokenContract = new ethers.Contract(
          LinkTokenContractAdd,
          TroveApproveABI,
          signer
        );

        const tx = await tokenContract.approve(
          BorrowerContractAdd,
          ethers.utils.parseUnits(amount.toString(), 18)
        );
        const transactionRes = await tx.wait();
        if (transactionRes.transactionHash) {
          toast.success("Trove has done successfully.");
          setIsApproved(true);
        } else {
          toast.error("Insuffient Token Balance.");
        }
      }
    } catch (error) {
      console.error("Error approving token:", error);
      toast.error("Failed to approve token.");
    } finally {
      setIsLoadingApprove(false);
    }
  };

  const handleOpenTrove = async () => {
    try {
      setIsLoadingTrove(true);
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const signer = provider.getSigner();
      const tokenContract = new ethers.Contract(
        BorrowerContractAdd,
        BorrowerABI,
        signer
      );
  
      // Prepare parameters
      const _maxFeePercentage = ethers.utils.parseUnits(amount.toString(), 18);
      const _collateralAmount = ethers.utils.parseUnits(amount.toString(), 18);
      const _debtAmount = ethers.utils.parseUnits(amount.toString(), 18);
      const _upperHint = "0x0000000000000000000000000000000000000000";
      const _lowerHint = "0x0000000000000000000000000000000000000000";
  
      // Estimate gas limit
      let estimatedGasLimit
      try {
        estimatedGasLimit = await tokenContract.estimateGas.openTrove(
          OpenTroveContractAdd,
          address,
          _maxFeePercentage,
          _collateralAmount,
          _debtAmount,
          _upperHint,
          _lowerHint
        );
      } catch (error) {
        console.error("Error estimating gas:", error);
        estimatedGasLimit = ethers.utils.hexlify(3401649); // Default gas limit in case of error
      }
  
      // Send transaction
      const tx = await tokenContract.openTrove(
        OpenTroveContractAdd,
        address,
        _maxFeePercentage,
        _collateralAmount,
        _debtAmount,
        _upperHint,
        _lowerHint,
        { gasLimit: estimatedGasLimit }
      );
  
      // Wait for transaction to be mined
      const transactionResponse = await tx.wait();
      if (transactionResponse.transactionHash) {
        setResSuccess(true);
      }
    } catch (error) {
      console.error("Error in trove function:", error);
      toast.error("Failed to execute trove function");
    } finally {
      setIsLoadingTrove(false);
    }
  };
  

  const handleAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAmount(e.target.value);
  };

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

  return resSuccess ? (
    <div className="flex flex-col gap-4  w-[450px] max-w-[450px]">
      <div className="bg-white w-full min-h-[200px] flex items-center flex-col gap-4 justify-center rounded-sm shadow-lg mt-4">
        <Typography className="text-darkBlue text-subtitle font-semibold text-center">
          Successfully minted 2.167{" "}
          {data?.prismaType === "prisma" ? "mkUSD" : "ULTRA"}
        </Typography>
        <button
          className={`mx-3 mt-1  w-1/2
          bg-white border border-lightBlue
        text-lightBLue font-bold rounded text-md py-[6px] px-4 mb-4`}
        >
          Manage
        </button>
      </div>
      <div className="flex gap-2">
        <div className="bg-white w-1/2 min-h-[150px] flex flex-col gap-2 justify-center max-w-[450px] rounded-sm shadow-lg items-center">
          <Typography className="text-darkBlue text-lg items-end font-semibold text-center">
            289.45 - 578.90 APR
          </Typography>
          <button
            className={`mx-3 mt-1
          bg-lightBlue
        text-white font-bold rounded text-md py-[6px] px-4 mb-4`}
          >
            Deposit on Curve
          </button>
        </div>
        <div className="bg-white  min-h-[150px] w-1/2 max-w-[450px] gap-2 justify-center flex flex-col rounded-sm shadow-lg items-center">
          <Typography className="text-darkBlue text-lg font-semibold text-center">
            12.90 - 25.81 APR
          </Typography>
          <button
            className={`mx-3 mt-1
          bg-lightBlue
        text-white font-bold rounded text-md py-[6px] px-4 mb-4`}
          >
            Stake in Stability Pool
          </button>
        </div>
      </div>
    </div>
  ) : (
    <div className="flex flex-col items-center justify-center w-full">
      <Typography className="text-darkBlue text-[28px] font-semibold w-1/4 text-center">
        {data?.prismaType === "prisma"
          ? "Determine how much mkUSD you want"
          : "Determine how much ULTRA you want "}
      </Typography>

      <div className="bg-white w-[500px] max-w-[500px] rounded-sm shadow-lg items-center mt-4">
        <div className="bg-darkBlue flex justify-between py-4 px-3 items-center rounded-t-sm">
          <Typography className="font-semibold text-body text-white">
            {data?.prismaType === "prisma" ? "Mint mkUSD" : "Mint ULTRA"}
          </Typography>
          <div className="bg-lightBlue font-semibold text-[13px] py-2 px-3 text-white rounded-[10px]">
            <Typography>3.47% - 6.94% APR</Typography>
          </div>
        </div>

        <div className="w-full px-6 pb-4">
          {/*     <div className="flex items-center justify-end gap-2 mt-6">
            <Typography className="text-md font-medium">
              Zap ETH/wETH to wstETH
            </Typography>
            <Toggle
              className="h-[20px] w-[60px]"
              defaultCheck={false}
              onChange={handleThemeChange}
            />
          </div> */}

          <div className="mt-4 flex justify-between">
            <Typography className="text-md text-darkBlue font-medium">
              Enter amount of {data?.name}
            </Typography>

            <div className="flex">
              <Typography className="text-md text-darkBlue font-medium">
                Balance:
              </Typography>
              <Image src={ethIcon} alt="eth" className="w-6 h-6" />

              <Typography className="text-md text-darkBlue font-medium">
                {balanceDisplay}
              </Typography>
            </div>
          </div>

          <div className="pl-3 flex justify-between rounded-[8px] border border-blue">
            <div className="py-3">
              <Input
                inWrpClassName="border-0 p-0 text-[#002237]"
                inputClassNames="!p-0 text-[#002237]"
                placeholder="Enter an amount"
                type="text"
                value={amount}
                onChange={handleAmountChange}
              />
            </div>

            <div className="flex gap-2 items-center">
              {/* <Typography className="text-sm font-normal text-[#794DEC]">
                =$0.0
              </Typography> */}
              <button className="bg-lightBlue rounded text-sm font-bold py-[1px] px-1 text-white">
                Max
              </button>
              <div className="bg-darkBlue flex justify-between min-w-[110px] p-3 rounded-tr-[8px] rounded-br-[8px] ">
                <Image src={ethIcon} alt="eth" className="w-6 h-6" />

                <Typography className="text-body text-white font-bold">
                  {data?.name}
                </Typography>
              </div>
            </div>
          </div>

          <Typography className="text-left font-medium text-md mt-4 mb-1">
            Calculate Debt
          </Typography>

          <div className="flex justify-between">
            {/* <div className="flex">
              {["auto", "custom"].map((tab) => (
                <button
                  key={tab}
                  onClick={() => handleTabChange(tab)}
                  className={`px-3 py-2 rounded text-md font-medium hover:bg-[#0022370a] text-lightGray ${
                    activeTab === tab
                      ? "bg-[#00223714] text-[#002237]"
                      : "text-[#0000008a] bg-gray-200"
                  }`}
                >
                  {tab.charAt(0).toUpperCase() + tab.slice(1)} Pools
                </button>
              ))}
            </div> */}

            <div className="px-1 py-2 flex items-center rounded-[8px] border border-blue w-1/8">
              {/* <Input
                inWrpClassName="border-0 p-0 text-[#002237]"
                inputClassNames="!p-0 text-[#002237]"
                placeholder="0"
                type="text"
                value={amount}
                onChange={handleAmountChange}
              /> */}
              <Typography className="text-body font-bold text-[#794DEC]">
                100 %
              </Typography>
            </div>
          </div>

          <div className="flex flex-col rounded-[8px] border border-blue mt-2">
            <div className="bg-lightBlue w-full rounded-tr-[8px] px-2 py-1">
              <Typography className="text-white font-medium text-md text-left">
                {data?.prismaType === "prisma"
                  ? "Minting mkUSD"
                  : "Minting ULTRA"}
              </Typography>
            </div>
            <div className="pl-3 flex justify-between rounded-[8px]">
              <div className="py-3">
                <Input
                  inWrpClassName="border-0 p-0 text-[#002237]"
                  inputClassNames="!p-0 text-[#002237]"
                  placeholder="Enter an amount"
                  type="text"
                  value={amount}
                  onChange={handleAmountChange}
                />
              </div>

              <div className="flex gap-2 items-center">
                <button className="bg-lightBlue rounded text-sm font-bold py-[1px] px-1 text-white">
                  Max
                </button>
                <div className="bg-darkBlue flex justify-between min-w-[110px] p-3 rounded-br-[8px] ">
                  <Image src={UltraIcon} alt="" className="w-6 h-6" />

                  <Typography className="text-body text-white font-bold">
                    {data?.prismaType === "prisma" ? "mkUSD" : "ULTRA"}
                  </Typography>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-[#F7F7F7] text-md flex flex-col gap-1 font-medium text-darkBlue mt-4 rounded-sm p-2">
            <div className="flex justify-between">
              <Typography>+Net debt</Typography>
              <Typography>
                {balance} {data?.prismaType === "prisma" ? "mkUSD" : "ULTRA"}
              </Typography>
            </div>

            <div className="flex justify-between">
              <Typography>+Mint Fee</Typography>
              <Typography>
                (0.64%) {balance}{" "}
                {data?.prismaType === "prisma" ? "mkUSD" : "ULTRA"}
              </Typography>
            </div>
            <div className="flex justify-between">
              <Typography>+Liquidation Reserve </Typography>
              <Typography>
                200 {data?.prismaType === "prisma" ? "mkUSD" : "ULTRA"}
              </Typography>
            </div>
            <div className="bg-theme-gradient !w-full h-[1px]"></div>
            <div className="flex justify-between">
              <Typography>Your total debt</Typography>
              <Typography className="text-[#16C720]">
                0.00{data?.prismaType === "prisma" ? "mkUSD" : "ULTRA"}
              </Typography>
            </div>
          </div>

          <div className="border border-[#FF0000] bg-[#ff00001a] text-md font-normal text-[#FF0000] flex items-center justify-center p-3 rounded-sm mt-4">
            <Typography>
              A minimum debt of 1800{" "}
              {data?.prismaType === "prisma" ? "mkUSD" : "ULTRA"} is required
            </Typography>
          </div>

          {chainId != 11155111 ? (
            <Typography className="text-darkBlue text-body font-normal text-center mt-3">
              Please connect to Sepolia in your wallet.
            </Typography>
          ) : (
            <></>
          )}
          {chainId == 11155111 ? (
            <div className="flex mt-2">
              <button
                onClick={handleApprove}
                className={`mx-3 mt-1 w-1/2 bg-lightBlue text-white font-bold rounded text-md py-[6px] px-4 mb-4`}
              >
                {isLoadingApprove ? "Loading..." : "Approve"}
              </button>
              <button
                onClick={handleOpenTrove}
                className={`mx-3 mt-1 w-1/2 border font-bold rounded text-md py-[6px] px-4 mb-4 ${
                  isApproved
                    ? "bg-white border-lightBlue text-lightBlue"
                    : "bg-white border-lightBlue text-lightBlue opacity-50 cursor-not-allowed"
                }`}
                disabled={!isApproved}
              >
                {isLoadingTrove ? "Loading..." : "Open Vault"}
              </button>
            </div>
          ) : (
            <></>
          )}
          <div className="w-full bg-theme-gradient h-[1px] mt-2"></div>

          <div className="font-normal text-md text-darkBlue mt-4 gap-2">
            <Typography className="font-bold mb-3 text-left">
              Information
            </Typography>

            <div className="flex justify-between">
              <Typography>Vault position</Typography>
              <Typography className="font-bold text-[#FF747A]">0/13</Typography>
            </div>

            <div className="flex justify-between">
              <Typography>Debt in front</Typography>
              <Typography className="font-bold text-[#FF747A]">
                0.0 {data?.prismaType === "prisma" ? "mkUSD" : "ULTRA"}
              </Typography>
            </div>

            <div className="flex justify-between">
              <Typography>Collat. Ratio</Typography>
              <Typography className="font-bold text-[#16C784]">
                0.00%
              </Typography>
            </div>

            <div className="flex justify-between">
              <Typography>Liquidation Price</Typography>
              <Typography className="font-bold text-[#16C784]">
                $0.00
              </Typography>
            </div>

            <div className="flex justify-between">
              <Typography>Borrow Interest Rate</Typography>
              <Typography>10.00% </Typography>
            </div>

            <div className="flex justify-between">
              <Typography>
                Remaining Mintable{" "}
                {data?.prismaType === "prisma" ? "mkUSD" : "ULTRA"}
              </Typography>
              <Typography>95,690,007.21</Typography>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SelectVaultForm;
