(self.webpackChunkredux_project=self.webpackChunkredux_project||[]).push([[92],{9092:function(n,e,t){"use strict";t.r(e),t.d(e,{default:function(){return g}});var r=t(7294),o=t(3379),s=t.n(o),a=t(5606),i=(s()(a.Z,{insert:"head",singleton:!1}),a.Z.locals,t(518)),c=t(3516),l=(s()(c.Z,{insert:"head",singleton:!1}),c.Z.locals,t.p,function(){}),f=t(1602),u=t(9669),C=t.n(u),p=t(642);function m(n,e,t,r,o,s,a){try{var i=n[s](a),c=i.value}catch(n){return void t(n)}i.done?e(c):Promise.resolve(c).then(r,o)}function d(n){return function(){var e=this,t=arguments;return new Promise((function(r,o){var s=n.apply(e,t);function a(n){m(s,r,o,a,i,"next",n)}function i(n){m(s,r,o,a,i,"throw",n)}a(void 0)}))}}function h(n,e){return function(n){if(Array.isArray(n))return n}(n)||function(n,e){var t=null==n?null:"undefined"!=typeof Symbol&&n[Symbol.iterator]||n["@@iterator"];if(null!=t){var r,o,s=[],a=!0,i=!1;try{for(t=t.call(n);!(a=(r=t.next()).done)&&(s.push(r.value),!e||s.length!==e);a=!0);}catch(n){i=!0,o=n}finally{try{a||null==t.return||t.return()}finally{if(i)throw o}}return s}}(n,e)||function(n,e){if(n){if("string"==typeof n)return A(n,e);var t=Object.prototype.toString.call(n).slice(8,-1);return"Object"===t&&n.constructor&&(t=n.constructor.name),"Map"===t||"Set"===t?Array.from(n):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?A(n,e):void 0}}(n,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function A(n,e){(null==e||e>n.length)&&(e=n.length);for(var t=0,r=new Array(e);t<e;t++)r[t]=n[t];return r}var y=function(){var n=function(){var n=h((0,p._)("characters",""),2),e=n[0],t=n[1],o=h((0,r.useState)(!0),2),s=o[0],a=o[1],i=h((0,r.useState)(!1),2),c=i[0],l=i[1];function f(){return(f=d(regeneratorRuntime.mark((function n(){var e,r;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,C().get("https://rickandmortyapi.com/api/character");case 3:e=n.sent,r=e.data.results,t(r),a(!1),console.log(r),l(!1),n.next=15;break;case 11:n.prev=11,n.t0=n.catch(0),a(!1),l(!0);case 15:case"end":return n.stop()}}),n,null,[[0,11]])})))).apply(this,arguments)}return{characters:e,loading:s,error:c,getCharacters:function(){return f.apply(this,arguments)}}}(),e=n.characters,t=n.loading,o=n.error,s=n.getCharacters;return(0,r.useEffect)((function(){s()}),[]),r.createElement("div",{className:"characterList"},t?r.createElement(f.Z,null):o?r.createElement(l,null):e.map((function(n){return r.createElement(i.Z,{key:n.id,data:n})})))},g=function(){return r.createElement("section",{className:"characters"},r.createElement(y,null))}},5606:function(n,e,t){"use strict";var r=t(4015),o=t.n(r),s=t(3645),a=t.n(s)()(o());a.push([n.id,"@import url(https://fonts.googleapis.com/css?family=Oswald|Source+Sans+Pro&display=swap);"]),a.push([n.id,'*{box-sizing:border-box}a:link,a:visited{color:inherit;text-decoration:none}body{margin:0;background-color:#000;color:#fff;font-family:"Source Sans Pro",sans-serif}h1,h2,h3,h3,h4,h5,h6{color:#65fafb;font-family:"Oswald",sans-serif}figure{margin:0;padding:0}section{min-height:calc(100vh - 300px)}.characterList{display:flex;justify-content:center;align-items:center;flex-wrap:wrap}\n',"",{version:3,sources:["webpack://./src/assets/styles/App.scss","webpack://./src/assets/styles/Vars.scss","webpack://./src/assets/styles/components/CharacterList.scss"],names:[],mappings:"AA2BA,EACE,qBAAsB,CACvB,iBAIC,aAAc,CACd,oBAAqB,CACtB,KAGC,QAAS,CACT,qBC7BkB,CD8BlB,UC7BmB,CD8BnB,wCCrCuC,CDsCxC,qBASC,aC5CqB,CD6CrB,+BCjD+B,CDkDhC,OAGC,QAAS,CACT,SAAU,CACX,QAGC,8BAA+B,CE3DjC,eFcE,YAAa,CACb,sBAAuB,CACvB,kBAAmB,CEdnB,cAAe",sourcesContent:["@import './Vars.scss';\n\n@mixin colCenCen {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n}\n\n@mixin flexBetCen {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n\n@mixin flexCenCen {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n@mixin flexStaSta {\n  display: flex;\n  justify-content: flex-start;\n  align-items: flex-start;\n}\n\n* {\n  box-sizing: border-box;\n}\n\na:link,\na:visited {\n  color: inherit;\n  text-decoration: none;\n}\n\nbody {\n  margin: 0;\n  background-color: $dark-color;\n  color: $light-color;\n  font-family: $text-font;\n}\n\nh1,\nh2,\nh3,\nh3,\nh4,\nh5,\nh6 {\n  color: $primary-color;\n  font-family: $title-font;\n}\n\nfigure {\n  margin: 0;\n  padding: 0;\n}\n\nsection {\n  min-height: calc(100vh - 300px);\n}\n","@import url(https://fonts.googleapis.com/css?family=Oswald|Source+Sans+Pro&display=swap);\n\n//Fonts\n$title-font: 'Oswald', sans-serif;\n$text-font: 'Source Sans Pro', sans-serif;\n\n//Colors\n$primary-color: #65fafb;\n$secondary-color: #62c241;\n$success-color: #faf76a;\n$dark-color: #000000;\n$light-color: #ffffff;\n$danger-color: #fc859e;\n","@import '../App.scss';\n\n.characterList {\n  @include flexCenCen;\n  flex-wrap: wrap;\n}"],sourceRoot:""}]),e.Z=a},3516:function(n,e,t){"use strict";var r=t(4015),o=t.n(r),s=t(3645),a=t.n(s)()(o());a.push([n.id,"@import url(https://fonts.googleapis.com/css?family=Oswald|Source+Sans+Pro&display=swap);"]),a.push([n.id,'*{box-sizing:border-box}a:link,a:visited{color:inherit;text-decoration:none}body{margin:0;background-color:#000;color:#fff;font-family:"Source Sans Pro",sans-serif}h1,h2,h3,h3,h4,h5,h6{color:#65fafb;font-family:"Oswald",sans-serif}figure{margin:0;padding:0}section{min-height:calc(100vh - 300px)}.error{display:flex;justify-content:center;align-items:center}.error-img{height:300px}.error-text{font-size:35px;font-family:"Oswald",sans-serif;color:#65fafb}\n',"",{version:3,sources:["webpack://./src/assets/styles/App.scss","webpack://./src/assets/styles/Vars.scss","webpack://./src/assets/styles/components/Error.scss"],names:[],mappings:"AA2BA,EACE,qBAAsB,CACvB,iBAIC,aAAc,CACd,oBAAqB,CACtB,KAGC,QAAS,CACT,qBC7BkB,CD8BlB,UC7BmB,CD8BnB,wCCrCuC,CDsCxC,qBASC,aC5CqB,CD6CrB,+BCjD+B,CDkDhC,OAGC,QAAS,CACT,SAAU,CACX,QAGC,8BAA+B,CE3DjC,OFcE,YAAa,CACb,sBAAuB,CACvB,kBAAmB,CEdpB,WAGC,YAAa,CACd,YAGC,cAAe,CACf,+BDT+B,CCU/B,aDNqB",sourcesContent:["@import './Vars.scss';\n\n@mixin colCenCen {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n}\n\n@mixin flexBetCen {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n\n@mixin flexCenCen {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n@mixin flexStaSta {\n  display: flex;\n  justify-content: flex-start;\n  align-items: flex-start;\n}\n\n* {\n  box-sizing: border-box;\n}\n\na:link,\na:visited {\n  color: inherit;\n  text-decoration: none;\n}\n\nbody {\n  margin: 0;\n  background-color: $dark-color;\n  color: $light-color;\n  font-family: $text-font;\n}\n\nh1,\nh2,\nh3,\nh3,\nh4,\nh5,\nh6 {\n  color: $primary-color;\n  font-family: $title-font;\n}\n\nfigure {\n  margin: 0;\n  padding: 0;\n}\n\nsection {\n  min-height: calc(100vh - 300px);\n}\n","@import url(https://fonts.googleapis.com/css?family=Oswald|Source+Sans+Pro&display=swap);\n\n//Fonts\n$title-font: 'Oswald', sans-serif;\n$text-font: 'Source Sans Pro', sans-serif;\n\n//Colors\n$primary-color: #65fafb;\n$secondary-color: #62c241;\n$success-color: #faf76a;\n$dark-color: #000000;\n$light-color: #ffffff;\n$danger-color: #fc859e;\n","@import '../App.scss';\n\n.error {\n  @include flexCenCen;\n}\n\n.error-img {\n  height: 300px;\n}\n\n.error-text {\n  font-size: 35px;\n  font-family: $title-font;\n  color: $primary-color;\n}"],sourceRoot:""}]),e.Z=a}}]);
//# sourceMappingURL=92.bundle.js.map