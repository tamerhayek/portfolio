import LottieImage from "@/components/ui/LottieImage";
import development from "@/public/lotties/developer_skills.json";

const Hero = () => {
	return (
		<section className="min-h-screen text-center lg:text-left flex flex-col lg:flex-row items-center justify-center">
			<div className="w-72 h-72 lg:w-96 lg:h-96">
				<LottieImage animationData={development} />
			</div>
			<div className="py-3 lg:p-10">
				<h1 className="text-4xl py-2 text-teal-300 font-bold lg:text-6xl">
					I'm Tamer Hayek
				</h1>
				<h2 className="text-2xl py-2 md:text-3xl">
					Full Stack Developer
				</h2>
				<p className="text-md py-2 leading-8 text-gray-400 md:text-xl max-w-xl">
					I&apos;m a full-stack web developer with a passion for
					technology and I am dedicated to creating innovative and
					user-friendly digital experiences.
				</p>
			</div>
		</section>
	);
};

export default Hero;

