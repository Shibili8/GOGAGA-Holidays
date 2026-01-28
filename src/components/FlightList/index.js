
import FlightCard from "./FlightCard"


const flightListConstants=[
    {
        id:1,
        company: "Air India Express",
        logo: "https://res.cloudinary.com/da4a06plx/image/upload/v1769533421/air_india_express_rh6yqu.png",
        no: "IX 2879 TC",
        departureTime: "12:05",
        departureAirport: "HYD",
        arrivalTime: "13:30",
        arrivalAirport: "GOI",
        traveltime: "01h 25m",
        additionalDay: 0,
        stops: 0,
        via: null,
        NearbyAirport: true,
        seatLeft: 9,
        priceList:[
            {type: "Publish",price: 13300.00},
            {type: "Flexi", price: 13300.00},
            {type: "XpressBiz", price: 29144.00}
        ],
        handBag: "7 Kg",
        refundable: true
    },
    {
        id:2,
        company: "Air India",
        logo: "https://res.cloudinary.com/da4a06plx/image/upload/v1769533424/Air_india_yl1bxv.png",
        no: "IX 2879 TC",
        departureTime: "11:30",
        departureAirport: "HYD",
        arrivalTime: "18:55",
        arrivalAirport: "GOX",
        traveltime: "04h 30m",
        additionalDay: 0,
        stops: 1,
        via: "BOM",
        NearbyAirport: true,
        seatLeft: 4,
        priceList:[
            {type: "SME",price: 13300.00},
            {type: "Publish", price: 105300.00}
        ],
        handBag: "7 Kg",
        refundable: true
    },
    {
        id:3,
        company: "Indigo",
        logo: "https://res.cloudinary.com/da4a06plx/image/upload/v1769533421/indigo_n8kjgx.png",
        no: "6E 426 SM | 6E 6944 SM",
        departureTime: "20:50",
        departureAirport: "HYD",
        arrivalTime: "06:20",
        arrivalAirport: "GOI",
        traveltime: "09h 30m",
        additionalDay: 1,
        stops: 1,
        via: "PNQ",
        NearbyAirport: false,
        seatLeft: 9,
        priceList:[
            {type: "SME", price: 13300.00},
            {type: "Publish",price: 13300.00}
        ],
        handBag: "7 Kg",
        refundable: true
    },
    {
        id:4,
        company: "Star Air",
        logo: "https://res.cloudinary.com/da4a06plx/image/upload/v1769533421/star_air_poqadl.png",
        no: "S5 212 TQ2 | S5 210 TQ2",
        departureTime: "09:50",
        departureAirport: "HYD",
        arrivalTime: "17:55",
        arrivalAirport: "GOX",
        traveltime: "08h 25m",
        additionalDay: 0,
        stops: 1,
        via: "RQY",
        NearbyAirport: false,
        seatLeft: 5,
        priceList:[
            {type: "Regular",price: 13300.00},
            {type: "Flexi", price: 13300.00},
            {type: "Comfort",price: 13300.00}
        ],
        handBag: "7 Kg",
        refundable: true
    },
]


const FlightList = () =>{
    return (
    <div className="w-full flex items-center py-3 px-3">
        <div className="w-2/4 px-2 py-3 flex flex-col items-center">
            <div className="w-full flex items-center justify-between shadow-md px-2 py-2 rounded-md">
                <p className="text-sm w-1/3">Outbound: Hyderabad(HYD)</p>
                <div className="w-3/5 flex justify-around items-center ">
                    <p className="text-sm">Departure</p>
                    <div className="h-6 w-px bg-gray-400"></div>
                    <p className="text-sm">Duration</p>
                    <div className="h-6 w-px bg-gray-400"></div>
                    <p className="text-sm">Arrival</p>
                </div>
            </div>
            <ul className="left-0 list-none w-full">
                {flightListConstants.map((data, index)=>(
                    <FlightCard flightDetails= {data} key={index} click="departure"/>
                ))}
            </ul>
        </div>
        <div className="w-2/4 py-3 flex flex-col items-center px-3">
            <div className="w-full flex items-center justify-between shadow-md px-2 py-2 rounded-md">
                <p className="text-sm w-1/3">Outbound: Hyderabad(HYD)</p>
                <div className="w-3/5 flex justify-around items-center ">
                    <p className="text-sm">Departure</p>
                    <div className="h-6 w-px bg-gray-400"></div>
                    <p className="text-sm">Duration</p>
                    <div className="h-6 w-px bg-gray-400"></div>
                    <p className="text-sm">Arrival</p>
                </div>
            </div>
            <ul className="left-0 list-none w-full">
                {flightListConstants.map((data, index)=>(
                    <FlightCard flightDetails= {data} key={index} click="arrival"/>
                ))}
            </ul>
        </div>
    </div>
    )
}

export default FlightList