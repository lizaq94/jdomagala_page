'use client';

import AnimatedCounter from '@/components/AnimtedCounter/AnimatedCounter';
import React from 'react';
import FlexBlocks from '@/components/FlexBlocks/FlexBlocks';
import Section from '@/components/Section/Section';
import styles from '@/styles/sections/AchievementSection.module.scss';
const AchievementSection = (): JSX.Element | null => {
	const response = true;

	if (!response) return null;

	// const { sectionTitle, reasons } = response;

	return (
		<Section>
			<div
				className={styles.wrapper}
				style={{
					background: `url("https://images.squarespace-cdn.com/content/v1/5e26c352156a467eb9ddf40f/29165110-669f-4982-a100-e8278ac5a936/BoM+Pic.png?format=1500w")`,
				}}
			>
				<FlexBlocks>
					<AnimatedCounter to={125} description="some text for " />
				</FlexBlocks>
			</div>
		</Section>
	);
};

export default AchievementSection;
