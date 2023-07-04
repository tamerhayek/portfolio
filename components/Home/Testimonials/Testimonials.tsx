"use client";
import testimonials from "@/data/testimonials";
import Review from "./Review";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Testimonials = () => {
	const settings = {
		dots: false,
		infinite: true,
		speed: 1000,
		slidesToShow: 3,
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 2000,
		pauseOnHover: true,
		responsive: [
			{
				breakpoint: 1024,
				settings: {
					slidesToShow: 1,
					infinite: true,
					dots: true,
				},
			},
		],
	};

	return (
		<section id="testimonials">
			<div className="mx-auto w-screen py-16">
				<h3 className="text-center text-4xl font-bold tracking-tight sm:text-5xl">
					Read trusted reviews from my customers
				</h3>
				<Slider {...settings} className="py-10">
					{testimonials.map((review, index) => (
						<Review key={index} {...review} />
					))}
				</Slider>
			</div>
		</section>
	);
};

export default Testimonials;

