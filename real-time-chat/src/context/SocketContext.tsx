"use client";
import { io, Socket } from "socket.io-client";
import ISocketContext from "@/Interfaces/ISocketContext";
import { createContext, useContext, useState, useEffect } from "react";
import { useUser } from "./UserContext";
import { useRouter } from "next/navigation";
import IMessage from "@/Interfaces/IMessage";

const initialData: ISocketContext = {
	socket: undefined,
	messages: [],
};

const SocketContext = createContext<ISocketContext>(initialData);
export function useSocket() {
	return useContext(SocketContext);
}
export default function SocketProvider({
	children,
}: {
	children: React.ReactNode;
}) {
	const router = useRouter();
	const [socket, setSocket] = useState<Socket>();
	const [messages, setMessages] = useState<IMessage[] | []>([]);
	const { username } = useUser();
	useEffect(() => {
		// if (!username) {
		// 	router.replace("/");
		// 	return;
		// }
		console.log("connecting user");
		let socket = io(process.env.NEXT_PUBLIC_SOCKET_SERVER_URL!);
		socket.on("connect", () => {
			console.log("user is connected");
		});
		socket.emit("username", {
			username,
		});
		socket.on("get_message", (data: IMessage) => {
			setMessages((prev) => [...prev, data]);
		});
		setSocket(socket);
	}, []);
	return (
		<SocketContext.Provider value={{ socket, messages }}>
			{children}
		</SocketContext.Provider>
	);
}
