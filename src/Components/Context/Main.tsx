'use client'


import React, { useState } from 'react'

export interface ToggleTypes {
    toggle: boolean;
    popupType: 'SUCCESS' | 'CONFIRM' | 'FORM' | 'UPDATE'
}
export type ToggleDataTypes = {
    setTogglePopup: React.Dispatch<React.SetStateAction<ToggleTypes>>
    togglePopup: ToggleTypes;
}
export const MyContext = React.createContext<ToggleDataTypes | null>(null);

export const MyContextProvider = ({ children }: { children: React.ReactNode }) => {


    const [togglePopup, setTogglePopup] = useState<ToggleTypes>({
        toggle: false,
        popupType: 'CONFIRM'
    });

    return (
        <MyContext.Provider value={{ setTogglePopup, togglePopup }}>
            {children}
        </MyContext.Provider>
    )
}