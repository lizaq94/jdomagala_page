import React, { FC } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode, Navigation, Thumbs } from 'swiper/modules';
import styles from '@styles/components/CarouselSwiper.module.scss';

interface IProps {
	onSwiper?: any;
}

const CarouselSwiper: FC<IProps> = ({ onSwiper }) => {
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
			<SwiperSlide className={styles.slideWrapper}>
				<img src="https://swiperjs.com/demos/images/nature-1.jpg" />
			</SwiperSlide>
			<SwiperSlide className={styles.slideWrapper}>
				<img src="https://swiperjs.com/demos/images/nature-2.jpg" />
			</SwiperSlide>
			<SwiperSlide className={styles.slideWrapper}>
				<img src="https://swiperjs.com/demos/images/nature-3.jpg" />
			</SwiperSlide>
			<SwiperSlide className={styles.slideWrapper}>
				<img src="https://swiperjs.com/demos/images/nature-4.jpg" />
			</SwiperSlide>
			<SwiperSlide className={styles.slideWrapper}>
				<img src="https://swiperjs.com/demos/images/nature-5.jpg" />
			</SwiperSlide>
			<SwiperSlide className={styles.slideWrapper}>
				<img src="https://swiperjs.com/demos/images/nature-6.jpg" />
			</SwiperSlide>
			<SwiperSlide className={styles.slideWrapper}>
				<img src="https://swiperjs.com/demos/images/nature-7.jpg" />
			</SwiperSlide>
			<SwiperSlide className={styles.slideWrapper}>
				<img src="https://swiperjs.com/demos/images/nature-8.jpg" />
			</SwiperSlide>
			<SwiperSlide className={styles.slideWrapper}>
				<img src="https://swiperjs.com/demos/images/nature-9.jpg" />
			</SwiperSlide>
			<SwiperSlide className={styles.slideWrapper}>
				<img src="https://swiperjs.com/demos/images/nature-10.jpg" />
			</SwiperSlide>
		</Swiper>
	);
};

export default CarouselSwiper;
