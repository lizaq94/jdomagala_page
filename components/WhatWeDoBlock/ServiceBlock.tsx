'use client';

import { motion } from 'framer-motion';
import React from 'react';
import styles from '@styles/sections/WhatWeDoBlock.module.scss';
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
			className={styles.wrapper}
		>
			<span className={styles.icon}>
				<img src={icon} alt="" />
			</span>
			<h3 className={styles.title}>{title}</h3>
			<p className={styles.shortDescription}>{shortDescription}</p>
			<motion.div whileHover={{ y: '-2px' }}>
				<Link href={`/service/${slug}`} className={styles.button}>
					{buttonText}
				</Link>
			</motion.div>
		</motion.div>
	);
};

export default ServiceBlock;
