
export interface cmsPageResponse {
	id: string;
	title: string;
	contentMK?: string;
	contentHTML?: string;
	isPublic?: boolean;
	createDate?: Date;
	lastChangeDate: Date;
};

export interface cmsRouteResponse {
	route: string;
	page: string;
	isWildcard: boolean;
	isActive?: boolean;
};
