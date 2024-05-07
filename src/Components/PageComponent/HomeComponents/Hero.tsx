import Image, { StaticImageData } from "next/image";
import React from "react";
import { IdenetityTypes, PopupBannerTypes } from "@/DataSource/Types";
import Skeleton from "react-loading-skeleton";
import HeroContent from "./HeroContent";
import { fetchGetRequest } from "@/Components/lib/Helper";


const Hero = async () => {

    const fetchData: IdenetityTypes = await fetchGetRequest({ endpoint: 'identity/' })
    const popupBanner: PopupBannerTypes[] = await fetchGetRequest({ endpoint: `pop-up-banner/` })

    return (
        <div className="relative lg:h-[70vh] h-[60vh] fixed_head_style ">

            <div className={`w-full h-full`}>
                {
                    !fetchData ?
                        <Skeleton style={{ height: "660px", width: "100%", marginTop: "10px" }} />
                        :
                        <>
                            <div className="md:hidden relative w-full h-full flex">
                                <SiteImageBox image={fetchData?.site_banner_mobile?.file} />
                            </div>
                            <div className="md:flex relative w-full h-full hidden">
                                <SiteImageBox image={fetchData?.site_banner?.file} />
                            </div>
                        </>
                }
            </div>
            <HeroContent fetchData={fetchData} popupBanner={popupBanner} />
        </div>
    );
};

export default Hero;


export const SiteImageBox = ({ image }: { image: StaticImageData }) => {
    return (
        <div className="w-full h-full">
            <Image
                width={1500}
                height={1200}
                className="w-full object-cover  md:object-left h-full"
                loading="lazy"
                src={image}
                alt="charak Memorial hospital"
            />
        </div>
    )
}