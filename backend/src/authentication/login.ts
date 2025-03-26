import jwt from 'jsonwebtoken'
import dotenv from 'dotenv'
import { Request,Response } from 'express'

dotenv.config() //loads the varaibles in dotenv

const payload={
    user:process.env.ADMIN,
    password:process.env.ADMIN_PASS,
}
export function loginUser(req:Request,res:Response):any{
    const userName=req.body.user
    const userPass=req.body.password
    if(payload.user!=userName || payload.password!=userPass){
        console.log('err',userName,userPass)
        return res.status(404).send({err:'wrong credentials'})
    }
    if(!process.env.SECRET_KEY)
        throw new Error('secret key undefined')
    const secretkey:jwt.Secret=process.env.SECRET_KEY
    const token=jwt.sign(payload,secretkey,{expiresIn:'1h'})
    return res.status(200).send({token:token})
}
