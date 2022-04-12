export enum UserDonationStatus {
	NEW,
	INCOMPLETE,
	COMPLETE
};

export interface DonationCampaign {
	id: number;
	name: string;
	description?: string;
	returnURL?: string;
	stats?: DonationCampaignStats;
};

export interface UserDonation {
	id: string;
	donationLink: string;
	donationCampaign: DonationCampaign;
	amount: number;
	message?: string;
	status: UserDonationStatus;
	created: Date;
	updated: Date;
};

export interface DonationCampaignStats {
	campaignId: number;
	numDonations: number;
	total: number;
};
