import Typography from "@/design-systems/Atoms/Typography";

const MigrateVaultTemplate: React.FC = () => {
  const headData = ["Collateral", "From tranche", "To tranche"];
  return (
    <div className="flex flex-col items-center">
      <Typography className="text-h3 text-lightBlack font-semibold">
        Vault Migration
      </Typography>
      <div className="shadow-md bg-white text-lightBlack rounded-sm w-full  max-w-[1200px] p-3">
        <table className="w-full ">
          <thead>
            <tr className="border-b-[1px] border-skyBlue">
              {headData.map((item, key) => (
                <th key={key} className="text-start text-sm">{item}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border-none text-body font-normal">No vaults to migrate.</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MigrateVaultTemplate;
