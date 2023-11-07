"use client";
import React from "react";
import CButton from "../Common/CButton";
import { motion } from "framer-motion";
// import StartButton from "../StartButton";
import { HiOutlineCursorArrowRipple } from "react-icons/hi2";
import Pic from "./Pic";


const Home = () => {
	return (
		<section className="w-full h-screen bg-bg1 flex items-center justify-center">
			<div className="flex flex-col items-center">
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
				<h1 className="text-clr1 text-8xl text-center">
					Chat&nbsp;<Pic></Pic>
		
			with anyone <br /> and at anytime{" "}
					<HiOutlineCursorArrowRipple className="text-clr2" /> ,Here{" "}
					<br /> chat{" "}
					<span className="">
						<CButton emphasis={true}>Now</CButton>{" "}
					</span>
					with others
				</h1>
			</div>
		
			

		</section>
	);
};

export default Home;
