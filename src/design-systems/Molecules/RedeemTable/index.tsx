import React, { useState } from "react";
import Image from "next/image";
import { RedeemData, RedeemTableProps } from "./interface";
import { useRouter } from "next/navigation";
import { CopyIcon, RedirectIcon } from "@/design-systems/Atoms/Icons";

const RedeemTable: React.FC<RedeemTableProps> = ({
  columns,
  data,
  isPagination = false,
}) => {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const itemsPerPage = 10;

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
          <tr className="border-b text-body font-bold text-lightBlack">
            {columns.map((column, index) => (
              <th className="p-4" key={index}>
                {column?.title}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {displayedItems.map((pool: RedeemData) => (
            <tr key={pool.id} className="border-b !text-md font-medium">
              <td className="p-4 flex !text-blue225 items-center gap-1">
                {`${pool.owner.slice(0, 5)}...${pool.owner.slice(-4)}`}
                <RedirectIcon className="w-3 h-3" />
                <CopyIcon className="w-3 h-3" />
              </td>
              <td className="p-4 !text-[#18E180]">{pool.cr}</td>
              <td className="p-4">{pool.dept}</td>
              <td className="p-4">{pool.newDept}</td>
            </tr>
          ))}
        </tbody>
      </table>
      {isPagination && (
        <div className="flex justify-between items-center py-4">
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

export default RedeemTable;
