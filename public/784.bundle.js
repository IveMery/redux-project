(self.webpackChunkredux_project=self.webpackChunkredux_project||[]).push([[784],{3784:function(n,e,t){"use strict";t.r(e),t.d(e,{default:function(){return x}});var r=t(7294),o=t(3379),a=t.n(o),s=t(5606),i=(a()(s.Z,{insert:"head",singleton:!1}),s.Z.locals,t(518)),c=t(3516),l=(a()(c.Z,{insert:"head",singleton:!1}),c.Z.locals,t.p,function(){}),f=t(7033),u=t(9669),p=t.n(u);function C(n,e){(null==e||e>n.length)&&(e=n.length);for(var t=0,r=new Array(e);t<e;t++)r[t]=n[t];return r}function m(n,e,t,r,o,a,s){try{var i=n[a](s),c=i.value}catch(n){return void t(n)}i.done?e(c):Promise.resolve(c).then(r,o)}function d(n){return function(){var e=this,t=arguments;return new Promise((function(r,o){var a=n.apply(e,t);function s(n){m(a,r,o,s,i,"next",n)}function i(n){m(a,r,o,s,i,"throw",n)}s(void 0)}))}}function h(n,e){return function(n){if(Array.isArray(n))return n}(n)||function(n,e){var t=null==n?null:"undefined"!=typeof Symbol&&n[Symbol.iterator]||n["@@iterator"];if(null!=t){var r,o,a=[],s=!0,i=!1;try{for(t=t.call(n);!(s=(r=t.next()).done)&&(a.push(r.value),!e||a.length!==e);s=!0);}catch(n){i=!0,o=n}finally{try{s||null==t.return||t.return()}finally{if(i)throw o}}return a}}(n,e)||function(n,e){if(n){if("string"==typeof n)return A(n,e);var t=Object.prototype.toString.call(n).slice(8,-1);return"Object"===t&&n.constructor&&(t=n.constructor.name),"Map"===t||"Set"===t?Array.from(n):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?A(n,e):void 0}}(n,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function A(n,e){(null==e||e>n.length)&&(e=n.length);for(var t=0,r=new Array(e);t<e;t++)r[t]=n[t];return r}var y=function(){var n=function(n,e){var t,o,a=(t=(0,r.useState)((function(){try{var e=window.localStorage.getItem(n);return e?JSON.parse(e):""}catch(n){return""}})),o=2,function(n){if(Array.isArray(n))return n}(t)||function(n,e){var t=null==n?null:"undefined"!=typeof Symbol&&n[Symbol.iterator]||n["@@iterator"];if(null!=t){var r,o,a=[],s=!0,i=!1;try{for(t=t.call(n);!(s=(r=t.next()).done)&&(a.push(r.value),!e||a.length!==e);s=!0);}catch(n){i=!0,o=n}finally{try{s||null==t.return||t.return()}finally{if(i)throw o}}return a}}(t,o)||function(n,e){if(n){if("string"==typeof n)return C(n,e);var t=Object.prototype.toString.call(n).slice(8,-1);return"Object"===t&&n.constructor&&(t=n.constructor.name),"Map"===t||"Set"===t?Array.from(n):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?C(n,e):void 0}}(t,o)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),s=a[0],i=a[1];return[s,function(e){try{i(e),window.localStorage.setItem(n,JSON.stringify(e))}catch(n){console.log(n)}}]}("characters"),e=h(n,2),t=e[0],o=e[1],a=h((0,r.useState)(!0),2),s=a[0],i=a[1],c=h((0,r.useState)(!1),2),l=c[0],f=c[1];function u(){return(u=d(regeneratorRuntime.mark((function n(){var e,t;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,p().get("https://rickandmortyapi.com/api/character");case 3:e=n.sent,t=e.data.results,o(t),i(!1),console.log(t),f(!1),n.next=15;break;case 11:n.prev=11,n.t0=n.catch(0),i(!1),f(!0);case 15:case"end":return n.stop()}}),n,null,[[0,11]])})))).apply(this,arguments)}return{characters:t,loading:s,error:l,getCharacters:function(){return u.apply(this,arguments)}}},g=function(){var n=y(),e=n.characters,t=n.loading,o=n.error,a=n.getCharacters;return(0,r.useEffect)((function(){a()}),[]),r.createElement("div",{className:"characterList"},t?r.createElement(f.Z,null):o?r.createElement(l,null):e.map((function(n){return r.createElement(i.Z,{key:n.id,data:n})})))},x=function(){return r.createElement("section",{className:"characters"},r.createElement(g,null))}},5606:function(n,e,t){"use strict";var r=t(4015),o=t.n(r),a=t(3645),s=t.n(a)()(o());s.push([n.id,"@import url(https://fonts.googleapis.com/css?family=Oswald|Source+Sans+Pro&display=swap);"]),s.push([n.id,'*{box-sizing:border-box}a:link,a:visited{color:inherit;text-decoration:none}body{margin:0;background-color:#000;color:#fff;font-family:"Source Sans Pro",sans-serif}h1,h2,h3,h3,h4,h5,h6{color:#65fafb;font-family:"Oswald",sans-serif}figure{margin:0;padding:0}section{min-height:calc(100vh - 300px)}.characterList{display:flex;justify-content:center;align-items:center;flex-wrap:wrap}\n',"",{version:3,sources:["webpack://./src/assets/styles/App.scss","webpack://./src/assets/styles/Vars.scss","webpack://./src/assets/styles/components/CharacterList.scss"],names:[],mappings:"AA2BA,EACE,qBAAsB,CACvB,iBAIC,aAAc,CACd,oBAAqB,CACtB,KAGC,QAAS,CACT,qBC7BkB,CD8BlB,UC7BmB,CD8BnB,wCCrCuC,CDsCxC,qBASC,aC5CqB,CD6CrB,+BCjD+B,CDkDhC,OAGC,QAAS,CACT,SAAU,CACX,QAGC,8BAA+B,CE3DjC,eFcE,YAAa,CACb,sBAAuB,CACvB,kBAAmB,CEdnB,cAAe",sourcesContent:["@import './Vars.scss';\n\n@mixin colCenCen {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n}\n\n@mixin flexBetCen {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n\n@mixin flexCenCen {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n@mixin flexStaSta {\n  display: flex;\n  justify-content: flex-start;\n  align-items: flex-start;\n}\n\n* {\n  box-sizing: border-box;\n}\n\na:link,\na:visited {\n  color: inherit;\n  text-decoration: none;\n}\n\nbody {\n  margin: 0;\n  background-color: $dark-color;\n  color: $light-color;\n  font-family: $text-font;\n}\n\nh1,\nh2,\nh3,\nh3,\nh4,\nh5,\nh6 {\n  color: $primary-color;\n  font-family: $title-font;\n}\n\nfigure {\n  margin: 0;\n  padding: 0;\n}\n\nsection {\n  min-height: calc(100vh - 300px);\n}\n","@import url(https://fonts.googleapis.com/css?family=Oswald|Source+Sans+Pro&display=swap);\n\n//Fonts\n$title-font: 'Oswald', sans-serif;\n$text-font: 'Source Sans Pro', sans-serif;\n\n//Colors\n$primary-color: #65fafb;\n$secondary-color: #62c241;\n$success-color: #faf76a;\n$dark-color: #000000;\n$light-color: #ffffff;\n$danger-color: #fc859e;\n","@import '../App.scss';\n\n.characterList {\n  @include flexCenCen;\n  flex-wrap: wrap;\n}"],sourceRoot:""}]),e.Z=s},3516:function(n,e,t){"use strict";var r=t(4015),o=t.n(r),a=t(3645),s=t.n(a)()(o());s.push([n.id,"@import url(https://fonts.googleapis.com/css?family=Oswald|Source+Sans+Pro&display=swap);"]),s.push([n.id,'*{box-sizing:border-box}a:link,a:visited{color:inherit;text-decoration:none}body{margin:0;background-color:#000;color:#fff;font-family:"Source Sans Pro",sans-serif}h1,h2,h3,h3,h4,h5,h6{color:#65fafb;font-family:"Oswald",sans-serif}figure{margin:0;padding:0}section{min-height:calc(100vh - 300px)}.error{display:flex;justify-content:center;align-items:center}.error-img{height:300px}.error-text{font-size:35px;font-family:"Oswald",sans-serif;color:#65fafb}\n',"",{version:3,sources:["webpack://./src/assets/styles/App.scss","webpack://./src/assets/styles/Vars.scss","webpack://./src/assets/styles/components/Error.scss"],names:[],mappings:"AA2BA,EACE,qBAAsB,CACvB,iBAIC,aAAc,CACd,oBAAqB,CACtB,KAGC,QAAS,CACT,qBC7BkB,CD8BlB,UC7BmB,CD8BnB,wCCrCuC,CDsCxC,qBASC,aC5CqB,CD6CrB,+BCjD+B,CDkDhC,OAGC,QAAS,CACT,SAAU,CACX,QAGC,8BAA+B,CE3DjC,OFcE,YAAa,CACb,sBAAuB,CACvB,kBAAmB,CEdpB,WAGC,YAAa,CACd,YAGC,cAAe,CACf,+BDT+B,CCU/B,aDNqB",sourcesContent:["@import './Vars.scss';\n\n@mixin colCenCen {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n}\n\n@mixin flexBetCen {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n\n@mixin flexCenCen {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n@mixin flexStaSta {\n  display: flex;\n  justify-content: flex-start;\n  align-items: flex-start;\n}\n\n* {\n  box-sizing: border-box;\n}\n\na:link,\na:visited {\n  color: inherit;\n  text-decoration: none;\n}\n\nbody {\n  margin: 0;\n  background-color: $dark-color;\n  color: $light-color;\n  font-family: $text-font;\n}\n\nh1,\nh2,\nh3,\nh3,\nh4,\nh5,\nh6 {\n  color: $primary-color;\n  font-family: $title-font;\n}\n\nfigure {\n  margin: 0;\n  padding: 0;\n}\n\nsection {\n  min-height: calc(100vh - 300px);\n}\n","@import url(https://fonts.googleapis.com/css?family=Oswald|Source+Sans+Pro&display=swap);\n\n//Fonts\n$title-font: 'Oswald', sans-serif;\n$text-font: 'Source Sans Pro', sans-serif;\n\n//Colors\n$primary-color: #65fafb;\n$secondary-color: #62c241;\n$success-color: #faf76a;\n$dark-color: #000000;\n$light-color: #ffffff;\n$danger-color: #fc859e;\n","@import '../App.scss';\n\n.error {\n  @include flexCenCen;\n}\n\n.error-img {\n  height: 300px;\n}\n\n.error-text {\n  font-size: 35px;\n  font-family: $title-font;\n  color: $primary-color;\n}"],sourceRoot:""}]),e.Z=s}}]);
//# sourceMappingURL=784.bundle.js.map