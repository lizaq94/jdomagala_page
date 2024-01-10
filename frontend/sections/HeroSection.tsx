'use client';

import Button from '@/components/Button/Button';
import styles from '@styles/sections/HeroSection.module.scss';
import { IHeroSectionData } from '@/types/HeroSectionData';
import { extractDataFromApiResponse, getImageUrl } from '@/utils/utils';
import { useSuspenseQuery } from '@apollo/client';
const HeroSection = () => {
	const heroSectionResponse = extractDataFromApiResponse<IHeroSectionData>(useSuspenseQuery(heroSectionQuery));

	if (!heroSectionResponse) return null;

	const { title, description, backgroundImage } = heroSectionResponse;
	const heroSectionImageUrl = !!backgroundImage ? getImageUrl(backgroundImage) : '';

	return (
		<div className={styles.container}>
			<div className={styles.wrapper}>
				<div className={styles.content}>
					<h1 className={styles.title}>{title}</h1>
					<p className={styles.description}>{description}</p>
					<Button content="Contact" outline={true} hoverEffect={true} />
				</div>
				<div className={styles.background} style={{ backgroundImage: `url(${heroSectionImageUrl})` }} />
			</div>
		</div>
	);
};

import { heroSectionQuery } from '@/graphql/queries/HeroSectionQuery';

export default HeroSection;
