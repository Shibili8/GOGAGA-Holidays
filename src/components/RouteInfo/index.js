import { useState, useContext } from "react"
import { UIContext } from "../../context/UIContext";
import { CgArrowsExchangeAlt } from "react-icons/cg";

const indianAirports = [
    "DEL – Indira Gandhi International Airport, New Delhi",
    "BOM – Chhatrapati Shivaji Maharaj International Airport, Mumbai",
    "BLR – Kempegowda International Airport, Bengaluru",
    "MAA – Chennai International Airport, Chennai",
    "HYD – Rajiv Gandhi International Airport, Hyderabad",
    "CCU – Netaji Subhas Chandra Bose International Airport, Kolkata",
    "COK – Cochin International Airport, Kochi",
    "TRV – Trivandrum International Airport, Thiruvananthapuram",
    "IXM – Madurai Airport, Madurai",
    "CJB – Coimbatore International Airport, Coimbatore",
    "IXE – Mangalore International Airport, Mangalore",
    "GOI – Dabolim Airport, Goa",
    "GOX – Manohar International Airport, Goa",
    "PNQ – Pune Airport, Pune",
    "AMD – Sardar Vallabhbhai Patel International Airport, Ahmedabad",
    "JAI – Jaipur International Airport, Jaipur",
    "LKO – Chaudhary Charan Singh International Airport, Lucknow",
    "PAT – Jay Prakash Narayan International Airport, Patna",
    "ATQ – Sri Guru Ram Dass Jee International Airport, Amritsar",
    "VNS – Lal Bahadur Shastri International Airport, Varanasi"]

const internationalAirports = [
  "JFK – John F. Kennedy International Airport, New York, USA",
  "LAX – Los Angeles International Airport, Los Angeles, USA",
  "LHR – Heathrow Airport, London, UK",
  "DXB – Dubai International Airport, Dubai, UAE",
  "SIN – Changi Airport, Singapore",
  "CDG – Charles de Gaulle Airport, Paris, France",
  "FRA – Frankfurt Airport, Frankfurt, Germany",
  "AMS – Schiphol Airport, Amsterdam, Netherlands",
  "HND – Haneda Airport, Tokyo, Japan",
  "NRT – Narita International Airport, Tokyo, Japan",
  "ICN – Incheon International Airport, Seoul, South Korea",
  "HKG – Hong Kong International Airport, Hong Kong",
  "DOH – Hamad International Airport, Doha, Qatar",
  "AUH – Abu Dhabi International Airport, Abu Dhabi, UAE",
  "BKK – Suvarnabhumi Airport, Bangkok, Thailand",
  "SYD – Sydney Kingsford Smith Airport, Sydney, Australia",
  "YYZ – Toronto Pearson International Airport, Toronto, Canada",
  "SFO – San Francisco International Airport, San Francisco, USA",
  "ORD – O’Hare International Airport, Chicago, USA",
  "MUC – Munich International Airport, Munich, Germany"
];

const RouteInfo = () =>{
    const {activeHeader} = useContext(UIContext)
    const today = new Date().toISOString().split("T")[0]
    const [departureDate, setDepartureDate] = useState(today)
    const [arrivalDate, setArrivalDate] = useState(today)
    const [departure, setDeparture] = useState("")
    const [arrival, setArrival] = useState("")
    const airports = activeHeader==="Indian Holidays"? indianAirports : internationalAirports
    console.log(airports)
    
    const interChangeCity = ()=>{
        const changedDeparture =arrival
        const changedArrival = departure
        setDeparture(changedDeparture)
        setArrival(changedArrival) 
    }

    return (
        <div className="w-full flex items-center py-3">
            <div className="w-2/5 h-50 flex items-center gap-1 border border-gray-700 rounded-md px-2 py-2">
                <div>
                    <label id="from" className="text-gray-500 text-base">From</label>
                    <select id="from" className="w-full border border-gray-400 rounded-md px-2 py-1" onChange={(e)=>setDeparture(e.target.value)} value={departure}>
                        <option value="">Select Airport</option>
                        {airports.map((airport, index) => (
                            <option key={index} value={airport}>
                                {airport}
                            </option>
                        ))}
                    </select>
                </div>
                <div className="ml-2 h-12 w-px bg-gray-400"></div>
                <div className="w-36 h-50 flex flex-col gap-1 px-2 py-2">
                    <label id="date" className="text-gray-500 text-sm">Departure Date</label>
                    <input
                        type="date"
                        value={departureDate}
                        onChange={(e) => setDepartureDate(e.target.value)}
                        className="w-32 focus:highlight-none focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>
            </div>
            
            <button type="button" onClick={()=>interChangeCity()} className="w-12 h-12 ml-4 mr-4 flex items-center justify-center gap-1 border border-gray-400 rounded-md px-2 py-2">
                <CgArrowsExchangeAlt size={35}/>
            </button>

            <div className="w-2/5 h-50 flex items-center gap-1 border border-gray-700 rounded-md px-2 py-2">
                        <div>
                <label id="to" className="text-gray-500 text-base">To</label>
                <select id="to" className="w-full border border-gray-400 rounded-md px-2 py-1" onChange={(e)=>setArrival(e.target.value)} value={arrival}>
                    <option value="">Select Airport</option>
                    {airports.map((airport, index) => (
                        <option key={index} value={airport}>
                            {airport}
                        </option>
                    ))}
                </select>
                </div>
                <div className="ml-2 h-12 w-px bg-gray-400"></div>
                    
                <div className="w-36 h-50 flex flex-col gap-1 px-2 py-2">
                    <label id="date" className="text-gray-500 text-sm">Return Date</label>
                    <input
                        type="date"
                        value={arrivalDate}
                        onChange={(e) => setArrivalDate(e.target.value)}
                        className="w-32 focus:highlight-none  focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>
                
            </div>
        </div>
    )
}

export default RouteInfo