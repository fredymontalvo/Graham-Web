;/*FB_PKG_DELIM*/

__d("IGDSLinkPanoOutlineIcon",["IGDSSVGIconBase.react","react"],(function(a,b,c,d,e,f,g){"use strict";var h,i=h||d("react");function a(a){return i.jsxs(c("IGDSSVGIconBase.react"),babelHelpers["extends"]({},a,{viewBox:"0 0 24 24",children:[i.jsx("path",{d:"m9.726 5.123 1.228-1.228a6.47 6.47 0 0 1 9.15 9.152l-1.227 1.227m-4.603 4.603-1.228 1.228a6.47 6.47 0 0 1-9.15-9.152l1.227-1.227",fill:"none",stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2"}),i.jsx("line",{fill:"none",stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",x1:"8.471",x2:"15.529",y1:"15.529",y2:"8.471"})]}))}a.displayName=a.name+" [from "+f.id+"]";b=i.memo(a);g["default"]=b}),98);
__d("IGDSSettingsPanoOutlineIcon",["IGDSSVGIconBase.react","react"],(function(a,b,c,d,e,f,g){"use strict";var h,i=h||d("react");function a(a){return i.jsxs(c("IGDSSVGIconBase.react"),babelHelpers["extends"]({},a,{viewBox:"0 0 24 24",children:[i.jsx("circle",{cx:"12",cy:"12",fill:"none",r:"8.635",stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2"}),i.jsx("path",{d:"M14.232 3.656a1.269 1.269 0 0 1-.796-.66L12.93 2h-1.86l-.505.996a1.269 1.269 0 0 1-.796.66m-.001 16.688a1.269 1.269 0 0 1 .796.66l.505.996h1.862l.505-.996a1.269 1.269 0 0 1 .796-.66M3.656 9.768a1.269 1.269 0 0 1-.66.796L2 11.07v1.862l.996.505a1.269 1.269 0 0 1 .66.796m16.688-.001a1.269 1.269 0 0 1 .66-.796L22 12.93v-1.86l-.996-.505a1.269 1.269 0 0 1-.66-.796M7.678 4.522a1.269 1.269 0 0 1-1.03.096l-1.06-.348L4.27 5.587l.348 1.062a1.269 1.269 0 0 1-.096 1.03m11.8 11.799a1.269 1.269 0 0 1 1.03-.096l1.06.348 1.318-1.317-.348-1.062a1.269 1.269 0 0 1 .096-1.03m-14.956.001a1.269 1.269 0 0 1 .096 1.03l-.348 1.06 1.317 1.318 1.062-.348a1.269 1.269 0 0 1 1.03.096m11.799-11.8a1.269 1.269 0 0 1-.096-1.03l.348-1.06-1.317-1.318-1.062.348a1.269 1.269 0 0 1-1.03-.096",fill:"none",stroke:"currentColor",strokeLinejoin:"round",strokeWidth:"2"})]}))}a.displayName=a.name+" [from "+f.id+"]";b=i.memo(a);g["default"]=b}),98);
__d("useIGDSTextInputHideOutline",["react"],(function(a,b,c,d,e,f,g){"use strict";var h;b=h||d("react");var i=b.useEffect,j=b.useState,k=!1,l="Tab",m={hide:{outline:"xzd0ubt",$$css:!0},root:{outline:"x12uuly6",$$css:!0}};function a(){var a=j(k),b=a[0],c=a[1];i(function(){function a(b){(b.code===l||b.key===l)&&(k=!0,c(k),document.removeEventListener("keydown",a))}b||document.addEventListener("keydown",a);return function(){document.removeEventListener("keydown",a)}},[b]);a=!b;return[a,a?m.hide:m.root]}g["default"]=a}),98);
__d("IGDSTextInput.react",["IGDSText.react","UserAgentData","react","stylex","useIGDSTextInputHideOutline"],(function(a,b,c,d,e,f,g){"use strict";var h,i,j=i||(i=d("react")),k=i.useState,l={borderless:{borderTopStyle:"x1ejq31n",borderEndStyle:"xd10rxx",borderBottomStyle:"x1sy0etr",borderStartStyle:"x17r0tee",$$css:!0},error:{color:"x1a1m0xk",$$css:!0},inputFloat:{backgroundColor:"xjbqb8w",paddingTop:"x96k8nx",paddingEnd:"x4uap5",paddingBottom:"x18d9i69",paddingStart:"xurb0ha",paddingLeft:null,paddingRight:null,":disabled_backgroundColor":"x1oqui1x",$$css:!0},inputPersistentName:{height:"x16wdlz0",paddingEnd:"x1sxyh0",paddingLeft:null,paddingRight:null,position:"x1n2onr6",width:"xh8yej3",":disabled_backgroundColor":"x1rheh84",":disabled_borderTopColor":"x1ck6gwh",":disabled_borderEndColor":"x175bfct",":disabled_borderBottomColor":"x1meze4m",":disabled_borderStartColor":"x10eltez",":disabled_color":"x1qt4tve",":disabled_cursor":"x1s07b3s",$$css:!0},placeHolder:{alignItems:"x6s0dn4",color:"x1roi4f4",fontSize:"x1fhwpqd",fontWeight:"x1fcty0u",marginTop:"x1gslohp",marginEnd:"x1ffeobu",marginBottom:"x12nagc",marginStart:"x1cxxrxm",overflowX:"x6ikm8r",overflowY:"x10wlt62",pointerEvents:"x47corl",position:"x10l6tqk",textOverflow:"xlyipyv",top:"x13vifvy",transformOrigin:"x19w6rv",transition:"xk1frcx",whiteSpace:"xuxw1ft",$$css:!0},placeHolderFloat:{transform:"x18l2ej8",$$css:!0},placeHolderFloatCenter:{paddingTop:"xz9dl7a",$$css:!0}},m={borderless:{borderTopStyle:"x1ejq31n",borderEndStyle:"xd10rxx",borderBottomStyle:"x1sy0etr",borderStartStyle:"x17r0tee",paddingStart:"x5ib6vp",paddingLeft:null,paddingRight:null,$$css:!0},error:{borderTopColor:"xj1v7p2",borderEndColor:"x1yn9u3l",borderBottomColor:"x1gcu4e2",borderStartColor:"xbqw57o",borderTopStyle:"x13fuv20",borderEndStyle:"xu3j5b3",borderBottomStyle:"x1q0q8m5",borderStartStyle:"x26u7qi",borderTopWidth:"x178xt8z",borderEndWidth:"xm81vs4",borderBottomWidth:"xso031l",borderStartWidth:"xy80clv","::placeholder_color":"xordcmm",$$css:!0},pill:{borderTopColor:"x5ur3kl",borderEndColor:"xopu45v",borderBottomColor:"x1bs97v6",borderStartColor:"xmo9t06",borderTopStartRadius:"xfkn95n",borderTopEndRadius:"xly138o",borderBottomEndRadius:"xchwasx",borderBottomStartRadius:"xfxlei4",paddingStart:"x5ib6vp",paddingLeft:null,paddingRight:null,$$css:!0},root:{borderTopColor:"x5ur3kl",borderEndColor:"xopu45v",borderBottomColor:"x1bs97v6",borderStartColor:"xmo9t06",borderTopStartRadius:"x1j8ye7u",borderTopEndRadius:"x1rjkts5",borderBottomEndRadius:"x13z9klp",borderBottomStartRadius:"xjc6cxp",borderTopStyle:"x13fuv20",borderEndStyle:"xu3j5b3",borderBottomStyle:"x1q0q8m5",borderStartStyle:"x26u7qi",borderTopWidth:"x178xt8z",borderEndWidth:"xm81vs4",borderBottomWidth:"xso031l",borderStartWidth:"xy80clv",color:"x5n08af",flexGrow:"x1iyjqo2",fontSize:"xvs91rp",lineHeight:"xklk4pu",marginTop:"xdj266r",marginEnd:"x11i5rnm",marginBottom:"xat24cr",marginStart:"x1mh8g0r",overflowX:"x1plvlek",overflowY:"xryxfnj",paddingTop:"x1iorvi4",paddingEnd:"xn6708d",paddingBottom:"xjkvuk6",paddingStart:"x1ye3gou",":-webkit-autofill_transition":"x1s3xk63","::-webkit-inner-spin-button_height":"xlqc9nw","::-webkit-outer-spin-button_height":"x8tigb1","::-webkit-search-cancel-button_appearance":"x1ad04t7","::-webkit-search-decoration_appearance":"x1glnyev","::placeholder_color":"xs3hnx8","::placeholder_opacity":"x7xwk5j",":disabled_backgroundColor":"x1rheh84",":disabled_borderTopColor":"x1ck6gwh",":disabled_borderEndColor":"x175bfct",":disabled_borderBottomColor":"x1meze4m",":disabled_borderStartColor":"x10eltez",":disabled_color":"x1qt4tve",":disabled_cursor":"x1s07b3s",":focus_outline":"xkq2eht",":focus_outlineOffset":"x1rvh84u",$$css:!0},rootFocused:{borderTopColor:"x11f1dot",borderEndColor:"xiga2ox",borderBottomColor:"x1ii8w9m",borderStartColor:"x1serwwh",borderTopStyle:"x13fuv20",borderEndStyle:"xu3j5b3",borderBottomStyle:"x1q0q8m5",borderStartStyle:"x26u7qi",borderTopWidth:"x178xt8z",borderEndWidth:"xm81vs4",borderBottomWidth:"xso031l",borderStartWidth:"xy80clv",$$css:!0},rootWithAdornment:{borderTopStyle:"x1ejq31n",borderEndStyle:"xd10rxx",borderBottomStyle:"x1sy0etr",borderStartStyle:"x17r0tee",paddingTop:"x1iorvi4",paddingEnd:"xpvbz4a",paddingBottom:"xjkvuk6",paddingStart:"xohu8s8",width:"xh8yej3",":focus_borderTopStyle":"x1jguvu7",":focus_borderEndStyle":"x15aq7wb",":focus_borderBottomStyle":"xygx6cg",":focus_borderStartStyle":"xrqayxw",":focus_outline":"x1uvtmcs",$$css:!0}},n={root:{":disabled_color":"x2bbx33",$$css:!0}},o={borderless:{borderTopStyle:"x1ejq31n",borderEndStyle:"xd10rxx",borderBottomStyle:"x1sy0etr",borderStartStyle:"x17r0tee",$$css:!0},disabled:{backgroundColor:"x19g9edo",borderTopColor:"x5ur3kl",borderEndColor:"xopu45v",borderBottomColor:"x1bs97v6",borderStartColor:"xmo9t06",color:"x1roi4f4",cursor:"x1h6gzvc",$$css:!0},error:{borderTopColor:"xj1v7p2",borderEndColor:"x1yn9u3l",borderBottomColor:"x1gcu4e2",borderStartColor:"xbqw57o",borderTopStyle:"x13fuv20",borderEndStyle:"xu3j5b3",borderBottomStyle:"x1q0q8m5",borderStartStyle:"x26u7qi",borderTopWidth:"x178xt8z",borderEndWidth:"xm81vs4",borderBottomWidth:"xso031l",borderStartWidth:"xy80clv",$$css:!0},pill:{borderTopColor:"x5ur3kl",borderEndColor:"xopu45v",borderBottomColor:"x1bs97v6",borderStartColor:"xmo9t06",borderTopStartRadius:"xfkn95n",borderTopEndRadius:"xly138o",borderBottomEndRadius:"xchwasx",borderBottomStartRadius:"xfxlei4",paddingStart:"xlu9dua",paddingLeft:null,paddingRight:null,$$css:!0},root:{alignItems:"x6s0dn4",borderTopColor:"x5ur3kl",borderEndColor:"xopu45v",borderBottomColor:"x1bs97v6",borderStartColor:"xmo9t06",borderTopStartRadius:"x1j8ye7u",borderTopEndRadius:"x1rjkts5",borderBottomEndRadius:"x13z9klp",borderBottomStartRadius:"xjc6cxp",borderTopStyle:"x13fuv20",borderEndStyle:"xu3j5b3",borderBottomStyle:"x1q0q8m5",borderStartStyle:"x26u7qi",borderTopWidth:"x178xt8z",borderEndWidth:"xm81vs4",borderBottomWidth:"xso031l",borderStartWidth:"xy80clv",display:"x78zum5",flexGrow:"x1iyjqo2",height:"xg7h5cd",justifyContent:"x1qughib",paddingEnd:"x1sxyh0",paddingLeft:null,paddingRight:null,position:"x1n2onr6",$$css:!0},rootFocused:{borderTopColor:"x11f1dot",borderEndColor:"xiga2ox",borderBottomColor:"x1ii8w9m",borderStartColor:"x1serwwh",borderTopStyle:"x13fuv20",borderEndStyle:"xu3j5b3",borderBottomStyle:"x1q0q8m5",borderStartStyle:"x26u7qi",borderTopWidth:"x178xt8z",borderEndWidth:"xm81vs4",borderBottomWidth:"xso031l",borderStartWidth:"xy80clv",outline:"xtjps4z",outlineOffset:"x2ssjo2",$$css:!0},warning:{borderTopColor:"x1rclf1i",borderEndColor:"xbpt4fm",borderBottomColor:"xbb4h0s",borderStartColor:"x1tfs47m",borderStartStyle:"x26u7qi",borderTopWidth:"x178xt8z",borderEndWidth:"xm81vs4",borderBottomWidth:"xso031l",borderStartWidth:"xy80clv",$$css:!0}},p={secondaryBackground:{backgroundColor:"xnz67gz",$$css:!0},transparent:{backgroundColor:"xjbqb8w",$$css:!0}};a=j.forwardRef(function(a,b){var d=a.autoCapitalize,e=a.autoComplete,f=a.autoFocus,g=a.backgroundColor;g=g===void 0?"secondaryBackground":g;var i=a.disabled,q=a.endAdornment,r=a.hasError,s=a.height,t=a.hintText,u=a.id,v=a.inputMode,w=a.maxLength,x=a.name,y=a.onBlur,z=a.onChange,A=a.onFocus,B=a.onKeyDown,C=a.persistentLabelName,D=a.placeholder,E=a.readOnly,F=a.required,G=a.spellCheck,H=a.startAdornment,I=a.style;I=I===void 0?"regular":I;var J=a.testid;J=a.type;var K=a.validationState,L=a.value,M=a.xstyle;a=babelHelpers.objectWithoutPropertiesLoose(a,["autoCapitalize","autoComplete","autoFocus","backgroundColor","disabled","endAdornment","hasError","height","hintText","id","inputMode","maxLength","name","onBlur","onChange","onFocus","onKeyDown","persistentLabelName","placeholder","readOnly","required","spellCheck","startAdornment","style","testid","type","validationState","value","xstyle"]);var N=k(!1),O=N[0],P=N[1];N=c("useIGDSTextInputHideOutline")();N[0];N=N[1];var Q=function(a){P(!1),y&&y(a)},R=function(a){P(!0),A&&A(a)},S=q!=null||H!=null||C!=null;K=K!=null?K:"CORRECT";r===!0&&(K="ERROR");r=j.jsx("span",{className:(h||(h=c("stylex")))(l.placeHolderFloat,l.placeHolderFloatCenter,l.placeHolder,K==="ERROR"&&l.error),children:L.length>0&&C});var T=j.jsx("div",{className:"x1y1aw1k",children:j.jsx(c("IGDSText.react").Body2,{color:"secondaryText",children:t})});a=j.jsx("input",babelHelpers["extends"]({},a,{autoCapitalize:d,autoComplete:e,autoFocus:f,className:h(m.root,K==="CORRECT"&&O&&m.rootFocused,S&&m.rootWithAdornment,K==="ERROR"&&m.error,!S&&I==="pill"&&m.pill,!S&&I==="borderless"&&m.borderless,S&&l.borderless,p[g],N,C!=null&&L.length>0&&l.inputFloat,C!=null&&p.transparent,(c("UserAgentData").platformName==="iOS"||c("UserAgentData").browserName==="Safari")&&n.root,M),"data-testid":void 0,disabled:i,id:u,inputMode:v,maxLength:w,name:x,onBlur:Q,onChange:z,onClick:function(a){return a.preventDefault()},onFocus:R,onKeyDown:B,placeholder:D,readOnly:E,ref:b,required:F,spellCheck:G===!1?"false":"true",style:S?void 0:{height:s},type:J||"text",value:L}));if(S)return j.jsxs("div",{children:[j.jsxs("label",{className:(h||(h=c("stylex")))(o.root,K==="CORRECT"&&O&&o.rootFocused,K==="WARN"&&o.warning,K==="ERROR"&&o.error,p[g],i===!0&&o.disabled,I==="pill"&&o.pill,I==="borderless"&&o.borderless,N),htmlFor:u,style:{height:s},children:[H,C!=null?j.jsxs("div",{className:"x16wdlz0 x1sxyh0 x1n2onr6 xh8yej3 x1rheh84 x1ck6gwh x175bfct x1meze4m x10eltez x1qt4tve x1s07b3s xjbqb8w",children:[a,r]}):a,q]}),t!=null&&T]});else return j.jsxs(j.Fragment,{children:[a,t!=null&&T]})});b=a;g["default"]=b}),98);/*FB_PKG_DELIM*/
__d("usePolarisShowSettingsModuleHeaderQuery_instagramRelayOperation",[],(function(a,b,c,d,e,f){e.exports="9917572258268659"}),null);
__d("usePolarisShowSettingsModuleHeaderQuery.graphql",["usePolarisShowSettingsModuleHeaderQuery_instagramRelayOperation"],(function(a,b,c,d,e,f){"use strict";a=function(){var a=[{alias:null,args:null,concreteType:"FXCALSettings",kind:"LinkedField",name:"fxcal_settings",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"should_user_see_centralized_settings_new_app_ia",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"ig_project_elevation_one_point_five_enabled",storageKey:null}],storageKey:null}];return{fragment:{argumentDefinitions:[],kind:"Fragment",metadata:null,name:"usePolarisShowSettingsModuleHeaderQuery",selections:a,type:"Query",abstractKey:null},kind:"Request",operation:{argumentDefinitions:[],kind:"Operation",name:"usePolarisShowSettingsModuleHeaderQuery",selections:a},params:{id:b("usePolarisShowSettingsModuleHeaderQuery_instagramRelayOperation"),metadata:{},name:"usePolarisShowSettingsModuleHeaderQuery",operationKind:"query",text:null}}}();e.exports=a}),null);
__d("IGDSAdjustmentBrightnessPanoOutlineIcon",["IGDSSVGIconBase.react","react"],(function(a,b,c,d,e,f,g){"use strict";var h,i=h||d("react");function a(a){return i.jsx(c("IGDSSVGIconBase.react"),babelHelpers["extends"]({},a,{viewBox:"0 0 24 24",children:i.jsx("path",{d:"M12.00018,4.5a1,1,0,0,0,1-1V2a1,1,0,0,0-2,0V3.5A1.00005,1.00005,0,0,0,12.00018,4.5ZM5.28241,6.69678A.99989.99989,0,1,0,6.69647,5.28271l-1.06054-1.061A.99989.99989,0,0,0,4.22186,5.63574ZM4.50018,12a1,1,0,0,0-1-1h-1.5a1,1,0,0,0,0,2h1.5A1,1,0,0,0,4.50018,12Zm.78223,5.30322-1.06055,1.061a.99989.99989,0,1,0,1.41407,1.41406l1.06054-1.061a.99989.99989,0,0,0-1.41406-1.41407ZM12.00018,19.5a1.00005,1.00005,0,0,0-1,1V22a1,1,0,0,0,2,0V20.5A1,1,0,0,0,12.00018,19.5Zm6.71729-2.19678a.99989.99989,0,0,0-1.41406,1.41407l1.06054,1.061A.99989.99989,0,0,0,19.778,18.36426ZM22.00018,11h-1.5a1,1,0,0,0,0,2h1.5a1,1,0,0,0,0-2ZM18.01044,6.98975a.996.996,0,0,0,.707-.293l1.06055-1.061A.99989.99989,0,0,0,18.364,4.22168l-1.06054,1.061a1,1,0,0,0,.707,1.707ZM12.00018,6a6,6,0,1,0,6,6A6.00657,6.00657,0,0,0,12.00018,6Zm0,10a4,4,0,1,1,4-4A4.00458,4.00458,0,0,1,12.00018,16Z"})}))}a.displayName=a.name+" [from "+f.id+"]";b=i.memo(a);g["default"]=b}),98);
__d("IGDSEcgPanoOutline24Icon",["IGDSSVGIconBase.react","react"],(function(a,b,c,d,e,f,g){"use strict";var h,i=h||d("react");function a(a){return i.jsx(c("IGDSSVGIconBase.react"),babelHelpers["extends"]({},a,{viewBox:"0 0 24 24",children:i.jsx("path",{d:"M19 1H5C2.794 1 1 2.794 1 5v14c0 2.206 1.794 4 4 4h14c2.206 0 4-1.794 4-4V5c0-2.206-1.794-4-4-4ZM5 3h14c1.103 0 2 .897 2 2v6h-2.382l-2.723-5.447c-.34-.678-1.45-.678-1.79 0L9 15.764l-2.105-4.211A1 1 0 0 0 6 11H3V5c0-1.103.897-2 2-2Zm14 18H5c-1.103 0-2-.897-2-2v-6h2.382l2.723 5.447a1 1 0 0 0 1.79 0L15 8.236l2.105 4.211A1 1 0 0 0 18 13h3v6c0 1.103-.897 2-2 2Z"})}))}a.displayName=a.name+" [from "+f.id+"]";b=i.memo(a);g["default"]=b}),98);
__d("IGDSLockPanoOutlineIcon",["IGDSSVGIconBase.react","react"],(function(a,b,c,d,e,f,g){"use strict";var h,i=h||d("react");function a(a){return i.jsx(c("IGDSSVGIconBase.react"),babelHelpers["extends"]({},a,{viewBox:"0 0 24 24",children:i.jsx("path",{d:"M6.71 9.555h10.581a2.044 2.044 0 0 1 2.044 2.044v8.357a2.044 2.044 0 0 1-2.043 2.043H6.71a2.044 2.044 0 0 1-2.044-2.044V11.6A2.044 2.044 0 0 1 6.71 9.555Zm1.07 0V6.222a4.222 4.222 0 0 1 8.444 0v3.333",fill:"none",stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2"})}))}a.displayName=a.name+" [from "+f.id+"]";b=i.memo(a);g["default"]=b}),98);
__d("IGDSReportPanoOutline24Icon",["IGDSSVGIconBase.react","react"],(function(a,b,c,d,e,f,g){"use strict";var h,i=h||d("react");function a(a){return i.jsx(c("IGDSSVGIconBase.react"),babelHelpers["extends"]({},a,{viewBox:"0 0 24 24",children:i.jsx("path",{d:"M18.001 1h-12a5.006 5.006 0 0 0-5 5v9.005a5.006 5.006 0 0 0 5 5h2.514l2.789 2.712a1 1 0 0 0 1.394 0l2.787-2.712h2.516a5.006 5.006 0 0 0 5-5V6a5.006 5.006 0 0 0-5-5Zm3 14.005a3.003 3.003 0 0 1-3 3h-2.936a1 1 0 0 0-.79.387l-2.274 2.212-2.276-2.212a1 1 0 0 0-.79-.387H6a3.003 3.003 0 0 1-3-3V6a3.003 3.003 0 0 1 3-3h12a3.003 3.003 0 0 1 3 3Zm-9-1.66a1.229 1.229 0 1 0 1.228 1.228A1.23 1.23 0 0 0 12 13.344Zm0-8.117a1.274 1.274 0 0 0-.933.396 1.108 1.108 0 0 0-.3.838l.347 4.861a.892.892 0 0 0 1.77 0l.348-4.86a1.106 1.106 0 0 0-.3-.838A1.272 1.272 0 0 0 12 5.228Z"})}))}a.displayName=a.name+" [from "+f.id+"]";b=i.memo(a);g["default"]=b}),98);
__d("usePolarisShowSettingsModuleHeader",["CometRelay","usePolarisShowSettingsModuleHeaderQuery.graphql"],(function(a,b,c,d,e,f,g){"use strict";var h;a=function(){var a,c=d("CometRelay").useLazyLoadQuery(h!==void 0?h:h=b("usePolarisShowSettingsModuleHeaderQuery.graphql"),{});c=c.fxcal_settings;a=(a=c==null?void 0:c.should_user_see_centralized_settings_new_app_ia)!=null?a:!1;c=(c=c==null?void 0:c.ig_project_elevation_one_point_five_enabled)!=null?c:!1;return a&&c};c=a;g["default"]=c}),98);
__d("PolarisFXCentralizedSettingsContextualMessage.react",["cx","IGDSText.react","PolarisExternalLink.react","react"],(function(a,b,c,d,e,f,g,h){"use strict";var i,j=i||d("react");function a(a){var b=a.content,d=a.primary_action_title;a=a.primary_action_uri;return b===null||d===null||a===null?j.jsx("div",{}):j.jsxs("div",{className:"_aca_",children:[j.jsx(c("IGDSText.react"),{size:"body",children:b}),j.jsx(c("PolarisExternalLink.react"),{className:"_acb0",href:(b=a)!=null?b:"",target:"_blank",children:d})]})}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);
__d("PolarisSettingsFormRowVariants",["keyMirror"],(function(a,b,c,d,e,f,g){"use strict";a=c("keyMirror")({defaultVariant:null,wideLabel:null});b=a;g["default"]=b}),98);
__d("PolarisSettingsFormRow.react",["cx","PolarisSettingsFormRowVariants","isStringNullOrEmpty","joinClasses","react"],(function(a,b,c,d,e,f,g,h){"use strict";var i,j=i||d("react");function a(a){var b=a.children,d=a.className,e=a.label,f=a.labelledID;a=a.variant;return j.jsxs("div",{className:c("joinClasses")("_ab3p",d),children:[j.jsx("aside",{className:(a==null||a===c("PolarisSettingsFormRowVariants").defaultVariant?"_ad6_":"")+(a===c("PolarisSettingsFormRowVariants").wideLabel?" _ad70":"")+(e?"":" _ad71"),children:j.jsx("label",{className:"_ab3q",htmlFor:c("isStringNullOrEmpty")(f)?null:f,children:e})}),j.jsx("div",{className:"_ab3t",children:b})]})}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);
__d("PolarisSettingsHeader.react",["IGDSText.react","react"],(function(a,b,c,d,e,f,g){"use strict";var h,i=h||d("react");function a(a){var b=a.headerText;a=a.testid;return i.jsx(c("IGDSText.react").TitleEmphasized,{elementType:"h2",testid:void 0,zeroMargin:!0,children:b})}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);
__d("PolarisSettingsModuleHeader.react",["IGDSBox.react","IGDSText.react","PolarisSettingsGatingUtils","PolarisSettingsHeader.react","react","usePolarisShowSettingsModuleHeader"],(function(a,b,c,d,e,f,g){"use strict";var h,i=h||d("react");function a(a){var b=a.endAdornment,e=a.headerText;a=a.testid;a=c("usePolarisShowSettingsModuleHeader")();return i.jsxs(c("IGDSBox.react"),{alignItems:"end",direction:"row",marginBottom:6,position:"relative",children:[i.jsx(c("IGDSBox.react"),{flex:"grow",position:"relative",children:d("PolarisSettingsGatingUtils").isElevationV2Enabled(a,!1)?i.jsx(c("PolarisSettingsHeader.react"),{headerText:e,testid:void 0}):i.jsx(c("IGDSText.react"),{size:"headline2",testid:void 0,weight:"normal",children:e})}),b!=null&&b]})}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);
__d("PolarisThemeStrings",["fbt"],(function(a,b,c,d,e,f,g,h){"use strict";a=h._("__JHASH__NCKP338jNzE__JHASH__");b=h._("__JHASH__BfJR_SAVHx___JHASH__");g.SWITCH_APPEARANCE_TEXT=a;g.DARK_MODE_TEXT=b}),98);
__d("PolarisSettingsMobileContainer.react",["IGDSBox.react","PolarisGenericMobileHeader.react","PolarisNavBackButton.react","PolarisShell.react","react"],(function(a,b,c,d,e,f,g){"use strict";var h,i=h||d("react");function a(a){var b=a.children,d=a.hideNavigation,e=a.pageIdentifier;a=a.title;return i.jsx(c("PolarisShell.react"),{hideNavigation:d,mobileHeader:i.jsx(c("PolarisGenericMobileHeader.react"),{leftActions:i.jsx(c("PolarisNavBackButton.react"),{}),title:a}),pageIdentifier:e,children:i.jsx(c("IGDSBox.react"),{flex:"grow",children:b})})}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);
__d("PolarisSettingsShellImpl.react",["cr:6237","react"],(function(a,b,c,d,e,f,g){"use strict";var h;h||d("react");g["default"]=b("cr:6237")}),98);
__d("PolarisSettingsElevationNavigationMenuGlimmer.react",["IGDSBox.react","IGDSGlimmer.react","PolarisUA","react"],(function(a,b,c,d,e,f,g){"use strict";var h,i=h||d("react"),j={fullScreenItem:{height:"x10wjd1d",marginBottom:"x1hq5gj4",marginEnd:"xq8finb",marginLeft:null,marginRight:null,marginStart:"x16n37ib",$$css:!0},sideMenuItem:{height:"x10wjd1d",marginBottom:"xod5an3",marginEnd:"x6bk1ks",marginLeft:null,marginRight:null,marginStart:"x1a7j6l7",$$css:!0}};function a(){return i.jsx(c("IGDSBox.react"),{width:"100%",children:[].concat(Array.from(Array(8).keys())).map(function(a){return i.jsx(c("IGDSGlimmer.react"),{index:a,xstyle:d("PolarisUA").isDesktop()?j.sideMenuItem:j.fullScreenItem},a)})})}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);
__d("PolarisSettingsBloksApp.react",["IGDSBox.react","IGDSSpinner.react","IGWebBloksApp","react"],(function(a,b,c,d,e,f,g){"use strict";var h,i=h||d("react");function a(a){var b=a.appId;a=a.params;return i.jsx(c("IGWebBloksApp"),{appId:b,loadingFallback:i.jsx(c("IGDSBox.react"),{alignItems:"center",justifyContent:"center",margin:4,position:"relative",children:i.jsx(c("IGDSSpinner.react"),{})}),params:a})}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);