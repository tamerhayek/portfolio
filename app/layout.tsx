import { Banner, Footer, Navbar } from "@/components/Layout";
import { Ubuntu } from "next/font/google";
import "./globals.css";
import Script from "next/script";
import { Analytics } from "@vercel/analytics/react";

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
	metadataBase: new URL("https://tamerhayek.com"),
	authors: [
		{
			name: "Tamer",
			url: "https://tamerhayek.com",
		},
	],
	category: "Web Development",
	creator: "Tamer Hayek",
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
	formatDetection: {
		email: false,
		address: false,
		telephone: false,
	},
	openGraph: {
		title: "Tamer Hayek | Portfolio",
		description:
			"I'm a full-stack web developer with a passion for technology and I am dedicated to creating innovative and user-friendly digital experiences.",
		type: "website",
		publishedTime: "2023-07-03T00:00:00.000Z",
		authors: ["Tamer"],
	},
	twitter: {
		card: "summary_large_image",
		title: "Tamer Hayek",
		description:
			"I'm a full-stack web developer with a passion for technology and I am dedicated to creating innovative and user-friendly digital experiences.",
		creator: "@tamibyte",
	},
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<Script
				id="oil-configuration"
				type="application/configuration"
				data-remote-config="https://tamer-hayek.avacy-cdn.com/config/tamer-hayek/2f674c92-bf32-44f6-be5a-66f80bb56ac8/banner.json"
			></Script>
			<Script src="https://tamer-hayek.avacy-cdn.com/current/dist/oil.min.js"></Script>
			<Script src="https://tamer-hayek.avacy-cdn.com/current/dist/oilstub.min.js"></Script>
			<body className={`${ubuntu.className}`}>
				<Banner />
				<Navbar />
				<main className="flex flex-col items-center px-5">
					{children}
				</main>
				<Footer />
			</body>
			<Analytics />
		</html>
	);
}

