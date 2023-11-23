"use client"
import {useEffect,useRef} from 'react';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Inter } from "next/font/google";

//Components
import Nav from "@/components/Nav/Nav";
const inter = Inter({ subsets: ["latin"] });


const Main = ({children}:{children:React.ReactNode}) => {
    const main=useRef(null)
	// const tl=useRef();
	// gsap.registerPlugin(ScrollTrigger)
    // useEffect(()=>{
	// 	let ctx=gsap.context(()=>{
	// 		const tl=gsap.timeline({
	// 			scrollTrigger:{
	// 				trigger:"#section2",
	// 				start:"top 70%",
	// 				end:"top 50%",
	// 				scrub:true,
	// 			}

	// 		});
	// 		tl.to("#headText",{
	// 			color:'white',
    //             ease: "expoScale(0.5,7,none)",
	// 		},'a')
	// 		.to(".hide_them",{
	// 			opacity:0,

	// 		},'a').to(".head_text_alt_color",{
    //             color:"#F8BD9A"
    //         }).to("#secText",{
	// 			color:'white',

	// 		}).to("#logo_color_flip1",{
    //             color:"white",
    //         }).to("#logo_color_flip2",{
    //             color:"#F5A77A",
    //         }).to("#home_button_text",{
    //             color:'white',
    //         }).to("#home_button",{
    //             background:"white",
    //         }).to("#home_button_text_emphasis",{
    //             color:"#1E1F30",
    //         })
	// 		.to(".hide_them",{
    //             width:0,
    //             ease: "expoScale(0.5,7,none)",
	// 		})


	// 	},main)

	// },[])
  return (
    <main ref={main} className={`w-full min-h-screen bg-bg1 ${inter.className}`}>
		<Nav />
		{children}
	</main>
  )
}

export default Main