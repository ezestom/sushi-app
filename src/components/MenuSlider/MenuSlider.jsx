import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import "./MenuSlider.css";
import img1 from "../../img/nagasaki.jpg";
import img2 from "../../img/niguiri.jpg";
import img3 from "../../img/wok.jpg";
import img4 from "../../img/veggie.jpg";
import img5 from "../../img/wrap.jpg";
import img6 from "../../img/tuna.jpg";
import img7 from "../../img/fit.jpg";
import img8 from "../../img/red.jpg";

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
				className="mySwiper overflow-x-hidden w-full">
				<SwiperSlide>
					<img
						className="hover:scale-105 transition object-cover w-full h-full"
						src={img1.src}
						alt="image"
					/>
				</SwiperSlide>
				<SwiperSlide>
					<img
						className="hover:scale-105 transition object-cover w-full h-full"
						src={img2.src}
						alt="image"
					/>
				</SwiperSlide>
				<SwiperSlide>
					<img
						className="hover:scale-105 transition object-cover w-full h-full"
						src={img3.src}
						alt="image"
					/>
				</SwiperSlide>
				<SwiperSlide>
					<img
						className="hover:scale-105 transition object-cover w-full h-full"
						src={img4.src}
						alt="image"
					/>
				</SwiperSlide>
				<SwiperSlide>
					<img
						className="hover:scale-105 transition object-cover w-full h-full"
						src={img5.src}
						alt="image"
					/>
				</SwiperSlide>
				<SwiperSlide>
					<img
						className="hover:scale-105 transition object-cover w-full h-full"
						src={img6.src}
						alt="image"
					/>
				</SwiperSlide>
				<SwiperSlide>
					<img
						className="hover:scale-105 transition object-cover w-full h-full"
						src={img7.src}
						alt="image"
					/>
				</SwiperSlide>
				<SwiperSlide>
					<img
						className="hover:scale-105 transition object-cover w-full h-full"
						src={img8.src}
						alt="image"
					/>
				</SwiperSlide>
				<SwiperSlide>
					<img
						className="hover:scale-105 transition object-cover w-full h-full"
						src={img1.src}
						alt="image"
					/>
				</SwiperSlide>
				<SwiperSlide>
					<img
						className="hover:scale-105 transition object-cover w-full h-full"
						src={img2.src}
						alt="image"
					/>
				</SwiperSlide>
				<SwiperSlide>
					<img
						className="hover:scale-105 transition object-cover w-full h-full"
						src={img3.src}
						alt="image"
					/>
				</SwiperSlide>
				<SwiperSlide>
					<img
						className="hover:scale-105 transition object-cover w-full h-full"
						src={img4.src}
						alt="image"
					/>
				</SwiperSlide>
				<SwiperSlide>
					<img
						className="hover:scale-105 transition object-cover w-full h-full"
						src={img5.src}
						alt="image"
					/>
				</SwiperSlide>
				<SwiperSlide>
					<img
						className="hover:scale-105 transition object-cover w-full h-full"
						src={img6.src}
						alt="image"
					/>
				</SwiperSlide>
				<SwiperSlide>
					<img
						className="hover:scale-105 transition object-cover w-full h-full"
						src={img7.src}
						alt="image"
					/>
				</SwiperSlide>
				<SwiperSlide>
					<img
						className="hover:scale-105 transition object-cover w-full h-full"
						src={img8.src}
						alt="image"
					/>
				</SwiperSlide>
			</Swiper>
		</>
	);
}
