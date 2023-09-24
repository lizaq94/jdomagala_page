export interface ApiResponse<T> {
	data: {
		attributes: T;
	};
}
export interface StrapiData<T> {
	data: {
		[key: string]: {
			data: {
				attributes: T;
			};
		};
	};
}
