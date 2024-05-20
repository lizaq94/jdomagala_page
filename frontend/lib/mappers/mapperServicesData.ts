import { IServiceData } from '@/types/cmsTypes';

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
		buttonUrl: data.buttonUrl,
		slug: data.slug,
	};
};
