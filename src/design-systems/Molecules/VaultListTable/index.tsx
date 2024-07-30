import React, { useState, useEffect } from "react";
import { VaultListDataProps, VaultListTableProps } from "./interface";
import { useRouter } from "next/navigation";
import { CopyIcon, RedirectIcon } from "@/design-systems/Atoms/Icons";

const VaultListTable: React.FC<VaultListTableProps> = ({
  columns,
  data,
  isPagination = false,
}) => {

  const [currentPage, setCurrentPage] = useState<number>(1);
  const itemsPerPage = 12;

  const router = useRouter();
  // Calculate total pages
  const totalPages = Math.ceil(data.length / itemsPerPage);

  // Calculate displayed items
  const displayedItems = data.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  // Handle pagination click
  const handlePageChange = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  return (
    <>
      <table className="w-full text-left text-black">
        <thead>
          <tr className="border-b text-sm font-normal text-lightBlack">
            {columns.map((column, index) => (
              <th className="px-4 py-2 text-blue225" key={index}>
                {column?.title}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {displayedItems.map((pool:VaultListDataProps) => (
            <tr
              key={pool.position}
              className="border-b text-lightBlack !text-body font-normal"
            >
              <td className="p-4 flex gap-2 text-blue225">
            {`${pool.owner.slice(0,5)}...${pool.owner.slice(-4)}`}
            <RedirectIcon className="w-3 h-3" />
            <CopyIcon className="w-3 h-3" />
              </td>
              <td className="p-4 text-[#00E180]">{pool.position}</td>
              <td className="p-4">{pool.CollateralValue}</td>
              <td className="p-4">{pool.debt}</td>
              <td className="p-4 text-[#00E180]">{pool.collateralRatio}</td>
              <td className="p-4 flex text-[#00E180]">
                {/* <Image src={EarnIcon} alt={pool.name} className="w-6 h-6" /> */}
                {pool.liqPrice}
              </td>
             
            </tr>
          ))}
        </tbody>
      </table>
      {isPagination && (
        <div className="flex justify-between items-center py-4 px-8">
          <button
            className={`bg-lightBlue text-body text-white py-2 px-4 rounded cursor-pointer ${
              currentPage === 1 ? "opacity-50 cursor-not-allowed" : ""
            }`}
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
          >
            Previous
          </button>

          <span>
            Page {currentPage} of {totalPages}
          </span>

          <button
            className={`bg-lightBlue text-body text-white py-2 px-4 rounded cursor-pointer ${
              currentPage === totalPages ? "opacity-50 cursor-not-allowed" : ""
            }`}
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
          >
            Next
          </button>
        </div>
      )}
    </>
  );
};

export default VaultListTable;
