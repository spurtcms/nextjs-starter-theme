import React, { Suspense } from 'react'
import PostsPage from './PostsPage'
import { fetchGraphQl } from '@/app/api/graphicql'
import { GET_POSTS_LIST_QUERY, GET_POSTS_SLUG_QUERY } from '@/app/api/query'
import { notFound } from 'next/navigation'

export async function generateMetadata({params}) {

    let variable_lista={ "limit": 10, "offset": 0,channelId:72}
    const dtas=await fetchGraphQl(GET_POSTS_LIST_QUERY,variable_lista)
   let title=''
   let description=''
   dtas?.channelEntriesList?.channelEntriesList.map((response)=>{
    
      if(response.slug==params.slug){
        title = response.metaTitle
        description=response.metaDescription
      }
    })
    return {
      title,
      description,
    };
   
  }

export const PostServerAction =async ({params}) => {

    let variable_list={ "limit": 10, "offset": 0,channelId:72}
    const Listdata=await fetchGraphQl(GET_POSTS_LIST_QUERY,variable_list)
    
    
    let variable_slug={ "limit": 10, "offset": 0,"slug": params.slug}
    
    const slugdata=await fetchGraphQl(GET_POSTS_SLUG_QUERY,variable_slug)
    if (!slugdata) {
      return notFound();
    }
  return (
    <>
    <Suspense fallback={null}>
    <PostsPage params={params} Listdata={Listdata} slugdata={slugdata}/>
    </Suspense>
    </>
  )
}


