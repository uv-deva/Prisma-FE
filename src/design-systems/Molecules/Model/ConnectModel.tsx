import {
  CancleIcon,
  InfoIcon,
  InfoIconYellow,
  PowerBy,
  WalletConnectIcon,
} from "@/design-systems/Atoms/Icons";
import { IMG } from "@/assets/image";
import Typography from "@/design-systems/Atoms/Typography";
import Image from "next/image";
import Link from "next/link";
import { useConnect } from "wagmi";
import { ModalInterface } from "./interface";

export const ConnectModel:React.FC<ModalInterface> = ({ setShowModel, showModel }) => {
  const { connect, connectors } = useConnect();
  const handle = (connector: any) => {
    connect({ connector });
  };
  return (
    <div className="h-screen w-screen z-50 absolute top-0 bg-black6 flex justify-center items-center bg-no-repeat bg-center bg-cover">
      <div className="bg-white z-50 rounded-md text-left min-h-[440px] max-w-[800px] w-full flex">
        <div className="p-4 max-w-[280px] flex justify-between flex-col h-auto border-r-[1px] border-inherit">
          <div className="p-6 gap-4 flex flex-col">
            <Image alt="" src={IMG.prismaLogo} className="h-[56px] w-[56px]" />
            <Typography className="" size="body">
              Connect your wallet
            </Typography>
            <Typography className="text-[14px]">
              Connecting your wallet is like “logging in” to Web3. Select your
              wallet from the options to get started.
            </Typography>
            <Typography className="text-[14px] text-primary flex gap-1 items-center text-center justify-center">
              <a href="#">I don't have a wallet</a>
              <div className="h-[16px] w-[16px]">
                <InfoIcon />
              </div>
            </Typography>
          </div>
          <div className="flex justify-center items-center flex-col gap-5">
            <div className="flex w-full items-center justify-center">
              <div className="rounded-full h-[10px] w-[10px] border-[2px] bg-primary border-[#1a1d26]"></div>
              <hr className="min-w-[80px] !bg-[#1a1d26] h-1" />
              <div className="rounded-full h-[8px] w-[8px]  bg-black"></div>
              <hr className="min-w-[80px] !bg-[#1a1d26] h-1" />
              <div className="rounded-full h-[8px] w-[8px]  bg-[#1a1d26]"></div>
            </div>
            <PowerBy />
          </div>
        </div>
        <div className="w-full">
          <div className="flex justify-between p-4 pr-2 items-center w-full border-b-[1px] border-inherit">
            <Typography size="body">
              Available Wallets ({connectors.length})
            </Typography>
            <div
              onClick={() => setShowModel(!showModel)}
              className="rounded-full cursor-pointer bg-gray211 p-2 w-[32px] h-[32px] "
            >
              <CancleIcon />
            </div>
          </div>
          <div className="p-4 grid grid-cols-2 gap-2">
            {connectors?.map((item: any, key) => (
              <button
                key={key}
                onClick={() => handle(item)}
                className="border-[#c2c4c9] border-[1px] p-4 rounded-md flex items-center"
              >
                {item.name === "WalletConnect" ? (
                  <div className="flex h-full gap-3 items-center">
                    <div className=" rounded-sm p-2 h-full w-[59px] flex items-center  border-[#c2c4c9] border-[1px]">
                      <WalletConnectIcon />
                    </div>
                    <Typography>WalletConnect</Typography>
                  </div>
                ) : (
                  <div className="flex h-full gap-3 items-center">
                    <div className="p-2 border-[#c2c4c9] border-[1px] rounded-sm">
                      <Image
                        alt=""
                        width={29}
                        height={29}
                        src={item.icon}
                        className="w-10 rounded-lg "
                      />
                    </div>
                    <Typography>{item.name}</Typography>
                  </div>
                )}
              </button>
            ))}
          </div>
          <Typography className="mx-4 p-4 flex w-auto justify-between border-[1px] border-orange4c rounded-sm bg-yellow00">
            <div>
              <div className="text-[12px]">Why don't I see my Wallet?</div>
              <Link
                className="text-[12px] text-primary hover:underline"
                href={
                  "https://www.blocknative.com/blog/metamask-wont-connect-web3-wallet-troubleshooting"
                }
              >
                Click here to learn more
              </Link>
            </div>
            <div className="h-[16px] w-[16px]">
              <InfoIconYellow />
            </div>
          </Typography>
        </div>
      </div>
    </div>
  );
};
