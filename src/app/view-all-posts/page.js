'use client'
import React, { useEffect, useState } from 'react'
import { fetchGraphQl } from '../api/graphicql';
import Post from '../components/Post';
import Image from 'next/image';
import { GET_POSTS_LIST_QUERY } from '../api/query';
import { useRouter, useSearchParams } from 'next/navigation';


export default function ViewAllPosts() {
  const params = useSearchParams()
  const router=useRouter()
  let page=params.get("page")
    const [postes,setPostes]=useState([])
    useEffect(()=>{
      let varia={ "limit": 6, "offset": page}
      fetchGraphQl(GET_POSTS_LIST_QUERY,varia,setPostes)
    },[page])
    const handlePrevious=()=>{
      let nextPage=parseInt(page)-6
      router.push(`/view-all-posts?page=${nextPage}`)
    }
    const handleNext=()=>{
      let nextPage=parseInt(page)+6
      router.push(`/view-all-posts?page=${nextPage}`)
    }

  return (
    <>

    <div className="md:lg-0 px-4">  
    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-20 gap-y-8  mb-10">
    {postes?.channelEntriesList?.channelEntriesList?.map((data,index)=>(
      
        <Post data={data}/>
     
            ))}
            </div>
            {postes?.channelEntriesList?.count >6&&
            <div class="mb-10 flex items-center justify-center">
              <nav class="isolate inline-flex -space-x-px rounded-md shadow-sm" aria-label="Pagination"><button onClick={()=>handlePrevious()} disabled={parseInt(page)>0?false:true} class="relative inline-flex items-center gap-1 rounded-l-md border border-gray-300 bg-white px-3 py-2 pr-4 text-sm font-medium text-gray-500 hover:bg-gray-50 focus:z-20 disabled:pointer-events-none disabled:opacity-40 dark:border-gray-500 dark:bg-gray-800 dark:text-gray-300">
            <Image
                  src="/img/arrow-left-colour.svg"
                  alt="spurtCMS Profile Image"
                  className="dark:invert"
                  width={5}
                  height={5}
                  priority
                /><span>Previous</span></button><button disabled={parseInt(page)==postes?.channelEntriesList?.count||parseInt(page)+parseInt(page)>=postes?.channelEntriesList?.count?true:false} onClick={()=>handleNext()} class={`relative inline-flex items-center gap-1 rounded-r-md border border-gray-300 bg-white px-3 py-2 pl-4 text-sm font-medium disabled:pointer-events-none disabled:opacity-40 text-gray-500 hover:bg-gray-50 focus:z-2 dark:bg-gray-800 dark:text-gray-300`}><span>Next</span>
                   <Image
                  src="/img/arrow-right-colour.svg"
                  alt="spurtCMS Profile Image"
                  className="dark:invert"
                  width={5}
                  height={5}
                  priority
                /></button></nav>
                </div>
}
            </div>
           
            </>
  )
}
