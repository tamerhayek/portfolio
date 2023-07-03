import navigation from "@/data/navigation";
import Link from "next/link";
import React from "react";

const Navigation = () => {
	return (
		<div className="flex flex-col">
			{navigation.map(({ section, dom_id }, index, array) => {
				return (
					<Link href={dom_id} key={index}>
						{section}
					</Link>
				);
			})}
		</div>
	);
};

export default Navigation;

