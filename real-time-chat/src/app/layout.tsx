import "./global.css";
import { Inter } from "next/font/google";
import UserProvider from "@/context/UserContext";

const inter = Inter({ subsets: ["latin"] });
export const metadata = {
	title: "talkNow",
	description: "talkNow - chat with any one any time",
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<UserProvider>
				<body
					suppressHydrationWarning={true}
					className={inter.className}
				>
					<main className="w-full min-h-screen">{children}</main>
				</body>
			</UserProvider>
		</html>
	);
}