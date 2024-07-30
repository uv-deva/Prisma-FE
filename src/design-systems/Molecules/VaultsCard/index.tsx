"use client";
import Typography from "@/design-systems/Atoms/Typography";
import Image from "next/image";
import { VaultsCardProps } from "./interface";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Button from "@/design-systems/Atoms/Button";

const VaultCard: React.FC<VaultsCardProps> = ({
  name,
  icon,
  cardType,
  prismLRTDesc,
  address,
}) => {
  const router = useRouter();

  return (
    <div className="bg-white w-[264px] max-w-[264px] rounded-sm shadow-lg items-center relative">
      <div className="flex flex-col gap-2 mt-8">
        <div className="flex items-center justify-center gap-2">
          <Typography className="text-[#002237] text font-bold text-subtitle">
            {name}
          </Typography>
          <Typography className="border border-blue border-[2px] px-2 rounded-[6px] font-medium flex items-center text-blue">
            v2
          </Typography>
        </div>

        <div className="border-t border-b flex flex-col px-3 bg-[#0022371a]">
          <div className="flex justify-between text-sm border-b border-[#0022371a] py-[5px]">
            <Typography className="font-normal">Total Value Locked</Typography>
            <Typography className="font-bold text-[#002237]">
              $886.78k
            </Typography>
          </div>
          <div className="flex justify-between text-sm border-b border-[#0022371a] py-[5px]">
            <Typography className="font-normal">Minted ULTRA</Typography>
            <Typography className="font-bold text-[#002237]">
              364.60k/20.00m
            </Typography>
          </div>
          <div className="flex justify-between text-sm border-b border-[#0022371a] py-[5px]">
            <Typography className="font-normal">MCR</Typography>
            <Typography className="font-bold text-[#002237]">130%</Typography>
          </div>
        </div>
        <div className="flex flex-col px-3 gap-2">
          <div className="bg-[#002237] flex justify-between py-[3px] px-3 rounded-md text-sm text-white">
            <Typography className="font-normal">Mint Fee</Typography>

            <Typography className="font-bold">0.00%</Typography>
          </div>

          <div className="bg-[#002237] flex justify-between py-[3px] px-3 rounded-md text-sm text-white">
            <Typography className="font-normal">
              Borrow Interest Rate
            </Typography>

            <Typography className="font-bold">14.99%</Typography>
          </div>

          <div className="bg-[#002237] flex justify-between py-[3px] px-3 rounded-md text-sm text-white">
            <Typography className="font-normal">Redemption Rebate</Typography>

            <Typography className="font-bold">0.00%</Typography>
          </div>

          {cardType === "prism" && (
            <div className="bg-[#002237] flex justify-between py-[3px] px-3 rounded-md text-sm text-white">
              <Typography className="font-normal">Staked Ether APR</Typography>

              <Typography className="font-bold">2.8%</Typography>
            </div>
          )}
        </div>

        <div
          className="w-full flex text-white items-center justify-between rounded-[18px] px-2 py-2"
          style={{
            background: `url('${
              cardType === "prism"
                ? "https://app.prismafinance.com/earned-illustration.svg"
                : "https://app.prismafinance.com/earned-illustration2.svg"
            }') center center / 108% no-repeat`,
          }}
        >
          <Typography className="text-body font-bold">APR</Typography>
          <div className="flex gap-1">
            <Typography className="text-md font-bold">29.61% 59.22%</Typography>

            <div className="w-[22px] h-[22px] bg-white rounded-[50%]"></div>
          </div>
        </div>

        {cardType === "prismLRT" && (
          <div className="w-full flex text-white items-center justify-between rounded-[18px] px-2 py-2">
            <Typography className="font-medium text-sm text-black">
              {prismLRTDesc}
            </Typography>
          </div>
        )}

        <button
          className={`mx-3 mt-1 ${
            cardType === "prism" ? "bg-lightBlue" : "bg-[#794DEC] "
          } text-white font-bold rounded text-md py-[6px] px-4 mb-4`}
          onClick={() => router.push(`select/${address}`)}
        >
          Choose {name}-v2
        </button>
        
      </div>

      <Image
        className="absolute top-[-2%] left-[-10%]"
        src={icon}
        alt="card-icon"
        width="70"
        height="70"
      />
    </div>
  );
};

export default VaultCard;
