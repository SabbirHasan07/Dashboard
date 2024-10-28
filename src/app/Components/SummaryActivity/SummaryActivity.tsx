



const SummaryActivity =()=>{
    return(
        <div className="m-4  lg:flex lg:flex-col-4 justify-between">
            <div className="px-9 py-4 border rounded-md mt-4">
                <p className="text-3xl font bold ">389</p>
                <p className="text-[#757D85]">Active</p>
            </div>
            <div className="px-9 py-4 border rounded-md mt-4">
                <p className="text-3xl font bold ">125</p>
                <p className="text-[#757D85]">Pending</p>
            </div>
            <div className="px-9 py-4 border rounded-md mt-4">
                <p className="text-3xl font bold ">234</p>
                <p className="text-[#757D85]">Refunded</p>
            </div>
            <div className="px-9 py-4 border rounded-md mt-4">
                <p className="text-3xl font bold ">234</p>
                <p className="text-[#757D85]">Cancelled</p>
            </div>
        </div>
    )
}

export default SummaryActivity;