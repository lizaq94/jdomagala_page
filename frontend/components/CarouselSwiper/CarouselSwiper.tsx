import React, { FC } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode, Navigation, Thumbs } from 'swiper/modules';
import styles from '@styles/components/CarouselSwiper.module.scss';

interface IProps {
	slides: string[];
	activeSlideIndex: number;
	onSwiper?: any;
}

const CarouselSwiper: FC<IProps> = ({ onSwiper, slides, activeSlideIndex }) => {
	const getSlide = (imageSrc: string, index: number) => {
		const isActiveSlide = activeSlideIndex === index;
		const slideClasses = `${styles.slideWrapper} ${isActiveSlide ? styles.active : ''}`;
		return (
			<SwiperSlide className={slideClasses}>
				<img src={imageSrc} alt={`Thumb ${index}`} />
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
			className={styles.sliderWrapper}
		>
			{slides.map((slide, index) => getSlide(slide, index))}
		</Swiper>
	);
};

export default CarouselSwiper;
