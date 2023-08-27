'use client';

import Button from '@/components/Button/Button';
import styles from '@/styles/components/HeroSection.module.scss';
import { IHeroSectionData } from '@/types/HeroSectionData';

interface IProps {
	heroSectionData: IHeroSectionData;
}
const HeroSection = ({ heroSectionData: { heroSection } }: IProps) => {
	const imageUrl = heroSection.data.attributes.backgroundImage.data.attributes.url;
	const title = heroSection.data.attributes.title;
	const description = heroSection.data.attributes.description;

	return (
		<div className={styles.wrapper}>
			<div className={styles.content}>
				<h1 className={styles.title}>{title}</h1>
				<p className={styles.description}>{description}</p>
				<Button content="Contact" outline={true} hoverEffect={true} />
			</div>
		</div>
	);
};

export default HeroSection;
