"use strict";(self.webpackChunkmarkharrison=self.webpackChunkmarkharrison||[]).push([[608],{3169:function(e,t,a){a.r(t),a.d(t,{default:function(){return o}});var r=a(7294),n=a(9960),l=a(5999),c=a(1944),i=a(5257);function m(e){var t=e.year,a=e.posts;return r.createElement(r.Fragment,null,r.createElement("h3",null,t),r.createElement("ul",null,a.map((function(e){return r.createElement("li",{key:e.metadata.date},r.createElement(n.Z,{to:e.metadata.permalink},e.metadata.formattedDate," - ",e.metadata.title))}))))}function s(e){var t=e.years;return r.createElement("section",{className:"margin-vert--lg"},r.createElement("div",{className:"container"},r.createElement("div",{className:"row"},t.map((function(e,t){return r.createElement("div",{key:t,className:"col col--4 margin-vert--lg"},r.createElement(m,e))})))))}function o(e){var t,a,n=e.archive,m=(0,l.I)({id:"theme.blog.archive.title",message:"Archive",description:"The page & hero title of the blog archive page"}),o=(0,l.I)({id:"theme.blog.archive.description",message:"Archive",description:"The page & hero description of the blog archive page"}),u=(t=n.blogPosts,a=t.reduceRight((function(e,t){var a,r=t.metadata.date.split("-")[0],n=null!=(a=e.get(r))?a:[];return e.set(r,[t].concat(n))}),new Map),Array.from(a,(function(e){return{year:e[0],posts:e[1]}})));return r.createElement(r.Fragment,null,r.createElement(c.d,{title:m,description:o}),r.createElement(i.Z,null,r.createElement("header",{className:"hero hero--primary"},r.createElement("div",{className:"container"},r.createElement("h1",{className:"hero__title"},m),r.createElement("p",{className:"hero__subtitle"},o))),r.createElement("main",null,u.length>0&&r.createElement(s,{years:u}))))}}}]);