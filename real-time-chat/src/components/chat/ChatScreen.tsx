"use client";
import React from "react";
import ChatBar from "./ChatBar";

import { useSocket } from "@/context/SocketContext";
import User from "./User";

const ChatScreen = () => {
	const { socket, messages } = useSocket();
	return (
		<div className="w-[100%] h-screen flex flex-col items-center justify-end">
			{/* <User /> */}
			<div className="w-[94%] h-[78vh] flex p-4 justify-end flex-col">
				{messages.map((elm, i) => {
					return (
						<div
							key={`dlkfjeif${i}`}
							className={`w-full flex ${
								(socket && socket.id) === elm.id
									? "items-end"
									: "items-start"
							} mt-4 flex-col`}
						>
							<div className="px-4 py-2 bg-clr2 w-fit rounded-2xl">
								<p className="text-white">{elm.text}</p>
							</div>
							<h6 className="mr-1 font-normal">{elm.name}</h6>
						</div>
					);
				})}
			</div>
			<ChatBar></ChatBar>
		</div>
	);
};

export default ChatScreen;
