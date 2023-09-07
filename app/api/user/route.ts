import prismadb from "@/lib/prismadb";

import { NextResponse } from "next/server";
const bcrypt = require('bcrypt');
const saltRounds = 10;

export async function POST(
    req : Request,
    
){
    try {
        const body = await req.json();
        const {email,password} =body;
        if(!email){
            return new NextResponse("Email is Required",{status:404});
        }
        if(!password){
            return new NextResponse("Password is Required",{status: 404});
        }
        const ExistingUser = await prismadb.nodelOfficer.findUnique({
            where:{
                email : email
            }
        }) 
        if(ExistingUser){
            return new NextResponse(`The Email ${email} already exists`,{ status:501});
        }
        const hashedPassword = await bcrypt.hash(password,saltRounds);
        const user = await prismadb.nodelOfficer.create({
            data:{
                email,
                password : hashedPassword
            }
        });
        return  NextResponse.json(user)
    } catch (error) {
        console.log("[USER create ERROR]",error);
        return new NextResponse("Internal Error", { status: 500 });
    }
}