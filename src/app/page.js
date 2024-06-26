
import Link from "next/link";
import HomeServerAction from "./components/Home";


export default function Home() {

  return (
    <> <HomeServerAction/>
   <Link href={"view-all-posts"}>view-all-posts</Link> 
    </>
   
  );
}
