import Link from "next/link";
import {
	BsLink45Deg,
	BsCalendar2CheckFill,
	BsFillCalendarFill,
} from "react-icons/bs";

interface Props {
	title: string;
	description: string;
	type: string;
	date: string;
	completed: boolean;
	href?: string;
	linkName?: string;
}

const Event = ({
	title,
	description,
	type,
	date,
	completed,
	href,
	linkName,
}: Props) => {
	return (
		<li className="mb-10 ml-8">
			<span className="absolute flex items-center justify-center w-6 h-6 bg-teal-500 rounded-full -left-3 ring-8 ring-teal-500">
				{completed ? <BsCalendar2CheckFill /> : <BsFillCalendarFill />}
			</span>
			<div className="flex items-center mb-2">
				<h3 className="text-lg 2xl:text-2xl font-semibold text-gray-100">
					{title}
				</h3>
				<span className="text-sm 2xl:text-xl font-medium px-2.5 py-0.5 rounded bg-blue-900 text-blue-200 ml-5">
					{type}
				</span>
			</div>
			<time className="block mb-2 text-sm 2xl:text-xl font-bold leading-none text-gray-500">
				{date}
			</time>
			<p className="mb-4 text-base 2xl:text-xl font-normal text-gray-400">
				{description}
			</p>
			{href && linkName && (
				<Link
					href={href}
					className="inline-flex items-center px-5 py-2 text-sm 2xl:text-xl font-medium bg-teal-600 text-gray-100  hover:text-white hover:bg-teal-900 rounded-2xl"
				>
					<BsLink45Deg className="mr-2 w-4 h-4" />
					{linkName}
				</Link>
			)}
		</li>
	);
};

export default Event;

