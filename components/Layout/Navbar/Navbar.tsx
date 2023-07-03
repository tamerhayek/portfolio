import SocialIcons from "@/components/ui/SocialIcons";
import avatar from "@/public/images/avatar.png";
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
	return (
		<nav className="fixed w-full bg-background z-50">
			<div className="max-w-7xl mx-auto ">
				<div className="flex justify-between items-center p-7">
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
			</div>
		</nav>
	);
};

export default Navbar;

