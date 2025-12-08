'use client';

import { motion } from 'framer-motion';
import React from 'react';
import Link from 'next/link';

interface IProps {
	title: string;
	icon: string;
	shortDescription: string;
	buttonText: string;
	index: number;
	slug: string;
}

const ServiceBlock = (props: IProps) => {
	const { title, icon, shortDescription, buttonText, index, slug } = props;
	const fadeInAnimationVariants = {
		initial: { opacity: 0, x: 100 },
		animate: (index: number) => ({ opacity: 1, x: 0, transition: { delay: 0.2 * index } }),
	};

	return (
		<motion.div
			variants={fadeInAnimationVariants}
			initial="initial"
			whileInView="animate"
			viewport={{ once: true }}
			custom={index}
			className="relative w-full mb-[50px] flex flex-col justify-center items-center px-5 md:max-w-[calc(100%/3-40px)] md:px-0"
		>
			<span className="mb-5 [&_img]:w-full [&_img]:h-full">
				<img src={icon} alt="" />
			</span>
			<h3 className="text-base mb-[15px] font-secondary font-normal leading-[1.2]">{title}</h3>
			<p className="text-[15px] font-normal leading-[1.8] mb-5 text-center text-[#6c757d]">{shortDescription}</p>
			<motion.div whileHover={{ y: '-2px' }}>
				<Link href={`/service/${slug}`} className="text-primary text-sm font-bold bg-transparent leading-[1.8] border-none cursor-pointer">
					{buttonText}
				</Link>
			</motion.div>
		</motion.div>
	);
};

export default ServiceBlock;
