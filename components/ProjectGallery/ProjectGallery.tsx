'use client';
import React, { FC, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode, Thumbs } from 'swiper/modules';
import type { Swiper as SwiperType } from 'swiper';
import CarouselSwiper from '@/components/CarouselSwiper/CarouselSwiper';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import 'swiper/css';
import Image from 'next/image';
import useRwd from '@/hooks/useRwd';

interface IProps {
	photos: string[];
	showCarousel?: boolean;
}

const ProjectGallery: FC<IProps> = ({ photos, showCarousel = false }) => {
	const [carouselSwiper, setCarouselSwiper] = useState<SwiperType | null>(null);
	const [mainSwiper, setMainSwiper] = useState<SwiperType | null>(null);
	const [activeSlideIndex, setActiveSlideIndex] = useState(0);

	const { isRwd } = useRwd();
	const displayCarousel = !isRwd && showCarousel;

	const handlePrev = () => {
		mainSwiper?.slidePrev();
	};

	const handleNext = () => {
		mainSwiper?.slideNext();
	};

	return (
		<div className="relative">
			<div className="relative rounded-lg overflow-hidden">
				<Swiper
					spaceBetween={50}
					slidesPerView={1}
					onSwiper={setMainSwiper}
					onSlideChange={(swiper) => setActiveSlideIndex(swiper.activeIndex)}
					modules={[FreeMode, Thumbs]}
					className="w-full aspect-[4/3] md:aspect-video"
					thumbs={{ swiper: carouselSwiper && !carouselSwiper.destroyed ? carouselSwiper : null }}
				>
					{photos.map((imageSrc, index) => (
						<SwiperSlide key={index}>
							<Image
								src={imageSrc}
								alt={`Slide ${index + 1}`}
								fill
								style={{ objectFit: 'cover' }}
								className="rounded-lg"
							/>
						</SwiperSlide>
					))}
				</Swiper>

				{!isRwd && photos.length > 1 && (
					<>
						<button
							onClick={handlePrev}
							className="absolute left-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full bg-white/90 hover:bg-white shadow-lg flex items-center justify-center transition-all duration-200 hover:scale-105 disabled:opacity-50"
							disabled={activeSlideIndex === 0}
							aria-label="Previous slide"
						>
							<ChevronLeft className="w-6 h-6 text-slate-700" />
						</button>
						<button
							onClick={handleNext}
							className="absolute right-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full bg-white/90 hover:bg-white shadow-lg flex items-center justify-center transition-all duration-200 hover:scale-105 disabled:opacity-50"
							disabled={activeSlideIndex === photos.length - 1}
							aria-label="Next slide"
						>
							<ChevronRight className="w-6 h-6 text-slate-700" />
						</button>
					</>
				)}

				{photos.length > 1 && (
					<div className="absolute bottom-4 right-4 z-10 bg-blue-600 text-white px-4 py-2 rounded-full text-sm font-medium shadow-lg">
						{activeSlideIndex + 1} / {photos.length}
					</div>
				)}
			</div>

			{displayCarousel && (
				<div className="mt-4">
					<CarouselSwiper slides={photos} activeSlideIndex={activeSlideIndex} onSwiper={setCarouselSwiper} />
				</div>
			)}
		</div>
	);
};

export default ProjectGallery;
