import { motion } from 'framer-motion';
import React from 'react';
import styles from '@styles/sections/WhatWeDoBlock.module.scss';
import { Buildings } from '@phosphor-icons/react';

interface IProps {
	title: string;
	icon: string;
	shortDescription: string;
	longDescription: string;
	buttonText: string;
	index: number;
}

const WhatWeDoBlock = ({ title, icon, shortDescription, longDescription, buttonText, index }: IProps): JSX.Element => {
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
				<Buildings size={32} />
			</span>
			<h3 className={styles.title}>{title}</h3>
			<p className={styles.shortDescription}>{shortDescription}</p>
			{!!longDescription && (
				<motion.button whileHover={{ y: '-2px' }} className={styles.button}>
					{buttonText}
				</motion.button>
			)}
		</motion.div>
	);
};

export default WhatWeDoBlock;
