;/*FB_PKG_DELIM*/

__d("IGDSResharePanoOutlineIcon",["IGDSSVGIconBase.react","react"],(function(a,b,c,d,e,f,g){"use strict";var h,i=h||d("react");function a(a){return i.jsx(c("IGDSSVGIconBase.react"),babelHelpers["extends"]({},a,{viewBox:"0 0 24 24",children:i.jsx("path",{d:"M19.998 9.497a1 1 0 0 0-1 1v4.228a3.274 3.274 0 0 1-3.27 3.27h-5.313l1.791-1.787a1 1 0 0 0-1.412-1.416L7.29 18.287a1.004 1.004 0 0 0-.294.707v.001c0 .023.012.042.013.065a.923.923 0 0 0 .281.643l3.502 3.504a1 1 0 0 0 1.414-1.414l-1.797-1.798h5.318a5.276 5.276 0 0 0 5.27-5.27v-4.228a1 1 0 0 0-1-1Zm-6.41-3.496-1.795 1.795a1 1 0 1 0 1.414 1.414l3.5-3.5a1.003 1.003 0 0 0 0-1.417l-3.5-3.5a1 1 0 0 0-1.414 1.414l1.794 1.794H8.27A5.277 5.277 0 0 0 3 9.271V13.5a1 1 0 0 0 2 0V9.271a3.275 3.275 0 0 1 3.271-3.27Z"})}))}a.displayName=a.name+" [from "+f.id+"]";b=i.memo(a);g["default"]=b}),98);
__d("IGDSWebPauseFilledIcon",["IGDSSVGIconBase.react","react"],(function(a,b,c,d,e,f,g){"use strict";var h,i=h||d("react");function a(a){return i.jsx(c("IGDSSVGIconBase.react"),babelHelpers["extends"]({},a,{viewBox:"0 0 48 48",children:i.jsx("path",{d:"M15 1c-3.3 0-6 1.3-6 3v40c0 1.7 2.7 3 6 3s6-1.3 6-3V4c0-1.7-2.7-3-6-3zm18 0c-3.3 0-6 1.3-6 3v40c0 1.7 2.7 3 6 3s6-1.3 6-3V4c0-1.7-2.7-3-6-3z"})}))}a.displayName=a.name+" [from "+f.id+"]";b=i.memo(a);g["default"]=b}),98);
__d("PolarisHideNativeAppBanner",["PolarisBatchDOM","PolarisConfig","emptyFunction"],(function(a,b,c,d,e,f,g){"use strict";function a(a){a===void 0&&(a=c("emptyFunction")),d("PolarisConfig").isIOS()&&d("PolarisBatchDOM").mutate(function(){window.setTimeout(function(){window&&document.body&&(window.scrollTo(0,document.body.scrollHeight),a())},0)})}g.hideNativeAppBanner_HACK=a}),98);
__d("PolarisFullscreenShell.react",["PolarisBaseShell.react","PolarisHideNativeAppBanner","PolarisToastWrapper.react","react"],(function(a,b,c,d,e,f,g){"use strict";var h,i=h||d("react"),j={shell:{height:"x5yr21d",overflowX:"x6ikm8r",overflowY:"x10wlt62",width:"xh8yej3",$$css:!0}};a=function(a){babelHelpers.inheritsLoose(b,a);function b(){return a.apply(this,arguments)||this}var e=b.prototype;e.componentDidMount=function(){d("PolarisHideNativeAppBanner").hideNativeAppBanner_HACK()};e.componentDidUpdate=function(a){a.deviceOrientation!=null&&a.deviceOrientation!==this.props.deviceOrientation&&d("PolarisHideNativeAppBanner").hideNativeAppBanner_HACK()};e.render=function(){var a=this.props,b=a.children;a=a.xstyle;return i.jsxs(c("PolarisBaseShell.react"),{xstyle:[j.shell,a],children:[b,i.jsx(c("PolarisToastWrapper.react"),{})]})};return b}(i.Component);g["default"]=a}),98);
__d("PolarisFeedRoot.entrypoint",["JSResourceForInteraction"],(function(a,b,c,d,e,f,g){"use strict";a={getPreloadProps:function(a){return{queries:{}}},root:c("JSResourceForInteraction")("PolarisFeedRoot.react").__setRef("PolarisFeedRoot.entrypoint")};g["default"]=a}),98);
__d("PolarisFeedPageContainerDeferred",["deferredLoadComponent","react","requireDeferredForDisplay"],(function(a,b,c,d,e,f,g){"use strict";var h;h||d("react");a=c("deferredLoadComponent")(c("requireDeferredForDisplay")("PolarisFeedPageContainer.react").__setRef("PolarisFeedPageContainerDeferred"));b=a;g["default"]=b}),98);
__d("usePolarisInitFeedPage",["PolarisFeedActionInitFeed","PolarisFeedSeenStateManagerSingleton","PolarisHoldoutChecks","PolarisReactRedux","react","usePolarisQueryPreloaderID","usePolarisQueryStore"],(function(a,b,c,d,e,f,g){"use strict";var h,i=(h||d("react")).useCallback;function a(a,b){var e=d("PolarisReactRedux").useDispatch(),f=c("usePolarisQueryStore")(),g=c("usePolarisQueryPreloaderID")(a),h=c("usePolarisQueryPreloaderID")(b);return i(function(){var i=c("PolarisFeedSeenStateManagerSingleton").get();if(c("PolarisHoldoutChecks").H22023.rollout()===!1&&i.count()>0){var j=i.getViewInfo();i.clear();e(d("PolarisFeedActionInitFeed").initFeed({feedViewInfo:j,preloadedFeedQuery:a,preloadedFeedQueryId:g,preloadedStoryTrayQuery:b,preloadedStoryTrayQueryId:h,queryStore:f}))}else e(d("PolarisFeedActionInitFeed").initFeed({preloadedFeedQuery:a,preloadedFeedQueryId:g,preloadedStoryTrayQuery:b,preloadedStoryTrayQueryId:h,queryStore:f}))},[e,f,a,g,h,b])}g["default"]=a}),98);
__d("PolarisFeedActionInitFeedVariant",["PolarisDsaQEHelpers","PolarisFeedActionBuildFeedPageLoadedActionV2","PolarisFeedActionFetchFeedDataFromNative","PolarisInstajax","PolarisMonitorErrors","PolarisStoryAPIActions","Promise","asyncToGeneratorRuntime","polarisFeedReducer"],(function(a,b,c,d,e,f,g){"use strict";var h;function a(a){return function(){var c=b("asyncToGeneratorRuntime").asyncToGenerator(function*(c,e){e=e();var f,g,i=e.feed.currentFeed,j=d("polarisFeedReducer").getFeedContent(e.feed),k=j.isLoadingPosts;j=j.paginationInfo;k||(c({type:"FEED_LOADING"}),f=d("PolarisFeedActionFetchFeedDataFromNative").fetchFeedDataFromNative({cursor:j==null?void 0:j.cursor,feedViewInfo:a,paginationSource:j==null?void 0:j.paginationSource}).then(function(a){return c(d("PolarisFeedActionBuildFeedPageLoadedActionV2").buildFeedPageLoadedActionV2(c,a,i))}));!e.stories.isLoading&&(i==="home"||i==="following")&&d("PolarisDsaQEHelpers").isDsaFeed()&&(g=d("PolarisStoryAPIActions").loadStoryTray(c,void 0,i).then(function(a){c(a)}));return(h||(h=b("Promise"))).all([f,g])["catch"](function(a){a instanceof d("PolarisInstajax").AjaxError||d("PolarisMonitorErrors").logError(a)})});return function(a,b){return c.apply(this,arguments)}}()}g.initFeedVariant=a}),98);
__d("usePolarisInitFeedVariantPage",["PolarisFeedActionInitFeedVariant","PolarisFeedLastHeadLoadContext","PolarisFeedSeenStateManagerSingleton","PolarisHoldoutChecks","PolarisReactRedux","react"],(function(a,b,c,d,e,f,g){"use strict";var h,i=(h||d("react")).useCallback;function a(){var a=d("PolarisReactRedux").useDispatch(),b=d("PolarisFeedLastHeadLoadContext").useSetLastHeadLoadMs();return i(function(){var e=c("PolarisFeedSeenStateManagerSingleton").get();if(c("PolarisHoldoutChecks").H22023.rollout()===!1&&e.count()>0){var f=e.getViewInfo();e.clear();a(d("PolarisFeedActionInitFeedVariant").initFeedVariant(f))}else a(d("PolarisFeedActionInitFeedVariant").initFeedVariant());b(Date.now())},[a,b])}g["default"]=a}),98);
__d("PolarisFeedRoot.react",["CometPlaceholder.react","PolarisConditionalPageLayoutHandler.react","PolarisFeedActionScrolledToTop","PolarisFeedPageContainerDeferred","PolarisFeedState","PolarisNavigationActions","PolarisReactRedux","polarisFeedSelectors","react","usePolarisCreationDialog.react","usePolarisCurrentFeedVariant","usePolarisDisplayProperties","usePolarisInitFeedPage","usePolarisInitFeedVariantPage","usePolarisPreloadedPostQuery","usePolarisRefreshFeedData","useRoutePassthroughProps"],(function(a,b,c,d,e,f,g){"use strict";var h,i=h||(h=d("react"));b=h;var j=b.useEffect,k=b.useRef;function a(a){a=a.props;var b=a.routeParams,e=b.create_live,f=b.create_post;b=a.routeProps.polaris_preload;a=b.feed;var g=b.story_tray;b=b.suggested_user_list;var h=c("usePolarisCurrentFeedVariant")(),l=d("PolarisReactRedux").useSelector(d("polarisFeedSelectors").getFeedContent),m=l.currentState;l=l.isLoadingPosts;var n=c("useRoutePassthroughProps")(),o=k(!1),p=d("PolarisReactRedux").useDispatch(),q=m===d("PolarisFeedState").FEED_STATE_NETWORK||l,r=c("usePolarisInitFeedPage")(a,g);m=c("usePolarisPreloadedPostQuery")(b);var s=c("usePolarisInitFeedVariantPage")(),t=c("usePolarisRefreshFeedData")(),u=d("PolarisReactRedux").useSelector(function(a){return a.feed.content[h].items});l=c("usePolarisDisplayProperties")();a=l.viewportWidth;g=c("usePolarisCreationDialog.react")();var v=g[0];j(function(){(h==="home"||h==="past_posts")&&o.current===!1&&!q?(r(),o.current=!0):h!=="home"&&!q&&(!u||u.size===0)&&s()},[h,r,s,q,u]);j(function(){(n==null?void 0:n.refreshFeed)===!0&&(window.scrollTo(0,0),p(d("PolarisFeedActionScrolledToTop").scrolledToTop()),t())},[p,n==null?void 0:n.refreshFeed,t]);j(function(){f===!0?v({}):e===!0&&p(d("PolarisNavigationActions").openLiveCreationModal())},[p,f,e]);return i.jsx(c("PolarisConditionalPageLayoutHandler.react"),{children:i.jsx(c("CometPlaceholder.react"),{fallback:null,children:i.jsx(c("PolarisFeedPageContainerDeferred"),{suggestedUserListQueryRef:m,viewportWidth:a})})})}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);
__d("PolarisCloseFriendsLabel.react",["cx","IGDSBox.react","IGDSStarPanoFilledIcon","IGDSText.react","PolarisIGCoreButton","PolarisStoriesStrings","PolarisWebStorage","react"],(function(a,b,c,d,e,f,g,h){"use strict";var i,j=i||(i=d("react"));b=i;var k=b.useEffect,l=b.useRef,m=b.useState,n="close_friends_expanded_count";function a(a){var b,e=a.onClick;a=a.textSize;a=a===void 0?"small":a;var f=c("PolarisWebStorage").getLocalStorage(),g=parseInt((b=f==null?void 0:f.getItem(n))!=null?b:0,10);b=m(!1);var h=b[0],i=b[1];b=m(function(){return g<3});var o=b[0],p=b[1],q=l(null);b=function(){i(!0),p(!0),window.clearTimeout(q.current)};var r=function(){i(!1)};k(function(){var a=g+1;f==null?void 0:f.setItem(n,String(a))},[g,f]);q.current=window.setTimeout(function(){h||p(!1)},1500);a=a==="small"?j.jsx(c("IGDSText.react").Body2Emphasized,{color:"webAlwaysWhite",maxLines:1,children:d("PolarisStoriesStrings").CLOSE_FRIENDS}):j.jsx(c("IGDSText.react").BodyEmphasized,{color:"webAlwaysWhite",maxLines:1,children:d("PolarisStoriesStrings").CLOSE_FRIENDS});var s=j.jsx("div",{className:"xfs2ol5",children:j.jsx(c("IGDSStarPanoFilledIcon"),{alt:"Close Friends Icon",color:"web-always-white",size:12})});return j.jsx("div",{onMouseEnter:b,onMouseLeave:r,children:j.jsx(c("PolarisIGCoreButton"),{borderless:!0,onClick:e,children:j.jsx("div",{className:"_abwp _abwr",children:j.jsxs(c("IGDSBox.react"),{alignItems:"center",direction:"row",height:"100%",paddingX:2,paddingY:2,position:"relative",width:"100%",children:[s,o&&a]})})})})}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);
__d("usePolarisIsTallDevice",["usePolarisDisplayProperties"],(function(a,b,c,d,e,f,g){"use strict";var h=16/9;function a(){var a=c("usePolarisDisplayProperties")(),b=a.viewportHeight;a=a.viewportWidth;return b/a>h}g["default"]=a}),98);
__d("PolarisStoryMediaLayout.react",["cx","invariant","PolarisReactRedux","PolarisResponsiveBlock.react","PolarisStoriesContext","PolarisUA","react","usePolarisIsTallDevice"],(function(a,b,c,d,e,f,g,h,i){"use strict";var j,k=j||(j=d("react")),l=j.useMemo,m=1.3,n=1;b=function(a){babelHelpers.inheritsLoose(b,a);function b(){var b,c;for(var d=arguments.length,e=new Array(d),f=0;f<d;f++)e[f]=arguments[f];return(b=c=a.call.apply(a,[this].concat(e))||this,c.state={height:0,width:0},c.$2=function(a,b){var d=c.props.intrinsicDimensions,e=c.$1()?n:m;a=a;b=b;var f=a/b;d=d.width/d.height;f/d>e||d/f>e?f>d?a=b*d:b=a/d:f>d?b=a/d:a=b*d;c.setState({height:b,width:a});c.context.updateStoriesContext({mediaDimensions:{height:b,width:a}})},b)||babelHelpers.assertThisInitialized(c)}var e=b.prototype;e.$1=function(){var a=this.props.isTallDevice;return a&&d("PolarisUA").isMobile()};e.render=function(){var a=this.props,b=a.children;a=a.style;typeof b==="function"||i(0,51418);var e=this.state,f=e.height;e=e.width;var g=null;if(e!==0&&f!==0){var h={className:"_aa63",layoutHeight:f,layoutWidth:e};g=k.jsx("div",{className:"_aa64",style:{height:f,width:e},children:b(h)})}return k.jsx(c("PolarisResponsiveBlock.react"),{className:"_aa65"+(d("PolarisUA").isDesktop()?" _aa66":""),onResize:this.$2,style:a,children:g})};return b}(k.Component);b.contextType=d("PolarisStoriesContext").StoriesContext;function a(){var a=c("usePolarisIsTallDevice")();return l(function(){return{isTallDevice:a}},[a])}e=d("PolarisReactRedux").connectHooks(a)(b);g["default"]=e}),98);
__d("PolarisStoryMediaPrefetcher.react",["cx","PolarisMediaPrefetchContainer.react","PolarisMediaPrefetcher.react","PolarisReactRedux","PolarisStoryMediaLayout.react","nullthrows","polarisStorySelectors","react"],(function(a,b,c,d,e,f,g,h){"use strict";var i,j=i||(i=d("react")),k=i.useCallback,l="storyMedia";function m(){return function(a,b){if(d("polarisStorySelectors").isReelItemExpired(a.expiringAt,b))return null;b=Boolean(a.src!=null&&a.dimensions!=null);return b&&a.isVideo===!1&&a.displayResources?{id:a.id,intrinsicDimensions:c("nullthrows")(a.dimensions),src:c("nullthrows")(a.src),srcSet:c("nullthrows")(a.displayResources),type:d("PolarisMediaPrefetcher.react").PREFETCHED_IMAGE}:null}}function n(a){var b=a.children;a=a.resource;return j.jsx(c("PolarisStoryMediaLayout.react"),{intrinsicDimensions:a.intrinsicDimensions,children:function(a){a=a.className;return j.jsx("div",{className:a,children:b})}})}n.displayName=n.name+" [from "+f.id+"]";function a(a){var b=a.prefetchContext;a=d("PolarisReactRedux").useSelector(function(a){return d("polarisStorySelectors").getPrefetchablePostIds(a,b)});var e=d("PolarisReactRedux").useDispatch(),f=k(function(){b==="feed"&&e({type:"FEED_PAGE_STORY_PREFETCH_COMPLETE"})},[e,b]);return j.jsx("div",{className:"_aag2",children:j.jsx(c("PolarisMediaPrefetchContainer.react"),{getResourceFromPost:m(),layoutWrapper:n,onLoadComplete:f,postIds:a.toArray(),viewKey:l})})}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);