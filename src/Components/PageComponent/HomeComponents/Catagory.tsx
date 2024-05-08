
import React from "react";
import dynamic from "next/dynamic";
import CatagoryTop from "./CatagoryBox.tsx/CatagoryTop";
const CatagoryBottom = dynamic(() => import("./CatagoryBox.tsx/CatagoryBottom"))

const Catagory = async () => {

    return (
        <div className="w-full">
            <div className="max_width  flex items-center 
            flex-col justify-between w-full pb-[60px] pt-[60px]">
                <div className="mb-5">
                    <CatagoryTop />
                </div>
                <CatagoryBottom />
            </div>
        </div>
    );
};

export default Catagory;



