import Typography from "../Typography";

export const Emission = () => {
  const EmissionTab = [
    { label: "All" },
    { label: "STABILITY POOL" },
    { label: "LSTs" },
    { label: "LRTs" },
    { label: "CONVEX POOLS" },
    { label: "CURVE POOLS" },
  ];
  return (
    <div>
      <div className="flex justify-between">
        <div className="flex">
          {EmissionTab.map((item, key) => (
            <button className={`p-[11px] hover:bg-gray04 rounded text-sm text-black54`} key={key}>{item.label}</button>
          ))}
        </div>
        <input className="p-2 border-[1px] border-primary rounded-xs bg-blue245" placeholder="Search..."/>
      </div>
      <div>
        
      </div>
    </div>
  );
};
