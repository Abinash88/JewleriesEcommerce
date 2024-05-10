import { Button } from "@/Components/Ui/Button";
import { SiteImageBox } from "@/Components/Ui/ImageBox";
import { Cn } from "@/Components/lib/Helper";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import React from "react";


const Hero = async () => {


    return (
        <div className="relative ">

            <div className={`w-[90%] max_width relative mx-auto h-full`}>

                <div className=" grid-cols-1 md:grid-cols-3 relative  grid gap-1 md:gap-4 w-full h-full ">
                    <SiteImageBox image={'https://img.freepik.com/free-photo/lovely-woman_144627-19647.jpg?t=st=1715103256~exp=1715106856~hmac=93236740529f57c574455e50d8641fb534ec52510f922507dfef267fa1ea690b&w=740'} className="col-span-2 shadow-lg" label="girls picture" />
                    <SiteImageBox image={'https://img.freepik.com/free-photo/beautiful-model-with-ponytail-makeup_144627-1354.jpg?t=st=1715103298~exp=1715106898~hmac=3eda276127c0ef25112a1b98f2aa275880472275dec6675c1de5f2f7b9ce66a8&w=740'} className="shadow-lg" label="seconed girls" />
                </div>
                <div className="absolute left-[50%] bottom-10 translate-x-[-50%]">
                    <Link href={'/product?type=rings&catagoryId=stone'}>
                        <Button variant={'outline'} >Shop Now</Button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Hero;

