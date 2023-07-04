import LottieImage from "@/components/ui/LottieImage";
import development from "@/public/lotties/app_development.json";
import StackIcons from "./StackIcons";

const Services = () => {
	return (
		<section className="min-h-screen text-center lg:text-right flex flex-col items-center justify-center lg:flex-row gap-5">
			<div className="order-2 lg:order-1 flex flex-col items-center max-w-md">
				<h3 className="text-gray-300  text-xl">
					Capable of building web applications from scratch using
					various programming languages, frameworks, and libraries.
				</h3>
				<StackIcons />
			</div>
			<div className="w-72 h-72 lg:w-96 lg:h-96 order-1 lg:order-2">
				<LottieImage animationData={development} />
			</div>
		</section>
	);
};

export default Services;

