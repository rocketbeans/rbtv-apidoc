import { SupporterLevel } from "../../shared/";
import { Image } from '../../shared/image';

export const enum UserAccountState {
	BLOCKED = -1,
	ACTIVE = 0,
	VALIDATION = 1,
	OAUTH_PENDING = 2,
}

export const enum UserExternalAuthProviderType {
	AUTH_LOCAL = 0,
	AUTH_GOOGLE = 1,
	AUTH_TWITCH = 2,
	AUTH_STEAM = 3,
	AUTH_REDDIT = 4,
	AUTH_DISCORD = 5,
	AUTH_TWITTER = 6,
	AUTH_FACEBOOK = 7,
	//AUTH_RBTVHUB = 8,
	//AUTH_RBTVHUBADMIN = 9,
	AUTH_NUM
}

export const enum UserGoodiePoolItemAvailability {
	OUT_OF_STOCK = 0,
	IN_STOCK = 1,
	LOW_STOCK = 2,
	ALREADY_CLAIMED = 3
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
	email?: string;						// Requires scope: user.email.read, null if no email set, emailVerificationPending relates to the 'new - to verify' email address, the returned address is still valid
	emailVerificationPending?: boolean;	// Requires scope: user.email.read, if true - there is an email verification pending
	registrationDate?: Date;			// Requires scope: user.registrationdate.read 
	noPasswordSet?: boolean;			// Not possible via App
	secondFactorEnabled?: boolean;		// Not possible via App
	supporterLevel?: SupporterLevel;	// Requires scope: user.supporter.status.read
	permissions?: permissionMap;
	rbtvEventTeam?: number | null;		// Requires scope: user.rbtvevent.read, only set during active rbtvevent; null if no team has been chosen (yet)
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
	type: UserExternalAuthProviderType;
	displayName: string;
	connectTime: Date;
	isValid: boolean;
};

export interface userConnectedAccountsResponse {
	id: number;
	linkedAccounts: Array<connectedAccount>;
};

export interface userRemoveConnectedAccountRequest {
	type: UserExternalAuthProviderType;
}

export interface userSecondFactorBeginSetup {
	type: UserSecondFactorType;
	secret: string;
	url: string;
};

export interface userSecondFactorSetup {
	recoveryCode: string;
};

export const enum UserDigitalGoodieType {
	SUPPORTER = 0,
	CHEATCODE,
	GENERIC,
	NUM // Must be always the last element.
};

export interface UserDigitalGoodie {
	type: UserDigitalGoodieType;
	title: string;
	description: string;
	key: string;
	linkDate: Date;
	thumbnail?: Image[];
	expireDate?: Date; // when the given key will be no longer redeemable
};

export interface UserGoodiePoolItem {
	id: number;
	type: UserDigitalGoodieType;
	title: string;
	description: string;
	status: UserGoodiePoolItemAvailability;
	minimumSupporterLevel: SupporterLevel;
	thumbnail?: Image[];
	expireDate?: Date; // when this goodie pool item will be no longer claimable
	endDate?: Date;
};
