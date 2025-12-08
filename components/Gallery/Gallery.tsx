'use client';
import React, { FC, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, FreeMode, Thumbs, Pagination } from 'swiper/modules';
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
				className="flex-1 w-[calc(100%+8%)] -ml-[4%] mb-10 h-full max-h-[500px] aspect-video md:ml-auto md:w-full md:h-[calc(100vh-200px)] md:min-h-[300px] md:max-h-[700px] md:aspect-auto"
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
