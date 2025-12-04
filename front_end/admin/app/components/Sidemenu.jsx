"use client"

import{
    Box,
    Typography,
    Tabs,
    Tab
} from "@mui/material"
import Link from "next/link"
export default function Sidemenu(){
    return (
        <>
        <Box sx={{width: 200 ,bgcolor:"blue",height:"100vh" ,padding:"0"}}>
        <Box>
            <Link href="/dashboard">Dashboard</Link>    
            <Link href="/login">Master</Link>
            </Box>  
 
        </Box>
        </>
    )
}