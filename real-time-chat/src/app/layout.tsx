import "./global.css";
import { Inter } from "next/font/google";
import UserProvider from "@/context/UserContext";
import MuiCustomTheme from '@/context/MuiCustomTheme';
import Main from "./Main";


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
			<MuiCustomTheme>
				<UserProvider>
				<body
					suppressHydrationWarning={true}
					className={inter.className}
				>
					<Main>
						{children}
					</Main>
					
				</body>
			</UserProvider>
			</MuiCustomTheme>
			
		</html>
	);
}
