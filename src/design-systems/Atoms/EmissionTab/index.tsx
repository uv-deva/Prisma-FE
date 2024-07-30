import { useState } from "react";
import { Emission } from "./Emission";

type TabProps = {
  label: string;
  content: React.ReactNode;
};

type TabsProps = {
  tabs: TabProps[];
};
export const EmissionTab = () => {
  const [activeTab, setActiveTab] = useState<number>(0);
  const tabs = [
    { label: "Emission", content: <Emission /> },
    { label: "Proposals", content: <Emission /> },
  ];

  return (
    <div>
      <div className="flex px-6">
        {tabs.map((tab, index) => (
          <button
            key={index}
            onClick={() => setActiveTab(index)}
            className={`py-2 px-4 transition-colors duration-300 rounded-full ${
              activeTab === index && "bg-black text-white"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>
      <div className="p-4">{tabs[activeTab].content}</div>
    </div>
  );
};
