"use client";
import {
	AiFillLinkedin,
	AiFillGithub,
	AiFillInstagram,
	AiFillTwitterCircle,
} from "react-icons/ai";
import Link from "next/link";

const SocialIcons = () => {
	return (
		<>
			<div className="flex justify-center lg:justify-start gap-5">
				<Link
					className="cursor-pointer"
					href="https://www.linkedin.com/in/tamerhayek/"
				>
					<AiFillLinkedin className="w-10 h-10 transition-colors fill-gray-400 hover:fill-blue-500" />
				</Link>
				<Link
					className="cursor-pointer"
					href="https://github.com/tamerhayek"
				>
					<AiFillGithub className="w-10 h-10 transition-colors fill-gray-400 hover:fill-purple-700" />
				</Link>
				<Link
					className="cursor-pointer"
					href="https://www.instagram.com/tamerhayek/"
				>
					<AiFillInstagram className="w-10 h-10 transition-colors fill-gray-400 hover:fill-pink-600" />
				</Link>
				<Link
					className="cursor-pointer"
					href="https://www.twitter.com/tamibyte/"
				>
					<AiFillTwitterCircle className="w-10 h-10 transition-colors fill-gray-400 hover:fill-blue-400" />
				</Link>
			</div>
		</>
	);
};

export default SocialIcons;

