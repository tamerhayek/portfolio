import Image, { StaticImageData } from "next/image";

interface Props {
	name: string;
	image: StaticImageData;
}

const Card = ({ name, image }: Props) => {
	return (
		<div>
			<Image
				src={image}
				alt={name}
				className="mx-auto rounded-lg object-contain w-32 h-32 aspect-square"
			/>
		</div>
	);
};

export default Card;

