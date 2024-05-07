import React from 'react'

const SearchTitle = ({ name, dataLength }: { name: string, dataLength: number }) => {
    return (
        <div>
            <h4 className='font-light  text-center font-["Inter"] text-[20px] md:text-[22px] lg:text-[25px] text-gray-600' >
                We Found <span className='font-semibold'> {dataLength}</span> Data from {name}
            </h4>
        </div>
    )
}

export default SearchTitle