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
	icon: IImageData;
}

interface IWhyWeSection {
	sectionTitle: string;
	reasons: IReasonBlock[];
}
const WhyWeSection = (): JSX.Element | null => {
	const response = extractDataFromApiResponse<IWhyWeSection>(useSuspenseQuery(whyWeSectionQuery));

	if (!response) return null;

	const { sectionTitle, reasons } = response;

	return (
		<Section>
			<Heading>{'Why we?'}</Heading>
			<FlexBlocks>
				{reasons.map((reason, index) => (
					<WhyWeBlock title={sectionTitle} icon={getImageUrl(reason.icon)} description={reason.description} key={index} />
				))}
			</FlexBlocks>
		</Section>
	);
};

export default WhyWeSection;
