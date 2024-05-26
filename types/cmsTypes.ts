export interface IHomePageData {
	heroSectionData: IHeroSectionData;
	serviceSectionData: IServiceSectionData;
	whyWeSectionData: IWhyWeSectionData;
	achievementSectionData: IAchievementSectionData;
	projectSectionData: IProjectSectionData;
	aboutUsSectionData: IAboutUsSectionData;
	contactSectionData: IContactSectionData;
}

export interface INavigationAndFooterData {
	navigationData: INavigationData;
	footerData: IFooterData;
	metaDate: IMetaData;
}

export interface IServiceData {
	id: string;
	icon: {
		id: string;
		url: string;
	};
	title: string;
	shortDescription: string;
	heroImage: {
		id: string;
		url: string;
	};
	heroSubtitle: string;
	contentSubtitle: string;
	content: string;
	contactBoxTitle: string;
	contactBoxDescription: string;
	buttonText: string;
	buttonUrl: string;
	slug: string;
}

export interface IProjectData {
	id: string;
	slug: string;
	title: string;
	subtitle: string;
	description: string;
	projectInformation: ICMSInput[];
	scopeOfWorkTitle: string;
	scopeOfWorkItems: string[];
	projectStatus: string;
	images: ICMSImage[];
	showGalleryCarousel: boolean;
}

export interface IMetaData {
	title: string;
	description: string;
}

export interface IFooterData {
	content: string;
}

export interface IContactSectionData {
	title: string;
	buttonText: string;
	nameInput: ICMSInput;
	emailInput: ICMSInput;
	phoneInput: ICMSInput;
	messageInput: ICMSInput;
	sectionId: string;
	image: ICMSImage;
}

export interface ICMSInput {
	id: string;
	label: string;
	placeholder: string;
}

export interface IAboutUsSectionData {
	title: string;
	content: string;
	image: ICMSImage;
	sectionId: string;
}

export interface IProjectSectionData {
	title: string;
	buttonText: string;
	sectionId: string;
}

export interface IWhyWeSectionData {
	title: string;
	blocks: IBlockData[];
	sectionId: string;
}

export interface IBlockData {
	id: string;
	title: string;
	description: string;
	image: ICMSImage;
}

export interface IAchievementSectionData {
	achievementCounters: ICounter[];
	backgroundImage: ICMSImage;
}

export interface IServiceSectionData {
	title: string;
	sectionId: string;
}

export interface IHeroSectionData {
	title: string;
	description: string;
	button: ICMSLink;
	imageBackground: ICMSImage;
}

export interface INavigationData {
	id: string;
	logoImage: ICMSImage;
	email: string;
	phoneNumber: string;
	facebookLink: string;
	navigationLinks: ICMSLink[];
}

export interface ICounter {
	id: string;
	countNumber: number;
	description: string;
}

export interface ICMSLink {
	id: string;
	label: string;
	url: string;
}

export interface ICMSImage {
	url: string;
}
