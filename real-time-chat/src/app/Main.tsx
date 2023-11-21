"use client"
import {useEffect,useRef} from 'react';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
//Components
import Nav from "@/components/Nav/Nav";

const Main = ({children}:{children:React.ReactNode}) => {
    const main=useRef(null)
	const tl=useRef();
	gsap.registerPlugin(ScrollTrigger)
    useEffect(()=>{
		let ctx=gsap.context(()=>{
			gsap.timeline({
				scrollTrigger:{
					trigger:"#section2",
					start:"top 70%",
					end:"top 50%",
					scrub:true,
				}

			}).to("#headText",{
				color:'white',
                ease: "expoScale(0.5,7,none)",
			},'a')
			.to(".hide_them",{
				opacity:0,
                width:0,
                ease: "expoScale(0.5,7,none)",
                duration:5,
            

			},'a').to(".head_text_alt_color",{
                color:"#F8BD9A"
            }).to("#secText",{
				color:'white'
			}).to("#logo_color_flip1",{
                color:"white"
            }).to("#logo_color_flip2",{
                color:"#F5A77A"
            }).to("#home_button_text",{
                color:'white'
            }).to("#home_button",{
                background:"white",
            }).to("#home_button_text_emphasis",{
                color:"#1E1F30"

            })


		},main)

	},[])
  return (
    <main ref={main} className="w-full min-h-screen bg-bg1">
		<Nav />
		{children}
	</main>
  )
}

export default Main