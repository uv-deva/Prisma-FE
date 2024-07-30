'use client'
import { useState } from 'react';
import {  tabs, vaultsCardPrismaData, vaultsCardPrismaLRTData } from './utils';
import { PrismaSvg, PrismaLRT } from "@/design-systems/Atoms/Icons";
import Typography from '@/design-systems/Atoms/Typography';
import Button from '@/design-systems/Atoms/Button';
import VaultsCard from '@/design-systems/Molecules/VaultsCard';



const HomePageTemplate: React.FC = () => {
  const [activeTab, setActiveTab] = useState(tabs[0].name);
  const [saleType, setSaleType] = useState<string>('prisma')



  return (

    <div className='flex justify-center flex-col items-center'>
    <div className="w-[576px] flex items-center justify-between rounded-full bg-[#F0F0F0]">
    {tabs.map(({ label, name}) => (
      <button key={name} onClick={() => setSaleType(name)}>
        <div
          className={`enabled:active:bg-brand-hover cursor-pointer text-md bg-white rounded-full px-24 w-[335px] py-2 font-poppins text-small font-semibold leading-[14px] hover:bg-gradient-to-t disabled:opacity-30 ${
            name === saleType ? 'border border-[3px] border-blue': 'border border-[3px] border-blue opacity-[0.5] z-0'
          }`}
        >
         { name  === "prisma" ?  <PrismaSvg /> : <PrismaLRT />   }
        </div>
      </button>
    ))}
  </div>

<div className='w-full mt-10'>
  <div className='w-full flex gap-6 justify-center items-center'>
 
   { saleType === "prismaLRT" ?
   <Typography className='text-[#002237] text-[36px] font-bold w-[20%]'>Choose an LRT to mint ULTRA
    </Typography>
    :
    <Typography className='text-[#002237] text-[36px] font-bold w-[20%]'>Choose an LST to mint mkUSD
    </Typography>

   }
 
    <div className='w-[860px] h-[80px] flex items-center justify-between rounded-[16px] px-6 py-4'
       style={{
        background: `url('${saleType === "prisma" ? "https://app.prismafinance.com/lock-illustration.svg" : "https://app.prismafinance.com/lock-illustration2.svg"}') center center / 108% no-repeat`,
      }}
    >

  {saleType === "prisma"     && 
<Typography className='text-white text-[20px] font-medium w-[70%] text-left'>
Earn up to <span className='font-bold'>16.67% APR</span> on any mkUSD you mint by depositing into the Stability Pool.
</Typography>}

{saleType === "prismaLRT"     && 
<Typography className='text-white text-[20px] font-medium w-[70%] text-left'>
Earn up to <span className='font-bold'>34.10% APR</span> on any ULTRA you mint by depositing into the Stability Pool.
</Typography>}

<div className='flex flex-col'>

<Button className='py-[6px] px-4 border border-white rounded text-white'>
  Take me there
</Button>

<Typography className='text-white border-b border-white text-sm font-normal'>More opportunities</Typography>

</div>


    </div>
  </div>
</div>

<div className="flex mt-20 justify-center flex-wrap gap-7">

{ saleType === 'prisma' &&
        
            <>
                {vaultsCardPrismaData.map(card => (
                    <VaultsCard address={card.address} cardType="prism" key={card.type} icon={card.icon} type={card.type} name={card.name} description={card.description} />
                ))}
            </>
}
   
{ saleType === 'prismaLRT' &&
        
        <>
            {vaultsCardPrismaLRTData.map(card => (
                <VaultsCard address={card.address}  prismLRTDesc={card.prismLRTDesc} cardType="prismLRT" icon={card.icon}  key={card.type} type={card.type} name={card.name} description={card.description} />
            ))}
        </>
}



{/* <VaultsCard /> */}
</div>



  </div>
  )
}

export default HomePageTemplate
