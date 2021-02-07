(this["webpackJsonpchuck-noriss-app"]=this["webpackJsonpchuck-noriss-app"]||[]).push([[0],{103:function(e,t,n){"use strict";n.r(t);var a=n(6),r=n(0),c=n.n(r),o=n(9),s=n.n(o),i=n(16),l=n(13),u=n(143),j=n(145),d=n(141),h=n(142),b=n(34),g=n(134),f=n(64),p=n(106),O=n(137),x=n(138),m=n(139),k=n(140),v=n(28),y=n.n(v),C=n(35),S=n(36),T=n.n(S),E=function(e,t){return null!=t?"/search?query=".concat(t):null==e?"/random":"/random?category=".concat(e)},w=function(e){if(void 0===e.data.value){console.log(e.data.total);var t=Math.floor(Math.random()*e.data.total);return console.log(t),e.data.result[t].value}return e.data.value},J=Object(i.b)({name:"jokes",initialState:{loading:!1,hasErrors:!1,joke:null},reducers:{setJokes:function(e){e.loading=!0},setJokesSuccess:function(e,t){var n=t.payload;e.joke=n,e.loading=!1,e.hasErrors=!1},setJokesFailure:function(e){e.loading=!1,e.hasErrors=!0}}}),N=J.actions,F=N.setJokes,M=N.setJokesSuccess,P=N.setJokesFailure,W=function(e){return e.joke},B=J.reducer,I=function(e,t){return function(){var n=Object(C.a)(y.a.mark((function n(a){var r,c;return y.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return a(F()),n.prev=1,n.next=4,T.a.get("https://api.chucknorris.io/jokes"+E(e,t));case 4:r=n.sent,console.log(r),c=w(r),console.log("fetchRandomJoke"),a(M(c)),n.next=16;break;case 11:n.prev=11,n.t0=n.catch(1),console.log("Error in fetch joke."),console.log(n.t0),a(P());case 16:case"end":return n.stop()}}),n,null,[[1,11]])})));return function(e){return n.apply(this,arguments)}}()},R=Object(i.b)({name:"category",initialState:{category:null},reducers:{setCategory:function(e,t){e.category=t.payload}}}),q=R.actions.setCategory,A=function(e){return e.category},V=R.reducer,z=Object(i.b)({name:"searchText",initialState:{searchText:"",textTooShort:!1},reducers:{setSearchText:function(e,t){e.searchText=t.payload,t.payload.length>0&&t.payload.length<3?e.textTooShort=!0:e.textTooShort=!1}}}),D=z.actions.setSearchText,G=function(e){return e.searchText},H=z.reducer,K=Object(g.a)({root:{minWidth:275,"&:hover":{cursor:"pointer"}}}),L=function(){var e=K(),t=Object(r.useState)(0),n=Object(f.a)(t,2),c=n[0],o=n[1],s=Object(l.b)(),i=Object(l.c)(W),u=i.joke,j=i.loading,d=i.hasErrors,h=Object(l.c)(A).category,b=Object(l.c)(G).searchText;Object(r.useEffect)((function(){s(I())}),[s]);return Object(a.jsx)(p.a,{elevation:c,onMouseMove:function(){o(5)},onMouseOut:function(){o(0)},className:e.root,onClick:function(){console.log("clicking paper"),0!==b.length?s(I(h,b)):s(I(h))},children:Object(a.jsx)(O.a,{children:Object(a.jsxs)(x.a,{children:[j&&Object(a.jsx)(m.a,{}),!j&&!d&&Object(a.jsx)(k.a,{variant:"body1",align:"left",children:u}),d&&Object(a.jsxs)(k.a,{variant:"body1",align:"left",children:['No joke with phrase "',Object(a.jsx)("i",{children:b}),'" found.']})]})})})},Q=n(146),U=Object(i.b)({name:"categories",initialState:{loading:!1,hasErrors:!1,categories:[]},reducers:{setCategories:function(e){e.loading=!0},setCategoriesSuccess:function(e,t){var n=t.payload;e.categories=n,e.loading=!1,e.hasErrors=!1},setCategoriesFailure:function(e){e.loading=!1,e.hasErrors=!0}}}),X=U.actions,Y=X.setCategories,Z=X.setCategoriesSuccess,$=X.setCategoriesFailure,_=function(e){return e.categories},ee=U.reducer;var te=Object(g.a)((function(e){return{root:{display:"flex",justifyContent:"center",flexWrap:"wrap","& > *":{margin:e.spacing(.5)},listStyle:"none"},chip:{margin:e.spacing(.5)}}})),ne=function(){var e=te(),t=Object(l.b)(),n=Object(l.c)(_),c=n.categories,o=n.loading,s=n.hasErrors,i=Object(l.c)(A).category;Object(r.useEffect)((function(){t(function(){var e=Object(C.a)(y.a.mark((function e(t){var n,a;return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t(Y()),e.prev=1,e.next=4,T.a.get("https://api.chucknorris.io/jokes/categories");case 4:n=e.sent,a=n.data,console.log("Fetched categories"),console.log(a),t(Z(a)),e.next=15;break;case 11:e.prev=11,e.t0=e.catch(1),console.log(e.t0),t($());case 15:case"end":return e.stop()}}),e,null,[[1,11]])})));return function(t){return e.apply(this,arguments)}}())}),[t]);return Object(a.jsxs)("div",{className:e.root,children:[o&&Object(a.jsx)(m.a,{}),!o&&!s&&c.map((function(n,r){return Object(a.jsx)("li",{children:Object(a.jsx)(Q.a,{label:n,onClick:function(){return function(e){i===e?(t(q(null)),t(I(null))):(t(q(e)),t(I(e)))}(n)},color:n===i?"primary":"secondary",className:e.chip})},r)})),s&&Object(a.jsx)(k.a,{variant:"body1",align:"left",children:"No categories found."})]})},ae=n(144),re=Object(g.a)((function(e){return{root:{"& > *":{margin:e.spacing(3),width:e.spacing(25),height:e.spacing(8)}}}})),ce=function(e){var t=re(),n=Object(l.b)(),c=Object(l.c)(G),o=c.searchText,s=c.textTooShort;return Object(r.useEffect)((function(){s||0===o.length||n(I(null,o))})),Object(a.jsx)("form",{className:t.root,noValidate:!0,autoComplete:"off",children:Object(a.jsx)(ae.a,{error:s,helperText:s?"Phrase is too short.":"",id:"standard-basic",label:"Find joke with phrase",onChange:function(e){n(D(e.target.value)),e.target.value.length>0&&n(q(null))}})})},oe=Object(g.a)((function(e){return Object(b.a)({},e.breakpoints.up("sm"),{container:{marginRight:e.spacing(4)}})})),se=function(e){var t=oe();return Object(a.jsx)("img",{className:t.container,src:e.image,alt:"Chuck does not exist."})},ie=n.p+"static/media/chuck.e03202fc.png",le=Object(g.a)((function(e){return{boxPos:Object(b.a)({},e.breakpoints.up("sm"),{display:"flex",justifyContent:"center",alignItems:"center",padding:"20px"})}})),ue=function(){var e=le();return Object(a.jsxs)(c.a.Fragment,{children:[Object(a.jsxs)(j.a,{className:e.boxPos,children:[Object(a.jsx)(se,{image:ie}),Object(a.jsx)(L,{})]}),Object(a.jsx)(ce,{}),Object(a.jsx)(ne,{})]})},je=n(63),de=Object(je.a)({palette:{primary:{main:"#004d40"},secondary:{main:"#26a69a"}},overrides:{MuiCssBaseline:{"@global":{html:{height:"100%"},body:{textAlign:"center",backgroundColor:"#ededed"}}}}}),he=function(){return Object(a.jsxs)(d.a,{theme:de,children:[Object(a.jsx)(h.a,{}),Object(a.jsx)(u.a,{maxWidth:"sm",children:Object(a.jsx)(j.a,{my:4,children:Object(a.jsx)(ue,{})})})]})},be=n(15),ge=Object(be.c)({joke:B,categories:ee,category:V,searchText:H}),fe=Object(i.a)({reducer:ge});s.a.render(Object(a.jsx)(c.a.StrictMode,{children:Object(a.jsx)(l.a,{store:fe,children:Object(a.jsx)(he,{})})}),document.getElementById("root"))}},[[103,1,2]]]);
//# sourceMappingURL=main.22656cc9.chunk.js.map