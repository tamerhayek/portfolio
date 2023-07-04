import gamehub from "@/public/images/projects/game-hub.png";
import olymposhub from "@/public/images/projects/olymposhub.png";
import portfolio from "@/public/images/projects/portfolio.png";

export default [
	{
		title: "Portfolio",
		description: "This is my portfolio",
		image: portfolio,
		alt: "Personal Portfolio Project",
		href: "/",
		skills: ["HTML5", "CSS3", "Typescript", "React", "Next", "TailwindCSS"],
	},
	{
		title: "Olympos Hub",
		description: "Olympos Hub Website",
		image: olymposhub,
		alt: "Olympos Hub Website",
		href: "https://olymposhub.io",
		skills: ["HTML5", "CSS3", "JavaScript", "Wappler"],
	},
	{
		title: "Game Hub Project",
		description: "Personal project that fetchs games using RAWG Api",
		image: gamehub,
		alt: "Game Hub Personal Project",
		href: "https://game-hub-tamerhayek.netlify.app/",
		skills: ["HTML5", "CSS3", "Typescript", "React"],
	},
];

