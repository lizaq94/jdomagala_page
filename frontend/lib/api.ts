import { IFormData } from '@/types/FormData';
import { homePageQuery } from '@/graphql/queries/HomePageQuery';

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

export const getHomePageContent = async () => {
	if (!process.env.CMS_ENDPOINT) return {};

	const response = await fetch(process.env.CMS_ENDPOINT!, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify({
			query: homePageQuery,
		}),
	});

	const json = await response.json();
	return json.data.homePages;
};
