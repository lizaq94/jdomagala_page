'use client';

import AnimatedCounter from '@/components/AnimtedCounter/AnimatedCounter';
import React from 'react';
import FlexBlocks from '@/components/FlexBlocks/FlexBlocks';
import Section from '@/components/Section/Section';
import styles from '@/styles/sections/AchievementSection.module.scss';
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
				className={styles.wrapper}
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
