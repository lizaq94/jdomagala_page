export interface IImageData {
	data: {
		attributes: IImageAttributes;
	};
}

export interface IImageAttributes {
	url: string;
	alternativeText: string;
}
