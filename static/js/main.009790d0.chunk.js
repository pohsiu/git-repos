(this["webpackJsonpgit-repos"]=this["webpackJsonpgit-repos"]||[]).push([[0],{93:function(e,t,n){"use strict";n.r(t);var r=n(6),a=n(0),c=n.n(a),i=n(8),o=n.n(i),s=n(139),u=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,143)).then((function(t){var n=t.getCLS,r=t.getFID,a=t.getFCP,c=t.getLCP,i=t.getTTFB;n(e),r(e),a(e),c(e),i(e)}))},l=n(62),j=Object(l.a)({palette:{primary:{main:"#3C3E45"}},div:{flexContainerHorizontal:{display:"flex",flexDirection:"row"},flexContainerVertical:{display:"flex",flexDirection:"column"}}}),d=n(24),p=n(138),h={input:"",onInputChange:function(){}},f=c.a.createContext(h),b=n(21),x=n(32),g=n(129),m=n(43),O=n(137),v=n(12),C=n.n(v),w=n(22),y=n(56),k=n.n(y),S=n(141),I=n(136),N=n(135),T=n(142),_=n(133),E=n(131),F=n(134),P=Object(g.a)((function(e){return{list:Object(x.a)({height:"100%",overflowY:"auto",alignItems:"center"},e.div.flexContainerVertical),progressContainer:{padding:24,justifyContent:"center"}}})),B="pending",D="resolved",H="error",M="idle",V=function(e){var t=e.fetchState,n=e.loadMore,a=e.children,c=e.scrollOffset,i=void 0===c?120:c,o=P();return Object(r.jsxs)(E.a,{className:o.list,onScroll:function(e){var t=e.target,r=t.clientHeight,a=t.scrollTop,c=t.scrollHeight;r+a+i>=c&&n()},children:[t.state===H&&Object(r.jsx)(_.a,{error:!0,children:t.error}),a,t.loading&&Object(r.jsx)(S.a,{className:o.progressContainer,children:Object(r.jsx)(F.a,{})})]})},q=c.a.memo(V),G=new(n(61).a),J=function(e,t){return G.request("GET /search/repositories",{q:e,sort:"stars",order:"desc",per_page:50,page:t})},L=Object(g.a)((function(e){return{item:{justifyContent:"center"}}})),R=function(){var e=L(),t=c.a.useContext(f).input,n=c.a.useState([]),a=Object(d.a)(n,2),i=a[0],o=a[1],s=c.a.useRef(0),u=c.a.useState({state:M,loading:!1}),l=Object(d.a)(u,2),j=l[0],p=l[1],h=c.a.useCallback(k()(function(){var e=Object(w.a)(C.a.mark((function e(t,n){var r;return C.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t){e.next=2;break}return e.abrupt("return");case 2:return e.prev=2,p({state:B,loading:!0}),s.current=n?s.current+1:1,e.next=7,J(t,s.current);case 7:return r=e.sent,e.next=10,new Promise((function(e){return setTimeout(e,500)}));case 10:p({state:D,loading:!1}),o((function(e){return n?e.concat(r.data.items):r.data.items})),e.next=17;break;case 14:e.prev=14,e.t0=e.catch(2),p({state:H,error:e.t0.message,loading:!1});case 17:case"end":return e.stop()}}),e,null,[[2,14]])})));return function(t,n){return e.apply(this,arguments)}}(),1e3),[]);c.a.useEffect((function(){o([]),h(t,!1)}),[h,t]);var b=c.a.useCallback((function(){return h(t,!0)}),[h,t]);return Object(r.jsx)(q,{loadMore:b,fetchState:j,children:j.state===H?null:j.state===D&&0===i.length?Object(r.jsx)(S.a,{children:"No match result"}):i.map((function(t){var n;return Object(r.jsxs)(S.a,{button:!0,className:e.item,onClick:function(){window.open(t.html_url,"_blank","noreferrer=yes")},children:[Object(r.jsx)(N.a,{children:Object(r.jsx)(T.a,{alt:t.name,src:t.owner.avatar_url,children:!(null===(n=t.owner)||void 0===n?void 0:n.avatar_url)&&t.name[0]})}),Object(r.jsx)(I.a,{primary:t.name,secondary:t.description})]},t.node_id)}))})},z=n(140),Y=function(e){var t=e.input,n=e.onInputChange,a=c.a.useCallback((function(e){n(e.target.value)}),[]);return Object(r.jsx)(z.a,{value:t,onChange:a,placeholder:"Type repo name in here ..."})},A=c.a.memo(Y),K=Object(g.a)((function(e){return{root:Object(x.a)(Object(x.a)({},e.div.flexContainerVertical),{},Object(b.a)({width:"40vw",padding:48,height:"calc(100vh - 48px)",margin:"24px auto"},e.breakpoints.down("xs"),{width:"calc(100% - 48px)",margin:24})),h5:{marginBottom:16}}})),Q=function(){var e=K(),t=c.a.useContext(f),n=t.input,a=t.onInputChange;return Object(r.jsxs)(O.a,{className:e.root,children:[Object(r.jsx)(m.a,{variant:"h5",className:e.h5,children:"Github Repository Search"}),Object(r.jsx)(A,{input:n,onInputChange:a}),Object(r.jsx)(R,{})]})};var U=function(){var e=c.a.useState(""),t=Object(d.a)(e,2),n=t[0],a=t[1];return Object(r.jsxs)(f.Provider,{value:{onInputChange:function(e){return a(e)},input:n},children:[Object(r.jsx)(p.a,{}),Object(r.jsx)(Q,{})]})};function W(){return Object(r.jsx)(s.a,{theme:j,children:Object(r.jsx)(U,{})})}o.a.render(Object(r.jsx)(c.a.StrictMode,{children:Object(r.jsx)(W,{})}),document.getElementById("root")),u()}},[[93,1,2]]]);
//# sourceMappingURL=main.009790d0.chunk.js.map