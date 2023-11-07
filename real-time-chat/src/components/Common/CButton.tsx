export default function CButton(props: any) {
	return (
			<button
			className={`${
				props.emphasis
					? "text-white  bg-clr2"
					: "text-clr1 bg-transparent"
			} py-2 px-6 rounded-3xl text-lg border-none cursor-pointer`}
		>
			
			<span className={props.home?`text-3xl`:''}>{props.children}</span>
		</button>
		
	);
}
