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
	- [Get all Shows (Preview)](#get-all-shows-preview)
	- [Get Single Show (Preview)](#get-single-show-preview)
	- [Get all Shows (PreviewMini)](#get-all-shows-previewmini)
	
- [RBTVEvent](#rbtvevent)
	- [Get the current active RBTV Event](#get-the-current-active-rbtv-event)
	- [Get RBTV Event Team Information](#get-rbtv-event-team-information)
	- [Get joined RBTV Event Team](#get-joined-rbtv-event-team)
	- [Join a RBTV Event Team](#join-a-rbtv-event-team)
	
- [Schedule](#schedule)
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
	
- [Subscription](#subscription)
	- [Subscribe](#subscribe)
	- [Unsubscribe](#unsubscribe)
	- [Get Default Notification Flags for Type](#get-default-notification-flags-for-type)
	- [Get all Default Notification Settings](#get-all-default-notification-settings)
	- [List all Subscriptions](#list-all-subscriptions)
	- [Get Notification Settings for Subscription](#get-notification-settings-for-subscription)
	- [Modify Notification Settings for Subscription](#modify-notification-settings-for-subscription)
	- [Get Default Notification Flags for Type](#get-default-notification-flags-for-type)
	
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
Interface: **[blogResponse](https://github.com/rocketbeans/rbtv-apidoc/blob/8ba08073b4e4f718e1a8848afdc4c8586b4c9708/response/blog/BlogPublic.ts#L20)**

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
Interface: **[blogPreviewResponse](https://github.com/rocketbeans/rbtv-apidoc/blob/8ba08073b4e4f718e1a8848afdc4c8586b4c9708/response/blog/BlogPublic.ts#L54)**

<br />

## Get Single Blog Post




	GET /blog/:id




### Parameters

| Name    | Type      | Default   | Description                          |
|---------|-----------|-----------|--------------------------------------|
| id | number |  |  The blog post ID |

### Returns
Interface: **[blogResponse](https://github.com/rocketbeans/rbtv-apidoc/blob/8ba08073b4e4f718e1a8848afdc4c8586b4c9708/response/blog/BlogPublic.ts#L20)**

<br />

## Get Single Blog Post (Preview)




	GET /blog/preview/:id




### Parameters

| Name    | Type      | Default   | Description                          |
|---------|-----------|-----------|--------------------------------------|
| id | number |  |  The blog post ID |

### Returns
Interface: **[blogPreviewResponse](https://github.com/rocketbeans/rbtv-apidoc/blob/8ba08073b4e4f718e1a8848afdc4c8586b4c9708/response/blog/BlogPublic.ts#L54)**

<br />


[Back to top](#top)<br />

---
<br />

# Bohne

## Get all Bohnen Portraits


<p>Returns reduced information about all team members.</p>

	GET /bohne/portrait/all




### Returns
Interface: **[bohnePortrait](https://github.com/rocketbeans/rbtv-apidoc/blob/8ba08073b4e4f718e1a8848afdc4c8586b4c9708/shared/bohneportrait.ts#L4)**

<br />

## Get Single Bohne


<p>Returns information about a single team member.</p>

	GET /bohne/:mgmtid




### Parameters

| Name    | Type      | Default   | Description                          |
|---------|-----------|-----------|--------------------------------------|
| mgmtid | number |  |  The RocketMGMT ID for this bohne |

### Returns
Interface: **[bohneResponse](https://github.com/rocketbeans/rbtv-apidoc/blob/8ba08073b4e4f718e1a8848afdc4c8586b4c9708/response/bohne/BohnePublic.ts#L7)**

<br />

## Get Single Bohne Portrait


<p>Returns reduced information about a given team member.</p>

	GET /bohne/portrait/:mgmtid




### Parameters

| Name    | Type      | Default   | Description                          |
|---------|-----------|-----------|--------------------------------------|
| mgmtid | number |  |  The RocketMGMT ID for this bohne |

### Returns
Interface: **[bohnePortrait](https://github.com/rocketbeans/rbtv-apidoc/blob/8ba08073b4e4f718e1a8848afdc4c8586b4c9708/shared/bohneportrait.ts#L4)**

<br />


[Back to top](#top)<br />

---
<br />

# CMS

## Get All Routes


<p>Returns all CMS routes (frontend paths which are connected to CMS pages)</p>

	GET /cms/route/all




### Returns
Interface: **[cmsRouteResponse](https://github.com/rocketbeans/rbtv-apidoc/blob/8ba08073b4e4f718e1a8848afdc4c8586b4c9708/response/cms/CMSPublic.ts#L12)**

<br />

## Get Single CMS Page


<p>Returns the given CMS page</p>

	GET /cms/:id




### Parameters

| Name    | Type      | Default   | Description                          |
|---------|-----------|-----------|--------------------------------------|
| id | string |  |  The Page ID |

### Returns
Interface: **[cmsPageResponse](https://github.com/rocketbeans/rbtv-apidoc/blob/8ba08073b4e4f718e1a8848afdc4c8586b4c9708/response/cms/CMSPublic.ts#L2)**

<br />


[Back to top](#top)<br />

---
<br />

# Frontend

## Frontend Initialization Information


<p>Returns necessary information for frontend initialization, such as current stream details, cms routes etc.</p>

	GET /frontend/init




### Returns
Interface: **[frontendInitResponse](https://github.com/rocketbeans/rbtv-apidoc/blob/8ba08073b4e4f718e1a8848afdc4c8586b4c9708/response/frontend/FrontendPublic.ts#L9)**

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
Interface: **[mediaEpisodeCombinedResponse](https://github.com/rocketbeans/rbtv-apidoc/blob/8ba08073b4e4f718e1a8848afdc4c8586b4c9708/response/media/MediaPublic.ts#L107)**

<br />

## Get Single Episode


<p>Returns information about a single episode.</p>

	GET /media/episode/:id




### Parameters

| Name    | Type      | Default   | Description                          |
|---------|-----------|-----------|--------------------------------------|
| id | number |  |  Episode ID |

### Returns
Interface: **[mediaEpisodeCombinedResponse](https://github.com/rocketbeans/rbtv-apidoc/blob/8ba08073b4e4f718e1a8848afdc4c8586b4c9708/response/media/MediaPublic.ts#L107)**

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
Interface: **[mediaEpisodeCombinedResponse](https://github.com/rocketbeans/rbtv-apidoc/blob/8ba08073b4e4f718e1a8848afdc4c8586b4c9708/response/media/MediaPublic.ts#L107)**

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
Interface: **[mediaEpisodeCombinedResponse](https://github.com/rocketbeans/rbtv-apidoc/blob/8ba08073b4e4f718e1a8848afdc4c8586b4c9708/response/media/MediaPublic.ts#L107)**

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
Interface: **[mediaEpisodePreviewCombinedResponse](https://github.com/rocketbeans/rbtv-apidoc/blob/8ba08073b4e4f718e1a8848afdc4c8586b4c9708/response/media/MediaPublic.ts#L101)**

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
Interface: **[mediaEpisodePreviewCombinedResponse](https://github.com/rocketbeans/rbtv-apidoc/blob/8ba08073b4e4f718e1a8848afdc4c8586b4c9708/response/media/MediaPublic.ts#L101)**

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
Interface: **[mediaEpisodePreviewCombinedResponse](https://github.com/rocketbeans/rbtv-apidoc/blob/8ba08073b4e4f718e1a8848afdc4c8586b4c9708/response/media/MediaPublic.ts#L101)**

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
Interface: **[mediaEpisodePreviewCombinedResponse](https://github.com/rocketbeans/rbtv-apidoc/blob/8ba08073b4e4f718e1a8848afdc4c8586b4c9708/response/media/MediaPublic.ts#L101)**

<br />

## Get Single Episode (Preview)


<p>Returns reduced information about a single episode.</p>

	GET /media/episode/preview/:id




### Parameters

| Name    | Type      | Default   | Description                          |
|---------|-----------|-----------|--------------------------------------|
| id | number |  |  Episode ID |

### Returns
Interface: **[mediaEpisodePreviewCombinedResponse](https://github.com/rocketbeans/rbtv-apidoc/blob/8ba08073b4e4f718e1a8848afdc4c8586b4c9708/response/media/MediaPublic.ts#L101)**

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
Interface: **[mediaEpisodePreviewCombinedResponse](https://github.com/rocketbeans/rbtv-apidoc/blob/8ba08073b4e4f718e1a8848afdc4c8586b4c9708/response/media/MediaPublic.ts#L101)**

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
Interface: **[mediaEpisodePreviewCombinedResponse](https://github.com/rocketbeans/rbtv-apidoc/blob/8ba08073b4e4f718e1a8848afdc4c8586b4c9708/response/media/MediaPublic.ts#L101)**

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
Interface: **[mediaEpisodePreviewCombinedResponse](https://github.com/rocketbeans/rbtv-apidoc/blob/8ba08073b4e4f718e1a8848afdc4c8586b4c9708/response/media/MediaPublic.ts#L101)**

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
Interface: **[mediaShowResponse](https://github.com/rocketbeans/rbtv-apidoc/blob/8ba08073b4e4f718e1a8848afdc4c8586b4c9708/response/media/MediaPublic.ts#L13)**

<br />

## Get Single Show


<p>Returns information about the given show.</p>

	GET /media/show/:id




### Parameters

| Name    | Type      | Default   | Description                          |
|---------|-----------|-----------|--------------------------------------|
| id | number |  |  Show ID |

### Returns
Interface: **[mediaShowResponse](https://github.com/rocketbeans/rbtv-apidoc/blob/8ba08073b4e4f718e1a8848afdc4c8586b4c9708/response/media/MediaPublic.ts#L13)**

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
Interface: **[mediaShowPreviewResponse](https://github.com/rocketbeans/rbtv-apidoc/blob/8ba08073b4e4f718e1a8848afdc4c8586b4c9708/response/media/MediaPublic.ts#L33)**

<br />

## Get Single Show (Preview)


<p>Returns reduced information about the given show.</p>

	GET /media/show/preview/:id




### Parameters

| Name    | Type      | Default   | Description                          |
|---------|-----------|-----------|--------------------------------------|
| id | number |  |  Show ID |

### Returns
Interface: **[mediaShowPreviewResponse](https://github.com/rocketbeans/rbtv-apidoc/blob/8ba08073b4e4f718e1a8848afdc4c8586b4c9708/response/media/MediaPublic.ts#L33)**

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
Interface: **[mediaShowPreviewMiniResponse](https://github.com/rocketbeans/rbtv-apidoc/blob/8ba08073b4e4f718e1a8848afdc4c8586b4c9708/response/media/MediaPublic.ts#L43)**

<br />


[Back to top](#top)<br />

---
<br />

# RBTVEvent

## Get the current active RBTV Event


<p>Returns Information about the current active RBTV Event</p>

	GET /rbtvevent/active




### Returns
Interface: **[IRBTVEvent](https://github.com/rocketbeans/rbtv-apidoc/blob/8ba08073b4e4f718e1a8848afdc4c8586b4c9708/shared/rbtvevent.ts#L21)**

<br />

## Get RBTV Event Team Information


<p>Returns RBTV Event Team Information, restricted to active Events.</p>

	GET /rbtvevent/team/:id




### Returns
Interface: **[IRBTVEventTeam](https://github.com/rocketbeans/rbtv-apidoc/blob/8ba08073b4e4f718e1a8848afdc4c8586b4c9708/shared/rbtvevent.ts#L11)**

<br />

## Get joined RBTV Event Team


<p>Gets the joined Team for the given RBTV Event (which must be active in order to request these information)</p>

	GET /rbtvevent/:slug/team


#### Required OAuth Scopes: ```user.rbtvevent.read```



### Returns
Interface: **[IRBTVEventTeam](https://github.com/rocketbeans/rbtv-apidoc/blob/8ba08073b4e4f718e1a8848afdc4c8586b4c9708/shared/rbtvevent.ts#L11)**

<br />

## Join a RBTV Event Team


<p>Joins the given Team for the given Event (the event must be active)</p>

	POST /rbtvevent/:slug/team/:id/join


#### Required OAuth Scopes: ```user.rbtvevent.manage```



### Returns
Interface: **[IRBTVEventTeam](https://github.com/rocketbeans/rbtv-apidoc/blob/8ba08073b4e4f718e1a8848afdc4c8586b4c9708/shared/rbtvevent.ts#L11)**

<br />


[Back to top](#top)<br />

---
<br />

# Schedule

## Get by-day page-ready schedule


<p>Returns the program schedule. Each day starts with the first schedule item of type 'live' or 'premiere'. Most of the time this will be &quot;MoinMoin&quot; at 10:30 CEST, except on weekends or when there are 'live'/'premiere' items at 0:00 CEST.</p>

	GET /schedule/normalized




### Parameters

| Name    | Type      | Default   | Description                          |
|---------|-----------|-----------|--------------------------------------|
| startDay | number |  |  Unix Timestamp - Start Time (will be normalized to day) |
| endDay | number | startDay+(7*86400) | (optional) Unix timestamp - End Date (will be normalized to day). Maximum requested range is limited to 14 days. |

### Returns
Interface: **[schedule](https://github.com/rocketbeans/rbtv-apidoc/blob/8ba08073b4e4f718e1a8848afdc4c8586b4c9708/response/schedule/SchedulePublic.ts#L32)**

<br />


[Back to top](#top)<br />

---
<br />

# ScheduleLegacy

## Get current running show


<p>Returns the current running/scheduled show<br />Drop-in replacement for http://api.rocketmgmt.de/[1.1/]schedule/current</p>

	GET /schedule/legacy/current




### Returns
Interface: **[ILegacyMGMTScheduleItem](https://github.com/rocketbeans/rbtv-apidoc/blob/8ba08073b4e4f718e1a8848afdc4c8586b4c9708/response/schedule/ScheduleLegacyPublic.ts#L6)**

<br />

## Get current week schedule


<p>Returns the schedule of the current week, not grouped as Array<br />Drop-in replacement for http://api.rocketmgmt.de/[1.1/]schedule</p>

	GET /schedule/legacy




### Returns
Interface: **[LegacyMGMTScheduleListResponse](https://github.com/rocketbeans/rbtv-apidoc/blob/8ba08073b4e4f718e1a8848afdc4c8586b4c9708/response/schedule/ScheduleLegacyPublic.ts#L25)**

<br />

## Get current week schedule grouped by day


<p>Returns the schedule of the current week, grouped by day<br />Drop-in replacement for http://api.rocketmgmt.de/[1.1/]schedule/weekdays</p>

	GET /schedule/legacy/weekdays




### Returns
Interface: **[LegacyMGMTScheduleByDayResponse](https://github.com/rocketbeans/rbtv-apidoc/blob/8ba08073b4e4f718e1a8848afdc4c8586b4c9708/response/schedule/ScheduleLegacyPublic.ts#L26)**

<br />

## Get the next n scheduled shows


<p>Returns the next n scheduled shows, not grouped as Array<br />Drop-in replacement for http://api.rocketmgmt.de/[1.1/]schedule/next/:items</p>

	GET /schedule/legacy/next/:items




### Returns
Interface: **[LegacyMGMTScheduleListResponse](https://github.com/rocketbeans/rbtv-apidoc/blob/8ba08073b4e4f718e1a8848afdc4c8586b4c9708/response/schedule/ScheduleLegacyPublic.ts#L25)**

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
Interface: **[simpleShopItem](https://github.com/rocketbeans/rbtv-apidoc/blob/8ba08073b4e4f718e1a8848afdc4c8586b4c9708/response/simpleshop/SimpleShopPublic.ts#L4)**

<br />


[Back to top](#top)<br />

---
<br />

# StreamCount

## Get Current Viewer Count


<p>Returns information about the current viewers. Contains seperate numbers for Youtube, Twitch, and combined.</p>

	GET /streamcount




### Returns
Interface: **[streamCount](https://github.com/rocketbeans/rbtv-apidoc/blob/8ba08073b4e4f718e1a8848afdc4c8586b4c9708/shared/stream.ts#L3)**

<br />


[Back to top](#top)<br />

---
<br />

# Subscription

## Subscribe




	POST /subscription/:type/:id


#### Required OAuth Scopes: ```user.subscriptions.manage```



### Parameters

| Name    | Type      | Default   | Description                          |
|---------|-----------|-----------|--------------------------------------|
| type | number |  |  See: enum SubscriptionType |
| id | number |  |  The Corresponding Entity Id (type related) |

### Returns
Interface: **[subscriptionResponse](https://github.com/rocketbeans/rbtv-apidoc/blob/8ba08073b4e4f718e1a8848afdc4c8586b4c9708/response/subscription/SubscriptionPublic.ts#L4)**

<br />

## Unsubscribe




	DELETE /subscription/:type/:id


#### Required OAuth Scopes: ```user.subscriptions.manage```



### Parameters

| Name    | Type      | Default   | Description                          |
|---------|-----------|-----------|--------------------------------------|
| type | number |  |  See: enum SubscriptionType |
| id | number |  |  The Corresponding Entity Id (type related) |

### Returns
Interface: **[subscriptionResponse](https://github.com/rocketbeans/rbtv-apidoc/blob/8ba08073b4e4f718e1a8848afdc4c8586b4c9708/response/subscription/SubscriptionPublic.ts#L4)**

<br />

## Get Default Notification Flags for Type
⚠️ **subject to change in future versions** 


<p>Returns default notification settings for the given type for the current user.</p>

	GET /subscription/mydefault/:type


#### Required OAuth Scopes: ```user.subscriptions.manage```



### Parameters

| Name    | Type      | Default   | Description                          |
|---------|-----------|-----------|--------------------------------------|
| type | number |  |  See: enum SubscriptionType |

### Returns
Interface: **[subscriptionDefaultResponse](https://github.com/rocketbeans/rbtv-apidoc/blob/8ba08073b4e4f718e1a8848afdc4c8586b4c9708/response/subscription/SubscriptionPublic.ts#L35)**

<br />

## Get all Default Notification Settings
⚠️ **subject to change in future versions** 


<p>Returns all default notification settings for the current user.</p>

	GET /subscription/mydefaults


#### Required OAuth Scopes: ```user.subscriptions.manage```



### Returns
Interface: **[subscriptionDefaultResponse](https://github.com/rocketbeans/rbtv-apidoc/blob/8ba08073b4e4f718e1a8848afdc4c8586b4c9708/response/subscription/SubscriptionPublic.ts#L35)**

<br />

## List all Subscriptions


<p>Returns all subscriptions for the current user.</p>

	GET /subscription/mysubscriptions


#### Required OAuth Scopes: ```user.subscriptions.read```



### Returns
Interface: **[subscriptionListResponse](https://github.com/rocketbeans/rbtv-apidoc/blob/8ba08073b4e4f718e1a8848afdc4c8586b4c9708/response/subscription/SubscriptionPublic.ts#L29)**

<br />

## Get Notification Settings for Subscription
⚠️ **subject to change in future versions** 


<p>Returns notification settings for the given subscription.</p>

	GET /subscription/:type/:id


#### Required OAuth Scopes: ```user.subscriptions.read```



### Parameters

| Name    | Type      | Default   | Description                          |
|---------|-----------|-----------|--------------------------------------|
| type | number |  |  See: enum SubscriptionType |
| id | number |  |  The Corresponding Entity Id (type related) |

### Returns
Interface: **[subscriptionResponse](https://github.com/rocketbeans/rbtv-apidoc/blob/8ba08073b4e4f718e1a8848afdc4c8586b4c9708/response/subscription/SubscriptionPublic.ts#L4)**

<br />

## Modify Notification Settings for Subscription
⚠️ **subject to change in future versions** 


<p>Returns subscriptionResponse, awaits subscriptionResponse in body</p>

	PATCH /subscription/:type/:id


#### Required OAuth Scopes: ```user.subscriptions.manage```



### Parameters

| Name    | Type      | Default   | Description                          |
|---------|-----------|-----------|--------------------------------------|
| type | number |  |  See: enum SubscriptionType |
| id | number |  |  The Corresponding Entity Id (type related) |

### Returns
Interface: **[subscriptionResponse](https://github.com/rocketbeans/rbtv-apidoc/blob/8ba08073b4e4f718e1a8848afdc4c8586b4c9708/response/subscription/SubscriptionPublic.ts#L4)**

<br />

## Get Default Notification Flags for Type
⚠️ **subject to change in future versions** 


<p>Returns default notification flags for the given type. Awaits <strong>subscriptionDefaultResponse</strong> in body.</p>

	PATCH /subscription/mydefault/:type


#### Required OAuth Scopes: ```user.subscriptions.manage```



### Parameters

| Name    | Type      | Default   | Description                          |
|---------|-----------|-----------|--------------------------------------|
| type | number |  |  See: enum SubscriptionType |

### Returns
Interface: **[subscriptionDefaultResponse](https://github.com/rocketbeans/rbtv-apidoc/blob/8ba08073b4e4f718e1a8848afdc4c8586b4c9708/response/subscription/SubscriptionPublic.ts#L35)**

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
Interface: **[entityUserResponse](https://github.com/rocketbeans/rbtv-apidoc/blob/8ba08073b4e4f718e1a8848afdc4c8586b4c9708/response/user/UserPublic.ts#L26)**

<br />


[Back to top](#top)<br />

---
<br />


