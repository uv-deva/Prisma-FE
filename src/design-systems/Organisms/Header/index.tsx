"use client";
import { DropDownIcon, HeartIcon, StarIcon } from "@/design-systems/Atoms/Icons";
import { IMG } from "@/assets/image";
import Typography from "@/design-systems/Atoms/Typography";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useAccount, useDisconnect } from "wagmi";
import { ConnectModel } from "@/design-systems/Molecules/Model/ConnectModel";
import { toast } from "react-toastify";
import { MoreDropDown } from "@/design-systems/Atoms/MoreDropdown";
import { NavData } from "./utils";

const Header: React.FC = () => {
  const [chainDropdown, setChainDropdown] = useState<boolean>(false);
  const { address, isConnected } = useAccount();
  const { disconnect } = useDisconnect();
  const [showModel, setShowModel] = useState<boolean>(false);
  const pathName = usePathname();
  const router = useRouter();
  const [userAddress, setUserAddress] = useState<string>("");

  const handle = () => {
    setShowModel(!showModel);
  };
  useEffect(() => {
    if (address) {
      setUserAddress(`${address.slice(0, 4)}...${address.slice(-4)}`);
      toast.success("Wallet connected successfully");
      setShowModel(false);
    } else {
      toast.warning("Wallet not connected");
    }
  }, [address]);

  const handleChainDropdown = () => {
    setChainDropdown(!chainDropdown);
  };

  return (
    <div className="bg-gradient-radial-main  pb-[1px] nav-image text-black relative">
      <div className="items-center w-full justify-between flex gap-3  p-[8px] bg-white">
        <div className="pl-[26px] p-[8px]">
          <Image src={IMG.prismLogo} alt="" width={89} height={26} />
        </div>
        <div className="flex items-center">
          <div className=" flex justify-center gap-3 border-[1px] border-gray2 rounded-full px-[9px] py-[3px]">
            <HeartIcon />
            <span className="text-blue225 font-bold border-r-[2px] border-r-gray2 pr-3">
              384.3%
            </span>
            <span className="text-purple236 font-bold">231.5</span>
          </div>
          <div className="flex ">
            {NavData.map((item, key) => (
              <div className="relative flex items-center cursor-pointer">
                <div
                  key={key}
                  onClick={() => router.push(item.path)}
                  className={`font-normal text-darkBlue no-underline px-[40px] pt-[15px] pb-[20px] text-[14px]           } `}
                >
                  {item.label}
                </div>
                {pathName === item.path && (
                  <div className="bottom-[-10px] bg-blue225 absolute h-[4px] w-full"></div>
                )}
              </div>
            ))}
            <div
              className="font-normal items-center relative flex cursor-pointer  text-darkBlue no-underline px-[40px] pt-[15px] pb-[20px] text-[14px]"
              onClick={() => handleChainDropdown()}
            >
              <Typography>MORE</Typography>
              <div className="h-[24px] w-[24px]">
                <DropDownIcon />
              </div>

              <MoreDropDown isChainDropdownOpen={chainDropdown} />
            </div>
          </div>
        </div>
        <div className="flex gap-4 items-center pr-[26px] ">
          <StarIcon />
          <button
            onClick={() => {
              isConnected ? disconnect() : handle();
            }}
            className="text-[14px] py-[6px] px-[20px] bg-blue225 text-white  shadow-button-active rounded-[4px]"
          >
            {isConnected && address ? `${userAddress}` : "Connect wallet"}
          </button>
        </div>
      </div>
      {showModel && (
        <ConnectModel showModel={showModel} setShowModel={setShowModel} />
      )}
    </div>
  );
};

export default Header;
