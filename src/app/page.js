import { Suspense } from "react";
import HomePage from "./components/Home";


export default function Home() {

  return (
    <>
    <Suspense fallback={null}>
   <HomePage />
   </Suspense>
    </>
  );
}
