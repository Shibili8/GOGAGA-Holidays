import { useContext, useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdKeyboardArrowDown } from "react-icons/md";
import { UIContext } from "../../context/UIContext";

const sidebarConstants = [
  {
    id: 1,
    barName: "MAIN",
    subAllowed: true,
    subBars: [
      { sub: "Dashboard", isSub: false },
      { sub: "Leads", isSub: true, subList: ["Leads"] },
      { sub: "Itineries", isSub: true, subList: ["Itineries"] },
      { sub: "Google Reviews", isSub: false },
      { sub: "Vouchers", isSub: true, subList: ["Vouchers"] },
      { sub: "Accounts", isSub: true, subList: ["Accounts"] },
      { sub: "Reports", isSub: true, subList: ["Reports"] },
      { sub: "Customer Support", isSub: false }
    ]
  },
  {
    id: 2,
    barName: "USER CONTROL",
    subAllowed: true,
    subBars: [
      { sub: "User Settings", isSub: true, subList: ["User Settings"] },
      { sub: "Masters Settings", isSub: true, subList: ["Masters Settings"] },
      { sub: "HRM", isSub: true, subList: ["HRM"] },
      { sub: "Asset Management", isSub: true, subList: ["Accounts"] }
    ]
  },
  {
    id: 3,
    barName: "PARTICIPANTS",
    subAllowed: true,
    subBars: [
      { sub: "Itenerary Customer", isSub: false },
      { sub: "Partners", isSub: false },
      { sub: "Suppliers", isSub: true, subList: ["Suppliers"] }
    ]
  },
  {
    id: 4,
    barName: "MISCELLANEOUS",
    subAllowed: false
  }
];

const Sidebar = () => {
  const { isSidebarOpen, setIsSidebarOpen } = useContext(UIContext);
  const [openSub, setOpenSub] = useState({});

  const toggleSub = (name) => {
    setOpenSub((prev) => ({
      ...prev,
      [name]: !prev[name],
    }));
  };

  return (
    <div className="w-full h-full flex flex-col px-2 text-white">
      
      <div className="w-full flex items-center justify-between mb-4">
        <img
          className="w-24 h-12 object-contain"
          src="https://res.cloudinary.com/da4a06plx/image/upload/v1769564763/GOGAGA_NEW_LOGO_FINAL-JPEG_bu3jpm.avif"
          alt="gogaga holidays logo"
        />
        <button
          type="button"
          onClick={() => setIsSidebarOpen(!isSidebarOpen)}
        >
          <GiHamburgerMenu color="#000" size={20} />
        </button>
      </div>

      {isSidebarOpen && (
        <div className="w-full overflow-y-auto">
          <ul className="flex flex-col gap-4">

            {sidebarConstants.map((eachBar) => (
              <li key={eachBar.id}>
                
                <h3 className="text-xs font-semibold text-gray-400 mb-2">
                  {eachBar.barName}
                </h3>

                {eachBar.subAllowed && (
                  <ul className="flex flex-col gap-1">

                    {eachBar.subBars.map((subBar, index) => (
                      <li key={index}>

                        <div className="flex items-center text-black justify-between px-2 py-1 rounded-md hover:bg-slate-800 hover:text-white cursor-pointer">
                          <p className="text-sm">{subBar.sub}</p>

                          {subBar.isSub && (
                            <button
                              type="button"
                              onClick={() => toggleSub(subBar.sub)}
                              className={`transition-transform duration-300 ${
                                openSub[subBar.sub] ? "rotate-180" : ""
                              }`}
                            >
                              <MdKeyboardArrowDown />
                            </button>
                          )}
                        </div>

                        {subBar.isSub && openSub[subBar.sub] && (
                          <ul className="ml-4 mt-1 flex flex-col gap-1 transition-all duration-300">
                            {subBar.subList.map((item, i) => (
                              <li
                                key={i}
                                className="text-xs px-2 py-1 rounded-md bg-slate-800 hover:bg-slate-700 cursor-pointer"
                              >
                                {item}
                              </li>
                            ))}
                          </ul>
                        )}

                      </li>
                    ))}

                  </ul>
                )}
              </li>
            ))}

          </ul>
        </div>
      )}
    </div>
  );
};

export default Sidebar;
