import React from 'react';
import { motion } from 'framer-motion';

interface IProps {
	title: string;
	image: string;
	index: number;
	description: string;
}

const WhyWeBlock = ({ title, description, image, index }: IProps): JSX.Element => {
	const blockNumber = index + 1 < 10 ? `0${index + 1}` : index + 1;
	const fadeInAnimationVariants = {
		initial: { opacity: 0, y: 100 },
		animate: (index: number) => ({ opacity: 1, y: 0, transition: { delay: 0.2 * index } }),
	};

	return (
		<motion.div
			variants={fadeInAnimationVariants}
			initial="initial"
			whileInView="animate"
			viewport={{ once: true }}
			custom={index}
			className="group relative flex flex-col justify-center w-full min-h-[300px] py-[50px] px-[30px] mb-0 text-white bg-cover cursor-pointer md:max-w-[calc(100%/3-20px)] md:rounded-[10px] before:content-[''] before:absolute before:inset-0 before:bg-black/60 before:z-0 md:before:rounded-[10px]"
			style={{ backgroundImage: `url(${image})` }}
		>
			<h3 className="relative z-[1] text-[30px] font-bold leading-[34.5px] mb-2.5">{title}</h3>
			<p className="relative z-[1] text-base font-light leading-[19px]">{description}</p>
			<span className="absolute top-5 right-5 font-black text-[40px] opacity-80 transition-colors duration-300 group-hover:text-primary">
				{blockNumber}
			</span>
		</motion.div>
	);
};

export default WhyWeBlock;
