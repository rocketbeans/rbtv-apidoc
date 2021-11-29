<a name="top"></a>
# Rocket Beans TV API v1.0.0

![](https://rocketbeans.tv/assets/img/API_Logo.png)

This is the official documentation for the [rocketbeans.tv](https://rocketbeans.tv)-API.<br />
<br />

## Base URL

Prepend this URL to each endpoint:

	https://api.rocketbeans.tv/v1
<br />

## Table of contents



- [Blog](#blog)
	- [Get all Blog Posts](#get-all-blog-posts)
	- [Get all Blog Posts (Preview)](#get-all-blog-posts-preview)
	- [Get Single Blog Post](#get-single-blog-post)
	- [Get Single Blog Post (Preview)](#get-single-blog-post-preview)
	
- [Bohne](#bohne)
	- [Get all Bohnen Portraits](#get-all-bohnen-portraits)
	- [Get Single Bohne](#get-single-bohne)
	- [Get Single Bohne Portrait](#get-single-bohne-portrait)
	
- [CMS](#cms)
	- [Get All Routes](#get-all-routes)
	- [Get Single CMS Page](#get-single-cms-page)
	
- [Frontend](#frontend)
	- [Frontend Initialization Information](#frontend-initialization-information)
	
- [Mediathek Episode](#mediathek-episode)
	- [Get Episodes of Bohne](#get-episodes-of-bohne)
	- [Get Single Episode](#get-single-episode)
	- [Get all Episodes of Season](#get-all-episodes-of-season)
	- [Get all Episodes By Show](#get-all-episodes-by-show)
	- [Get the last published Episodes (Preview)](#get-the-last-published-episodes-preview)
	- [Get Abobox Content for self](#get-abobox-content-for-self)
	- [Get all unsorted (no season set) Episodes By Show](#get-all-unsorted-no-season-set-episodes-by-show)
	- [Get Episodes of Bohne (Preview)](#get-episodes-of-bohne-preview)
	- [Get Single Episode (Preview)](#get-single-episode-preview)
	- [Get all Episodes of Season (Preview)](#get-all-episodes-of-season-preview)
	- [Get all Episodes By Show (Preview)](#get-all-episodes-by-show-preview)
	- [Get all unsorted Episodes By Show (Preview)](#get-all-unsorted-episodes-by-show-preview)
	
- [Mediathek Show](#mediathek-show)
	- [Get all Shows](#get-all-shows)
	- [Get Single Show](#get-single-show)
	- [Get all featured Shows (Preview)](#get-all-featured-shows-preview)
	- [Get all Shows (Preview)](#get-all-shows-preview)
	- [Get Single Show (Preview)](#get-single-show-preview)
	- [Get all Shows (PreviewMini)](#get-all-shows-previewmini)
	
- [Playlist](#playlist)
	- [Add playlist items to playlist](#add-playlist-items-to-playlist)
	- [Add playlist items to playlist by playlist type](#add-playlist-items-to-playlist-by-playlist-type)
	- [Create new playlist](#create-new-playlist)
	- [Delete playlist by id](#delete-playlist-by-id)
	- [Get all playlists](#get-all-playlists)
	- [Get playlist by playlist ID at certain playlist index](#get-playlist-by-playlist-id-at-certain-playlist-index)
	- [Get playlist by playlist type](#get-playlist-by-playlist-type)
	- [Get playlist by UUID](#get-playlist-by-uuid)
	- [Get playlist items by playlist id](#get-playlist-items-by-playlist-id)
	- [Move playlist items on playlist](#move-playlist-items-on-playlist)
	- [Remove all playlist items from playlist by id](#remove-all-playlist-items-from-playlist-by-id)
	- [Remove playlist items from playlist by id](#remove-playlist-items-from-playlist-by-id)
	- [Update playlist by id](#update-playlist-by-id)
	
- [RBTVEvent](#rbtvevent)
	- [Get the current active RBTV Event](#get-the-current-active-rbtv-event)
	- [Get RBTV Event Team Information](#get-rbtv-event-team-information)
	- [Get joined RBTV Event Team](#get-joined-rbtv-event-team)
	- [Join a RBTV Event Team](#join-a-rbtv-event-team)
	
- [Schedule](#schedule)
	- [Get by-day schedule](#get-by-day-schedule)
	- [Get by-day publish schedule](#get-by-day-publish-schedule)
	- [Get by-day page-ready schedule](#get-by-day-page-ready-schedule)
	
- [ScheduleLegacy](#schedulelegacy)
	- [Get current running show](#get-current-running-show)
	- [Get current week schedule](#get-current-week-schedule)
	- [Get current week schedule grouped by day](#get-current-week-schedule-grouped-by-day)
	- [Get the next n scheduled shows](#get-the-next-n-scheduled-shows)
	
- [Shop](#shop)
	- [Get All Products](#get-all-products)
	
- [StreamCount](#streamcount)
	- [Get Current Viewer Count](#get-current-viewer-count)
	
- [Tag](#tag)
	- [Add tag to existing media episode](#add-tag-to-existing-media-episode)
	- [Create new tag with name and optionally pin it to media episode](#create-new-tag-with-name-and-optionally-pin-it-to-media-episode)
	- [Delete tag](#delete-tag)
	- [Get all tags](#get-all-tags)
	- [Get tags by partial name / media episode](#get-tags-by-partial-name-/-media-episode)
	- [Hide tag on existing media episode](#hide-tag-on-existing-media-episode)
	- [Pin tag to existing media item](#pin-tag-to-existing-media-item)
	- [Remove tag from existing media episode](#remove-tag-from-existing-media-episode)
	- [Unhide tag on existing media episode](#unhide-tag-on-existing-media-episode)
	- [Unpin tag from existing media episode](#unpin-tag-from-existing-media-episode)
	- [Update tag](#update-tag)
	- [Vote for tag](#vote-for-tag)
	
- [User](#user)
	- [Request own User Information](#request-own-user-information)
	

<br />

# Blog

## Get all Blog Posts


<p>Returns all blog posts for the given pagination parameters</p>

	GET /blog/all




### Parameters

| Name    | Type      | Default   | Description                          |
|---------|-----------|-----------|--------------------------------------|
| offset | number |  | (optional) Offset from the start |
| limit | number | 4 | (optional) Limits the number of returned blog posts. Maximum is 50. |

### Returns
Interface: **[blogResponse](https://github.com/rocketbeans/rbtv-apidoc/blob/91e85c2b60c25a4dac50a2f1f6089b7daaa397af/response/blog/BlogPublic.ts#L20)**

<br />

## Get all Blog Posts (Preview)


<p>Returns all blog posts for the given pagination parameters</p>

	GET /blog/preview/all




### Parameters

| Name    | Type      | Default   | Description                          |
|---------|-----------|-----------|--------------------------------------|
| offset | number |  | (optional) Offset from the start |
| limit | number | 4 | (optional) Limits the number of returned blog posts. Maximum is 50. |

### Returns
Interface: **[blogPreviewResponse](https://github.com/rocketbeans/rbtv-apidoc/blob/91e85c2b60c25a4dac50a2f1f6089b7daaa397af/response/blog/BlogPublic.ts#L54)**

<br />

## Get Single Blog Post




	GET /blog/:id




### Parameters

| Name    | Type      | Default   | Description                          |
|---------|-----------|-----------|--------------------------------------|
| id | number |  |  The blog post ID |

### Returns
Interface: **[blogResponse](https://github.com/rocketbeans/rbtv-apidoc/blob/91e85c2b60c25a4dac50a2f1f6089b7daaa397af/response/blog/BlogPublic.ts#L20)**

<br />

## Get Single Blog Post (Preview)




	GET /blog/preview/:id




### Parameters

| Name    | Type      | Default   | Description                          |
|---------|-----------|-----------|--------------------------------------|
| id | number |  |  The blog post ID |

### Returns
Interface: **[blogPreviewResponse](https://github.com/rocketbeans/rbtv-apidoc/blob/91e85c2b60c25a4dac50a2f1f6089b7daaa397af/response/blog/BlogPublic.ts#L54)**

<br />


[Back to top](#top)<br />

---
<br />

# Bohne

## Get all Bohnen Portraits


<p>Returns reduced information about all team members.</p>

	GET /bohne/portrait/all




### Returns
Interface: **[bohnePortrait](https://github.com/rocketbeans/rbtv-apidoc/blob/91e85c2b60c25a4dac50a2f1f6089b7daaa397af/shared/bohneportrait.ts#L4)**

<br />

## Get Single Bohne


<p>Returns information about a single team member.</p>

	GET /bohne/:mgmtid




### Parameters

| Name    | Type      | Default   | Description                          |
|---------|-----------|-----------|--------------------------------------|
| mgmtid | number |  |  The RocketMGMT ID for this bohne |

### Returns
Interface: **[bohneResponse](https://github.com/rocketbeans/rbtv-apidoc/blob/91e85c2b60c25a4dac50a2f1f6089b7daaa397af/response/bohne/BohnePublic.ts#L7)**

<br />

## Get Single Bohne Portrait


<p>Returns reduced information about a given team member.</p>

	GET /bohne/portrait/:mgmtid




### Parameters

| Name    | Type      | Default   | Description                          |
|---------|-----------|-----------|--------------------------------------|
| mgmtid | number |  |  The RocketMGMT ID for this bohne |

### Returns
Interface: **[bohnePortrait](https://github.com/rocketbeans/rbtv-apidoc/blob/91e85c2b60c25a4dac50a2f1f6089b7daaa397af/shared/bohneportrait.ts#L4)**

<br />


[Back to top](#top)<br />

---
<br />

# CMS

## Get All Routes


<p>Returns all CMS routes (frontend paths which are connected to CMS pages)</p>

	GET /cms/route/all




### Returns
Interface: **[cmsRouteResponse](https://github.com/rocketbeans/rbtv-apidoc/blob/91e85c2b60c25a4dac50a2f1f6089b7daaa397af/response/cms/CMSPublic.ts#L12)**

<br />

## Get Single CMS Page


<p>Returns the given CMS page</p>

	GET /cms/:id




### Parameters

| Name    | Type      | Default   | Description                          |
|---------|-----------|-----------|--------------------------------------|
| id | string |  |  The Page ID |

### Returns
Interface: **[cmsPageResponse](https://github.com/rocketbeans/rbtv-apidoc/blob/91e85c2b60c25a4dac50a2f1f6089b7daaa397af/response/cms/CMSPublic.ts#L2)**

<br />


[Back to top](#top)<br />

---
<br />

# Frontend

## Frontend Initialization Information


<p>Returns necessary information for frontend initialization, such as current stream details, cms routes etc.</p>

	GET /frontend/init




### Returns
Interface: **[frontendInitResponse](https://github.com/rocketbeans/rbtv-apidoc/blob/91e85c2b60c25a4dac50a2f1f6089b7daaa397af/response/frontend/FrontendPublic.ts#L8)**

<br />


[Back to top](#top)<br />

---
<br />

# Mediathek Episode

## Get Episodes of Bohne


<p>Returns information about all episodes for the given Bohne.</p>

	GET /media/episode/bybohne/:id




### Parameters

| Name    | Type      | Default   | Description                          |
|---------|-----------|-----------|--------------------------------------|
| id | number |  |  RocketMGMT ID of the Bohne |
| offset | number |  | (optional) Offset from the start |
| limit | number | 10 | (optional) Number of items to return. Maximum is 50. |
| order | string | ASC | (optional) Sort Order; ASC -&gt; Oldest item First; DESC -&gt; Newest item First |

### Returns
Interface: **[mediaEpisodeCombinedResponse](https://github.com/rocketbeans/rbtv-apidoc/blob/91e85c2b60c25a4dac50a2f1f6089b7daaa397af/response/media/MediaPublic.ts#L123)**

<br />

## Get Single Episode


<p>Returns information about a single episode.</p>

	GET /media/episode/:id




### Parameters

| Name    | Type      | Default   | Description                          |
|---------|-----------|-----------|--------------------------------------|
| id | number |  |  Episode ID |

### Returns
Interface: **[mediaEpisodeCombinedResponse](https://github.com/rocketbeans/rbtv-apidoc/blob/91e85c2b60c25a4dac50a2f1f6089b7daaa397af/response/media/MediaPublic.ts#L123)**

<br />

## Get all Episodes of Season


<p>Returns information about all episodes of a given season.</p>

	GET /media/episode/byseason/:id




### Parameters

| Name    | Type      | Default   | Description                          |
|---------|-----------|-----------|--------------------------------------|
| id | number |  |  Season ID |
| offset | number |  | (optional) Offset from the start |
| limit | number | 10 | (optional) Number of items to return. Maximum is 50. |
| order | string | ASC | (optional) Sort Order; ASC -&gt; Oldest item First; DESC -&gt; Newest item First |

### Returns
Interface: **[mediaEpisodeCombinedResponse](https://github.com/rocketbeans/rbtv-apidoc/blob/91e85c2b60c25a4dac50a2f1f6089b7daaa397af/response/media/MediaPublic.ts#L123)**

<br />

## Get all Episodes By Show


<p>Returns information about all episodes for the given show.</p>

	GET /media/episode/byshow/:id




### Parameters

| Name    | Type      | Default   | Description                          |
|---------|-----------|-----------|--------------------------------------|
| id | number |  |  Show ID |
| offset | number |  | (optional) Offset from the start |
| limit | number | 10 | (optional) Number of items to return. Maximum is 50. |
| order | string | ASC | (optional) Sort Order; ASC -&gt; Oldest item First; DESC -&gt; Newest item First |

### Returns
Interface: **[mediaEpisodeCombinedResponse](https://github.com/rocketbeans/rbtv-apidoc/blob/91e85c2b60c25a4dac50a2f1f6089b7daaa397af/response/media/MediaPublic.ts#L123)**

<br />

## Get the last published Episodes (Preview)




	GET /media/episode/preview/newest




### Parameters

| Name    | Type      | Default   | Description                          |
|---------|-----------|-----------|--------------------------------------|
| offset | number |  | (optional) Offset from the start |
| limit | number | 8 | (optional) Number of items to return. Maximum is 50. |
| order | string | ASC | (optional) Sort Order; ASC -&gt; Oldest item First; DESC -&gt; Newest item First |

### Returns
Interface: **[mediaEpisodePreviewCombinedResponse](https://github.com/rocketbeans/rbtv-apidoc/blob/91e85c2b60c25a4dac50a2f1f6089b7daaa397af/response/media/MediaPublic.ts#L117)**

<br />

## Get Abobox Content for self


<p>Returns all episodes from subscribed shows and bohnen for the authorised user.</p>

	GET /media/abobox/self




### Parameters

| Name    | Type      | Default   | Description                          |
|---------|-----------|-----------|--------------------------------------|
| offset | number |  | (optional) Offset from the start |
| limit | number | 8 | (optional) Number of items to return. Maximum is 50. |

### Returns
Interface: **[mediaEpisodePreviewCombinedResponse](https://github.com/rocketbeans/rbtv-apidoc/blob/91e85c2b60c25a4dac50a2f1f6089b7daaa397af/response/media/MediaPublic.ts#L117)**

<br />

## Get all unsorted (no season set) Episodes By Show


<p>Returns information about all unsorted (no season set) episodes for the given show.</p>

	GET /media/episode/byshow/unsorted/:id




### Parameters

| Name    | Type      | Default   | Description                          |
|---------|-----------|-----------|--------------------------------------|
| id | number |  |  Show ID |
| offset | number |  | (optional) Offset from the start |
| limit | number | 10 | (optional) Number of items to return. Maximum is 50. |
| order | string | ASC | (optional) Sort Order; ASC -&gt; Oldest item First; DESC -&gt; Newest item First |

### Returns
Interface: **[mediaEpisodePreviewCombinedResponse](https://github.com/rocketbeans/rbtv-apidoc/blob/91e85c2b60c25a4dac50a2f1f6089b7daaa397af/response/media/MediaPublic.ts#L117)**

<br />

## Get Episodes of Bohne (Preview)


<p>Returns reduced information about all episodes for the given Bohne.</p>

	GET /media/episode/bybohne/preview/:id




### Parameters

| Name    | Type      | Default   | Description                          |
|---------|-----------|-----------|--------------------------------------|
| id | number |  |  RocketMGMT ID of the Bohne |
| order | string | ASC | (optional) Sort Order; ASC -&gt; Oldest item First; DESC -&gt; Newest item First |

### Returns
Interface: **[mediaEpisodePreviewCombinedResponse](https://github.com/rocketbeans/rbtv-apidoc/blob/91e85c2b60c25a4dac50a2f1f6089b7daaa397af/response/media/MediaPublic.ts#L117)**

<br />

## Get Single Episode (Preview)


<p>Returns reduced information about a single episode.</p>

	GET /media/episode/preview/:id




### Parameters

| Name    | Type      | Default   | Description                          |
|---------|-----------|-----------|--------------------------------------|
| id | number |  |  Episode ID |

### Returns
Interface: **[mediaEpisodePreviewCombinedResponse](https://github.com/rocketbeans/rbtv-apidoc/blob/91e85c2b60c25a4dac50a2f1f6089b7daaa397af/response/media/MediaPublic.ts#L117)**

<br />

## Get all Episodes of Season (Preview)


<p>Returns reduced information about all episodes of a given season.</p>

	GET /media/episode/byseason/preview/:id




### Parameters

| Name    | Type      | Default   | Description                          |
|---------|-----------|-----------|--------------------------------------|
| id | number |  |  Season ID |
| offset | number |  | (optional) Offset from the start |
| limit | number | 10 | (optional) Number of items to return. Maximum is 50. |
| order | string | ASC | (optional) Sort Order; ASC -&gt; Oldest item First; DESC -&gt; Newest item First |

### Returns
Interface: **[mediaEpisodePreviewCombinedResponse](https://github.com/rocketbeans/rbtv-apidoc/blob/91e85c2b60c25a4dac50a2f1f6089b7daaa397af/response/media/MediaPublic.ts#L117)**

<br />

## Get all Episodes By Show (Preview)


<p>Returns reduced information about all episodes for the given show.</p>

	GET /media/episode/byshow/preview/:id




### Parameters

| Name    | Type      | Default   | Description                          |
|---------|-----------|-----------|--------------------------------------|
| id | number |  |  Show ID |
| offset | number |  | (optional) Offset from the start |
| limit | number | 10 | (optional) Number of items to return. Maximum is 50. |
| order | string | ASC | (optional) Sort Order; ASC -&gt; Oldest item First; DESC -&gt; Newest item First |

### Returns
Interface: **[mediaEpisodePreviewCombinedResponse](https://github.com/rocketbeans/rbtv-apidoc/blob/91e85c2b60c25a4dac50a2f1f6089b7daaa397af/response/media/MediaPublic.ts#L117)**

<br />

## Get all unsorted Episodes By Show (Preview)


<p>Returns reduced information about all unsorted (no season set) episodes for the given show.</p>

	GET /media/episode/byshow/unsorted/preview/:id




### Parameters

| Name    | Type      | Default   | Description                          |
|---------|-----------|-----------|--------------------------------------|
| id | number |  |  Show ID |
| offset | number |  | (optional) Offset from the start |
| limit | number | 10 | (optional) Number of items to return. Maximum is 50. |
| order | string | ASC | (optional) Sort Order; ASC -&gt; Oldest item First; DESC -&gt; Newest item First |

### Returns
Interface: **[mediaEpisodePreviewCombinedResponse](https://github.com/rocketbeans/rbtv-apidoc/blob/91e85c2b60c25a4dac50a2f1f6089b7daaa397af/response/media/MediaPublic.ts#L117)**

<br />


[Back to top](#top)<br />

---
<br />

# Mediathek Show

## Get all Shows




	GET /media/show/all




### Parameters

| Name    | Type      | Default   | Description                          |
|---------|-----------|-----------|--------------------------------------|
| offset | number |  | (optional) Offset from the start |
| limit | number | 8 | (optional) Number of items to return. Maximum is 50. |
| sortby | string | LastEpisode | (optional) possible values: LastEpisode | Title |
| only | string |  | (optional) possible values: podcast | showcase |

### Returns
Interface: **[mediaShowResponse](https://github.com/rocketbeans/rbtv-apidoc/blob/91e85c2b60c25a4dac50a2f1f6089b7daaa397af/response/media/MediaPublic.ts#L14)**

<br />

## Get Single Show


<p>Returns information about the given show.</p>

	GET /media/show/:id




### Parameters

| Name    | Type      | Default   | Description                          |
|---------|-----------|-----------|--------------------------------------|
| id | number |  |  Show ID |

### Returns
Interface: **[mediaShowResponse](https://github.com/rocketbeans/rbtv-apidoc/blob/91e85c2b60c25a4dac50a2f1f6089b7daaa397af/response/media/MediaPublic.ts#L14)**

<br />

## Get all featured Shows (Preview)




	GET /media/show/preview/featured




### Parameters

| Name    | Type      | Default   | Description                          |
|---------|-----------|-----------|--------------------------------------|
|  |  |  |   |

### Returns
Interface: **[mediaShowPreviewResponse](https://github.com/rocketbeans/rbtv-apidoc/blob/91e85c2b60c25a4dac50a2f1f6089b7daaa397af/response/media/MediaPublic.ts#L35)**

<br />

## Get all Shows (Preview)


<p>Returns paginated, reduced information about all shows.</p>

	GET /media/show/preview/all




### Parameters

| Name    | Type      | Default   | Description                          |
|---------|-----------|-----------|--------------------------------------|
| offset | number |  | (optional) Offset from the start |
| limit | number | 8 | (optional) Number of items to return. Maximum is 50. |
| sortby | string | LastEpisode | (optional) possible values: LastEpisode | Title |
| only | string |  | (optional) Filters by attribute. Possible values: podcast | showcase |

### Returns
Interface: **[mediaShowPreviewResponse](https://github.com/rocketbeans/rbtv-apidoc/blob/91e85c2b60c25a4dac50a2f1f6089b7daaa397af/response/media/MediaPublic.ts#L35)**

<br />

## Get Single Show (Preview)


<p>Returns reduced information about the given show.</p>

	GET /media/show/preview/:id




### Parameters

| Name    | Type      | Default   | Description                          |
|---------|-----------|-----------|--------------------------------------|
| id | number |  |  Show ID |

### Returns
Interface: **[mediaShowPreviewResponse](https://github.com/rocketbeans/rbtv-apidoc/blob/91e85c2b60c25a4dac50a2f1f6089b7daaa397af/response/media/MediaPublic.ts#L35)**

<br />

## Get all Shows (PreviewMini)


<p>Returns minimal information about all shows.</p>

	GET /media/show/preview/mini/all




### Parameters

| Name    | Type      | Default   | Description                          |
|---------|-----------|-----------|--------------------------------------|
| sortby | string | LastEpisode | (optional) possible values: LastEpisode | Title |
| only | string |  | (optional) Filters by attribute. Possible values: podcast | showcase |

### Returns
Interface: **[mediaShowPreviewMiniResponse](https://github.com/rocketbeans/rbtv-apidoc/blob/91e85c2b60c25a4dac50a2f1f6089b7daaa397af/response/media/MediaPublic.ts#L46)**

<br />


[Back to top](#top)<br />

---
<br />

# Playlist

## Add playlist items to playlist


<p>Add playlist items to playlist</p>

	POST /playlist/:id/addPlaylistItems




### Returns
Interface: **[PlaylistItem](https://github.com/rocketbeans/rbtv-apidoc/blob/91e85c2b60c25a4dac50a2f1f6089b7daaa397af/response/playlist/PlaylistPublic.ts#L35)**

<br />

## Add playlist items to playlist by playlist type


<p>Add playlist items to playlist by playlist type</p>

	POST /playlist/addToSystemPlaylist/:playlistType




### Returns
Interface: **[PlaylistItem](https://github.com/rocketbeans/rbtv-apidoc/blob/91e85c2b60c25a4dac50a2f1f6089b7daaa397af/response/playlist/PlaylistPublic.ts#L35)**

<br />

## Create new playlist


<p>Create new playlist</p>

	POST /playlist




### Returns
Interface: **[Playlist](https://github.com/rocketbeans/rbtv-apidoc/blob/91e85c2b60c25a4dac50a2f1f6089b7daaa397af/response/playlist/PlaylistPublic.ts#L12)**

<br />

## Delete playlist by id


<p>Delete playlist by id</p>

	DELETE /playlist/:id




<br />

## Get all playlists


<p>Returns all playlists</p>

	GET /playlist/all




### Returns
Interface: **[Playlist](https://github.com/rocketbeans/rbtv-apidoc/blob/91e85c2b60c25a4dac50a2f1f6089b7daaa397af/response/playlist/PlaylistPublic.ts#L12)**

<br />

## Get playlist by playlist ID at certain playlist index


<p>Returns playlist by playlist ID at certain playlist index</p>

	GET /playlist/:uuid/at/:playlistItemId




### Returns
Interface: **[CombinedPlaylistResponse](https://github.com/rocketbeans/rbtv-apidoc/blob/91e85c2b60c25a4dac50a2f1f6089b7daaa397af/response/playlist/PlaylistPublic.ts#L43)**

<br />

## Get playlist by playlist type


<p>Returns playlist by playlist type</p>

	GET /playlist/byType/:playlistType




### Returns
Interface: **[CombinedPlaylistResponse](https://github.com/rocketbeans/rbtv-apidoc/blob/91e85c2b60c25a4dac50a2f1f6089b7daaa397af/response/playlist/PlaylistPublic.ts#L43)**

<br />

## Get playlist by UUID


<p>Returns playlist by UUID</p>

	GET /playlist/:uuid




### Returns
Interface: **[CombinedPlaylistResponse](https://github.com/rocketbeans/rbtv-apidoc/blob/91e85c2b60c25a4dac50a2f1f6089b7daaa397af/response/playlist/PlaylistPublic.ts#L43)**

<br />

## Get playlist items by playlist id


<p>Returns playlist items by playlist id</p>

	GET /playlist/:uuid/items




### Returns
Interface: **[PlaylistItem](https://github.com/rocketbeans/rbtv-apidoc/blob/91e85c2b60c25a4dac50a2f1f6089b7daaa397af/response/playlist/PlaylistPublic.ts#L35)**

<br />

## Move playlist items on playlist


<p>Move playlist items on playlist</p>

	POST /playlist/:id/movePlaylistItems




### Returns
Interface: **[CombinedPlaylistResponse](https://github.com/rocketbeans/rbtv-apidoc/blob/91e85c2b60c25a4dac50a2f1f6089b7daaa397af/response/playlist/PlaylistPublic.ts#L43)**

<br />

## Remove all playlist items from playlist by id


<p>Remove all playlist items from playlist by id</p>

	POST /playlist/:id/removePlaylistItems/all




### Returns
Interface: **[CombinedPlaylistResponse](https://github.com/rocketbeans/rbtv-apidoc/blob/91e85c2b60c25a4dac50a2f1f6089b7daaa397af/response/playlist/PlaylistPublic.ts#L43)**

<br />

## Remove playlist items from playlist by id


<p>Remove playlist items from playlist by id</p>

	POST /playlist/:id/removePlaylistItems




### Returns
Interface: **[CombinedPlaylistResponse](https://github.com/rocketbeans/rbtv-apidoc/blob/91e85c2b60c25a4dac50a2f1f6089b7daaa397af/response/playlist/PlaylistPublic.ts#L43)**

<br />

## Update playlist by id


<p>Update playlist by id</p>

	PUT /playlist/:id




### Returns
Interface: **[CombinedPlaylistResponse](https://github.com/rocketbeans/rbtv-apidoc/blob/91e85c2b60c25a4dac50a2f1f6089b7daaa397af/response/playlist/PlaylistPublic.ts#L43)**

<br />


[Back to top](#top)<br />

---
<br />

# RBTVEvent

## Get the current active RBTV Event


<p>Returns Information about the current active RBTV Event</p>

	GET /rbtvevent/active




### Returns
Interface: **[IRBTVEvent](https://github.com/rocketbeans/rbtv-apidoc/blob/91e85c2b60c25a4dac50a2f1f6089b7daaa397af/shared/rbtvevent.ts#L23)**

<br />

## Get RBTV Event Team Information


<p>Returns RBTV Event Team Information, restricted to active Events.</p>

	GET /rbtvevent/team/:id




### Returns
Interface: **[IRBTVEventTeam](https://github.com/rocketbeans/rbtv-apidoc/blob/91e85c2b60c25a4dac50a2f1f6089b7daaa397af/shared/rbtvevent.ts#L12)**

<br />

## Get joined RBTV Event Team


<p>Gets the joined Team for the given RBTV Event (which must be active in order to request these information)</p>

	GET /rbtvevent/:slug/team


#### Required OAuth Scopes: ```user.rbtvevent.read```



### Returns
Interface: **[IRBTVEventTeam](https://github.com/rocketbeans/rbtv-apidoc/blob/91e85c2b60c25a4dac50a2f1f6089b7daaa397af/shared/rbtvevent.ts#L12)**

<br />

## Join a RBTV Event Team


<p>Joins the given Team for the given Event (the event must be active)</p>

	POST /rbtvevent/:slug/team/:id/join


#### Required OAuth Scopes: ```user.rbtvevent.manage```



### Returns
Interface: **[IRBTVEventTeam](https://github.com/rocketbeans/rbtv-apidoc/blob/91e85c2b60c25a4dac50a2f1f6089b7daaa397af/shared/rbtvevent.ts#L12)**

<br />


[Back to top](#top)<br />

---
<br />

# Schedule

## Get by-day schedule


<p>Returns the channel schedules für given time range</p>

	GET /schedule




### Parameters

| Name    | Type      | Default   | Description                          |
|---------|-----------|-----------|--------------------------------------|
| startDay | number |  |  Unix Timestamp |
| endDay | number |  |  Unix Timestamp |
| filterChannels | string[] |  |  list of channelIds to filter for |

### Returns
Interface: **[ChannelGroupSchedule](https://github.com/rocketbeans/rbtv-apidoc/blob/91e85c2b60c25a4dac50a2f1f6089b7daaa397af/response/schedule/SchedulePublic.ts#L47)**

<br />

## Get by-day publish schedule


<p>Returns the publish schedule.</p>

	GET /schedule/publish




### Parameters

| Name    | Type      | Default   | Description                          |
|---------|-----------|-----------|--------------------------------------|
| from | number |  |  Unix Timestamp - Start Time (will be normalized to day) |

### Returns
Interface: **[schedule](https://github.com/rocketbeans/rbtv-apidoc/blob/91e85c2b60c25a4dac50a2f1f6089b7daaa397af/response/schedule/SchedulePublic.ts#L42)**

<br />

## Get by-day page-ready schedule


<p>Returns the program schedule. Each day starts with the first schedule item of type 'live' or 'premiere'. Most of the time this will be &quot;MoinMoin&quot; at 10:30 CEST, except on weekends or when there are 'live'/'premiere' items at 0:00 CEST.</p>

	GET /schedule/normalized




### Parameters

| Name    | Type      | Default   | Description                          |
|---------|-----------|-----------|--------------------------------------|
| startDay | number |  |  Unix Timestamp - Start Tim |
| endDay | number | startDay+(7*86400) | (optional) Unix timestamp - End Date |

### Returns
Interface: **[schedule](https://github.com/rocketbeans/rbtv-apidoc/blob/91e85c2b60c25a4dac50a2f1f6089b7daaa397af/response/schedule/SchedulePublic.ts#L42)**

<br />


[Back to top](#top)<br />

---
<br />

# ScheduleLegacy

## Get current running show


<p>Returns the current running/scheduled show<br />Drop-in replacement for http://api.rocketmgmt.de/[1.1/]schedule/current</p>

	GET /schedule/legacy/current




### Returns
Interface: **[ILegacyMGMTScheduleItem](https://github.com/rocketbeans/rbtv-apidoc/blob/91e85c2b60c25a4dac50a2f1f6089b7daaa397af/response/schedule/ScheduleLegacyPublic.ts#L6)**

<br />

## Get current week schedule


<p>Returns the schedule of the current week, not grouped as Array<br />Drop-in replacement for http://api.rocketmgmt.de/[1.1/]schedule</p>

	GET /schedule/legacy




### Returns
Interface: **[LegacyMGMTScheduleListResponse](https://github.com/rocketbeans/rbtv-apidoc/blob/91e85c2b60c25a4dac50a2f1f6089b7daaa397af/response/schedule/ScheduleLegacyPublic.ts#L25)**

<br />

## Get current week schedule grouped by day


<p>Returns the schedule of the current week, grouped by day<br />Drop-in replacement for http://api.rocketmgmt.de/[1.1/]schedule/weekdays</p>

	GET /schedule/legacy/weekdays




### Returns
Interface: **[LegacyMGMTScheduleByDayResponse](https://github.com/rocketbeans/rbtv-apidoc/blob/91e85c2b60c25a4dac50a2f1f6089b7daaa397af/response/schedule/ScheduleLegacyPublic.ts#L26)**

<br />

## Get the next n scheduled shows


<p>Returns the next n scheduled shows, not grouped as Array<br />Drop-in replacement for http://api.rocketmgmt.de/[1.1/]schedule/next/:items</p>

	GET /schedule/legacy/next/:items




### Returns
Interface: **[LegacyMGMTScheduleListResponse](https://github.com/rocketbeans/rbtv-apidoc/blob/91e85c2b60c25a4dac50a2f1f6089b7daaa397af/response/schedule/ScheduleLegacyPublic.ts#L25)**

<br />


[Back to top](#top)<br />

---
<br />

# Shop

## Get All Products


<p>Returns information about all shop products.</p>

	GET /simpleshop/product/all




### Parameters

| Name    | Type      | Default   | Description                          |
|---------|-----------|-----------|--------------------------------------|
| offset | number |  | (optional) Offset from the start |
| limit | number | 8 | (optional) Number of items to return. Maximum is 50. |

### Returns
Interface: **[simpleShopItem](https://github.com/rocketbeans/rbtv-apidoc/blob/91e85c2b60c25a4dac50a2f1f6089b7daaa397af/response/simpleshop/SimpleShopPublic.ts#L4)**

<br />


[Back to top](#top)<br />

---
<br />

# StreamCount

## Get Current Viewer Count


<p>Returns information about the current viewers. Contains seperate numbers for Youtube, Twitch, and combined.</p>

	GET /streamcount




### Returns
Interface: **[streamCount](https://github.com/rocketbeans/rbtv-apidoc/blob/91e85c2b60c25a4dac50a2f1f6089b7daaa397af/shared/stream.ts#L9)**

<br />


[Back to top](#top)<br />

---
<br />

# Tag

## Add tag to existing media episode


<p>Add tag to existing media episode</p>

	POST /tags/add/:tagId




### Returns
Interface: **[AddTagResponse](https://github.com/rocketbeans/rbtv-apidoc/blob/91e85c2b60c25a4dac50a2f1f6089b7daaa397af/response/tags/TagsPublic.ts#L87)**

<br />

## Create new tag with name and optionally pin it to media episode


<p>Create new tag</p>

	POST /tags




### Returns
Interface: **[CreateTagResponse](https://github.com/rocketbeans/rbtv-apidoc/blob/91e85c2b60c25a4dac50a2f1f6089b7daaa397af/response/tags/TagsPublic.ts#L36)**

<br />

## Delete tag


<p>Deletes tag with given tag id</p>

	DELETE /tags/:tagId




### Returns
Interface: **[DeleteTagResponse](https://github.com/rocketbeans/rbtv-apidoc/blob/91e85c2b60c25a4dac50a2f1f6089b7daaa397af/response/tags/TagsPublic.ts#L114)**

<br />

## Get all tags


<p>Returns all tags</p>

	GET /tags/all




### Returns
Interface: **[GetAllTagsResponse](https://github.com/rocketbeans/rbtv-apidoc/blob/91e85c2b60c25a4dac50a2f1f6089b7daaa397af/response/tags/TagsPublic.ts#L50)**

<br />

## Get tags by partial name / media episode


<p>Searches for tag names starting with name parameter OR tags linked to media episode id parameter</p>

	GET /tags




### Returns
Interface: **[GetTagsResponse](https://github.com/rocketbeans/rbtv-apidoc/blob/91e85c2b60c25a4dac50a2f1f6089b7daaa397af/response/tags/TagsPublic.ts#L44)**

<br />

## Hide tag on existing media episode


<p>Hide tag on media episode</p>

	POST /tags/hide/:tagId




### Returns
Interface: **[HideTagResponse](https://github.com/rocketbeans/rbtv-apidoc/blob/91e85c2b60c25a4dac50a2f1f6089b7daaa397af/response/tags/TagsPublic.ts#L101)**

<br />

## Pin tag to existing media item


<p>Pins tag to existing media episode</p>

	POST /tags/pin/:tagId




### Returns
Interface: **[PinTagResponse](https://github.com/rocketbeans/rbtv-apidoc/blob/91e85c2b60c25a4dac50a2f1f6089b7daaa397af/response/tags/TagsPublic.ts#L73)**

<br />

## Remove tag from existing media episode


<p>Remove tag fromn media episode</p>

	POST /tags/remove/:tagId




### Returns
Interface: **[RemoveTagResponse](https://github.com/rocketbeans/rbtv-apidoc/blob/91e85c2b60c25a4dac50a2f1f6089b7daaa397af/response/tags/TagsPublic.ts#L94)**

<br />

## Unhide tag on existing media episode


<p>Un-hide tag on media item</p>

	POST /tags/unhide/:tagId




### Returns
Interface: **[UnhideTagResponse](https://github.com/rocketbeans/rbtv-apidoc/blob/91e85c2b60c25a4dac50a2f1f6089b7daaa397af/response/tags/TagsPublic.ts#L108)**

<br />

## Unpin tag from existing media episode


<p>Unpins tag from existing media episode</p>

	POST /tags/unpin/:tagId




### Returns
Interface: **[UnpinTagResponse](https://github.com/rocketbeans/rbtv-apidoc/blob/91e85c2b60c25a4dac50a2f1f6089b7daaa397af/response/tags/TagsPublic.ts#L80)**

<br />

## Update tag


<p>Update tag details</p>

	PUT /tags/:tagId




### Returns
Interface: **[UpdateTagResponse](https://github.com/rocketbeans/rbtv-apidoc/blob/91e85c2b60c25a4dac50a2f1f6089b7daaa397af/response/tags/TagsPublic.ts#L58)**

<br />

## Vote for tag


<p>Vote for tag</p>

	PUT /tags/vote/:tagId




### Returns
Interface: **[VoteTagResponse](https://github.com/rocketbeans/rbtv-apidoc/blob/91e85c2b60c25a4dac50a2f1f6089b7daaa397af/response/tags/TagsPublic.ts#L66)**

<br />


[Back to top](#top)<br />

---
<br />

# User

## Request own User Information


<p>Returns information about the current user, amount of Information depends on requested Scopes.</p>

	GET /user/self


#### Required OAuth Scopes: ```user.info```



### Returns
Interface: **[entityUserResponse](https://github.com/rocketbeans/rbtv-apidoc/blob/91e85c2b60c25a4dac50a2f1f6089b7daaa397af/response/user/UserPublic.ts#L40)**

<br />


[Back to top](#top)<br />

---
<br />


