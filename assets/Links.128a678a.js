import{T as v,D as x}from"./Drawer.59ed56d0.js";import{_ as k,r,o as e,c as s,a as t,b as p,F as c,f as d,n as g,p as y,g as f,t as h}from"./app.2222b4ef.js";const E=[{type:"\u6587\u6863",list:[{title:"Node.js",path:"https://nodejs.org/zh-cn/"},{title:"Vue.js",path:"https://staging-cn.vuejs.org/"},{title:"Sequelize",path:"https://www.sequelize.com.cn/"},{title:"Axios",path:"https://axios-http.com/"},{title:"ECharts",path:"https://echarts.apache.org/zh/index.html"}]},{type:"\u6570\u636E\u5E93",list:[{title:"MySQL",path:"https://dev.mysql.com/downloads/installer/"},{title:"MongoDB",path:"https://www.mongodb.com/try/download/community"},{title:"SQLite",path:"https://www.sqlite.org/download.html"},{title:"Redis",path:"https://redis.io/"}]},{type:"\u5DE5\u5177",list:[{title:"Docker",path:"https://www.docker.com/"},{title:"Postman",path:"https://www.postman.com/"},{title:"Everything",path:"https://www.voidtools.com/zh-cn/"}]},{type:"\u8BBE\u8BA1",list:[{title:"\u4E2D\u56FD\u8272",path:"http://zhongguose.com/"},{title:"\u514D\u8D39\u7D20\u6750\u56FE\u7247Pexels",path:"https://www.pexels.com/zh-cn/"},{title:"\u5B57\u8282\u56FE\u6807\u5E93",path:"https://iconpark.oceanengine.com/home"},{title:"\u63D2\u56FE",path:"https://undraw.co/illustrations"}]}];var b={data:E};const z={components:{TopBar:v,Drawer:x},data(){return{bookmark:b.data,isExtend:!1}},methods:{extend(){this.isExtend=!this.isExtend}}},D=o=>(y("data-v-c8489732"),o=o(),f(),o),L={class:"container"},S={class:"topBarWrap"},B=D(()=>t("div",{class:"banner"},[t("div",{class:"bannerCap"},[t("p",null,"Links")])],-1)),j={class:"linksWrap"},q={class:"list"},C=["href"];function I(o,N,V,F,a,n){const _=r("top-bar"),m=r("Drawer");return e(),s("div",L,[t("div",S,[p(_,{onExtend:n.extend},null,8,["onExtend"])]),B,t("div",j,[t("div",q,[(e(!0),s(c,null,d(a.bookmark,(l,w)=>(e(),s("dl",{key:w},[t("dt",null,h(l.type),1),(e(!0),s(c,null,d(l.list,(i,u)=>(e(),s("dd",{key:u},[t("a",{href:i.path,target:"__blank"},h(i.title),9,C)]))),128))]))),128))])]),t("div",null,[p(m,{onExtend:n.extend,class:g(a.isExtend?"drawer open":"drawer close")},null,8,["onExtend","class"])])])}var Q=k(z,[["render",I],["__scopeId","data-v-c8489732"],["__file","Links.vue"]]);export{Q as default};
