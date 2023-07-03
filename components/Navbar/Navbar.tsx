import Navigation from "./Navigation";
import Profile from "./Profile";
import SocialIcons from "./SocialIcons";

const Navbar = () => {
	return (
		<nav className="lg:h-screen p-7 flex flex-col justify-between gap-10">
			<Profile />
			<div className="hidden lg:block">
				<Navigation />
			</div>
			<SocialIcons />
		</nav>
	);
};

export default Navbar;

