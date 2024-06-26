// import React, { Suspense } from 'react'
import HomePage from './Home'
import { GET_POSTS_CATEGORYLIST_QUERY, GET_POSTS_LIST_QUERY } from '@/app/api/query'
import { fetchGraphQl } from '@/app/api/graphicql'

const HomeServerAction =async () => {
    let variable_category={
      "hierarchylevel": 0,
      "limit":50,
      "offset":0
    }
  const Listdata=await fetchGraphQl(GET_POSTS_CATEGORYLIST_QUERY,variable_category)
  let variable_list={ "limit": 10, "offset": 0,"requireData": {
    "authorDetails": true
  }}
let postdatas=await fetchGraphQl(GET_POSTS_LIST_QUERY,variable_list)
  return (
    <div>
        {/* <Suspense fallback={null}> */}
      <HomePage Listdata={Listdata} postes={postdatas}/>
      {/* </Suspense> */}
    </div>
  )
}

export default HomeServerAction
