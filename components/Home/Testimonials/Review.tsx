import RatingStars from "@/components/ui/RatingStars";
import Image, { StaticImageData } from "next/image";

interface Props {
	name: string;
	image: StaticImageData;
	description: string;
	rating: number;
}

const Review = ({ name, image, description, rating }: Props) => {
	return (
		<blockquote className="rounded-2xl bg-slate-800 p-10 mx-5">
			<div className="flex justify-start items-center gap-4">
				<Image
					alt={name}
					src={image}
					className="h-16 w-16 rounded-full object-cover"
				/>

				<div>
					<RatingStars rating={rating} />
					<p className="mt-1 text-lg font-medium text-gray-200">
						{name}
					</p>
				</div>
			</div>

			<p className="line-clamp-2 sm:line-clamp-none mt-4 text-gray-400">
				{description}
			</p>
		</blockquote>
	);
};

export default Review;

