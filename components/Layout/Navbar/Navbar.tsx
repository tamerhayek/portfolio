import SocialIcons from "@/components/ui/SocialIcons";
import avatar from "@/public/images/avatar.png";
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
	return (
		<nav id="navbar" className="fixed w-full bg-background z-50 top-0">
			<div className="flex justify-between items-center px-5 py-5 lg:px-20 2xl:px-40">
				<div className="w-12 h-12 rounded-full bg-gradient-to-b from-teal-200 to-teal-700 overflow-hidden object-contain">
					<Link href={"/"}>
						<Image
							src={avatar}
							alt="Tamer's avatar"
							priority={true}
						/>
					</Link>
				</div>
				<SocialIcons />
			</div>
		</nav>
	);
};

export default Navbar;

