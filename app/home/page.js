import Link from "next/link"
import Users from "@/app/components/users"
import Server from "@/app/components/server"
export default function () {
     return (

        <>
             <Link href="/">Main</Link> 
             <Users /> 
             <Server />  
        </>
    )
}