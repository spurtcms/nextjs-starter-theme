'use client'
import React, { useEffect } from 'react'
import { useState, useRef } from "react";
import { fetchGraphQl } from '../api/graphicql';
import Image from 'next/image';

export default function NavBar({postes,activeIndex,setActiveIndex}) {

    let scrl = useRef(null);
    const [scrollX, setscrollX] = useState(0);
    const [scrolEnd, setscrolEnd] = useState(true);
    
    const slide = (shift) => {
      scrl.current.scrollLeft += shift;
      setscrollX(scrollX + shift);
  
      if (
        Math.floor(scrl.current.scrollWidth - scrl.current.scrollLeft) <=
        scrl.current.offsetWidth
      ) {
        setscrolEnd(true);
      } else {
        setscrolEnd(false);
      }
    };
    const scrollCheck = () => {
      setscrollX(scrl.current.scrollLeft);
      if (
        Math.floor(scrl.current.scrollWidth - scrl.current.scrollLeft) <=
        scrl.current.offsetWidth
      ) {
        setscrolEnd(true);
      } else {
        setscrolEnd(false);
      }
    };
    useEffect(()=>{
        if(scrl.current){
         
            if (
                Math.floor(scrl.current.scrollWidth - scrl.current.scrollLeft) <=
                scrl.current.offsetWidth
              ) {
                setscrolEnd(true);
              } else {
                setscrolEnd(false);
              }
        }
    },[scrl])

  return (
   <>
   <div className="flex flex-nowrap flex-row gap-x-2 pb-4 mb-4 justify-start items-center ">
   {scrollX !== 0 && (
        <button
          onClick={() => slide(-50)}
          class="w-8 h-8"
        >
          <Image src="/img/arrow-left-colour.svg" alt="arrow-left" class="w-6 h-6" width={32}
                  height={32}
                  priority />
        </button>
     )} 

   
  
        {postes?.categoriesList?.categories&&<>
        <ul ref={scrl} onScroll={scrollCheck} className='flex flex-nowrap flex-row gap-x-2 justify-start items-center overflow-scroll scrollbar-style'>
            <li onClick={()=>setActiveIndex(0)} className={`whitespace-nowrap px-6 py-2 rounded-3xl border font-base  leading-4 hover:text-white hover:bg-gray-500 hover:border-gray-500 cursor-pointer ${activeIndex==0?'border-cyan-500 text-primary':'border-gray-200 text-gray-600'}`}> All</li>
          {postes?.categoriesList?.categories?.map((data,index)=>(
                <li key={index} onClick={()=>setActiveIndex(data.id)} className={`whitespace-nowrap px-6 py-2 rounded-3xl border font-base  leading-4 hover:text-white hover:bg-gray-500 hover:border-gray-500 cursor-pointer ${activeIndex===data.id?'border-cyan-500 text-primary':'border-gray-200 text-gray-600'}`}> {data.categoryName} </li>
          
   ))}
  </ul>
  </>

 }
  
  {!scrolEnd && (
        <button
          onClick={() => slide(+50)}
          class="w-8 h-8"
        >
         <Image src="/img/arrow-right-colour.svg" alt="arrow-right" class="w-6 h-6" width={32}
                  height={32}
                  priority />
        </button>
      )}
 </div>
   
   </>
  )
}
