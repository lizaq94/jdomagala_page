import { IHomePageData } from '@/types/cmsTypes';

export const mapperHomePageData = (data: any): IHomePageData => {
	return {
		heroSectionData: data.heroSection,
		serviceSectionData: { title: data.serviceSectionTile, sectionId: data.serviceSectionId },
		whyWeSectionData: data.whyWeSection,
		achievementSectionData: data.achievementSection,
		projectSectionData: {
			title: data.projectsSectionTile,
			buttonText: data.projectSectionButtonText,
		},
		aboutUsSectionData: data.aboutUsSection,
		contactSectionData: data.contactSection,
	};
};
