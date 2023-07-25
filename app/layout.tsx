import { Footer, Navbar } from "@/components/Layout";
import { Analytics } from "@vercel/analytics/react";
import { Metadata } from "next";
import { Ubuntu } from "next/font/google";
import "./globals.css";

const ubuntu = Ubuntu({
	weight: ["300", "400", "500", "700"],
	subsets: ["latin"],
});

export const metadata: Metadata = {
	metadataBase: new URL("https://tamerhayek.com/"),
	title: "Tamer Hayek",
	description:
		"I'm a full-stack web developer with a passion for technology and I am dedicated to creating innovative and user-friendly digital experiences.",
	applicationName: "Tamer Hayek | Portfolio",
	authors: [{ name: "Tamer" }],
	generator: "Next.js",
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
	themeColor: "#020817",
	colorScheme: "dark",
	creator: "Tamer Hayek",
	publisher: "Vercel",
	robots: {
		index: true,
		follow: true,
		nocache: true,
	},
	icons: [
		{
			rel: "icon",
			sizes: "16x16",
			url: "/favicon-16x16.png",
		},
		{
			rel: "icon",
			sizes: "32x32",
			url: "/favicon-32x32.png",
		},
		{
			rel: "apple-touch-icon",
			sizes: "180x180",
			url: "/apple-touch-icon.png",
		},
		{
			rel: "manifest",
			url: "/site.webmanifest",
		},
		{
			rel: "mask-icon",
			url: "/safari-pinned-tab.svg",
		},
	],
	category: "Web Development",
	openGraph: {
		title: "Tamer Hayek | Portfolio",
		description:
			"I'm a full-stack web developer with a passion for technology and I am dedicated to creating innovative and user-friendly digital experiences.",
		emails: ["dev@tamerhayek.com"],
		siteName: "Tamer Hayek | Portfolio",
		images: "/avatar.png",
		url: "https://tamerhayek.com",
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		images: "/avatar.png",
		title: "Tamer Hayek | Portfolio",
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
			<body className={`${ubuntu.className}`}>
				<Navbar />
				<main className="flex flex-col items-center px-5">
					{children}
				</main>
				<Footer />
				<Analytics />
			</body>
		</html>
	);
}

