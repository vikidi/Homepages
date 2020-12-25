(this["webpackJsonphomepages-frontend"]=this["webpackJsonphomepages-frontend"]||[]).push([[1],{146:function(e,t,n){},147:function(e,t,n){"use strict";n.r(t);var r=n(4),a=n(0),c=n.n(a),o=n(23),i=n.n(o),s=n(26),u=n(5),l=n(164),d=n(8),f=n.n(d),h=n(16),g=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_USER":return t.data;default:return e}},b=n(34),j=n(31),p=n(67),m=n(165),O=n(35),v=n(80),w=n(81),S=n(91),y=n(90),E=function(e){Object(S.a)(n,e);var t=Object(y.a)(n);function n(e){var r;return Object(v.a)(this,n),(r=t.call(this,e)).state={hasError:!1},r}return Object(w.a)(n,[{key:"componentDidCatch",value:function(){}},{key:"render",value:function(){return this.state.hasError?Object(r.jsx)("h1",{children:"Something went wrong."}):this.props.children}}],[{key:"getDerivedStateFromError",value:function(){return{hasError:!0}}}]),n}(c.a.Component),x=Object(a.lazy)((function(){return Promise.all([n.e(0),n.e(4),n.e(7)]).then(n.bind(null,269))})),k=Object(a.lazy)((function(){return Promise.all([n.e(0),n.e(5),n.e(6)]).then(n.bind(null,271))})),T=function(){var e=Object(s.b)(),t=Object(s.c)((function(e){var t,n=null!==(t=e.theme)&&void 0!==t?t:{name:"dark"};return Object(p.b)(n.name)}));return Object(a.useEffect)((function(){var t,n=window.localStorage.getItem("loggedUser");n&&e((t=JSON.parse(n),function(){var e=Object(h.a)(f.a.mark((function e(n){return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:window.localStorage.setItem("loggedUser",JSON.stringify(t)),n({type:"SET_USER",data:t});case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()));var r=window.localStorage.getItem("selectedLanguage");r&&e(Object(b.b)(JSON.parse(r)));var a=window.localStorage.getItem("selectedTheme");a?e(Object(j.b)(JSON.parse(a))):window.localStorage.setItem("selectedTheme",JSON.stringify({name:"dark"}))}),[e]),Object(r.jsxs)(l.a,{theme:t,children:[Object(r.jsx)(m.a,{}),Object(r.jsx)(E,{children:Object(r.jsx)(a.Suspense,{fallback:Object(r.jsx)(O.a,{}),children:Object(r.jsxs)(u.c,{children:[Object(r.jsx)(u.a,{path:"/settings",component:k}),Object(r.jsx)(u.a,{path:"/",component:x})]})})})]})};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var I=function(e){e&&e instanceof Function&&n.e(8).then(n.bind(null,265)).then((function(t){var n=t.getCLS,r=t.getFID,a=t.getFCP,c=t.getLCP,o=t.getTTFB;n(e),r(e),a(e),c(e),o(e)}))},N=n(43),L=n(52),J=n(151),_=n(82),C=n(46),F=window.localStorage.getItem("selectedLanguage");F||window.localStorage.setItem("selectedLanguage",JSON.stringify(C.a)),L.a.use(_.a).use(J.e).init({lng:F?JSON.parse(F).short:C.a.short,fallbackLng:"en",debug:!0,backend:{loadPath:"/locales/{{lng}}/{{ns}}.json",allowMultiLoading:!1},react:{wait:!0,useSuspense:!0}});L.a;var z=n(22),A=n(86),M=n(87);n(88),n(89);var P=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_NOTIFICATION":return e.concat(t.data);case"REMOVE_NOTIFICATION":return e.filter((function(e){return e.id!==t.data}));default:return e}},U=Object(z.combineReducers)({user:g,language:b.a,notification:P,theme:j.a}),D=Object(z.createStore)(U,Object(M.composeWithDevTools)(Object(z.applyMiddleware)(A.a)));n(146);i.a.render(Object(r.jsx)(c.a.StrictMode,{children:Object(r.jsx)(N.a,{children:Object(r.jsx)(s.a,{store:D,children:Object(r.jsx)(E,{children:Object(r.jsx)(a.Suspense,{fallback:Object(r.jsx)(O.a,{}),children:Object(r.jsx)(T,{})})})})})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)})),I()},31:function(e,t,n){"use strict";n.d(t,"b",(function(){return o}));var r=n(8),a=n.n(r),c=n(16),o=function(e){return function(){var t=Object(c.a)(a.a.mark((function t(n){return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:window.localStorage.setItem("selectedTheme",JSON.stringify(e)),n({type:"SET_THEME",data:e});case 2:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()};t.a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_THEME":return t.data;default:return e}}},34:function(e,t,n){"use strict";n.d(t,"b",(function(){return o}));var r=n(8),a=n.n(r),c=n(16),o=function(e){return function(){var t=Object(c.a)(a.a.mark((function t(n){return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:window.localStorage.setItem("selectedLanguage",JSON.stringify(e)),n({type:"SET_LANGUAGE",data:e});case 2:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()};t.a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_LANGUAGE":return t.data;default:return e}}},35:function(e,t,n){"use strict";var r=n(4),a=(n(0),n(95)),c=n(76),o=n(79),i=n.n(o),s=function(e){var t=e.size,n=Object(a.a)();return Object(r.jsx)("div",{className:i.a.container,children:Object(r.jsx)(c.SolarSystemLoading,{size:t,color:n.palette.primary.main})})};s.defaultProps={size:"default"},t.a=s},46:function(e,t,n){"use strict";n.d(t,"c",(function(){return r})),n.d(t,"b",(function(){return a}));var r=[{short:"en",name:"English"},{short:"fi",name:"Suomi"}],a=function(e){return r.filter((function(t){return t.name===e}))[0]};t.a={short:"en",name:"English"}},67:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var r=n(163),a={palette:{type:"dark",footer:{main:"#424242"}}},c={palette:{type:"light",footer:{main:"#eeeeee"}}},o=[{name:"dark"},{name:"light"}];t.b=function(e){var t;return t="dark"===e?a:"light"===e?c:a,Object(r.a)(t)}},79:function(e,t,n){e.exports={container:"CustomLoader_container__3cfzx"}}},[[147,2,3]]]);
//# sourceMappingURL=main.357a7559.chunk.js.map