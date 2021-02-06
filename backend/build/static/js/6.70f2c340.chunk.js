(this["webpackJsonphomepages-frontend"]=this["webpackJsonphomepages-frontend"]||[]).push([[6],{198:function(t,e,o){"use strict";var c=o(3),a=o(0),n=o.n(a),r=o(166),i=o(262),l=o(187),s=o(260),j=o(261),d=o(248),x=o(185),b=o(265),p=o(254),O=o(252),u=o(165),g=o(253),m=o(182),h=o(208),f=o.n(h),y=o(206),k=o.n(y),C=o(207),w=o.n(C),B=o(54),T=o(249),v=o(250),S=o(251),P=Object(d.a)((function(t){return{link:{paddingLeft:t.spacing(3),paddingRight:t.spacing(6)}}})),N=function(t){var e=t.keyProp,o=t.to,a=t.icon,n=t.text,r=P();return Object(c.jsxs)(T.a,{button:!0,component:B.b,to:o,className:r.link,children:[Object(c.jsx)(v.a,{children:a}),Object(c.jsx)(S.a,{primary:n})]},e)},q=Object(d.a)((function(t){return{list:{width:"auto"},menu:{marginRight:t.spacing(1),marginLeft:t.spacing(1)}}})),M=function(){var t=q(),e=Object(x.a)().t,o=Object(a.useState)(!1),n=Object(l.a)(o,2),r=n[0],i=n[1],s=function(t){return function(e){(!e||"keydown"!==e.type||"Tab"!==e.key&&"Shift"!==e.key)&&i(t)}};return Object(c.jsx)(c.Fragment,{children:Object(c.jsxs)(u.a,{container:!0,direction:"row",justify:"space-between",alignItems:"center",className:t.menu,children:[Object(c.jsx)(u.a,{item:!0,children:Object(c.jsx)(m.a,{className:t.title,variant:"h5",noWrap:!0,children:"Ville Saarinen"})}),Object(c.jsx)("div",{className:t.grow}),Object(c.jsx)(u.a,{item:!0,children:Object(c.jsx)(p.a,{className:t.menu,"aria-label":"navigation",color:"primary",onClick:s(!0),edge:"end",children:Object(c.jsx)(f.a,{fontSize:"large"})})}),Object(c.jsx)(b.a,{anchor:"right",open:r,onClose:s(!1),onOpen:s(!0),children:Object(c.jsxs)("div",{className:t.list,role:"presentation",onClick:s(!1),onKeyDown:s(!1),children:[Object(c.jsx)(O.a,{children:Object(c.jsx)(N,{keyProp:"home",to:"/",icon:Object(c.jsx)(k.a,{}),text:e("NavigationLinks.home")})}),Object(c.jsx)(g.a,{}),Object(c.jsx)(O.a,{children:Object(c.jsx)(N,{keyProp:"settings",to:"/settings",icon:Object(c.jsx)(w.a,{}),text:e("NavigationLinks.settings")})})]})})]})})},z=o(210),W=o(212),L=o(259),D=o(104),A=o(29),E=o(271),R=o(211),V=o.n(R),F=o(258),H=o(230),I=o(34),J=o(35),Q=Object(r.a)((function(t){return{root:{paddingRight:t.spacing(6),paddingLeft:t.spacing(6)}}})),G=function(){var t=Q(),e=Object(A.b)(),o=Object(x.a)().t,n=Object(D.a)(),r=Object(a.useState)(null),i=Object(l.a)(r,2),s=i[0],j=i[1],d=Boolean(s),b=function(){j(null)};return Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)(E.a,{title:o("Components.ThemeSelIcon.tooltip"),children:Object(c.jsx)(p.a,{"aria-haspopup":"true",onClick:function(t){j(t.currentTarget)},color:"inherit",children:Object(c.jsx)(V.a,{})})}),Object(c.jsx)(H.a,{anchorEl:s,anchorOrigin:{vertical:"top",horizontal:"right"},keepMounted:!0,transformOrigin:{vertical:"top",horizontal:"right"},open:d,onClose:b,children:J.a.map((function(a){return Object(c.jsx)(F.a,{selected:n.name===a.name,className:t.root,onClick:function(){return function(t){e(Object(I.c)(t)),b(),"/"===window.location.pathname&&window.location.reload()}(a)},children:o("ThemeSelection.ThemeNames.".concat(a.name))},a.name)}))})]})},K=Object(d.a)((function(t){return{menu:{alignSelf:"center"},link:{textTransform:"capitalize",margin:t.spacing(1)}}})),Y=n.a.forwardRef((function(t,e){t.navigate;var o=Object(W.a)(t,["navigate"]),a=K();return Object(c.jsx)(L.a,Object(z.a)(Object(z.a)({className:a.link,ref:e},o),{},{children:t.children}))}));Y.displayName="CustomLink";var U=function(){var t=K(),e=Object(x.a)().t;return Object(c.jsx)(c.Fragment,{children:Object(c.jsxs)(u.a,{container:!0,direction:"row",justify:"space-around",alignItems:"center",className:t.menu,children:[Object(c.jsx)(u.a,{item:!0,children:Object(c.jsx)(m.a,{className:t.title,variant:"h5",noWrap:!0,children:"Ville Saarinen"})}),Object(c.jsx)("div",{className:t.grow}),Object(c.jsxs)(u.a,{item:!0,children:[Object(c.jsx)(B.b,{to:"/",component:Y,children:e("NavigationLinks.home")}),Object(c.jsx)(B.b,{to:"/settings",component:Y,children:e("NavigationLinks.settings")}),Object(c.jsx)(G,{})]})]})})},X=function(){var t=Object(a.useState)(window.innerWidth),e=Object(l.a)(t,2),o=e[0],n=e[1];return Object(a.useEffect)((function(){window.addEventListener("resize",(function(){return n(window.innerWidth)}))}),[]),Object(c.jsx)(s.a,{position:"static",color:"transparent",children:Object(c.jsx)(j.a,{children:o>620?Object(c.jsx)(U,{}):Object(c.jsx)(M,{})})})},Z=function(){return Object(c.jsxs)(m.a,{variant:"body2",color:"textSecondary",children:["Copyright \xa9 Ville Saarinen ",(new Date).getFullYear()]})},$=Object(d.a)((function(t){return{footer:{padding:t.spacing(3,2),marginTop:"auto",backgroundColor:t.palette.footer.main,textAlign:"center"}}})),_=function(){var t=$();return Object(c.jsx)("footer",{className:t.footer,children:Object(c.jsx)(i.a,{maxWidth:"md",children:Object(c.jsx)(Z,{})})})},tt=Object(r.a)((function(){return{root:{marginTop:"auto",marginBottom:"auto"}}})),et=function(t){var e=t.header,o=t.footer,a=t.fullMain,n=t.children,r=tt();return Object(c.jsxs)(c.Fragment,{children:[e&&Object(c.jsx)(X,{}),Object(c.jsx)(i.a,{className:a?r.root:null,component:"main",children:n}),o&&Object(c.jsx)(_,{})]})};et.defaultProps={header:!0,footer:!0,fullMain:!1};e.a=et},268:function(t,e,o){"use strict";o.r(e);var c=o(41),a=o(3),n=o(0),r=o(166),i=o(104),l=o(185),s=o(165),j=o(182),d=o(227),x=o.n(d),b=o(75),p=o(225),O=o.n(p),u=Object(r.a)((function(t){return{root:{padding:t.spacing(6)}}})),g=function(t){var e=t.lines,o=u(),c={show:!0,blink:!0,element:"|",hideWhenDone:!0,hideWhenDoneDelay:200};return Object(a.jsx)("div",{className:o.root,children:e.map((function(t,e){return Object(a.jsx)("div",{children:Object(a.jsx)(O.a,{cursor:c,children:t.map((function(t,e){return Object(a.jsx)("span",{style:{color:t.color,whiteSpace:"pre"},children:t.text},e)}))})},e)}))})},m=o(198),h=o(40),f=function(t,e){return[[{text:"<".concat(e("CodeBlockObj.Tags.MyProfile"),">"),color:t.palette.text.secondary}],[{text:"\t<".concat(e("CodeBlockObj.Tags.Name"),">"),color:t.palette.text.secondary},{text:" Ville Saarinen ",color:t.palette.text.primary},{text:"</".concat(e("CodeBlockObj.Tags.Name"),">"),color:t.palette.text.secondary}],[{text:"\t<".concat(e("CodeBlockObj.Tags.Country"),">"),color:t.palette.text.secondary},{text:" ".concat(e("CodeBlockObj.CountryText")," "),color:t.palette.text.primary},{text:"</".concat(e("CodeBlockObj.Tags.Country"),">"),color:t.palette.text.secondary}],[{text:"\t<".concat(e("CodeBlockObj.Tags.Work"),">"),color:t.palette.text.secondary}],[{text:"\t\t<".concat(e("CodeBlockObj.Tags.Place"),">"),color:t.palette.text.secondary},{text:" Hitachi ABB Power Grids ",color:t.palette.text.primary},{text:"</".concat(e("CodeBlockObj.Tags.Place"),">"),color:t.palette.text.secondary}],[{text:"\t\t<".concat(e("CodeBlockObj.Tags.Product"),">"),color:t.palette.text.secondary},{text:" MicroSCADA Pro DMS600 ",color:t.palette.text.primary},{text:"</".concat(e("CodeBlockObj.Tags.Product"),">"),color:t.palette.text.secondary}],[{text:"\t\t<".concat(e("CodeBlockObj.Tags.Position"),">"),color:t.palette.text.secondary},{text:" ".concat(e("CodeBlockObj.PositionText")," "),color:t.palette.text.primary},{text:"</".concat(e("CodeBlockObj.Tags.Position"),">"),color:t.palette.text.secondary}],[{text:"\t</".concat(e("CodeBlockObj.Tags.Work"),">"),color:t.palette.text.secondary}],[{text:"\t<".concat(e("CodeBlockObj.Tags.Studies"),">"),color:t.palette.text.secondary}],[{text:"\t\t<".concat(e("CodeBlockObj.Tags.Place"),">"),color:t.palette.text.secondary},{text:" ".concat(e("CodeBlockObj.StudyPlaceText")," "),color:t.palette.text.primary},{text:"</".concat(e("CodeBlockObj.Tags.Place"),">"),color:t.palette.text.secondary}],[{text:"\t\t<".concat(e("CodeBlockObj.Tags.Masters"),">"),color:t.palette.text.secondary}],[{text:"\t\t\t<".concat(e("CodeBlockObj.Tags.Status"),">"),color:t.palette.text.secondary},{text:" ".concat(e("CodeBlockObj.Ongoing")," "),color:t.palette.text.primary},{text:"</".concat(e("CodeBlockObj.Tags.Status"),">"),color:t.palette.text.secondary}],[{text:"\t\t\t<".concat(e("CodeBlockObj.Tags.Major"),">"),color:t.palette.text.secondary},{text:" ".concat(e("CodeBlockObj.SWE")," (50 op) "),color:t.palette.text.primary},{text:"</".concat(e("CodeBlockObj.Tags.Major"),">"),color:t.palette.text.secondary}],[{text:"\t\t</".concat(e("CodeBlockObj.Tags.Masters"),">"),color:t.palette.text.secondary}],[{text:"\t\t<".concat(e("CodeBlockObj.Tags.Bachelor"),">"),color:t.palette.text.secondary}],[{text:"\t\t\t<".concat(e("CodeBlockObj.Tags.Status"),">"),color:t.palette.text.secondary},{text:" ".concat(e("CodeBlockObj.AReady")," "),color:t.palette.text.primary},{text:"</".concat(e("CodeBlockObj.Tags.Status"),">"),color:t.palette.text.secondary}],[{text:"\t\t\t<".concat(e("CodeBlockObj.Tags.Major"),">"),color:t.palette.text.secondary},{text:" ".concat(e("CodeBlockObj.PE")," "),color:t.palette.text.primary},{text:"</".concat(e("CodeBlockObj.Tags.Major"),">"),color:t.palette.text.secondary}],[{text:"\t\t\t<".concat(e("CodeBlockObj.Tags.Minor"),">"),color:t.palette.text.secondary},{text:" ".concat(e("CodeBlockObj.SWE")," "),color:t.palette.text.primary},{text:"</".concat(e("CodeBlockObj.Tags.Minor"),">"),color:t.palette.text.secondary}],[{text:"\t\t</".concat(e("CodeBlockObj.Tags.Bachelor"),">"),color:t.palette.text.secondary}],[{text:"\t</".concat(e("CodeBlockObj.Tags.Studies"),">"),color:t.palette.text.secondary}],[{text:"\t<".concat(e("CodeBlockObj.Tags.Hobbies"),">"),color:t.palette.text.secondary},{text:" ".concat(e("CodeBlockObj.HobbiesText")," "),color:t.palette.text.primary},{text:"</".concat(e("CodeBlockObj.Tags.Hobbies"),">"),color:t.palette.text.secondary}],[{text:"</".concat(e("CodeBlockObj.Tags.MyProfile"),">"),color:t.palette.text.secondary}]]},y=Object(r.a)((function(t){return{quote:Object(c.a)({display:"flex",flexDirection:"column",alignItems:"center",paddingTop:t.spacing(3),paddingBottom:t.spacing(6)},t.breakpoints.down("xs"),{paddingBottom:t.spacing(0)}),quoteText:{textAlign:"center"},quoteStars:{display:"inline",opacity:.7,color:t.palette.primary.light},quoteOwner:{alignSelf:"flex-end"},profilePicContainer:{marginTop:t.spacing(6)},profilePic:Object(c.a)({borderRadius:"50%",boxShadow:t.shadows[6],height:"20vw",width:"20vw"},t.breakpoints.down("xs"),{height:"50vw",width:"50vw"})}}));e.default=function(){var t=y(),e=Object(i.a)(),o=Object(l.a)().t,c=f(e,o);return Object(a.jsx)(m.a,{footer:!0,fullMain:!0,children:Object(a.jsxs)(b.a,{horizontal:"center",children:[Object(a.jsx)(s.a,{item:!0,sm:6,children:Object(a.jsxs)(b.a,{horizontal:"center",direction:"column",children:[Object(a.jsx)(s.a,{item:!0,className:t.profilePicContainer,children:Object(a.jsx)(n.Suspense,{fallback:Object(a.jsx)(h.a,{}),children:Object(a.jsxs)("picture",{children:[Object(a.jsx)("source",{sizes:" (max-width: 600px) 50vw, 20vw ",srcSet:" /img/ProfilePicSquareCartoon/800.avif 800w, /img/ProfilePicSquareCartoon/650.avif 650w, /img/ProfilePicSquareCartoon/500.avif 500w, /img/ProfilePicSquareCartoon/350.avif 350w, /img/ProfilePicSquareCartoon/200.avif 200w ",type:"image/avif"}),Object(a.jsx)("source",{sizes:" (max-width: 600px) 50vw, 20vw ",srcSet:" /img/ProfilePicSquareCartoon/800.webp 800w, /img/ProfilePicSquareCartoon/650.webp 650w, /img/ProfilePicSquareCartoon/500.webp 500w, /img/ProfilePicSquareCartoon/350.webp 350w, /img/ProfilePicSquareCartoon/200.webp 200w ",type:"image/webp"}),Object(a.jsx)("img",{className:t.profilePic,alt:"Profile pic",loading:"lazy",decoding:"async",width:"650",height:"650"})]})})}),Object(a.jsx)(s.a,{item:!0,children:Object(a.jsxs)("div",{className:t.quote,children:[Object(a.jsxs)(j.a,{variant:"h4",className:t.quoteText,children:['"',o("MainView.Quote.text"),'"']}),Object(a.jsxs)("div",{className:t.quoteStars,children:[Object(a.jsx)(x.a,{fontSize:"large"}),Object(a.jsx)(x.a,{fontSize:"large"}),Object(a.jsx)(x.a,{fontSize:"large"}),Object(a.jsx)(x.a,{fontSize:"large"}),Object(a.jsx)(x.a,{fontSize:"large"})]}),Object(a.jsxs)(j.a,{className:t.quoteOwner,children:["- ",Object(a.jsx)("i",{children:o("MainView.Quote.person")})]})]})})]})}),Object(a.jsx)(s.a,{item:!0,sm:6,children:Object(a.jsx)(g,{lines:c})})]})})}}}]);
//# sourceMappingURL=6.70f2c340.chunk.js.map