'use client';

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
		initial: { opacity: 0, y: 50 },
		animate: (index: number) => ({ opacity: 1, y: 0, transition: { delay: 0.15 * index } }),
	};

	return (
		<motion.div
			variants={fadeInAnimationVariants}
			initial="initial"
			whileInView="animate"
			viewport={{ once: true }}
			custom={index}
			className="group relative flex flex-col justify-end w-full aspect-[4/3] rounded-lg overflow-hidden cursor-pointer bg-slate-900"
		>
			<div
				className="absolute inset-0 bg-cover bg-center transition-transform duration-300 group-hover:scale-105"
				style={{ backgroundImage: `url(${image})` }}
			/>
			<div className="absolute inset-0 bg-black/60" />
			<span className="absolute top-5 right-5 font-bold text-5xl text-white/40 z-10">
				{blockNumber}
			</span>
			<div className="relative z-10 p-6">
				<h3 className="text-2xl font-bold text-white mb-2">{title}</h3>
				<p className="text-base font-light text-white/90 leading-relaxed">{description}</p>
			</div>
		</motion.div>
	);
};

export default WhyWeBlock;
