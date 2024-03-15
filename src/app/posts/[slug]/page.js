'use client'
import Image from "next/image";
import { useEffect, useState } from "react";
import { fetchGraphQl } from "@/app/api/graphicql";
import Link from "next/link";
import moment from "moment";
import Post from "@/app/components/Post";
import { GET_POSTS_LIST_QUERY, GET_POSTS_SLUG_QUERY } from "@/app/api/query";
import { useSearchParams } from "next/navigation";
import PostSkeleton from "@/app/utilities/Skeleton/PostSkeleton";
import ViewAllSkeleton from "@/app/utilities/Skeleton/ViewAllSkeleton";

export default function Detail({params}) {

  const searchParams = useSearchParams()
  const [postes,setPostes]=useState([])
  const [postesMore,setPostesMore]=useState([])
  const [loader,setLoader]=useState(false)
  let cateId=searchParams.get("cateId")
  let scrollX=searchParams.get("scroll")
  console.log(cateId,'cateId');
  let {slug}=params
  useEffect(()=>{
    let variable_list={ "limit": 10, "offset": 0,channelId:72}
    let variable_slug={ "limit": 10, "offset": 0,"channelEntryId": slug}

    fetchGraphQl(GET_POSTS_SLUG_QUERY,variable_slug,setPostes,setLoader)
    fetchGraphQl(GET_POSTS_LIST_QUERY,variable_list,handlePostesMore,setLoader)
  },[slug])
const handlePostesMore=(data)=>{

  let sdata=data?.channelEntriesList?.channelEntriesList?.filter((s,i)=>s.id !=slug)
  if(sdata?.length){
    data.channelEntriesList.channelEntriesList=sdata

  }
  setPostesMore(data)
}
  const imageLoader = ({src}) => {
    return src
  }
  return (
    <>
      
        <div className="md:lg-0 px-4">
          <nav aria-label="breadcrumb"> 
            <ol class="flex flex-wrap space-x-2 items-center mb-8">
            <Link href={cateId==null?"/":`/?cateId=${cateId}&scroll=${scrollX}`}><li><p class="text-xl text-gray-600 flex justify-start gap-2 items-center"> <img src="/img/home.svg" className="h-5" />Home</p></li> </Link>
              <li> <img src="/img/arrow-breadcrumbs.svg" /> </li>
              <li class="text-black text-xl line-clamp-1 w-80" aria-current="page">{postes?.channelEntryDetail?.title?postes?.channelEntryDetail?.title:<div role="status" class="max-w-sm animate-pulse"> <div class="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-48"></div></div>}</li> 
            </ol>
          </nav>
          {loader==true?<> <h1 className="text-4xl2 text-black font-bold mb-4">{postes?.channelEntryDetail?.title}</h1>
          <div className="flex items-center gap-x-2 mb-6">
          <div class="flex items-center justify-center relative h-8 w-8 overflow-hidden rounded-full bg-slate-300">
          {postes?.channelEntryDetail?.authorDetails?.ProfileImagePath==""?
                  <span className="text-3xxl text-white">{postes?.channelEntryDetail?.authorDetails?.FirstName?.[0]}</span>
                : <Image
                loader={imageLoader}
                src={postes?.channelEntryDetail?.authorDetails?.ProfileImagePath}
                  alt="spurtCMS Profile Image"
                  className="dark:invert"
                  width={32}
                  height={32}
                  priority
                />} </div>
            <div className="">
              <a  className="text-primary text-base"> {postes?.channelEntryDetail?.authorDetails?.FirstName} {postes?.channelEntryDetail?.authorDetails?.LastName}  </a>
            </div>
          </div>
          <div className="block mb-8">
            <Image
             loader={imageLoader}
              src={postes?.channelEntryDetail?.coverImage}
              alt="spurtCMS Banner"
              className="dark:invert"
              width={12000}
              height={1000}
              priority
              layout="responsive"
              placeholder="blur"
              blurDataURL={"/img/no-image.png"}
            />
          </div></>:<> <PostSkeleton /></>}
         
         
          <p className="text-base text-black mb-1">{moment(postes?.channelEntryDetail?.createdOn).format("MMM DD, YYYY")} </p>
          <div className="text-lg text-black font-light leading-normal mb-6" dangerouslySetInnerHTML={{
            __html: postes?.channelEntryDetail?.description,
          }}/>
          {postesMore?.channelEntriesList?.channelEntriesList?.length !=0&&<><div className="border-b border-gray-200 block mb-8 mt-10"></div>
          <h1 className="text-3xxl font-bold text-black mb-10"> More Stories </h1>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-20 gap-y-8 mb-8">
            {loader==true?<> {postesMore?.channelEntriesList?.channelEntriesList?.map((data,index)=>(
          index<2&&
          <Post data={data} activeIndex={0}/>
       
              ))}
              </>:<><ViewAllSkeleton /></>}
         
          </div>
          <div class="mt-10 mb-10 flex justify-center">
           {postesMore?.channelEntriesList?.channelEntriesList?.length >2&&  <Link href={"/view-all-posts?page=0"} className="relative inline-flex items-center gap-1 rounded-md border border-gray-300 bg-white px-3 py-2 pl-4 text-sm font-medium text-gray-500 hover:bg-gray-50 focus:z-20 disabled:pointer-events-none disabled:opacity-40 dark:border-gray-500 dark:bg-gray-800 dark:text-gray-300 cursor-pointer"><span>View all Posts</span></Link>

           }
         
             
             </div>
             </>}
          
        </div>
        
    </>
  );
}
