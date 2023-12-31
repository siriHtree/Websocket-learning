"use client";
import { useState } from "react";
import CButton from "../Common/CButton";
import Logo from "../Common/Logo";
import AuthModal from "../Login/AuthModal";
import Link from "next/link";
import MagiLink from "../Login/MagiLink";


const Nav = () => {
	const [authToggle,setAuthToggle]=useState<null | string>(null);
	const [open, setOpen]=useState<boolean>(false);
	const clickHandler=()=>{
		console.log('hello')
	}

	return (
		<>
		<nav className="w-full h-[15vh] fixed left-0 top-0 flex items-center justify-between px-16 z-[999]">
			<Logo></Logo>
			<div>
				<Link href="/infiniteScroll" className="no-underline text-clr1">Infinite Scroll</Link>
			</div>

			<div>
				{/* <CButton buttonAttributes={{onClick:()=>{setAuthToggle("SignIn")}}}>Sign In</CButton>
				<CButton emphasis={true} buttonAttributes={{onClick:()=>{setAuthToggle("SignUp")}}}>Sign Up</CButton> */}
				<CButton emphasis={true} buttonAttributes={{onClick:()=>{setOpen(true)}}}>Sign Up</CButton>
			</div>
		</nav>
		{/* <AuthModal authToggle={authToggle} setAuthToggle={setAuthToggle}></AuthModal> */}
		<MagiLink open={open} setOpen={setOpen}></MagiLink>
		</>
		
	);
};

export default Nav;
