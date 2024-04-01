import { Suspense } from "react";
import HomePage from "./components/Home";
import { fetchGraphQll } from "./api/graphicql";
import { GET_POSTS_CATEGORYLIST_QUERY } from "./api/query";


export default async function Home() {

  let variable_category={"hierarchylevel": 0}
  const Listdata=await fetchGraphQll(GET_POSTS_CATEGORYLIST_QUERY,variable_category)
 

  return (
    <>
    <Suspense fallback={null}>
    <HomePage Listdata={Listdata}/>
   </Suspense>
    </>
  );
}
