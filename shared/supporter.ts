

export const enum SupporterPaymentProvider {
	PAYPAL = 0,
	PAYPAL_OLD = 1,
	BANKTRANSFER = 2
};

export const enum SupporterLevel {
	NONE = 0,
	SUPPORTER = 1,
	CLUBMEMBER = 2,
};

export interface ISupporterInfo {
	displayName: string;
	subscriptionDate: Date;
	level: SupporterLevel;
};
