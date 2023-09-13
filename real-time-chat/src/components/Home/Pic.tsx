import React from "react";
import Image from "next/image";

const Pic = (props: any) => {
	return (
		<div className="p-2 bg-white rounded-lg absolute shadow-lg">
			<Image
				src="/assets/img1.jpg"
				width={props.size}
				height={props.size}
				alt="Picture of the author"
			/>
		</div>
	);
};

export default Pic;
