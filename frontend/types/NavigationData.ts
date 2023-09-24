import { IImageData } from './ImageType';

export interface INavigationData {
	logo: IImageData;
	navigationButtons: { content: string; link: string }[];
	emailAddress: string;
	phoneNumber: string;
}
