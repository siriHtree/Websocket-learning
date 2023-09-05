"use client";
import { useEffect, useState } from "react";
import { io } from "socket.io-client";

const Chat = () => {
	const [message, setMessage] = useState("");
	const [messages, setMessages] = useState<any>([]);
	const [socket, setSocket] = useState<any>(null);

	useEffect(() => {
		console.log("Connecting to WebSocket server...");
		const newSocket = io("http://localhost:3000/", {
			transports: ["websocket"],
		});
		newSocket.on("connect", () => {
			console.log("connected to websocket server");
		});
		newSocket.on("message", (newMessage) => {
			setMessages((prevMessages: any) => [...prevMessages, newMessage]);
		});
		setSocket(newSocket);
		return () => {
			console.log("Disconnected from websocket server");
			newSocket.disconnect();
		};
	}, []);

	const handleMessageSubmit = (e: any) => {
		e.preventDefault();
		if (message.trim() && socket) {
			socket.emit("message", message);
			setMessage("");
		}
	};

	return (
		<div>
			<h1>Chat App</h1>
			<div>
				{messages.map((msg: any, index: any) => (
					<div key={index}>{msg}</div>
				))}
			</div>
			<form onSubmit={handleMessageSubmit}>
				<input
					type="text"
					value={message}
					onChange={(e) => setMessage(e.target.value)}
				/>
				<button type="submit">Send</button>
			</form>
		</div>
	);
};

export default Chat;
