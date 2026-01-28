import { useContext } from "react";
import { UIContext } from "../../context/UIContext";

const tabs = ["Package with Flights", "Package without Flights"];

const PackageTabs = () => {
  const { activePackageTab, setActivePackageTab } = useContext(UIContext);

  return (
    <div className="flex gap-6 border-b border-gray-300 mt-4">
      {tabs.map((tab) => (
        <button
          key={tab}
          onClick={() => setActivePackageTab(tab)}
          className={`pb-2 text-sm font-medium transition-all duration-200 ${
            activePackageTab === tab
              ? "border-b-2 border-black text-black text-bold"
              : "border-b-2 border-transparent text-gray-500 hover:text-blue-500"
          }`}
        >
          {tab}
        </button>
      ))}
    </div>
  );
};

export default PackageTabs;
