import AchievementSection from '@/sections/AchievementSection';
import HeroSection from '@/sections/HeroSection';
import ProjectsSection from '@/sections/ProjectsSection';
import ServicesSection from '@/sections/ServicesSection';
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
			<ServicesSection data={data.serviceSectionData} />
			<WhyWeSection data={data.whyWeSectionData} />
			<AchievementSection data={data.achievementSectionData} />
			<ProjectsSection data={data.projectSectionData} />
			<AboutUsSection data={data.aboutUsSectionData} />
			<ContactUsSection data={data.contactSectionData} />
		</>
	);
}
