import { Task, ThreeDot } from "../icons/icons";

const PendingTask =()=>{
    return(
        <div className=" border rounded-lg shadow mt-7 h-[390px]">
            <div className="flex justify-between p-4 flex items-center  ">
                <p className="font-bold">Pending Task</p>
                <p><ThreeDot/></p>
            </div>
            <div className=" flex justify-between px-4 py-3 border rounded-lg shadow mx-4 mb-2">
                <div >
                    <p>Resturant Account</p>
                </div>
                <div><Task/></div>
            </div>
            <div className=" flex justify-between px-4 py-3 border rounded-lg shadow mx-4 mb-2">
                <div >
                    <p>Restaurant Onboarding </p>
                </div>
                <div><Task/></div>
            </div>
            <div className=" flex justify-between px-4 py-3 border rounded-lg shadow mx-4 mb-2">
                <div >
                    <p>Rider Partners</p>
                </div>
                <div><Task/></div>
            </div>
            <div className=" flex justify-between px-4 py-3 border rounded-lg shadow mx-4 mb-2">
                <div >
                    <p>Rider Onboarding</p>
                </div>
                <div><Task/></div>
            </div>
            <div className=" flex justify-between px-4 py-3 border rounded-lg shadow mx-4">
                <div >
                    <p>Support Tickets</p>
                </div>
                <div><Task/></div>
            </div>
        </div>
    )
}

export default PendingTask;