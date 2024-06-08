import { IFormData } from '@/types/FormData';
import { homePageQuery } from '@/graphql/queries/HomePageQuery';
import { IHomePageData, INavigationAndFooterData, IProjectData, IServiceData } from '@/types/cmsTypes';
import { navigationAndFooterQuery } from '@/graphql/queries/NavigationAndFooterQuery';
import { mapperHomePageData } from '@/lib/mappers/mapperHomePageData';
import { mapperNavigationAndFooterData } from '@/lib/mappers/mapperNavigationAndFooterData';
import { mapperServiceData, mapperServicesData } from '@/lib/mappers/mapperServicesData';
import { servicesQuery } from '@/graphql/queries/ServicesQuery';
import { serviceQuery } from '@/graphql/queries/ServiceQuery';
import { projectsQuery } from '@/graphql/queries/ProjectsQuery';
import { projectQuery } from '@/graphql/queries/ProjectQuery';
import { RevalidateTags } from '@/types/RevalidateTags';

export const fetchDataFromCMS = async <T>(
	query: string,
	tag = RevalidateTags.ALL,
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
			next: { tags: [tag] },
		});

		const json = await response.json();

		if (json.errors?.length) {
			console.error('Error with fetching data: ', json.errors[0].message);
		} else if (!!json.data) {
			return json.data;
		}
	} catch (erorr) {
		throw errorMessage;
	}
};
import { mapperProjectData, mapperProjectsData } from '@/lib/mappers/mapperProjectsData';
import { Tag } from '@phosphor-icons/react';

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

export const getHomePageData = async () => {
	const data = await fetchDataFromCMS<IHomePageData[]>(homePageQuery, RevalidateTags.ALL);

	if (!!data) return mapperHomePageData(data.homePages[0]);
};

export const getNavigationAndFooterData = async () => {
	const data = await fetchDataFromCMS<INavigationAndFooterData[]>(navigationAndFooterQuery, RevalidateTags.ALL);

	if (!!data) return mapperNavigationAndFooterData(data.homePages[0]);
};

export const getServicesData = async () => {
	const data = await fetchDataFromCMS<IServiceData[]>(servicesQuery, RevalidateTags.SERVICES);

	if (!!data) return mapperServicesData(data.services);
};

export const getServiceData = async (slug: string) => {
	const data = await fetchDataFromCMS<IServiceData>(serviceQuery, RevalidateTags.SERVICES, { slug: slug });

	if (!data?.service) return null;

	return mapperServiceData(data.service);
};

export const getProjectsData = async () => {
	const data = await fetchDataFromCMS<IProjectData[]>(projectsQuery, RevalidateTags.PROJECTS);

	if (!data?.projects) return null;

	return mapperProjectsData(data.projects);
};

export const getProjectData = async (slug: string) => {
	const data = await fetchDataFromCMS<IProjectData>(projectQuery, RevalidateTags.PROJECTS, { slug: slug });

	if (!data?.project) return null;

	return mapperProjectData(data.project);
};
