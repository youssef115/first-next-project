import { NextRequest, NextResponse } from "next/server"

export const GET=(request:NextRequest)=>{
    return new NextResponse("it's work ",{status:200})
    //2:04:25
}