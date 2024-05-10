'use client'

import React from 'react'
import { MyContextProvider } from '../Context/Main'

const LayOutProvider = ({ children }: { children: React.ReactNode }) => {
    return (
        <div>
            <MyContextProvider>
                {children}
            </MyContextProvider>
        </div >
    )
}

export default LayOutProvider