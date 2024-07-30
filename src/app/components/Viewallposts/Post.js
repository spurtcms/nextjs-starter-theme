'use client'
import React from 'react'
import Link from 'next/link'
import moment from "moment";
import Image from 'next/image';
import { imageUrl } from '@/app/utilities/ImagePath';
export default function Post({data,activeIndex,scrollX}) {
    const imageLoader = ({src}) => {
        return src
      }
  return (
   <>
          
          <div>
            <Link href={`/posts/${data.slug}`}>
            <div  className="mb-6 block h-[236px]">
            <Image
                loader={imageLoader}
                src={`${imageUrl}${data.coverImage}`}
                alt="spurtCMS card image"
                width={1000}
                height={1000}
                priority
                layout="responsive"
                blurDataURL={`${imageUrl}${data.coverImage}`}
                className='h-full-imp'
              />
            </div>
            <h1 className="text-3xxl font-bold line-clamp-2 text-black hover:underline   leading-[2.625rem] line-clamp-2"> {data.title}</h1></Link>
            <p className="text-base text-black my-3">{moment(data.createdOn).format("MMM DD, YYYY")} </p>
            <div className="text-lg text-current  font-light line-clamp-3 mb-3 desc">
              <div dangerouslySetInnerHTML={{__html: data?.description.replaceAll("<br>"," ")}}></div>
              </div>
            <div className="flex items-center gap-x-2">
            <div class="flex items-center justify-center relative h-8 w-8 overflow-hidden rounded-full bg-slate-300">
              {data?.authorDetails?.ProfileImagePath==""||data?.authorDetails?.ProfileImagePath==null?
              <>
                {data?.authorDetails?.FirstName ?
                <span className="text-3xxl text-white">{data?.authorDetails?.FirstName==""||data?.authorDetails?.FirstName==null?data?.authorDetails?.FirstName?.[0]:""}</span>
                 :
                <Image
                loader={imageLoader}
                src={`/img/user1.jpg`}
               alt="spurtCMS Profile Image"
               width={32}
               height={32}
               priority  
             /> }</>
              : <Image
              loader={imageLoader}
                src={`${imageUrl}${data?.authorDetails?.ProfileImagePath}`}
                alt="spurtCMS Profile Image"
                width={32}
                height={32}
                priority
                
              />
              }
               </div>
              <div className="">
                <a  className="text-primary text-base"> {data?.authorDetails?.FirstName} {data?.authorDetails?.LastName} </a>
              </div>
            </div>
          </div>
          
   </>
  )
}
