import { Image } from "../../shared";
import { mediaEpisodePreview, mediaEpisodeProgress } from "../media";

export enum PlaylistType {
	CUSTOM = "custom" as any,				// Von der User*in selbst erzeugte Playlist
	ABO_BOX = "abobox" as any,				// Standard abo box Playlist, die für jede(n) User*in bei der Acc-Erstellung erzeugt wird
	WATCH_LATER = "watchlater" as any,		// Standard watch later Playlist, die für jede(n) User*in bei der Acc-Erstellung erzeugt wird
	WATCH_HISTORY = "watchhistory" as any,	// Standard watch history Playlist, die für jede(n) User*in bei der Acc-Erstellung erzeugt wird
	FILTER = "filter" as any				// Playlist, die aus einem Suchfilter erzeugt wurde / wird
}

export interface Playlist {
	id?: number;
	uuid: string;
	name: string;							// Name der Playlist: max 128 chars.
	description?: string;					// Beschreibungstext: max 256 chars.
	thumbnailMediaId?: number;				// ID der z.B. Episode, aus der die thumpnails stammen.
	thumbnail?: Array<Image>;				// Thumbnails einer, aus der Playlist stammenden, z.B. Episode (siehe thumbnailMediaId).
	icon?: string;							// CSS icon name for systemGenerated lists
	createDate: Date;						// Datum/Uhrzeit wann die Playlist erstellt wurde.
	lastUpdated: Date;						// Datum/Uhrzeit wann die Playlist zuletzt bearbeitet wurde.
	isPublic: boolean;						// Ist die Playlist für jede User*in oder nur für die Owner*in selbst sichtbar?
	ownerName: string;						// Username des Listenerstellers.
	insertItemAt: InsertItemAt;				// Wo sollen neue Media Items in die Playlist eingefügt werden?
	sortType: SortType;						// Gibt an, nach welchem Feld (z.B. Name) die Liste zuletzt sortiert wurde / in Zukunft sortiert werden soll.
	systemGenerated: boolean;				// Liste ist vom System genereiert.
	playlistType: PlaylistType;				// Typ der Playlist: custom (Eigene Playlist) | abobox | watchlater | watchhistory (Nutzerspezifische system Playlisten)
	editPlaylist: boolean;					// User*in kann playlist selbst editieren.
	editPlaylistItem: boolean;				// User*in kann playlist items editieren.
	deletePlaylistItem: boolean;			// User*in kann playlist items entfernen.
	mediaEpisodeIncluded?: boolean;			// Gibt an ob bei z.B. get /all die angegebene media id in der Playlist enthalten ist.
	muteNotifications: boolean;				// Falls true, werden Notifications an den Nutzer bzgl. Listenänderungen unterdrückt.
};

export interface PlaylistItem {
	id?: number;
	order: number;						// Listenindex
	addedDate: Date;					// Wann wurde das Item zur Liste hinzugefügt?
	mediaEpisode: mediaEpisodePreview;	// Eigentliche Episode
	progress?: mediaEpisodeProgress;	// Fortschritt, den die User*in bei diesem Video erreicht hat.
};

export interface CombinedPlaylistResponse {		// Nur bei GetPlaylistById type of Endpunkt
	found?: boolean;							// Only when getting a playlist page by item at index
	playlist: Playlist;
	playlistItems: PlaylistItem[];
	pagination: {								// Pagination parameters der ersten Page
		limit: number;
		offset: number;
		total: number;
	};
};

export enum InsertItemAt {
	FRONT = 'front' as any,					// Füge neue Mediaitems am Anfang der Liste ein
	BACK = 'back' as any					// Füge neue Mediaitems am Endeder Liste ein
};

export enum SortType {						// Gibt an, nach welchem Feld (z.B. Name) die Liste zuletzt sortiert wurde / in Zukunft sortiert werden soll.
											// Neue PlaylistItems können so, korrekt in die Liste eingefügt werden.
	MANUAL = 'manual' as any,				// Nutzer hat die Sortierung der Liste manuell angepasst.
											// Die aktuelle Sortierung nicht wird durch die API nicht verändert.
	EPISODE_ASC = 'episodeASC' as any,		// Sortiert die Liste nach	Episodennummer (S01E02, S01E03 ...) ASC
	EPISODE_DSC = 'episodeDSC' as any,		// 			-- * --			Episodennummer (S01E02, S01E03 ...) DSC
	RELEASE_ASC = 'releaseASC' as any,		// 			-- * --			Releasedatum ASC
	RELEASE_DSC = 'releaseDSC' as any,		// 			-- * --			Releasedatum DSC
	ADDED_ASC =	'addedASC' as any,			//			-- * -- 		Datum an dem die jeweiligen Items zur Liste hinzugefügt ASC
	ADDED_DSC =	'addedDSC' as any			//			-- * -- 		Datum an dem die jeweiligen Items zur Liste hinzugefügt DSC
};

export interface CreatePlaylistRequest {
	name: string;
	description?: string;
	thumbnailMediaId?: number;
	mediaEpisodeId?: number;
	isPublic: boolean;
	insertItemAt: InsertItemAt;
	sortType: SortType;
	systemGenerated: boolean;
	editPlaylist?: boolean;
	editPlaylistItem?: boolean;
	deletePlaylistItem?: boolean;
	muteNotifications: boolean;
};

export interface GetPlaylistRequest {
};

export enum SortPlaylistsBy {
	NAME_ASC = 'nameASC' as any,
	NAME_DESC = 'nameDESC' as any,
	CREATED_DATE_ASC = 'createDateASC'  as any,
	CREATED_DATE_DESC = 'createDateDESC'  as any,
	LAST_UPDATED_ASC = 'lastUpdatedASC' as any,
	LAST_UPDATED_DESC = 'lastUpdatedDESC' as any
}

export interface GetAllPlaylistsRequest {	// Paginated
	includeGenerated?: boolean;				// Falls true, werden zusätzlich system generierte Playlists ausgegeben.
	includeReadOnly?: boolean;				// Falls true, werden zusätzlich Playlists ausgegeben, die die User*in nicht editieren kann.
	includesEpisode?: number;				// Prüfe ebenfalls, ob angegebene Episode in der Playlist bereits vorhanden ist.
	orderBy?: SortPlaylistsBy;				// Sortiere Playlisten nach SortPlaylistsBy
};

export interface GetPlaylistItemsRequest {	// Paginated
	sortType?: SortType;					// Sortiert PlaylistItems (default zu sortType in Playlist)
};

export interface UpdatePlaylistRequest {
	name?: string;
	description?: string;
	thumbnailMediaId?: number;
	isPublic?: boolean;
	insertItemAt?: InsertItemAt;
	sortType?: SortType;
	readOnly?: boolean;
	muteNotifications?: boolean;
	editPlaylist?: boolean;
	editPlaylistItem?: boolean;
	deletePlaylistItem?: boolean;
};

export interface AddPlaylistItemsRequest {
	afterItemId?: number;			// PlaylistItemId, nachdem die PlaylistItems eingefügt werden sollen.
	mediaEpisodes: number[];		// Liste der Episoden IDs, die zur Playlist hinzugefügt werden sollen.
};

export interface MovePlaylistItemsRequest {
	afterItemId: number;			// PlaylistItem ID, nachdem die PlaylistItems eingefügt werden sollen.
	playlistItemIds: number[];		// Liste der PlaylistItem IDs, die in der Playlist verschoben werden sollen.
	offset?: number;				// Pagination parameter die angeben, welche seite nach der muatation zurückgegeben werden soll.
	limit?: number;					// Pagination parameter die angeben, welche seite nach der muatation zurückgegeben werden soll.
};

export interface RemoveAllPlaylistItemsRequest {
};

export interface RemovePlaylistItemsRequest {
	playlistItemIds: number[];		// Liste der PlaylistItem IDs, die von der Playlist entfernt werden sollen.
	mediaEpisodeIds: number[];		// Liste der Episoden IDs, die von der Playlist entfernt werden sollen. (Alle items, die das Video enthalten, werden entfernt)
	offset?: number;				// Pagination parameter die angeben, welche seite nach der muatation zurückgegeben werden soll.
	limit?: number;					// Pagination parameter die angeben, welche seite nach der muatation zurückgegeben werden soll.
};

export interface DeletePlaylistRequest {
};
