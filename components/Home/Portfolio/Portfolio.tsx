import portfolio from "@/data/portfolio";
import Card from "./Card";

const Portfolio = () => {
	return (
		<section className="min-h-screen flex flex-col items-center justify-center my-5">
			<h1 className="text-4xl py-2 text-teal-300 font-bold lg:text-6xl">
				Showroom
			</h1>
			<div className="flex flex-wrap gap-10 py-10 lg:px-5 justify-center items-stretch">
				{portfolio.map((card) => (
					<Card {...card} />
				))}
			</div>
		</section>
	);
};

export default Portfolio;

