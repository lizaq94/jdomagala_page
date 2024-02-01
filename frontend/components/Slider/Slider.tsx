import { FreeMode, Navigation, Pagination, Thumbs } from 'swiper/modules';
import { Swiper } from 'swiper/react';
import { FC } from 'react';
import { ReactNode } from 'react';
import classes from '@styles/components/Slider.module.scss';

interface IProps {
	children: ReactNode;
}

const Slider: FC<IProps> = ({ children }) => {
	return (
		<Swiper
			spaceBetween={50}
			slidesPerView={1}
			navigation={true}
			modules={[FreeMode, Navigation, Thumbs, Pagination]}
			className={classes.wrapper}
		>
			{children}
		</Swiper>
	);
};

export default Slider;
