import Image, { StaticImageData } from "next/image";

interface Props {
	name: string;
	image: StaticImageData;
	href: string;
}

const Card = ({ name, image, href }: Props) => {
	return (
		<div className="mx-5">
			<Image
				src={image}
				alt={name}
				className="mx-auto cursor-pointer object-contain w-32 h-32 aspect-square"
				onClick={(e) => {
					e.preventDefault();
					window.open(href, "_blank");
				}}
			/>
		</div>
	);
};

export default Card;

