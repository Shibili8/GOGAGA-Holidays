import { useContext } from "react";
import { UIContext } from "../../context/UIContext";

const headerTabs = ["Indian Holidays", "International Holidays"];

const HeaderTabs = () =>{
    const {activeHeader, setActiveHeader} = useContext(UIContext)
    return (
    <div className="flex gap-4 mt-4">
      {headerTabs.map((tab) => (
        <button
          key={tab}
          onClick={() => setActiveHeader(tab)}
          className={`px-4 py-2 rounded-md ${
            activeHeader === tab
              ? "bg-black text-white"
              : "bg-grey-200 text-black"
          }`}
        >
          {tab}
        </button>
      ))}
    </div>
  );
}

export default HeaderTabs