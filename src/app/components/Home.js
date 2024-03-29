'use client'
import { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { GET_POSTS_CATEGORYLIST_QUERY, GET_POSTS_LIST_QUERY } from "../api/query";
import { fetchGraphQl } from "../api/graphicql";
import Banner from "./Banner";
import BannerSkeleton from "../utilities/Skeleton/BannerSkeleton";
import NavBar from "./NavBar";
import ViewAllSkeleton from "../utilities/Skeleton/ViewAllSkeleton";
import Post from "./Post";


export default function HomePage() {

const router =useRouter()
const searchParams = useSearchParams()
  const [postes,setPostes]=useState([])
  const [postesCategory,setPostesCategory]=useState([])
  const [bannerShow,setBannerShow]=useState([])
  const [activeIndex,setActiveIndex]=useState(null)
  const [scrollX, setscrollX] = useState(0);
  const [loader,setLoader]=useState(false)
  let cateId=searchParams.get("cateId")
  useEffect(()=>{
    let variable_list
    if(cateId==null){
      setActiveIndex(cateId)
        variable_list={ "limit": 10, "offset": 0,channelId:72}
    }else{
      setActiveIndex(cateId)

     variable_list={ "limit": 10, "offset": 0,categoryId:cateId}

    }
   
    fetchGraphQl(GET_POSTS_LIST_QUERY,variable_list,handlePostesMore,setLoader) 
  
  },[cateId])
  useEffect(()=>{
    let variable_category={"hierarchylevel": 0}
    fetchGraphQl(GET_POSTS_CATEGORYLIST_QUERY,variable_category,setPostesCategory,setLoader)

  },[])
  
  const handlePostesMore=(data)=>{
        let listEntry=[]
        let banner=[]
    data?.channelEntriesList?.channelEntriesList?.map((s,i)=>{
     if(s.featuredEntry==1){
      banner.push(s)
     }else{
      listEntry.push(s)
     }
    })
    if(listEntry.length){
      data.channelEntriesList.channelEntriesList=listEntry
    }
   
    setPostes(data)
    setBannerShow(banner)
  }
 

  return (
    <>
    {loader==true?
    <Banner bannerShow={bannerShow}router={router}/>:<BannerSkeleton />}
    
   
        
        <div className="md:lg-0">         
          
          {postesCategory?.categoriesList?.categories&&<NavBar postes={postesCategory} activeIndex={activeIndex} setActiveIndex={setActiveIndex} scrollX={scrollX} setscrollX={setscrollX}/>}
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-20 gap-y-8 mb-10">
            
            {loader==true?<> {postes?.channelEntriesList?.channelEntriesList?.map((data,index)=>(
          index<4&&
           <Post data={data} activeIndex={activeIndex} scrollX={scrollX} />

          ))}</>:<ViewAllSkeleton />}
         
          </div>
          <>
          {postes?.channelEntriesList?.channelEntriesList?.length>4&&<>
          <div className="border-b border-gray-200 block mb-8 "></div>
          <h1 className="text-3xxl font-bold text-black mb-10"> More Stories </h1>
        
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-20 gap-y-8 mb-10">
          {loader==true?<> {postes?.channelEntriesList?.channelEntriesList?.map((data,index)=>(
          index>=4&&index<6&&
          <Post data={data} activeIndex={0} />
              ))}</>:<ViewAllSkeleton />}
         
           
          </div>
          {postes?.channelEntriesList?.channelEntriesList?.length>6&& 
          <div class="mt-10 mb-10 flex justify-center">
           
           <Link href={"/view-all-posts?page=0"} className="relative inline-flex items-center gap-1 rounded-md border border-gray-300 bg-white px-3 py-2 pl-4 text-sm font-medium text-gray-500 hover:bg-gray-50 focus:z-20 disabled:pointer-events-none disabled:opacity-40 dark:border-gray-500 dark:bg-gray-800 dark:text-gray-300 cursor-pointer"><span>View all Posts</span></Link>
             
             </div>}
         
            </>}
          
            </>
        </div>



    </>
  );
}
