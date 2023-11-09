"use client";
import React, { useEffect } from "react";
import CButton from "../Common/CButton";
import { motion,useScroll } from "framer-motion";
// import StartButton from "../StartButton";
import { HiOutlineCursorArrowRipple } from "react-icons/hi2";
import Pic from "./Pic";
import Link from "next/link";

const Home = () => {
    const {scrollY,scrollYProgress}=useScroll();
	useEffect(()=>{
     console.log(scrollY.get())
	},[scrollY])
	return (
		<>
		<section className="w-full h-screen  flex items-center justify-center sticky z-9 top-0">
	    {/* <motion.div 
		className="bg-pink-400 fixed top-20 left-0 h-5 z-10 w-full origin-left" 
		style={{ scaleX: scrollYProgress }} /> */}

			<div className="w-[80vw] h-[50vh] flex flex-col items-center absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] z-9">
				<h6 className="uppercase text-clr2 text-lg mb-4 font-medium tracking-tight">
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
				<h1 className="text-clr1 text-8xl text-center font-medium tracking-tighter overflow-hidden">
				<motion.span
							className="inline-block"
							initial={{ y: "100%" }}
							animate={{ y: "0%" }}
							transition={{ duration: 1 }}
						>
						Chat&nbsp;<Pic></Pic>
		             with anyone <br /> and at anytime{" "}
			         <span className="inline-block relative w-[70px] h-[70px]">
						<HiOutlineCursorArrowRipple className="text-clr2 absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]" />
					 </span>
					 ,Here{" "}
					<br /> chat{" "}
					<span className="inline-block relative w-[100px] h-[100px]">
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
		
		</>
		
	);
};

export default Home;
