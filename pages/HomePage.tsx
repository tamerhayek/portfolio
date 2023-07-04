import { Hero, Portfolio, Stack, Timeline } from "@/components/Home/";

const HomePage = () => {
	return (
		<main className="flex flex-col items-center py-10 px-5">
			<Hero />
			<Stack />
			<Timeline />
			<Portfolio />
		</main>
	);
};

export default HomePage;

