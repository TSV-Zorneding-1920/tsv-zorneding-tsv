(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{kmH5:function(t,e,c){"use strict";c.r(e),c.d(e,"default",(function(){return m})),c.d(e,"blogListQuery",(function(){return g}));c("q8oJ"),c("8npG");var n=c("q1tI"),a=c.n(n),r=c("kbqt"),o=c("sLrm"),s=c("Wbzz"),i=c("KJrf"),l=c("qKvR");var u=function(t){var e,c;function n(){return t.apply(this,arguments)||this}return c=t,(e=n).prototype=Object.create(c.prototype),e.prototype.constructor=e,e.__proto__=c,n.prototype.render=function(){var t=this.props.posts;return Object(l.c)("div",{className:"columns is-multiline"},t&&t.map((function(t){var e=t.node;return Object(l.c)("div",{className:"box",key:e.id},Object(l.c)(i.a,{imageInfo:{image:e.frontmatter.featuredimage,alt:"featured image thumbnail for post "+e.frontmatter.title},className:"image left fit",link:e.fields.slug}),Object(l.c)("p",{className:"post-meta"},Object(l.c)(s.Link,{className:"title has-text-primary is-size-4",to:e.fields.slug},e.frontmatter.title),Object(l.c)("span",null," • "),Object(l.c)("span",{className:"subtitle is-size-5 is-block"},e.frontmatter.date)),Object(l.c)("p",null,e.excerpt,Object(l.c)("br",null),Object(l.c)("br",null),Object(l.c)(s.Link,{className:"button",to:e.fields.slug},"Mehr →")))})))},n}(a.a.Component),p=(c("YbXK"),c("cFtU"),function(t){var e=t.currentPage,c=t.numPages;if(c<2)return Object(l.c)(a.a.Fragment,null);var n=1===e,r=e===c,o=e-1==1?"/blog":"/blog/"+(e-1).toString(),i=(e+1).toString();return Object(l.c)("ul",{className:"pagination"},Object(l.c)("li",null,n?Object(l.c)("span",{className:"button disabled"},"Zurück"):Object(l.c)(s.Link,{to:o,rel:"prev",className:"button"},"Zurück")),Array.from({length:c},(function(t,c){return Object(l.c)("li",{key:"pagination-number"+(c+1)},Object(l.c)(s.Link,{to:"/blog/"+(0===c?"":c+1),className:"page "+(c+1===e?"active":"")},c+1))})),Object(l.c)("li",null,r?Object(l.c)("span",{className:"button disabled"},"Nächste"):Object(l.c)(s.Link,{to:"/blog/"+i,rel:"next",className:"button"},"Nächste")))}),b=c("5INW");var m=function(t){var e,c;function n(){return t.apply(this,arguments)||this}return c=t,(e=n).prototype=Object.create(c.prototype),e.prototype.constructor=e,e.__proto__=c,n.prototype.render=function(){var t=this.props.data.posts.edges,e=this.props.pageContext.currentPage;return Object(l.c)(r.a,null,Object(l.c)(o.a,{title:"Aktuelle Neuigkeiten",description:"Aktuelle Neuigkeiten",url:this.props.data.site.siteMetadata.siteUrl,author:this.props.data.site.siteMetadata.author,slug:"/blog/"+e.toString()}),Object(l.c)("section",null,Object(l.c)("header",{className:"main"},Object(l.c)(b.a,null,"Aktuelle Neuigkeiten")),Object(l.c)(u,{posts:t}),Object(l.c)(p,this.props.pageContext)))},n}(a.a.Component),g="2988923154"}}]);
//# sourceMappingURL=component---plugins-gatsby-theme-tsv-zorneding-src-layout-blog-list-template-js-53bd9ff1efec1e63fabb.js.map