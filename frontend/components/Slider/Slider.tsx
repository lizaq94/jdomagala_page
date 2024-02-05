import { FreeMode, Navigation } from 'swiper/modules';
import { Swiper } from 'swiper/react';
import { FC } from 'react';
import { ReactNode } from 'react';
import classes from '@styles/components/Slider.module.scss';
import 'swiper/css';
import 'swiper/css/navigation';
interface IProps {
	children: ReactNode;
	height?: number;
}

const Slider: FC<IProps> = ({ children, height = 'auto' }) => {
	return (
		<Swiper
			spaceBetween={50}
			slidesPerView={1}
			navigation={true}
			modules={[Navigation, FreeMode]}
			className={classes.wrapper}
			style={{ height: `${height}px` }}
		>
			{children}
		</Swiper>
	);
};

export default Slider;
