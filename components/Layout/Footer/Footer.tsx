import Link from "next/link";
import { MdEmail } from "react-icons/md";
import { SiTelegram, SiDiscord } from "react-icons/si";

const Footer = () => {
	return (
		<section id="footer" className="my-10 py-10">
			<div className="flex flex-col items-center justify-center gap-5 min-h-[100px]">
				<h3 className="text-gray-400 text-md 2xl:text-xl">
					©2023 Tamer Hayek. All rights reserved.
				</h3>
				<div className="flex gap-5">
					<Link
						href="https://www.iubenda.com/privacy-policy/93742890"
						title="Privacy Policy"
					>
						Privacy Policy
					</Link>
					<Link
						href="https://www.iubenda.com/privacy-policy/93742890/cookie-policy"
						title="Cookie Policy"
					>
						Cookie Policy
					</Link>
				</div>
				<div className="flex gap-10 pb-5">
					<Link href={"mailto:dev@tamerhayek.com"}>
						<MdEmail className="w-7 h-7 xl:w-10 xl:h-10 hover:scale-110 transition-all" />
					</Link>
					<Link href={"https://t.me/tamibyte"}>
						<SiTelegram className="w-7 h-7 xl:w-10 xl:h-10 hover:scale-110 transition-all" />
					</Link>
				</div>
			</div>
		</section>
	);
};

export default Footer;

