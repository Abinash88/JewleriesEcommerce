import { StaticImageData } from "next/image";

export type AccountDataTypes = {
    firstname: string;
    lastname: string;
    email: string;
    phone: number;
    password: string;
    confirmpassword: string;
}

export type OrderFormDataTypes = {
    firstname: string;
    lastname: string;
    email: string;
    phone: number;
    city: string;
    address: string;
}


export type CatagoryProductTypes = {
    name: string,
    image: StaticImageData,
    price: string,
    catagory: string,
}