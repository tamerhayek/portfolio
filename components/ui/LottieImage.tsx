"use client";
import Lottie from "lottie-react";

interface Props {
	animationData: Object;
}

const LottieImage = ({ animationData }: Props) => {
	return <Lottie animationData={animationData} />;
};

export default LottieImage;

