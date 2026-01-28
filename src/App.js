import { useContext } from "react";
import { UIContext } from "./context/UIContext";

import FareSummary from "./components/FareSummary";
import FlightList from "./components/FlightList";
import HeaderTabs from "./components/HeaderTabs";
import PackageTabs from "./components/PackageTabs";
import RouteInfo from "./components/RouteInfo";
import SearchFilters from "./components/SearchFilters";
import Sidebar from "./components/Sidebar";

import { BiCategory } from "react-icons/bi";
import { FaFilter, FaBell } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { MdKeyboardArrowDown } from "react-icons/md";

import "./App.css";

const App = () => {
  const { activePackageTab } = useContext(UIContext);

  return (
    <div className="h-screen flex flex-row">
      <div
        className={`h-screen px-3 py-4 transition-all duration-300 ${
          isSidebarOpen ? "w-64" : "w-16"
        }`}
      >
        <Sidebar />
      </div>

      <div className="w-full items-center px-3 py-4 ">
        <div className="w-full flex justify-end items-center gap-2 text-black">
          
          <BiCategory size={25} />

          <div className="w-8 h-8 flex items-center justify-center border border-green-500 rounded-md">
            <FaFilter size={16} className="text-green-500" />
          </div>

          <div className="w-8 h-8 flex items-center justify-center border border-blue-500 rounded-md">
            <FaLocationDot size={16} className="text-blue-500" />
          </div>

          <div className="w-8 h-8 flex items-center justify-center border border-red-500 rounded-md">
            <FaBell size={16} className="text-red-500" />
          </div>

          <div className="h-8 w-px bg-gray-400"></div>

          <img
            src="https://res.cloudinary.com/da4a06plx/image/upload/v1725687630/samples/landscapes/beach-boat.jpg"
            alt="profile-pic"
            className="w-10 h-10 rounded-full object-cover border-4 border-green-500"
          />

          <h4 className="text-md">Gireesh Kumar</h4>

          <button type="button">
            <MdKeyboardArrowDown />
          </button>
        </div>

        <HeaderTabs />
        <PackageTabs />
        <SearchFilters />
        {activePackageTab==="Package with Flights"?(
          <>
            <RouteInfo />
            <FareSummary />
            <FlightList />
          </>
        ): (
          <div className="text-center mt-4 ">
            <h3 className="text-blue-600">To know the flight availability, Select Packege with Flights Option</h3>
          </div>
        )}
        
      </div>
    </div>
  );
};

export default App;
