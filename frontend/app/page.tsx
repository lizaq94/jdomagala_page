'use client';
import HeroSection from '@/sections/HeroSection';
import Navigation from '@/components/Navigation/Navigation';
import styles from '@/styles/components/page.module.scss';
import { useSuspenseQuery } from '@apollo/client';
import { heroSectionQuery } from '@/graphql/queries/HeroSectionQuery';
import { IHeroSectionData } from '@/types/HeroSectionData';
import { extractDataFromApiResponse, getImageUrl } from '@/utils/utils';
import WhatWeDoSection from '@/sections/WhatWeDoSection';
export default function Home() {
	const heroSectionResponse = extractDataFromApiResponse<IHeroSectionData>(useSuspenseQuery(heroSectionQuery));

	const backgroundImage = heroSectionResponse?.backgroundImage;

	const heroSectionImageUrl = !!backgroundImage ? getImageUrl(backgroundImage) : '';

	return (
		<>
			<div className={styles.navigationAndHeroSectionWrapper} style={{ backgroundImage: `url(${heroSectionImageUrl})` }}>
				<Navigation />
				{!!heroSectionResponse && <HeroSection heroSectionData={heroSectionResponse} />}
			</div>
			<WhatWeDoSection />
		</>
	);
}
