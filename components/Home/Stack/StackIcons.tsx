import { AiFillHtml5 } from "react-icons/ai";
import { FaReact, FaCss3Alt } from "react-icons/fa";
import {
	SiJavascript,
	SiTypescript,
	SiNextdotjs,
	SiTailwindcss,
} from "react-icons/si";
import Link from "next/link";

const StackIcons = () => {
	return (
		<>
			<div className="flex justify-center lg:justify-end flex-wrap gap-7 py-10 w-full">
				<AiFillHtml5 className="cursor-pointer w-10 h-10 transition-colors fill-gray-400 hover:fill-orange-500" />
				<FaCss3Alt className="cursor-pointer w-10 h-10 transition-colors fill-gray-400 hover:fill-blue-600" />
				<SiJavascript className="cursor-pointer w-10 h-10 transition-colors fill-gray-400 hover:fill-yellow-500" />
				<SiTypescript className="cursor-pointer w-10 h-10 transition-colors fill-gray-400 hover:fill-blue-700" />
				<Link className="cursor-pointer" href="https://www.react.dev">
					<FaReact className="cursor-pointer w-10 h-10 transition-colors fill-gray-400 hover:fill-blue-600" />
				</Link>
				<Link className="cursor-pointer" href="https://nextjs.org/">
					<SiNextdotjs className="cursor-pointer w-10 h-10 transition-colors fill-gray-400 hover:fill-gray-600" />
				</Link>
				<Link
					className="cursor-pointer"
					href="https://tailwindcss.com/"
				>
					<SiTailwindcss className="cursor-pointer w-10 h-10 transition-colors fill-gray-400 hover:fill-blue-400" />
				</Link>
			</div>
		</>
	);
};

export default StackIcons;

