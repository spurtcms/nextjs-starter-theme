'use client'
import React, { useEffect } from 'react'
import { initFacebookSdk, getFacebookLoginStatus, fbLogin } from "./FacebookSDK";

function FacebookLogin() {
  useEffect(() => {
    console.log("Started use effect");
    initFacebookSdk().then(() => {
      getFacebookLoginStatus().then((response) => {
        if (response == null) {
          console.log("No login status for the person");
        } else {
          console.log(response);
        }
      });
    });
  }, []);

  const login = () => {
    console.log("reached log in button");
    fbLogin().then((response) => {
      console.log(response,'yyyyyyy');
      if (response.status === "connected") {
        console.log("Person is connected");
        facebookdetailApi(response)
      } else {
      }
    });
  };
  
  return (
    <div className="mt-8 flex justify-center items-center">
        
        <button onClick={login} className="flex gap-4 text-center">Sign in with Facebook</button>
     
    
       </div>
  )
}
export default FacebookLogin