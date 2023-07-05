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
		<>
			<Hero />
			<Stack />
			<Timeline />
			{/* <Testimonials /> */}
			{/* <Partners /> */}
			<Portfolio />
		</>
	);
};

export default HomePage;

