'use client';

import React from 'react';
import Section from '@/components/Section/Section';
import Heading from '@/components/Heading/Heading';
import classes from '@styles/sections/AboutUsSection.module.scss';
import { motion } from 'framer-motion';
import { IAboutUsSectionData } from '@/types/cmsTypes';
import { marked } from 'marked';

interface IProps {
	data: IAboutUsSectionData;
}

const AchievementSection = ({ data }: IProps): JSX.Element | null => {
	if (!data) return null;

	const { title, image, content, sectionId } = data;

	const imageAnimationVariants = {
		initial: {
			opacity: 0,
			x: -100,
		},
		animate: {
			opacity: 1,
			x: 0,
			transition: { duration: 1, delay: 0.2 },
		},
	};

	const contentAnimationVariants = {
		initial: {
			opacity: 0,
			y: 100,
		},
		animate: {
			opacity: 1,
			y: 0,
			transition: { duration: 0.5, delay: 0.2 },
		},
	};

	return (
		<Section id={sectionId}>
			<Heading title={title} />
			<div className={classes.wrapper}>
				<motion.div
					variants={imageAnimationVariants}
					initial="initial"
					whileInView="animate"
					viewport={{ once: true }}
					className={classes.leftSideWrapper}
				>
					<img src={image.url} alt="" />
				</motion.div>
				<motion.div
					variants={contentAnimationVariants}
					initial="initial"
					whileInView="animate"
					viewport={{ once: true }}
					className={classes.rightSideWrapper}
					dangerouslySetInnerHTML={{ __html: marked(content) }}
				/>
			</div>
		</Section>
	);
};

export default AchievementSection;
