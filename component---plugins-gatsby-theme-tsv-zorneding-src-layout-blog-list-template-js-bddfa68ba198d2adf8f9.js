(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{kmH5:function(t,e,a){"use strict";a.r(e),a.d(e,"default",(function(){return m})),a.d(e,"blogListQuery",(function(){return g}));a("I5cv"),a("a1Th"),a("Btvt");var r=a("q1tI"),c=a.n(r),n=a("kbqt"),s=a("sLrm"),o=a("Wbzz"),i=a("KJrf"),l=a("qKvR");var u=function(t){var e,a;a=t,(e=c).prototype=Object.create(a.prototype),e.prototype.constructor=e,e.__proto__=a;var r;r=c;function c(){return t.apply(this,arguments)||this}return c.prototype.render=function(){var t=this.props.posts;return Object(l.c)("div",{className:"columns is-multiline"},t&&t.map((function(t){var e=t.node;return Object(l.c)("div",{className:"box",key:e.id},Object(l.c)(i.a,{imageInfo:{image:e.frontmatter.featuredimage,alt:"featured image thumbnail for post "+e.frontmatter.title},className:"image left fit",link:e.fields.slug}),Object(l.c)("p",{className:"post-meta"},Object(l.c)(o.Link,{className:"title has-text-primary is-size-4",to:e.fields.slug},e.frontmatter.title),Object(l.c)("span",null," • "),Object(l.c)("span",{className:"subtitle is-size-5 is-block"},e.frontmatter.date)),Object(l.c)("p",null,e.excerpt,Object(l.c)("br",null),Object(l.c)("br",null),Object(l.c)(o.Link,{className:"button",to:e.fields.slug},"Mehr →")))})))},c}(c.a.Component),p=(a("XfO3"),a("HEwt"),function(t){var e=t.currentPage,a=t.numPages;if(a<2)return Object(l.c)(c.a.Fragment,null);var r=1===e,n=e===a,s=e-1==1?"/blog":"/blog/"+(e-1).toString(),i=(e+1).toString();return Object(l.c)("ul",{className:"pagination"},Object(l.c)("li",null,r?Object(l.c)("span",{className:"button disabled"},"Zurück"):Object(l.c)(o.Link,{to:s,rel:"prev",className:"button"},"Zurück")),Array.from({length:a},(function(t,a){return Object(l.c)("li",{key:"pagination-number"+(a+1)},Object(l.c)(o.Link,{to:"/blog/"+(0===a?"":a+1),className:"page "+(a+1===e?"active":"")},a+1))})),Object(l.c)("li",null,n?Object(l.c)("span",{className:"button disabled"},"Nächste"):Object(l.c)(o.Link,{to:"/blog/"+i,rel:"next",className:"button"},"Nächste")))}),b=a("5INW");var m=function(t){var e,a;a=t,(e=c).prototype=Object.create(a.prototype),e.prototype.constructor=e,e.__proto__=a;var r;r=c;function c(){return t.apply(this,arguments)||this}return c.prototype.render=function(){var t=this.props.data.posts.edges,e=this.props.pageContext.currentPage;return Object(l.c)(n.a,null,Object(l.c)(s.a,{title:"Aktuelle Neuigkeiten",description:"Aktuelle Neuigkeiten",url:this.props.data.site.siteMetadata.siteUrl,author:this.props.data.site.siteMetadata.author,slug:"/blog/"+e.toString()}),Object(l.c)("section",null,Object(l.c)("header",{className:"main"},Object(l.c)(b.a,null,"Aktuelle Neuigkeiten")),Object(l.c)(u,{posts:t}),Object(l.c)(p,this.props.pageContext)))},c}(c.a.Component),g="2988923154"}}]);
//# sourceMappingURL=component---plugins-gatsby-theme-tsv-zorneding-src-layout-blog-list-template-js-bddfa68ba198d2adf8f9.js.map