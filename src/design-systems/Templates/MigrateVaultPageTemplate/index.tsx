"use client";

import Typography from "@/design-systems/Atoms/Typography";
import MigrationTable from "@/design-systems/Molecules/MigrationTable";
import { MigrationTableData, MigrationcolumnData } from "./utils";

const MigrateVaultPageTemplate: React.FC = () => {
  return (
    <div className="container">
      <div className="flex flex-col gap-8 justify-center items-center">
        <Typography className="text-[36px] font-semibold text-darkBlue">
          Vault Migration
        </Typography>

        <div className="w-full bg-white shadow-lg rounded-[12px] max-w-[1152px]">
          <MigrationTable
            data={[]}
            columns={MigrationcolumnData}
          />
          {" "}
        </div>
      </div>
    </div>
  );
};

export default MigrateVaultPageTemplate;
