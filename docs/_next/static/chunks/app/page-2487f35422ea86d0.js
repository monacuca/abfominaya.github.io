(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[931],{6372:function(e,s,t){Promise.resolve().then(t.bind(t,7337))},7337:function(e,s,t){"use strict";t.d(s,{default:function(){return C}});var a=t(7437),r=t(2265);t(2576);var l=e=>{let{children:s}=e;return(0,a.jsx)("div",{className:"container",children:s})};function n(){return(0,a.jsxs)("section",{className:"flex-col md:flex-row flex items-center md:justify-between",children:[(0,a.jsx)("h1",{className:"title",children:"A. B. Fominaya"}),(0,a.jsx)("h4",{className:"sub-title",children:"Artist, Engineer, Researcher"})]})}var i=t(7138),c=t(6800),d=t.n(c),o=t(6648),u=e=>{let{title:s,src:t,slug:r}=e,l=(0,a.jsx)(o.default,{src:t,alt:"Cover Image for ".concat(s),className:d()("shadow-sm w-full",{"hover:shadow-lg transition-shadow duration-200":r}),width:1300,height:630});return(0,a.jsx)("div",{className:"coverimg",children:r?(0,a.jsx)(i.default,{href:"/posts/".concat(r),"aria-label":s,children:l}):l})},g=t(624),h=t(8665),m=e=>{let{dateString:s}=e,t=(0,g.D)(s);return(0,a.jsx)("time",{dateTime:s,children:(0,h.WU)(t,"MMMM, yyyy")})},x=e=>{let{tags:s}=e;return(0,a.jsxs)("div",{className:"tags",children:[(0,a.jsx)("b",{children:"Tags:"})," ",s.join(", ")]})};function j(e){let{title:s,coverImage:t,date:r,excerpt:l,author:n,tags:c,slug:d}=e;return(0,a.jsxs)("div",{children:[(0,a.jsx)("div",{className:"mb-5",children:null!=t&&(0,a.jsx)(u,{slug:d,title:s,src:t})}),(0,a.jsx)("h3",{className:"preview-title",children:(0,a.jsx)(i.default,{href:"/posts/".concat(d),className:"hover:underline",children:s})}),(0,a.jsx)("div",{className:"date-box",children:(0,a.jsx)(m,{dateString:r})}),(0,a.jsx)("div",{className:"tags-box",children:(0,a.jsx)(x,{tags:c})}),(0,a.jsx)("p",{className:"body",children:l})]})}function p(e){let{posts:s}=e,[t,l]=(0,r.useState)(""),n=s.filter(e=>e.tags.toString().includes(t.toLowerCase()));return(0,a.jsxs)("section",{children:[(0,a.jsx)("h2",{className:"heading",children:"Projects"}),(0,a.jsx)("div",{className:"search",children:(0,a.jsx)("input",{onChange:e=>{l(e.target.value)},type:"text",placeholder:"Filter by tags..."})}),(0,a.jsxs)("div",{className:"tag-suggestions",children:[(0,a.jsx)("b",{children:"Related Tags: "}),n.map(e=>e.tags).reduce((e,s)=>{for(let t in s)-1===e.indexOf(s[t])&&e.push(s[t]);return e},[]).sort((e,s)=>e.localeCompare(s)).join(", ")]}),(0,a.jsx)("div",{className:"grid grid-cols-1 md:grid-cols-3 md:gap-x-10 lg:gap-x-16 gap-y-10 md:gap-y-32 mb-20",children:n.map(e=>(0,a.jsx)(j,{title:e.title,coverImage:e.coverImage,date:e.date,author:e.author,slug:e.slug,tags:e.tags,excerpt:e.excerpt},e.slug))})]})}function f(e){let{posts:s}=e,[t,l]=(0,r.useState)(""),n=s.filter(e=>e.tags.toString().includes(t.toLowerCase()));return(0,a.jsxs)("section",{children:[(0,a.jsx)("h2",{className:"heading",children:"Research"}),(0,a.jsx)("div",{className:"search",children:(0,a.jsx)("input",{onChange:e=>{l(e.target.value)},type:"text",placeholder:"Filter by tags..."})}),(0,a.jsxs)("div",{className:"tag-suggestions",children:[(0,a.jsx)("b",{children:"Related Tags: "}),n.map(e=>e.tags).reduce((e,s)=>{for(let t in s)-1===e.indexOf(s[t])&&e.push(s[t]);return e},[]).sort((e,s)=>e.localeCompare(s)).join(", ")]}),(0,a.jsx)("div",{className:"grid grid-cols-1 md:grid-cols-3 md:gap-x-10 lg:gap-x-16 gap-y-10 md:gap-y-32 mb-20",children:n.map(e=>(0,a.jsx)(j,{title:e.title,coverImage:e.coverImage,date:e.date,author:e.author,slug:e.slug,tags:e.tags,excerpt:e.excerpt},e.slug))})]})}var v=t(3851),N=t.n(v);function b(e){let{content:s}=e;return(0,a.jsx)("section",{children:(0,a.jsx)("div",{className:"max-w-2xl mx-auto",children:(0,a.jsx)("div",{className:N().markdown,dangerouslySetInnerHTML:{__html:s}})})})}function y(e){let{post:s}=e,t=s.content;return(0,a.jsxs)("section",{children:[(0,a.jsx)("h2",{className:"heading",children:"About"}),(0,a.jsxs)(l,{children:[(0,a.jsx)("img",{className:"headshot",src:s.author.picture,alt:"Angelica Bonilla Fominaya... Or a close approximation"}),(0,a.jsx)(b,{content:t})]})]})}function S(e){let{posts:s}=e,[t,l]=(0,r.useState)(""),n=s.filter(e=>e.tags.toString().includes(t.toLowerCase()));return(0,a.jsxs)("section",{children:[(0,a.jsx)("h2",{className:"heading",children:"Blog Entries"}),(0,a.jsx)("div",{className:"search",children:(0,a.jsx)("input",{onChange:e=>{l(e.target.value)},type:"text",placeholder:"Filter by tags..."})}),(0,a.jsxs)("div",{className:"tag-suggestions",children:[(0,a.jsx)("b",{children:"Related Tags: "}),n.map(e=>e.tags).reduce((e,s)=>{for(let t in s)-1===e.indexOf(s[t])&&e.push(s[t]);return e},[]).sort((e,s)=>e.localeCompare(s)).join(", ")]}),(0,a.jsx)("div",{className:"grid grid-cols-1 md:grid-cols-3 md:gap-x-10 lg:gap-x-16 gap-y-10 md:gap-y-32 mb-32",children:n.map(e=>(0,a.jsx)(j,{title:e.title,coverImage:e.coverImage,date:e.date,author:e.author,slug:e.slug,tags:e.tags,excerpt:e.excerpt},e.slug))})]})}function C(e){let{posts:s}=e,[t,i]=(0,r.useState)("PROJECTS"),c=s.filter(e=>e.mediaType.toString().includes("about"))[0],d=s.filter(e=>e.mediaType.toString().includes("art")),o=s.filter(e=>e.mediaType.toString().includes("research")),u=s.filter(e=>e.mediaType.toString().includes("blog"));return(0,a.jsxs)(l,{children:[(0,a.jsx)(n,{}),(0,a.jsxs)("div",{className:"selector",children:[(0,a.jsx)("button",{onClick:()=>{i("PROJECTS")},className:"hover:underline mr-4",children:"Projects "}),"|",(0,a.jsx)("button",{onClick:()=>{i("RESEARCH")},className:"hover:underline mr-4  ml-4",children:" Research "}),"|",(0,a.jsx)("button",{onClick:()=>{i("ABOUT")},className:"hover:underline  mr-4 ml-4",children:" About"}),"|",(0,a.jsx)("button",{onClick:()=>{i("MUSINGS")},className:"hover:underline ml-4",children:" Musings"})]}),"PROJECTS"==t&&(0,a.jsx)(p,{posts:d}),"RESEARCH"==t&&(0,a.jsx)(f,{posts:o}),"ABOUT"==t&&(0,a.jsx)(y,{post:c}),"MUSINGS"==t&&(0,a.jsx)(S,{posts:u})]})}},2576:function(){},3851:function(e){e.exports={markdown:"markdown-styles_markdown__ORfR8"}}},function(e){e.O(0,[923,231,561,971,23,744],function(){return e(e.s=6372)}),_N_E=e.O()}]);