import { useState } from "react";
import Button from "@/design-systems/Atoms/Button";
import { PoolTableProps } from "./interface";
import Table from "@/design-systems/Atoms/Table";
import { columnData } from "@/design-systems/Templates/EarnPageTemplate/utils";

const PoolTable: React.FC<PoolTableProps> = ({
  data,
  searchTerm,
  hideSmallPools,
  activeTab,
}) => {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const rowsPerPage = 5;

  const filteredData = data
    .filter((pool) =>
      hideSmallPools
        ? parseFloat(pool.tvl.replace(/[^0-9.-]+/g, "")) > 1000
        : true
    )
    .filter((pool) =>
      pool.name.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .filter(
      (pool) => activeTab === "all" || pool.type.toLowerCase() === activeTab
    );

  const indexOfLastRow = currentPage * rowsPerPage;
  const indexOfFirstRow = indexOfLastRow - rowsPerPage;
  const currentRows = filteredData.slice(indexOfFirstRow, indexOfLastRow);

  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  return (
    <div className="w-full max-w-4xl rounded-[12px] max-w-[1200px]">
      <Table data={data} columns={columnData} isPagination={true} />
    </div>
  );
};

export default PoolTable;
