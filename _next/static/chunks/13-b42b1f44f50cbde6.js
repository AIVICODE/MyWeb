(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[13],{676:(e,t,r)=>{"use strict";r.d(t,{Ay:()=>k});class n{constructor(e=0,t="Network Error"){this.status=e,this.text=t}}let i={origin:"https://api.emailjs.com",blockHeadless:!1,storageProvider:(()=>{if("undefined"!=typeof localStorage)return{get:e=>Promise.resolve(localStorage.getItem(e)),set:(e,t)=>Promise.resolve(localStorage.setItem(e,t)),remove:e=>Promise.resolve(localStorage.removeItem(e))}})()},o=e=>e?"string"==typeof e?{publicKey:e}:"[object Object]"===e.toString()?e:{}:{},a=async(e,t,r={})=>{let o=await fetch(i.origin+e,{method:"POST",headers:r,body:t}),a=await o.text(),l=new n(o.status,a);if(o.ok)return l;throw l},l=(e,t,r)=>{if(!e||"string"!=typeof e)throw"The public key is required. Visit https://dashboard.emailjs.com/admin/account";if(!t||"string"!=typeof t)throw"The service ID is required. Visit https://dashboard.emailjs.com/admin";if(!r||"string"!=typeof r)throw"The template ID is required. Visit https://dashboard.emailjs.com/admin/templates"},s=e=>{if(e&&"[object Object]"!==e.toString())throw"The template params have to be the object. Visit https://www.emailjs.com/docs/sdk/send/"},u=e=>e.webdriver||!e.languages||0===e.languages.length,c=()=>new n(451,"Unavailable For Headless Browser"),d=(e,t)=>{if(!Array.isArray(e))throw"The BlockList list has to be an array";if("string"!=typeof t)throw"The BlockList watchVariable has to be a string"},f=e=>!e.list?.length||!e.watchVariable,p=(e,t)=>e instanceof FormData?e.get(t):e[t],h=(e,t)=>{if(f(e))return!1;d(e.list,e.watchVariable);let r=p(t,e.watchVariable);return"string"==typeof r&&e.list.includes(r)},m=()=>new n(403,"Forbidden"),g=(e,t)=>{if("number"!=typeof e||e<0)throw"The LimitRate throttle has to be a positive number";if(t&&"string"!=typeof t)throw"The LimitRate ID has to be a non-empty string"},y=async(e,t,r)=>{let n=Number(await r.get(e)||0);return t-Date.now()+n},v=async(e,t,r)=>{if(!t.throttle||!r)return!1;g(t.throttle,t.id);let n=t.id||e;return await y(n,t.throttle,r)>0||(await r.set(n,Date.now().toString()),!1)},b=()=>new n(429,"Too Many Requests"),w=e=>{if(!e||"FORM"!==e.nodeName)throw"The 3rd parameter is expected to be the HTML form element or the style selector of the form"},_=e=>"string"==typeof e?document.querySelector(e):e,k={init:(e,t="https://api.emailjs.com")=>{if(!e)return;let r=o(e);i.publicKey=r.publicKey,i.blockHeadless=r.blockHeadless,i.storageProvider=r.storageProvider,i.blockList=r.blockList,i.limitRate=r.limitRate,i.origin=r.origin||t},send:async(e,t,r,n)=>{let d=o(n),f=d.publicKey||i.publicKey,p=d.blockHeadless||i.blockHeadless,g=d.storageProvider||i.storageProvider,y={...i.blockList,...d.blockList},w={...i.limitRate,...d.limitRate};return p&&u(navigator)?Promise.reject(c()):(l(f,e,t),s(r),r&&h(y,r))?Promise.reject(m()):await v(location.pathname,w,g)?Promise.reject(b()):a("/api/v1.0/email/send",JSON.stringify({lib_version:"4.4.1",user_id:f,service_id:e,template_id:t,template_params:r}),{"Content-type":"application/json"})},sendForm:async(e,t,r,n)=>{let s=o(n),d=s.publicKey||i.publicKey,f=s.blockHeadless||i.blockHeadless,p=i.storageProvider||s.storageProvider,g={...i.blockList,...s.blockList},y={...i.limitRate,...s.limitRate};if(f&&u(navigator))return Promise.reject(c());let k=_(r);l(d,e,t),w(k);let j=new FormData(k);return h(g,j)?Promise.reject(m()):await v(location.pathname,y,p)?Promise.reject(b()):(j.append("lib_version","4.4.1"),j.append("service_id",e),j.append("template_id",t),j.append("user_id",d),a("/api/v1.0/email/send-form",j))},EmailJSResponseStatus:n}},7836:(e,t,r)=>{"use strict";var n,i;e.exports=(null==(n=r.g.process)?void 0:n.env)&&"object"==typeof(null==(i=r.g.process)?void 0:i.env)?r.g.process:r(5307)},3943:(e,t,r)=>{"use strict";r.d(t,{A:()=>s});var n=r(6540);let i=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),o=function(){for(var e=arguments.length,t=Array(e),r=0;r<e;r++)t[r]=arguments[r];return t.filter((e,t,r)=>!!e&&""!==e.trim()&&r.indexOf(e)===t).join(" ").trim()};var a={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};let l=(0,n.forwardRef)((e,t)=>{let{color:r="currentColor",size:i=24,strokeWidth:l=2,absoluteStrokeWidth:s,className:u="",children:c,iconNode:d,...f}=e;return(0,n.createElement)("svg",{ref:t,...a,width:i,height:i,stroke:r,strokeWidth:s?24*Number(l)/Number(i):l,className:o("lucide",u),...f},[...d.map(e=>{let[t,r]=e;return(0,n.createElement)(t,r)}),...Array.isArray(c)?c:[c]])}),s=(e,t)=>{let r=(0,n.forwardRef)((r,a)=>{let{className:s,...u}=r;return(0,n.createElement)(l,{ref:a,iconNode:t,className:o("lucide-".concat(i(e)),s),...u})});return r.displayName="".concat(e),r}},2705:(e,t,r)=>{"use strict";r.d(t,{A:()=>n});let n=(0,r(3943).A)("Briefcase",[["path",{d:"M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16",key:"jecpp"}],["rect",{width:"20",height:"14",x:"2",y:"6",rx:"2",key:"i6l2r4"}]])},5:(e,t,r)=>{"use strict";r.d(t,{A:()=>n});let n=(0,r(3943).A)("Check",[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]])},7537:(e,t,r)=>{"use strict";r.d(t,{A:()=>n});let n=(0,r(3943).A)("Facebook",[["path",{d:"M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z",key:"1jg4f8"}]])},5151:(e,t,r)=>{"use strict";r.d(t,{A:()=>n});let n=(0,r(3943).A)("Gift",[["rect",{x:"3",y:"8",width:"18",height:"4",rx:"1",key:"bkv52"}],["path",{d:"M12 8v13",key:"1c76mn"}],["path",{d:"M19 12v7a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-7",key:"6wjy6b"}],["path",{d:"M7.5 8a2.5 2.5 0 0 1 0-5A4.8 8 0 0 1 12 8a4.8 8 0 0 1 4.5-5 2.5 2.5 0 0 1 0 5",key:"1ihvrl"}]])},9359:(e,t,r)=>{"use strict";r.d(t,{A:()=>n});let n=(0,r(3943).A)("Linkedin",[["path",{d:"M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z",key:"c2jq9f"}],["rect",{width:"4",height:"12",x:"2",y:"9",key:"mk3on5"}],["circle",{cx:"4",cy:"4",r:"2",key:"bt5ra8"}]])},6010:(e,t,r)=>{"use strict";r.d(t,{A:()=>n});let n=(0,r(3943).A)("Mail",[["rect",{width:"20",height:"16",x:"2",y:"4",rx:"2",key:"18n3k1"}],["path",{d:"m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7",key:"1ocrg3"}]])},4029:(e,t,r)=>{"use strict";r.d(t,{A:()=>n});let n=(0,r(3943).A)("MapPin",[["path",{d:"M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0",key:"1r0f0z"}],["circle",{cx:"12",cy:"10",r:"3",key:"ilqhr7"}]])},773:(e,t,r)=>{"use strict";r.d(t,{A:()=>n});let n=(0,r(3943).A)("Phone",[["path",{d:"M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z",key:"foiqr5"}]])},278:(e,t,r)=>{"use strict";r.d(t,{A:()=>n});let n=(0,r(3943).A)("ShoppingBag",[["path",{d:"M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z",key:"hou9p0"}],["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M16 10a4 4 0 0 1-8 0",key:"1ltviw"}]])},199:(e,t,r)=>{"use strict";r.d(t,{A:()=>n});let n=(0,r(3943).A)("UserPlus",[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}],["line",{x1:"19",x2:"19",y1:"8",y2:"14",key:"1bvyxn"}],["line",{x1:"22",x2:"16",y1:"11",y2:"11",key:"1shjgl"}]])},4909:(e,t,r)=>{"use strict";r.d(t,{A:()=>n});let n=(0,r(3943).A)("Users",[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}],["path",{d:"M22 21v-2a4 4 0 0 0-3-3.87",key:"kshegd"}],["path",{d:"M16 3.13a4 4 0 0 1 0 7.75",key:"1da9ce"}]])},6897:(e,t,r)=>{"use strict";r.d(t,{A:()=>n});let n=(0,r(3943).A)("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]])},5157:(e,t,r)=>{"use strict";function n(e,t,r,n){return!1}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"getDomainLocale",{enumerable:!0,get:function(){return n}}),r(2063),("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},6526:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"Image",{enumerable:!0,get:function(){return w}});let n=r(7677),i=r(544),o=r(4848),a=i._(r(6540)),l=n._(r(961)),s=n._(r(6085)),u=r(7282),c=r(2105),d=r(9641);r(7679);let f=r(7644),p=n._(r(5472)),h=r(1903),m={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/MyWeb/_next/image",loader:"default",dangerouslyAllowSVG:!1,unoptimized:!0};function g(e,t,r,n,i,o,a){let l=null==e?void 0:e.src;e&&e["data-loaded-src"]!==l&&(e["data-loaded-src"]=l,("decode"in e?e.decode():Promise.resolve()).catch(()=>{}).then(()=>{if(e.parentElement&&e.isConnected){if("empty"!==t&&i(!0),null==r?void 0:r.current){let t=new Event("load");Object.defineProperty(t,"target",{writable:!1,value:e});let n=!1,i=!1;r.current({...t,nativeEvent:t,currentTarget:e,target:e,isDefaultPrevented:()=>n,isPropagationStopped:()=>i,persist:()=>{},preventDefault:()=>{n=!0,t.preventDefault()},stopPropagation:()=>{i=!0,t.stopPropagation()}})}(null==n?void 0:n.current)&&n.current(e)}}))}function y(e){return a.use?{fetchPriority:e}:{fetchpriority:e}}let v=(0,a.forwardRef)((e,t)=>{let{src:r,srcSet:n,sizes:i,height:l,width:s,decoding:u,className:c,style:d,fetchPriority:f,placeholder:p,loading:m,unoptimized:v,fill:b,onLoadRef:w,onLoadingCompleteRef:_,setBlurComplete:k,setShowAltText:j,sizesInput:x,onLoad:M,onError:P,...S}=e,O=(0,a.useCallback)(e=>{e&&(P&&(e.src=e.src),e.complete&&g(e,p,w,_,k,v,x))},[r,p,w,_,k,P,v,x]),C=(0,h.useMergedRef)(t,O);return(0,o.jsx)("img",{...S,...y(f),loading:m,width:s,height:l,decoding:u,"data-nimg":b?"fill":"1",className:c,style:d,sizes:i,srcSet:n,src:r,ref:C,onLoad:e=>{g(e.currentTarget,p,w,_,k,v,x)},onError:e=>{j(!0),"empty"!==p&&k(!0),P&&P(e)}})});function b(e){let{isAppRouter:t,imgAttributes:r}=e,n={as:"image",imageSrcSet:r.srcSet,imageSizes:r.sizes,crossOrigin:r.crossOrigin,referrerPolicy:r.referrerPolicy,...y(r.fetchPriority)};return t&&l.default.preload?(l.default.preload(r.src,n),null):(0,o.jsx)(s.default,{children:(0,o.jsx)("link",{rel:"preload",href:r.srcSet?void 0:r.src,...n},"__nimg-"+r.src+r.srcSet+r.sizes)})}let w=(0,a.forwardRef)((e,t)=>{let r=(0,a.useContext)(f.RouterContext),n=(0,a.useContext)(d.ImageConfigContext),i=(0,a.useMemo)(()=>{let e=m||n||c.imageConfigDefault,t=[...e.deviceSizes,...e.imageSizes].sort((e,t)=>e-t),r=e.deviceSizes.sort((e,t)=>e-t);return{...e,allSizes:t,deviceSizes:r}},[n]),{onLoad:l,onLoadingComplete:s}=e,h=(0,a.useRef)(l);(0,a.useEffect)(()=>{h.current=l},[l]);let g=(0,a.useRef)(s);(0,a.useEffect)(()=>{g.current=s},[s]);let[y,w]=(0,a.useState)(!1),[_,k]=(0,a.useState)(!1),{props:j,meta:x}=(0,u.getImgProps)(e,{defaultLoader:p.default,imgConf:i,blurComplete:y,showAltText:_});return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(v,{...j,unoptimized:x.unoptimized,placeholder:x.placeholder,fill:x.fill,onLoadRef:h,onLoadingCompleteRef:g,setBlurComplete:w,setShowAltText:k,sizesInput:e.sizes,ref:t}),x.priority?(0,o.jsx)(b,{isAppRouter:!r,imgAttributes:j}):null]})});("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},6397:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return b}});let n=r(7677),i=r(4848),o=n._(r(6540)),a=r(6847),l=r(7785),s=r(2772),u=r(1278),c=r(6185),d=r(7644),f=r(6334),p=r(5157),h=r(296),m=r(1903),g=new Set;function y(e,t,r,n){if((0,l.isLocalURL)(t)){if(!n.bypassPrefetchedCheck){let i=t+"%"+r+"%"+(void 0!==n.locale?n.locale:"locale"in e?e.locale:void 0);if(g.has(i))return;g.add(i)}e.prefetch(t,r,n).catch(e=>{})}}function v(e){return"string"==typeof e?e:(0,s.formatUrl)(e)}let b=o.default.forwardRef(function(e,t){let r,n;let{href:s,as:g,children:b,prefetch:w=null,passHref:_,replace:k,shallow:j,scroll:x,locale:M,onClick:P,onMouseEnter:S,onTouchStart:O,legacyBehavior:C=!1,...A}=e;r=b,C&&("string"==typeof r||"number"==typeof r)&&(r=(0,i.jsx)("a",{children:r}));let E=o.default.useContext(d.RouterContext),R=!1!==w,{href:T,as:L}=o.default.useMemo(()=>{if(!E){let e=v(s);return{href:e,as:g?v(g):e}}let[e,t]=(0,a.resolveHref)(E,s,!0);return{href:e,as:g?(0,a.resolveHref)(E,g):t||e}},[E,s,g]),I=o.default.useRef(T),z=o.default.useRef(L);C&&(n=o.default.Children.only(r));let N=C?n&&"object"==typeof n&&n.ref:t,[D,H,U]=(0,f.useIntersection)({rootMargin:"200px"}),F=o.default.useCallback(e=>{(z.current!==L||I.current!==T)&&(U(),z.current=L,I.current=T),D(e)},[L,T,U,D]),B=(0,m.useMergedRef)(F,N);o.default.useEffect(()=>{E&&H&&R&&y(E,T,L,{locale:M})},[L,T,H,M,R,null==E?void 0:E.locale,E]);let q={ref:B,onClick(e){C||"function"!=typeof P||P(e),C&&n.props&&"function"==typeof n.props.onClick&&n.props.onClick(e),E&&!e.defaultPrevented&&function(e,t,r,n,i,o,a,s){let{nodeName:u}=e.currentTarget;"A"===u.toUpperCase()&&(function(e){let t=e.currentTarget.getAttribute("target");return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)||!(0,l.isLocalURL)(r))||(e.preventDefault(),(()=>{let e=null==a||a;"beforePopState"in t?t[i?"replace":"push"](r,n,{shallow:o,locale:s,scroll:e}):t[i?"replace":"push"](n||r,{scroll:e})})())}(e,E,T,L,k,j,x,M)},onMouseEnter(e){C||"function"!=typeof S||S(e),C&&n.props&&"function"==typeof n.props.onMouseEnter&&n.props.onMouseEnter(e),E&&y(E,T,L,{locale:M,priority:!0,bypassPrefetchedCheck:!0})},onTouchStart:function(e){C||"function"!=typeof O||O(e),C&&n.props&&"function"==typeof n.props.onTouchStart&&n.props.onTouchStart(e),E&&y(E,T,L,{locale:M,priority:!0,bypassPrefetchedCheck:!0})}};if((0,u.isAbsoluteUrl)(L))q.href=L;else if(!C||_||"a"===n.type&&!("href"in n.props)){let e=void 0!==M?M:null==E?void 0:E.locale,t=(null==E?void 0:E.isLocaleDomain)&&(0,p.getDomainLocale)(L,e,null==E?void 0:E.locales,null==E?void 0:E.domainLocales);q.href=t||(0,h.addBasePath)((0,c.addLocale)(L,e,null==E?void 0:E.defaultLocale))}return C?o.default.cloneElement(n,q):(0,i.jsx)("a",{...A,...q,children:r})});("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},6334:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"useIntersection",{enumerable:!0,get:function(){return s}});let n=r(6540),i=r(4959),o="function"==typeof IntersectionObserver,a=new Map,l=[];function s(e){let{rootRef:t,rootMargin:r,disabled:s}=e,u=s||!o,[c,d]=(0,n.useState)(!1),f=(0,n.useRef)(null),p=(0,n.useCallback)(e=>{f.current=e},[]);return(0,n.useEffect)(()=>{if(o){if(u||c)return;let e=f.current;if(e&&e.tagName)return function(e,t,r){let{id:n,observer:i,elements:o}=function(e){let t;let r={root:e.root||null,margin:e.rootMargin||""},n=l.find(e=>e.root===r.root&&e.margin===r.margin);if(n&&(t=a.get(n)))return t;let i=new Map;return t={id:r,observer:new IntersectionObserver(e=>{e.forEach(e=>{let t=i.get(e.target),r=e.isIntersecting||e.intersectionRatio>0;t&&r&&t(r)})},e),elements:i},l.push(r),a.set(r,t),t}(r);return o.set(e,t),i.observe(e),function(){if(o.delete(e),i.unobserve(e),0===o.size){i.disconnect(),a.delete(n);let e=l.findIndex(e=>e.root===n.root&&e.margin===n.margin);e>-1&&l.splice(e,1)}}}(e,e=>e&&d(e),{root:null==t?void 0:t.current,rootMargin:r})}else if(!c){let e=(0,i.requestIdleCallback)(()=>d(!0));return()=>(0,i.cancelIdleCallback)(e)}},[u,r,t,c,f.current]),[p,c,(0,n.useCallback)(()=>{d(!1)},[])]}("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},1903:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"useMergedRef",{enumerable:!0,get:function(){return i}});let n=r(6540);function i(e,t){let r=(0,n.useRef)(()=>{}),i=(0,n.useRef)(()=>{});return(0,n.useMemo)(()=>e&&t?n=>{null===n?(r.current(),i.current()):(r.current=o(e,n),i.current=o(t,n))}:e||t,[e,t])}function o(e,t){if("function"!=typeof e)return e.current=t,()=>{e.current=null};{let r=e(t);return"function"==typeof r?r:()=>e(null)}}("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},6825:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"AmpStateContext",{enumerable:!0,get:function(){return n}});let n=r(7677)._(r(6540)).default.createContext({})},8721:(e,t)=>{"use strict";function r(e){let{ampFirst:t=!1,hybrid:r=!1,hasQuery:n=!1}=void 0===e?{}:e;return t||r&&n}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"isInAmpMode",{enumerable:!0,get:function(){return r}})},7282:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"getImgProps",{enumerable:!0,get:function(){return l}}),r(7679);let n=r(9197),i=r(2105);function o(e){return void 0!==e.default}function a(e){return void 0===e?e:"number"==typeof e?Number.isFinite(e)?e:NaN:"string"==typeof e&&/^[0-9]+$/.test(e)?parseInt(e,10):NaN}function l(e,t){var r;let l,s,u,{src:c,sizes:d,unoptimized:f=!1,priority:p=!1,loading:h,className:m,quality:g,width:y,height:v,fill:b=!1,style:w,overrideSrc:_,onLoad:k,onLoadingComplete:j,placeholder:x="empty",blurDataURL:M,fetchPriority:P,decoding:S="async",layout:O,objectFit:C,objectPosition:A,lazyBoundary:E,lazyRoot:R,...T}=e,{imgConf:L,showAltText:I,blurComplete:z,defaultLoader:N}=t,D=L||i.imageConfigDefault;if("allSizes"in D)l=D;else{let e=[...D.deviceSizes,...D.imageSizes].sort((e,t)=>e-t),t=D.deviceSizes.sort((e,t)=>e-t);l={...D,allSizes:e,deviceSizes:t}}if(void 0===N)throw Error("images.loaderFile detected but the file is missing default export.\nRead more: https://nextjs.org/docs/messages/invalid-images-config");let H=T.loader||N;delete T.loader,delete T.srcSet;let U="__next_img_default"in H;if(U){if("custom"===l.loader)throw Error('Image with src "'+c+'" is missing "loader" prop.\nRead more: https://nextjs.org/docs/messages/next-image-missing-loader')}else{let e=H;H=t=>{let{config:r,...n}=t;return e(n)}}if(O){"fill"===O&&(b=!0);let e={intrinsic:{maxWidth:"100%",height:"auto"},responsive:{width:"100%",height:"auto"}}[O];e&&(w={...w,...e});let t={responsive:"100vw",fill:"100vw"}[O];t&&!d&&(d=t)}let F="",B=a(y),q=a(v);if((r=c)&&"object"==typeof r&&(o(r)||void 0!==r.src)){let e=o(c)?c.default:c;if(!e.src)throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received "+JSON.stringify(e));if(!e.height||!e.width)throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received "+JSON.stringify(e));if(s=e.blurWidth,u=e.blurHeight,M=M||e.blurDataURL,F=e.src,!b){if(B||q){if(B&&!q){let t=B/e.width;q=Math.round(e.height*t)}else if(!B&&q){let t=q/e.height;B=Math.round(e.width*t)}}else B=e.width,q=e.height}}let V=!p&&("lazy"===h||void 0===h);(!(c="string"==typeof c?c:F)||c.startsWith("data:")||c.startsWith("blob:"))&&(f=!0,V=!1),l.unoptimized&&(f=!0),U&&!l.dangerouslyAllowSVG&&c.split("?",1)[0].endsWith(".svg")&&(f=!0);let K=a(g),W=Object.assign(b?{position:"absolute",height:"100%",width:"100%",left:0,top:0,right:0,bottom:0,objectFit:C,objectPosition:A}:{},I?{}:{color:"transparent"},w),G=z||"empty"===x?null:"blur"===x?'url("data:image/svg+xml;charset=utf-8,'+(0,n.getImageBlurSvg)({widthInt:B,heightInt:q,blurWidth:s,blurHeight:u,blurDataURL:M||"",objectFit:W.objectFit})+'")':'url("'+x+'")',$=G?{backgroundSize:W.objectFit||"cover",backgroundPosition:W.objectPosition||"50% 50%",backgroundRepeat:"no-repeat",backgroundImage:G}:{},J=function(e){let{config:t,src:r,unoptimized:n,width:i,quality:o,sizes:a,loader:l}=e;if(n)return{src:r,srcSet:void 0,sizes:void 0};let{widths:s,kind:u}=function(e,t,r){let{deviceSizes:n,allSizes:i}=e;if(r){let e=/(^|\s)(1?\d?\d)vw/g,t=[];for(let n;n=e.exec(r);n)t.push(parseInt(n[2]));if(t.length){let e=.01*Math.min(...t);return{widths:i.filter(t=>t>=n[0]*e),kind:"w"}}return{widths:i,kind:"w"}}return"number"!=typeof t?{widths:n,kind:"w"}:{widths:[...new Set([t,2*t].map(e=>i.find(t=>t>=e)||i[i.length-1]))],kind:"x"}}(t,i,a),c=s.length-1;return{sizes:a||"w"!==u?a:"100vw",srcSet:s.map((e,n)=>l({config:t,src:r,quality:o,width:e})+" "+("w"===u?e:n+1)+u).join(", "),src:l({config:t,src:r,quality:o,width:s[c]})}}({config:l,src:c,unoptimized:f,width:B,quality:K,sizes:d,loader:H});return{props:{...T,loading:V?"lazy":h,fetchPriority:P,width:B,height:q,decoding:S,className:m,style:{...W,...$},sizes:J.sizes,srcSet:J.srcSet,src:_||J.src},meta:{unoptimized:f,priority:p,placeholder:x,fill:b}}}},6085:(e,t,r)=>{"use strict";var n=r(7836);Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{default:function(){return g},defaultHead:function(){return f}});let i=r(7677),o=r(544),a=r(4848),l=o._(r(6540)),s=i._(r(5076)),u=r(6825),c=r(1215),d=r(8721);function f(e){void 0===e&&(e=!1);let t=[(0,a.jsx)("meta",{charSet:"utf-8"},"charset")];return e||t.push((0,a.jsx)("meta",{name:"viewport",content:"width=device-width"},"viewport")),t}function p(e,t){return"string"==typeof t||"number"==typeof t?e:t.type===l.default.Fragment?e.concat(l.default.Children.toArray(t.props.children).reduce((e,t)=>"string"==typeof t||"number"==typeof t?e:e.concat(t),[])):e.concat(t)}r(7679);let h=["name","httpEquiv","charSet","itemProp"];function m(e,t){let{inAmpMode:r}=t;return e.reduce(p,[]).reverse().concat(f(r).reverse()).filter(function(){let e=new Set,t=new Set,r=new Set,n={};return i=>{let o=!0,a=!1;if(i.key&&"number"!=typeof i.key&&i.key.indexOf("$")>0){a=!0;let t=i.key.slice(i.key.indexOf("$")+1);e.has(t)?o=!1:e.add(t)}switch(i.type){case"title":case"base":t.has(i.type)?o=!1:t.add(i.type);break;case"meta":for(let e=0,t=h.length;e<t;e++){let t=h[e];if(i.props.hasOwnProperty(t)){if("charSet"===t)r.has(t)?o=!1:r.add(t);else{let e=i.props[t],r=n[t]||new Set;("name"!==t||!a)&&r.has(e)?o=!1:(r.add(e),n[t]=r)}}}}return o}}()).reverse().map((e,t)=>{let i=e.key||t;if(n.env.__NEXT_OPTIMIZE_FONTS&&!r&&"link"===e.type&&e.props.href&&["https://fonts.googleapis.com/css","https://use.typekit.net/"].some(t=>e.props.href.startsWith(t))){let t={...e.props||{}};return t["data-href"]=t.href,t.href=void 0,t["data-optimized-fonts"]=!0,l.default.cloneElement(e,t)}return l.default.cloneElement(e,{key:i})})}let g=function(e){let{children:t}=e,r=(0,l.useContext)(u.AmpStateContext),n=(0,l.useContext)(c.HeadManagerContext);return(0,a.jsx)(s.default,{reduceComponentsToState:m,headManager:n,inAmpMode:(0,d.isInAmpMode)(r),children:t})};("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},9197:(e,t)=>{"use strict";function r(e){let{widthInt:t,heightInt:r,blurWidth:n,blurHeight:i,blurDataURL:o,objectFit:a}=e,l=n?40*n:t,s=i?40*i:r,u=l&&s?"viewBox='0 0 "+l+" "+s+"'":"";return"%3Csvg xmlns='http://www.w3.org/2000/svg' "+u+"%3E%3Cfilter id='b' color-interpolation-filters='sRGB'%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3CfeColorMatrix values='1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 100 -1' result='s'/%3E%3CfeFlood x='0' y='0' width='100%25' height='100%25'/%3E%3CfeComposite operator='out' in='s'/%3E%3CfeComposite in2='SourceGraphic'/%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3C/filter%3E%3Cimage width='100%25' height='100%25' x='0' y='0' preserveAspectRatio='"+(u?"none":"contain"===a?"xMidYMid":"cover"===a?"xMidYMid slice":"none")+"' style='filter: url(%23b);' href='"+o+"'/%3E%3C/svg%3E"}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"getImageBlurSvg",{enumerable:!0,get:function(){return r}})},2364:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{default:function(){return s},getImageProps:function(){return l}});let n=r(7677),i=r(7282),o=r(6526),a=n._(r(5472));function l(e){let{props:t}=(0,i.getImgProps)(e,{defaultLoader:a.default,imgConf:{deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/MyWeb/_next/image",loader:"default",dangerouslyAllowSVG:!1,unoptimized:!0}});for(let[e,r]of Object.entries(t))void 0===r&&delete t[e];return{props:t}}let s=o.Image},5472:(e,t)=>{"use strict";function r(e){let{config:t,src:r,width:n,quality:i}=e;return t.path+"?url="+encodeURIComponent(r)+"&w="+n+"&q="+(i||75)+(r.startsWith("/_next/static/media/"),"")}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return n}}),r.__next_img_default=!0;let n=r},5076:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return a}});let n=r(6540),i=n.useLayoutEffect,o=n.useEffect;function a(e){let{headManager:t,reduceComponentsToState:r}=e;function a(){if(t&&t.mountedInstances){let i=n.Children.toArray(Array.from(t.mountedInstances).filter(Boolean));t.updateHead(r(i,e))}}return i(()=>{var r;return null==t||null==(r=t.mountedInstances)||r.add(e.children),()=>{var r;null==t||null==(r=t.mountedInstances)||r.delete(e.children)}}),i(()=>(t&&(t._pendingUpdate=a),()=>{t&&(t._pendingUpdate=a)})),o(()=>(t&&t._pendingUpdate&&(t._pendingUpdate(),t._pendingUpdate=null),()=>{t&&t._pendingUpdate&&(t._pendingUpdate(),t._pendingUpdate=null)})),null}},7679:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"warnOnce",{enumerable:!0,get:function(){return r}});let r=e=>{}},5307:e=>{!function(){var t={229:function(e){var t,r,n,i=e.exports={};function o(){throw Error("setTimeout has not been defined")}function a(){throw Error("clearTimeout has not been defined")}function l(e){if(t===setTimeout)return setTimeout(e,0);if((t===o||!t)&&setTimeout)return t=setTimeout,setTimeout(e,0);try{return t(e,0)}catch(r){try{return t.call(null,e,0)}catch(r){return t.call(this,e,0)}}}!function(){try{t="function"==typeof setTimeout?setTimeout:o}catch(e){t=o}try{r="function"==typeof clearTimeout?clearTimeout:a}catch(e){r=a}}();var s=[],u=!1,c=-1;function d(){u&&n&&(u=!1,n.length?s=n.concat(s):c=-1,s.length&&f())}function f(){if(!u){var e=l(d);u=!0;for(var t=s.length;t;){for(n=s,s=[];++c<t;)n&&n[c].run();c=-1,t=s.length}n=null,u=!1,function(e){if(r===clearTimeout)return clearTimeout(e);if((r===a||!r)&&clearTimeout)return r=clearTimeout,clearTimeout(e);try{r(e)}catch(t){try{return r.call(null,e)}catch(t){return r.call(this,e)}}}(e)}}function p(e,t){this.fun=e,this.array=t}function h(){}i.nextTick=function(e){var t=Array(arguments.length-1);if(arguments.length>1)for(var r=1;r<arguments.length;r++)t[r-1]=arguments[r];s.push(new p(e,t)),1!==s.length||u||l(f)},p.prototype.run=function(){this.fun.apply(null,this.array)},i.title="browser",i.browser=!0,i.env={},i.argv=[],i.version="",i.versions={},i.on=h,i.addListener=h,i.once=h,i.off=h,i.removeListener=h,i.removeAllListeners=h,i.emit=h,i.prependListener=h,i.prependOnceListener=h,i.listeners=function(e){return[]},i.binding=function(e){throw Error("process.binding is not supported")},i.cwd=function(){return"/"},i.chdir=function(e){throw Error("process.chdir is not supported")},i.umask=function(){return 0}}},r={};function n(e){var i=r[e];if(void 0!==i)return i.exports;var o=r[e]={exports:{}},a=!0;try{t[e](o,o.exports,n),a=!1}finally{a&&delete r[e]}return o.exports}n.ab="//";var i=n(229);e.exports=i}()},9965:(e,t,r)=>{e.exports=r(2364)},1106:(e,t,r)=>{e.exports=r(6397)}}]);