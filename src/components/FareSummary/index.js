import { useContext } from "react"
import { IoIosArrowRoundForward } from "react-icons/io";
import { UIContext } from "../../context/UIContext"
const FareSummary = () =>{
    const {departureFlight, returnFlight} = useContext(UIContext)

    return (
    <div className="w-full px-4 py-4 flex items-center rounded-md bg-gradient-to-r from-black via-blue-900 to-blue-600 text-white">
        <div className="w-2/5 flex-col items-center px-2">
            <h2 className="text-sm">Departure : {departureFlight.company===undefined? "Select Departure Flight": `${departureFlight.company}`}</h2>
            <div className="flex items-center justify-between pr-4 gap-2">
                <div className="flex items-center">
                    <h1 className="text-lg">{departureFlight.departureTime===undefined? "Departure Time": `${departureFlight.departureTime}`}</h1>
                    <IoIosArrowRoundForward size={23}/>
                    <h1 className="text-lg">{departureFlight.arrivalTime===undefined? "Arrival TIme": `${departureFlight.arrivalTime}`}</h1>
                </div>
                <h1 className="text-lg">{departureFlight.selectedPrice===undefined? "Selected Price": `₹ ${departureFlight.selectedPrice}`}</h1>
            </div>
        </div>
        <div className="h-10 w-px bg-gray-400 mr-3"></div>
        <div className="w-2/5 flex-col items-center px-2">
            <h2 className="text-sm">Return : {returnFlight.company===undefined? "Select Return Flight": `${returnFlight.company}`}</h2>
            <div className="flex items-center justify-between pr-4 gap-2">
                <div className="flex items-center">
                    <h1 className="text-lg">{returnFlight.departureTime===undefined? "Departure Time": `${returnFlight.departureTime}`}</h1>
                    <IoIosArrowRoundForward size={23}/>
                    <h1 className="text-lg">{returnFlight.arrivalTime===undefined? "Arrival TIme": `${returnFlight.arrivalTime}`}</h1>
                </div>
                <h1 className="text-lg">{returnFlight.selectedPrice===undefined? "Selected Price": `₹ ${returnFlight.selectedPrice}`}</h1>
            </div>
        </div>
        <div className="h-10 w-px bg-gray-400"></div>
        <div className="w-2/5 flex-col text-right px-2">
            <h2 className="text-sm">For 2 adults and 2 Children </h2>
            <div className="flex w-full items-center justify-end">
                <h3 className="text-lg mr-2">Total Round Fare: </h3>    
                <h1 className="text-lg text-right">{departureFlight.selectedPrice===undefined || returnFlight.selectedPrice===undefined?"Select the Round Trip":`₹ ${departureFlight.selectedPrice + returnFlight.selectedPrice}`}</h1>
            </div>
                
        </div>
        
    </div>)
}

export default FareSummary