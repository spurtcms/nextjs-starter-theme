import React from 'react'
import Link from 'next/link'
import moment from "moment";
import Image from 'next/image';
export default function Post({data}) {

    const imageLoader = ({src}) => {
   
        return src
      }
  return (
   <>
    <div>
            <Link href={`/posts/${data.id}`}>
            <a  className="mb-6 block">
            <Image
            loader={imageLoader}
                src={data.coverImage}
                alt="spurtCMS card image"
                className="dark:invert"
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
            <p className="text-lg text-black font-light line-clamp-3 mb-3 "><div  dangerouslySetInnerHTML={{
          __html: data.description,
        }}/> </p>
            <div className="flex items-center gap-x-2">
              <Image
                src="/img/profile-user.svg"
                alt="spurtCMS Profile Image"
                className="dark:invert"
                width={32}
                height={32}
                priority
              />
              <div className="">
                <a  className="text-primary text-base"> Sasha Bondar </a>
              </div>
            </div>
          </div>
   </>
  )
}
