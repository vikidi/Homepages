(this["webpackJsonphomepages-frontend"]=this["webpackJsonphomepages-frontend"]||[]).push([[9],{214:function(t,e,o){"use strict";var c=o(0),a=o.n(c),n=o(172),r=o(291),i=o(192),l=o(289),s=o(290),j=o(277),d=o(191),x=o(294),b=o(283),p=o(281),O=o(171),u=o(282),g=o(188),m=o(224),h=o.n(m),f=o(222),y=o.n(f),k=o(223),C=o.n(k),w=o(54),B=o(278),T=o(279),v=o(280),S=o(2),P=Object(j.a)((function(t){return{link:{paddingLeft:t.spacing(3),paddingRight:t.spacing(6)}}})),N=function(t){var e=t.keyProp,o=t.to,c=t.icon,a=t.text,n=P();return Object(S.jsxs)(B.a,{button:!0,component:w.b,to:o,className:n.link,children:[Object(S.jsx)(T.a,{children:c}),Object(S.jsx)(v.a,{primary:a})]},e)},q=Object(j.a)((function(t){return{list:{width:"auto"},menu:{marginRight:t.spacing(1),marginLeft:t.spacing(1)}}})),M=function(){var t=q(),e=Object(d.a)().t,o=Object(c.useState)(!1),a=Object(i.a)(o,2),n=a[0],r=a[1],l=function(t){return function(e){(!e||"keydown"!==e.type||"Tab"!==e.key&&"Shift"!==e.key)&&r(t)}};return Object(S.jsx)(S.Fragment,{children:Object(S.jsxs)(O.a,{container:!0,direction:"row",justify:"space-between",alignItems:"center",className:t.menu,children:[Object(S.jsx)(O.a,{item:!0,children:Object(S.jsx)(g.a,{className:t.title,variant:"h5",noWrap:!0,children:"Ville Saarinen"})}),Object(S.jsx)("div",{className:t.grow}),Object(S.jsx)(O.a,{item:!0,children:Object(S.jsx)(b.a,{className:t.menu,"aria-label":"navigation",color:"primary",onClick:l(!0),edge:"end",children:Object(S.jsx)(h.a,{fontSize:"large"})})}),Object(S.jsx)(x.a,{anchor:"right",open:n,onClose:l(!1),onOpen:l(!0),children:Object(S.jsxs)("div",{className:t.list,role:"presentation",onClick:l(!1),onKeyDown:l(!1),children:[Object(S.jsx)(p.a,{children:Object(S.jsx)(N,{keyProp:"home",to:"/",icon:Object(S.jsx)(y.a,{}),text:e("NavigationLinks.home")})}),Object(S.jsx)(u.a,{}),Object(S.jsx)(p.a,{children:Object(S.jsx)(N,{keyProp:"settings",to:"/settings",icon:Object(S.jsx)(C.a,{}),text:e("NavigationLinks.settings")})})]})})]})})},z=o(196),W=o(199),D=o(288),L=o(110),A=o(30),E=o(305),R=o(226),V=o.n(R),F=o(287),H=o(259),I=o(35),J=o(36),Q=Object(n.a)((function(t){return{root:{paddingRight:t.spacing(6),paddingLeft:t.spacing(6)}}})),G=function(){var t=Q(),e=Object(A.b)(),o=Object(d.a)().t,a=Object(L.a)(),n=Object(c.useState)(null),r=Object(i.a)(n,2),l=r[0],s=r[1],j=Boolean(l),x=function(){s(null)};return Object(S.jsxs)(S.Fragment,{children:[Object(S.jsx)(E.a,{title:o("Components.ThemeSelIcon.tooltip"),children:Object(S.jsx)(b.a,{"aria-haspopup":"true",onClick:function(t){s(t.currentTarget)},color:"inherit",children:Object(S.jsx)(V.a,{})})}),Object(S.jsx)(H.a,{anchorEl:l,anchorOrigin:{vertical:"top",horizontal:"right"},keepMounted:!0,transformOrigin:{vertical:"top",horizontal:"right"},open:j,onClose:x,children:J.a.map((function(c){return Object(S.jsx)(F.a,{selected:a.name===c.name,className:t.root,onClick:function(){return function(t){e(Object(I.c)(t)),x(),"/"===window.location.pathname&&window.location.reload()}(c)},children:o("ThemeSelection.ThemeNames.".concat(c.name))},c.name)}))})]})},K=Object(j.a)((function(t){return{menu:{alignSelf:"center"},link:{textTransform:"capitalize",margin:t.spacing(1)}}})),Y=a.a.forwardRef((function(t,e){t.navigate;var o=Object(W.a)(t,["navigate"]),c=K();return Object(S.jsx)(D.a,Object(z.a)(Object(z.a)({className:c.link,ref:e},o),{},{children:t.children}))}));Y.displayName="CustomLink";var U=function(){var t=K(),e=Object(d.a)().t;return Object(S.jsx)(S.Fragment,{children:Object(S.jsxs)(O.a,{container:!0,direction:"row",justify:"space-around",alignItems:"center",className:t.menu,children:[Object(S.jsx)(O.a,{item:!0,children:Object(S.jsx)(g.a,{className:t.title,variant:"h5",noWrap:!0,children:"Ville Saarinen"})}),Object(S.jsx)("div",{className:t.grow}),Object(S.jsxs)(O.a,{item:!0,children:[Object(S.jsx)(w.b,{to:"/",component:Y,children:e("NavigationLinks.home")}),Object(S.jsx)(w.b,{to:"/settings",component:Y,children:e("NavigationLinks.settings")}),Object(S.jsx)(G,{})]})]})})},X=function(){var t=Object(c.useState)(window.innerWidth),e=Object(i.a)(t,2),o=e[0],a=e[1];return Object(c.useEffect)((function(){window.addEventListener("resize",(function(){return a(window.innerWidth)}))}),[]),Object(S.jsx)(l.a,{position:"static",color:"transparent",children:Object(S.jsx)(s.a,{children:o>620?Object(S.jsx)(U,{}):Object(S.jsx)(M,{})})})},Z=function(){return Object(S.jsxs)(g.a,{variant:"body2",color:"textSecondary",children:["Copyright \xa9 Ville Saarinen ",(new Date).getFullYear()]})},$=Object(j.a)((function(t){return{footer:{padding:t.spacing(3,2),marginTop:"auto",backgroundColor:t.palette.footer.main,textAlign:"center"}}})),_=function(){var t=$();return Object(S.jsx)("footer",{className:t.footer,children:Object(S.jsx)(r.a,{maxWidth:"md",children:Object(S.jsx)(Z,{})})})},tt=Object(n.a)((function(){return{root:{marginTop:"auto",marginBottom:"auto"}}})),et=function(t){var e=t.header,o=t.footer,c=t.fullMain,a=t.children,n=tt();return Object(S.jsxs)(S.Fragment,{children:[e&&Object(S.jsx)(X,{}),Object(S.jsx)(r.a,{className:c?n.root:null,component:"main",children:a}),o&&Object(S.jsx)(_,{})]})};et.defaultProps={header:!0,footer:!0,fullMain:!1};e.a=et},299:function(t,e,o){"use strict";o.r(e);var c=o(34),a=o(0),n=o(172),r=o(110),i=o(191),l=o(171),s=o(188),j=o(245),d=o.n(j),x=o(78),b=o(243),p=o.n(b),O=o(2),u=Object(n.a)((function(t){return{root:{padding:t.spacing(6)}}})),g=function(t){var e=t.lines,o=u(),c={show:!0,blink:!0,element:"|",hideWhenDone:!0,hideWhenDoneDelay:200};return Object(O.jsx)("div",{className:o.root,children:e.map((function(t,e){return Object(O.jsx)("div",{children:Object(O.jsx)(p.a,{cursor:c,avgTypingDelay:45,children:t.map((function(t,e){return Object(O.jsx)("span",{style:{color:t.color,whiteSpace:"pre"},children:t.text},e)}))})},e)}))})},m=o(214),h=o(41),f=function(t,e){return[[{text:"<".concat(e("CodeBlockObj.Tags.MyProfile"),">"),color:t.palette.text.secondary}],[{text:"\t<".concat(e("CodeBlockObj.Tags.Name"),">"),color:t.palette.text.secondary},{text:" Ville Saarinen ",color:t.palette.text.primary},{text:"</".concat(e("CodeBlockObj.Tags.Name"),">"),color:t.palette.text.secondary}],[{text:"\t<".concat(e("CodeBlockObj.Tags.Country"),">"),color:t.palette.text.secondary},{text:" ".concat(e("CodeBlockObj.CountryText")," "),color:t.palette.text.primary},{text:"</".concat(e("CodeBlockObj.Tags.Country"),">"),color:t.palette.text.secondary}],[{text:"\t<".concat(e("CodeBlockObj.Tags.Work"),">"),color:t.palette.text.secondary}],[{text:"\t\t<".concat(e("CodeBlockObj.Tags.Place"),">"),color:t.palette.text.secondary},{text:" Hitachi ABB Power Grids ",color:t.palette.text.primary},{text:"</".concat(e("CodeBlockObj.Tags.Place"),">"),color:t.palette.text.secondary}],[{text:"\t\t<".concat(e("CodeBlockObj.Tags.Product"),">"),color:t.palette.text.secondary},{text:" MicroSCADA Pro DMS600 ",color:t.palette.text.primary},{text:"</".concat(e("CodeBlockObj.Tags.Product"),">"),color:t.palette.text.secondary}],[{text:"\t\t<".concat(e("CodeBlockObj.Tags.Position"),">"),color:t.palette.text.secondary},{text:" ".concat(e("CodeBlockObj.PositionText")," "),color:t.palette.text.primary},{text:"</".concat(e("CodeBlockObj.Tags.Position"),">"),color:t.palette.text.secondary}],[{text:"\t</".concat(e("CodeBlockObj.Tags.Work"),">"),color:t.palette.text.secondary}],[{text:"\t<".concat(e("CodeBlockObj.Tags.Studies"),">"),color:t.palette.text.secondary}],[{text:"\t\t<".concat(e("CodeBlockObj.Tags.Place"),">"),color:t.palette.text.secondary},{text:" ".concat(e("CodeBlockObj.StudyPlaceText")," "),color:t.palette.text.primary},{text:"</".concat(e("CodeBlockObj.Tags.Place"),">"),color:t.palette.text.secondary}],[{text:"\t\t<".concat(e("CodeBlockObj.Tags.Masters"),">"),color:t.palette.text.secondary}],[{text:"\t\t\t<".concat(e("CodeBlockObj.Tags.Status"),">"),color:t.palette.text.secondary},{text:" ".concat(e("CodeBlockObj.Ongoing")," "),color:t.palette.text.primary},{text:"</".concat(e("CodeBlockObj.Tags.Status"),">"),color:t.palette.text.secondary}],[{text:"\t\t\t<".concat(e("CodeBlockObj.Tags.Major"),">"),color:t.palette.text.secondary},{text:" ".concat(e("CodeBlockObj.SWE")," (50 op) "),color:t.palette.text.primary},{text:"</".concat(e("CodeBlockObj.Tags.Major"),">"),color:t.palette.text.secondary}],[{text:"\t\t</".concat(e("CodeBlockObj.Tags.Masters"),">"),color:t.palette.text.secondary}],[{text:"\t\t<".concat(e("CodeBlockObj.Tags.Bachelor"),">"),color:t.palette.text.secondary}],[{text:"\t\t\t<".concat(e("CodeBlockObj.Tags.Status"),">"),color:t.palette.text.secondary},{text:" ".concat(e("CodeBlockObj.AReady")," "),color:t.palette.text.primary},{text:"</".concat(e("CodeBlockObj.Tags.Status"),">"),color:t.palette.text.secondary}],[{text:"\t\t\t<".concat(e("CodeBlockObj.Tags.Major"),">"),color:t.palette.text.secondary},{text:" ".concat(e("CodeBlockObj.PE")," "),color:t.palette.text.primary},{text:"</".concat(e("CodeBlockObj.Tags.Major"),">"),color:t.palette.text.secondary}],[{text:"\t\t\t<".concat(e("CodeBlockObj.Tags.Minor"),">"),color:t.palette.text.secondary},{text:" ".concat(e("CodeBlockObj.SWE")," "),color:t.palette.text.primary},{text:"</".concat(e("CodeBlockObj.Tags.Minor"),">"),color:t.palette.text.secondary}],[{text:"\t\t</".concat(e("CodeBlockObj.Tags.Bachelor"),">"),color:t.palette.text.secondary}],[{text:"\t</".concat(e("CodeBlockObj.Tags.Studies"),">"),color:t.palette.text.secondary}],[{text:"\t<".concat(e("CodeBlockObj.Tags.Hobbies"),">"),color:t.palette.text.secondary},{text:" ".concat(e("CodeBlockObj.HobbiesText")," "),color:t.palette.text.primary},{text:"</".concat(e("CodeBlockObj.Tags.Hobbies"),">"),color:t.palette.text.secondary}],[{text:"</".concat(e("CodeBlockObj.Tags.MyProfile"),">"),color:t.palette.text.secondary}]]},y=Object(n.a)((function(t){return{quote:Object(c.a)({display:"flex",flexDirection:"column",alignItems:"center",paddingTop:t.spacing(3),paddingBottom:t.spacing(6)},t.breakpoints.down("xs"),{paddingBottom:t.spacing(0)}),quoteText:{textAlign:"center"},quoteStars:{display:"inline",opacity:.7,color:t.palette.primary.light},quoteOwner:{alignSelf:"flex-end"},profilePicContainer:{marginTop:t.spacing(6)},profilePic:Object(c.a)({borderRadius:"50%",boxShadow:t.shadows[6],height:"20vw",width:"20vw"},t.breakpoints.down("xs"),{height:"50vw",width:"50vw"})}}));e.default=function(){var t=y(),e=Object(r.a)(),o=Object(i.a)().t,c=f(e,o);return Object(O.jsx)(m.a,{footer:!0,fullMain:!0,children:Object(O.jsxs)(x.a,{horizontal:"center",children:[Object(O.jsx)(l.a,{item:!0,sm:6,children:Object(O.jsxs)(x.a,{horizontal:"center",direction:"column",children:[Object(O.jsx)(l.a,{item:!0,className:t.profilePicContainer,children:Object(O.jsx)(a.Suspense,{fallback:Object(O.jsx)(h.a,{}),children:Object(O.jsxs)("picture",{children:[Object(O.jsx)("source",{sizes:" (max-width: 600px) 50vw, 20vw ",srcSet:" /img/ProfilePicSquareCartoon/800.avif 800w, /img/ProfilePicSquareCartoon/650.avif 650w, /img/ProfilePicSquareCartoon/500.avif 500w, /img/ProfilePicSquareCartoon/350.avif 350w, /img/ProfilePicSquareCartoon/200.avif 200w ",type:"image/avif"}),Object(O.jsx)("source",{sizes:" (max-width: 600px) 50vw, 20vw ",srcSet:" /img/ProfilePicSquareCartoon/800.webp 800w, /img/ProfilePicSquareCartoon/650.webp 650w, /img/ProfilePicSquareCartoon/500.webp 500w, /img/ProfilePicSquareCartoon/350.webp 350w, /img/ProfilePicSquareCartoon/200.webp 200w ",type:"image/webp"}),Object(O.jsx)("img",{className:t.profilePic,alt:"Profile pic",loading:"lazy",decoding:"async",width:"650",height:"650"})]})})}),Object(O.jsx)(l.a,{item:!0,children:Object(O.jsxs)("div",{className:t.quote,children:[Object(O.jsxs)(s.a,{variant:"h4",className:t.quoteText,children:['"',o("MainView.Quote.text"),'"']}),Object(O.jsxs)("div",{className:t.quoteStars,children:[Object(O.jsx)(d.a,{fontSize:"large"}),Object(O.jsx)(d.a,{fontSize:"large"}),Object(O.jsx)(d.a,{fontSize:"large"}),Object(O.jsx)(d.a,{fontSize:"large"}),Object(O.jsx)(d.a,{fontSize:"large"})]}),Object(O.jsxs)(s.a,{className:t.quoteOwner,children:["- ",Object(O.jsx)("i",{children:o("MainView.Quote.person")})]})]})})]})}),Object(O.jsx)(l.a,{item:!0,sm:6,children:Object(O.jsx)(g,{lines:c})})]})})}}}]);
//# sourceMappingURL=9.b4fbd3fa.chunk.js.map