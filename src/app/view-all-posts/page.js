
import { Suspense } from "react";
import ViewAllPostsComp from '../components/ViewAllPosts';


export default function ViewAllPosts() {
  
  return (
         <>
           <Suspense fallback={null}>
           <ViewAllPostsComp />
           </Suspense>
            </>
  )
}
