import prismadb from "@/lib/prismadb";
import { NextResponse } from "next/server";
const bcrypt = require('bcrypt');

export async function POST(
    req: Request
){
    try {
        const body = await req.json();
        const { email, password } = body;
        if (!email) {
            return new NextResponse("Email is Required", { status: 404 });
        }
        if (!password) {
            return new NextResponse("Password is Required", { status: 404 });
        }
        const ExistingUser = await prismadb.nodelOfficer.findUnique({
            where: {
                email: email
            }
        })
        if(ExistingUser){
            const match = await bcrypt.compare(password,ExistingUser?.password);
            
            if(match){
                return new NextResponse(ExistingUser.id, { status: 200 });
            }
            else {
                return new NextResponse("Incorrect Password", { status: 400 });
            }
        }
        else {
            return new NextResponse("Incorrect Email. No User Found with this email", { status: 404 });
        }
    } catch (error) {
        console.log("[USER Login ERROR]", error);
        return new NextResponse("Internal Error", { status: 500 });
    }
}