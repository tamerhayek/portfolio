import timeline from "@/data/timeline";
import React from "react";
import Event from "./Event";
import Image from "next/image";
import portrait from "@/public/images/portrait.png";

const Timeline = () => {
	return (
		<section id="timeline" className="py-5 min-h-screen w-full">
			<div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
				<div className="p-5 flex items-center justify-center w-full rounded-full ">
					<Image
						src={portrait}
						alt="Tamer Hayek"
						className="rounded-full object-cover object-center w-96 aspect-square"
					/>
				</div>
				<div className="p-5 flex items-center justify-center w-full ">
					<ol className="relative border-l border-teal-500">
						{timeline.map((event, index) => (
							<Event {...event} key={index} />
						))}
					</ol>
				</div>
			</div>
		</section>
	);
};

export default Timeline;

