

export const enum SupporterPaymentProvider {
	PAYPAL = 0,
	PAYPAL_OLD = 1,
	BANKTRANSFER = 2,
	MANUAL_POSTING = 3,
	YOUTUBE_SUBSCRIPTION = 4
};

export const enum SupporterLevel {
	NONE = 0,
	SUPPORTER = 1,
	CLUBMEMBER = 2,
	TIER3 = 3
};

export interface ISupporterInfo {
	displayName: string;
	subscriptionDate: Date;
	level: SupporterLevel;
};

export interface ISupporterBillingTransaction {
	id: number;
	date: Date;
	provider: SupporterPaymentProvider;
	reference: string;
	details: string | null;
	value: number;
};

export enum SupporterSubscriptionTerminationReason {
	SST_NONE = 0,
	SST_OPTION_A = 0x1,
	SST_OPTION_B = 0x2,
	SST_OPTION_C = 0x4,
	SST_OPTION_D = 0x8,
	SST_OPTION_E = 0x10,
	SST_OPTION_F = 0x20,
	SST_OWN_MESSAGE = 0x2000,
	SST_HIDDEN = 0x4000,
	SST_ALL = ( SST_OPTION_A | SST_OPTION_B | SST_OPTION_C | SST_OPTION_D | SST_OPTION_E | SST_OPTION_F | SST_OWN_MESSAGE | SST_HIDDEN )
};

type tSupporterReadableSubscriptionTerminationReasonDict = { [type: number]: string };

export let SupporterReadableSubscriptionTerminationReason: tSupporterReadableSubscriptionTerminationReasonDict = {
	[SupporterSubscriptionTerminationReason.SST_NONE]: 'Keinen Grund angeben',
	[SupporterSubscriptionTerminationReason.SST_OPTION_A]: 'Ich kann mir eine Mitgliedschaft finanziell nicht mehr leisten',
	[SupporterSubscriptionTerminationReason.SST_OPTION_B]: 'Das Programm von RBTV spiegelt meine Interessen nicht (mehr) wider',
	[SupporterSubscriptionTerminationReason.SST_OPTION_C]: 'Mir fehlt Transparenz im Hinblick auf die Verwendung der RBSC-Einnahmen',
	[SupporterSubscriptionTerminationReason.SST_OPTION_D]: 'Mir fehlen exklusive Features',
	[SupporterSubscriptionTerminationReason.SST_OPTION_E]: 'Mir fehlen physische Goodies',
	[SupporterSubscriptionTerminationReason.SST_OPTION_F]: 'Mir gefällt/gefallen eine oder mehrere Werbeintegration/en bzw. ein oder mehrere Werbepartner nicht (gerne unter “Anderer Grund” ausführen)',
	[SupporterSubscriptionTerminationReason.SST_OWN_MESSAGE]: 'Anderer Grund',
	[SupporterSubscriptionTerminationReason.SST_HIDDEN]: 'Versteckter Grund'
};
