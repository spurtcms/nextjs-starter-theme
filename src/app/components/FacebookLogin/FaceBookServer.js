'use server'
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
export const FaceBookSever=async(result)=>{
    cookies().set('BearerToken', result.data?.data?.token);
    cookies().set('login',result.data.message)
    cookies().set('verify',password)
    cookies().set('Profile',JSON.stringify(result.data?.data?.user))
    redirect("/")
}

