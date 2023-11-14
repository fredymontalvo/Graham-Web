;/*FB_PKG_DELIM*/

__d("usePolarisCentralizedUpsellStateQuery.graphql",[],(function(a,b,c,d,e,f){"use strict";a=function(){var a=[{alias:null,args:null,concreteType:"XDTViewer",kind:"LinkedField",name:"xdt_viewer",plural:!1,selections:[{kind:"ClientExtension",selections:[{alias:null,args:null,concreteType:"PolarisCentralizedUpsell",kind:"LinkedField",name:"logged_out_upsell",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"last_viewed_owner",storageKey:null}],storageKey:null}]}],storageKey:null}];return{fragment:{argumentDefinitions:[],kind:"Fragment",metadata:null,name:"usePolarisCentralizedUpsellStateQuery",selections:a,type:"Query",abstractKey:null},kind:"Request",operation:{argumentDefinitions:[],kind:"Operation",name:"usePolarisCentralizedUpsellStateQuery",selections:a},params:{cacheID:"e4db046ba80e3bb92ce7146811f40f6c",id:null,metadata:{},name:"usePolarisCentralizedUpsellStateQuery",operationKind:"query",text:null}}}();e.exports=a}),null);
__d("usePolarisPageID",["FBLogger","useCurrentRoute"],(function(a,b,c,d,e,f,g){"use strict";function a(){var a=c("useCurrentRoute")();a=a==null?void 0:(a=a.polarisRouteConfig)==null?void 0:a.pageID;if(a==null){c("FBLogger")("ig_web").mustfix("pageID was null");return"DO_NOT_USE"}return a}g["default"]=a}),98);
__d("usePolarisCentralizedUpsellState",["CometRelay","react","usePolarisCentralizedUpsellStateQuery.graphql","usePolarisPageID"],(function(a,b,c,d,e,f,g){"use strict";var h,i,j=(i||d("react")).useCallback;function a(){var a=d("CometRelay").useRelayEnvironment(),e=d("CometRelay").useClientQuery(h!==void 0?h:h=b("usePolarisCentralizedUpsellStateQuery.graphql"),{}),f=j(function(b){d("CometRelay").commitLocalUpdate(a,function(a){b!=null&&a.getRoot().getOrCreateLinkedRecord("xdt_viewer","XDTViewer").getOrCreateLinkedRecord("logged_out_upsell","PolarisCentralizedUpsell").setValue(b,"last_viewed_owner")})},[a]);return[{isProfileOrPostPage:["postPage","profilePage"].includes(c("usePolarisPageID")()),lastViewedOwnerID:e==null?void 0:(e=e.xdt_viewer)==null?void 0:(e=e.logged_out_upsell)==null?void 0:e.last_viewed_owner},f]}g["default"]=a}),98);