import { Suspense } from "react";
import PostsPage from "@/app/components/PostsPage";

export async function generateMetadata({params}) {
  const title = params.slug

  return {
    title,
    
  };
}
export default function Posts({params}) {

  return (
    <>
     <Suspense fallback={null}>
    <PostsPage params={params}/>
    </Suspense>
    </>
  );
}
