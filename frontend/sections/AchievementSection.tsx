'use client';

import AnimatedCounter from '@/components/AnimtedCounter/AnimatedCounter';
import React from 'react';
import FlexBlocks from '@/components/FlexBlocks/FlexBlocks';
import Section from '@/components/Section/Section';
import styles from '@/styles/sections/AchievementSection.module.scss';
import { extractDataFromApiResponse, getImageUrl } from '@/utils/utils';
import { useSuspenseQuery } from '@apollo/client';
import { achievementSectionQuery } from '@/graphql/queries/AchievmentSectionQuery';
import { IImageData } from '@/types/ImageType';

interface ICounter {
	id: string;
	count: number;
	description: string;
}

interface IAchievementSection {
	background: IImageData;
	counters: ICounter[];
}
const AchievementSection = (): JSX.Element | null => {
	const response = extractDataFromApiResponse<IAchievementSection>(useSuspenseQuery(achievementSectionQuery));

	if (!response) return null;

	const { background, counters } = response;

	return (
		<Section>
			<div
				className={styles.wrapper}
				style={{
					backgroundImage: `url(${getImageUrl(background)})`,
				}}
			>
				<FlexBlocks>
					{counters.map((counter) => (
						<AnimatedCounter to={counter.count} description={counter.description} key={counter.id} />
					))}
				</FlexBlocks>
			</div>
		</Section>
	);
};

export default AchievementSection;
