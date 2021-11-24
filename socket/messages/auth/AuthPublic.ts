
import { token } from "../../../shared";

export interface AC_AUTHENTICATION_REQ { };

export interface CA_AUTHENTICATION {
	token: string;
	appName: string;
};

export interface CA_PASSWORD_AUTHENTICATION {
	email: string;
	password: string;
	secondFactorToken: string;
	secondFactorRecoveryCode: string;
};

export interface AC_AUTHENTICATION_RESULT {
	result: boolean;
};

export interface AC_PASSWORD_AUTHENTICATION_RESULT extends AC_AUTHENTICATION_RESULT {
	accessToken?: token;
	refreshToken?: token;
}

export interface AC_AUTHENTICATION_RENEW_TOKEN_REQ { };

export interface CA_REFRESH_TOKEN {
	refreshToken: string;
	appId?: string;
}

export interface AC_REFRESH_TOKEN_RESULT extends AC_AUTHENTICATION_RESULT {
	accessToken?: token;
}
