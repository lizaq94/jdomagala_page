import FlexBlocks from '@/components/FlexBlocks/FlexBlocks';
import Heading from '@/components/Heading/Heading';
import Section from '@/components/Section/Section';
import ServiceBlock from '@/components/WhatWeDoBlock/ServiceBlock';
import React from 'react';
import { IServiceSectionData } from '@/types/cmsTypes';
import { getServicesData } from '@/lib/api';

interface IProps {
	data: IServiceSectionData;
}

const ServicesSection = async ({ data }: IProps) => {
	const servicesData = await getServicesData();

	if (!data || !servicesData) return;

	const { title, sectionId } = data;

	return (
		<Section id={sectionId}>
			<Heading title={title} />
			<FlexBlocks>
				{servicesData?.map((service, index) => {
					return (
						<ServiceBlock
							title={service.title}
							icon={service.icon.url}
							shortDescription={service.shortDescription}
							buttonText={service.buttonText}
							key={service.id}
							index={index}
							slug={service.slug}
						/>
					);
				})}
			</FlexBlocks>
		</Section>
	);
};

export default ServicesSection;
