import LottieImage from "@/components/ui/LottieImage";
import app_development from "@/public/lotties/app_development.json";
import StackIcons from "./StackIcons";

const Services = () => {
	return (
		<section
			id="stack"
			className="min-h-screen text-center lg:text-right flex flex-col items-center justify-center lg:flex-row gap-5"
		>
			<div className="order-2 lg:order-1 flex flex-col items-center max-w-md lg:max-w-2xl">
				<h3 className="text-md md:text-xl lg:text-3xl py-2 leading-8 text-gray-400 max-w-xl lg:max-w-2xl">
					Capable of building web applications from scratch using
					various programming languages, frameworks, and libraries.
				</h3>
				<StackIcons />
			</div>
			<div className="w-72 h-72 md:w-96 md:h-96 lg:w-[600px] lg:h-[600px] 2xl:w-[700px] 2xl:h-[700px] order-1 lg:order-2">
				<LottieImage animationData={app_development} />
			</div>
		</section>
	);
};

export default Services;

