'use server'
import { fetchGraphQl } from "../graphicql"
import { GET_POSTS_LIST_QUERY } from "../query"



export const PostFilterApi = async (limit, offset, cateId) => {
    console.log(cateId,"sccsdcsddcdsd")
    // let variables = { "commonFilter": { "limit": limit, "offset": offset }, "entryFilter": { "categorySlug": cateId, }, "AdditionalData": { "authorDetails": true, "categories": true } }
    let variables =  {
        "commonFilter": {
          "limit": limit,
          "offset": offset,
          "keyword":""

        },
        "entryFilter": {
          "Status": "Publish",
          "categorySlug": cateId, 
        },
        "AdditionalData": {
          "authorDetails": true, 
          "categories": true
        }
      }
    
    let posts = await fetchGraphQl(GET_POSTS_LIST_QUERY, variables)
    return posts
}

export const ViewAllPostApi = async (cateId) => {
    // let variables = { "commonFilter": { "limit": 10, "offset": 0 }, "entryFilter": { "categorySlug": cateId, }, "AdditionalData": { "authorDetails": true, "categories": true } }
    
    let variables = {
        "commonFilter": {
          "limit": 10,
          "offset": 0,
          "keyword":""
        },
        "entryFilter": {
          "Status": "Publish",
          "categorySlug": cateId, 
        },
        "AdditionalData": {
          "authorDetails": true,
          "categories": true
        }
      }
    
    
    
    
    let posts = await fetchGraphQl(GET_POSTS_LIST_QUERY, variables)
    return posts
}
