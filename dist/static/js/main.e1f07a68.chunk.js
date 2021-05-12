(this.webpackJsonpaqindex=this.webpackJsonpaqindex||[]).push([[0],{13:function(e){e.exports=JSON.parse('[{"from":0,"to":50,"AQI":"0-50","Air_pollution_level":"Noice","Health_Implications":"Air quality is considered satisfactory  and air pollution poses little or no risk","PM25":"None","colorbg":"#63C889","dark_color":"#009690","mid_color":"#2FB091"},{"from":51,"to":100,"AQI":"51-100","Air_pollution_level":"Moderate","Health_Implications":"Air quality is acceptable; however  for some pollutants there may be a moderate health concern for a very small number of people who are unusually sensitive to air pollution.","PM25":"Active children and adults, and people with respiratory disease, such as asthma, should limit prolonged outdoor exertion.","colorbg":"#33B374","dark_color":"#006C7C","mid_color":"#009086"},{"from":101,"to":150,"AQI":"101-150","Air_pollution_level":"Unhealthy for Sensitive Groups","Health_Implications":"Members of sensitive groups may experience health effects. The general public is not likely to be affected. Active children and adults","PM25":"Active children and adults, and people with respiratory disease, such as asthma, should limit prolonged outdoor exertion.","colorbg":"#F99831","dark_color":"#A04F00","mid_color":"#CC7300"},{"from":151,"to":200,"AQI":"151-200","Air_pollution_level":"Unhealthy","Health_Implications":"Everyone may begin to experience health effects; members of sensitive groups may experience more serious health effects Active children and adults","PM25":"Active children and adults, and people with respiratory disease, such as asthma, should avoid prolonged outdoor exertion; everyone else, especially children, should limit prolonged outdoor exertion","colorbg":"#CE3D32","dark_color":"#822218","mid_color":"#C03728"},{"from":201,"to":300,"AQI":"201-300","Air_pollution_level":"Very Unhealthy","Health_Implications":"Health warnings of emergency conditions. The entire population is more likely to be affected. Active children and adults","PM25":"Active children and adults, and people with respiratory disease, such as asthma, should avoid all outdoor exertion; everyone else, especially children, should limit outdoor exertion.","colorbg":"#6E5098","dark_color":"#3D2930","mid_color":"#3E2960"},{"from":301,"to":1000,"AQI":"300+","Air_pollution_level":"Hazardous","Health_Implications":"Health alert: everyone may experience more serious health effects Everyone should avoid all outdoor exertion","PM25":"Everyone should avoid all outdoor exertion","colorbg":"#7F2422","dark_color":"#460000","mid_color":"#500000"}]')},20:function(e,o,t){},21:function(e,o,t){},40:function(e,o,t){},42:function(e,o,t){"use strict";t.r(o);var i=t(2),n=t.n(i),a=t(14),l=t.n(a),r=(t(20),t(21),t(4)),c=t(15),s=t.n(c),d=(t(40),t(13),t(0)),u=function(){var e=Object(i.useState)({alldata:null,city:"turn on location and reload!",aqi:"AQI",location:null,Airlevel:"Air Quality",alert:"Health Implications",alert_tip:"Cautionary Statement (for PM2.5)",color_bg:"white",dark_color:"white",mid_color:"white"}),o=Object(r.a)(e,2),n=o[0],a=o[1],l=Object(i.useState)({latitude:null,longitude:null,status:null}),c=Object(r.a)(l,2)[1],u=function(){navigator.geolocation?navigator.geolocation.getCurrentPosition((function(e){var o="https://api.waqi.info/feed/geo:".concat(e.coords.latitude,";").concat(e.coords.longitude,"/?token=").concat("ed34834cd666ba4bbd44a9c7d6cbc51b371fa443");s.a.get(o).then((function(e){var o=e.data.data,i=function(e){var o=t(13);for(var i in o)if(o[i].from<=e&&o[i].to>=e)return o[i]}(o.aqi);return document.body.style.background=i.colorbg,{alldata:o,city:o.city.name,aqi:o.aqi,location_co:o.city.geo,acctime:o.time.s,Airlevel:i.Air_pollution_level,alert:i.Health_Implications,alert_tip:i.PM25,color_bg:i.colorbg,dark_color:i.dark_color,mid_color:i.mid_color}})).then((function(o){a(o),c({latitude:e.coords.latitude,longitude:e.coords.longitude,status:!0})})).catch((function(e){}))})):c({latitude:null,longitude:null,status:!1})};return Object(i.useEffect)((function(){u()}),[]),Object(d.jsxs)("div",{className:"container center",children:[Object(d.jsx)("div",{className:"location-name center",children:Object(d.jsxs)("div",{className:"city-name",children:[Object(d.jsx)("i",{className:"material-icons",children:"near_me"})," ",n.city]})}),Object(d.jsx)("div",{className:"aqindex",children:n.aqi}),Object(d.jsx)("div",{className:"air_p_level",children:n.Airlevel}),Object(d.jsx)("div",{className:"line center",style:{backgroundColor:n.mid_color}}),Object(d.jsxs)("div",{className:"row",children:[Object(d.jsx)("div",{className:"col s4",children:Object(d.jsx)("i",{className:" material-icons icons",style:{color:n.dark_color},children:"warning"})}),Object(d.jsx)("div",{className:"col s8",children:Object(d.jsx)("p",{className:"flow-text tips",children:n.alert})})]}),Object(d.jsxs)("div",{className:"row",children:[Object(d.jsx)("div",{className:"col s4",children:Object(d.jsx)("i",{className:"rotate material-icons icons",style:{color:n.dark_color},children:"wb_incandescent"})}),Object(d.jsx)("div",{className:"col s8",children:Object(d.jsx)("p",{className:"flow-text tips",children:n.alert_tip})})]}),Object(d.jsx)("div",{className:"line center",style:{backgroundColor:n.mid_color}}),Object(d.jsxs)("div",{className:"time_iso",children:["Last Updated ",new Date(n.acctime).toDateString()," ",new Date(n.acctime).toLocaleTimeString()]})]})};var h=function(){return Object(d.jsx)("div",{className:"App",children:Object(d.jsx)("div",{className:"content",children:Object(d.jsx)(u,{})})})},m=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function p(e,o){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var t=e.installing;null!=t&&(t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://cra.link/PWA."),o&&o.onUpdate&&o.onUpdate(e)):(console.log("Content is cached for offline use."),o&&o.onSuccess&&o.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}l.a.render(Object(d.jsx)(n.a.StrictMode,{children:Object(d.jsx)(h,{})}),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var o="".concat("","/service-worker.js");m?(!function(e,o){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(t){var i=t.headers.get("content-type");404===t.status||null!=i&&-1===i.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):p(e,o)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(o,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://cra.link/PWA")}))):p(o,e)}))}}()}},[[42,1,2]]]);
//# sourceMappingURL=main.e1f07a68.chunk.js.map