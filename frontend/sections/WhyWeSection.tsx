'use client';

import FlexBlocks from '@/components/FlexBlocks/FlexBlocks';
import Heading from '@/components/Heading/Heading';
import Section from '@/components/Section/Section';
import WhyWeBlock from '@/components/WhyWeBlock/WhyWeBlock';
import { whatWeDoSectionQuery } from '@/graphql/queries/WhatWeDoSectionQuery';
import { whyWeSectionQuery } from '@/graphql/queries/WhyWeSectionQuery';
import { IImageData } from '@/types/ImageType';
import { extractDataFromApiResponse, getImageUrl } from '@/utils/utils';
import { useSuspenseQuery } from '@apollo/client';
import React from 'react';
interface IReasonBlock {
	title: string;
	description: string;
	image: string;
}

interface IWhyWeSection {
	sectionTitle: string;
	reasons: IReasonBlock[];
}

const data = {
	sectionTitle: 'Why <span>we?</span>',
	reasons: [
		{
			title: 'Reason 1',
			description:
				'Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
			image: 'https://images.pexels.com/photos/1216544/pexels-photo-1216544.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
		},
		{
			title: 'Reason 2',
			description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
			image: 'https://images.pexels.com/photos/585419/pexels-photo-585419.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
		},
		{
			title: 'Reason 3',
			description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
			image: 'https://images.pexels.com/photos/1094767/pexels-photo-1094767.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
		},
	],
};

const WhyWeSection = (): JSX.Element | null => {
	const { sectionTitle, reasons } = data;

	return (
		<Section>
			<Heading title={sectionTitle}></Heading>
			<FlexBlocks>
				{reasons.map((reason, index) => (
					<WhyWeBlock title={reason.title} description={reason.description} image={reason.image} index={index} key={index} />
				))}
			</FlexBlocks>
		</Section>
	);
};

export default WhyWeSection;
