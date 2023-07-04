import { BsStar, BsStarFill, BsStarHalf } from "react-icons/bs";

interface Props {
	rating: number;
}

const RatingStars = ({ rating }: Props) => {
	const filled = Array.from({ length: rating }, (_, i) => i + 1);
	const half = rating % 1 !== 0 ? 1 : 0;
	const empty = Array.from({ length: 5 - rating }, (_, i) => i + 1);

	return (
		<div className="flex justify-center gap-0.5 text-green-500">
			{filled.map((star) => (
				<BsStarFill key={star} />
			))}
			{half ? <BsStarHalf /> : ""}
			{empty.map((star) => (
				<BsStar key={star} />
			))}
		</div>
	);
};

export default RatingStars;

