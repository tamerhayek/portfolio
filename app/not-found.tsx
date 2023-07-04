import Link from "next/link";

const Error404 = () => {
	return (
		<div className="h-screen flex flex-col gap-10 justify-center items-center">
			<h3 className="font-bold text-4xl leading-10">
				404 Page Not Found
			</h3>
			<Link
				href={"/"}
				className="rounded-xl bg-teal-600 px-4 py-2 hover:bg-teal-800"
			>
				Back to Home
			</Link>
		</div>
	);
};

export default Error404;

