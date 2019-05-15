import { ImageType, Image } from "../../";

export interface IMediacenterImage {
	id: string;
	alt: string | null;
	caption: string | null;
	type: ImageType;
	tags?: Array<string> | null;	// Management only, not exposed to public response
	image: Array<Image>;
};

