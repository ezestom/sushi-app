import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import "./MenuSlider.css";
import img1 from "../../img/nagasaki.jpg";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

import "./MenuSlider.css";

// import required modules
import { FreeMode, Pagination } from "swiper/modules";

export function MenuSlider() {
	return (
		<>
			<Swiper
				slidesPerView={1}
				spaceBetween={25}
				freeMode={true}
				pagination={{
					clickable: true,
				}}
				modules={[FreeMode, Pagination]}
				className="mySwiper ">
				<SwiperSlide>
					<img
						className="hover:scale-105 transition object-contain w-full h-full"
						src={img1.src}
						alt="image"
					/>
				</SwiperSlide>
				<SwiperSlide>
					<img
						className="hover:scale-105 transition object-contain w-full h-full"
						src={img1.src}
						alt="image"
					/>
				</SwiperSlide>
				<SwiperSlide>
					<img
						className="hover:scale-105 transition object-contain w-full h-full"
						src={img1.src}
						alt="image"
					/>
				</SwiperSlide>
				<SwiperSlide>
					<img
						className="hover:scale-105 transition object-contain w-full h-full"
						src={img1.src}
						alt="image"
					/>
				</SwiperSlide>
				<SwiperSlide>
					<img
						className="hover:scale-105 transition object-contain w-full h-full"
						src={img1.src}
						alt="image"
					/>
				</SwiperSlide>
				<SwiperSlide>
					<img
						className="hover:scale-105 transition object-contain w-full h-full"
						src={img1.src}
						alt="image"
					/>
				</SwiperSlide>
				<SwiperSlide>
					<img
						className="hover:scale-105 transition object-contain w-full h-full"
						src={img1.src}
						alt="image"
					/>
				</SwiperSlide>
			</Swiper>
		</>
	);
}
