"use client";
import {useEffect, useState} from 'react'
import ImageCard from './ImageCard';

const InfiniteScroll = () => {
    const [imgData,setImgData]=useState<any>([]);
    const [page,setPage]=useState(1);
    const [isLast,setIsLast]=useState(0);
    const BASE_URL="https://api.unsplash.com/photos/"
    let key="-nkePwn72WF4KMNsfgM-fAse_X6iPK1QHX3Jd14PANk"
    const fetchImages=async()=>{
        try{
            const response = await fetch(`${BASE_URL}?page=${page}`, {
            headers: {
              Authorization: `Client-ID ${key}`,
            },
          });
        const data=await response.json();
        setImgData((prev:any) => [...prev, ...data]);
        }catch(err){
            console.log(err)
        }
        
    }
    useEffect(()=>{
        fetchImages()
    },[page])

  return (
    <section className='w-full min-h-screen flex items-center justify-center pt-[16vh] pb-8'>
       <div className="w-[90%] min-h-screen flex flex-wrap">
        {imgData.length>0
        ? imgData.map((elm:any,i:any)=>
        <ImageCard 
        key={elm.id}
        src={elm.urls.regular}
        isLast={i==imgData.length-1}
        newLimit={()=>setPage(page+1)}
         />)
        :<h1>No Data</h1>}

       </div>
    </section>
  )
}

export default InfiniteScroll