"use client";
import partners from "@/data/partners";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import Card from "./Card";

const Partners = () => {
	const settings = {
		dots: false,
		infinite: true,
		speed: 10000,
		slidesToShow: 3,
		slidesToScroll: 3,
		rtl: true,
		autoplay: true,
		autoplaySpeed: 0,
		pauseOnHover: true,
	};

	return (
		<section id="partners" className="">
			<div className="mx-auto w-screen py-16">
				<h3 className="text-center text-4xl font-bold tracking-tight sm:text-5xl">
					Partners
				</h3>
				<Slider {...settings} className="py-10">
					{partners.map((partner, index) => (
						<Card key={index} {...partner} />
					))}
				</Slider>
			</div>
		</section>
	);
};

export default Partners;

