import { date } from 'zod';
import { ApiResponse, StrapiData } from '@/types/types';
import { type } from 'os';
import { IImageAttributes, IImageData } from '@/types/ImageType';

export const getImageUrl = (imageData: IImageData): string => {
	const image = extractImageData(imageData);

	if (!image) return '';

	return `${process.env.NEXT_PUBLIC_STRAPI_URL}${image.url}`;
};

export const extractDataFromApiResponse = <T>(response: StrapiData<T>): T | null => {
	const keys = Object.keys(response.data);

	if (keys.length === 1) {
		const [key] = keys;
		const responseData = response.data[key];
		if (responseData && responseData.data && responseData.data.attributes) {
			return responseData.data.attributes;
		}
	}
	return null;
};

export const extractImageData = (imageData: IImageData): IImageAttributes | null => {
	const { data } = imageData;

	if (data && typeof data.attributes === 'object') {
		return data.attributes;
	}

	return null;
};
