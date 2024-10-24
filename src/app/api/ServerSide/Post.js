'use server'
import { fetchGraphQl } from "../graphicql"
import { GET_POSTS_LIST_QUERY } from "../query"



export const PostFilterApi = async (limit, offset, cateId) => {
    let variables = { "commonFilter": { "limit": limit, "offset": offset }, "entryFilter": { "categorySlug": cateId, }, "AdditionalData": { "authorDetails": true, "categories": true } }
    let posts = await fetchGraphQl(GET_POSTS_LIST_QUERY, variables)
    return posts
}

export const ViewAllPostApi = async (cateId) => {
    let variables = { "commonFilter": { "limit": 10, "offset": 0 }, "entryFilter": { "categorySlug": cateId, }, "AdditionalData": { "authorDetails": true, "categories": true } }
    let posts = await fetchGraphQl(GET_POSTS_LIST_QUERY, variables)
    return posts
}