import { Suspense } from "react";
import PostsPage from "@/app/components/PostsPage";

export default function Posts({params}) {

  return (
    <>
     <Suspense fallback={null}>
    <PostsPage params={params}/>
    </Suspense>
    </>
  );
}
