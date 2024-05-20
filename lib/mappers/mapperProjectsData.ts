import { IProjectData } from '@/types/cmsTypes';

export const mapperProjectsData = (data: any[]): IProjectData[] => {
	return data.map((service) => mapperProjectData(service));
};

export const mapperProjectData = (data: any): IProjectData => {
	return {
		id: data.id,
		slug: data.slug,
		title: data.title,
		subtitle: data.subtitle,
		projectInformation: data.projectInformation,
		description: data.description,
		scopeOfWorkTitle: data.scopeOfWorkTitle,
		scopeOfWorkItems: data.scopeOfWorkItems,
		projectStatus: data.projectStatus,
		images: data.images,
		showGalleryCarousel: data.showGalleryCarousel,
	};
};
