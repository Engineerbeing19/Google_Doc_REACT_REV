import React from 'react'
import Cards from './Cards'
import {useRef} from 'react'

function Foreground() {

        const ref= useRef(null);
        const data = [
        {   desc : "This is the Data for the shown card 1 below.", 
            filesize: "756kb", 
            close : true, 
            tag: { isOpen : true, tagTitle: "Download Now", tagColor : "green"},
        },


        {   desc : "This is the Data for the shown card 2 below.", 
            filesize: "7456kb", 
            close : true, 
            tag: { isOpen : true, tagTitle: "Download Now", tagColor : "green"},
        },


        {   desc : "This is the Data for the shown card 3 below.", 
            filesize: "7102kb", 
            close : false, 
            tag: { isOpen : false , tagTitle: "Upload Now", tagColor : "blue"},
        },
    ];


return (
    <div  ref= {ref} className='fixed z-[3] top-0 left-0 w-full h-full flex gap-10 flex-wrap p-5'>
        {data.map((item,index)=>(
            <Cards data={item} reference= {ref} />
        ))}
    </div>
);
}

export default Foreground
