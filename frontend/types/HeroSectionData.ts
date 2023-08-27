import { IImage } from './ImageType';

export interface IHeroSectionData {
	heroSection: {
		data: {
			attributes: {
				title: string;
				description: string;
				backgroundImage: IImage;
			};
		};
	};
}
