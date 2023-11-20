"use client";
import { useState, ChangeEvent } from "react";
import { useSocket } from "@/context/SocketContext";
import { useUser } from "@/context/UserContext";
import IMessage from "@/Interfaces/IMessage";
/**
 * Material uI
 */
import Fab from "@mui/material/Fab";
import TextField from "@mui/material/TextField";
import SendIcon from "@mui/icons-material/Send";
const ChatBar = () => {
	const [text, setText] = useState("");
	const { socket } = useSocket();
	const { username } = useUser();
	const addMessage = (
		e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
	) => {
		setText(e.target.value);
	};
	const sendMessage = (e: any) => {
		e.preventDefault();
		if (text) {
			if (socket) {
				let message: IMessage = {
					text: text,
					name: username,
					id: socket.id,
				};
				socket.emit("send_message", message);
				setText("");
			}
		} else {
			console.log("kuchh likho n!");
		}
	};

	return (
		<form onSubmit={sendMessage} className="w-full">
			<div className="w-full h-[10vh] flex items-center justify-center">
				<TextField
					variant="outlined"
					className="w-[90%] mr-2"
					color="secondary"
					value={text}
					onChange={addMessage}
				/>
				<Fab
					aria-label="send"
					className="ml-2"
					color="secondary"
					onClick={sendMessage}
					type="submit"
				>
					<SendIcon />
				</Fab>
			</div>
		</form>
	);
};

export default ChatBar;
