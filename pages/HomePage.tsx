import { Hero, Portfolio, Stack } from "@/components/Home/";

const HomePage = () => {
	return (
		<main className="flex flex-col items-center py-10 px-5">
			<Hero />
			<Stack />
			<Portfolio />
		</main>
	);
};

export default HomePage;

