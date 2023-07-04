"use client";
import { useState } from "react";
import { BiCodeAlt, BiX } from "react-icons/bi";
import banner from "@/data/banner";

const Banner = () => {
	const [isBannerOpen, setIsBannerOpen] = useState(banner.isOpen);

	if (!isBannerOpen) return null;

	return (
		<div
			id="banner"
			tabIndex={-1}
			className="fixed bottom-0 left-0 z-50 flex justify-between w-full p-4 bg-teal-700 "
		>
			<div className="flex items-center mx-auto">
				<p className="flex items-center text-sm font-normal text-gray-100">
					<BiCodeAlt className="w-6 h-6 mr-3" />
					<span>{banner.text}</span>
				</p>
			</div>
			<button
				type="button"
				onClick={() => setIsBannerOpen(false)}
				className="flex-shrink-0 inline-flex justify-center items-center rounded-xl text-sm p-1.5 hover:text-white text-gray-200"
			>
				<BiX className="w-5 h-5" />
			</button>
		</div>
	);
};

export default Banner;

