(function(t){function e(e){for(var n,i,s=e[0],l=e[1],c=e[2],v=0,p=[];v<s.length;v++)i=s[v],o[i]&&p.push(o[i][0]),o[i]=0;for(n in l)Object.prototype.hasOwnProperty.call(l,n)&&(t[n]=l[n]);u&&u(e);while(p.length)p.shift()();return a.push.apply(a,c||[]),r()}function r(){for(var t,e=0;e<a.length;e++){for(var r=a[e],n=!0,s=1;s<r.length;s++){var l=r[s];0!==o[l]&&(n=!1)}n&&(a.splice(e--,1),t=i(i.s=r[0]))}return t}var n={},o={app:0},a=[];function i(e){if(n[e])return n[e].exports;var r=n[e]={i:e,l:!1,exports:{}};return t[e].call(r.exports,r,r.exports,i),r.l=!0,r.exports}i.m=t,i.c=n,i.d=function(t,e,r){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(i.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)i.d(r,n,function(e){return t[e]}.bind(null,n));return r},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],l=s.push.bind(s);s.push=e,s=s.slice();for(var c=0;c<s.length;c++)e(s[c]);var u=l;a.push([0,"chunk-vendors"]),r()})({0:function(t,e,r){t.exports=r("56d7")},"08f0":function(t,e){},"1a61":function(t,e,r){"use strict";var n=r("31f3"),o=r.n(n);o.a},"1d14":function(t,e,r){},2401:function(t,e,r){"use strict";var n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{attrs:{id:"main"}},[r("div",{staticClass:"top-bar"},[t._m(0),t._m(1),r("div",{attrs:{id:"nav"}},[r("router-link",{attrs:{to:"/"}},[t._v("Home")]),t._v(" |\n      "),r("router-link",{attrs:{to:"/saved"}},[t._v("Saved")]),t._v(" |\n      "),r("router-link",{attrs:{to:"/myrecipes"}},[t._v("My Recipes")]),t._v(" |\n      "),r("router-link",{attrs:{to:"/profile"}},[t._v("Profile")]),t._v(" |\n      "),r("router-link",{attrs:{to:"/create"}},[t._v("New Recipe")])],1)]),r("router-view")],1)},o=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("h2",[t._v("Some Cooking Site")])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("input",{staticClass:"search-bar",attrs:{placeholder:"Seach for Recipes..."}})])}];r.d(e,"a",function(){return n}),r.d(e,"b",function(){return o})},2856:function(t,e,r){},"31f3":function(t,e,r){},"4e93":function(t,e,r){},"56d7":function(t,e,r){"use strict";r.r(e);r("cadf"),r("551c"),r("097d");var n=r("2b0e"),o=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{attrs:{id:"app"}},[r("router-view")],1)},a=[],i=(r("5c0b"),r("2877")),s={},l=Object(i["a"])(s,o,a,!1,null,null,null);l.options.__file="App.vue";var c=l.exports,u=r("8c4f"),v=r("cd56"),p=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"home"},[r("div",{staticClass:"grid-container"},[r("div",{staticClass:"grid"},[r("router-link",{staticClass:"recipe-box",attrs:{to:"cook",tag:"div"}}),r("router-link",{staticClass:"recipe-box",attrs:{to:"cook",tag:"div"}}),r("router-link",{staticClass:"recipe-box",attrs:{to:"cook",tag:"div"}}),r("router-link",{staticClass:"recipe-box",attrs:{to:"cook",tag:"div"}}),r("router-link",{staticClass:"recipe-box",attrs:{to:"cook",tag:"div"}}),r("router-link",{staticClass:"recipe-box",attrs:{to:"cook",tag:"div"}}),r("router-link",{staticClass:"recipe-box",attrs:{to:"cook",tag:"div"}}),r("router-link",{staticClass:"recipe-box",attrs:{to:"cook",tag:"div"}}),r("router-link",{staticClass:"recipe-box",attrs:{to:"cook",tag:"div"}}),r("router-link",{staticClass:"recipe-box",attrs:{to:"cook",tag:"div"}}),r("router-link",{staticClass:"recipe-box",attrs:{to:"cook",tag:"div"}})],1)])])},f=[],d=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"hello"},[r("h1",[t._v(t._s(t.msg))]),t._m(0),r("h3",[t._v("Installed CLI Plugins")]),t._m(1),r("h3",[t._v("Essential Links")]),t._m(2),r("h3",[t._v("Ecosystem")]),t._m(3)])},_=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("p",[t._v("\n    For guide and recipes on how to configure / customize this project,"),r("br"),t._v("\n    check out the\n    "),r("a",{attrs:{href:"https://cli.vuejs.org",target:"_blank",rel:"noopener"}},[t._v("vue-cli documentation")]),t._v(".\n  ")])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("ul",[r("li",[r("a",{attrs:{href:"https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-babel",target:"_blank",rel:"noopener"}},[t._v("babel")])]),r("li",[r("a",{attrs:{href:"https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-eslint",target:"_blank",rel:"noopener"}},[t._v("eslint")])])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("ul",[r("li",[r("a",{attrs:{href:"https://vuejs.org",target:"_blank",rel:"noopener"}},[t._v("Core Docs")])]),r("li",[r("a",{attrs:{href:"https://forum.vuejs.org",target:"_blank",rel:"noopener"}},[t._v("Forum")])]),r("li",[r("a",{attrs:{href:"https://chat.vuejs.org",target:"_blank",rel:"noopener"}},[t._v("Community Chat")])]),r("li",[r("a",{attrs:{href:"https://twitter.com/vuejs",target:"_blank",rel:"noopener"}},[t._v("Twitter")])]),r("li",[r("a",{attrs:{href:"https://news.vuejs.org",target:"_blank",rel:"noopener"}},[t._v("News")])])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("ul",[r("li",[r("a",{attrs:{href:"https://router.vuejs.org",target:"_blank",rel:"noopener"}},[t._v("vue-router")])]),r("li",[r("a",{attrs:{href:"https://vuex.vuejs.org",target:"_blank",rel:"noopener"}},[t._v("vuex")])]),r("li",[r("a",{attrs:{href:"https://github.com/vuejs/vue-devtools#vue-devtools",target:"_blank",rel:"noopener"}},[t._v("vue-devtools")])]),r("li",[r("a",{attrs:{href:"https://vue-loader.vuejs.org",target:"_blank",rel:"noopener"}},[t._v("vue-loader")])]),r("li",[r("a",{attrs:{href:"https://github.com/vuejs/awesome-vue",target:"_blank",rel:"noopener"}},[t._v("awesome-vue")])])])}],h={name:"HelloWorld",props:{msg:String}},b=h,g=(r("7067"),Object(i["a"])(b,d,_,!1,null,"d996b772",null));g.options.__file="HelloWorld.vue";var m=g.exports,k={name:"home",components:{HelloWorld:m}},C=k,j=Object(i["a"])(C,p,f,!1,null,null,null);j.options.__file="Home.vue";var x=j.exports,E=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{attrs:{id:"saved"}})},y=[],w=void 0,O=(r("e153"),Object(i["a"])(w,E,y,!1,null,null,null));O.options.__file="Saved.vue";var $=O.exports,S=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{attrs:{id:"my-recipes"}})},P=[],M=void 0,R=(r("9bdc"),Object(i["a"])(M,S,P,!1,null,null,null));R.options.__file="MyRecipes.vue";var H=R.exports,T=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{attrs:{id:"profile"}})},W=[],I=void 0,F=(r("6346"),Object(i["a"])(I,T,W,!1,null,null,null));F.options.__file="Profile.vue";var J=F.exports,L=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},N=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"content"},[r("div",[r("input",{attrs:{placeholder:"What's this dish called?"}})]),r("div",{staticClass:"img-container"},[r("div",{staticClass:"img"})]),r("h3",[t._v("Ingredients")]),r("div",{staticClass:"ingredient-container"},[r("input",{attrs:{placeholder:"Enter an ingredient..."}}),r("input",{attrs:{placeholder:"Enter an ingredient..."}}),r("input",{attrs:{placeholder:"Enter an ingredient..."}}),r("input",{attrs:{placeholder:"Enter an ingredient..."}}),r("input",{attrs:{placeholder:"Enter an ingredient..."}})]),r("button",[t._v("save as private recipe")]),r("button",[t._v("publish recipe")])])}],z={},A=Object(i["a"])(z,L,N,!1,null,null,null);A.options.__file="CreateRecipe.vue";var D=A.exports;r("cf9b");n["a"].use(u["a"]);var q=new u["a"]({routes:[{path:"/",name:"main",component:v["default"],children:[{path:"",component:x},{path:"/saved",component:$},{path:"/myrecipes",component:H},{path:"/profile",component:J},{path:"/create",component:D}]},{path:"/cook",name:"cook",component:function(){return Promise.resolve().then(r.bind(null,"cf9b"))}}]});n["a"].config.productionTip=!1,new n["a"]({router:q,render:function(t){return t(c)}}).$mount("#app")},"5c0b":function(t,e,r){"use strict";var n=r("2856"),o=r.n(n);o.a},6346:function(t,e,r){"use strict";var n=r("1d14"),o=r.n(n);o.a},7067:function(t,e,r){"use strict";var n=r("d3c7"),o=r.n(n);o.a},"7dc7":function(t,e,r){},8462:function(t,e,r){},"9bdc":function(t,e,r){"use strict";var n=r("4e93"),o=r.n(n);o.a},a006:function(t,e,r){"use strict";var n=r("8462"),o=r.n(n);o.a},cd56:function(t,e,r){"use strict";var n=r("2401"),o=r("eca4"),a=(r("a006"),r("2877")),i=Object(a["a"])(o["default"],n["a"],n["b"],!1,null,null,null);i.options.__file="Main.vue",e["default"]=i.exports},cf9b:function(t,e,r){"use strict";r.r(e);var n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{attrs:{id:"cook"}},[r("div",{staticClass:"top-bar-cook"},[r("router-link",{staticClass:"back-btn",attrs:{to:"/",tag:"div"}},[r("i",{staticClass:"fas fa-chevron-left"})]),r("h2",[t._v('Preparing to Cook "Some Recipe"')])],1)])},o=[],a=(r("cadf"),r("551c"),r("097d"),void 0),i=(r("1a61"),r("2877")),s=Object(i["a"])(a,n,o,!1,null,null,null);s.options.__file="Cook.vue";e["default"]=s.exports},d3c7:function(t,e,r){},e153:function(t,e,r){"use strict";var n=r("7dc7"),o=r.n(n);o.a},eca4:function(t,e,r){"use strict";var n=r("08f0"),o=r.n(n);e["default"]=o.a}});
//# sourceMappingURL=app.3275e05d.js.map