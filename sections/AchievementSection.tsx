'use client';

import AnimatedCounter from '@/components/AnimtedCounter/AnimatedCounter';
import React from 'react';
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
				className="relative w-full flex flex-col justify-center items-center bg-cover bg-center bg-fixed my-16 py-20 text-white md:min-h-[500px] md:my-24"
				style={{
					backgroundImage: `url(${backgroundImage?.url})`,
				}}
			>
				<div className="absolute inset-0 bg-black/70" />
				<div className="relative z-10 grid grid-cols-1 md:grid-cols-3 gap-12 w-full max-w-container px-5 md:px-8">
					{achievementCounters.map((counter) => (
						<AnimatedCounter to={counter.countNumber} description={counter.description} key={counter.id} />
					))}
				</div>
			</div>
		</Section>
	);
};

export default AchievementSection;
