import CButton from "../Common/CButton";
import Logo from "../Common/Logo";

const Nav = () => {
	return (
		<nav className="w-full h-[15vh] fixed left-0 top-0 flex items-center justify-between px-16">
			<Logo></Logo>
			<div>
				<CButton>Sign In</CButton>
				<CButton emphasis={true}>Sign Up</CButton>
			</div>
		</nav>
	);
};

export default Nav;
