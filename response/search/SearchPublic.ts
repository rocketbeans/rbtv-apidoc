import { Image } from "../../shared/";
import { blogPreviewResponse } from "../blog";
import { mediaEpisodePreviewCombinedResponse, mediaShowPreviewResponse } from "../media";


export interface searchResultEpisode {
	id: number;
	title: string;
	showName: string;
	thumbnail: Array<Image>;
	distibutionPublishingDate: Date;
	firstBroadcastdate: Date;
};

export interface searchResultShow {
	id: number;
	title: string;
	thumbnail: Array<Image>;
};

export interface searchResultBlog {
	id: number;
	title: string;
	thumbnail: Array<Image>;
	publishDate: Date;
};

export interface searchResultSeason {
	id: number;
	name?: string;
	numeric: number;
	showId: number;
	showTitle: string;
	thumbnail: Array<Image>;
};

export interface searchResultResonse {
	shows: Array<searchResultShow>;
	episodes: Array<searchResultEpisode>;
	blog: Array<searchResultBlog>;
};



export type filterSearchResultBlog		= blogPreviewResponse;
export type filterSearchResultEpisode	= mediaEpisodePreviewCombinedResponse;
export type filterSearchResultShow		= mediaShowPreviewResponse;
export type filterSearchResultSeason	= searchResultSeason;

export type filterSearchResultData =	Array<filterSearchResultBlog> |
										filterSearchResultEpisode |			// already contains an Array of Data (Episodes), as filterSearchResultEpisode is equal to mediaEpisodePreviewCombinedResponse
										Array<filterSearchResultShow> |
										Array<filterSearchResultSeason>;

export const enum filterContentType {
	VIDEO = 1,
	SHOW = 2,
	SEASON = 3,
	BLOG = 4
};

export interface filterSearchResultPaginationData {
	offset: number;
	limit: number;
	total: number;
};

export interface filterSearchResult {
	paginationData: { [contentType: number /*filterContentType*/]: filterSearchResultPaginationData };
	data: { [contentType: number /*filterContentType*/]: filterSearchResultData };
	resultId: string;
};
