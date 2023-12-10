import React from 'react'
import { FaRegFileAlt } from "react-icons/fa";


function Cards() {
return (
    <div className=' relative rounded-[50px] bg-zinc-900/90 w-60 h-72 text-white px-8 py-10 overflow-hidden'>
        <FaRegFileAlt />
        <p className='mt-5 text-sm leading-tight font-semibold'>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor et </p>

        <div className='footercard absolute bottom-0 bg-sky-200 h-10 py-3 w-full left-0'></div>

    </div>
)
}

export default Cards
