

export type tLegacyMGMTMediaType = 'live' | 'premiere' | '';


export interface ILegacyMGMTScheduleItem {
	id: number;
	title: string;
	topic: string;
	show: string;
	timeStart: string;	// format: 2019-05-13T14:45:00+02:00
	timeEnd: string;	// format: 2019-05-13T14:45:00+02:00
	length: number;		// seconds
	type: tLegacyMGMTMediaType;
	game: string;
	youtube: string;
};


export interface ILegacyMGMTScheduleResponseContainer<T> {
	schedule: T;
};

export type LegacyMGMTScheduleCurrentResponse = ILegacyMGMTScheduleItem;
export type LegacyMGMTScheduleListResponse = ILegacyMGMTScheduleResponseContainer<Array<ILegacyMGMTScheduleItem>>;
export type LegacyMGMTScheduleByDayResponse = ILegacyMGMTScheduleResponseContainer<{ [day: string]: Array<ILegacyMGMTScheduleItem> }>;

