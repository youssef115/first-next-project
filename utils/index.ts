//import {notFound} from "next/navigation"
import { notFound } from 'next/navigation';
export async function getData(id?:number){ 
        const response = await fetch(
            id?`https://jsonplaceholder.typicode.com/posts/${id}`:'https://jsonplaceholder.typicode.com/posts'
        ,{next:{revalidate:10}});
        if(!response.ok){
            console.log("Faild to fetch data")
            return notFound()
            
            
        }
        const result=await response.json()
        return result
}


  