import { revalidateTag } from 'next/cache';
import { Tags } from '@/types/Tags';

export const revalidateAllDataFromCMS = async () => {
	revalidateTag(Tags.ALL);
};
