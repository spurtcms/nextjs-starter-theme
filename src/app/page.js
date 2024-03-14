'use client'
import Image from "next/image";
import { useEffect, useState } from "react";
import { fetchGraphQl } from "./api/graphicql";
import Post from "./components/Post";
import NavBar from "./components/NavBar";
import Link from "next/link";
import {GET_POSTS_LIST_QUERY,GET_POSTS_CATEGORYLIST_QUERY } from "./api/query";
import moment from "moment";
import { useRouter } from "next/navigation";

export default function Home() {

const router =useRouter()
  const [postes,setPostes]=useState([])
  const [postesCategory,setPostesCategory]=useState([])
  const [bannerShow,setBannerShow]=useState([])
  const [activeIndex,setActiveIndex]=useState(0)
  useEffect(()=>{
    let variable_list
    if(activeIndex==0){
      variable_list={ "limit": 10, "offset": 0}
    }else{
     variable_list={ "limit": 10, "offset": 0,categoryId:activeIndex}
    }
   
    let variable_category={"hierarchylevel": 0}
    fetchGraphQl(GET_POSTS_LIST_QUERY,variable_list,handlePostesMore) 
    if(activeIndex==0){
      fetchGraphQl(GET_POSTS_CATEGORYLIST_QUERY,variable_category,setPostesCategory)
    } 
    
  },[activeIndex])
  
  
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
  const imageLoader = ({src}) => {
    return src
  }
  const handleNavigation=(id)=>{
    router.push(`/posts/${id}`)
  }
  return (
    <>
    {bannerShow?.length !=0&&<div className="block">
            <Image
            loader={imageLoader}
              src={bannerShow?.[0]?.coverImage}
              alt="spurtCMS Banner"
              className="dark:invert cursor-pointer"
              width={12000}
              height={1000}
              priority
              onClick={()=>handleNavigation(bannerShow?.[0]?.id)}
            />
            <div className="flex sm:flex-nowrap flex-wrap mt-8 gap-x-2 gap-y-4 pb-10 mb-8 border-b border-gray-200">
            <div className="w-full max-w-full mt-0 w-full sm:w-7/12">
              <h1 className="text-4xl2 font-bold text-black line-clamp-2 cursor-pointer" onClick={()=>handleNavigation(bannerShow?.[0]?.id)}>{bannerShow?.[0]?.title}</h1>
              <p className="text-base text-black my-3">{moment(bannerShow?.[0]?.createdOn).format("MMM DD, YYYY")}</p>
              <div className="flex items-center gap-x-2">
              <div class="flex items-center justify-center relative h-8 w-8 overflow-hidden rounded-full bg-slate-300">
                {bannerShow?.[0]?.authorDetails?.ProfileImagePath==""?
                  <span className="text-3xxl text-white">{bannerShow?.[0]?.authorDetails?.FirstName?.[0]}</span>
                : <Image
                loader={imageLoader}
                src={`${bannerShow?.[0]?.authorDetails?.ProfileImagePath}`}
                  alt="spurtCMS Profile Image"
                  className="dark:invert"
                  width={32}
                  height={32}
                  priority
                />}
                </div>
                <div className="">
                  <a  className="text-primary text-base">{bannerShow?.[0]?.authorDetails?.FirstName} {bannerShow?.[0]?.authorDetails?.LastName} </a>
                </div>
              </div>
            </div>
            <div className="w-full max-w-full w-full sm:w-5/12">
              <p className="text-lg text-black font-light line-clamp-4"><div  dangerouslySetInnerHTML={{
          __html: bannerShow?.[0]?.description,
        }}/> </p>
            </div>
          </div>
        </div>}
        
        {/* banner */}
        <div className="md:lg-0">         
          
          {postesCategory?.categoriesList?.categories&&<NavBar postes={postesCategory} activeIndex={activeIndex} setActiveIndex={setActiveIndex}/>}
          
          {/* nav */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-20 gap-y-8 mb-10">
          {postes?.channelEntriesList?.channelEntriesList?.map((data,index)=>(
          index<4&&
           <Post data={data}/>

          ))}
          </div>
          <>
          {postes?.channelEntriesList?.channelEntriesList?.length>4&&<>
          <div className="border-b border-gray-200 block mb-8 "></div>
          <h1 className="text-3xxl font-bold text-black mb-10"> More Stories </h1>
        
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-20 gap-y-8 mb-10">
          {postes?.channelEntriesList?.channelEntriesList?.map((data,index)=>(
          index>=4&&index<6&&
          <Post data={data}/>
              ))}
           
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
