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
			<div className="w-full max-w-container flex flex-col md:flex-row md:h-[600px]">
				<motion.div
					variants={imageAnimationVariants}
					initial="initial"
					whileInView="animate"
					viewport={{ once: true }}
					className="mb-[-10px] md:mb-0 md:mr-[-30px] md:py-[30px] md:flex-[0_0_50%]"
				>
					<img src={image.url} alt="" className="relative w-full h-full object-cover z-[1]" />
				</motion.div>
				<motion.div
					variants={contentAnimationVariants}
					initial="initial"
					whileInView="animate"
					viewport={{ once: true }}
					className="flex flex-col justify-center items-center py-10 px-5 md:py-0 md:px-[30px] md:pl-[60px] bg-primary text-white md:flex-[0_0_50%] [&_p]:text-lg [&_p]:font-light [&_p]:leading-5 [&_p]:font-primary [&_p]:mb-5"
					dangerouslySetInnerHTML={{ __html: marked(content) }}
				/>
			</div>
		</Section>
	);
};

export default AboutUsSection;
