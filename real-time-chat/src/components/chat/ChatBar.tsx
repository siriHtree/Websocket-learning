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
		<form onSubmit={sendMessage} className=" w-[94%]">
			<div className="w-full h-[10vh] flex items-center justify-between">
				<TextField
					variant="outlined"
					className="w-[95%]"
					value={text}
					onChange={addMessage}
				/>
				<Fab
					aria-label="send"
					color="primary"
					onClick={sendMessage}
					type="submit"
				>
					<SendIcon className="text-white" />
				</Fab>
			</div>
		</form>
	);
};

export default ChatBar;
