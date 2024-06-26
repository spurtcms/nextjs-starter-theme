import React, { Suspense } from 'react'
import HomePage from './Home'
import { GET_POSTS_CATEGORYLIST_QUERY } from '@/app/api/query'
import { fetchGraphQl } from '@/app/api/graphicql'
import Link from 'next/link'

const HomeServerAction =async () => {
    let variable_category={
      "hierarchylevel": 0,
      "limit":50,
      "offset":0
    }
  const Listdata=await fetchGraphQl(GET_POSTS_CATEGORYLIST_QUERY,variable_category)
  return (
    <div>
       <Link href={"/view-all-posts"}>view-all-posts</Link> 
        <Suspense fallback={null}>
      <HomePage Listdata={Listdata}/>
      </Suspense>
    </div>
  )
}

export default HomeServerAction
