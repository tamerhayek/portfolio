import timeline from "@/data/timeline";
import React from "react";
import Event from "./Event";

const Timeline = () => {
	return (
		<section id="timeline" className="py-5 px-5 min-h-screen">
			<ol className="relative border-l border-teal-500 ">
				{timeline.map((event, index) => (
					<Event {...event} key={index} />
				))}
			</ol>
		</section>
	);
};

export default Timeline;

