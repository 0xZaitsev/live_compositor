"use strict";(self.webpackChunkcompositor_live=self.webpackChunkcompositor_live||[]).push([[8401],{71243:(e,t,n)=>{n.d(t,{A:()=>v});n(96540);var s=n(18215),i=n(17559),a=n(84142),l=n(99169),o=n(28774),r=n(21312),c=n(86025),d=n(74848);function u(e){return(0,d.jsx)("svg",{viewBox:"0 0 24 24",...e,children:(0,d.jsx)("path",{d:"M10 19v-5h4v5c0 .55.45 1 1 1h3c.55 0 1-.45 1-1v-7h1.7c.46 0 .68-.57.33-.87L12.67 3.6c-.38-.34-.96-.34-1.34 0l-8.36 7.53c-.34.3-.13.87.33.87H5v7c0 .55.45 1 1 1h3c.55 0 1-.45 1-1z",fill:"currentColor"})})}const m={breadcrumbHomeIcon:"breadcrumbHomeIcon_YNFT"};function h(){const e=(0,c.A)("/");return(0,d.jsx)("li",{className:"breadcrumbs__item",children:(0,d.jsx)(o.A,{"aria-label":(0,r.T)({id:"theme.docs.breadcrumbs.home",message:"Home page",description:"The ARIA label for the home page in the breadcrumbs"}),className:"breadcrumbs__link",href:e,children:(0,d.jsx)(u,{className:m.breadcrumbHomeIcon})})})}const x={breadcrumbsContainer:"breadcrumbsContainer_Z_bl"};function p(e){let{children:t,href:n,isLast:s}=e;const i="breadcrumbs__link";return s?(0,d.jsx)("span",{className:i,itemProp:"name",children:t}):n?(0,d.jsx)(o.A,{className:i,href:n,itemProp:"item",children:(0,d.jsx)("span",{itemProp:"name",children:t})}):(0,d.jsx)("span",{className:i,children:t})}function f(e){let{children:t,active:n,index:i,addMicrodata:a}=e;return(0,d.jsxs)("li",{...a&&{itemScope:!0,itemProp:"itemListElement",itemType:"https://schema.org/ListItem"},className:(0,s.A)("breadcrumbs__item",{"breadcrumbs__item--active":n}),children:[t,(0,d.jsx)("meta",{itemProp:"position",content:String(i+1)})]})}function v(){const e=(0,a.OF)(),t=(0,l.Dt)();return e?(0,d.jsx)("nav",{className:(0,s.A)(i.G.docs.docBreadcrumbs,x.breadcrumbsContainer),"aria-label":(0,r.T)({id:"theme.docs.breadcrumbs.navAriaLabel",message:"Breadcrumbs",description:"The ARIA label for the breadcrumbs"}),children:(0,d.jsxs)("ul",{className:"breadcrumbs",itemScope:!0,itemType:"https://schema.org/BreadcrumbList",children:[t&&(0,d.jsx)(h,{}),e.map(((t,n)=>{const s=n===e.length-1,i="category"===t.type&&t.linkUnlisted?void 0:t.href;return(0,d.jsx)(f,{active:s,index:n,addMicrodata:!!i,children:(0,d.jsx)(p,{href:i,isLast:s,children:t.label})},n)}))]})}):null}},9897:(e,t,n)=>{n.r(t),n.d(t,{default:()=>tt});var s=n(96540),i=n(69024),a=n(89532),l=n(74848);const o=s.createContext(null);function r(e){let{children:t,content:n}=e;const i=function(e){return(0,s.useMemo)((()=>({metadata:e.metadata,frontMatter:e.frontMatter,assets:e.assets,contentTitle:e.contentTitle,toc:e.toc})),[e])}(n);return(0,l.jsx)(o.Provider,{value:i,children:t})}function c(){const e=(0,s.useContext)(o);if(null===e)throw new a.dV("DocProvider");return e}function d(){const{metadata:e,frontMatter:t,assets:n}=c();return(0,l.jsx)(i.be,{title:e.title,description:e.description,keywords:t.keywords,image:n.image??t.image})}var u=n(18215),m=n(24581),h=n(86929);function x(){const{metadata:e}=c();return(0,l.jsx)(h.A,{previous:e.previous,next:e.next})}var p=n(51878),f=n(4267),v=n(17559),j=n(21312);function g(e){let{lastUpdatedAt:t,formattedLastUpdatedAt:n}=e;return(0,l.jsx)(j.A,{id:"theme.lastUpdated.atDate",description:"The words used to describe on which date a page has been last updated",values:{date:(0,l.jsx)("b",{children:(0,l.jsx)("time",{dateTime:new Date(1e3*t).toISOString(),children:n})})},children:" on {date}"})}function b(e){let{lastUpdatedBy:t}=e;return(0,l.jsx)(j.A,{id:"theme.lastUpdated.byUser",description:"The words used to describe by who the page has been last updated",values:{user:(0,l.jsx)("b",{children:t})},children:" by {user}"})}function A(e){let{lastUpdatedAt:t,formattedLastUpdatedAt:n,lastUpdatedBy:s}=e;return(0,l.jsxs)("span",{className:v.G.common.lastUpdated,children:[(0,l.jsx)(j.A,{id:"theme.lastUpdated.lastUpdatedAtBy",description:"The sentence used to display when a page has been last updated, and by who",values:{atDate:t&&n?(0,l.jsx)(g,{lastUpdatedAt:t,formattedLastUpdatedAt:n}):"",byUser:s?(0,l.jsx)(b,{lastUpdatedBy:s}):""},children:"Last updated{atDate}{byUser}"}),!1]})}var N=n(28774);const C={iconEdit:"iconEdit_Z9Sw"};function L(e){let{className:t,...n}=e;return(0,l.jsx)("svg",{fill:"currentColor",height:"20",width:"20",viewBox:"0 0 40 40",className:(0,u.A)(C.iconEdit,t),"aria-hidden":"true",...n,children:(0,l.jsx)("g",{children:(0,l.jsx)("path",{d:"m34.5 11.7l-3 3.1-6.3-6.3 3.1-3q0.5-0.5 1.2-0.5t1.1 0.5l3.9 3.9q0.5 0.4 0.5 1.1t-0.5 1.2z m-29.5 17.1l18.4-18.5 6.3 6.3-18.4 18.4h-6.3v-6.2z"})})})}function _(e){let{editUrl:t}=e;return(0,l.jsxs)(N.A,{to:t,className:v.G.common.editThisPage,children:[(0,l.jsx)(L,{}),(0,l.jsx)(j.A,{id:"theme.common.editThisPage",description:"The link label to edit the current page",children:"Edit this page"})]})}const T={tag:"tag_zVej",tagRegular:"tagRegular_sFm0",tagWithCount:"tagWithCount_h2kH"};function y(e){let{permalink:t,label:n,count:s}=e;return(0,l.jsxs)(N.A,{href:t,className:(0,u.A)(T.tag,s?T.tagWithCount:T.tagRegular),children:[n,s&&(0,l.jsx)("span",{children:s})]})}const k={tags:"tags_jXut",tag:"tag_QGVx"};function H(e){let{tags:t}=e;return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)("b",{children:(0,l.jsx)(j.A,{id:"theme.tags.tagsListLabel",description:"The label alongside a tag list",children:"Tags:"})}),(0,l.jsx)("ul",{className:(0,u.A)(k.tags,"padding--none","margin-left--sm"),children:t.map((e=>{let{label:t,permalink:n}=e;return(0,l.jsx)("li",{className:k.tag,children:(0,l.jsx)(y,{label:t,permalink:n})},n)}))})]})}const w={lastUpdated:"lastUpdated_vwxv"};function M(e){return(0,l.jsx)("div",{className:(0,u.A)(v.G.docs.docFooterTagsRow,"row margin-bottom--sm"),children:(0,l.jsx)("div",{className:"col",children:(0,l.jsx)(H,{...e})})})}function U(e){let{editUrl:t,lastUpdatedAt:n,lastUpdatedBy:s,formattedLastUpdatedAt:i}=e;return(0,l.jsxs)("div",{className:(0,u.A)(v.G.docs.docFooterEditMetaRow,"row"),children:[(0,l.jsx)("div",{className:"col",children:t&&(0,l.jsx)(_,{editUrl:t})}),(0,l.jsx)("div",{className:(0,u.A)("col",w.lastUpdated),children:(n||s)&&(0,l.jsx)(A,{lastUpdatedAt:n,formattedLastUpdatedAt:i,lastUpdatedBy:s})})]})}function B(){const{metadata:e}=c(),{editUrl:t,lastUpdatedAt:n,formattedLastUpdatedAt:s,lastUpdatedBy:i,tags:a}=e,o=a.length>0,r=!!(t||n||i);return o||r?(0,l.jsxs)("footer",{className:(0,u.A)(v.G.docs.docFooter,"docusaurus-mt-lg"),children:[o&&(0,l.jsx)(M,{tags:a}),r&&(0,l.jsx)(U,{editUrl:t,lastUpdatedAt:n,lastUpdatedBy:i,formattedLastUpdatedAt:s})]}):null}var E=n(41422),I=n(6342);function z(e){const t=e.map((e=>({...e,parentIndex:-1,children:[]}))),n=Array(7).fill(-1);t.forEach(((e,t)=>{const s=n.slice(2,e.level);e.parentIndex=Math.max(...s),n[e.level]=t}));const s=[];return t.forEach((e=>{const{parentIndex:n,...i}=e;n>=0?t[n].children.push(i):s.push(i)})),s}function R(e){let{toc:t,minHeadingLevel:n,maxHeadingLevel:s}=e;return t.flatMap((e=>{const t=R({toc:e.children,minHeadingLevel:n,maxHeadingLevel:s});return function(e){return e.level>=n&&e.level<=s}(e)?[{...e,children:t}]:t}))}function S(e){const t=e.getBoundingClientRect();return t.top===t.bottom?S(e.parentNode):t}function V(e,t){let{anchorTopOffset:n}=t;const s=e.find((e=>S(e).top>=n));if(s){return function(e){return e.top>0&&e.bottom<window.innerHeight/2}(S(s))?s:e[e.indexOf(s)-1]??null}return e[e.length-1]??null}function D(){const e=(0,s.useRef)(0),{navbar:{hideOnScroll:t}}=(0,I.p)();return(0,s.useEffect)((()=>{e.current=t?0:document.querySelector(".navbar").clientHeight}),[t]),e}function G(e){const t=(0,s.useRef)(void 0),n=D();(0,s.useEffect)((()=>{if(!e)return()=>{};const{linkClassName:s,linkActiveClassName:i,minHeadingLevel:a,maxHeadingLevel:l}=e;function o(){const e=function(e){return Array.from(document.getElementsByClassName(e))}(s),o=function(e){let{minHeadingLevel:t,maxHeadingLevel:n}=e;const s=[];for(let i=t;i<=n;i+=1)s.push(`h${i}.anchor`);return Array.from(document.querySelectorAll(s.join()))}({minHeadingLevel:a,maxHeadingLevel:l}),r=V(o,{anchorTopOffset:n.current}),c=e.find((e=>r&&r.id===function(e){return decodeURIComponent(e.href.substring(e.href.indexOf("#")+1))}(e)));e.forEach((e=>{!function(e,n){n?(t.current&&t.current!==e&&t.current.classList.remove(i),e.classList.add(i),t.current=e):e.classList.remove(i)}(e,e===c)}))}return document.addEventListener("scroll",o),document.addEventListener("resize",o),o(),()=>{document.removeEventListener("scroll",o),document.removeEventListener("resize",o)}}),[e,n])}function O(e){let{toc:t,className:n,linkClassName:s,isChild:i}=e;return t.length?(0,l.jsx)("ul",{className:i?void 0:n,children:t.map((e=>(0,l.jsxs)("li",{children:[(0,l.jsx)(N.A,{to:`#${e.id}`,className:s??void 0,dangerouslySetInnerHTML:{__html:e.value}}),(0,l.jsx)(O,{isChild:!0,toc:e.children,className:n,linkClassName:s})]},e.id)))}):null}const P=s.memo(O);function F(e){let{toc:t,className:n="table-of-contents table-of-contents__left-border",linkClassName:i="table-of-contents__link",linkActiveClassName:a,minHeadingLevel:o,maxHeadingLevel:r,...c}=e;const d=(0,I.p)(),u=o??d.tableOfContents.minHeadingLevel,m=r??d.tableOfContents.maxHeadingLevel,h=function(e){let{toc:t,minHeadingLevel:n,maxHeadingLevel:i}=e;return(0,s.useMemo)((()=>R({toc:z(t),minHeadingLevel:n,maxHeadingLevel:i})),[t,n,i])}({toc:t,minHeadingLevel:u,maxHeadingLevel:m});return G((0,s.useMemo)((()=>{if(i&&a)return{linkClassName:i,linkActiveClassName:a,minHeadingLevel:u,maxHeadingLevel:m}}),[i,a,u,m])),(0,l.jsx)(P,{toc:h,className:n,linkClassName:i,...c})}const q={tocCollapsibleButton:"tocCollapsibleButton_TO0P",tocCollapsibleButtonExpanded:"tocCollapsibleButtonExpanded_MG3E"};function W(e){let{collapsed:t,...n}=e;return(0,l.jsx)("button",{type:"button",...n,className:(0,u.A)("clean-btn",q.tocCollapsibleButton,!t&&q.tocCollapsibleButtonExpanded,n.className),children:(0,l.jsx)(j.A,{id:"theme.TOCCollapsible.toggleButtonLabel",description:"The label used by the button on the collapsible TOC component",children:"On this page"})})}const $={tocCollapsible:"tocCollapsible_ETCw",tocCollapsibleContent:"tocCollapsibleContent_vkbj",tocCollapsibleExpanded:"tocCollapsibleExpanded_sAul"};function Y(e){let{toc:t,className:n,minHeadingLevel:s,maxHeadingLevel:i}=e;const{collapsed:a,toggleCollapsed:o}=(0,E.u)({initialState:!0});return(0,l.jsxs)("div",{className:(0,u.A)($.tocCollapsible,!a&&$.tocCollapsibleExpanded,n),children:[(0,l.jsx)(W,{collapsed:a,onClick:o}),(0,l.jsx)(E.N,{lazy:!0,className:$.tocCollapsibleContent,collapsed:a,children:(0,l.jsx)(F,{toc:t,minHeadingLevel:s,maxHeadingLevel:i})})]})}const Z={tocMobile:"tocMobile_ITEo"};function J(){const{toc:e,frontMatter:t}=c();return(0,l.jsx)(Y,{toc:e,minHeadingLevel:t.toc_min_heading_level,maxHeadingLevel:t.toc_max_heading_level,className:(0,u.A)(v.G.docs.docTocMobile,Z.tocMobile)})}const Q={tableOfContents:"tableOfContents_bqdL",docItemContainer:"docItemContainer_F8PC"},X="table-of-contents__link toc-highlight",K="table-of-contents__link--active";function ee(e){let{className:t,...n}=e;return(0,l.jsx)("div",{className:(0,u.A)(Q.tableOfContents,"thin-scrollbar",t),children:(0,l.jsx)(F,{...n,linkClassName:X,linkActiveClassName:K})})}function te(){const{toc:e,frontMatter:t}=c();return(0,l.jsx)(ee,{toc:e,minHeadingLevel:t.toc_min_heading_level,maxHeadingLevel:t.toc_max_heading_level,className:v.G.docs.docTocDesktop})}var ne=n(51107),se=n(28453),ie=n(5260),ae=n(21432);function le(e){return(0,l.jsx)("code",{...e})}var oe=n(15066),re=n(63427),ce=n(92303);const de={details:"details_lb9f",isBrowser:"isBrowser_bmU9",collapsibleContent:"collapsibleContent_i85q"};function ue(e){return!!e&&("SUMMARY"===e.tagName||ue(e.parentElement))}function me(e,t){return!!e&&(e===t||me(e.parentElement,t))}function he(e){let{summary:t,children:n,...i}=e;(0,re.A)().collectAnchor(i.id);const a=(0,ce.A)(),o=(0,s.useRef)(null),{collapsed:r,setCollapsed:c}=(0,E.u)({initialState:!i.open}),[d,u]=(0,s.useState)(i.open),m=s.isValidElement(t)?t:(0,l.jsx)("summary",{children:t??"Details"});return(0,l.jsxs)("details",{...i,ref:o,open:d,"data-collapsed":r,className:(0,oe.A)(de.details,a&&de.isBrowser,i.className),onMouseDown:e=>{ue(e.target)&&e.detail>1&&e.preventDefault()},onClick:e=>{e.stopPropagation();const t=e.target;ue(t)&&me(t,o.current)&&(e.preventDefault(),r?(c(!1),u(!0)):c(!0))},children:[m,(0,l.jsx)(E.N,{lazy:!1,collapsed:r,disableSSRStyle:!0,onCollapseTransitionEnd:e=>{c(e),u(!e)},children:(0,l.jsx)("div",{className:de.collapsibleContent,children:n})})]})}const xe={details:"details_b_Ee"},pe="alert alert--info";function fe(e){let{...t}=e;return(0,l.jsx)(he,{...t,className:(0,u.A)(pe,xe.details,t.className)})}function ve(e){const t=s.Children.toArray(e.children),n=t.find((e=>s.isValidElement(e)&&"summary"===e.type)),i=(0,l.jsx)(l.Fragment,{children:t.filter((e=>e!==n))});return(0,l.jsx)(fe,{...e,summary:n,children:i})}function je(e){return(0,l.jsx)(ne.A,{...e})}const ge={containsTaskList:"containsTaskList_mC6p"};function be(e){if(void 0!==e)return(0,u.A)(e,e?.includes("contains-task-list")&&ge.containsTaskList)}const Ae={img:"img_ev3q"};function Ne(e){const{mdxAdmonitionTitle:t,rest:n}=function(e){const t=s.Children.toArray(e),n=t.find((e=>s.isValidElement(e)&&"mdxAdmonitionTitle"===e.type)),i=t.filter((e=>e!==n)),a=n?.props.children;return{mdxAdmonitionTitle:a,rest:i.length>0?(0,l.jsx)(l.Fragment,{children:i}):null}}(e.children),i=e.title??t;return{...e,...i&&{title:i},children:n}}const Ce={admonition:"admonition_xJq3",admonitionHeading:"admonitionHeading_Gvgb",admonitionIcon:"admonitionIcon_Rf37",admonitionContent:"admonitionContent_BuS1"};function Le(e){let{type:t,className:n,children:s}=e;return(0,l.jsx)("div",{className:(0,u.A)(v.G.common.admonition,v.G.common.admonitionType(t),Ce.admonition,n),children:s})}function _e(e){let{icon:t,title:n}=e;return(0,l.jsxs)("div",{className:Ce.admonitionHeading,children:[(0,l.jsx)("span",{className:Ce.admonitionIcon,children:t}),n]})}function Te(e){let{children:t}=e;return t?(0,l.jsx)("div",{className:Ce.admonitionContent,children:t}):null}function ye(e){const{type:t,icon:n,title:s,children:i,className:a}=e;return(0,l.jsxs)(Le,{type:t,className:a,children:[(0,l.jsx)(_e,{title:s,icon:n}),(0,l.jsx)(Te,{children:i})]})}function ke(e){return(0,l.jsx)("svg",{viewBox:"0 0 14 16",...e,children:(0,l.jsx)("path",{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})})}const He={icon:(0,l.jsx)(ke,{}),title:(0,l.jsx)(j.A,{id:"theme.admonition.note",description:"The default label used for the Note admonition (:::note)",children:"note"})};function we(e){return(0,l.jsx)(ye,{...He,...e,className:(0,u.A)("alert alert--secondary",e.className),children:e.children})}function Me(e){return(0,l.jsx)("svg",{viewBox:"0 0 12 16",...e,children:(0,l.jsx)("path",{fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"})})}const Ue={icon:(0,l.jsx)(Me,{}),title:(0,l.jsx)(j.A,{id:"theme.admonition.tip",description:"The default label used for the Tip admonition (:::tip)",children:"tip"})};function Be(e){return(0,l.jsx)(ye,{...Ue,...e,className:(0,u.A)("alert alert--success",e.className),children:e.children})}function Ee(e){return(0,l.jsx)("svg",{viewBox:"0 0 14 16",...e,children:(0,l.jsx)("path",{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})})}const Ie={icon:(0,l.jsx)(Ee,{}),title:(0,l.jsx)(j.A,{id:"theme.admonition.info",description:"The default label used for the Info admonition (:::info)",children:"info"})};function ze(e){return(0,l.jsx)(ye,{...Ie,...e,className:(0,u.A)("alert alert--info",e.className),children:e.children})}function Re(e){return(0,l.jsx)("svg",{viewBox:"0 0 16 16",...e,children:(0,l.jsx)("path",{fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"})})}const Se={icon:(0,l.jsx)(Re,{}),title:(0,l.jsx)(j.A,{id:"theme.admonition.warning",description:"The default label used for the Warning admonition (:::warning)",children:"warning"})};function Ve(e){return(0,l.jsx)("svg",{viewBox:"0 0 12 16",...e,children:(0,l.jsx)("path",{fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"})})}const De={icon:(0,l.jsx)(Ve,{}),title:(0,l.jsx)(j.A,{id:"theme.admonition.danger",description:"The default label used for the Danger admonition (:::danger)",children:"danger"})};const Ge={icon:(0,l.jsx)(Re,{}),title:(0,l.jsx)(j.A,{id:"theme.admonition.caution",description:"The default label used for the Caution admonition (:::caution)",children:"caution"})};const Oe={...{note:we,tip:Be,info:ze,warning:function(e){return(0,l.jsx)(ye,{...Se,...e,className:(0,u.A)("alert alert--warning",e.className),children:e.children})},danger:function(e){return(0,l.jsx)(ye,{...De,...e,className:(0,u.A)("alert alert--danger",e.className),children:e.children})}},...{secondary:e=>(0,l.jsx)(we,{title:"secondary",...e}),important:e=>(0,l.jsx)(ze,{title:"important",...e}),success:e=>(0,l.jsx)(Be,{title:"success",...e}),caution:function(e){return(0,l.jsx)(ye,{...Ge,...e,className:(0,u.A)("alert alert--warning",e.className),children:e.children})}}};function Pe(e){const t=Ne(e),n=(s=t.type,Oe[s]||(console.warn(`No admonition component found for admonition type "${s}". Using Info as fallback.`),Oe.info));var s;return(0,l.jsx)(n,{...t})}const Fe={Head:ie.A,details:ve,Details:ve,code:function(e){return function(e){return void 0!==e.children&&s.Children.toArray(e.children).every((e=>"string"==typeof e&&!e.includes("\n")))}(e)?(0,l.jsx)(le,{...e}):(0,l.jsx)(ae.A,{...e})},a:function(e){return(0,l.jsx)(N.A,{...e})},pre:function(e){return(0,l.jsx)(l.Fragment,{children:e.children})},ul:function(e){return(0,l.jsx)("ul",{...e,className:be(e.className)})},li:function(e){return(0,re.A)().collectAnchor(e.id),(0,l.jsx)("li",{...e})},img:function(e){return(0,l.jsx)("img",{decoding:"async",loading:"lazy",...e,className:(t=e.className,(0,u.A)(t,Ae.img))});var t},h1:e=>(0,l.jsx)(je,{as:"h1",...e}),h2:e=>(0,l.jsx)(je,{as:"h2",...e}),h3:e=>(0,l.jsx)(je,{as:"h3",...e}),h4:e=>(0,l.jsx)(je,{as:"h4",...e}),h5:e=>(0,l.jsx)(je,{as:"h5",...e}),h6:e=>(0,l.jsx)(je,{as:"h6",...e}),admonition:Pe,mermaid:()=>null};function qe(e){let{children:t}=e;return(0,l.jsx)(se.x,{components:Fe,children:t})}function We(e){let{children:t}=e;const n=function(){const{metadata:e,frontMatter:t,contentTitle:n}=c();return t.hide_title||void 0!==n?null:e.title}();return(0,l.jsxs)("div",{className:(0,u.A)(v.G.docs.docMarkdown,"markdown"),children:[n&&(0,l.jsx)("header",{children:(0,l.jsx)(ne.A,{as:"h1",children:n})}),(0,l.jsx)(qe,{children:t})]})}var $e=n(71243);function Ye(){return(0,l.jsx)(j.A,{id:"theme.unlistedContent.title",description:"The unlisted content banner title",children:"Unlisted page"})}function Ze(){return(0,l.jsx)(j.A,{id:"theme.unlistedContent.message",description:"The unlisted content banner message",children:"This page is unlisted. Search engines will not index it, and only users having a direct link can access it."})}function Je(){return(0,l.jsx)(ie.A,{children:(0,l.jsx)("meta",{name:"robots",content:"noindex, nofollow"})})}function Qe(e){let{className:t}=e;return(0,l.jsx)(Pe,{type:"caution",title:(0,l.jsx)(Ye,{}),className:(0,u.A)(t,v.G.common.unlistedBanner),children:(0,l.jsx)(Ze,{})})}function Xe(e){return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(Je,{}),(0,l.jsx)(Qe,{...e})]})}const Ke={docItemContainer:"docItemContainer_Djhp",docItemCol:"docItemCol_VOVn"};function et(e){let{children:t}=e;const n=function(){const{frontMatter:e,toc:t}=c(),n=(0,m.l)(),s=e.hide_table_of_contents,i=!s&&t.length>0;return{hidden:s,mobile:i?(0,l.jsx)(J,{}):void 0,desktop:!i||"desktop"!==n&&"ssr"!==n?void 0:(0,l.jsx)(te,{})}}(),{metadata:{unlisted:s}}=c();return(0,l.jsxs)("div",{className:"row",children:[(0,l.jsxs)("div",{className:(0,u.A)("col",!n.hidden&&Ke.docItemCol),children:[s&&(0,l.jsx)(Xe,{}),(0,l.jsx)(p.A,{}),(0,l.jsxs)("div",{className:Ke.docItemContainer,children:[(0,l.jsxs)("article",{children:[(0,l.jsx)($e.A,{}),(0,l.jsx)(f.A,{}),n.mobile,(0,l.jsx)(We,{children:t}),(0,l.jsx)(B,{})]}),(0,l.jsx)(x,{})]})]}),n.desktop&&(0,l.jsx)("div",{className:"col col--3",children:n.desktop})]})}function tt(e){const t=`docs-doc-id-${e.content.metadata.id}`,n=e.content;return(0,l.jsx)(r,{content:e.content,children:(0,l.jsxs)(i.e3,{className:t,children:[(0,l.jsx)(d,{}),(0,l.jsx)(et,{children:(0,l.jsx)(n,{})})]})})}},86929:(e,t,n)=>{n.d(t,{A:()=>r});n(96540);var s=n(21312),i=n(18215),a=n(28774),l=n(74848);function o(e){const{permalink:t,title:n,subLabel:s,isNext:o}=e;return(0,l.jsxs)(a.A,{className:(0,i.A)("pagination-nav__link",o?"pagination-nav__link--next":"pagination-nav__link--prev"),to:t,children:[s&&(0,l.jsx)("div",{className:"pagination-nav__sublabel",children:s}),(0,l.jsx)("div",{className:"pagination-nav__label",children:n})]})}function r(e){const{previous:t,next:n}=e;return(0,l.jsxs)("nav",{className:"pagination-nav docusaurus-mt-lg","aria-label":(0,s.T)({id:"theme.docs.paginator.navAriaLabel",message:"Docs pages",description:"The ARIA label for the docs pagination"}),children:[t&&(0,l.jsx)(o,{...t,subLabel:(0,l.jsx)(s.A,{id:"theme.docs.paginator.previous",description:"The label used to navigate to the previous doc",children:"Previous"})}),n&&(0,l.jsx)(o,{...n,subLabel:(0,l.jsx)(s.A,{id:"theme.docs.paginator.next",description:"The label used to navigate to the next doc",children:"Next"}),isNext:!0})]})}},4267:(e,t,n)=>{n.d(t,{A:()=>r});n(96540);var s=n(18215),i=n(21312),a=n(17559),l=n(32252),o=n(74848);function r(e){let{className:t}=e;const n=(0,l.r)();return n.badge?(0,o.jsx)("span",{className:(0,s.A)(t,a.G.docs.docVersionBadge,"badge badge--secondary"),children:(0,o.jsx)(i.A,{id:"theme.docs.versionBadge.label",values:{versionLabel:n.label},children:"Version: {versionLabel}"})}):null}},51878:(e,t,n)=>{n.d(t,{A:()=>f});n(96540);var s=n(18215),i=n(44586),a=n(28774),l=n(21312),o=n(48295),r=n(17559),c=n(55597),d=n(32252),u=n(74848);const m={unreleased:function(e){let{siteTitle:t,versionMetadata:n}=e;return(0,u.jsx)(l.A,{id:"theme.docs.versions.unreleasedVersionLabel",description:"The label used to tell the user that he's browsing an unreleased doc version",values:{siteTitle:t,versionLabel:(0,u.jsx)("b",{children:n.label})},children:"This is unreleased documentation for {siteTitle} {versionLabel} version."})},unmaintained:function(e){let{siteTitle:t,versionMetadata:n}=e;return(0,u.jsx)(l.A,{id:"theme.docs.versions.unmaintainedVersionLabel",description:"The label used to tell the user that he's browsing an unmaintained doc version",values:{siteTitle:t,versionLabel:(0,u.jsx)("b",{children:n.label})},children:"This is documentation for {siteTitle} {versionLabel}, which is no longer actively maintained."})}};function h(e){const t=m[e.versionMetadata.banner];return(0,u.jsx)(t,{...e})}function x(e){let{versionLabel:t,to:n,onClick:s}=e;return(0,u.jsx)(l.A,{id:"theme.docs.versions.latestVersionSuggestionLabel",description:"The label used to tell the user to check the latest version",values:{versionLabel:t,latestVersionLink:(0,u.jsx)("b",{children:(0,u.jsx)(a.A,{to:n,onClick:s,children:(0,u.jsx)(l.A,{id:"theme.docs.versions.latestVersionLinkLabel",description:"The label used for the latest version suggestion link label",children:"latest version"})})})},children:"For up-to-date documentation, see the {latestVersionLink} ({versionLabel})."})}function p(e){let{className:t,versionMetadata:n}=e;const{siteConfig:{title:a}}=(0,i.A)(),{pluginId:l}=(0,o.vT)({failfast:!0}),{savePreferredVersionName:d}=(0,c.g1)(l),{latestDocSuggestion:m,latestVersionSuggestion:p}=(0,o.HW)(l),f=m??(v=p).docs.find((e=>e.id===v.mainDocId));var v;return(0,u.jsxs)("div",{className:(0,s.A)(t,r.G.docs.docVersionBanner,"alert alert--warning margin-bottom--md"),role:"alert",children:[(0,u.jsx)("div",{children:(0,u.jsx)(h,{siteTitle:a,versionMetadata:n})}),(0,u.jsx)("div",{className:"margin-top--md",children:(0,u.jsx)(x,{versionLabel:p.label,to:f.path,onClick:()=>d(p.name)})})]})}function f(e){let{className:t}=e;const n=(0,d.r)();return n.banner?(0,u.jsx)(p,{className:t,versionMetadata:n}):null}},28453:(e,t,n)=>{n.d(t,{R:()=>l,x:()=>o});var s=n(96540);const i={},a=s.createContext(i);function l(e){const t=s.useContext(a);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:l(e.components),s.createElement(a.Provider,{value:t},e.children)}}}]);