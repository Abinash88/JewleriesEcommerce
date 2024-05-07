
import React from "react";
import { fetchGetRequest } from "@/Components/lib/Helper";
import { hospitalServices } from "@/DataSource/Types";
import dynamic from "next/dynamic";
import Skeleton from "react-loading-skeleton";
const WhyChooseLeft = dynamic(() => import("./WhyChooseBox/WhyChooseLeft"))
const WhyChooseRight = dynamic(() => import("./WhyChooseBox/WhyChooseRight"), { ssr: false, loading: () => <Skeleton height={280} width={650} /> })

const WhyChoose = async () => {
    const hospital: hospitalServices = await fetchGetRequest({ endpoint: "hospital-services/" });
    const about = await fetchGetRequest({ endpoint: "about-us/" });

    return (
        <div className="w-full">
            <div className="max_width  flex gap-[50px] xl:gap-[22.25px] items-start 
            xl:flex-row flex-col justify-between  w-full pb-[60px] pt-[60px]">
                <WhyChooseLeft hospital={hospital} />
                <WhyChooseRight about={about} />
            </div>
        </div>
    );
};

export default WhyChoose;



