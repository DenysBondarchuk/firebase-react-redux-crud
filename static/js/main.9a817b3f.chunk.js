(this.webpackJsonpcrud=this.webpackJsonpcrud||[]).push([[0],{103:function(e,t,a){},104:function(e,t,a){},112:function(e,t,a){},116:function(e,t,a){},117:function(e,t,a){},118:function(e,t,a){},120:function(e,t,a){},121:function(e,t,a){},122:function(e,t,a){},123:function(e,t,a){},124:function(e,t,a){},125:function(e,t,a){},126:function(e,t,a){},127:function(e,t,a){},129:function(e,t,a){},131:function(e,t,a){},132:function(e,t,a){},133:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(43),i=a.n(c),o=(a(103),a(59)),l=a(6),u=a(29),s=a(45),m=a.n(s),d=(a(104),function(e){var t=e.type,a=e.text,c=e.variant,i=e.disabled,o=e.className,l=e.onClick,s=Object(n.useCallback)((function(){l&&l()}),[l]),d=m()("btn",Object(u.a)({},"btn-".concat(c),c),Object(u.a)({},"".concat(o),o));return r.a.createElement("button",{type:t,className:d,disabled:i,onClick:s},a)}),E=a(26),p=a(83),f=(a(105),a(107),a(109),p.initializeApp({apiKey:"AIzaSyDU9ud4Y94YZUXhWYEgxwQW984PzmYNSKA",authDomain:"react-firebase-auth-c345d.firebaseapp.com",databaseURL:"https://react-firebase-auth-c345d.firebaseio.com",projectId:"react-firebase-auth-c345d",storageBucket:"react-firebase-auth-c345d.appspot.com",messagingSenderId:"868637411565",appId:"1:868637411565:web:e1c7fb57d0833cc263e4e4"})),b=p.database().ref("medicines_denys"),v=function(){return f.auth().signOut()},h=Object(n.createContext)(),O=function(e){var t=e.children,a=Object(n.useState)(null),c=Object(E.a)(a,2),i=c[0],o=c[1],l=Object(n.useState)(!0),u=Object(E.a)(l,2),s=u[0],m=u[1];return Object(n.useEffect)((function(){f.auth().onAuthStateChanged((function(e){o(e),m(!1)}))}),[]),s?r.a.createElement("p",{style:{textAlign:"center"}},"Authorization check..."):r.a.createElement(h.Provider,{value:{currentUser:i}},t)},_=(a(112),Object(n.memo)((function(){var e=Object(n.useContext)(h).currentUser;return r.a.createElement("header",{className:"header"},r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"header__wrap"},r.a.createElement("p",null,"Welcome"),r.a.createElement("nav",{className:"header__nav"},r.a.createElement("ul",{className:"header__list"},r.a.createElement(d,{type:"button",variant:"secondary",text:"Sign Out",disabled:!e,onClick:v}))))))}))),S=a(15),j={FETCH:"DATA_FETCH",REQUESTED:"DATA_REQUESTED",REQUESTED_SUCCESS:"DATA_REQUESTED_SUCCESS",REQUESTED_ERROR:"DATA_REQUESTED_ERROR"},x={ITEM:"ADD_ITEM",ITEM_SUCCESS:"ADD_ITEM_SUCCESS"},T={ITEM:"DELETE_ITEM",ITEM_SUCCESS:"DELETE_ITEM_SUCCESS"},C={ITEM:"UPDATE_ITEM",ITEM_SUCCESS:"UPDATE_ITEM_SUCCESS"},y={ITEM:"EDIT_ITEM",ITEM_START:"EDIT_ITEM_START",ITEM_CLEAR:"EDIT_ITEM_CLEAR"},g={ITEM:"ITEM_CREATE"},w=function(e){return{type:x.ITEM_SUCCESS,payload:e}},I=function(e){return{type:T.ITEM_SUCCESS,payload:e}},R=function(e){return{type:C.ITEM_SUCCESS,payload:e}},M=function(e){return{type:y.ITEM,payload:e}},N=function(){return{type:y.ITEM_CLEAR}},A=(a(116),function(e){var t=e.value,a=Object(S.b)(),n=t.id,c=[{title:"Code",value:t.code},{title:"Name",value:t.name},{title:"Price",value:t.price}];return r.a.createElement("li",{className:"medical-item"},r.a.createElement("div",{className:"medical-item__list"},c.map((function(e,t){var a=e.title,n=e.value;return r.a.createElement("div",{className:"medical-item__block",key:t},r.a.createElement("span",{className:"medical-item__title"},a,":"),r.a.createElement("span",{className:"medical-item__value",title:n},n))}))),r.a.createElement("div",{className:"medical-item__controls"},r.a.createElement(d,{type:"button",text:"Edit",variant:"secondary",onClick:function(){return a({type:y.ITEM_START,payload:n})}}),r.a.createElement(d,{type:"button",text:"Delete",variant:"danger",onClick:function(){return a({type:T.ITEM,payload:n})}})))}),D=(a(117),function(){return r.a.createElement("div",{className:"loader"})}),k=(a(118),function(){var e=Object(S.b)();Object(n.useEffect)((function(){e({type:j.FETCH})}),[e]);var t=Object(S.c)((function(e){return e.medicalReducer.medicalList})),a=Object(S.c)((function(e){return e.medicalReducer.loading}));return r.a.createElement("div",{className:"medical-list"},r.a.createElement("div",{className:"container"},r.a.createElement("h2",{className:"medical-list__title"},"Medical list"),a&&r.a.createElement(D,null),r.a.createElement("ul",{className:"medical-list__catalog"},t&&t.map((function(e){return r.a.createElement(A,{key:e.id,value:e})})))))}),U=a(76),L=(a(120),function(e){var t=e.error;return r.a.createElement("span",{className:"input-error"},t)}),P=(a(121),function(e){var t=e.id,a=e.text;return r.a.createElement("label",{htmlFor:t,className:"input-label"},a)}),F=(a(122),function(e){var t=e.type,a=e.id,c=e.name,i=e.placeholder,o=e.onChange,l=e.error,s=e.text,d=e.value,p=Object(n.useState)(""),f=Object(E.a)(p,2),b=f[0],v=f[1],h=Object(n.useCallback)((function(e){v(e.currentTarget.value)}),[]),O=o||h,_=d||b,S=m()("input-text",Object(u.a)({},"input-text--error",l));return r.a.createElement("div",{className:S},r.a.createElement(P,{id:a,text:s}),r.a.createElement("input",{id:a,type:t,name:c,placeholder:i,value:_,onChange:O,autoComplete:"off"}),r.a.createElement(L,{error:l}))}),q=function(e){var t=e.values,a=e.errors,n=e.handleChange;return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"form__item"},r.a.createElement(F,{type:"text",name:"code",placeholder:"Code",id:"code",text:"Code",onChange:n,value:t.code,error:a.code})),r.a.createElement("div",{className:"form__item"},r.a.createElement(F,{type:"text",name:"name",placeholder:"Name",id:"name",text:"Name",onChange:n,value:t.name,error:a.name})),r.a.createElement("div",{className:"form__item"},r.a.createElement(F,{type:"text",name:"price",placeholder:"Price",id:"price",text:"Price",onChange:n,value:t.price,error:a.price})),r.a.createElement("div",{className:"form__item"},r.a.createElement(F,{type:"number",name:"shelfLife",placeholder:"Expiration date",id:"shelfLife",text:"Expiration date",onChange:n,value:t.shelfLife,error:a.shelfLife})))},Q=(a(123),function(e){var t=e.placeholder,a=e.text,c=e.error,i=e.id,o=e.disabled,l=e.name,s=e.onChange,d=e.value,p=Object(n.useState)(""),f=Object(E.a)(p,2),b=f[0],v=f[1],h=Object(n.useCallback)((function(e){v(e.currentTarget.value)}),[]),O=m()("textarea",Object(u.a)({},"textarea--error",c)),_=s||h,S=d||b;return r.a.createElement("div",{className:O},r.a.createElement(P,{id:i,text:a}),r.a.createElement("textarea",{id:i,name:l,placeholder:t,disabled:o,onChange:_,value:S,rows:"3"}),r.a.createElement(L,{error:c}))}),G=function(e){var t=e.values,a=e.errors,n=e.handleChange;return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"form__item"},r.a.createElement(Q,{type:"text",name:"compositionAndFormOfRelease",placeholder:"Composition and release form",id:"compositionAndFormOfRelease",text:"Composition and release form",onChange:n,value:t.compositionAndFormOfRelease,error:a.compositionAndFormOfRelease})),r.a.createElement("div",{className:"form__item"},r.a.createElement(Q,{type:"text",name:"indication",placeholder:"Indication",id:"indication",text:"Indication",onChange:n,value:t.indication,error:a.indication})),r.a.createElement("div",{className:"form__item"},r.a.createElement(Q,{type:"text",name:"\u0441ontrandications",placeholder:"Contrandications",id:"\u0441ontrandications",text:"Contrandications",onChange:n,value:t.\u0441ontrandications,error:a.\u0441ontrandications})))},W=a(20),V="String from 5 to 100 characters",z="A number ranging from 0.01 to 1,000,000",H="Must be an integer number from 1 to 1000",Y="String up to 2000 characters",B={initialValues:{code:"",name:"",price:"",shelfLife:"",compositionAndFormOfRelease:"",indication:"","\u0441ontrandications":""},validationSchema:W.b({code:W.c().required("required").min(5,"String from 5 to 10 characters").max(10,"String from 5 to 10 characters"),name:W.c().required("required").min(5,V).max(100,V),price:W.a().required("required").min(.01,z).max(1e6,z).typeError("Please enter a valid number"),shelfLife:W.a().required("required").integer(H).min(1,H).max(1e3,H),compositionAndFormOfRelease:W.c().max(2e3,Y),indication:W.c().max(2e3,Y),"\u0441ontrandications":W.c().max(2e3,Y)})},K=(a(124),function(){var e=Object(S.b)(),t=Object(S.c)((function(e){return e.medicalReducer.editItem})),a=function(){return e({type:"TOGGLE_MODAL"})},c=t?function(t){return e(function(e){return{type:C.ITEM,payload:e}}(t))}:function(t){return e({type:x.ITEM,payload:t})},i=Object(n.useState)(!0),o=Object(E.a)(i,2),l=o[0],u=o[1],s=Object(n.useCallback)((function(){u(!l)}),[l]);return r.a.createElement(r.a.Fragment,null,r.a.createElement("h2",{className:"form__title"},t?"Edit":"Add"," medicine item ",l?"1":"2","/2"),r.a.createElement(U.a,{initialValues:t||B.initialValues,validationSchema:B.validationSchema,onSubmit:function(e){return c(e)},enableReinitialize:!0},(function(e){var n=e.handleChange,c=e.handleSubmit,i=e.values,o=e.errors;return r.a.createElement("form",{onSubmit:c},l?r.a.createElement(q,{errors:o,values:i,handleChange:n}):r.a.createElement(G,{errors:o,values:i,handleChange:n}),r.a.createElement("div",{className:"form__controls"},r.a.createElement(d,{type:"button",text:"Cancel",variant:"secondary",onClick:a}),r.a.createElement(d,{type:"button",text:l?"Next":"Prev",variant:"secondary",onClick:s}),r.a.createElement(d,{type:"submit",text:t?"Edit":"Create",variant:"secondary"})))})))}),J=function(e){var t=e.children,a=e.selector,r=Object(n.useRef)(),i=Object(n.useState)(!1),o=Object(E.a)(i,2),l=o[0],u=o[1];return Object(n.useEffect)((function(){r.current=document.querySelector(a),u(!0)}),[a]),l?Object(c.createPortal)(t,r.current):null},X=(a(125),function(){var e=Object(S.c)((function(e){return e.modalReducer.isShown}));return r.a.createElement(r.a.Fragment,null,e&&r.a.createElement(J,{selector:"#portal"},r.a.createElement("div",{className:"modal__overlay"},r.a.createElement("div",{className:"modal"},r.a.createElement("div",{className:"modal__body"},r.a.createElement(K,null))))))}),Z=(a(126),function(){var e=Object(S.b)();return r.a.createElement("button",{className:"plus",onClick:function(){return e({type:g.ITEM})}})}),$=(a(127),function(){return r.a.createElement("div",null,r.a.createElement(_,null),r.a.createElement(k,null),r.a.createElement(X,null),r.a.createElement(Z,null))}),ee=a(5),te=a.n(ee),ae=a(94),ne={initialValues:{email:"",password:""},validationSchema:W.b({email:W.c().required("Required").email("Please enter a valid email address"),password:W.c().required("Required").min(6,"Password must be at least with 6 characters")})},re=(a(129),Object(l.g)((function(e){var t=e.history,a=Object(n.useCallback)(function(){var e=Object(ae.a)(te.a.mark((function e(a){return te.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,f.auth().signInWithEmailAndPassword(a.email,a.password);case 3:t.push("/"),e.next=9;break;case 6:e.prev=6,e.t0=e.catch(0),alert(e.t0);case 9:case"end":return e.stop()}}),e,null,[[0,6]])})));return function(t){return e.apply(this,arguments)}}(),[t]);return r.a.createElement("div",{className:"sign-in"},r.a.createElement("h1",{className:"sign-in__title"},"Please Sign In"),r.a.createElement(U.a,{initialValues:ne.initialValues,validationSchema:ne.validationSchema,onSubmit:function(e){return a(e)}},(function(e){var t=e.handleChange,a=e.handleSubmit,n=e.values,c=e.errors;return r.a.createElement("form",{onSubmit:a,className:"sign-in__form"},r.a.createElement("div",{className:"form__item"},r.a.createElement(F,{type:"text",name:"email",placeholder:"Email",id:"email",text:"Email",onChange:t,value:n.email,error:c.email})),r.a.createElement("div",{className:"form__item"},r.a.createElement(F,{type:"password",name:"password",placeholder:"Password",id:"password",text:"Password",onChange:t,value:n.password,error:c.password})),r.a.createElement(d,{type:"submit",text:"Submit",variant:"secondary",className:"sign-in__btn"}))})))}))),ce=(a(131),function(){return Object(n.useContext)(h).currentUser?r.a.createElement(l.a,{to:"/"}):r.a.createElement(re,null)}),ie="/firebase-react-redux-crud/",oe="/firebase-react-redux-crud/signin",le=(a(132),function(){return r.a.createElement("div",{className:"error404"},r.a.createElement("div",{className:"error404__wrapper"},r.a.createElement("h1",{className:"error404__title"},"404"),r.a.createElement(o.b,{className:"error404__btn",to:ie},"Home")))}),ue=a(97),se=function(e){var t=e.component,a=Object(ue.a)(e,["component"]),c=Object(n.useContext)(h).currentUser;return r.a.createElement(l.b,Object.assign({},a,{render:function(e){return c?r.a.createElement(t,e):r.a.createElement(l.a,{to:oe})}}))},me=function(){return r.a.createElement(O,null,r.a.createElement(o.a,null,r.a.createElement(l.d,null,r.a.createElement(se,{exact:!0,path:ie,component:$}),r.a.createElement(l.b,{exact:!0,path:oe,component:ce}),r.a.createElement(l.b,{component:le}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var de=a(27),Ee=a(96),pe=a(95),fe=a(7),be=a(8),ve=function(){return new Promise((function(e,t){b.once("value",(function(t){var a=t.val(),n=[];for(var r in a)n.push(Object(be.a)({id:r},a[r]));e(n)}))}))},he=function(e){return b.push(e).then((function(t){return Object(be.a)({id:t.getKey()},e)})).catch((function(e){return alert(e)}))},Oe=function(e){return b.child(e).remove().then((function(){return e})).catch((function(e){return alert(e)}))},_e=function(e){return b.child(e.id).update(e).then((function(){return Object(be.a)({id:e.id},e)})).catch((function(e){return alert(e)}))},Se=te.a.mark(Ae),je=te.a.mark(De),xe=te.a.mark(ke),Te=te.a.mark(Ue),Ce=te.a.mark(Le),ye=te.a.mark(Pe),ge=te.a.mark(Fe),we=te.a.mark(qe),Ie=te.a.mark(Qe),Re=te.a.mark(Ge),Me=te.a.mark(We),Ne=te.a.mark(Ve);function Ae(){var e;return te.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,Object(fe.c)({type:j.REQUESTED});case 3:return t.next=5,Object(fe.b)(ve);case 5:return e=t.sent,t.next=8,Object(fe.c)({type:j.REQUESTED_SUCCESS,payload:e});case 8:t.next=14;break;case 10:return t.prev=10,t.t0=t.catch(0),t.next=14,Object(fe.c)({type:j.REQUESTED_ERROR});case 14:case"end":return t.stop()}}),Se,null,[[0,10]])}function De(){return te.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(fe.d)("DATA_FETCH",Ae);case 2:case"end":return e.stop()}}),je)}function ke(e){var t,a;return te.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t=e.payload,n.next=3,Object(fe.b)(he,t);case 3:return a=n.sent,n.next=6,Object(fe.c)(w(a));case 6:return n.next=8,Object(fe.c)({type:"TOGGLE_MODAL"});case 8:case"end":return n.stop()}}),xe)}function Ue(){return te.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(fe.e)("ADD_ITEM",ke);case 2:case"end":return e.stop()}}),Te)}function Le(e){var t;return te.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return t=e.payload,a.next=3,Object(fe.c)(M(t));case 3:return a.next=5,Object(fe.c)({type:"TOGGLE_MODAL"});case 5:case"end":return a.stop()}}),Ce)}function Pe(){return te.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(fe.e)("EDIT_ITEM_START",Le);case 2:case"end":return e.stop()}}),ye)}function Fe(e){var t,a;return te.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t=e.payload,n.next=3,Object(fe.b)(Oe,t);case 3:return a=n.sent,n.next=6,Object(fe.c)(I(a));case 6:case"end":return n.stop()}}),ge)}function qe(){return te.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(fe.e)("DELETE_ITEM",Fe);case 2:case"end":return e.stop()}}),we)}function Qe(e){var t,a;return te.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t=e.payload,n.next=3,Object(fe.b)(_e,t);case 3:return a=n.sent,n.next=6,Object(fe.c)(R(a));case 6:return n.next=8,Object(fe.c)(N());case 8:return n.next=10,Object(fe.c)({type:"TOGGLE_MODAL"});case 10:case"end":return n.stop()}}),Ie)}function Ge(){return te.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(fe.e)("UPDATE_ITEM",Qe);case 2:case"end":return e.stop()}}),Re)}function We(){return te.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(fe.c)(N());case 2:return e.next=4,Object(fe.c)({type:"TOGGLE_MODAL"});case 4:case"end":return e.stop()}}),Me)}function Ve(){return te.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(fe.e)("ITEM_CREATE",We);case 2:case"end":return e.stop()}}),Ne)}var ze=te.a.mark(He);function He(){return te.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(fe.a)([De(),Ue(),Pe(),qe(),Ge(),Ve()]);case 2:case"end":return e.stop()}}),ze)}var Ye=He,Be=a(62),Ke={medicalList:[],loading:!1,editItem:null},Je=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ke,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case j.REQUESTED:return Object(be.a)(Object(be.a)({},e),{},{loading:!0});case j.REQUESTED_SUCCESS:return Object(be.a)(Object(be.a)({},e),{},{medicalList:Object(Be.a)(t.payload),loading:!1});case j.REQUESTED_ERROR:return Object(be.a)(Object(be.a)({},e),{},{loading:!1});case x.ITEM_SUCCESS:return Object(be.a)(Object(be.a)({},e),{},{medicalList:[].concat(Object(Be.a)(e.medicalList),[t.payload])});case T.ITEM_SUCCESS:return Object(be.a)(Object(be.a)({},e),{},{medicalList:Object(Be.a)(e.medicalList.filter((function(e){return e.id!==t.payload})))});case y.ITEM:return Object(be.a)(Object(be.a)({},e),{},{editItem:e.medicalList.filter((function(e){return e.id===t.payload}))[0]});case y.ITEM_CLEAR:return Object(be.a)(Object(be.a)({},e),{},{editItem:null});case C.ITEM_SUCCESS:return Object(be.a)(Object(be.a)({},e),{},{medicalList:Object(Be.a)(e.medicalList.map((function(e){return e.id===t.payload.id?t.payload:e})))});default:return e}},Xe={isShown:!1},Ze=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Xe,t=arguments.length>1?arguments[1]:void 0;return"TOGGLE_MODAL"===t.type?Object(be.a)(Object(be.a)({},e),{},{isShown:!e.isShown}):e},$e=Object(de.combineReducers)({medicalReducer:Je,modalReducer:Ze}),et=Object(Ee.a)(),tt=et.run,at=Object(de.createStore)($e,Object(pe.composeWithDevTools)(Object(de.applyMiddleware)(et)));tt(Ye);var nt=at;i.a.render(r.a.createElement(n.StrictMode,null,r.a.createElement(S.a,{store:nt},r.a.createElement(me,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},98:function(e,t,a){e.exports=a(133)}},[[98,1,2]]]);
//# sourceMappingURL=main.9a817b3f.chunk.js.map