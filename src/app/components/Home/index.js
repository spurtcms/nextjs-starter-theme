// import React, { Suspense } from 'react'
// import HomePage from '../../addOns/Home'
import { GET_POSTS_CATEGORYLIST_QUERY, GET_POSTS_LIST_QUERY } from '@/app/api/query'
import { fetchGraphQl } from '@/app/api/graphicql'
import {AddonsComponent} from '../../../../addOns/addonsconfig'

const HomeServerAction =async () => {
    let variable_category={
      "hierarchylevel": 0,
      "limit":50,
      "offset":0
    }
   let  variable_list={ "limit": 10, "offset": 0,"requireData": {
      "authorDetails": true
    }}
  const Listdata=await fetchGraphQl(GET_POSTS_CATEGORYLIST_QUERY,variable_category)
  let postdatas=await fetchGraphQl(GET_POSTS_LIST_QUERY,variable_list)
  return (
    <div>
        {/* <Suspense fallback={null}> */}
        {AddonsComponent.HomePage&& <AddonsComponent.HomePage Listdata={Listdata} postdatas={postdatas}
        />}
      {/* <HomePage Listdata={Listdata} postdatas={postdatas}/> */}
      {/* </Suspense> */}
    </div>
  )
}

export default HomeServerAction
