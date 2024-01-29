'use client';
import React, { FC, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, FreeMode, Thumbs, Pagination } from 'swiper/modules';
import styles from '@styles/components/Gallery.module.scss';
import CarouselSwiper from '@/components/CarouselSwiper/CarouselSwiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
interface IProps {
	photos?: string[];
	mobileView?: boolean;
}

const mockImageData = [
	'https://swiperjs.com/demos/images/nature-1.jpg',
	'https://swiperjs.com/demos/images/nature-2.jpg',
	'https://swiperjs.com/demos/images/nature-3.jpg',
	'https://swiperjs.com/demos/images/nature-4.jpg',
	'https://swiperjs.com/demos/images/nature-5.jpg',
	'https://swiperjs.com/demos/images/nature-6.jpg',
	'https://swiperjs.com/demos/images/nature-7.jpg',
	'https://swiperjs.com/demos/images/nature-8.jpg',
	'https://swiperjs.com/demos/images/nature-9.jpg',
	'https://swiperjs.com/demos/images/nature-10.jpg',
];

const Gallery: FC<IProps> = ({ photos = mockImageData, mobileView = false }) => {
	const [carouselSwiper, setCarouselSwiper] = useState(null);
	const [activeSlideIndex, setActiveSlideIndex] = useState(0);

	const getSlide = (imagSrc: string) => (
		<SwiperSlide>
			<img src={imagSrc} alt="Slide" />
		</SwiperSlide>
	);

	return (
		<>
			<Swiper
				spaceBetween={50}
				slidesPerView={1}
				onSlideChange={(swiper) => setActiveSlideIndex(swiper.activeIndex)}
				navigation={!mobileView}
				modules={[FreeMode, Navigation, Thumbs, Pagination]}
				className={styles.sliderWrapper}
				thumbs={{ swiper: carouselSwiper }}
				pagination={{
					enabled: mobileView,
					dynamicBullets: true,
				}}
			>
				{photos.map((imageSrc) => getSlide(imageSrc))}
			</Swiper>
			{!mobileView && <CarouselSwiper slides={photos} activeSlideIndex={activeSlideIndex} onSwiper={setCarouselSwiper} />}
		</>
	);
};

export default Gallery;
