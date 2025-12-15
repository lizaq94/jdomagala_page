'use client';

import React from 'react';
import Section from '@/components/Section/Section';
import Heading from '@/components/Heading/Heading';
import { motion } from 'framer-motion';
import { IAboutUsSectionData } from '@/types/cmsTypes';
import { marked } from 'marked';

interface IProps {
	data: IAboutUsSectionData;
}

const AboutUsSection = ({ data }: IProps): JSX.Element | null => {
	if (!data) return null;

	const { title, image, content, sectionId } = data;

	const imageAnimationVariants = {
		initial: {
			opacity: 0,
			x: -50,
		},
		animate: {
			opacity: 1,
			x: 0,
			transition: { duration: 0.8, delay: 0.2 },
		},
	};

	const contentAnimationVariants = {
		initial: {
			opacity: 0,
			x: 50,
		},
		animate: {
			opacity: 1,
			x: 0,
			transition: { duration: 0.8, delay: 0.4 },
		},
	};

	return (
		<Section id={sectionId}>
			<Heading title={title} />
			<div className="w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-center px-5 md:px-0">
				<motion.div
					variants={imageAnimationVariants}
					initial="initial"
					whileInView="animate"
					viewport={{ once: true }}
					className="relative"
				>
					<img
						src={image.url}
						alt=""
						className="w-full h-auto object-cover rounded-lg shadow-lg"
					/>
				</motion.div>
				<motion.div
					variants={contentAnimationVariants}
					initial="initial"
					whileInView="animate"
					viewport={{ once: true }}
					className="bg-blue-600 text-white p-8 md:p-12 rounded-lg [&_p]:text-lg [&_p]:font-light [&_p]:leading-relaxed [&_p]:mb-4 [&_p:last-child]:mb-0"
					dangerouslySetInnerHTML={{ __html: marked(content) }}
				/>
			</div>
		</Section>
	);
};

export default AboutUsSection;
