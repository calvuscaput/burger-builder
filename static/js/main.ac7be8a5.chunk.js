(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,function(e,t,n){"use strict";n.d(t,"a",function(){return r}),n.d(t,"n",function(){return a}),n.d(t,"p",function(){return o}),n.d(t,"f",function(){return i}),n.d(t,"l",function(){return c}),n.d(t,"j",function(){return u}),n.d(t,"k",function(){return l}),n.d(t,"m",function(){return s}),n.d(t,"h",function(){return d}),n.d(t,"i",function(){return p}),n.d(t,"g",function(){return m}),n.d(t,"d",function(){return h}),n.d(t,"e",function(){return g}),n.d(t,"b",function(){return f}),n.d(t,"c",function(){return b}),n.d(t,"o",function(){return E});var r="ADD_INGREDIENT",a="REMOVE_INGREDIENT",o="SET_INGREDIENTS",i="FETCH_INGREDIENTS_FAILED",c="PURCHASE_BURGER_SUCCESS",u="PURCHASE_BURGER_FAIL",l="PURCHASE_BURGER_START",s="PURCHASE_INIT",d="FETCH_ORDERS_START",p="FETCH_ORDERS_SUCCESS",m="FETCH_ORDERS_FAIL",h="AUTH_START",g="AUTH_SUCCESS",f="AUTH_FAIL",b="AUTH_LOGOUT",E="SET_AUTH_REDIRECT_PATH"},function(e,t,n){"use strict";n.d(t,"b",function(){return a}),n.d(t,"a",function(){return o});var r=n(19),a=function(e,t){return Object(r.a)({},e,t)},o=function(e,t){var n=!0;return t.required&&(n=""!==e.trim()&&n),t.minLength&&(n=e.length>=t.minLength&&n),t.maxLength&&(n=e.length<=t.maxLength&&n),n}},,,,,,,,,,,function(e,t,n){"use strict";var r=n(2),a=n(17),o=function(e){return{type:r.a,ingredientName:e}},i=function(e){return{type:r.n,ingredientName:e}},c=function(){return function(e){a.a.get("https://react-my-burger-2714e.firebaseio.com/ingredients.json").then(function(t){var n;e((n=t.data,{type:r.p,ingredients:n}))}).catch(function(t){e({type:r.f})})}},u=n(19),l=function(e,t){return function(n){n({type:r.k}),a.a.post("/orders.json?auth="+t,e).then(function(t){n(function(e,t){return{type:r.l,orderId:e,orderData:t}}(t.data.name,e))}).catch(function(e){n(function(e){return{type:r.j,error:e}}(e))})}},s=function(){return{type:r.m}},d=function(e,t){return function(n){n({type:r.h});var o="?auth="+e+'&orderBy="userId"&equalTo="'+t+'"';a.a.get("orders.json"+o).then(function(e){var t,a=[];for(var o in e.data)a.push(Object(u.a)({},e.data[o],{id:o}));n((t=a,{type:r.i,orders:t}))}).catch(function(e){var t;n((t=e,{type:r.g,error:t}))})}},p=n(28),m=n.n(p),h=function(e){return function(t){setTimeout(function(){t(g())},1e3*+e)}},g=function(){return localStorage.removeItem("token"),localStorage.removeItem("expirationDate"),localStorage.removeItem("userId"),{type:r.c}},f=function(e,t){return{type:r.e,idToken:e,userId:t}},b=function(e,t,n){return function(a){a({type:r.d});var o={email:e,password:t,returnSecureToken:!0},i="https://www.googleapis.com/identitytoolkit/v3/relyingparty/signupNewUser?key=AIzaSyCg6e5ju5L1qYP0WCHncnYAGCPvCIm9Xio";n||(i="https://www.googleapis.com/identitytoolkit/v3/relyingparty/verifyPassword?key=AIzaSyCg6e5ju5L1qYP0WCHncnYAGCPvCIm9Xio"),m.a.post(i,o).then(function(e){var t=new Date((new Date).getTime()+1e3*e.data.expiresIn);localStorage.setItem("token",e.data.idToken),localStorage.setItem("expirationDate",t),localStorage.setItem("userId",e.data.localId),a(f(e.data.idToken,e.data.localId)),a(h(e.data.expiresIn))}).catch(function(e){var t;a((t=e.response.data.error,{type:r.b,error:t}))})}},E=function(e){return{type:r.o,path:e}},_=function(){return function(e){var t=localStorage.getItem("token");if(t){var n=new Date(localStorage.getItem("expirationDate"));if(n<=new Date)e(g());else{var r=localStorage.getItem("userId");e(f(t,r)),e(h((n.getTime()-(new Date).getTime())/1e3))}}else e(g())}};n.d(t,"a",function(){return o}),n.d(t,"i",function(){return i}),n.d(t,"e",function(){return c}),n.d(t,"g",function(){return l}),n.d(t,"h",function(){return s}),n.d(t,"d",function(){return d}),n.d(t,"b",function(){return b}),n.d(t,"f",function(){return g}),n.d(t,"j",function(){return E}),n.d(t,"c",function(){return _})},function(e,t,n){e.exports={BreadBottom:"BurgerIngredient_BreadBottom__22hhF",BreadTop:"BurgerIngredient_BreadTop__vkYp3",Seeds1:"BurgerIngredient_Seeds1__1qllu",Seeds2:"BurgerIngredient_Seeds2__29LpQ",Meat:"BurgerIngredient_Meat__3FdPj",Cheese:"BurgerIngredient_Cheese__2wDdH",Salad:"BurgerIngredient_Salad__5ZYPv",Bacon:"BurgerIngredient_Bacon__3qAFf"}},,function(e,t,n){"use strict";var r=n(28),a=n.n(r).a.create({baseURL:"https://react-my-burger-2714e.firebaseio.com/"});t.a=a},,,function(e,t,n){e.exports={SideDrawer:"SideDrawer_SideDrawer__2ZfEX",Open:"SideDrawer_Open__Nuz1y",Close:"SideDrawer_Close__Bw_Kz",Logo:"SideDrawer_Logo__z1FJx"}},,function(e,t,n){e.exports={BuildControl:"BuildControl_BuildControl__1ZDwu",Label:"BuildControl_Label__1x93s",Less:"BuildControl_Less__1U-Br",More:"BuildControl_More__3ubm5"}},,,,function(e,t,n){"use strict";var r=n(0),a=n.n(r),o=n(56),i=n.n(o);t.a=function(e){return e.show?a.a.createElement("div",{className:i.a.Backdrop,onClick:e.clicked}):null}},function(e,t,n){"use strict";var r=n(5),a=n(6),o=n(8),i=n(7),c=n(9),u=n(0),l=n.n(u),s=n(58),d=n.n(s),p=n(26),m=function(e){function t(){return Object(r.a)(this,t),Object(o.a)(this,Object(i.a)(t).apply(this,arguments))}return Object(c.a)(t,e),Object(a.a)(t,[{key:"shouldComponentUpdate",value:function(e,t){return e.show!==this.props.show||e.children!==this.props.children}},{key:"render",value:function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement(p.a,{show:this.props.show,clicked:this.props.modalClosed}),l.a.createElement("div",{className:d.a.Modal,style:{transform:this.props.show?"translateY(0)":"translateY(-100vh)",opacity:this.props.show?"1":"0"}},this.props.children))}}]),t}(u.Component);t.a=m},,function(e,t,n){e.exports={Toolbar:"Toolbar_Toolbar__3Jb5P",Logo:"Toolbar_Logo__cBWHx",DesktopOnly:"Toolbar_DesktopOnly__1GYTm"}},,function(e,t,n){"use strict";var r=n(0),a=n.n(r),o=n(37),i=n.n(o);t.a=function(e){return a.a.createElement("button",{disabled:e.disabled,className:[i.a.Button,i.a[e.btnType]].join(" "),onClick:e.clicked},e.children)}},,,,function(e,t,n){e.exports={NavigationItem:"NavigationItem_NavigationItem__2smZp",active:"NavigationItem_active__og8_f"}},function(e,t,n){e.exports={BuildControls:"BuildControls_BuildControls__3g4J8",OrderButton:"BuildControls_OrderButton__2sg1U",enable:"BuildControls_enable__KvKrS"}},function(e,t,n){e.exports={Button:"Button_Button__1o1Ku",Success:"Button_Success__2zrUa",Danger:"Button_Danger__jbMEs"}},function(e,t,n){"use strict";var r=n(0),a=n.n(r),o=n(59),i=n.n(o);t.a=function(){return a.a.createElement("div",{className:i.a.Loader})}},function(e,t,n){"use strict";var r=n(5),a=n(6),o=n(8),i=n(7),c=n(9),u=n(0),l=n.n(u),s=n(27);t.a=function(e,t){return function(n){function u(){var e,t;Object(r.a)(this,u);for(var n=arguments.length,a=new Array(n),c=0;c<n;c++)a[c]=arguments[c];return(t=Object(o.a)(this,(e=Object(i.a)(u)).call.apply(e,[this].concat(a)))).state={error:null},t.errorConfirmedHandler=function(){t.setState({error:null})},t}return Object(c.a)(u,n),Object(a.a)(u,[{key:"componentWillMount",value:function(){var e=this;this.reqInterceptor=t.interceptors.request.use(function(t){return e.setState({error:null}),t}),this.resInterceptor=t.interceptors.response.use(function(e){return e},function(t){e.setState({error:t})})}},{key:"componentWillUnmount",value:function(){t.interceptors.request.eject(this.reqInterceptor),t.interceptors.response.eject(this.resInterceptor)}},{key:"render",value:function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement(s.a,{show:this.state.error,modalClosed:this.errorConfirmedHandler},this.state.error?this.state.error.message:null),l.a.createElement(e,this.props))}}]),u}(u.Component)}},,,,,,,function(e,t,n){"use strict";var r=n(61),a=n(0),o=n.n(a),i=n(57),c=n.n(i),u=n(5),l=n(6),s=n(8),d=n(7),p=n(9),m=n(15),h=n.n(m),g=function(e){function t(){return Object(u.a)(this,t),Object(s.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=null;switch(this.props.type){case"bread-bottom":e=o.a.createElement("div",{className:h.a.BreadBottom});break;case"bread-top":e=o.a.createElement("div",{className:h.a.BreadTop},o.a.createElement("div",{className:h.a.Seeds1}),o.a.createElement("div",{className:h.a.Seeds2}));break;case"meat":e=o.a.createElement("div",{className:h.a.Meat});break;case"cheese":e=o.a.createElement("div",{className:h.a.Cheese});break;case"bacon":e=o.a.createElement("div",{className:h.a.Bacon});break;case"salad":e=o.a.createElement("div",{className:h.a.Salad});break;default:e=null}return e}}]),t}(a.Component);t.a=function(e){var t=Object.keys(e.ingredients).map(function(t){return Object(r.a)(Array(e.ingredients[t])).map(function(e,n){return o.a.createElement(g,{key:t+n,type:t})})}).reduce(function(e,t){return e.concat(t)},[]);return 0===t.length&&(t=o.a.createElement("p",null,"Please start adding Ingredients!")),o.a.createElement("div",{className:c.a.Burger},o.a.createElement(g,{type:"bread-top"}),t,o.a.createElement(g,{type:"bread-bottom"}))}},,,,,function(e,t,n){e.exports={Content:"Layout_Content__2SQv5"}},function(e,t,n){e.exports=n.p+"static/media/burger-logo.b8503d26.png"},function(e,t,n){e.exports={Logo:"Logo_Logo__ZN2m8"}},function(e,t,n){e.exports={NavigationItems:"NavigationItems_NavigationItems__1twzN"}},function(e,t,n){e.exports={DrawerToggle:"DrawerToggle_DrawerToggle__2JpGz"}},function(e,t,n){e.exports={Backdrop:"Backdrop_Backdrop__2Tgmr"}},function(e,t,n){e.exports={Burger:"Burger_Burger__43XLc"}},function(e,t,n){e.exports={Modal:"Modal_Modal__2DpJ4"}},function(e,t,n){e.exports={Loader:"Spinner_Loader__1wB1X",load4:"Spinner_load4__2Mrwl"}},,,function(e,t,n){e.exports=n(110)},,,,,,,,,,function(e,t,n){},,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),o=n(47),i=n.n(o),c=n(124),u=n(13),l=n(18),s=n(50),d=(n(72),n(5)),p=n(6),m=n(8),h=n(7),g=n(9),f=n(126),b=n(79),E=n(123),_=n(127),v=n(51),O=n.n(v),y=n(29),j=n.n(y),k=n(52),C=n.n(k),w=n(53),S=n.n(w),I=function(e){return a.a.createElement("div",{className:S.a.Logo,style:{height:e.height}},a.a.createElement("img",{src:C.a,alt:"MyBurger"}))},B=n(54),N=n.n(B),T=n(129),A=n(35),D=n.n(A),L=function(e){return a.a.createElement("li",{className:D.a.NavigationItem},a.a.createElement(T.a,{to:e.link,exact:e.exact,activeClassName:D.a.active},e.children))},R=function(e){return a.a.createElement("ul",{className:N.a.NavigationItems},a.a.createElement(L,{link:"/",exact:!0},"Burger Builder"),e.isAuthenticated?a.a.createElement(L,{link:"/orders"},"Orders"):null,e.isAuthenticated?a.a.createElement(L,{link:"/logout"},"Logout"):a.a.createElement(L,{link:"/auth"},"Authenticate"))},x=n(55),P=n.n(x),H=function(e){return a.a.createElement("div",{className:P.a.DrawerToggle,onClick:e.clicked},a.a.createElement("div",null),a.a.createElement("div",null),a.a.createElement("div",null))},U=function(e){return a.a.createElement("header",{className:j.a.Toolbar},a.a.createElement(H,{clicked:e.drawerToggleClicked}),a.a.createElement("div",{className:j.a.Logo},a.a.createElement(I,null)),a.a.createElement("nav",{className:j.a.DesktopOnly},a.a.createElement(R,{isAuthenticated:e.isAuth})))},F=n(20),M=n.n(F),G=n(26),q=function(e){var t=[M.a.SideDrawer,M.a.Close];return e.open&&(t=[M.a.SideDrawer,M.a.Open]),a.a.createElement(a.a.Fragment,null,a.a.createElement(G.a,{show:e.open,clicked:e.closed}),a.a.createElement("div",{className:t.join(" "),onClick:e.closed},a.a.createElement("div",{className:M.a.Logo},a.a.createElement(I,null)),a.a.createElement("nav",null,a.a.createElement(R,{isAuthenticated:e.isAuth}))))},Y=function(e){function t(){var e,n;Object(d.a)(this,t);for(var r=arguments.length,a=new Array(r),o=0;o<r;o++)a[o]=arguments[o];return(n=Object(m.a)(this,(e=Object(h.a)(t)).call.apply(e,[this].concat(a)))).state={showSideDrawer:!1},n.sideDrawerClosedHandler=function(){n.setState({showSideDrawer:!1})},n.sideDrawerTogglehandler=function(){n.setState(function(e){return{showSideDrawer:!e.showSideDrawer}})},n}return Object(g.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){return a.a.createElement(a.a.Fragment,null,a.a.createElement(U,{isAuth:this.props.isAuthenticated,drawerToggleClicked:this.sideDrawerTogglehandler}),a.a.createElement(q,{isAuth:this.props.isAuthenticated,open:this.state.showSideDrawer,closed:this.sideDrawerClosedHandler}),a.a.createElement("main",{className:O.a.Content},this.props.children))}}]),t}(r.Component),z=Object(u.b)(function(e){return{isAuthenticated:null!==e.auth.token}})(Y),W=n(19),J=n(46),X=n(36),Z=n.n(X),K=n(22),Q=n.n(K),V=function(e){return a.a.createElement("div",{className:Q.a.BuildControl},a.a.createElement("div",{className:Q.a.Label},e.label),a.a.createElement("button",{className:Q.a.Less,onClick:e.removed,disabled:e.disabled},"Less"),a.a.createElement("button",{className:Q.a.More,onClick:e.added},"More"))},$=[{label:"Salad",type:"salad"},{label:"Bacon",type:"bacon"},{label:"Cheese",type:"cheese"},{label:"Meat",type:"meat"}],ee=function(e){return a.a.createElement("div",{className:Z.a.BuildControls},a.a.createElement("p",null,"Current Price: ",a.a.createElement("strong",null,e.price.toFixed(2))),$.map(function(t){return a.a.createElement(V,{key:t.label,label:t.label,added:function(){return e.ingredientAdded(t.type)},removed:function(){return e.ingredientRemoved(t.type)},disabled:e.disabled[t.type]})}),a.a.createElement("button",{className:Z.a.OrderButton,disabled:!e.purchasable,onClick:e.ordered},e.isAuth?"ORDER NOW":"SIGN UP TO ORDER"))},te=n(27),ne=n(31),re=function(e){function t(){return Object(d.a)(this,t),Object(m.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(g.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){var e=this,t=Object.keys(this.props.ingredients).map(function(t){return a.a.createElement("li",{key:t},a.a.createElement("span",{style:{textTransform:"capitalize"}},t),": ",e.props.ingredients[t])});return a.a.createElement(a.a.Fragment,null,a.a.createElement("h3",null,"Your Order"),a.a.createElement("p",null,"A delicious burger with the following ingredients:"),a.a.createElement("ul",null,t),a.a.createElement("p",null,a.a.createElement("strong",null,"Total Price: ",this.props.price.toFixed(2))),a.a.createElement("p",null,"Continue to Checkout?"),a.a.createElement(ne.a,{btnType:"Danger",clicked:this.props.purchaseCanceled},"CANCEL"),a.a.createElement(ne.a,{btnType:"Success",clicked:this.props.purchaseContinued},"CONTINUE"))}}]),t}(r.Component),ae=n(38),oe=n(39),ie=n(14),ce=n(17),ue=function(e){function t(){var e,n;Object(d.a)(this,t);for(var r=arguments.length,a=new Array(r),o=0;o<r;o++)a[o]=arguments[o];return(n=Object(m.a)(this,(e=Object(h.a)(t)).call.apply(e,[this].concat(a)))).state={purchasing:!1},n.purchaseHandler=function(){n.props.isAuthenticated?n.setState({purchasing:!0}):(n.props.onSetAuthRedirectPath("/checkout"),n.props.history.push("./auth"))},n.purchaseCancelHandler=function(){n.setState({purchasing:!1})},n.purchaseContinueHandler=function(){n.props.onInitPurchase(),n.props.history.push("/checkout")},n}return Object(g.a)(t,e),Object(p.a)(t,[{key:"componentDidMount",value:function(){this.props.onInitIngredients()}},{key:"updatePurchaseState",value:function(e){return Object.keys(e).map(function(t){return e[t]}).reduce(function(e,t){return e+t},0)>0}},{key:"render",value:function(){var e=Object(W.a)({},this.props.ings);for(var t in e)e[t]=e[t]<=0;var n=null,r=this.props.error?a.a.createElement("p",null,"Ingredients can't be loaded"):a.a.createElement(ae.a,null);return this.props.ings&&(r=a.a.createElement(a.a.Fragment,null,a.a.createElement(J.a,{ingredients:this.props.ings}),a.a.createElement(ee,{isAuth:this.props.isAuthenticated,price:this.props.price,ingredientAdded:this.props.onIngredientAdded,ingredientRemoved:this.props.onIngredientRemoved,disabled:e,ordered:this.purchaseHandler,purchasable:this.updatePurchaseState(this.props.ings)})),n=a.a.createElement(re,{price:this.props.price,ingredients:this.props.ings,purchaseCanceled:this.purchaseCancelHandler,purchaseContinued:this.purchaseContinueHandler})),a.a.createElement(a.a.Fragment,null,a.a.createElement(te.a,{show:this.state.purchasing,modalClosed:this.purchaseCancelHandler},n),r)}}]),t}(r.Component),le=Object(u.b)(function(e){return{ings:e.burgerBuilder.ingredients,price:e.burgerBuilder.totalPrice,error:e.burgerBuilder.error,isAuthenticated:null!==e.auth.token}},function(e){return{onIngredientAdded:function(t){return e(ie.a(t))},onIngredientRemoved:function(t){return e(ie.i(t))},onInitIngredients:function(){return e(ie.e())},onInitPurchase:function(){return e(ie.h())},onSetAuthRedirectPath:function(t){return e(ie.j(t))}}})(Object(oe.a)(ue,ce.a)),se=function(e){function t(){return Object(d.a)(this,t),Object(m.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(g.a)(t,e),Object(p.a)(t,[{key:"componentDidMount",value:function(){this.props.onLogout()}},{key:"render",value:function(){return a.a.createElement(E.a,{to:"/"})}}]),t}(r.Component),de=Object(u.b)(null,function(e){return{onLogout:function(){return e(ie.f())}}})(se),pe=function(e){return function(t){function n(){var e,t;Object(d.a)(this,n);for(var r=arguments.length,a=new Array(r),o=0;o<r;o++)a[o]=arguments[o];return(t=Object(m.a)(this,(e=Object(h.a)(n)).call.apply(e,[this].concat(a)))).state={component:null},t}return Object(g.a)(n,t),Object(p.a)(n,[{key:"componentDidMount",value:function(){var t=this;e().then(function(e){t.setState({component:e.default})})}},{key:"render",value:function(){var e=this.state.component;return e?a.a.createElement(e,this.props):null}}]),n}(r.Component)},me=pe(function(){return n.e(1).then(n.bind(null,125))}),he=pe(function(){return n.e(2).then(n.bind(null,128))}),ge=pe(function(){return n.e(3).then(n.bind(null,122))}),fe=function(e){function t(){return Object(d.a)(this,t),Object(m.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(g.a)(t,e),Object(p.a)(t,[{key:"componentDidMount",value:function(){this.props.onTryAutoSignUp()}},{key:"render",value:function(){var e=a.a.createElement(f.a,null,a.a.createElement(b.a,{path:"/burger-builder/auth",component:ge}),a.a.createElement(b.a,{path:"/burger-builder/",exact:!0,component:le}),a.a.createElement(E.a,{to:"/burger-builder/"}));return this.props.isAuthenticated&&(e=a.a.createElement(f.a,null,a.a.createElement(b.a,{path:"/burger-builder/checkout",component:me}),a.a.createElement(b.a,{path:"/burger-builder/orders",component:he}),a.a.createElement(b.a,{path:"/burger-builder/logout",component:de}),a.a.createElement(b.a,{path:"/burger-builder/auth",component:ge}),a.a.createElement(b.a,{path:"/burger-builder/",exact:!0,component:le}),a.a.createElement(E.a,{to:"/burger-builder/"}))),a.a.createElement("div",null,a.a.createElement(z,null,e))}}]),t}(r.Component),be=Object(_.a)(Object(u.b)(function(e){return{isAuthenticated:null!==e.auth.token}},function(e){return{onTryAutoSignUp:function(){return e(ie.c())}}})(fe));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var Ee=n(21),_e=n(2),ve=n(3),Oe={ingredients:null,totalPrice:4,error:!1,building:!1},ye={salad:.5,cheese:.4,meat:1.3,bacon:.7},je=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Oe,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case _e.a:return function(e,t){var n=Object(Ee.a)({},t.ingredientName,e.ingredients[t.ingredientName]+1),r={ingredients:Object(ve.b)(e.ingredients,n),totalPrice:e.totalPrice+ye[t.ingredientName],building:!0};return Object(ve.b)(e,r)}(e,t);case _e.n:return function(e,t){var n=Object(Ee.a)({},t.ingredientName,e.ingredients[t.ingredientName]-1),r={ingredients:Object(ve.b)(e.ingredients,n),totalPrice:e.totalPrice+ye[t.ingredientName],building:!0};return Object(ve.b)(e,r)}(e,t);case _e.p:return function(e,t){return Object(ve.b)(e,{ingredients:{salad:t.ingredients.salad,bacon:t.ingredients.bacon,cheese:t.ingredients.cheese,meat:t.ingredients.meat},error:!1,totalPrice:4,building:!1})}(e,t);case _e.f:return Object(ve.b)(e,{error:!0});default:return e}},ke={orders:[],loading:!1,purchased:!1},Ce=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ke,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case _e.m:return Object(ve.b)(e,{purchased:!1});case _e.k:return Object(ve.b)(e,{loading:!0});case _e.l:return function(e,t){var n=Object(ve.b)(t.orderData,{id:t.orderId});return Object(ve.b)(e,{loading:!1,orders:e.orders.concat(n),purchased:!0})}(e,t);case _e.j:return Object(ve.b)(e,{loading:!1});case _e.h:return Object(ve.b)(e,{loading:!0});case _e.i:return Object(ve.b)(e,{orders:t.orders,loading:!1});case _e.g:return Object(ve.b)(e,{loading:!1});default:return e}},we={token:null,userId:null,error:null,loading:!1},Se=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:we,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case _e.d:return Object(ve.b)(e,{error:null,loading:!0});case _e.e:return function(e,t){return Object(ve.b)(e,{token:t.idToken,userId:t.userId,error:null,loading:!1,authRedirectPath:"/"})}(e,t);case _e.b:return Object(ve.b)(e,{error:t.error,loading:!1});case _e.c:return Object(ve.b)(e,{token:null,userId:null});case _e.o:return Object(ve.b)(e,{authRedirectPath:t.path});default:return e}},Ie=l.d,Be=Object(l.c)({burgerBuilder:je,order:Ce,auth:Se}),Ne=Object(l.e)(Be,Ie(Object(l.a)(s.a))),Te=a.a.createElement(u.a,{store:Ne},a.a.createElement(c.a,null,a.a.createElement(be,null)));i.a.render(Te,document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}],[[62,5,4]]]);
//# sourceMappingURL=main.ac7be8a5.chunk.js.map