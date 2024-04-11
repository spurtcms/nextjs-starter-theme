import React, { Suspense } from 'react'
import HomePage from './Home'
import { GET_POSTS_CATEGORYLIST_QUERY } from '@/app/api/query'
import { fetchGraphQl } from '@/app/api/graphicql'

const HomeServerAction =async () => {
    let variable_category={"hierarchylevel": 0}
  const Listdata=await fetchGraphQl(GET_POSTS_CATEGORYLIST_QUERY,variable_category)
  return (
    <div>
        <Suspense fallback={null}>
      <HomePage Listdata={Listdata}/>
      </Suspense>
    </div>
  )
}

export default HomeServerAction
