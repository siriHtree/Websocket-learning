import { useEffect, useRef } from 'react';
import Image from 'next/image';


const ImageCard = ({src,id,isLast,newLimit}:any) => {
   const ImageRef=useRef(null);

    //IntersectionObserver
    useEffect(()=>{
        if(!ImageRef?.current) return;
        const oberver=new IntersectionObserver(([entry])=>{
            if(isLast && entry.isIntersecting){
                newLimit();
                oberver.unobserve(entry.target);
            }
        })
        oberver.observe(ImageRef.current);


    },[isLast])
  return (
    <Image ref={ImageRef} className='m-2' src={src} width={0}
    height={0}
    sizes="10vw"
    style={{ width: 'auto', height: '40vh' }}  alt=''></Image>
  )
}

export default ImageCard