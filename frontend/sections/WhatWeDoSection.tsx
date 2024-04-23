import FlexBlocks from '@/components/FlexBlocks/FlexBlocks';
import Heading from '@/components/Heading/Heading';
import Section from '@/components/Section/Section';
import WhatWeDoBlock from '@/components/WhatWeDoBlock/WhatWeDoBlock';
import React from 'react';
import { IImageData } from '@/types/ImageType';

interface IWhatWeDoBlock {
	title: string;
	icon: IImageData;
	shortDescription: string;
	longDescription: string;
	textForButton: string;
}

interface IWhatWeDoSection {
	sectionTitle: string;
	whatWeDoBlocks: IWhatWeDoBlock[];
}

const block = {
	title: 'PRE-CONSTRUCTION',
	icon: '',
	shortDescription: 'Phasellus ac condimentum velit. Nunc pulvinar cursus viverra. Lorem ipsum dolor sit',
	longDescription:
		'Phasellus ac condimentum velit. Nunc pulvinar cursus viverra. Lorem ipsum dolor sit, Phasellus ac condimentum' +
		' velit. Nunc pulvinar cursus viverra. Lorem ipsum dolor sit, Phasellus ac condimentum velit. Nunc pulvinar cursus viverra.' +
		' Lorem ipsum dolor sit',
	textForButton: 'Read more',
};

const data = {
	sectionTitle: 'Our <span>Services</span>',
	whatWeDoBlocks: [block, block, block],
};

const WhatWeDoSection = (): JSX.Element | null => {
	const { sectionTitle, whatWeDoBlocks } = data;

	return (
		<Section>
			<Heading title={sectionTitle} />
			<FlexBlocks>
				{whatWeDoBlocks?.map((block, index) => {
					const { title, icon, shortDescription, longDescription, textForButton } = block;

					return (
						<WhatWeDoBlock
							title={title}
							icon={icon}
							shortDescription={shortDescription}
							longDescription={longDescription}
							buttonText={textForButton}
							key={index}
						/>
					);
				})}
			</FlexBlocks>
		</Section>
	);
};

export default WhatWeDoSection;
