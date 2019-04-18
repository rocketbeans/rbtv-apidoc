
import { Image } from "../../shared/";

export const enum OAuthScopeSeverity {
	DONTCARE,
	WARN,
	CRITICAL
};

export interface OAuthApp {
	id?: string;
	public: boolean;
	name: string;
	description: string;
	redirectURLs: Array<string>;
	icon: Array<Image> | string | null;
	terms: string;
	scopes: Array<string>;
	ownerid?: number; // Owner user id, admin only
};

export interface OAuthAppPreview {
	id: string;
	name: string;
	description: string;
	public: boolean;
};


export interface OAuthScope {
	name: string;
	publicName: string;
	description: string;
	severity: OAuthScopeSeverity;
	special: boolean;
	permissions?: Array<string>; // Admin Only
};

export const enum OAuthAuthResponseType {
	REDIRECT = 0,
	ERROR = 1,
	AUTHORIZATION = 2 
};

export interface OAuthAuthResponse {
	type: OAuthAuthResponseType;
};

export interface OAuthAuthRedirectResponse extends OAuthAuthResponse {
	destination: string; // Destination URL, GET.
};

export interface OAuthAuthErrorResponse extends OAuthAuthResponse {
	code: number;
	message: string;
};

export interface OAuthAuthAppInfo {
	name: string;
	description: string;
	icon: Array<Image>;
	terms: string;
};

export interface OAuthAuthScopeInfo {
	publicName: string;
	description: string;
	severity: OAuthScopeSeverity;
};

export const enum OAuthAuthAuthorizationReason {
	NOAUTH = 0,	// User has never granted permission
	TERMS_CHANGED = 1,	// Terms changed 
	SCOPES_CHANGED = 2	// App requests more scopes than the user has acknowledeged yet
};

export interface OAuthAuthAuthorizationResponse extends OAuthAuthResponse {
	reason: OAuthAuthAuthorizationReason;
	app: OAuthAuthAppInfo;
	scopes: Array<OAuthAuthScopeInfo>;
};

export interface OAuthAuthorizationListItem {
	id: number;
	date: Date;
	app: OAuthAuthAppInfo;
	scopes: Array<OAuthAuthScopeInfo>;
};

export interface OAuthPendingVerificationRequestItem {
	date: Date;
	userId: number;
	displayName: string;
	numApps: number; 
};

export interface OAuthPendingVerificationRequestRejectRequest {
	reason: string; 
};

export interface OAuthPendingVerificationRequestAcknowledgeRequest {
};

