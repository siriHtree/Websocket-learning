"use client";
import React, { useEffect,useRef } from "react";
import CButton from "../Common/CButton";
import { motion,useScroll } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
// import StartButton from "../StartButton";
import { HiOutlineCursorArrowRipple } from "react-icons/hi2";
import Pic from "./Pic";
import Link from "next/link";

const Home = () => {
	const main=useRef(null)
	const tl=useRef();
	gsap.registerPlugin(ScrollTrigger)

	useEffect(()=>{
		let ctx=gsap.context(()=>{
			gsap.timeline({
				scrollTrigger:{
					trigger:"#section2",
					start:"top 90%",
					end:"top 50%",
					scrub:true,
				}

			}).to("#headText",{
				color:'white',
ease: "expoScale(0.5,7,none)",
			},'a')
			.to(".hide_them",{
				opacity:0,
				display:'none'
			},'a').to("#secText",{
				color:'white'
			},'a')


		},main)

	},[])
	return (
		<main ref={main}>
		<section className="w-full h-screen  flex items-center justify-center sticky z-9 top-0">
	    {/* <motion.div 
		className="bg-pink-400 fixed top-20 left-0 h-5 z-10 w-full origin-left" 
		style={{ scaleX: scrollYProgress }} /> */}

			<div className="w-[80vw] h-[50vh] flex flex-col items-center absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] z-9">
				<h6 id="secText"  className="uppercase text-clr2 text-xl mb-4 font-medium tracking-tight">
					<span className="inline-block overflow-hidden">
						<motion.span
							className="inline-block"
							initial={{ y: "100%" }}
							animate={{ y: "0%" }}
							transition={{ duration: 1 }}
						>
							Group chat is also available
						</motion.span>{" "}
					</span>
				</h6>
				<h1 
				// style={{transition:"all cubic-bezier(0.95, 0.05, 0.795, 0.035) 3s"}}
				id="headText" 
				className="text-clr1 text-9xl text-center font-normal overflow-hidden">
				<motion.span
							className="inline-block"
							initial={{ y: "100%" }}
							animate={{ y: "0%" }}
							transition={{ duration: 1 }}
						>
						Chat&nbsp;<Pic></Pic>
		             with anyone <br /> and at anytime{" "}
			         <span className="inline-block relative w-[70px] h-[70px] hide_them">
						<HiOutlineCursorArrowRipple className="text-clr2 absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]" />
					 </span>
					 {" "},Here{" "}
					<br /> chat{" "}
					<span className="inline-block relative w-[100px] h-[100px] hide_them">
						<div className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
							<Link href="/chat">
							<CButton emphasis={true} home={true}>Now</CButton>
							</Link>
						
						</div>
					</span>
					{' '} with others	
						</motion.span>
					
				</h1>
			</div>
		
			

		</section>
		<section id="section2" className="w-full h-screen bg-clr2"></section>
		</main>
		
	);
};

export default Home;
