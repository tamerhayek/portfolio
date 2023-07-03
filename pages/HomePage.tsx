import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";

const HomePage = () => {
	return (
		<div className="min-h-screen p-3 grid grid-cols-3">
			<aside className="col-span-3 lg:col-span-1 lg:fixed lg:w-1/3">
				<Navbar />
			</aside>
			<div className="hidden lg:block col-span-1"></div>
			<main className="flex flex-col items-center col-span-3 lg:col-span-2 p-10">
				<Hero />
			</main>
		</div>
	);
};

export default HomePage;

