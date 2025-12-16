import { FreeMode, Pagination } from 'swiper/modules';
import { Swiper } from 'swiper/react';
import { FC } from 'react';
import { ReactNode } from 'react';
import 'swiper/css';
import 'swiper/css/pagination';

interface IProps {
	children: ReactNode;
	height?: number;
}

const Slider: FC<IProps> = ({ children, height = 'auto' }) => {
	return (
		<Swiper
			spaceBetween={50}
			slidesPerView={1}
			pagination={{
				clickable: true,
				dynamicBullets: true,
			}}
			modules={[Pagination, FreeMode]}
			className="w-full pb-12"
			style={{ height: `${height}px` }}
		>
			{children}
		</Swiper>
	);
};

export default Slider;
