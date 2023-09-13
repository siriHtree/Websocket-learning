export default function CButton(props: any) {
	return (
		<button
			className={`${
				props.emphasis
					? "text-white  bg-clr2"
					: "text-clr1 bg-transparent"
			} py-4 px-6 rounded-3xl text-lg border-none cursor-pointer m-2`}
		>
			<span>{props.children}</span>
		</button>
	);
}
