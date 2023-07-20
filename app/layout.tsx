import { Footer, Navbar } from "@/components/Layout";
import { Analytics } from "@vercel/analytics/react";
import { Ubuntu } from "next/font/google";
import "./globals.css";

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
	metadataBase: new URL("https://tamerhayek.com/"),
	category: "Web Development",
	creator: "Tamer Hayek",
	publisher: "Vercel",
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
	openGraph: {
		title: "Tamer Hayek | Portfolio",
		image: "https://tamerhayek.com/images/projects/portfolio.png",
		description:
			"I'm a full-stack web developer with a passion for technology and I am dedicated to creating innovative and user-friendly digital experiences.",
		type: "website",
		publishedTime: "2023-07-03T00:00:00.000Z",
		authors: ["Tamer"],
	},
	twitter: {
		card: "summary_large_image",
		image: "https://tamerhayek.com/images/projects/portfolio.png",
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

