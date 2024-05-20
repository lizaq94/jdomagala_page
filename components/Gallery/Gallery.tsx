'use client';
import React, { FC, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, FreeMode, Thumbs, Pagination } from 'swiper/modules';
import styles from '@styles/components/Gallery.module.scss';
import CarouselSwiper from '@/components/CarouselSwiper/CarouselSwiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import Image from 'next/image';
import useRwd from '@/hooks/useRwd';
interface IProps {
	photos: string[];
	showCarousel?: boolean;
}

const Gallery: FC<IProps> = ({ photos, showCarousel = false }) => {
	const [carouselSwiper, setCarouselSwiper] = useState(null);
	const [activeSlideIndex, setActiveSlideIndex] = useState(0);

	const { isRwd } = useRwd();
	const displayCarousel = !isRwd && showCarousel;

	const getSlide = (imagSrc: string, index: number) => (
		<SwiperSlide key={index}>
			<Image src={imagSrc} alt="Slide" fill={true} style={{ objectFit: 'cover' }} />
		</SwiperSlide>
	);

	return (
		<>
			<Swiper
				spaceBetween={50}
				slidesPerView={1}
				onSlideChange={(swiper) => setActiveSlideIndex(swiper.activeIndex)}
				navigation={!isRwd}
				modules={[FreeMode, Navigation, Thumbs, Pagination]}
				className={styles.sliderWrapper}
				thumbs={{ swiper: carouselSwiper }}
				pagination={{
					enabled: isRwd,
					dynamicBullets: true,
				}}
			>
				{photos.map((imageSrc, index) => getSlide(imageSrc, index))}
			</Swiper>
			{displayCarousel && (
				<CarouselSwiper slides={photos} activeSlideIndex={activeSlideIndex} onSwiper={setCarouselSwiper} />
			)}
		</>
	);
};

export default Gallery;
