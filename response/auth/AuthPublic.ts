
import { token } from "../../shared/"
import { UserExternalAuthProviderType } from "..";

export interface authSuccessResponse {
	token: token;
	refreshToken: token;
};

export interface authRequestTokenResponse {
	token: token;
};

export interface authVerifyRefreshTokenResponse {
	refreshToken: token;
};

export interface authVerifyToken {
	token: token;
};

export interface authProvider {
	name: string;
	publicName: string;
	available: boolean;
	type: UserExternalAuthProviderType;
	sortPrio: number;
};

export const enum UserExternalAuthVerifyResult {
	FAIL = 0,
	SUCCESS = 1, // -> tokens
	SETUP_REQUIRED = 2,
	FAIL_BLOCKED = 3, // user blocked
	FAIL_OTHER = 4,
	SECONDFACTOR_REQ = 5,
	ATTACHED = 6,
	FAIL_ATTACHED_OTHER_ACC = 7,
	FAIL_PROVIDER_ERROR = 8,
	FAIL_NEED_REAUTH = 9	// needs re-authentication 
};

export interface UserExternalAuthVerifyFailNeedReauthResponse {
	result: UserExternalAuthVerifyResult;
	url: string;	// target url 
};

export interface UserExternalAuthVerifyFailProviderErrorResponse {
	result: UserExternalAuthVerifyResult;
	reason: string;	// Example: "access_denied"
	description: string | null; // OPTIONAL:  Example: "The resource owner or authorization server denied the request"
	url: string | null;	// OPTIONAL: A URI identifying a human-readable web page with information about the error
};

export interface UserExternalAuthVerifyFailResponse {
	result: UserExternalAuthVerifyResult;
};

export interface UserExternalAuthVerifySuccessResponse {
	result: UserExternalAuthVerifyResult;
	navigationTarget: string | null;
	token: token | null;
	refreshToken: token | null;
};

export interface UserExternalAuthVerifySetupRequiredResponse {
	result: UserExternalAuthVerifyResult;
	displayName: string | null;
	email: string | null;
};

export interface UserExternalAuthVerifyAttachedResponse {
	result: UserExternalAuthVerifyResult;
	navigationTarget: string | null;
};

export interface UserExternalAuthRegistrationSuccessResponse {
	navigationTarget: string | null;
	token: token | null;
	refreshToken: token | null;
};