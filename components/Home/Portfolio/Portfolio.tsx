import portfolio from "@/data/portfolio";
import Card from "./Card";

const Portfolio = () => {
	return (
		<section
			id="portfolio"
			className="min-h-screen flex flex-col items-center justify-center my-5"
		>
			<h3 className="text-center text-4xl font-bold tracking-tight sm:text-5xl">
				Showroom
			</h3>
			<div className="flex flex-wrap gap-10 py-10 lg:px-5 justify-center items-stretch">
				{portfolio.map((card) => (
					<Card {...card} />
				))}
			</div>
		</section>
	);
};

export default Portfolio;

