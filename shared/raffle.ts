
import { Image } from "./image";
import { SupporterLevel } from "./supporter";

export const enum RaffleTransactionLogAction {
	CREATE,			
	MODIFY,

	DICEBEGIN,
	DICEEND,

	NOTIFY_WINNER,				// Winning Information
	SEND_PRIZEINFO_WINNER,		// Prize INFO

	PARTICIPATE,
	PARTICIPATE_GUEST,
	PARTICIPATE_GUEST_VALIDATE,
	PARTICIPATE_ADMIN_CHANGE_VALIDATION,

	WINNER_EDIT
};

export interface IRaffleLogWinnerEditData_Info {
	num: number;
	winningPos: number;
	isPhyiscalPrize: boolean;
	digitalPrizeInfo: string;
	trackingInformation: string;
	prizeShipped: boolean;
	internalNote: string;
	externalNote: string;
};

export interface IRaffleLogWinnerEditData {
	num: number;
	old: IRaffleLogWinnerEditData_Info,
	new: IRaffleLogWinnerEditData_Info
};

export interface IRaffleLogParticipateAdminChangeValidation {
	id: number;
	old: boolean;
	new: boolean;
};

export interface IRaffleLogParticipateData {
	supporterLevel: SupporterLevel,
	id: number; // Participation ID
};

export interface IRaffleLogParticipateGuestData {
	createAccount: boolean;
	id: number; // Participation ID
};

export interface IRaffleLogParticipateGuestValidateData {
	id: number; // Participation ID
}

export interface IRaffleLogNotifyWinnerData {
	num: number; // winning number/position
	winningPos: number;
	isLocalUser: boolean;
	userId: number;
	email: string;
	prizeTitle: string;
	prizeImage: Array<Image>;
};

export interface IRaffleLogSendPrizeInfo {
	num: number; // winning number/position
	winningPos: number;
	isLocalUser: boolean;
	userId: number;
	email: string;
	prizeTitle: string;
	prizeImage: Array<Image>;

	isPhyiscalPrize: boolean;
	digitalPrizeInfo: string;
	trackingInformation: string;

	addressVersion: number;
	addressData: string;
	prizeShipped: boolean;

	externalNote: string;
	internalNote: string;
};

export interface IRaffleLogCreateData {
	title: string;
	descriptionMD: string;
	cidescriptionMD: string;
	prizeImage: Array<Image>;
	partnerLogo: Array<Image>;
	productLogo: Array<Image>;
	manufacturerLogo: Array<Image>;

	prizeDescription: string;
	prizeTitle: string;

	publishDate: Date;
	startDate: Date;
	endDate: Date;

	autoDetermineWinner: boolean;
	participationState: RaffleParticipationState;

	numWinners: number;
	minimumSupporterLevel: SupporterLevel;
	termsMD: string;
	slug: string;
	frontendTheme: string;
};

export interface IRaffleLogModifyData {
	old: IRaffleLogCreateData,
	new: IRaffleLogCreateData
};


export const enum RaffleDiceMethod {
	NONE = 0,	// When winners already picked
	SHUFFLE,
	PICK,
};

export interface IRaffleLogDiceEnd {
	type: RaffleDiceMethod,
	winnerids: Array<number>; // participation ids
};



export const enum RaffleParticipationState {
	NOT_SET,
	ENABLED,
	DISABLED,
};

export interface IRaffle {
	id: number;

	title: string;

	groupTag?: string | null;	// ADMIN

	descriptionHTML: string;
	descriptionMD?: string;		// ADMIN

	cidescriptionHTML?: string;	// NULL,	ADMIN/INTERNAL
	cidescriptionMD?: string;	// NULL,	ADMIN

	partnerLogo: Array<Image>;	// NULL
	manufacturerLogo: Array<Image>;	// NULL
	productLogo: Array<Image>;	// NULL

	priceImage: Array<Image> | string;	// Type string is management only
	priceDescriptionHTML: string;	// NULL
	priceDescriptionMD?: string;	// ADMIN

	prizeTitle: string;

	publishDate?: Date;	// ADMIN
	startDate: Date;	// NULL
	endDate: Date;		// NULL

	participationAvailable?: boolean;	// Public Frontend Only
	participationState?: RaffleParticipationState;	// ADMIN Only

	autoDetermineWiner?: boolean;	// ADMIN
	numWinners?: number;	// ADMIN
	minimumSupporterLevel: SupporterLevel;

	frontendTheme: string;
	slug: string;

	termsHTML: string;
	termsMD?: string;	// ADMIN

	raffleWinner?: Array<string>;	// Frontend Only, null

	restrictToGroups?: Array<number>; 	// ADMIN
};


export interface IRaffleTeaser {	// To be used in blog etc
	id: number;
	slug: string;

	title: string;
	descriptionHTML: string;

	startDate: Date;
	endDate: Date;

	participationAvailable?: boolean;	// Pbulic Frontend Only

	frontendTheme: string;

	priceImage: Array<Image>;

	raffleWinner?: Array<string>;	// Frontend Only, null
};


export interface IRaffleShippingAddress {	// VERSION 1
	firstName: string;
	lastName: string;
	address: Array<string>;
	zip: string;
	city: string;
	state: string;
	country: string;
	email?: string;		// only used in some cases, example: guest participation
	allowance: boolean;
};


export interface IRaffleUserParticipation {
	date: Date;
	title: string;
	slug: string;
	priceTitle: string;
};

export interface IRaffleUserWinEntry {
	winningPos: number;
	date: Date;
	title: string;
	prizeTitle: string;
	prizeImage: Array<Image>;

	digitalPriceInformation: string; // null
	prizeShipped: boolean;
	externalNote: string; // null
	trackingInformation: string; //null
};

export interface IRaffleParticipantsStats {
	registered: number;	// User Participations
	guest: number;		// Validated Guest Participations
	pending: number;	// Validation Required
	total: number;		// Total
};

export interface IRaffleAdminListEntry {
	id: number;
	title: string;
	groupTag: string | null;
	publishDate: Date;
	isRunning: boolean;
	isFinished: boolean;
	hasPendingShipments: boolean;	// TRUE when not all winners prizes are shipped
	numParticipants: IRaffleParticipantsStats;
};

export interface IRaffleAdminParticipationUserInfo {
	id: number; // userId
	displayName: string;
};

export interface IRaffleAdminParticipationListEntry {
	id: number;
	ip: string; // HASH 56 Byte
	date: Date;
	user: IRaffleAdminParticipationUserInfo;	// NULL if Guest
	shippingAddress: IRaffleShippingAddress;	// NULL if no GDPR permission
	email: string;
	validated: boolean;
};

export interface IRaffleAdminWinnerListEntry {
	num: number;
	winningPos: number;
	date: Date;

	isPhysicalPrize: boolean;
	digitalPrizeInformation: string;

	prizeTitle: string;

	userId: number;

	shippingAddress: IRaffleShippingAddress;
	email: string;

	prizeShipped: boolean;
	internalNote: string;
	externalNote: string;
	trackingInformation: string;

	prizeShippingNotificationSent: boolean;
};

export interface IRaffleParticipation {
	id: number;
	date: Date;
	ip: string;
	userId: number; // userId	NULL
	shippingAddress: IRaffleShippingAddress;	// NULL
	email: string;
	validated: boolean;	
};

export interface IRaffleTransactionLogEntryUserInfo {
	id: number; // userId
	displayName: string;
};

export interface IRaffleTransactionLogEntry {
	id: number;
	date: Date;
	ip: string;	// can ben null
	user: IRaffleTransactionLogEntryUserInfo; // can be null
	action: RaffleTransactionLogAction;
	data: any; // null || object -> type specific
};
