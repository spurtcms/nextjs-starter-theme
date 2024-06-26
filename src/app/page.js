
import Link from "next/link";
import HomeServerAction from "./components/Home";


export default function Home() {

  return (
    <> 
   <Link href={"view-all-posts"}>view-all-posts</Link> 

    <HomeServerAction/>
    </>
   
  );
}
