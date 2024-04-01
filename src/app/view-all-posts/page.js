
import { Suspense } from "react";
import ViewAllPostsComp from '../components/ViewAllPosts';
import { GET_POSTS_LIST_QUERY } from "../api/query";
import { fetchGraphQl } from "../api/graphicql";

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


export default function ViewAllPosts() {
  
  return (
         <>
           <Suspense fallback={null}>
           <ViewAllPostsComp />
           </Suspense>
            </>
  )
}
