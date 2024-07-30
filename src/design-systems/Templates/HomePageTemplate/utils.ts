import { VaultType } from "@/design-systems/Molecules/VaultsCard/interface";

export const tabs = [
    { name: 'prisma', label: 'prisma'},
    { name: 'prismaLRT', label: 'prismaLRT' },
  ];
 
  export interface VaultCardData {
    type: VaultType;
    name: string;
    description: string;
    icon : string
    prismLRTDesc? : string
    address?: string
    prismaType ? :string
}

export const vaultsCardPrismaData : VaultCardData[] =[
  {
    "type": "wstETH",
    "name": "wstETH",
    "description": "Description of Wrapped wstETH card.",
    "icon": "https://app.prismafinance.com/collaterals/0x7f39C581F595B53c5cb19bD0b3f8dA6c935E2Ca0.svg",
    "address" : "0x1CC79f3F47BfC060b6F761FcD1afC6D399a968B6"
  },
  {
    "type": "rETH",
    "name": "rETH",
    "description": "Description of rETH card.",
    "icon": "https://app.prismafinance.com/collaterals/0xae78736Cd615f374D3085123A210448E74Fc6393.svg",
    "address" : "0x0d6741f1A3A538F78009ca2e3a13F9cB1478B2d0"
  },
  {
    "type": "cbETH",
    "name": "cbETH",
    "description": "Description of cbETH card.",
    "icon": "	https://app.prismafinance.com/collaterals/0xBe9895146f7AF43049ca1c1AE358B0541Ea49704.svg",
    "address" : "0x2ee8FcA637D4b0bdb402C2735EA55eF6976c25db"
  },
  {
    "type": "sfrxETH",
    "name": "sfrxETH",
    "description": "Description of sfrxETH card.",
    "icon": "https://app.prismafinance.com/collaterals/0xac3E018457B222d93114458476f3E3416Abbe38F.svg",
    "address" : "0xC2545C68a71F6803264bdE885870fD72D361fB9E"
  },
  {
    "type": "ETHx",
    "name": "ETHx",
    "description": "Description of ETHx card.",
    "icon": "https://app.prismafinance.com/collaterals/0xA35b1B31Ce002FBF2058D22F30f95D405200A15b.svg",
    "address" : "0x8B19A106782721EDB42E9489f79D6E58A317bd2b"
  }
]


export const vaultsCardPrismaLRTData: VaultCardData[]  =[
  {
    "type": "weETH",
    "name": "weETH",
    "description": "Description of Wrapped weETH card.",
    "icon": "	https://app.prismafinance.com/collaterals/0xCd5fE23C85820F7B72D0926FC9b05b43E359b7ee.svg",
    "prismLRTDesc" : "Borrowers will earn 2x Ether.fi points on collateral supplied. Find out more",
    "address" : "0x1691308554C0A5A37C87E947677a4D31B9c97da9"


  },
  {
    "type": "ezETH",
    "name": "ezETH",
    "description": "Description of ezETH card.",
    "icon": "https://app.prismafinance.com/collaterals/0xbf5495Efe5DB9ce00f80364C8B423567e58d2110.svg",
    "prismLRTDesc" : "Borrowers will earn 2x Renzo points on collateral supplied. Find out more",
    "address" : "0x1Ad10eE3284297AfCF2f6a41f935300cBebcf70d"
  },

  {
    "type": "rsETH",
    "name": "rsETH",
    "description": "Description of rsETH card.",
    "icon": "	https://app.prismafinance.com/collaterals/0xA1290d69c65A6Fe4DF752f95823fae25cB99e5A7.svg",
    "prismLRTDesc" : "Borrowers will earn 1x KelpDao Miles on collateral supplied. Find out more",
    "address" : "0x335849A1C359E83dCa508101bD394a9D12E176b9"

  },

]