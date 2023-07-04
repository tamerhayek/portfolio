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
			className="lg:max-w-md max-w-xl rounded-3xl overflow-auto cursor-pointer hover:scale-105 transition-transform bg-slate-800"
		>
			<Image
				src={image}
				alt={alt}
				className="mx-auto rounded-lg object-cover object-top w-full aspect-video"
			/>
			<div className="p-5">
				<h3 className="text-xl font-bold">{title}</h3>
				<p className="py-2 text-gray-300">{description}</p>
				<div className="flex flex-wrap gap-2 py-2">
					{skills.map((skill, index) => (
						<span
							key={index}
							className="px-3 py-2 rounded-full text-white bg-teal-700"
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

