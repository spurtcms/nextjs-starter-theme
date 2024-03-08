'use client'
import Image from "next/image";
import Header from "./header";
import { useEffect, useState } from "react";
import { fetchGraphQl } from "./api/graphicql";
import moment from 'moment';

export default function Home() {
  const [postes,setPostes]=useState([])
  useEffect(()=>{
    fetchGraphQl(setPostes)
  },[])
  const imageLoader = ({src}) => {
    console.log(src,'3434343');
    return src
  }
  // console.log(postes,'postes');
  return (
    <main className="container min-h-screen mx-auto max-w-screen-lg">
        <Header/>
        <div className="block">
            <Image
              src="/img/banner.svg"
              alt="spurtCMS Banner"
              className="dark:invert"
              width={12000}
              height={1000}
              priority
            />
        </div>
        {/* banner */}
        <div className="md:lg-0 px-4">         
          <div className="flex sm:flex-nowrap flex-wrap mt-8 gap-x-2 gap-y-4 pb-10 mb-8 border-b border-gray-200">
            <div className="w-full max-w-full mt-0 w-full sm:w-7/12">
              <h1 className="text-4xl2 font-bold text-black">From Server-side Rendering to Static Generation</h1>
              <p className="text-base text-black my-3">Mar 2, 2024</p>
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
            <div className="w-full max-w-full w-full sm:w-5/12">
              <p className="text-lg text-black font-light">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Qii uid dubitas igitur mutare principia naturae? Ita multo esse sanguine profuso in laetitia et in sace victoria est mortuus. Esse Omnia contraria, quos etiam insanos esse vultis. Ita multo esse sanguine profuso in laetitia et in victoria est mortuus. </p>
            </div>
          </div>
          <div className="flex flex-nowrap flex-row gap-x-2 pb-4 mb-4 justify-start overflow-auto">
            <a  className="whitespace-nowrap px-6 py-2 rounded-3xl border border-gray-200 font-base text-gray-600 leading-4 hover:text-white hover:bg-gray-500 hover:border-gray-500"> All </a>
            <a  className="whitespace-nowrap px-6 py-2 rounded-3xl border border-gray-200 font-base text-gray-600 leading-4 hover:text-white hover:bg-gray-500 hover:border-gray-500"> Articles </a>
            <a  className="whitespace-nowrap px-6 py-2 rounded-3xl border border-gray-200 font-base text-gray-600 leading-4 hover:text-white hover:bg-gray-500 hover:border-gray-500"> Blogs </a>
            <a  className="whitespace-nowrap px-6 py-2 rounded-3xl border border-gray-200 font-base text-gray-600 leading-4 hover:text-white hover:bg-gray-500 hover:border-gray-500"> Career </a>
            <a  className="whitespace-nowrap px-6 py-2 rounded-3xl border border-gray-200 font-base text-gray-600 leading-4 hover:text-white hover:bg-gray-500 hover:border-gray-500"> Automation </a>
            <a  className="whitespace-nowrap px-6 py-2 rounded-3xl border border-gray-200 font-base text-gray-600 leading-4 hover:text-white hover:bg-gray-500 hover:border-gray-500"> Managing </a>
            <a  className="whitespace-nowrap px-6 py-2 rounded-3xl border border-gray-200 font-base text-gray-600 leading-4 hover:text-white hover:bg-gray-500 hover:border-gray-500"> Engineering </a>
            <a className="whitespace-nowrap px-6 py-2 rounded-3xl border border-gray-200 font-base text-gray-600 leading-4 hover:text-white hover:bg-gray-500 hover:border-gray-500"> Soft Skills </a>
            <a  className="whitespace-nowrap px-6 py-2 rounded-3xl border border-gray-200 font-base text-gray-600 leading-4 hover:text-white hover:bg-gray-500 hover:border-gray-500"> Design </a>
          </div>
          {/* nav */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-20 gap-y-8">
            {console.log(postes?.channelEntriesList?.channelEntryList?.channelEntryList)




          }
          {postes?.channelEntriesList?.channelEntryList?.channelEntryList?.map((data,index)=>(
          
            <div key={data.id}>
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
              <h1 className="text-3xxl font-bold line-clamp-2"> <a  className="text-black hover:underline  leading-[2.625rem] line-clamp-2">{data.title}</a> </h1>
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
           
          ))}
            
             {/* <div>
              <a  className="mb-6 block">
              <Image
                  src="/img/card-img2.svg"
                  alt="spurtCMS card image"
                  className="dark:invert"
                  width={1000}
                  height={1000}
                  priority
                />
              </a>
              <h1 className="text-3xxl font-bold "> <a href="" className="text-black hover:underline inline-flex leading-6">Deploying Next.js Apps</a> </h1>
              <p className="text-base text-black my-3">Mar 2, 2024</p>
              <p className="text-lg text-black font-light line-clamp-3 mb-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Qii uid dubitas igitur mutare principia naturae? Ita multo esse sanguine profuso in laetitia et in sace victoria est mortuus. Esse Omnia contraria, quos etiam insanos esse vultis. Ita multo esse sanguine profuso in laetitia et in victoria est mortuus. </p>
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
            </div> */}
           {/* <div>
              <a href="javascript:void(0)" className="mb-6 block">
              <Image
                  src="/img/card-img3.svg"
                  alt="spurtCMS card image"
                  className="dark:invert"
                  width={1000}
                  height={1000}
                  priority
                />
              </a>
              <h1 className="text-3xxl font-bold "> <a href="" className="text-black hover:underline inline-flex leading-6">Deploying Next.js Apps</a> </h1>
              <p className="text-base text-black my-3">Mar 2, 2024</p>
              <p className="text-lg text-black font-light line-clamp-3 mb-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Qii uid dubitas igitur mutare principia naturae? Ita multo esse sanguine profuso in laetitia et in sace victoria est mortuus. Esse Omnia contraria, quos etiam insanos esse vultis. Ita multo esse sanguine profuso in laetitia et in victoria est mortuus. </p>
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
                  <a href="javascript:void(0)" className="text-primary text-base"> Sasha Bondar </a>
                </div>
              </div>
            </div>
            <div>
              <a href="javascript:void(0)" className="mb-6 block">
              <Image
                  src="/img/card-img4.svg"
                  alt="spurtCMS card image"
                  className="dark:invert"
                  width={1000}
                  height={1000}
                  priority
                />
              </a>
              <h1 className="text-3xxl font-bold "> <a href="" className="text-black hover:underline inline-flex leading-6">Deploying Next.js Apps</a> </h1>
              <p className="text-base text-black my-3">Mar 2, 2024</p>
              <p className="text-lg text-black font-light line-clamp-3 mb-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Qii uid dubitas igitur mutare principia naturae? Ita multo esse sanguine profuso in laetitia et in sace victoria est mortuus. Esse Omnia contraria, quos etiam insanos esse vultis. Ita multo esse sanguine profuso in laetitia et in victoria est mortuus. </p>
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
                  <a href="javascript:void(0)" className="text-primary text-base"> Sasha Bondar </a>
                </div>
              </div>
            </div> */}
          </div>
          {/* Grid */}
          <div className="border-b border-gray-200 block mb-8 mt-10"></div>
          <h1 className="text-3xxl font-bold text-black mb-10"> More Stories </h1>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-20 gap-y-8 mb-8">
            <div>
              <a  className="mb-6 block">
              <Image
                  src="/img/card-img5.svg"
                  alt="spurtCMS card image"
                  className="dark:invert"
                  width={1000}
                  height={1000}
                  priority
                />
              </a>
              <h1 className="text-3xxl font-bold "> <a href="" className="text-black hover:underline inline-flex leading-6">Deploying Next.js Apps</a> </h1>
              <p className="text-base text-black my-3">Mar 2, 2024</p>
              <p className="text-lg text-black font-light line-clamp-3 mb-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Qii uid dubitas igitur mutare principia naturae? Ita multo esse sanguine profuso in laetitia et in sace victoria est mortuus. Esse Omnia contraria, quos etiam insanos esse vultis. Ita multo esse sanguine profuso in laetitia et in victoria est mortuus. </p>
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
            <div>
              <a  className="mb-6 block">
              <Image
                  src="/img/card-img6.svg"
                  alt="spurtCMS card image"
                  className="dark:invert"
                  width={1000}
                  height={1000}
                  priority
                />
              </a>
              <h1 className="text-3xxl font-bold "> <a href="" className="text-black hover:underline inline-flex leading-6">Deploying Next.js Apps</a> </h1>
              <p className="text-base text-black my-3">Mar 2, 2024</p>
              <p className="text-lg text-black font-light line-clamp-3 mb-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Qii uid dubitas igitur mutare principia naturae? Ita multo esse sanguine profuso in laetitia et in sace victoria est mortuus. Esse Omnia contraria, quos etiam insanos esse vultis. Ita multo esse sanguine profuso in laetitia et in victoria est mortuus. </p>
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
          </div>
        </div>
    </main>
  );
}
