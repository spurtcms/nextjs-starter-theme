
import { fetchGraphQl } from "./api/graphicql";
import { GET_POSTS_CATEGORYLIST_QUERY, GET_POSTS_LIST_QUERY } from "./api/query";
import HomeServerAction from "./components/Home";


export default async function Home() {
  let variable_category={
    "hierarchylevel": 0,
    "limit":50,
    "offset":0
  }
 let  variable_list={ "limit": 10, "offset": 0,"requireData": {
    "authorDetails": true
  }}

  const [Listdata,postdatas]=await Promise.all([fetchGraphQl(GET_POSTS_CATEGORYLIST_QUERY,variable_category),fetchGraphQl(GET_POSTS_LIST_QUERY,variable_list)])
// const Listdata=await fetchGraphQl(GET_POSTS_CATEGORYLIST_QUERY,variable_category)
// let postdatas=await fetchGraphQl(GET_POSTS_LIST_QUERY,variable_list)
// console.log(postdatas?.channelEntriesList?.channelEntriesList,"postdatas0907");

  return (
    <>
    
    <HomeServerAction Listdata={Listdata} postdatas={postdatas}/>
    
    </>
  );
}
