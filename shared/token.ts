
export const enum userAuthTokenType {
	TOKEN_NORMAL = 0,
	TOKEN_REFRESH = 1,
	NUM = 2
};


export interface token {
	type: userAuthTokenType;
	uid: number;
	token: string;
	validUntil: Date;
};


