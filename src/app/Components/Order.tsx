'use client'

import ActivityLog from "./OrderComponent/ActivityLog";
import Summary from "./OrderComponent/Summary"

const Order = () => {
    return (
        <div className="lg:flex gap-4">
            <div className="lg:w-[50%] w-full">
                <Summary />
            </div>
            <div className="lg:w-[50%] w-full">
                <ActivityLog />
            </div>
        </div>
    )
}
export default Order;