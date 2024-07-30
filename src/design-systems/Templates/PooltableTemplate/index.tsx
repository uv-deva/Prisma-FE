import PoolTable from "@/design-systems/Molecules/PoolTable";
import { useState } from "react";
import { bigPoolData } from "./utils";
import Input from "@/design-systems/Atoms/Input";
import Toggle from "@/design-systems/Atoms/Toggle";
import Typography from "@/design-systems/Atoms/Typography";

const PooltableTemplate = () => {
  const [hideSmallPools, setHideSmallPools] = useState<boolean>(false);
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [activeTab, setActiveTab] = useState<string>("all");

  const handleTabChange = (tab: string) => setActiveTab(tab);

  const [isSendAutometic, setIsSendAutometic] = useState<boolean>(false);

  const handleThemeChange = (isChecked: boolean) => {
    setIsSendAutometic(true);
  };

  return (
    <div className="w-full mt-2 max-w-4xl bg-white shadow-lg bg-[#FFFFFF] rounded-[12px] max-w-[1200px]">
      <div className="flex flex-col items-center p-5">
        <div className="w-full max-w-6xl p-6">
          <div className="flex justify-between items-center mb-4">
            <div className="flex">
              {["all", "curve", "convex", "my"].map((tab) => (
                <button
                  key={tab}
                  onClick={() => handleTabChange(tab)}
                  className={`p-3 rounded text-md font-medium hover:bg-[#0022370a] text-lightGray ${
                    activeTab === tab
                      ? "bg-[#00223714] text-[#002237]"
                      : "text-[#0000008a] bg-gray-200"
                  }`}
                >
                  {tab.charAt(0).toUpperCase() + tab.slice(1)} Pools
                </button>
              ))}
            </div>
            <div className="flex items-center space-x-4">
              <Typography className="text-md font-normal">
                Hide small pools (&lt; $1000)
              </Typography>
              <Toggle
                className="h-[20px] w-[60px]"
                defaultCheck={false}
                onChange={handleThemeChange}
              />
              <div className="p-3 rounded-[8px] border border-blue">
                <Input
                  inWrpClassName="border-0 p-0 text-[#002237]"
                  inputClassNames="!p-0 text-[#002237]"
                  placeholder="Search"
                  type="text"
                />
              </div>
            </div>
          </div>
          <PoolTable
            data={bigPoolData}
            searchTerm={searchTerm}
            hideSmallPools={hideSmallPools}
            activeTab={activeTab}
          />
        </div>
      </div>
    </div>
  );
};

export default PooltableTemplate;
