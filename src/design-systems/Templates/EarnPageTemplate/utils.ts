import MkIcon from "@/assets/image/Icons/mkIcon.svg";
import UltraIcon from "@/assets/image/Icons/ultraIcon.svg"
import { ColumnData } from "@/design-systems/Atoms/Table/interface";

export const poolData = [
  {
    name: "mkUSD",
    tvl: "$2.67m",
    unboostedApr: "9.86%",
    boostedApr: "19.72%",
    deposits: "0.00",
    earned: "0.00",
    icon: MkIcon,
    poolAddress: "0xed8B26D99834540C5013701bB3715faFD39993Ba",
  },
  {
    name: "ULTRA",
    tvl: "$479.36k",
    unboostedApr: "19.62%",
    boostedApr: "39.23%",
    deposits: "0.00",
    earned: "0.00",
    icon: UltraIcon,
    poolAddress: "0x6953504F2f4537D7a7B4024508f321f7816BB6ED",
  },
];

export const columnData: ColumnData[] = [
  { title: "" },
  { title: "TVL" },
  { title: "Unboosted APR" },
  { title: "Boosted APR" },
  { title: "Your Deposits" },
  { title: "Earned" },
  { title: "" },
];
