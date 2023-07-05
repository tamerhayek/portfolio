import React from "react";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";

interface Props {
	image: StaticImageData;
	alt: string;
	title: string;
	description: string;
	href: string;
	skills: string[];
}

const Card = ({ alt, image, title, description, href, skills }: Props) => {
	return (
		<Link
			href={href}
			className="rounded-3xl overflow-auto cursor-pointer hover:scale-[1.02] transition-transform bg-slate-800 border-[5px] border-teal-700"
		>
			<Image
				src={image}
				alt={alt}
				className="mx-auto rounded-lg object-cover object-top w-full aspect-video"
			/>
			<div className="p-5">
				<h3 className="text-xl 2xl:text-4xl font-bold">{title}</h3>
				<p className="py-2 text-gray-300 text-lg 2xl:text-2xl">
					{description}
				</p>
				<div className="flex flex-wrap gap-5 py-2">
					{skills.map((skill, index) => (
						<span
							key={index}
							className="px-2 py-1 rounded-[5px] text-white font-bold bg-teal-700 text-xs 2xl:text-lg"
						>
							{skill}
						</span>
					))}
				</div>
			</div>
		</Link>
	);
};

export default Card;

