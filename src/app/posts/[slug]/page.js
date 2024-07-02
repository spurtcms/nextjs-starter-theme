// import { fetchGraphQl } from "@/app/api/graphicql";
// import { GET_POSTS_LIST_QUERY } from "@/app/api/query";
import { PostServerAction } from "@/app/components/Posts";

export default function Posts({params}) {

  return (
 <PostServerAction params={params}/>
  );
}
// export async function generateStaticParams() {
//   let variable_list={ "limit": 10, "offset": 0,"requireData": {
//     "authorDetails": true
//   }}
//   const Listdata=await fetchGraphQl(GET_POSTS_LIST_QUERY,variable_list)
//   return Listdata?.channelEntriesList?.channelEntriesList?.map((post) => ({
//     slug: post.slug,
//   }));
// }