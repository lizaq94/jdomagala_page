'use client';

import AnimatedCounter from '@/components/AnimtedCounter/AnimatedCounter';
import React from 'react';
import FlexBlocks from '@/components/FlexBlocks/FlexBlocks';
import Section from '@/components/Section/Section';
import { IAchievementSectionData } from '@/types/cmsTypes';

interface IProps {
	data: IAchievementSectionData;
}
const AchievementSection = ({ data }: IProps): JSX.Element | null => {
	if (!data) return null;

	const { backgroundImage, achievementCounters } = data;

	return (
		<Section onFullPage>
			<div
				className="relative w-full flex flex-col justify-center items-center bg-cover my-[50px] py-[30px] text-white md:flex-row md:min-h-[400px] md:my-[100px] before:absolute before:content-[''] before:inset-0 before:bg-black/50"
				style={{
					backgroundImage: `url(${backgroundImage?.url})`,
				}}
			>
				<FlexBlocks additionalClassName="animatedCounters">
					{achievementCounters.map((counter) => (
						<AnimatedCounter to={counter.countNumber} description={counter.description} key={counter.id} />
					))}
				</FlexBlocks>
			</div>
		</Section>
	);
};

export default AchievementSection;
