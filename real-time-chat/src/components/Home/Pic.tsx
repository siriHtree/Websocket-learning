import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const Pic = (props: any) => {
	let size=100
	return (
		<span className="relative inline-block w-[200px] h-[100px] hide_them">
			<motion.div 
			initial={{ left: "-10%",
			            top:'50%',
		              opacity:0 }}
			animate={{left:"20%",top:"60%",opacity:1 }}
			transition={{ duration: 1 }}
			className={`p-1 bg-white rounded-3xl absolute shadow-lg flex items-center justify-center left-[20%] top-[60%] translate-x-[-50%] translate-y-[-50%]`}>
			<Image
		        // style={props.style}
				className="rounded-3xl"
				src='/assets/img1.jpg'
				width={size}
				height={size}
				alt="Picture of the author"
			/>
		</motion.div>
		<motion.div 
		initial={{ left: "20%",
		top:'50%',
	  opacity:0 }}
animate={{left:"50%",top:"60%",opacity:1 }}
transition={{ duration: 1 }}
		className={`p-1 bg-white rounded-3xl absolute shadow-lg left-[50%] flex items-center justify-center top-[60%] translate-x-[-50%] translate-y-[-50%]`}>
			<Image
		        // style={props.style}
				className="rounded-3xl"
				src='/assets/img2.jpg'
				width={size}
				height={size}
				alt="Picture of the author"
			/>
		</motion.div>
		<motion.div 
		initial={{ left: "50%",
		top:'50%',
	  opacity:0 }}
animate={{left:"75%",top:"60%",opacity:1 }}
transition={{ duration: 1 }}
		className={`p-1 bg-white rounded-3xl absolute shadow-lg left-[75%] flex items-center justify-center top-[60%] translate-x-[-50%] translate-y-[-50%]`}>
			<Image
		        // style={props.style}
				className="rounded-3xl"
				src='/assets/img3.jpg'
				width={size}
				height={size}
				alt="Picture of the author"
			/>
		</motion.div>
		</span>
		
	);
};

export default Pic;
