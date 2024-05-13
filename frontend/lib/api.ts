import { IFormData } from '@/types/FormData';
import { homePageQuery } from '@/graphql/queries/HomePageQuery';
import { IHomePageData, INavigationAndFooterData, IServiceData } from '@/types/cmsTypes';
import { navigationAndFooterQuery } from '@/graphql/queries/NavigationAndFooterQuery';
import {
	mapperHomePageData,
	mapperNavigationAndFooterData,
	mapperServiceData,
	mapperServicesData,
} from '@/lib/mappers';
import { servicesQuery } from '@/graphql/queries/ServicesQuery';
import { serviceQuery } from '@/graphql/queries/ServiceQuery';

export const sendContactForm = async (values: IFormData) =>
	await fetch('/api/form', {
		method: 'POST',
		body: JSON.stringify({
			name: values.name,
			email: values.email,
			phone: values.phone,
			message: values.message,
		}),
		headers: {
			'content-type': 'application/json',
		},
	}).then((res) => {
		if (!res.ok)
			throw new Error('Przepraszamy, nie udało się wysłać wiadomości. Prosimy spróbować ponownie później.');
		return res.json();
	});

export const fetchDataFromCMS = async <T>(
	query: string,
	variables = {},
	errorMessage = 'Failed to fetch data'
): Promise<{ [key: string]: T } | undefined> => {
	try {
		const response = await fetch(process.env.CMS_ENDPOINT!, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				query: query,
				variables: variables,
			}),
		});

		const json = await response.json();

		if (!!json.data) {
			return json.data;
		}
	} catch (erorr) {
		throw errorMessage;
	}
};

export const getHomePageData = async () => {
	const data = await fetchDataFromCMS<IHomePageData[]>(homePageQuery);

	if (!!data) return mapperHomePageData(data.homePages[0]);
};

export const getNavigationAndFooterData = async () => {
	const data = await fetchDataFromCMS<INavigationAndFooterData[]>(navigationAndFooterQuery);

	if (!!data) return mapperNavigationAndFooterData(data.homePages[0]);
};

export const getServicesData = async () => {
	const data = await fetchDataFromCMS<IServiceData[]>(servicesQuery);

	if (!!data) return mapperServicesData(data.services);
};

export const getServiceData = async (slug: string) => {
	const data = await fetchDataFromCMS<IServiceData>(serviceQuery, { slug: slug });

	if (!data?.service) return null;

	return mapperServiceData(data.service);
};
