import { IFormData } from '@/types/FormData';
import { homePageQuery } from '@/graphql/queries/HomePageQuery';
import { IHomePageData, INavigationAndFooterData } from '@/types/cmsTypes';
import { navigationAndFooterQuery } from '@/graphql/queries/NavigationAndFooterQuery';
import { mapperHomePageData, mapperNavigationAndFooterData } from '@/lib/mappers';

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
			}),
		});

		const json = await response.json();

		if (!!json.data) {
			return json.data.homePages[0];
		}
	} catch (erorr) {
		throw errorMessage;
	}
};

export const getHomePageData = async () => {
	const data = await fetchDataFromCMS<IHomePageData>(homePageQuery);

	if (!!data) return mapperHomePageData(data);
};

export const getNavigationAndFooterData = async () => {
	const data = await fetchDataFromCMS<INavigationAndFooterData>(navigationAndFooterQuery);

	if (!!data) return mapperNavigationAndFooterData(data);
};
