'use client';

import Heading from '@/components/Heading/Heading';
import Section from '@/components/Section/Section';
import WhyWeBlock from '@/components/WhyWeBlock/WhyWeBlock';
import React from 'react';
import { IWhyWeSectionData } from '@/types/cmsTypes';

interface IProps {
	data: IWhyWeSectionData;
}

const WhyWeSection = ({ data }: IProps) => {
	if (!data) return null;

	const { title, blocks, sectionId } = data;

	return (
		<Section id={sectionId}>
			<Heading title={title} />
			<div className="grid grid-cols-1 md:grid-cols-3 gap-6 px-5 md:px-0">
				{blocks.map((block, index) => (
					<WhyWeBlock
						title={block.title}
						description={block.description}
						image={block.image.url}
						index={index}
						key={block.id}
					/>
				))}
			</div>
		</Section>
	);
};

export default WhyWeSection;
