import { IHomePageData, INavigationAndFooterData } from '@/types/cmsTypes';

export const mapperHomePageData = (data: any): IHomePageData => {
	return {
		heroSectionData: data.heroSection,
		serviceSectionData: { title: data.serviceSectionTile },
		whyWeSectionData: data.whyWeSection,
		projectSectionData: {
			title: data.projectsSectionTile,
			buttonText: data.projectSectionButtonText,
		},
		aboutUsSectionData: data.aboutUsSection,
		contactSectionData: data.contactSection,
	};
};

export const mapperNavigationAndFooterData = (data: any): INavigationAndFooterData => {
	return {
		navigationData: data.navigation,
		footerData: { content: data.footerContent },
		metaDate: {
			title: data.metaTitle,
			description: data.metaDescription,
		},
	};
};
