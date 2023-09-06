"use client";
import React from "react";
import ChatBar from "./ChatBar";

import { useSocket } from "@/context/SocketContext";

const ChatScreen = () => {
	const { socket, messages } = useSocket();
	return (
		<section className="w-full h-screen">
			<div className="w-full h-[90vh] bg-slate-100 flex p-4 justify-end flex-col">
				{messages.map((elm, i) => {
					return (
						<div
							key={`dlkfjeif${i}`}
							className={`w-full flex ${
								(socket && socket.id) === elm.id
									? "justify-end"
									: "justify-start"
							} mt-4`}
						>
							<div className="px-4 py-2 bg-purple-600 w-fit rounded-lg">
								<p className="text-white">{elm.text}</p>
							</div>
						</div>
					);
				})}
			</div>
			<ChatBar></ChatBar>
		</section>
	);
};

export default ChatScreen;
