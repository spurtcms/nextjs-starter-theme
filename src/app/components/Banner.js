import moment from 'moment'
import Image from 'next/image'
import React from 'react'

export default function Banner({bannerShow,router}) {

    const imageLoader = ({src}) => {
        return src
      }
      const handleNavigation=(slug)=>{
        router.push(`/posts/${slug}`)
      }
  return (
   <>
    {bannerShow?.length !=0&&<div className="block">
            <Image
            loader={imageLoader}
              src={bannerShow?.[0]?.coverImage}
              alt="spurtCMS Banner"
              className="cursor-pointer"
              width={1200}
              height={1000}
              priority
              onClick={()=>handleNavigation(bannerShow?.[0]?.slug)}
            />
            <div className="flex sm:flex-nowrap flex-wrap mt-8 gap-x-2 gap-y-4 pb-10 mb-8 border-b border-gray-200">
            <div className="w-full max-w-full mt-0 w-full sm:w-7/12">
              <h1 className="text-4xl2 font-bold text-black line-clamp-2 cursor-pointer" onClick={()=>handleNavigation(bannerShow?.[0]?.slug)}>{bannerShow?.[0]?.title}</h1>
              <p className="text-base text-black my-3">{moment(bannerShow?.[0]?.createdOn).format("MMM DD, YYYY")}</p>
              <div className="flex items-center gap-x-2">
              <div class="flex items-center justify-center relative h-8 w-8 overflow-hidden rounded-full bg-slate-300">
                {bannerShow?.[0]?.authorDetails?.ProfileImagePath==""?
                  <span className="text-3xxl text-white">{bannerShow?.[0]?.authorDetails?.FirstName?.[0]}</span>
                : <Image
                loader={imageLoader}
                src={`${bannerShow?.[0]?.authorDetails?.ProfileImagePath}`}
                  alt="spurtCMS Profile Image"
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
              <p className="text-lg text-current font-light line-clamp-4"><div  dangerouslySetInnerHTML={{
          __html: bannerShow?.[0]?.description,
        }}/> </p>
            </div>
          </div>
        </div>}
   </>
  )
}
