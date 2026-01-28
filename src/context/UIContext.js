import { createContext, useState } from "react";

export const UIContext = createContext();

export const UIProvider = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [activePackageTab, setActivePackageTab] = useState("Package with Flights");
  const [activeHeader, setActiveHeader] = useState("Indian Holidays")
  const [departureFlight, setDepartureFlight] = useState("")
  const [returnFlight, setReturnFlight] = useState("")
  return (
    <UIContext.Provider
      value={{
        isSidebarOpen,
        setIsSidebarOpen,
        activePackageTab,
        setActivePackageTab,
        activeHeader, 
        setActiveHeader,
        departureFlight, 
        setDepartureFlight,
        returnFlight, 
        setReturnFlight
      }}
    >
      {children}
    </UIContext.Provider>
  );
};
