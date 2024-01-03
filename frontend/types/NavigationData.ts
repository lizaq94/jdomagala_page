import { IImageData } from './ImageType';

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
