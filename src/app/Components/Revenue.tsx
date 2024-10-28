import PendingTask from "./PendingTask";
import RevenueComponent from "./RevenueComponet";

const Revenue = () => {
    return (
        <div className=" lg:flex">
            <div className="w-full lg:w-[50%] ">
                <RevenueComponent />
            </div>
            <div className="lg:w-[50%] lg:ml-4 h-[500px] w-full">
                <PendingTask/>
            </div>
        </div>
    )
}
export default Revenue;