import LottieImage from "@/components/ui/LottieImage";
import developer_skills from "@/public/lotties/developer_skills.json";

const Hero = () => {
	return (
		<section
			id="home"
			className="min-h-screen pt-[80px] text-center lg:text-left flex flex-col lg:flex-row items-center justify-center"
		>
			<div className="w-72 h-72 md:w-96 md:h-96 lg:w-[600px] lg:h-[600px] 2xl:w-[700px] 2xl:h-[800px]">
				<LottieImage animationData={developer_skills} />
			</div>
			<div className="py-3 lg:p-5">
				<h1 className="text-4xl lg:text-7xl 2xl:text-8xl py-2 text-teal-300 font-bold">
					I'm Tamer Hayek
				</h1>
				<h2 className="text-2xl md:text-3xl lg:text-5xl py-2">
					Full Stack Developer
				</h2>
				<p className="text-md md:text-xl lg:text-2xl py-2 leading-8 text-gray-400 max-w-xl lg:max-w-2xl">
					I&apos;m a full-stack web developer with a passion for
					technology and I am dedicated to creating innovative and
					user-friendly digital experiences.
				</p>
			</div>
		</section>
	);
};

export default Hero;

