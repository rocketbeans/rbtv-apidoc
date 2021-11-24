export const enum TagState {
	CREATED = 0, // Tag has been created, but not yet approved by admin/mod
	APPROVED,    // Tag has been approved by admin/mod and is available for everyone
	BLOCKED     // Tag has been blocked by admin/mod and is only visible to admins/mods
};

export const enum Vote {
	UP = 1, // User voted tag up
	NO = 0,  // User hasn't voted for this
	DOWN = -1 // User voted tag down
};

export interface Tag {
	id: number;
	name: string;
	state: TagState;
	score?: number;
	pinned?: boolean;
	voted?: Vote;
	hidden?: boolean;
};

export interface SingleTagResponse  {
	tag: Tag;
};

export interface MultipleTagsResponse  {
	tags: Tag[];
};

export interface CreateTagRequest {
	name: string;
	mediaId?: number;
};

export interface CreateTagResponse extends SingleTagResponse {
};

export interface GetTagsRequest {
	name?: string;
	mediaId?: number;
};

export interface GetTagsResponse extends MultipleTagsResponse {
};

export interface GetAllTagsRequest {
};

export interface GetAllTagsResponse extends MultipleTagsResponse {
};

export interface UpdateTagRequest {
	name: string;
	state: TagState;
};

export interface UpdateTagResponse extends SingleTagResponse {
};

export interface VoteTagRequest {
	mediaId: number;
	vote: Vote;
};

export interface VoteTagResponse {
};

export interface PinTagRequest {
	mediaId: number;
};

export interface PinTagResponse {
};

export interface UnpinTagRequest {
	mediaId: number;
};

export interface UnpinTagResponse {
};

export interface AddTagRequest {
	mediaId: number;
};

export interface AddTagResponse {
};

export interface RemoveTagRequest {
	mediaId: number;
};

export interface RemoveTagResponse {
};

export interface HideTagRequest {
	mediaId: number;
};

export interface HideTagResponse {
};

export interface UnhideTagRequest {
	mediaId: number;
};

export interface UnhideTagResponse {
};

export interface DeleteTagRequest {
};

export interface DeleteTagResponse extends SingleTagResponse {
};
