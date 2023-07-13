"use client"
//import React,{useEffect, useState} from 'react'
import useSWR from "swr"
function Dashboard() {
  //using useEffect hook 
  // const [data,setData]=useState([])
  // const [isLoading,setIsLoading]=useState(false)
  // const [error,setError]=useState(false)
  // useEffect(()=>{
  //     const getData=async ()=>{
  //       setIsLoading(true);
  //       const res=await fetch("https://jsonplaceholder.typicode.com/posts");
  //       if(!res.ok){
  //         setError(true)
  //       }
  //       const data=await res.json()
  //       setData(data)
  //       setIsLoading(false)
       
  //     }
  //     getData()
  // },[])
  const fetcher = (...args:[RequestInfo, RequestInit]) => fetch(...args).then((res) => res.json())
  const {data,error,isLoading}=useSWR("https://jsonplaceholder.typicode.com/posts",fetcher)
  console.log(data)
  return (
    <div>
      {/* {data.map(item=>(
        <h1>{data?.title}</h1>
      ))} */}
    </div>
  )
}

export default Dashboard