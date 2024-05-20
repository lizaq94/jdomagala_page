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
		description: data.description,
		scopeOfWorkTitle: data.scopeOfWorkTitle,
		scopeOfWorkItem: data.scopeOfWorkItem,
		projectStatus: data.projectStatus,
		images: data.images,
	};
};
