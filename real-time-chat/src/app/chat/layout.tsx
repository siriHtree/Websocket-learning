import SocketProvider from "@/context/SocketContext";

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return <SocketProvider>{children}</SocketProvider>;
}
