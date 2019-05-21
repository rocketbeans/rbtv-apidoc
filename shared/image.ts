
export interface Image {
	url: string;
	name: string;
	width: number;
	height: number;
};

export const enum ImageType {
	OAUTHAPPTHUMB = 0,		// OAUTH App Thumbnail
	CONTENT = 1,			// Used by markdown pages etc (blog, cms ..)
	BLOG_TITLEIMAGE,		// Used by blog for Title (Header)
	BLOG_THUMBNAIL,			// Used by blog as article image
	BLOG_PROMO,				// used by blog for blog-promo-box
	MEDIA_PROMO,			// Used by Mediathek - Promo Box
	CDKEY_DOWNLOADTHUMB,	// Used by Key/CDKey for Download Item Thumbnail
	SIMPLESHOP_PRODUCT,		// Used by SimpleShop - product image
	RAFFLE_PRIZE_IMAGE,		// Used by Raffle (prize image)
	BOHNE_PORTRAIT,			// Used by Bohne/StaffInfo
	LAST
};

export interface ImageTypeResolution {
	name: string;	// if null, name will be autogenerated by its resolution (= WxH)
	width: number;
	height: number;
};

export interface ImageTypeDefinition {
	maxFileSize: number;

	minWidth: number;
	maxWidth: number;
	minHeight: number;
	maxHeight: number;

	resolutions: Array<ImageTypeResolution>;

	// Upload Via Public ImageController Allowed?
	uploadAllowed: boolean;

	// Required Permission to upload this image type (null=no special permission required)
	requiredPermission: string;

	// Browsable in Mediacenter?
	browsable: boolean;

	// Maxmium Pending per Owner for this type?
	uploadMaxPending: number;
};


// Util Function to compare Array of Image
// Returns: True  if both arrays are equal
//          False if not.
export function compareArrayofImage(a: Array<Image>, b: Array<Image>): boolean {
	if (a == null && b != null)
		return false;

	if (a == null && b == null)
		return true;

	if (a == undefined && b == undefined)
		return true;

	if (a.length != b.length)
		return false; // Obvious

	for (let ita of a) {
		let bFound = false;
		for (let itb of b) {
			if (ita.name == itb.name &&
				ita.url == itb.url &&
				ita.height == itb.height &&
				ita.width == itb.width) {
				bFound = true;
				break;
			}
		}

		if (bFound == false)
			return false;  // element of a is missing in b
	}

	

	return true;
}
