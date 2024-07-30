"use client";
import { InfoOutlineIcon } from "@/design-systems/Atoms/Icons";
import { EmissionTab } from "@/design-systems/Atoms/EmissionTab";
import Typography from "@/design-systems/Atoms/Typography";
import Link from "next/link";

const DaoPageTemplate: React.FC = () => {
  return (
    <>
      <div className="flex justify-center ">
        <div className="flex gap-2 justify-center text-start">
          <div className="bg-gradient-radial-main rounded-tl-sm pb-[1px] max-w-[300px] w-full">
            <div className="grid grid-cols-2 p-4 gap-3 shadow-md bg-white rounded-tl-[12px]">
              <div>
                <Typography className="flex gap-1 items-center">
                  <Typography className="text-blue135 text-[14px] font-bold">
                    Boost
                  </Typography>
                  <div className="h-[14px] w-[14px]">
                    <InfoOutlineIcon />
                  </div>
                </Typography>
                <Typography className="text-[32px] font-bold">0.00x</Typography>
                <Typography className="text-[14px] text-blue135 font-normal">
                  Up to 0.00 PRISMA
                </Typography>
              </div>
              <div>
                <Typography className="flex gap-1 items-center">
                  <Typography className="text-blue135 text-[14px] font-bold">
                    Locked PRISMA
                  </Typography>
                  <div className="h-[14px] w-[14px]">
                    <InfoOutlineIcon />
                  </div>
                </Typography>
                <Typography className="text-[32px] font-bold">0.00</Typography>
                <Typography className="text-[14px] text-blue135 font-normal">
                  $0.00
                </Typography>
              </div>
            </div>
          </div>
          <div className="bg-gradient-radial-main rounded-tr-sm pb-[1px] max-w-[300px] w-full">
            <div className="grid grid-cols-2 p-4 gap-3 shadow-md bg-white rounded-tr-[12px]">
              <div>
                <Typography className="flex gap-1 items-center">
                  <Typography className="text-blue135 text-[14px] font-bold">
                    Boost
                  </Typography>
                  <div className="h-[14px] w-[14px]">
                    <InfoOutlineIcon />
                  </div>
                </Typography>
                <Typography className="text-[32px] font-bold">0.00x</Typography>
                <Typography className="text-[14px] text-blue135 font-normal">
                  Up to 0.00 PRISMA
                </Typography>
              </div>
              <div>
                <Typography className="flex gap-1 items-center">
                  <Typography className="text-blue135 text-[14px] font-bold">
                    Locked PRISMA
                  </Typography>
                  <div className="h-[14px] w-[14px]">
                    <InfoOutlineIcon />
                  </div>
                </Typography>
                <Typography className="text-[32px] font-bold">0.00</Typography>
                <Typography className="text-[14px] text-blue135 font-normal">
                  $0.00
                </Typography>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center p-4">
        <div className="shadow-md bg-white rounded-sm justify-between w-full text-start max-w-[1200px]">

        <div className="flex p-6">
          <div className="max-w-[400px]">
            <Typography className="text-[24px] font-semibold">
              Governance & Emissions voting
            </Typography>
            <Typography>
              Incentivize liquidity to an action, such as minting mkUSD or ULTRA
              with a specific collateral. <span className="text-primary underline">Read more
                </span> 
            </Typography>
          </div>
          <div className="grid grid-cols-3 gap-[12px] ">
            <div className="shadow-card-shadow rounded-sm p-3">
              <Typography className="text-blue135 text-[14px] font-bold">
                Hidden Hand Incentives:
              </Typography>
              <Typography className="text-primary text-[32px] font-bold">
                $3,625.3
              </Typography>
              <Link className="text-primary underline  text-[12px] " href={"#"}>
                View HH marketplace
              </Link>
            </div>
            <div className="shadow-card-shadow rounded-sm p-3">
              <Typography className="text-blue135 text-[14px] font-bold">
                Current emissions week:
              </Typography>
              <Typography className="text-black text-[32px] font-bold">
                34
              </Typography>
            </div>
            <div className="shadow-card-shadow rounded-sm p-3">
              <Typography className="text-blue135 text-[14px] font-bold">
                Epoch ending:
              </Typography>
              <Typography className="text-black text-[32px] font-bold">
                5d 11h 27m
              </Typography>
              <Typography className="text-blue135 text-[12px] ">Thu 4, 2024 </Typography>
            </div>
          </div>
        </div>
        <EmissionTab/>
        </div>
      </div>
    </>
  );
};

export default DaoPageTemplate;
