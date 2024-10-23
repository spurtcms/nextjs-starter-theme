import React, { Suspense } from 'react'
import PostsPage from './PostsPage'
import { fetchGraphQl } from '@/app/api/graphicql'
import { GET_POSTS_LIST_QUERY, GET_POSTS_SLUG_QUERY } from '@/app/api/query'
import { notFound } from 'next/navigation'

export async function generateMetadata({params}) {

    // let variable_lista={ "limit": 10, "offset": 0,channelId:72,"categoryId":1}

    let variable_lista={ "commonFilter": {"limit": 10,"offset": 0}, "entryFilter": { "categorySlug": params?.slug,}, "AdditionalData": { "authorDetails": true, "categories": true } }
    

    const dtas=await fetchGraphQl(GET_POSTS_LIST_QUERY,variable_lista)
    console.log(dtas,"gfhgd")
   let title=''
   let description=''
   dtas?.ChannelEntriesList?.channelEntriesList.map((response)=>{
    
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

    // let variable_list={ "limit": 10, "offset": 0,"requireData": {
    //   "authorDetails": true
    // }}
    let variable_list={ "commonFilter": {"limit": 10,"offset": 0}, "entryFilter": { "categorySlug": "blog"}, "AdditionalData": { "authorDetails": true, "categories": true } }
    
    const Listdata=await fetchGraphQl(GET_POSTS_LIST_QUERY,variable_list)
    
    
    let variable_slug={"slug": params?.slug,"AdditionalData": { "authorDetails": true,"categories": true} }
    
    const slugdata=await fetchGraphQl(GET_POSTS_SLUG_QUERY,variable_slug)
    console.log(slugdata,"iu734ed")
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


