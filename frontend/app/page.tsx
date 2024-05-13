import AchievementSection from '@/sections/AchievementSection';
import HeroSection from '@/sections/HeroSection';
import Navigation from '@/components/Navigation/Navigation';
import ProjectsSection from '@/sections/ProjectsSection';
import WhatWeDoSection from '@/sections/WhatWeDoSection';
import WhyWeSection from '@/sections/WhyWeSection';
import AboutUsSection from '@/sections/AboutUsSection';
import ContactUsSection from '@/sections/ContactUsSection';
import { getHomePageData } from '@/lib/api';
import { IHomePageData } from '@/types/cmsTypes';

interface IProps {
	data: IHomePageData;
}

export default async function Home(props: IProps) {
	const data = await getHomePageData();

	if (!data) return null;

	return (
		<>
			<HeroSection data={data.heroSectionData} />
			<WhatWeDoSection data={data.serviceSectionData} />
			{/*<WhyWeSection />*/}
			{/*/!*<AchievementSection />*!/*/}
			{/*/!*<ProjectsSection />*!/*/}
			{/*<AboutUsSection />*/}
			{/*<ContactUsSection />*/}
		</>
	);
}
