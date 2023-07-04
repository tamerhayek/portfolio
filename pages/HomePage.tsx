import {
	Hero,
	Partners,
	Portfolio,
	Stack,
	Testimonials,
	Timeline,
} from "@/components/Home/";

const HomePage = () => {
	return (
		<main className="flex flex-col items-center py-10 px-5">
			<Hero />
			<Stack />
			<Timeline />
			<Testimonials />
			<Partners />
			<Portfolio />
		</main>
	);
};

export default HomePage;

