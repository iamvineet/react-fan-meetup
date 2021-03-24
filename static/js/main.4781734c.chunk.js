(this["webpackJsonpreact-fanmeetup"]=this["webpackJsonpreact-fanmeetup"]||[]).push([[0],{12:function(e,t,c){e.exports={item:"MeetupItem_item__36P5b",image:"MeetupItem_image__3YuBX",content:"MeetupItem_content__1Uifa",actions:"MeetupItem_actions__NqMFE"}},13:function(e,t,c){e.exports={header:"MainNavigation_header__1yL92",logo:"MainNavigation_logo__3YpAe",active:"MainNavigation_active__NdCi9",badge:"MainNavigation_badge__3LXxB"}},19:function(e,t,c){e.exports={card:"Card_card__24-NP"}},20:function(e,t,c){e.exports={list:"MeetupList_list__3qET6"}},22:function(e,t,c){e.exports={main:"Layout_main__2goTP"}},28:function(e,t,c){},38:function(e,t,c){"use strict";c.r(t);var i=c(1),r=c(18),n=c.n(r),s=c(7),a=(c(28),c(2)),o=c(23),d=c(11),j=c(12),l=c.n(j),u=c(19),b=c.n(u),h=c(0);function O(e){return Object(h.jsx)("div",{className:b.a.card,children:e.children})}var x=Object(i.createContext)({favorites:[],totalFavorites:0,addFavorite:function(e){},removeFavorite:function(e){},itemIsFavorite:function(e){}});function m(e){var t=Object(i.useState)([]),c=Object(d.a)(t,2),r=c[0],n=c[1];var s={favorites:r,totalFavorites:r.length,addFavorite:function(e){n((function(t){return t.concat(e)}))},removeFavorite:function(e){n((function(t){return t.filter((function(t){return t.id!==e}))}))},itemIsFavorite:function(e){return r.some((function(t){return t.id===e}))}};return Object(h.jsx)(x.Provider,{value:s,children:e.children})}var v=x;function f(e){var t=Object(i.useContext)(v),c=t.itemIsFavorite(e.id);return Object(h.jsx)("li",{className:l.a.item,children:Object(h.jsxs)(O,{children:[Object(h.jsx)("div",{className:l.a.image,children:Object(h.jsx)("img",{src:e.image,alt:e.title})}),Object(h.jsxs)("div",{className:l.a.content,children:[Object(h.jsx)("h3",{children:e.title}),Object(h.jsx)("address",{children:e.address}),Object(h.jsx)("p",{children:e.description})]}),Object(h.jsx)("div",{className:l.a.actions,children:Object(h.jsx)("button",{onClick:function(){c?t.removeFavorite(e.id):t.addFavorite({id:e.id,title:e.title,description:e.description,image:e.image,address:e.address})},children:c?"Remove as Favorites":"Add as Favorites"})})]})})}var p=c(20),_=c.n(p);function N(e){return Object(h.jsx)("ul",{className:_.a.list,children:e.meetups.map((function(e){return Object(h.jsx)(f,{id:e.id,image:e.image,title:e.title,address:e.address,description:e.description},e.id)}))})}function g(){var e=Object(i.useState)(!0),t=Object(d.a)(e,2),c=t[0],r=t[1],n=Object(i.useState)([]),s=Object(d.a)(n,2),a=s[0],j=s[1];return Object(i.useEffect)((function(){r(!0),fetch("https://react-refresher-b1a92-default-rtdb.firebaseio.com/meetups.json").then((function(e){return e.json()})).then((function(e){var t=[];for(var c in e){var i=Object(o.a)({id:c},e[c]);t.push(i)}r(!1),j(t)}))}),[]),c?Object(h.jsx)("section",{children:"Loading..."}):Object(h.jsxs)("div",{children:[Object(h.jsx)("h1",{children:"All Meetups"}),Object(h.jsx)(N,{meetups:a})]})}function F(){var e,t=Object(i.useContext)(v);return e=0===t.totalFavorites?Object(h.jsx)("p",{children:"No Favorites yet. Add some."}):Object(h.jsx)(N,{meetups:t.favorites}),Object(h.jsxs)("section",{children:[Object(h.jsx)("h1",{children:"My Favorites"}),e]})}var M=c(9),y=c.n(M);function A(e){var t=Object(i.useRef)(),c=Object(i.useRef)(),r=Object(i.useRef)(),n=Object(i.useRef)();return Object(h.jsx)(O,{children:Object(h.jsxs)("form",{className:y.a.form,onSubmit:function(i){i.preventDefault();var s={title:t.current.value,image:c.current.value,address:r.current.value,description:n.current.value};e.onAddMeetup(s)},children:[Object(h.jsxs)("div",{className:y.a.control,children:[Object(h.jsx)("label",{htmlFor:"title",children:"Meetup Title"}),Object(h.jsx)("input",{type:"text",required:!0,id:"title",ref:t})]}),Object(h.jsxs)("div",{className:y.a.control,children:[Object(h.jsx)("label",{htmlFor:"image",children:"Meetup Image"}),Object(h.jsx)("input",{type:"url",required:!0,id:"image",ref:c})]}),Object(h.jsxs)("div",{className:y.a.control,children:[Object(h.jsx)("label",{htmlFor:"address",children:"Address"}),Object(h.jsx)("input",{type:"text",required:!0,id:"address",ref:r})]}),Object(h.jsxs)("div",{className:y.a.control,children:[Object(h.jsx)("label",{htmlFor:"description",children:"Description"}),Object(h.jsx)("textarea",{id:"description",required:!0,rows:"5",ref:n})]}),Object(h.jsx)("div",{className:y.a.actions,children:Object(h.jsx)("button",{children:"Add"})})]})})}function w(){var e=Object(a.f)();return Object(h.jsxs)("section",{children:[Object(h.jsx)("h1",{children:"Add New Meetup"}),Object(h.jsx)(A,{onAddMeetup:function(t){fetch("https://react-refresher-b1a92-default-rtdb.firebaseio.com/meetups.json",{method:"POST",body:JSON.stringify(t),headers:{"Content-Type":"application/json"}}).then((function(){e.replace("/")}))}})]})}var C=c(13),I=c.n(C);function S(){var e=Object(i.useContext)(v);return Object(h.jsx)("div",{children:Object(h.jsxs)("header",{className:I.a.header,children:[Object(h.jsx)("div",{className:I.a.logo,children:"Fan Meetup"}),Object(h.jsx)("nav",{children:Object(h.jsxs)("ul",{children:[Object(h.jsx)("li",{children:Object(h.jsx)(s.b,{to:"/",children:"All Meetups"})}),Object(h.jsx)("li",{children:Object(h.jsx)(s.b,{to:"/newmeetup",children:"Create Meetup"})}),Object(h.jsx)("li",{children:Object(h.jsxs)(s.b,{to:"/favorites",children:["Favorites",Object(h.jsx)("span",{className:I.a.badge,children:e.totalFavorites})]})})]})})]})})}var q=c(22),L=c.n(q);function P(e){return Object(h.jsxs)("div",{children:[Object(h.jsx)(S,{}),Object(h.jsx)("main",{className:L.a.main,children:e.children})]})}var R=function(){return Object(h.jsx)(P,{children:Object(h.jsxs)(a.c,{children:[Object(h.jsx)(a.a,{exact:!0,path:"/",children:Object(h.jsx)(g,{})}),Object(h.jsx)(a.a,{path:"/favorites",children:Object(h.jsx)(F,{})}),Object(h.jsx)(a.a,{path:"/newmeetup",children:Object(h.jsx)(w,{})})]})})};n.a.render(Object(h.jsx)(m,{children:Object(h.jsx)(s.a,{children:Object(h.jsx)(R,{})})}),document.getElementById("root"))},9:function(e,t,c){e.exports={form:"NewMeetupForm_form__rQKsS",control:"NewMeetupForm_control__2_37W",actions:"NewMeetupForm_actions__1Qirl"}}},[[38,1,2]]]);
//# sourceMappingURL=main.4781734c.chunk.js.map