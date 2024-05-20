import { INavigationAndFooterData } from '@/types/cmsTypes';

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
