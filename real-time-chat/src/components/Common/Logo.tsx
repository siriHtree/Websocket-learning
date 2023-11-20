import Link from "next/link";

const Logo = () => {
	return (
		<div className="text-2xl">
			<Link href="/" className="no-underline">
				<h3 id="logo_color_flip1" className="text-clr1 font-normal">
				talk<span id="logo_color_flip2" className="text-clr2 font-extrabold ">NOW</span>
			</h3>
			</Link>
			
		</div>
	);
};

export default Logo;
