import React, { FC } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode, Navigation, Thumbs } from 'swiper/modules';
import Image from 'next/image';

interface IProps {
	slides: string[];
	activeSlideIndex: number;
	onSwiper?: any;
}

const CarouselSwiper: FC<IProps> = ({ onSwiper, slides, activeSlideIndex }) => {
	const getSlide = (imageSrc: string, index: number) => {
		const isActiveSlide = activeSlideIndex === index;
		const slideClasses = `[&_img]:w-full [&_img]:h-full [&_img]:object-contain ${isActiveSlide ? '[&_img]:brightness-50' : ''}`;
		return (
			<SwiperSlide className={slideClasses} key={index}>
				<Image src={imageSrc} alt="Slide" fill={true} style={{ objectFit: 'cover' }} />
			</SwiperSlide>
		);
	};

	return (
		<Swiper
			onSwiper={onSwiper}
			spaceBetween={10}
			slidesPerView={4}
			freeMode={true}
			watchSlidesProgress={true}
			modules={[FreeMode, Navigation, Thumbs]}
			className="h-[200px] w-full"
		>
			{slides.map((slide, index) => getSlide(slide, index))}
		</Swiper>
	);
};

export default CarouselSwiper;
