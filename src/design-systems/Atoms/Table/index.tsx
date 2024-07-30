import React, { useState, useEffect } from "react";
import Button from "@/design-systems/Atoms/Button";
import Image from "next/image";
import EarnIcon from "@/assets/image/Icons/earnedIcon.svg";
import { PoolData, TableProps } from "./interface";
import { useRouter } from "next/navigation";
import Link from "next/link";

const Table: React.FC<TableProps> = ({
  columns,
  data,
  isPagination = false,
}) => {

  const [currentPage, setCurrentPage] = useState<number>(1);
  const itemsPerPage = 4;

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
              <th className="p-4" key={index}>
                {column?.title}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {displayedItems.map((pool:PoolData) => (
            <tr
              key={pool.name}
              className="border-b text-lightBlack !text-body font-normal"
            >
              <td className="p-4 flex gap-2">
                <Image src={pool.icon} alt={pool.name} className="w-6 h-6" />
                {pool.name}
              </td>
              <td className="p-4">{pool.tvl}</td>
              <td className="p-4">{pool.unboostedApr}</td>
              <td className="p-4">{pool.boostedApr}</td>
              <td className="p-4">{pool.deposits}</td>
              <td className="p-4 flex">
                <Image src={EarnIcon} alt={pool.name} className="w-6 h-6" />
                {pool.earned}
              </td>
              <td className="p-4">
                <Link href={{pathname:"/earn-manage",query:{address:pool.poolAddress}}} className="bg-lightBlue text-body text-white py-2 px-4 rounded cursor-pointer">
                  Manage
                </Link>
              </td>
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

export default Table;
