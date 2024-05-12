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

export const getHomePageData = async (): Promise<IHomePageData | undefined> => {
	try {
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

		if (json.data.homePages.length > 0) {
			return mapperHomePageData(json.data.homePages[0]);
		}
	} catch (erorr) {
		throw 'Error with fetching data';
	}
};

interface IHomePageData {
	navigationData: INavigationData;
	heroSectionData: IHeroSectionData;
	serviceSectionData: IServiceSectionData;
	whyWeSectionData: IWhyWeSectionData;
	projectSectionData: IProjectSectionData;
	aboutUsSectionData: IAboutUsSectionData;
	contactSectionData: IContactSectionData;
	footerSectionData: IFooterSectionData;
}

interface IFooterSectionData {
	content: string;
}

interface IContactSectionData {
	title: string;
	buttonText: string;
	nameInput: ICMSInput;
	emailInput: ICMSInput;
	phoneInput: ICMSInput;
	messageInput: ICMSInput;
}

interface ICMSInput {
	label: string;
	placeholder: string;
}

interface IAboutUsSectionData {
	title: string;
	content: string;
	image: ICMSImage;
}

interface IProjectSectionData {
	title: string;
	buttonText: string;
}

interface IWhyWeSectionData {
	title: string;
	blocks: IBlockData[];
}

interface IBlockData {
	id: string;
	title: string;
	description: string;
	image: ICMSImage;
}

interface IServiceSectionData {
	title: string;
}

interface IHeroSectionData {
	title: string;
	description: string;
	button: ICMSLink;
	imageBackground: ICMSImage;
}

interface INavigationData {
	id: string;
	logoImage: ICMSImage;
	email: string;
	phoneNumber: string;
	facebookLink: string;
	navigationLinks: ICMSLink[];
}

interface ICMSLink {
	id: string;
	label: string;
	url: string;
}

interface ICMSImage {
	url: string;
}

const mapperHomePageData = (data: any): IHomePageData => {
	return {
		navigationData: data.navigation,
		heroSectionData: data.heroSection,
		serviceSectionData: { title: data.serviceSectionTile },
		whyWeSectionData: data.whyWeSection,
		projectSectionData: {
			title: data.projectsSectionTile,
			buttonText: data.projectSectionButtonText,
		},
		aboutUsSectionData: data.aboutUsSection,
		contactSectionData: data.contactSection,
		footerSectionData: {
			content: data.footerContent,
		},
	};
};
