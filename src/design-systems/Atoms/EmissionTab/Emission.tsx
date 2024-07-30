import { ChevronUpDownIcon, ArrowRightIcon, ChevronDownIcon } from "@heroicons/react/16/solid";
import Button from "../Button";
import Typography from "../Typography";
import { DAOdata, DaoDataInterface } from "./utils";
import { InfoOutlineIcon } from "@/design-systems/Atoms/Icons";

export const Emission: React.FC = () => {
  const EmissionTab = [
    { label: "All" },
    { label: "STABILITY POOL" },
    { label: "LSTs" },
    { label: "LRTs" },
    { label: "CONVEX POOLS" },
    { label: "CURVE POOLS" },
  ];

  const headData = ["", "My Votes", "Votes", "Estimated PRISMA Emissions"];
  return (
    <div>
  
      <div className="flex justify-between px-6">
        <div className="flex">
          {EmissionTab.map((item, key) => (
            <button className={`p-[11px] hover:bg-gray04 rounded text-sm text-black54`} key={key}>{item.label}</button>
          ))}
        </div>
        <input className="p-2 border-[1px] border-primary rounded-xs bg-blue245" placeholder="Search..."/>
      </div>
      <div className="flex justify-between px-6 mt-3">
        <div className="flex gap-5">
          <Typography>Allocated: 0.0% </Typography>
          <Typography>Remaining: 100.0%</Typography>
        </div>
        <div className="flex gap-3">
          <div className="h-5 w-5">
            <InfoOutlineIcon />
          </div>
          <Typography>Clear Previous Votes</Typography>
          <input type="checkbox" />
        </div>
      </div>
      <div className="shadow-border-shadow my-3 h-1" />
      <div>
      <div className="w-full">
        <table className="w-full">
          <thead>
            <tr>
              {headData.map((item, key) => (
                <>
                  <th key={key}>
                    <td>{item}</td>
                  </th>
                </>
              ))}
              <th>
                <td className="h-5 w-5">
                  <ChevronUpDownIcon />
                </td>
              </th>
            </tr>
          </thead>
          <tbody>
            {DAOdata?.map((item: DaoDataInterface, key: number) => (
              <tr key={key} className="text-body">
                <td className="flex gap-2 items-center">
                  <img src={item.img} />
                  {item?.label}
                </td>
                <td>0.0%</td>
                <td>
                  <div className="flex gap-1 items-center">
                    <span>{item.voteFrom}</span>
                    <span>
                      <ArrowRightIcon className="h-4 w-4" />
                    </span>
                    <span className="text-primary">{item.voteTo}</span>
                  </div>
                </td>
                <td>
                  <div className="flex gap-1 items-center">
                    <span>{item.emissionfrom}</span>
                    <span>
                      <ArrowRightIcon className="h-4 w-4" />
                    </span>
                    <span className="text-primary">{item.emissionTop}</span>
                  </div>
                </td>
                <td className="flex items-center justify-start">
                  <div className="p-1 rounded bg-skyBlue cursor-pointer">
                    <ChevronDownIcon className="h-5 w-5 text-primary" />
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="flex flex-col items-center w-full mt-8 mb-3">
        <Typography className="text-[18px] text-lightBlack">Lock some PRISMA to start voting</Typography>
        <div className="flex gap-4 mt-3">
          <Button className="bg-primary py-[6px] px-[16px] text-white font-semibold rounded">Cast Votes</Button>
          <Button className="bg-primary py-[6px] px-[16px] text-white font-semibold rounded">Register Vote Weight</Button>
        </div>
      </div>
      </div>
    </div>
  );
};
