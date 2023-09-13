"use client";

import React from "react";
import { useUser } from "@/context/UserContext";
import { useRouter } from "next/navigation";
//Material UI
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight";

const StartButton = () => {
	let { username, setUsername } = useUser();
	const router = useRouter();
	const StartChat = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		if (username) {
			router.push("/chat");
		}
	};
	return (
		<form onSubmit={StartChat}>
			<Box className="flex items-center">
				<TextField
					label="Username"
					variant="outlined"
					helperText="Enter you name here"
					value={username}
					onChange={(e: any) => setUsername(e.target.value)}
				/>
				<Button
					variant="contained"
					sx={{ marginLeft: "1em", marginBottom: "2em" }}
					endIcon={<KeyboardDoubleArrowRightIcon />}
					type="submit"
				>
					Start
				</Button>
			</Box>
		</form>
	);
};

export default StartButton;
