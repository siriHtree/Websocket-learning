import ChatScreen from "@/components/chat/ChatScreen";
import React from "react";

const page = () => {

	return (
		<section className="w-full h-screen flex">
			{/* <div className="w-[30%] h-screen shadow-lg relative z-9"></div> */}
			<ChatScreen />
		</section>
	);
};

export default page;
