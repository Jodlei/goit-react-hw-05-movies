"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[635],{635:function(n,e,r){r.r(e),r.d(e,{MovieDetails:function(){return H},default:function(){return L}});var i,t,o,x,s,p,a,l,c,d,b=r(439),g=r(791),h=r(689),u=r(714),v=r(168),m=r(444),f=r(87),j=m.ZP.div(i||(i=(0,v.Z)(["\n  padding: 15px;\n  border-bottom: 11px black;\n  box-shadow: rgb(0 0 0 / 20%) 0px 3px 1px -2px,\n    rgb(0 0 0 / 14%) 0px 2px 2px 0px, rgb(0 0 0 / 12%) 0px 1px 5px 0px;\n"]))),w=(0,m.ZP)(f.OL)(t||(t=(0,v.Z)(["\n  padding: 8px 16px;\n  border-radius: 4px;\n  text-decoration: none;\n  color: black;\n  font-weight: 500;\n  display: inline-flex;\n  -webkit-box-align: center;\n  align-items: center;\n  -webkit-box-pack: center;\n  justify-content: center;\n  border: 0px;\n  margin: 0px;\n  cursor: pointer;\n  vertical-align: middle;\n  font-weight: 500;\n  font-size: 0.875rem;\n  text-transform: uppercase;\n  min-width: 64px;\n  padding: 6px 16px;\n  border-radius: 4px;\n  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,\n    box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,\n    border-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,\n    color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;\n  color: rgba(0, 0, 0, 0.87);\n  background-color: rgb(144, 202, 249);\n  box-shadow: rgb(0 0 0 / 20%) 0px 3px 1px -2px,\n    rgb(0 0 0 / 14%) 0px 2px 2px 0px, rgb(0 0 0 / 12%) 0px 1px 5px 0px;\n  :hover {\n    background-color: rgb(66, 165, 245);\n    box-shadow: rgb(0 0 0 / 20%) 0px 2px 4px -1px,\n      rgb(0 0 0 / 14%) 0px 4px 5px 0px, rgb(0 0 0 / 12%) 0px 1px 10px 0px;\n  }\n\n  &.active {\n    color: white;\n    background-color: rgb(45, 118, 179);\n  }\n"]))),Z=r(184),_=function(){var n,e,r=(0,h.TH)();return(0,Z.jsxs)(j,{children:[(0,Z.jsx)("h4",{children:"Additional information"}),(0,Z.jsxs)("ul",{style:{display:"flex"},children:[(0,Z.jsx)("li",{style:{marginRight:"15px"},children:(0,Z.jsx)(w,{to:"cast",state:{from:null===(n=r.state)||void 0===n?void 0:n.from},children:"Cast"})},1),(0,Z.jsx)("li",{children:(0,Z.jsx)(w,{to:"reviews",state:{from:null===(e=r.state)||void 0===e?void 0:e.from},children:"Reviews"})},2)]})]})},k=m.ZP.div(o||(o=(0,v.Z)(["\n  display: flex;\n  padding: 15px;\n  border-bottom: 11px black;\n  box-shadow: rgb(0 0 0 / 20%) 0px 3px 1px -2px,\n    rgb(0 0 0 / 14%) 0px 2px 2px 0px, rgb(0 0 0 / 12%) 0px 1px 5px 0px;\n"]))),P=m.ZP.div(x||(x=(0,v.Z)(["\n  margin-left: 30px;\n"]))),y=(0,m.ZP)(f.OL)(s||(s=(0,v.Z)(["\n  margin-left: 15px;\n"]))),z=m.ZP.img(p||(p=(0,v.Z)(["\n  height: 400px;\n"]))),O=m.ZP.h3(a||(a=(0,v.Z)(["\n  margin-bottom: 30px;\n"]))),C=m.ZP.h3(l||(l=(0,v.Z)([""]))),F=m.ZP.h3(c||(c=(0,v.Z)([""]))),T=m.ZP.p(d||(d=(0,v.Z)(["\n  margin-bottom: 15px;\n"]))),H=function(){var n,e,r,i=(0,h.UO)().id,t=(0,h.TH)(),o=null!==(n=null===(e=t.state)||void 0===e?void 0:e.from)&&void 0!==n?n:"/movies",x=(0,g.useState)(null),s=(0,b.Z)(x,2),p=s[0],a=s[1];(0,g.useEffect)((function(){(0,u.TP)(i).then((function(n){return l(n.data)}))}),[i]);var l=function(n){var e=n.poster_path,r=n.original_title,i=n.overview,t=n.release_date,o=n.vote_average,x=n.genres;a({poster_path:e,original_title:r,overview:i,release_date:t,vote_average:o,genres:x})};if(p){var c=p.poster_path,d=p.original_title,v=p.overview,m=p.release_date,f=p.vote_average,j=p.genres.map((function(n){return(0,Z.jsx)("span",{style:{margin:8},children:n.name},n.key)}));return(0,Z.jsxs)(Z.Fragment,{children:[(0,Z.jsx)(y,{to:o,children:(0,Z.jsx)("b",{children:"Back to Movies"})}),(0,Z.jsxs)(k,{children:[(0,Z.jsx)(z,{src:"https://www.themoviedb.org/t/p/w500/".concat(c),alt:d}),(0,Z.jsxs)(P,{children:[(0,Z.jsxs)(O,{children:[d," ",(0,Z.jsxs)("span",{children:[" (",m,")"]})]}),(0,Z.jsx)(C,{children:"User score: "}),(0,Z.jsxs)(T,{children:[10*f.toFixed(1),"%"]}),v?(0,Z.jsxs)(Z.Fragment,{children:[(0,Z.jsx)(F,{children:"Overview"}),(0,Z.jsx)(T,{children:v})]}):null,(0,Z.jsx)("h4",{children:"Genres"}),(0,Z.jsx)(T,{children:j})]})]}),(0,Z.jsx)(_,{state:{from:null===(r=t.state)||void 0===r?void 0:r.from}}),(0,Z.jsx)(h.j3,{})]})}},L=H}}]);
//# sourceMappingURL=635.aa1737d5.chunk.js.map