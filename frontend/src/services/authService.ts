import axios from "axios";
import { userType } from "../types/user.types";

export default async  function authenticate(data:userType){
    try{
        const receivedResponse=await axios.post('http://localhost:5000/login',data)
        let token:string=receivedResponse.data.token
        localStorage.setItem('token',token)
        return true
    }
    catch(err){
        console.log(err)
        window.alert('wrong credentials')
        return false
    }
}