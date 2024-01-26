'use client';
import React, { FC, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import styles from '@styles/components/Gallery.module.scss';
import { Navigation, FreeMode, Thumbs } from 'swiper/modules';
import CarouselSwiper from '@/components/CarouselSwiper/CarouselSwiper';

const Gallery: FC<IProps> = (props) => {
	const [carouselSwiper, setCarouselSwiper] = useState(null);

	return (
		<>
			<Swiper
				spaceBetween={50}
				slidesPerView={1}
				onSlideChange={() => console.log('Kamil here slide change')}
				onSwiper={(swiper) => console.log('Kamil swiper', swiper)}
				navigation={true}
				modules={[FreeMode, Navigation, Thumbs]}
				className={styles.sliderWrapper}
				thumbs={{ swiper: carouselSwiper }}
			>
				<SwiperSlide>
					<img src="https://swiperjs.com/demos/images/nature-1.jpg" />
				</SwiperSlide>
				<SwiperSlide>
					<img src="https://swiperjs.com/demos/images/nature-2.jpg" />
				</SwiperSlide>
				<SwiperSlide>
					<img src="https://swiperjs.com/demos/images/nature-3.jpg" />
				</SwiperSlide>
				<SwiperSlide>
					<img src="https://swiperjs.com/demos/images/nature-4.jpg" />
				</SwiperSlide>
				<SwiperSlide>
					<img src="https://swiperjs.com/demos/images/nature-5.jpg" />
				</SwiperSlide>
				<SwiperSlide>
					<img src="https://swiperjs.com/demos/images/nature-6.jpg" />
				</SwiperSlide>
				<SwiperSlide>
					<img src="https://swiperjs.com/demos/images/nature-7.jpg" />
				</SwiperSlide>
				<SwiperSlide>
					<img src="https://swiperjs.com/demos/images/nature-8.jpg" />
				</SwiperSlide>
				<SwiperSlide>
					<img src="https://swiperjs.com/demos/images/nature-9.jpg" />
				</SwiperSlide>
				<SwiperSlide>
					<img src="https://swiperjs.com/demos/images/nature-10.jpg" />
				</SwiperSlide>
			</Swiper>
			<CarouselSwiper onSwiper={setCarouselSwiper} />
		</>
	);
};

interface IProps {}

export default Gallery;
