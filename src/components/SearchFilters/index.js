import { useState } from "react"
import { MdKeyboardArrowDown } from "react-icons/md";
import { FaSearch } from "react-icons/fa";
import { FaStar } from "react-icons/fa6";

const hotelRatingConstants = ["3", "4", "5"]


const SearchFilters= () => {
    const today = new Date().toISOString().split("T")[0]
    const [startdate, setDate] = useState(today)
    const [searchInput, setInput] = useState("")
    const [passengers, setPassengers] = useState({
        adults:2,
        children: 2
    })
    const [openPassengers, setOpenPassengers]= useState(false)
    const [hotelRating, setHotelRating] = useState("5")
    const [lunch, setLunch] = useState(false)
    const [dinner, setDinner] = useState(false)

    const increasePassenger = (type) => {
    setPassengers((prev) => ({
        ...prev,
        [type]: prev[type] + 1,
    }));
    };

    const decreasePassenger = (type) => {
    setPassengers((prev) => ({
        ...prev,
        [type]: Math.max(0, prev[type] - 1),
    }));
    };

    return (
    <div className="py-3 w-full flex flex-col">
        <div className="w-full flex items-center justify-between flex-row gap-3">
            <div className="w-2/4 h-50 flex flex-col gap-1 border border-gray-700 rounded-md px-2 py-2">
                <label id="input" className="text-gray-500 text-base">Destination</label>
                <input type="text" id="input" placeholder="City" className="text-lg " onChange={(e)=>setInput(e.target.value)} value={searchInput}></input>
            </div>
            <div className="w-54 h-50 flex flex-col gap-1 border border-gray-700 rounded-md px-2 py-2">
                <label id="date" className="text-gray-500 text-sm">Trip start date</label>
                <input
                    type="date"
                    value={startdate}
                    onChange={(e) => setDate(e.target.value)}
                    className="focus:highlight-none w-48 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
            </div>
            <div  className="relative w-1/4 h-50 flex flex-row justify-between gap-1 border border-gray-700 rounded-md px-2 py-2">
                <div className="flex flex-col">
                    <label className="text-gray-500 text-base">No.of Passengers</label>
                    <p className="text-lg">
                    {passengers.adults === 0 && passengers.children === 0
                        ? "Not Selected"
                        : `Adults: ${passengers.adults}, Children: ${passengers.children}`}
                    </p>
                </div>

                <button type="button" onClick={() => setOpenPassengers((prev) => !prev)}>
                    <MdKeyboardArrowDown />
                </button>

                {openPassengers && (
                    <div className="absolute top-16 right-0 w-64 bg-white border shadow-lg rounded-md p-4 z-50">
                    <div className="flex justify-between items-center mb-4">
                        <span>Adults</span>
                        <div className="flex items-center gap-3">
                        <button
                            onClick={() => decreasePassenger("adults")}
                            disabled={passengers.adults === 0}
                            className={`w-8 h-8 flex items-center justify-center border rounded-md ${
                            passengers.adults === 0
                                ? "opacity-50 cursor-not-allowed"
                                : "hover:bg-gray-200"
                            }`}
                        >
                            −
                        </button>

                        <span>{passengers.adults}</span>

                        <button
                            onClick={() => increasePassenger("adults")}
                            className="w-8 h-8 flex items-center justify-center border rounded-md hover:bg-gray-200"
                        >
                            +
                        </button>
                        </div>
                    </div>
                    <div className="flex justify-between items-center">
                        <span>Children</span>
                        <div className="flex items-center gap-3">
                        <button
                            onClick={() => decreasePassenger("children")}
                            disabled={passengers.children === 0}
                            className={`w-8 h-8 flex items-center justify-center border rounded-md ${
                            passengers.children === 0
                                ? "opacity-50 cursor-not-allowed"
                                : "hover:bg-gray-200"
                            }`}
                        >
                            −
                        </button>

                        <span>{passengers.children}</span>

                        <button
                            onClick={() => increasePassenger("children")}
                            className="w-8 h-8 flex items-center justify-center border rounded-md hover:bg-gray-200"
                        >
                            +
                        </button>
                        </div>
                    </div>
                    </div>
                )}
            </div>
            <button type="button" className="w-100 h-full flex items-center justify-center gap-1 border bg-black text-white rounded-md px-2 py-2">
                <FaSearch size={35}/>
            </button>
        </div>
        <div className="w-full flex items-center flex-row gap-3 py-3">
            <div className="flex items-center justify-center mt-3">
                <h4 className="text-base text-bold">Hotel Standard</h4>
                <div className="flex gap-4">
                {hotelRatingConstants.map((tab) => (
                    <button
                    key={tab}
                    onClick={() => setHotelRating(tab)}
                    className={`w-12 h-8 rounded-md flex items-center justify-center ml-2 p-1 ${
                        hotelRating === tab
                        ? "bg-black text-white"
                        : "border-2 text-black"
                    }`}
                    >
                    {tab} <FaStar/>
                    </button>
                ))}
                </div>
            </div>
            <div className="ml-5 flex items-center justify-center mt-3">
                <h4 className={`text-base ${lunch===true ? "text-extrabold": "text-thin"}`}>Add Lunch</h4>
                <input className="ml-3 w-4 h-4" value={lunch} type="checkbox" onChange={()=>setLunch(prev=>!prev)}/>
                {console.log(lunch)}
            </div>
            <div className="ml-5 flex items-center justify-center mt-3">
                <h4 className={`text-base ${dinner===true ? "text-extrabold": "text-thin"}`}>Add Dinner</h4>
                <input className="ml-3 w-4 h-4" value={dinner} type="checkbox" onChange={()=>setDinner(prev=>!prev)}/>
                {console.log(lunch)}
            </div>
        </div>
        
    </div>
  );
};

export default SearchFilters;
