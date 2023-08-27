'use client';
import HeroSection from '@/section/HeroSection';
import Navigation from '@/components/Navigation/Navigation';
import styles from '@/styles/components/page.module.scss';
import { useSuspenseQuery } from '@apollo/client';
import { heroSectionQuery } from '@/graphql/queries/HeroSectionQuery';
import { IHeroSectionData } from '@/types/HeroSectionData';
import { getImageUrl } from '@/utils/utils';
export default function Home() {
	const { data } = useSuspenseQuery<IHeroSectionData>(heroSectionQuery);
	const heroSectionImageUrl = getImageUrl(data.heroSection.data.attributes.backgroundImage.data.attributes.url);

	return (
		<div className={styles.navigationAndHeroSectionWrapper} style={{ backgroundImage: `url(${heroSectionImageUrl})` }}>
			<Navigation />
			<HeroSection heroSectionData={data} />;
		</div>
	);
}
