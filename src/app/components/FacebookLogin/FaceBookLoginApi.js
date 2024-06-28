import axiosinstance from "@/api/intercept";
import { FaceBookSever } from "./FaceBookServer";

export async function facebookdetailApi(data) {
    // const data = JSON.stringify({
    //     emailId: "",
    //     password: "",
    //     type: "facebook"
    // })
    const result = await axiosinstance.post(`customer/login`, data)
        if (result.data.status == 1) {
            localStorage.setItem("cartItems",JSON.stringify([]))
        localStorage.setItem("email",data?.email)
        FaceBookSever(result)
        }
}