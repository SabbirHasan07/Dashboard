import { OrderIcon, ThreeDot } from "@/app/icons/icons";
import SummaryActivity from "../SummaryActivity/SummaryActivity";
import ChartOrder from "../ChartOrder/ChartOrder";


const Summary = () => {
    return (
        <div className="border rounded-lg shadow mb-4  lg:h-[470px] ">
            <div className="flex justify-between p-4  items-center ">
                <p className="font-bold">Current Order Summary</p>
                <p><ThreeDot /></p>
            </div>
            <hr className="mx-5" />
            <div className="flex justify-between p-4  items-center  rounded-lg shadow  m-4 bg-[#A1045A14]">
                <div className="flex gap-2">
                    <OrderIcon/>
                    <p className="font-bold text-[#A1045A]">Current Order Summary</p>
                </div>
                <div>
                    <button className="px-4 bg-white py-1 rounded-md text-[#A1045A]">Manage Order</button>
                </div>
            </div>
            <SummaryActivity/>
            <ChartOrder/>

        </div>
    )
}
export default Summary;