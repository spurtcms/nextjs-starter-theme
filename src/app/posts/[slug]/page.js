'use client'
import Image from "next/image";
import Header from "../../components/header";
import { useEffect, useState } from "react";
import { fetchGraphQl } from "@/app/api/graphicql";
import Link from "next/link";
import moment from "moment";

export default function Detail({params}) {
  const [postes,setPostes]=useState([])
  let {slug}=params
  console.log(postes?.channelEntriesList?.channelEntry,'params');
  useEffect(()=>{
    fetchGraphQl(setPostes,slug)
  },[slug])

  const imageLoader = ({src}) => {
   
    return src
  }
  return (
    <main className="container min-h-screen mx-auto max-w-screen-lg">
        <Header/>
        <div className="md:lg-0 px-4">
          <nav aria-label="breadcrumb"> 
            <ol class="flex flex-wrap space-x-2 items-center mb-8">
            <Link href={"/"}><li><p class="text-xl text-gray-600 flex justify-start gap-2 items-center"> <img src="/img/home.svg" className="h-5" />Home</p></li> </Link>
              <li> <img src="/img/arrow-breadcrumbs.svg" /> </li>
              <li class="text-black text-xl line-clamp-1 w-80" aria-current="page">{postes?.channelEntriesList?.channelEntry?.title}</li> 
            </ol>
          </nav>
          <h1 className="text-4xl2 text-black font-bold mb-4">{postes?.channelEntriesList?.channelEntry?.title}</h1>
          <div className="flex items-center gap-x-2 mb-6">
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
          <div className="block mb-8">
            <Image
             loader={imageLoader}
              src={postes?.channelEntriesList?.channelEntry?.coverImage}
              alt="spurtCMS Banner"
              className="dark:invert"
              width={12000}
              height={1000}
              priority
              layout="responsive"
              placeholder="blur"
              blurDataURL={"/img/no-image.png"}
            />
          </div>
          <p className="text-base text-black mb-1">{moment(postes?.channelEntriesList?.channelEntry?.createdOn).format("MMM DD, YYYY")} </p>
          <div className="text-lg text-black font-light leading-normal mb-6" dangerouslySetInnerHTML={{
            __html: postes?.channelEntriesList?.channelEntry?.description,
          }}/>
          {/* <p className="text-lg text-black font-light leading-normal mb-6">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Qii uid dubitas igitur mutare principia naturae? Ita multo esse sanguine profuso in laetitia et in sace victoria est mortuus. Esse Omnia contraria, quos etiam insanos esse vultis. Ita multo esse sanguine profuso in laetitia et in victoria est mortuus. </p>
          <h3 className="text-2xl text-black font-medium mb-3">Managing Backpressure in Akka Streams</h3>
          <p className="text-lg text-black font-light leading-normal mb-6">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Qii uid dubitas igitur mutare principia naturae? Ita multo esse sanguine profuso in laetitia et in sace victoria est mortuus. Esse Omnia contraria, quos etiam insanos esse vultis. Ita multo esse sanguine profuso in laetitia et in victoria est mortuus. </p>
          <h3 className="text-2xl text-black font-medium mb-3">Managing Backpressure in Akka Streams</h3>
          <p className="text-lg text-black font-light leading-normal mb-3">Sometimes you might encounter slow consumers that cannot process elements as fast as they are emitted. In such cases, strategies like throttle can be useful:</p>
          <p className="text-lg text-black font-light leading-normal mb-3">
            val elementsPerSecond = 1 <br /> 
            Source(1 to 100)   <br /> 
            &nbsp;&nbsp; .throttle(elementsPerSecond, 1.second)   <br /> 
            &nbsp;&nbsp; .runWith(Sink.foreach(println))
          </p>
          <p className="text-lg text-black font-light leading-normal mb-6">The throttle method limits the number of elements passing downstream per time unit, thereby ensuring that your consumer is not overwhelmed.</p>
          <h3 className="text-2xl text-black font-medium mb-3">Managing Backpressure in Akka Streams</h3>
          <p className="text-lg text-black font-light leading-normal mb-6">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Qii uid dubitas igitur mutare principia naturae? Ita multo esse sanguine profuso in laetitia et in sace victoria est mortuus. Esse Omnia contraria, quos etiam insanos esse vultis. Ita multo esse sanguine profuso in laetitia et in victoria est mortuus. </p>
          <h3 className="text-2xl text-black font-medium mb-3">Managing Backpressure in Akka Streams</h3>
          <p className="text-lg text-black font-light leading-normal mb-3">Sometimes you might encounter slow consumers that cannot process elements as fast as they are emitted. In such cases, strategies like throttle can be useful:</p>
          <p className="text-lg text-black font-light leading-normal mb-3">
            val elementsPerSecond = 1 <br /> 
            Source(1 to 100)   <br /> 
            &nbsp;&nbsp; .throttle(elementsPerSecond, 1.second)   <br /> 
            &nbsp;&nbsp; .runWith(Sink.foreach(println))
          </p> */}
          <div className="border-b border-gray-200 block mb-8 mt-10"></div>
          <h1 className="text-3xxl font-bold text-black mb-10"> More Stories </h1>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-20 gap-y-8 mb-8">
            <div>
              <a href="javascript:void(0)" className="mb-6 block">
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
                  <a href="javascript:void(0)" className="text-primary text-base"> Sasha Bondar </a>
                </div>
              </div>
            </div>
            <div>
              <a href="javascript:void(0)" className="mb-6 block">
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
                  <a className="text-primary text-base"> Sasha Bondar </a>
                </div>
              </div>
            </div>
          </div>
        </div>
    </main>
  );
}
