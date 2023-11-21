export default function CButton(props: any) {
	return (
			<button
			id={props.emphasis?"home_button":""}
			className={`${
				props.emphasis
					? "text-white  bg-clr2"
					: "text-clr1 bg-transparent"
			} py-2 px-6 rounded-3xl text-lg border-none cursor-pointer ${props.home?"mb-2 ":""} ${props.emphasis && props.home?"home_button":""}`}
			{...props.buttonAttributes}
		>
			
			<span id={props.emphasis?"home_button_text_emphasis":"home_button_text"} className={`${props.home?`text-3xl `:''}`}>{props.children}</span>
		</button>
		
	);
}
