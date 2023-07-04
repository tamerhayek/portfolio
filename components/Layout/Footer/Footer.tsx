import Link from "next/link";
import { MdEmail } from "react-icons/md";
import { SiTelegram, SiDiscord } from "react-icons/si";

const Footer = () => {
	return (
		<section id="footer" className="my-10 py-10">
			<div className="flex flex-col items-center justify-center gap-5 min-h-[100px]">
				<h3 className="text-gray-400 ">
					©2023 Tamer Hayek. All rights reserved.
				</h3>
				<div className="flex gap-5 pb-5">
					<Link href={"mailto:dev@tamerhayek.com"}>
						<MdEmail className="w-7 h-7" />
					</Link>
					<Link href={"https://t.me/tamibyte"}>
						<SiTelegram className="w-7 h-7" />
					</Link>
					<Link href={"https://discord.com/channels/tamibyte"}>
						<SiDiscord className="w-7 h-7" />
					</Link>
				</div>
			</div>
		</section>
	);
};

export default Footer;

