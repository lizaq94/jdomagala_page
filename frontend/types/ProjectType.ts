export enum ProjectStatus {
	PENDING = 'pending',
	DONE = 'done',
}

export interface IProjectData {
	title: string;
	description: string;
	localization: string;
	status: ProjectStatus;
	slug: string;
	images: ImageData[];
}
