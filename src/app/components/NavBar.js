'use client'
import React, { useEffect } from 'react'
import { useState, useRef } from "react";
import gsap from "gsap";

export default function NavBar() {
    const dumdata=["All","Articles","Blogs","Career","Automation","Managing","Engineering","Soft Skills","design"]

    let scrl = useRef(null);
    const [scrollX, setscrollX] = useState(0);
    const [scrolEnd, setscrolEnd] = useState(true);
  
    //Slide click
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
  
    //Anim
    const anim = (e) => {
      gsap.from(e.target, { scale: 1 });
      gsap.to(e.target, { scale: 1.5 });
    };
    const anim2 = (e) => {
      gsap.from(e.target, { scale: 1.5 });
      gsap.to(e.target, { scale: 1 });
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
          onMouseEnter={(e) => anim(e)}
          onMouseLeave={(e) => anim2(e)}
        >
          <img src="/img/arrow-left-colour.svg" alt="arrow-left" class="w-6 h-6" />
        </button>
      )}

   
  
 
  <ul ref={scrl} onScroll={scrollCheck} className='flex flex-nowrap flex-row gap-x-2 justify-start items-center overflow-scroll scrollbar-style'>
   {dumdata.map((data,index)=>(
        <li key={index} className="whitespace-nowrap px-6 py-2 rounded-3xl border border-gray-200 font-base text-gray-600 leading-4 hover:text-white hover:bg-gray-500 hover:border-gray-500"> {data} </li>
  
   ))}
  </ul>
  {!scrolEnd && (
        <button
          onClick={() => slide(+50)}
          onMouseEnter={(e) => anim(e)}
          onMouseLeave={(e) => anim2(e)}
        >
         <img src="/img/arrow-right-colour.svg" alt="arrow-left" class="w-6 h-6" />
        </button>
      )}
  
 </div>
   
   </>
  )
}
