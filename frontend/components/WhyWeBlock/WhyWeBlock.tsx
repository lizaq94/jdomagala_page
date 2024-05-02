import React from 'react';
import classes from '@styles/sections/WhyWeBlock.module.scss';
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
		animate: (index: number) => ({ opacity: 1, y: 0, transition: { delay: 0.3 * index } }),
	};

	return (
		<motion.div
			variants={fadeInAnimationVariants}
			initial="initial"
			whileInView="animate"
			viewport={{ once: true }}
			custom={index}
			className={classes.wrapper}
			style={{ backgroundImage: `url(${image})` }}
		>
			<h3 className={classes.title}>{title}</h3>
			<p className={classes.description}>{description}</p>
			<span className={classes.blockNumber}>{blockNumber}</span>
		</motion.div>
	);
};

export default WhyWeBlock;
