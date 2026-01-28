import { useState, useContext } from "react";
import { IoBagOutline } from "react-icons/io5";
import { LuBaggageClaim } from "react-icons/lu";
import { FaIndianRupeeSign } from "react-icons/fa6";
import { MdOutlineCalculate } from "react-icons/md";
import { UIContext } from "../../../context/UIContext";
const typeColors = {
  Publish: "bg-blue-100 text-blue-700",
  Flexi: "bg-green-100 text-green-700",
  XpressBiz: "bg-purple-100 text-purple-700",
  SME: "bg-yellow-100 text-black"
};



const FlightCard = ({ flightDetails, click }) =>{
    const {departureFlight, setDepartureFlight, returnFlight, setReturnFlight} = useContext(UIContext)
    const [selectedPrice, setSelectedPrice] = useState(null);
    const selectedFlight = departureFlight.id===flightDetails.id || returnFlight===flightDetails? "bg-blue-200": "bg-white"
    const clickon = () =>{
        if (click==="departure"){
            setDepartureFlight({...flightDetails,selectedPrice})
        }else{
            setReturnFlight({...flightDetails, selectedPrice})
        }
    }
    
    return (

    
        <button onClick={()=>clickon()} className={`${selectedFlight} w-full mt-3 flex flex-col text-black justify-between border border-gray-400 py-2 px-2 rounded-md`}>
            
            <div className="flex w-full items-center justify-between">
                <div className=" flex w-1/3">
                    <img className="w-10 h-10 rounded-sm mr-3" alt={flightDetails.company} src={flightDetails.logo}/>
                    <div className="flex flex-col ">
                        <h2 className="text-md text-extrabold">{flightDetails.company}</h2>
                        <p className="text-sm">{flightDetails.no}</p>
                    </div>
                </div>
                <div className="w-3/5 flex justify-around items-center">
                    <div className="flex flex-col">
                    <p className="text-sm">{flightDetails.departureTime}</p>
                    <p className="text-sm">{flightDetails.departureAirport}</p>
                    </div>
                    <div className=" flex flex-col items-center">
                        <p className="text-sm">{flightDetails.traveltime}</p>
                        <hr className="w-full border-black mt-1"/>
                        <div className="flex items-center">
                            {flightDetails.stops>0? (<p className="text-sm mr-1">{flightDetails.stops} Stop (s) via {flightDetails.via} - </p>): ""}
                            {flightDetails.seatLeft>0? (<p className="text-sm">{flightDetails.seatLeft} seat(s) left</p>): ""}
                        </div>
                        {flightDetails.NearbyAirport? (<p className="text-blue-700 text-sm">Nearby Airport</p>):""}
                    </div>
                    <div className="flex flex-col">
                    <p className="text-sm">{flightDetails.arrivalTime}</p>
                    <p className="text-sm">{flightDetails.arrivalAirport}</p>
                    </div>
                </div>
            </div>
            <hr className="border w-full border-gray-400 "/>
            <div className="flex w-full items-center">
                <ul className="space-y-2 list-none flex items-center">
                {flightDetails.priceList.map((item, index) => (
                    <li
                    key={index}
                    className="flex items-center justify-between px-2 py-2 rounded-md hover:bg-gray-100"
                    >
                    <label className="flex items-center gap-3 cursor-pointer w-full">
                        <input
                        type="radio"
                        name="fare"
                        value={selectedPrice}
                        onChange={() => setSelectedPrice(item.price)}
                        className="accent-blue-600"
                        />

                        <div className="flex items-center justify-between w-full">
                        
                        <span className="text-sm font-medium">
                            ₹ {item.price}
                        </span>

                        <span
                            className={` ml-2 px-2 py-1 text-xs font-semibold rounded-md ${
                            typeColors[item.type]
                            }`}
                        >
                            {item.type}
                        </span>
                        </div>
                    </label>
                    </li>
                ))}
                </ul>
                
            </div>
            <hr className="border w-full border-gray-400 "/>
            <div className="w-full py-3 flex items-center gap-3">
                <div className="flex items-center gap-1">
                    <IoBagOutline size={20}/>
                    <p className="text-sm">Hand Baggage - {flightDetails.handBag}</p>
                </div>
                <div className="h-6 w-px bg-gray-400"></div>
                <div className="flex items-center gap-1">
                    <LuBaggageClaim size={20}/>
                    <p className="text-sm">Check-In Baggage</p>
                </div>
                <div className="h-6 w-px bg-gray-400"></div>
                <div className="flex items-center gap-1">
                    <FaIndianRupeeSign size={16}/>
                    <p className="text-sm">Refundable</p>
                </div>
                <div className="h-6 w-px bg-gray-400"></div>
                <div className="flex items-center gap-1">
                    <MdOutlineCalculate size={16}/>
                    <p className="text-sm">Rules</p>
                </div>
            </div> 
            {console.log(departureFlight, returnFlight)}
        </button>
    )
}


export default FlightCard