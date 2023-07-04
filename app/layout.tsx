import { Ubuntu } from "next/font/google";
import "./globals.css";
import { Navbar, Footer, Banner } from "@/components/Layout";
import Head from "next/head";
import Script from "next/script";

const ubuntu = Ubuntu({
	weight: ["300", "400", "500", "700"],
	subsets: ["latin"],
});

export const metadata = {
	title: "Tamer Hayek | Portfolio",
	description:
		"I'm a full-stack web developer with a passion for technology and I am dedicated to creating innovative and user-friendly digital experiences.",
	robots: {
		index: true,
		follow: true,
		nocache: true,
	},
	authors: [
		{
			name: "Tamer Hayek",
			url: "https://tamerhayek.com",
		},
	],
	category: "Web Development",
	creator: "@tamerhayek",
	publisher: "Vercel",
	themeColor: "slate",
	colorScheme: "dark",
	keywords: [
		"Fullstack Developer",
		"Web Developer",
		"Technology",
		"Portfolio",
		"Tamer Hayek",
		"React",
		"Next.js",
		"Typescript",
		"JavaScript",
		"Node.js",
	],
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<Head>
				<Script
					id="oil-configuration"
					type="application/configuration"
					data-remote-config="https://tamer-hayek.avacy-cdn.com/config/tamer-hayek/006144a6-009a-4a62-9a91-1a790165a355/banner.json"
					strategy="beforeInteractive"
				>
					{" "}
				</Script>{" "}
				<Script
					src="https://tamer-hayek.avacy-cdn.com/current/dist/oil.min.js"
					strategy="beforeInteractive"
				></Script>{" "}
				<Script
					src="https://tamer-hayek.avacy-cdn.com/current/dist/oilstub.min.js"
					strategy="beforeInteractive"
				></Script>
			</Head>
			<body className={`${ubuntu.className}`}>
				<Banner />
				<Navbar />
				<main className="flex flex-col items-center px-5">
					{children}
				</main>
				<Footer />
			</body>
		</html>
	);
}

