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
			<div className="grid grid-cols-1 md:grid-cols-2 gap-10 py-10 px-3">
				{portfolio.map((card, index) => (
					<Card {...card} key={index} />
				))}
			</div>
		</section>
	);
};

export default Portfolio;

