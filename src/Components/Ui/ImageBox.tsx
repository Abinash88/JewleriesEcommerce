import Image, { StaticImageData } from "next/image";
import React from "react";
import { Cn } from "../lib/Helper";

interface ImageBox extends React.ImgHTMLAttributes<HTMLImageElement> {
    image: StaticImageData | string;
    label: string;
    className?: string;
}


export const SiteImageBox = React.forwardRef<HTMLImageElement, ImageBox>(({ image, label, className, ...props }, ref) => {
    return (
        <Image
            {...props}
            ref={ref}
            width={1500}
            height={1200}
            className={Cn(`w-full object-cover h-full ${className}`)}
            loading="lazy"
            src={image}
            alt={label}
        />
    )
})


SiteImageBox.displayName = "SiteImageBox"