import { IImageData } from '@/types/ImageType';

export interface NavigationButton {
	content: string;
	link: string;
}

export interface INavigationData {
	logo: IImageData;
	navigationButtons: NavigationButton[];
	emailAddress: string;
	phoneNumber: string;
}
