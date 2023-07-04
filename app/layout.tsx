import { Banner, CookiePolicy, Footer, Navbar } from "@/components/Layout";
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
			<CookiePolicy />
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

