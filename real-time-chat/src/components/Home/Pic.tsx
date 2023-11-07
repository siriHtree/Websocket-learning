import React from "react";
import Image from "next/image";

const Pic = (props: any) => {
	let size=100
	return (
		<span className="relative inline-block w-[250px] h-[100px]">
			<div className={`p-1 bg-white rounded-3xl absolute shadow-lg flex items-center justify-center`}>
			<Image
		        // style={props.style}
				className="rounded-3xl"
				src='/assets/img1.jpg'
				width={size}
				height={size}
				alt="Picture of the author"
			/>
		</div>
		<div className={`p-1 bg-white rounded-3xl absolute shadow-lg left-[30%] flex items-center justify-center`}>
			<Image
		        // style={props.style}
				className="rounded-3xl"
				src='/assets/img2.jpg'
				width={size}
				height={size}
				alt="Picture of the author"
			/>
		</div>
		<div className={`p-1 bg-white rounded-3xl absolute shadow-lg left-[50%] flex items-center justify-center`}>
			<Image
		        // style={props.style}
				className="rounded-3xl"
				src='/assets/img3.jpg'
				width={size}
				height={size}
				alt="Picture of the author"
			/>
		</div>
		</span>
		
	);
};

export default Pic;
