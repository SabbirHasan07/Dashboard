'use client'
import React from "react";
import DateDetails from "./DatesComponents/DatesDetails";
import { DatesAll } from "../DB/Data";
import { DatesIcon } from "../icons/icons";

const Dates = () => {
    return (
        <div className="lg:flex mt-[30px] justify-between">
            <div className=" lg:flex bg-white border-gray-200 rounded-lg shadow-sm  items-center px-4 py-2 items-center gap-4 bg-white border border-gray-200 rounded-lg">
                {DatesAll.map((item, index) => (
                    <React.Fragment key={index}>
                        <DateDetails item={item} />
                        {index < DatesAll.length - 1 && (
                            <div className="h-[36px] w-[1px] bg-[#C2C2C2] " />
                        )}
                    </React.Fragment>
                ))}
            </div>
            <div className="box-border flex px-4 py-2 items-center gap-4 bg-white border border-gray-200 rounded-lg mt-3">
                <div><DatesIcon/></div>
                <p>Custom Date</p>

            </div>
        </div>
    );
};

export default Dates;
