import { IHomePageData, INavigationAndFooterData, IServiceData, IServiceSectionData } from '@/types/cmsTypes';

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

export const mapperServicesData = (data: any[]): IServiceData[] => {
	return data.map((service) => mapperServiceData(service));
};

export const mapperServiceData = (data: any): IServiceData => {
	return {
		id: data.id,
		icon: data.icon,
		title: data.title,
		shortDescription: data.shortDescription,
		heroImage: data.heroImage,
		heroSubtitle: data.heroSubtitle,
		contentSubtitle: data.contentSubtitle,
		content: data.content,
		contactBoxTitle: data.contactBoxTitle,
		contactBoxDescription: data.contactBoxDescription,
		buttonText: data.buttonText,
		slug: data.slug,
	};
};
