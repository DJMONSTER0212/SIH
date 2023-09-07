"use client";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

import {useState }from "react"
import { Input } from "@/components/ui/input";
import Link from "next/link";

export default function Home() {
  const [email,setEmail] = useState("")
  const [loading,setLoading] = useState(false);

  const [password,setPassword] = useState("")

  const handleClick = async ()=>{
    setLoading(true)
    try {
          
    } catch (error) {
      
    }
    
  }
  return (
    <div className="container">
      <div className="gap- justify-center h-screen items-center flex flex-col ">
        <Card className="w-1/2 lg:h-1/2 sm:h-2/3">
          <CardHeader>
            <CardTitle>Login</CardTitle>
            <CardDescription>Login to Continue</CardDescription>
          </CardHeader>
          <CardContent className="flex flex-col justify-between">
            <Input disabled={loading} onChange={(e)=>setEmail(e.target.value)} placeholder="Email" className="mb-5" type="email"/>
            <Input disabled={loading} onChange={(e)=>setPassword(e.target.value)} placeholder="Password" type="password"/>
          </CardContent>
          <CardFooter className="flex lg:flex-row-reverse flex-col justify-between">
            <Button className="lg:w-2/5 w-full mb-3" disabled={loading} onClick={handleClick} variant="default">Login</Button>
            <p className="text-blue-700 hover:underline"><Link href={'/forgotPassword'}>Forgot Password? </Link></p>
          </CardFooter>
        </Card>
      </div>
    </div>
    
  )
}
