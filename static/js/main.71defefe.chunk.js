(this["webpackJsonpchuck-noriss-app"]=this["webpackJsonpchuck-noriss-app"]||[]).push([[0],{103:function(e,t,r){"use strict";r.r(t);var n=r(6),a=r(0),c=r.n(a),o=r(9),s=r.n(o),i=r(17),u=r(13),l=r(143),j=r(145),b=r(141),d=r(142),h=r(35),f=r(134),g=r(64),p=r(106),O=r(137),x=r(138),v=r(139),m=r(140),k=r(16),y=r.n(k),S=r(26),C=Object(i.b)({name:"jokes",initialState:{loading:!1,hasErrors:!1,joke:null},reducers:{setJokesLoading:function(e){e.loading=!0},setJokesSuccess:function(e,t){var r=t.payload;e.joke=r,e.loading=!1,e.hasErrors=!1},setJokesFailure:function(e){e.loading=!1,e.hasErrors=!0}}}),w=C.actions,T=w.setJokesLoading,E=w.setJokesSuccess,N=w.setJokesFailure,J=function(e){return e.joke},M=C.reducer,F=function(e,t,r){return function(){var n=Object(S.a)(y.a.mark((function n(a){var c;return y.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return a(T()),n.prev=1,n.next=4,e(t,r);case 4:c=n.sent,a(E(c)),n.next=11;break;case 8:n.prev=8,n.t0=n.catch(1),a(N());case 11:case"end":return n.stop()}}),n,null,[[1,8]])})));return function(e){return n.apply(this,arguments)}}()},P=Object(i.b)({name:"category",initialState:{category:null},reducers:{setCategory:function(e,t){e.category=t.payload}}}),W=P.actions.setCategory,B=function(e){return e.category},I=P.reducer,L=Object(i.b)({name:"searchText",initialState:{searchText:"",textTooShort:!1},reducers:{setSearchText:function(e,t){e.searchText=t.payload,t.payload.length>0&&t.payload.length<3?e.textTooShort=!0:e.textTooShort=!1}}}),R=L.actions.setSearchText,q=function(e){return e.searchText},A=L.reducer,z=r(47),D=r.n(z),G=function(){var e=Object(S.a)(y.a.mark((function e(t,r){var n,a,c;return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=null!=r?"/search?query=".concat(r):null==t?"/random":"/random?category=".concat(t),e.next=3,D.a.get("https://api.chucknorris.io/jokes"+n);case 3:if(0!==(a=e.sent).data.total){e.next=6;break}return e.abrupt("return",'No joke with phrase "'.concat(r,'" found.'));case 6:if(void 0!==a.data.value){e.next=9;break}return c=Math.floor(Math.random()*a.data.total),e.abrupt("return",a.data.result[c].value);case 9:return e.abrupt("return",a.data.value);case 10:case"end":return e.stop()}}),e)})));return function(t,r){return e.apply(this,arguments)}}(),H=function(){var e=Object(S.a)(y.a.mark((function e(){var t;return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,D.a.get("https://api.chucknorris.io/jokes/categories");case 2:return t=e.sent,e.abrupt("return",t.data);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),K=Object(f.a)({root:{minWidth:275,"&:hover":{cursor:"pointer"}}}),Q=function(){var e=K(),t=Object(a.useState)(0),r=Object(g.a)(t,2),c=r[0],o=r[1],s=Object(u.b)(),i=Object(u.c)(J),l=i.joke,j=i.loading,b=i.hasErrors,d=Object(u.c)(B).category,h=Object(u.c)(q).searchText;Object(a.useEffect)((function(){s(F(G))}),[s]);return Object(n.jsx)(p.a,{elevation:c,onMouseMove:function(){o(5)},onMouseOut:function(){o(0)},className:e.root,onClick:function(){0!==h.length?s(F(G,d,h)):s(F(G,d))},children:Object(n.jsx)(O.a,{children:Object(n.jsxs)(x.a,{children:[j&&Object(n.jsx)(v.a,{}),!j&&!b&&Object(n.jsx)(m.a,{variant:"body1",align:"left",children:l}),b&&Object(n.jsxs)(m.a,{variant:"body1",align:"left",children:['No joke with phrase "',Object(n.jsx)("i",{children:h}),'" found.']})]})})})},U=r(146),V=Object(i.b)({name:"categories",initialState:{loading:!1,hasErrors:!1,categories:[]},reducers:{setCategories:function(e){e.loading=!0},setCategoriesSuccess:function(e,t){var r=t.payload;e.categories=r,e.loading=!1,e.hasErrors=!1},setCategoriesFailure:function(e){e.loading=!1,e.hasErrors=!0}}}),X=V.actions,Y=X.setCategories,Z=X.setCategoriesSuccess,$=X.setCategoriesFailure,_=function(e){return e.categories},ee=V.reducer;var te=Object(f.a)((function(e){return{root:{display:"flex",justifyContent:"center",flexWrap:"wrap","& > *":{margin:e.spacing(.5)},listStyle:"none"},chip:{margin:e.spacing(.5)}}})),re=function(){var e=te(),t=Object(u.b)(),r=Object(u.c)(_),c=r.categories,o=r.loading,s=r.hasErrors,i=Object(u.c)(B).category;Object(a.useEffect)((function(){var e;t((e=H,function(){var t=Object(S.a)(y.a.mark((function t(r){var n;return y.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r(Y()),t.prev=1,t.next=4,e();case 4:n=t.sent,r(Z(n)),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(1),r($());case 11:case"end":return t.stop()}}),t,null,[[1,8]])})));return function(e){return t.apply(this,arguments)}}()))}),[t]);return Object(n.jsxs)("div",{className:e.root,children:[o&&Object(n.jsx)(v.a,{}),!o&&!s&&c.map((function(r,a){return Object(n.jsx)("li",{children:Object(n.jsx)(U.a,{label:r,onClick:function(){return function(e){i===e?(t(W(null)),t(F(G,null))):(t(W(e)),t(F(G,e)))}(r)},color:r===i?"primary":"secondary",className:e.chip})},a)})),s&&Object(n.jsx)(m.a,{variant:"body1",align:"left",children:"No categories found."})]})},ne=r(144),ae=Object(f.a)((function(e){return{root:{"& > *":{margin:e.spacing(3),width:e.spacing(25),height:e.spacing(8)}}}})),ce=function(){var e=ae(),t=Object(u.b)(),r=Object(u.c)(q),c=r.searchText,o=r.textTooShort,s=Object(u.c)(B).category,i=Object(a.useRef)();Object(a.useEffect)((function(){i.current=c}));var l=i.current;return Object(a.useEffect)((function(){0!==c.length&&0!==l.length&&null!==s?t(R("")):o||0===c.length||t(F(G,null,c))})),Object(n.jsx)("div",{className:e.root,children:Object(n.jsx)(ne.a,{value:c,error:o,helperText:o?"Phrase is too short.":"",id:"standard-basic",label:"Find joke with phrase",onChange:function(e){t(R(e.target.value)),e.target.value.length>0&&t(W(null))}})})},oe=Object(f.a)((function(e){return Object(h.a)({},e.breakpoints.up("sm"),{container:{marginRight:e.spacing(4)}})})),se=function(e){var t=oe();return Object(n.jsx)("img",{className:t.container,src:e.image,alt:"Chuck does not exist."})},ie=r.p+"static/media/chuck.e03202fc.png",ue=Object(f.a)((function(e){return{boxPos:Object(h.a)({},e.breakpoints.up("sm"),{display:"flex",justifyContent:"center",alignItems:"center",padding:"20px"})}})),le=function(){var e=ue();return Object(n.jsxs)(c.a.Fragment,{children:[Object(n.jsxs)(j.a,{className:e.boxPos,children:[Object(n.jsx)(se,{image:ie}),Object(n.jsx)(Q,{})]}),Object(n.jsx)(ce,{}),Object(n.jsx)(re,{})]})},je=r(63),be=Object(je.a)({palette:{primary:{main:"#004d40"},secondary:{main:"#26a69a"}},overrides:{MuiCssBaseline:{"@global":{html:{height:"100%"},body:{textAlign:"center",backgroundColor:"#ededed"}}}}}),de=function(){return Object(n.jsxs)(b.a,{theme:be,children:[Object(n.jsx)(d.a,{}),Object(n.jsx)(l.a,{maxWidth:"sm",children:Object(n.jsx)(j.a,{my:4,children:Object(n.jsx)(le,{})})})]})},he=r(15),fe=Object(he.c)({joke:M,categories:ee,category:I,searchText:A}),ge=Object(i.a)({reducer:fe});s.a.render(Object(n.jsx)(c.a.StrictMode,{children:Object(n.jsx)(u.a,{store:ge,children:Object(n.jsx)(de,{})})}),document.getElementById("root"))}},[[103,1,2]]]);
//# sourceMappingURL=main.71defefe.chunk.js.map