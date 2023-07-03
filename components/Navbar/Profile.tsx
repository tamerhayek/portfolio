import avatar from "@/public/images/avatar.png";
import Image from "next/image";

const Profile = () => {
	return (
		<div className="flex flex-col lg:flex-row gap-5">
			<div className="lg:w-fit w-full flex lg:justify-start justify-center items-center">
				<div className="w-40 h-40 lg:w-14 lg:h-14 rounded-full bg-gradient-to-b from-teal-200 to-teal-700 overflow-hidden object-contain">
					<Image src={avatar} alt="Tamer's avatar" priority={true} />
				</div>
			</div>
			<div className="lg:w-auto text-center lg:text-left">
				<h2 className="lg:text-3xl text-4xl text-teal-600 dark:text-teal-500 font-bold">
					Tamer Hayek
				</h2>
				<h3 className="mt-2 text-md dark:text-white">
					Full Stack Developer
				</h3>
			</div>
		</div>
	);
};

export default Profile;

