'use client';

import { motion } from 'framer-motion';
import React from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

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
			className="bg-white p-8 rounded-lg shadow-sm hover:shadow-lg transition-shadow duration-300 flex flex-col items-center text-center"
		>
			<span className="mb-6 w-12 h-12 flex items-center justify-center">
				<img src={icon} alt="" className="w-full h-full object-contain" />
			</span>
			<h3 className="text-2xl font-bold mb-4 font-secondary">{title}</h3>
			<p className="text-base leading-relaxed mb-6 text-slate-500">{shortDescription}</p>
			<Link
				href={`/service/${slug}`}
				className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-semibold transition-colors duration-200"
			>
				{buttonText}
				<ArrowRight className="w-4 h-4" />
			</Link>
		</motion.div>
	);
};

export default ServiceBlock;
