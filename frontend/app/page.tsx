'use client';
import AchievementSection from '@/sections/AchievementSection';
import HeroSection from '@/sections/HeroSection';
import Navigation from '@/components/Navigation/Navigation';
import ProjectsSection from '@/sections/ProjectsSection';
import styles from '@/styles/components/page.module.scss';
import { useSuspenseQuery } from '@apollo/client';
import { heroSectionQuery } from '@/graphql/queries/HeroSectionQuery';
import { IHeroSectionData } from '@/types/HeroSectionData';
import { extractDataFromApiResponse, getImageUrl } from '@/utils/utils';
import WhatWeDoSection from '@/sections/WhatWeDoSection';
import WhyWeSection from '@/sections/WhyWeSection';
import AboutUsSection from '@/sections/AboutUsSection';
import ContactUsSection from '@/sections/ContactUsSection';
export default function Home() {
	return (
		<>
			<HeroSection />
			<WhatWeDoSection />
			<WhyWeSection />
			<AchievementSection />
			<ProjectsSection />
			<AboutUsSection />
			<ContactUsSection />
		</>
	);
}
