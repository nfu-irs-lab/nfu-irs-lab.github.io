"use strict";(self.webpackChunkirs_lab=self.webpackChunkirs_lab||[]).push([[4088],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return d}});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=r.createContext({}),u=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},s=function(e){var t=u(e.components);return r.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),f=u(n),d=i,m=f["".concat(l,".").concat(d)]||f[d]||p[d]||o;return n?r.createElement(m,a(a({ref:t},s),{},{components:n})):r.createElement(m,a({ref:t},s))}));function d(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=f;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:i,a[1]=c;for(var u=2;u<o;u++)a[u]=n[u];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},5360:function(e,t,n){n.d(t,{Z:function(){return b}});var r=n(7294),i=n(9960),o=n(5979),a=n(6010),c="cardContainer_woeA",l="cardTitle_pNjP",u="cardDescription_qC_k",s=n(3919),p=n(5999);function f(e){var t=e.href,n=e.children;return r.createElement(i.Z,{href:t,className:(0,a.Z)("card padding--lg",c)},n)}function d(e){var t=e.href,n=e.icon,i=e.title,o=e.description;return r.createElement(f,{href:t},r.createElement("h2",{className:(0,a.Z)("text--truncate",l),title:i},n," ",i),o&&r.createElement("p",{className:(0,a.Z)("text--truncate",u),title:o},o))}function m(e){var t=e.item,n=(0,o.Wl)(t);return n?r.createElement(d,{href:n,icon:"\ud83d\uddc3\ufe0f",title:t.label,description:(0,p.I)({message:"{count} items",id:"theme.docs.DocCard.categoryDescription",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t.items.length})}):null}function g(e){var t,n=e.item,i=(0,s.Z)(n.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",a=(0,o.xz)(null!=(t=n.docId)?t:void 0);return r.createElement(d,{href:n.href,icon:i,title:n.label,description:null==a?void 0:a.description})}function y(e){var t=e.item;switch(t.type){case"link":return r.createElement(g,{item:t});case"category":return r.createElement(m,{item:t});default:throw new Error("unknown item type "+JSON.stringify(t))}}function b(e){var t=e.items;return r.createElement("div",{className:"row"},function(e){return e.filter((function(e){return"category"!==e.type||!!(0,o.Wl)(e)}))}(t).map((function(e,t){return r.createElement("article",{key:t,className:"col col--6 margin-bottom--lg"},r.createElement(y,{key:t,item:e}))})))}},8884:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return u},default:function(){return m},frontMatter:function(){return l},metadata:function(){return s},toc:function(){return f}});var r=n(7462),i=n(3366),o=(n(7294),n(3905)),a=n(5360),c=["components"],l={title:"\u65b0\u9032\u4eba\u54e1\u8a13\u7df4",slug:"/orientation-training"},u=void 0,s={unversionedId:"orientation-training/index",id:"orientation-training/index",title:"\u65b0\u9032\u4eba\u54e1\u8a13\u7df4",description:"\u6b64\u70ba\u672c\u5be6\u9a57\u5ba4\u7684\u65b0\u9032\u4eba\u54e1\u8a13\u7df4\u624b\u518a\u3002",source:"@site/docs/orientation-training/index.md",sourceDirName:"orientation-training",slug:"/orientation-training",permalink:"/docs/orientation-training",editUrl:"https://github.com/nfu-irs-lab/nfu-irs-lab.github.io/tree/main/docs/orientation-training/index.md",tags:[],version:"current",frontMatter:{title:"\u65b0\u9032\u4eba\u54e1\u8a13\u7df4",slug:"/orientation-training"},sidebar:"tutorialSidebar",next:{title:"\u968e\u6bb5\u4e00\uff1a3D \u5efa\u6a21",permalink:"/docs/orientation-training/step-1"}},p={},f=[],d={toc:f};function m(e){var t=e.components,n=(0,i.Z)(e,c);return(0,o.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"\u6b64\u70ba\u672c\u5be6\u9a57\u5ba4\u7684\u65b0\u9032\u4eba\u54e1\u8a13\u7df4\u624b\u518a\u3002"),(0,o.kt)("p",null,"\u8acb\u4f9d\u5e8f\u5b78\u7fd2\u4ee5\u4e0b\u5404\u968e\u6bb5\u7684\u5167\u5bb9\uff0c\u4e26\u5b8c\u6210\u6bcf\u968e\u6bb5\u7684\u9a57\u6536\uff0c\u6700\u5f8c\u5b8c\u6210\u4e00\u500b\u6a5f\u68b0\u624b\u81c2\u3002"),(0,o.kt)(a.Z,{items:[{type:"link",label:"\u968e\u6bb5\u4e00\uff1a3D \u5efa\u6a21",href:"./orientation-training/step-1",docId:"orientation-training/step-1"},{type:"link",label:"\u968e\u6bb5\u4e8c\uff1a\u57fa\u672c\u8a2d\u5099",href:"./orientation-training/step-2",docId:"orientation-training/step-2"},{type:"link",label:"\u968e\u6bb5\u4e09\uff1aRobotis \u5957\u4ef6",href:"./orientation-training/step-3",docId:"orientation-training/step-3"},{type:"link",label:"\u968e\u6bb5\u56db\uff1aC# \u7a0b\u5f0f",href:"./orientation-training/step-4",docId:"orientation-training/step-4"}],mdxType:"DocCardList"}))}m.isMDXComponent=!0}}]);