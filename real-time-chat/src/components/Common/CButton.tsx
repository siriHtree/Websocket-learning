export default function CButton(props: any) {
	return (
			<button
			className={`${
				props.emphasis
					? "text-white  bg-clr2"
					: "text-clr1 bg-transparent"
			} py-2 px-6 rounded-3xl text-lg border-none cursor-pointer ${props.home?"mb-12":""}`}
			{...props.buttonAttributes}
		>
			
			<span className={props.home?`text-5xl`:''}>{props.children}</span>
		</button>
		
	);
}
