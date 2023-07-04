import { Ubuntu } from "next/font/google";
import "./globals.css";
import { Navbar, Footer, Banner } from "@/components/Layout";

const ubuntu = Ubuntu({
	weight: ["300", "400", "500", "700"],
	subsets: ["latin"],
});

export const metadata = {
	title: "Tamer Hayek | Portfolio",
	description:
		"I'm a full-stack web developer with a passion for technology and I am dedicated to creating innovative and user-friendly digital experiences.",
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<body className={`${ubuntu.className}`}>
				<Banner />
				<Navbar />
				{children}
				<Footer />
			</body>
		</html>
	);
}

