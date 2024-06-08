import { revalidateTag } from 'next/cache';
import { RevalidateTags } from '@/types/RevalidateTags';

export const revalidateAllDataFromCMS = async () => {
	revalidateTag(RevalidateTags.ALL);
};

export const revalidateServicesDataFromCMS = async () => {
	revalidateTag(RevalidateTags.SERVICES);
};

export const revalidateProjectsDataFromCMS = async () => {
	revalidateTag(RevalidateTags.PROJECTS);
};
