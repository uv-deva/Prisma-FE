import React from "react";
import { MigrationData, MigrationTableProps } from "./interface";
import { useRouter } from "next/navigation";

const MigrationTable: React.FC<MigrationTableProps> = ({
  columns,
  data,
}) => {
  

  const router = useRouter();


  return (
    <>
      <table className="w-full text-left text-black">
        <thead>
          <tr className="border-b text-body font-bold text-lightBlack">
            {columns.map((column, index) => (
              <th className="p-4" key={index}>
                {column?.title}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          { data && data.length > 0 ? (
          
          data.map((pool: MigrationData,index: number) => (
            <tr key={index} className="border-b !text-md font-medium">
              <td className="p-4 flex !text-blue225 items-center gap-1">
                {pool.Collateral}
          
              </td>
              <td className="p-4 !text-[#18E180]">{pool.From_tranche}</td>
              <td className="p-4">{pool.From_tranche}</td>
            </tr>
          ))

        )

        :

                    (  <td className="p-4">No vaults to migrate.</td>)

        
        
        }
        </tbody>
      </table>
   
    </>
  );
};

export default MigrationTable;
