"use client";
import { DefillamaIcon } from "@/design-systems/Atoms/Icons";
import { IMG } from "@/assets/image";
import Typography from "@/design-systems/Atoms/Typography";
import { useState } from "react";

const IntegrationsTemplate: React.FC = () => {
  const [activeTab, setActiveTab] = useState<number>(0);
  const tabHead = ["All Integrations (11)", "Bridge", "Defi", "Tools"];

  return (
    <div className="flex flex-col items-center text-lightBlack">
      <Typography className="text-h3 font-semibold">
        Prisma Integrations
      </Typography>
      <div className="flex  flex-col items-center w-full">
        <Typography className="text-start shadow-md bg-white text-lightBlack rounded-sm w-full  max-w-[1200px] p-6">
          The following application all allege they are building atop the Prisma
          ecosystem. Please note that no guarantee is made as to the
          authenticity, veracity or safety of any of these protocols. You assume
          all risks for using any links, so please conduct your own research and
          exercise caution. If you observe any issues with any link or would
          like to add to this list, please create a ticket on the{" "}
          <span className="text-primary underline">Prisma Discord.</span>
        </Typography>
      </div>
      <div className="p-4 shadow-md mt-5 rounded-sm bg-white flex justify-start w-full max-w-[1200px]">
        <div className="w-full  ">
          <div className="flex">
            {tabHead.map((tab, index) => (
              <button
                key={index}
                onClick={() => setActiveTab(index)}
                className={`py-2 px-4 transition-colors rounded duration-300 font-medium text-sm sm:text-md ${
                  activeTab === index
                    ? "bg-skyBlue"
                    : "text-blue135 hover:bg-blue245"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
          <div className="my-3 bg-gradient-radial-main h-[1px] w-full"></div>
          <div className="grid grid-cols-4 gap-3">
            {Array.from({ length:11 }).map((_, index) => (
              <div key={index} className="shadow-card-shadow px-4 py-2 flex  rounded-sm">
                <div>
                  <DefillamaIcon />
                </div>
                <div className="text-start flex flex-col gap-2">
                  <Typography className="text-[14px]">DEFILLAMA</Typography>
                  <Typography className="text-[12px] h-[40px]">DefiLlama is a DeFi TVL aggregator.</Typography>
                  <Typography className="text-primary underline flex gap-2 text-[12px]">
                    <span>Twitter</span>
                    <span>Website</span>
                  </Typography>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default IntegrationsTemplate;
