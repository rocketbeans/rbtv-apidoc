import { SupporterLevel } from "../../shared/";

export const enum UserAccountState {
	BLOCKED = -1,
	ACTIVE = 0,
	VALIDATION = 1,
	OAUTH_PENDING = 2,
}

export const enum UserAuthProviderType {
	AUTH_LOCAL = 0,
	AUTH_GOOGLE = 1,
	AUTH_TWITCH = 2,
	AUTH_STEAM = 3,
	AUTH_REDDIT = 4
}

export const enum UserSecondFactorType {
	GTOTP = 0	// Google Auth / TOTP Based
};

export interface permissionMap {
	[permissionName: string]: boolean;
}

export interface entityUserResponse {
	id: number;
	displayName: string;

	// The Following Fields are optional, only when requesting own user info and/or the neccessary authorization (scopes) is given.
	email?: string;					// Requires scope: user.email.read 
	noPasswordSet?: boolean;		// Not possible via App
	secondFactorEnabled?: boolean;	// Not possible via App
	supporterLevel?: SupporterLevel;// Requires scope: user.supporter.status.read
	permissions?: permissionMap;
	rbtvEventTeam?: number | null;	// Requires scope: user.rbtvevent.read, only set during active rbtvevent; null if no team has been chosen (yet)
};


// Used for Signup (Local Account Creation)
export interface userRegistrationLocalRequest {
	displayName: string;
	email: string;
	password: string;
	acceptTerms: boolean;
	acceptPrivacyPolicy: boolean;
	recaptcha: string;
};

export interface userRegistrationSuccessReponse {
	uid: number;
	displayName: string;
	verificationNeeded: boolean;
};

// Used for Signup ( OAUTH Account Creation)
export interface userRegistrationOAuthRequest {
	oauthToken: string;
	displayName: string;
	acceptTerms: boolean;
	acceptPrivacyPolicy: boolean;
};

export interface userChangePasswordRequest {
	currentPassword?: string;	// Optional if the user has no password set (when created by external auth provider)
	newPassword: string;
};

export interface userChangeEMailRequest {
	currentPassword: string;
	newEMail: string;
};

export interface userResetPasswordRequest {
	email: string;
};

export interface userSetPasswordRequest {
	token: string;
	newPassword: string;
};

export interface userChangeDisplayNameRequest {
	displayname: string;
};

export interface connectedAccount {
	type: UserAuthProviderType;
	displayName: string;
	connectTime: Date;
	isValid: boolean;
};

export interface userConnectedAccountsResponse {
	id: number;
	linkedAccounts: Array<connectedAccount>;
};

export interface userRemoveConnectedAccountRequest {
	type: UserAuthProviderType;
}

export interface userSecondFactorBeginSetup {
	type: UserSecondFactorType;
	secret: string;
	url: string;
};

export interface userSecondFactorSetup {
	recoveryCode: string;
};
