import React from 'react'
import Link from 'next/link'
import moment from "moment";
import Image from 'next/image';
export default function Post({data,activeIndex,scrollX}) {
    const imageLoader = ({src}) => {
        return src
      }
  return (
   <>

    <div>
            <Link href={activeIndex==null?`/posts/${data.slug}`:`/posts/${data.slug}?cateId=${activeIndex}&scroll=${scrollX}`}>
            <a  className="mb-6 block">
            <Image
            loader={imageLoader}
                src={data.coverImage}
                alt="spurtCMS card image"
                width={1000}
                height={1000}
                priority
                layout="responsive"
                placeholder="blur"
                 blurDataURL={data.coverImage}

              />
            </a>
            <h1 className="text-3xxl font-bold line-clamp-2"> <a  className="text-black hover:underline  leading-[2.625rem] line-clamp-2">{data.title}</a> </h1></Link>
            <p className="text-base text-black my-3">{moment(data.createdOn).format("MMM DD, YYYY")} </p>
            <p className="text-lg text-current  font-light line-clamp-3 mb-3 " dangerouslySetInnerHTML={{
          __html: data.description,
        }}></p>
            <div className="flex items-center gap-x-2">
            <div class="flex items-center justify-center relative h-8 w-8 overflow-hidden rounded-full bg-slate-300">
              {data?.authorDetails?.ProfileImagePath==""?
                
                <span className="text-3xxl text-white">{data?.authorDetails?.FirstName?.[0]}</span>
              : <Image
              loader={imageLoader}
                src={`${data?.authorDetails?.ProfileImagePath}`}
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
