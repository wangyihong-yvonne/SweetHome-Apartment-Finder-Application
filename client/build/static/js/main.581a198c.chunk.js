(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{121:function(e,t,n){},123:function(e,t,n){},124:function(e,t,n){"use strict";n.r(t);var a=n(1),c=n(0),s=n.n(c),r=n(25),i=n.n(r),o=(n(68),n(7)),l=n(15),j=n(8),u=n(10),b=n.n(u),h=n(12),d=n(56),x=n.n(d),O=(n(70),function(e){return Object(a.jsx)("div",{role:"navigation","aria-label":"Pagination Navigation",children:Object(a.jsx)(x.a,{pageCount:Math.ceil(e.totalPosts/e.postsPerPage),pageRangeDisplayed:4,marginPagesDisplayed:4,onPageChange:e.handlePageClick,containerClassName:"paginate-container",previousClassName:"paginate-previous",nextClassName:"paginate-next",pageClassName:"paginate-page",pageLinkClassName:"pagination-a",activeClassName:"paginate-active",disabledClassName:"paginate-disabled"})})}),p=n(133),m=n(126),g=n(127);var f=function(e){return Object(a.jsx)(g.a,{role:"main",children:e.posts.map((function(e){return Object(a.jsx)("div",{class:"card-columns",children:Object(a.jsxs)(p.a,{style:{height:"560px",width:"21rem",margin:"1rem"},children:[Object(a.jsx)(p.a.Img,{variant:"top",style:{height:"210px"},src:e.images[1],alt:"housing image"}),Object(a.jsxs)(p.a.Body,{class:"card text-center",style:{height:"350px"},children:[Object(a.jsx)(p.a.Title,{children:Object(a.jsx)("strong",{children:e.titletextonly})}),Object(a.jsx)(p.a.Subtitle,{children:Object(a.jsxs)("span",{className:"btn btn-outline-dark",children:["Housing: $",e.housing]})}),Object(a.jsx)("br",{}),Object(a.jsxs)(p.a.Text,{children:[Object(a.jsxs)("span",{className:"btn btn-outline-dark",children:["Cost $",e.price]}),Object(a.jsx)("br",{}),Object(a.jsx)("br",{}),Object(a.jsxs)("span",{className:"btn btn-outline-dark",children:["Address: ",e.mapaddress]}),Object(a.jsx)("br",{})]}),Object(a.jsx)(m.a,{className:"btn btn-dark",href:"/posts/".concat(e._id),children:"Find more details about me!"})," "]})]},e._id)})}))})},v=n(129),y=n(57),w=n(128);var C=function(e){return Object(a.jsx)(v.a.Group,{role:"search",children:Object(a.jsxs)(v.a.Row,{className:"align-items-right",children:[Object(a.jsx)(v.a.Label,{className:"mr-sm-2",htmlFor:"inlineFormCustomSelect",children:Object(a.jsx)("h5",{children:"Search by"})}),Object(a.jsx)(y.a,{xs:"auto",children:Object(a.jsxs)(v.a.Control,{as:"select",className:"mr-sm-2",id:"inlineFormCustomSelect",value:e.searchBy,onChange:e.handleSearchByChange,custom:!0,children:[Object(a.jsx)("option",{value:"housing",children:"House size"}),Object(a.jsx)("option",{value:"price",children:"Price"}),Object(a.jsx)("option",{value:"mapaddress",children:"Address"})]})}),Object(a.jsxs)(y.a,{children:[Object(a.jsx)(v.a.Label,{htmlFor:"inlineFormInputGroupSearch",srOnly:!0}),Object(a.jsx)(w.a,{children:Object(a.jsx)(y.a,{sm:"5",children:Object(a.jsx)(v.a.Control,{id:"inlineFormInputGroupSearch",placeholder:"search here ",value:e.search,onChange:e.handleSearchChange})})})]})]})})};var S=function(e){return Object(a.jsx)(v.a,{children:Object(a.jsxs)(v.a.Row,{className:"align-items-right",children:[Object(a.jsx)(v.a.Label,{className:"mr-sm-2",htmlFor:"inlineFormCustomSelect",children:Object(a.jsx)("h5",{children:"Sort by"})}),Object(a.jsx)(y.a,{xs:"auto",children:Object(a.jsxs)(v.a.Control,{as:"select",className:"mr-sm-2",id:"inlineFormCustomSelect",value:e.sortBy,onChange:e.handleSortByChange,custom:!0,children:[Object(a.jsx)("option",{value:"date",children:"Date: recent to before"}),Object(a.jsx)("option",{value:"price",children:"Price: low to high"})]})})]})})};var N=function(){var e=Object(c.useState)([]),t=Object(o.a)(e,2),n=t[0],s=t[1],r=Object(c.useState)(1),i=Object(o.a)(r,2),l=i[0],j=i[1],u=Object(c.useState)(""),d=Object(o.a)(u,2),x=d[0],p=d[1],m=Object(c.useState)("neighborhood"),g=Object(o.a)(m,2),v=g[0],y=g[1],w=Object(c.useState)("price"),N=Object(o.a)(w,2),k=N[0],P=N[1];Object(c.useEffect)((function(){(function(){var e=Object(h.a)(b.a.mark((function e(){var t;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("/api/posts").then((function(e){return e.json()}));case 3:t=e.sent,s(t),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.log("error ",e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}})()()}),[]);var L=6*l,F=L-6,B=n.map((function(e){return e.images=e.images.map((function(e){return e=e.replace("50x50c","600x450")})),e})).filter((function(e){return""===x||!!e[v]&&e[v].replace(",","").toLowerCase().includes(x.toLowerCase())})).sort((function(e,t){return e[k]>t[k]?1:-1})).slice(F,L);return Object(a.jsxs)("div",{children:[Object(a.jsx)("br",{}),Object(a.jsx)("h5",{children:"Welcome to SweetHome! Click SweetHome will lead you to the home page. Click New Houses will help you find the latest housing information. You need to login to leave any comments. Hope you can find your sweet home here."}),Object(a.jsx)("br",{}),Object(a.jsxs)("div",{className:"row",children:[Object(a.jsx)("div",{className:"col-8",children:Object(a.jsx)(C,{handleSearchChange:function(e){p(e.target.value)},handleSearchByChange:function(e){y(e.target.value)},searchBy:v,search:x})}),Object(a.jsx)("div",{className:"col-4",children:Object(a.jsx)(S,{handleSortByChange:function(e){P(e.target.value)},sortBy:k})})]}),Object(a.jsx)("br",{}),Object(a.jsx)(f,{posts:B}),Object(a.jsx)(O,{postsPerPage:6,totalPosts:n.length,handlePageClick:function(e){var t=e.selected;console.log(t),j(t+1)}})]})},k=n(131),P=n(58),L=n.n(P);var F=function(){var e=Object(j.h)().postId,t=window.location.href;console.log(t);var n=Object(c.useState)({}),s=Object(o.a)(n,2),r=s[0],i=s[1],l=Object(c.useState)(""),u=Object(o.a)(l,2),d=u[0],x=u[1],O=r.postingbody,g=function(){var t=Object(h.a)(b.a.mark((function t(){var n;return b.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,fetch("/api/posts/".concat(e)).then((function(e){return e.json()}));case 3:n=t.sent,console.log("post?",n),i(n),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(0),console.log("error ",t.t0);case 11:case"end":return t.stop()}}),t,null,[[0,8]])})));return function(){return t.apply(this,arguments)}}(),f=function(){var e=Object(h.a)(b.a.mark((function e(t){return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),console.log("comment",d),e.next=4,fetch("/api/posts/post/".concat(r._id,"/comment"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({comment:d})});case 4:e.sent,g();case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(c.useEffect)((function(){g()}),[]),Object(a.jsx)("div",{role:"main",children:Object(a.jsxs)(p.a,{className:"text-center",children:[Object(a.jsx)("br",{}),Object(a.jsx)("br",{}),Object(a.jsx)(p.a.Header,{children:Object(a.jsx)("strong",{children:Object(a.jsx)(p.a.Title,{children:r.titletextonly})})}),Object(a.jsxs)(p.a.Body,{children:[Object(a.jsx)("div",{className:"indiv-img col-xs-6",children:Object(a.jsx)(k.a,{children:Object.keys(r).length>0?r.images.map((function(e){return e=e.replace("50x50c","600x450")})).map((function(e){return Object(a.jsx)(k.a.Item,{children:Object(a.jsx)("img",{style:{height:"520px",width:"100rem"},className:"d-block w-100",src:e,alt:"housing"})})})):null})}),Object(a.jsx)("p",{children:L()(O)})]}),Object(a.jsxs)(v.a,{onSubmit:f,children:[Object(a.jsxs)(v.a.Group,{controlId:"formBasicComment",children:[Object(a.jsx)(v.a.Label,{className:"text-center",children:Object(a.jsx)("h3",{children:"Share your views"})}),Object(a.jsx)(v.a.Control,{as:"textarea",rows:5,onChange:function(e){return x(e.target.value)},value:d})]}),Object(a.jsx)(m.a,{variant:"dark",type:"submit",children:"Submit"})]}),r.comments&&r.comments.map((function(e){return Object(a.jsxs)(p.a.Body,{children:[e.description,Object(a.jsxs)("footer",{className:"blockquote-footer",children:[e.username," "]})]})}))]})})},B=n(132),G=n(130);n(121);var I=function(e){var t=e.user,n=function(){var e=Object(h.a)(b.a.mark((function e(){return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("/api/auth/logout");case 2:e.sent.ok&&(window.location.href="/");case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(a.jsx)(B.a,{bg:"light",expand:"lg",fixed:"top",children:Object(a.jsxs)(G.a,{className:"container-fluid",children:[Object(a.jsx)(G.a.Link,{children:Object(a.jsxs)(l.b,{to:"/emailme",children:[" ",Object(a.jsx)("h4",{style:{color:"black",fontFamily:"Georgia",fontWeight:"bold"},children:"New houses !"})]})}),Object(a.jsxs)(G.a.Link,{className:"ml-auto",children:[" ",Object(a.jsx)(l.b,{to:"/",children:Object(a.jsx)("i",{children:Object(a.jsx)("h1",{style:{fontFamily:"Georgia",fontWeight:"bold"},children:"Sweet Home"})})})]}),t?Object(a.jsx)(G.a.Link,{className:"ml-auto",children:Object(a.jsx)(m.a,{variant:"light",onClick:n,children:Object(a.jsx)("h4",{style:{color:"black",fontFamily:"Georgia",fontWeight:"bold"},children:"Sign out"})})}):Object(a.jsxs)(G.a,{className:"ml-auto",children:[Object(a.jsx)(G.a.Link,{children:Object(a.jsx)(l.b,{to:"/signup",children:Object(a.jsx)("h4",{style:{color:"black",fontFamily:"Georgia",fontWeight:"bold"},children:"Register"})})}),Object(a.jsx)(G.a.Link,{children:Object(a.jsxs)(l.b,{to:"/signin",children:[" ",Object(a.jsx)("h4",{style:{color:"black",fontFamily:"Georgia",fontWeight:"bold"},children:"Login"})]})})]})]})})};n(122);var T=function(e){var t=Object(c.useState)(""),n=Object(o.a)(t,2),s=n[0],r=n[1],i=Object(c.useState)(""),l=Object(o.a)(i,2),u=l[0],d=l[1],x=Object(c.useState)(""),O=Object(o.a)(x,2),p=O[0],g=O[1],f=Object(j.g)(),y=function(){var e=Object(h.a)(b.a.mark((function e(t){var n,a,c,s,r,i,o;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.email,a=t.username,c=t.features,s={email:n,username:a,features:c},console.log(s),r={method:"POST",headers:{"Content-Type":"application/json",Accept:"application/json"},body:JSON.stringify(s)},e.prev=4,e.next=7,fetch("/api/auth/login",r);case 7:return i=e.sent,e.next=10,i.json();case 10:(o=e.sent)?(localStorage.setItem("_id",o._id),f.push("/")):alert("Email Failed try again"),e.next=17;break;case 14:e.prev=14,e.t0=e.catch(4),console.error(e.t0);case 17:case"end":return e.stop()}}),e,null,[[4,14]])})));return function(t){return e.apply(this,arguments)}}();return Object(a.jsxs)(v.a,{className:"text-center",onSubmit:y,children:[Object(a.jsxs)(v.a.Group,{controlId:"formBasicEmail",children:[Object(a.jsx)(v.a.Label,{children:Object(a.jsx)("h3",{children:"Email address"})}),Object(a.jsx)(v.a.Control,{type:"email",placeholder:"Enter email",value:s,onChange:function(e){return r(e.target.value)}})]}),Object(a.jsxs)(v.a.Group,{controlId:"formBasicUsername",children:[Object(a.jsx)(v.a.Label,{children:Object(a.jsx)("h3",{children:"Username"})}),Object(a.jsx)(v.a.Control,{type:"username",placeholder:"Username",value:u,onChange:function(e){return d(e.target.value)}})]}),Object(a.jsxs)(v.a.Group,{controlId:"formBasicPassword",children:[Object(a.jsx)(v.a.Label,{children:Object(a.jsx)("h3",{children:"Ideal Features"})}),Object(a.jsx)(v.a.Control,{as:"textarea",rows:3,type:"password",placeholder:"Describe about the features you like",value:p,onChange:function(e){return g(e.target.value)}})]}),Object(a.jsx)(m.a,{variant:"outline-dark",type:"submit",children:Object(a.jsx)("h4",{children:"Send me the latest housing"})})]})};var D=function(e){var t=Object(c.useState)(""),n=Object(o.a)(t,2),s=n[0],r=n[1],i=Object(c.useState)(""),l=Object(o.a)(i,2),j=l[0],u=l[1],d=function(){var e=Object(h.a)(b.a.mark((function e(t){var n,a,c,r;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),n={username:s,password:j},console.log(n),a={method:"POST",headers:{"Content-Type":"application/json",Accept:"application/json"},body:JSON.stringify(n)},e.prev=4,e.next=7,fetch("/api/auth/login",a);case 7:return c=e.sent,e.next=10,c.json();case 10:r=e.sent,console.log("file: SigninPage.js ~ line 36 ~ handleSubmit ~ success",r),r?window.location.href="/":alert("Login Failed try again"),e.next=18;break;case 15:e.prev=15,e.t0=e.catch(4),console.error(e.t0);case 18:case"end":return e.stop()}}),e,null,[[4,15]])})));return function(t){return e.apply(this,arguments)}}();return Object(a.jsxs)("div",{className:"container",children:[Object(a.jsx)("br",{}),Object(a.jsx)("br",{}),Object(a.jsxs)("div",{className:"row",children:[Object(a.jsx)("div",{className:"col-8",children:Object(a.jsx)("img",{src:"https://cdngeneral.rentcafe.com/dmslivecafe/3/945388/20245%20N%2032nd%20Dr%20Phoenix%20AZ-large-004-25-Living%20Room-1500x1000-72dpi(1).jpg?crop=(11.999999999999943,18,289.3333333333326,200)&cropxunits=300&cropyunits=200&quality=85&scale=both&",height:"600",width:"1200",crop:"fill",className:"img-fluid",alt:"signup image"})}),Object(a.jsxs)("div",{className:"col-4",children:[Object(a.jsxs)("h1",{className:"text-center",style:{color:"black",fontFamily:"Georgia",fontWeight:"bold"},children:["Login"," "]}),Object(a.jsxs)(v.a,{className:"text-center",onSubmit:d,children:[Object(a.jsxs)(v.a.Group,{controlId:"formBasicUsername",children:[Object(a.jsx)(v.a.Label,{children:"Username"}),Object(a.jsx)(v.a.Control,{type:"username",placeholder:"Username",value:s,onChange:function(e){return r(e.target.value)}})]}),Object(a.jsxs)(v.a.Group,{controlId:"formBasicPassword",children:[Object(a.jsx)(v.a.Label,{children:"Password"}),Object(a.jsx)(v.a.Control,{type:"password",placeholder:"Password",value:j,onChange:function(e){return u(e.target.value)}})]}),Object(a.jsx)(m.a,{variant:"dark",type:"submit",children:"Login"})]})]})]})]})};var U=function(){var e=Object(c.useState)(""),t=Object(o.a)(e,2),n=t[0],s=t[1],r=Object(c.useState)(""),i=Object(o.a)(r,2),l=i[0],j=i[1],u=Object(c.useState)(""),d=Object(o.a)(u,2),x=d[0],O=d[1],p=function(){var e=Object(h.a)(b.a.mark((function e(t){var a;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),l===x){e.next=3;break}return e.abrupt("return");case 3:return e.next=5,fetch("/api/users/create",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({username:n,password:l})});case 5:a=e.sent,window.location.href="/",console.log("Please create a account",a);case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(a.jsxs)("div",{className:"container",children:[Object(a.jsx)("br",{}),Object(a.jsx)("br",{}),Object(a.jsxs)("div",{className:"row",children:[Object(a.jsx)("div",{className:"col-8",children:Object(a.jsx)("img",{src:"https://2utfff4d3dkt3biit53nsvep-wpengine.netdna-ssl.com/wp-content/uploads/2019/10/MAIN-Blueground-Apartment-San-Francisco-990x660.jpg",height:"600",width:"1200",crop:"fill",className:"img-fluid",alt:"signup image"})}),Object(a.jsxs)("div",{className:"col-4",children:[Object(a.jsx)("h1",{className:"text-center",style:{color:"black",fontFamily:"Georgia",fontWeight:"bold"},children:"Register"})," ",Object(a.jsxs)(v.a,{className:"text-center",onSubmit:p,children:[Object(a.jsxs)(v.a.Group,{children:[Object(a.jsx)(v.a.Label,{children:"Username"}),Object(a.jsx)(v.a.Control,{type:"username",placeholder:"Username",value:n,onChange:function(e){return s(e.target.value)}})]}),Object(a.jsxs)(v.a.Group,{children:[Object(a.jsx)(v.a.Label,{children:"Password"}),Object(a.jsx)(v.a.Control,{type:"password",placeholder:"Password",value:l,onChange:function(e){return j(e.target.value)}})]}),Object(a.jsxs)(v.a.Group,{children:[Object(a.jsx)(v.a.Label,{children:"Confirm Password"}),Object(a.jsx)(v.a.Control,{type:"password",placeholder:"Confirm Password",value:x,onChange:function(e){return O(e.target.value)}})]}),Object(a.jsx)(m.a,{variant:"dark",type:"submit",className:"text-center",children:"Create account"})]})]})]})]})};n(123);var E=function(){var e=Object(c.useState)(null),t=Object(o.a)(e,2),n=t[0],s=t[1];return Object(c.useEffect)((function(){fetch("/api/auth/getUser").then((function(e){return e.json()})).then((function(e){e.username&&s(e)}))}),[]),Object(a.jsx)("div",{class:"container",children:Object(a.jsxs)(l.a,{children:[Object(a.jsx)(I,{user:n}),Object(a.jsx)("br",{}),Object(a.jsxs)(j.d,{children:[Object(a.jsx)(j.b,{path:"/",exact:!0,children:Object(a.jsx)(N,{})}),Object(a.jsx)(j.b,{path:"/posts/:postId",exact:!0,children:Object(a.jsx)(F,{})}),Object(a.jsx)(j.b,{path:"/signup",children:Object(a.jsx)(U,{})}),Object(a.jsx)(j.b,{path:"/signin",children:Object(a.jsx)(D,{})}),Object(a.jsx)(j.b,{path:"/emailme",children:Object(a.jsx)(T,{})}),Object(a.jsx)(j.b,{path:"/signout"}),Object(a.jsx)(j.a,{to:"/"})]})]})})},H=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,134)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,s=t.getLCP,r=t.getTTFB;n(e),a(e),c(e),s(e),r(e)}))};i.a.render(Object(a.jsx)(s.a.StrictMode,{children:Object(a.jsx)(E,{})}),document.getElementById("root")),H()},68:function(e,t,n){},70:function(e,t,n){},98:function(e,t){}},[[124,1,2]]]);
//# sourceMappingURL=main.581a198c.chunk.js.map