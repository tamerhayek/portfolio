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
	creator: "Tamer Hayek",
	publisher: "Tamer Hayek",
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
	twitter: {
		card: "summary_large_image",
		title: "Tamer Hayek | Portfolio",
		description:
			"I'm a full-stack web developer with a passion for technology and I am dedicated to creating innovative and user-friendly digital experiences.",
		creator: "@tamibyte",
		images: [
			"https://tamerhayek.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Favatar.0e658748.png&w=640&q=75&dpl=dpl_EhT63S9gtwZrXL69cewxKCdTP66x",
			"https://tamerhayek.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fportrait.0654bf31.png&w=1080&q=75&dpl=dpl_EhT63S9gtwZrXL69cewxKCdTP66x",
			,
		],
	},
	openGraph: {
		type: "website",
		title: "Tamer Hayek | Portfolio",
		description:
			"I'm a full-stack web developer with a passion for technology and I am dedicated to creating innovative and user-friendly digital experiences.",
		url: "https://tamerhayek.com",
		siteName: "Tamer Hayek | Portfolio",
		images: [
			{
				url: "https://tamerhayek.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Favatar.0e658748.png&w=640&q=75&dpl=dpl_EhT63S9gtwZrXL69cewxKCdTP66x",
				width: 800,
				height: 600,
				alt: "Tamer Hayek Avatar",
			},
			{
				url: "https://tamerhayek.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fportrait.0654bf31.png&w=1080&q=75&dpl=dpl_EhT63S9gtwZrXL69cewxKCdTP66x",
				width: 800,
				height: 600,
				alt: "Tamer Hayek Portrait",
			},
		],
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

