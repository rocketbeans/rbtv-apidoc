import { streamCount, streamInfo } from "../../../";

export interface AC_STREAM_YOUTUBECHANGED {
	youtubeToken: string;
};

export interface AC_STREAM_COUNT {
	streamCount: streamCount;
};

export interface AC_STREAM_INFO {
	info: streamInfo;
};
