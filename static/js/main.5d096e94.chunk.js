(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{127:function(e,t,a){},136:function(e,t,a){e.exports={button:"Button_button__Oe0FS"}},138:function(e,t,a){},140:function(e,t,a){e.exports=a(256)},148:function(e,t){},150:function(e,t){},187:function(e,t){},188:function(e,t){},21:function(e,t,a){e.exports={page:"Layout_page__1JPRf",header:"Layout_header__kJRl0",header__nav:"Layout_header__nav__2hkD6",header__nav__link:"Layout_header__nav__link__3d9D-",main:"Layout_main__27E1-",footer:"Layout_footer__1pvFR",article:"Layout_article__2kMZs",article__children:"Layout_article__children__3Au2S"}},256:function(e,t,a){"use strict";a.r(t);var r=a(0),n=a.n(r),o=a(128),i=a.n(o);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var s=a(38),l=a(25),c=a(139),u=a(54),m=a(129),d=a.n(m),f=function(e){var t=e.error;return n.a.createElement(ae,{size:"12",color:"var(--color-red)",text:t})},p=a(23),_=Object(r.createContext)(new function e(){var t=this;Object(p.a)(this,e),this.login=null,this.name=null,this.avatar_url=null,this.bio=null,this.email=null,this.followers=null,this.following=null,this.repositories=null,this.sort=null,this.setUser=function(e){t.login=e.login,t.name=e.name,t.avatar_url=e.avatar_url,t.bio=e.bio,t.email=e.email,t.followers=e.followers,t.following=e.following,t.repositories=e.repositories,t.sort=e.sort},this.getUser=function(){return{login:t.login,name:t.name,avatar_url:t.avatar_url,bio:t.bio,email:t.email,followers:t.followers,following:t.following,repositories:t.repositories,sort:t.sort}}}),v=a(75),E=a.n(v),g=function(e){var t=e.data;return Object(r.useContext)(_).setUser(t),n.a.createElement("section",null,n.a.createElement("div",{className:E.a.userDetails},n.a.createElement("div",{className:E.a.avatar},n.a.createElement(D,{data:t,showBorder:!0}),n.a.createElement(ae,{bold:!0,size:"16",text:t.name||t.login})),n.a.createElement("br",null),t.bio&&n.a.createElement("div",null,n.a.createElement(ae,{bold:!0,size:"14",text:"Biografia: "}),n.a.createElement(ae,{bold:!0,size:"14",text:t.bio,secondary:!0})),t.email&&n.a.createElement("div",null,n.a.createElement(ae,{bold:!0,size:"14",text:"Email: "}),n.a.createElement(ae,{bold:!0,size:"14",text:t.email,secondary:!0})),n.a.createElement("div",null,n.a.createElement(ae,{bold:!0,size:"14",text:"Seguidores: "}),n.a.createElement(ae,{bold:!0,size:"14",text:t.followers,secondary:!0})),n.a.createElement("div",null,n.a.createElement(ae,{bold:!0,size:"14",text:"Seguindo: "}),n.a.createElement(ae,{bold:!0,size:"14",text:t.following,secondary:!0})),t.login&&n.a.createElement(H,{data:t})))},h=a(21),b=a.n(h),y=b.a.page,O=b.a.main,j=b.a.footer,x=b.a.article,z=b.a.header,w=b.a.header__nav,C=b.a.header__nav__link,S=b.a.article__children,R=function(e,t){return n.a.createElement(A,null,n.a.createElement(e,t))},A=function(e){var t=e.children,a=t.props.location.state&&t.props.location.state.avatar_url;return n.a.createElement("section",{className:y},n.a.createElement("section",{className:O},n.a.createElement("header",{className:z},n.a.createElement("nav",{className:w},n.a.createElement("a",{href:"/",className:C},n.a.createElement(ae,{bold:!0,size:"24",text:"Home",color:"var(--color-white)"})),a&&n.a.createElement("div",null,n.a.createElement(D,{data:{avatar_url:a}})))),n.a.createElement("article",{className:x},n.a.createElement("div",{className:S},t))),n.a.createElement("footer",{className:j},n.a.createElement(ae,{bold:!0,size:"24",text:"2019",color:"var(--color-white)"})))},N=a(58),B=a.n(N),k=B.a.avatar__img,L=B.a["avatar--purpleBorder"],D=function(e){var t=e.data,a=e.showBorder;return n.a.createElement("section",{className:B.a.avatar},n.a.createElement("img",{className:"".concat(k," ").concat(a?L:""),src:t.avatar_url,alt:"Imagem Avatar"}))},M=a(10),T=Object(r.createContext)(new function e(){var t=this;Object(p.a)(this,e),this.name=null,this.description=null,this.stargazers=null,this.languages=null,this.url=null,this.filter=null,this.current=null,this.setRepository=function(e){t.name=e.name,t.description=e.description,t.stargazers=e.stargazers,t.languages=e.languages,t.url=e.url,t.filter=e.filter,t.current=e.current},this.getRepository=function(){return{name:t.name,description:t.description,stargazers:t.stargazers,languages:t.languages,url:t.url,filter:t.filter,current:t.current}}}),F=a(49),I=a(56),U=a(50),q=a(57),K=function(e){function t(){return Object(p.a)(this,t),Object(I.a)(this,Object(U.a)(t).apply(this,arguments))}return Object(q.a)(t,e),Object(F.a)(t,[{key:"render",value:function(){var e=this.props,t=e.color,a=e.size;return n.a.createElement("svg",{width:a,height:a,viewBox:"0 0 24 24",version:"1.1",xmlnsXlink:"http://www.w3.org/1999/xlink"},n.a.createElement("path",{d:"M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z",fill:t}),n.a.createElement("path",{d:"M0 0h24v24H0z",fill:"none"}))}}]),t}(n.a.PureComponent);K.defaultProps={color:"#FFFFFF",size:64};var X=function(e){function t(){return Object(p.a)(this,t),Object(I.a)(this,Object(U.a)(t).apply(this,arguments))}return Object(q.a)(t,e),Object(F.a)(t,[{key:"render",value:function(){var e=this.props,t=e.color,a=e.size;return n.a.createElement("svg",{width:a,height:a,viewBox:"0 0 24 24"},n.a.createElement("path",{d:"M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z",fill:t,fillRule:"evenodd"}))}}]),t}(n.a.PureComponent);X.defaultProps={size:24,color:"#000"};var Q=a(51),V=a(48);function P(){var e=Object(Q.a)(["\n    query GetRepos($login: String!, $first: Int!, $orderBy: RepositoryOrderField!, $direction: OrderDirection!){\n        user(login: $login) {\n            repositories(first: $first, orderBy:{ field: $orderBy, direction: $direction}) {\n                totalCount\n                edges {\n                    node {\n                        id\n                        name\n                        description\n                        url\n                        createdAt\n                        stargazers {\n                            totalCount\n                        }\n                        languages(first: 20) {\n                            edges {\n                                node {\n                                    name\n                                }  \n                            }\n                        }\n                        primaryLanguage {\n                            name\n                        }\n                    }\n                    cursor\n                }\n                pageInfo {\n                    endCursor\n                    hasNextPage\n                }\n            }\n        }\n    }\n"]);return P=function(){return e},e}var Y=a.n(V)()(P()),J=a(26),G=a.n(J),H=function(e){var t=e.data,a=Object(r.useContext)(T),o=Object(r.useState)(null),i=Object(M.a)(o,2),s=i[0],c=i[1],m=[{description:"Mais estrelas",field:"STARGAZERS",direction:"DESC"},{description:"Menos estrelas",field:"STARGAZERS",direction:"ASC"},{description:"Nome A-Z",field:"NAME",direction:"ASC"},{description:"Nome Z-A",field:"NAME",direction:"DESC"}],d=Object(r.useState)(0),p=Object(M.a)(d,2),_=p[0],v=p[1],E=Object(r.useState)(0),g=Object(M.a)(E,2),h=g[0],b=g[1],y=a.getRepository();Object(r.useEffect)(function(){y&&y.name&&(v(y.filter),b(y.current))},[y,v,b]);if(s)return n.a.createElement(l.a,{to:{pathname:s,state:{repository:a.getRepository(),avatar_url:t.avatar_url}}});var O=function(e,t,a,r,n){t({variables:{first:a+10,orderBy:r,direction:n},updateQuery:function(e,t){var a=t.fetchMoreResult;return a?Object.assign(e,a):e}})};return n.a.createElement(u.b,{query:Y,variables:{login:t.login,first:10,orderBy:m[_].field,direction:m[_].direction}},function(e){var t=e.data,r=e.loading,o=e.error,i=e.fetchMore;if(r)return"Carregando Reposit\xf3rios...";if(o)return n.a.createElement(f,{error:"Desculpe!!! Um erro ocorreu ao processar a busca, por favor tente novamente mais tarde."});if(!t||!t.user)return null;b(t.user.repositories.edges.length);var s=t.user.repositories.edges;return n.a.createElement("div",null,n.a.createElement("br",null),n.a.createElement("div",{className:G.a.header},n.a.createElement("span",{className:G.a.header__title},n.a.createElement(ae,{bold:!0,size:"16",text:t.user?"Reposit\xf3rios":"Nenhum reposit\xf3rio encontrado."})),n.a.createElement("select",{value:_,onChange:function(e){return function(e,t,a){v(e.target.value),O(0,a,0,m[e.target.value].field,m[e.target.value].direction)}(e,0,i)}},m.map(function(e,t){return n.a.createElement("option",{key:t,value:t},e.description)}))),n.a.createElement("ul",{className:G.a.repositories_list},s.map(function(e){return n.a.createElement("li",{key:e.node.id,onClick:function(){return function(e){var t={name:e.node.name,description:e.node.description,stargazers:e.node.stargazers.totalCount,languages:e.node.languages.edges.map(function(e){return e.node.name}).join(", "),url:e.node.url,filter:_,current:h};!t.languages&&e.node.primaryLanguage.name&&(t.languages=e.node.primaryLanguage.name),a.setRepository(t),c("/repository")}(e)},className:G.a.repositories_list__item},n.a.createElement("div",{className:G.a["repositories_list__item--header"]},n.a.createElement("span",{className:G.a["repositories_list__item--header--title"]},n.a.createElement(ae,{bold:!0,size:"14",text:"Nome "}),n.a.createElement(ae,{bold:!0,size:"14",text:e.node.name,secondary:!0})),n.a.createElement("span",{className:G.a["repositories_list__item--header--stars"]},n.a.createElement(K,{color:"var(--color-purple)",size:20}),n.a.createElement(ae,{bold:!0,size:"16",text:e.node.stargazers.totalCount,secondary:!0}))),n.a.createElement("div",null,n.a.createElement(ae,{bold:!0,size:"14",text:"Criado em "}),n.a.createElement(ae,{bold:!0,size:"14",text:new Date(e.node.createdAt).toLocaleDateString(),secondary:!0})))})),t.user.repositories.pageInfo.hasNextPage&&n.a.createElement(oe,{text:"Carregar mais",onClick:function(){return O(0,i,h,m[_].field,m[_].direction)}}))})},W=a(81);function Z(){var e=Object(Q.a)(["\n      color: ",";\n      margin: 0;\n      min-height: 20px;\n      font-size: ","px;\n      font-weight: ",";\n      font-style: normal;\n      font-stretch: normal;\n      line-height: 1.43;\n      letter-spacing: normal;\n    "]);return Z=function(){return e},e}var $="#494c4d",ee="#8d9496",te=function(e){var t=e.bold,a=e.size,r=e.text,n=e.color,o=e.secondary;return Object(W.b)("span",{css:Object(W.a)(Z(),n||(o?ee:$),a,t?"bold":"normal")},r)};te.defaultProps={size:12};var ae=te,re=a(136),ne=a.n(re),oe=function(e){var t=e.text,a=e.onClick;return n.a.createElement("button",{type:"submit",className:ne.a.button,onClick:a},t)},ie=a(55),se=a(79),le=function(e,t,a){var n=Object(r.useState)(Object(se.a)({},e)),o=Object(M.a)(n,2),i=o[0],s=o[1],l=Object(r.useState)({}),c=Object(M.a)(l,2),u=c[0],m=c[1],d=Object(r.useState)(!1),f=Object(M.a)(d,2),p=f[0],_=f[1];Object(r.useEffect)(function(){0===Object.keys(u).length&&p&&t(i)},[t,u,p,i]);return{handleChange:function(e){var t=e.name,a=e.value;_(!1),delete u[t],m(u),s(function(e){return Object(se.a)({},e,Object(ie.a)({},t,a))})},onSubmitForm:function(e){e.preventDefault(),_(!0),m(a(i))},values:i,errors:u,setErrors:m}},ce=a(80),ue=a.n(ce),me=a(137),de=function(e,t){var a=Object(r.useState)(null),n=Object(M.a)(a,2),o=n[0],i=n[1],s=Object(r.useState)(!0),l=Object(M.a)(s,2),c=l[0],u=l[1],m=Object(r.useState)(!1),d=Object(M.a)(m,2),f=d[0],p=d[1],_=Object(r.useState)(!1),v=Object(M.a)(_,2),E=v[0],g=v[1];return Object(r.useEffect)(function(){function a(){return(a=Object(me.a)(ue.a.mark(function a(){var r,n;return ue.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,fetch(e,t);case 2:if(500===(r=a.sent).status&&p(!0),!r.headers.get("content-type").includes("application/json")){a.next=10;break}return a.next=8,r.json();case 8:n=a.sent,i(n);case 10:g(!0),u(!1);case 12:case"end":return a.stop()}},a)}))).apply(this,arguments)}u(!1),e&&(g(!1),u(!0),function(){a.apply(this,arguments)}())},[e,t]),[o,c,f,E,i]},fe=function(e){var t={};return e.username.match(/^[a-z\d](?:[a-z\d]|-(?=[a-z\d])){0,38}$/g)||(t.username="Username inv\xe1lido"),t},pe=a(40),_e=a.n(pe),ve=function(){var e=Object(r.useContext)(_),t=le({username:""},function(e){m("".concat("https://api.github.com","/users/").concat(a.username))},fe),a=t.values,o=t.handleChange,i=t.errors,s=t.onSubmitForm,l=Object(r.useState)(""),c=Object(M.a)(l,2),u=c[0],m=c[1],d=e.getUser(),p=de(u),v=Object(M.a)(p,5),E=v[0],h=v[1],b=v[2],y=v[3],O=v[4];return Object(r.useEffect)(function(){!E&&d&&d.login&&O(d)}),n.a.createElement("article",{className:_e.a.article},n.a.createElement("div",null,n.a.createElement(ae,{bold:!0,size:"18",text:"Busca de usu\xe1rios do GitHub"})),n.a.createElement("form",{onSubmit:s},n.a.createElement("div",{className:_e.a.username},n.a.createElement("input",{type:"text",className:_e.a.username__input,value:a.username,placeholder:"Username",onChange:function(e){return o({name:"username",value:e.target.value})}}),n.a.createElement("button",{type:"submit",className:_e.a.username__search},n.a.createElement(X,{color:"var(--color-white)"}))),i.username&&n.a.createElement(f,{error:i.username}),b&&n.a.createElement(f,{error:"Desculpe!!! Um erro ocorreu ao processar a busca, por favor tente novamente mais tarde."}),(!E||!E.login)&&y&&n.a.createElement(f,{error:"Ops!!! N\xe3o encontramos ninguem com esse username, por favor tente outro"})),h&&"Carregando...",n.a.createElement("br",null),!h&&E&&E.login&&n.a.createElement(g,{data:E}))},Ee=a(138),ge=a.n(Ee),he=function(e){var t=Object(r.useState)(null),a=Object(M.a)(t,2),o=a[0],i=a[1],s=e.location.state&&e.location.state.repository;return Object(r.useLayoutEffect)(function(){if(!s)return i("/")},[s]),o?n.a.createElement(l.a,{to:o}):n.a.createElement(n.a.Fragment,null,s&&n.a.createElement("div",{className:ge.a.block},n.a.createElement(ae,{bold:!0,size:"18",text:s.name}),n.a.createElement("br",null),n.a.createElement("div",null,n.a.createElement(ae,{bold:!0,size:"14",text:"Descri\xe7\xe3o: "}),n.a.createElement(ae,{bold:!0,size:"14",text:s.description,secondary:!0})),n.a.createElement("div",null,n.a.createElement(ae,{bold:!0,size:"14",text:"Estrelas: "}),n.a.createElement(ae,{bold:!0,size:"14",text:s.stargazers,secondary:!0})),n.a.createElement("div",null,n.a.createElement(ae,{bold:!0,size:"14",text:"Linguagem: "}),n.a.createElement(ae,{bold:!0,size:"14",text:s.languages,secondary:!0})),n.a.createElement("div",null,n.a.createElement(ae,{bold:!0,size:"14",text:"Url: "}),n.a.createElement("a",{href:s.url,target:"_blank",rel:"noopener noreferrer"},n.a.createElement(ae,{bold:!0,size:"14",text:"Ver mais no github",secondary:!0}))),n.a.createElement("br",null),n.a.createElement("br",null),n.a.createElement("br",null),n.a.createElement(oe,{text:"Voltar",onClick:function(){return i("/")}})))};a(127);var be=function(){return n.a.createElement(l.d,null,n.a.createElement(l.b,{path:"/repository",exact:!0,render:function(e){return R(he,e)}}),n.a.createElement(l.b,{path:"/",exact:!0,render:function(e){return R(ve,e)}}))},ye=(new Date).getTime(),Oe={iat:ye,exp:ye+600,iss:"36295"},je=d.a.sign(Oe,"-----BEGIN RSA PRIVATE KEY-----\nMIIEpAIBAAKCAQEAsW5saAugDZoZ7LVSyyDkL85lKs+x6Tys7RRYHLXXyvRv08ZG\n42CjSrjF6O6Put9mUiKRUXDTqkzOwwwowIWWccXq81AfRS8lFX5vtbjb8vw8Vl3y\nhkcDizvRQy5oIyTv/6M6+QwQM3PrWFD7LzF/e3Gs9qt8h7OZ8giHVICnOIKev02S\nR/dyISkqHEMHzjyToxSffBLV4yRXeSm8+Q2RiUKqGq/lh6wJG3vCeu8BfUkP1Br+\n0aqwSjm0scpqJXnAtZWyJzCATBLh6vro/ftq+8ic1tAAGYVvArNS/1YUOPp+H/Ef\nr/JK23VsavGM7YWplxk3fb354MLoLO1TbCFU2QIDAQABAoIBAH4vyzdf9S9XRlK7\nTiuas85wGjENTzlSZqWhj1yz0snLd/CEFgxFwTw2FsKnT18W3H1TikgCVvbJ805y\nSlVJbIpzuLncZLDea6BSsH3r/7lavEqsO/xVaubN3vDJg1RjQ7BqVVmjw63kJh9E\nUK/qowCXAuzXXxRfnf+tIxns+YBM7JlHgXQxUFe2GCh1azK4s71Q1hYmsgEATfIE\nYi9IM2w22TAqMj0i0yXh27k1Od5cJEjoLd5mWRRbMhsPm3weX7TBFaf3QTAYa4Yf\n1J+8XCiAViOKx5+zSglec9kaFsTe4B4F413vEBtNvy0j6kR0RmvXDFYkaj8XKyrR\nsxo2wOUCgYEA60xEo4Hf9vII3jBxMWTfqfpd+VKk7Yw//jGqVNHX6EyGt2BnoMyd\nPTx2OGvoVN5TqcvOZmFM3x2bntcYXrcw6HFgQ5XfConrnUt0TmKtXrIZC86jRZPz\nwhEIIXJITS6KFR8pbnPrgQ6GDH78sT72MpIso+CzwpYUKS26JQdk7xsCgYEAwQrM\nMU5eEWBbyVyC+8xa1uskYa0H5mWQ9j4CpMD27s74dPMF8b4fTL5MGocQobywf0Dz\nqYA+fZ+9JJbZIyS4AMR3G+ZU5b+j1ae3+jeOPrRK5BWvzP2Kz7ajXCzdLjkfL+dP\nsKRrjbGunCcxTm3fSyqd2Jv0KVUfHwnwQWodJxsCgYEAr9/wJi87kr/S9RFMalk1\n/T2Q5H1rncuJQZ0p7gBz28TnpUW/76dBmLYKv52YqWcNLguSmV/9L4BYA+BO7O0M\n95FXHO13K89vd8EgjD6hy/hfVD3+OFGgj9xfMXDUriwtNiB2vYKT84FBnTGF+45O\nQ/qSt2OLudSn+SeezXK7dSUCgYALiCSYkXDnItV42vDsL9IBYryipR6CsfCN9Thd\nNTXLIEwRWG8zeMMP55JOR2FD+Cym/W9Q4dtZz9ARvn0sL0ZarWHcJc9Ohjs4STOh\nW+5Aaq7Kn00INuEy9Vse54My/rCRQQUurTPLnCCtLV4xrDiZmesiBHb6fR5F0Wcr\n0TX6nwKBgQDqsPz2xzKKPArcc4+XLEVuec44QzOWDP9vICrgNV8izNRQ3xCOAvB7\nBUufpFK48epDoVSf36A7cXFN6b5Qy65rfkqH8BOvu9yNhPMGfk6EwQHeqAgsOk0u\nLY0AMgT/9EsqIecCRKChbJ2jXg10bzI9bEhbEpfdtMBBJlHP7OeOQQ==\n-----END RSA PRIVATE KEY-----",{algorithm:"RS256"}),xe=new c.a({uri:"https://api.github.com/graphql",request:function(e){e.setContext({headers:{authorization:"Bearer ".concat(je),accept:"application/vnd.github.machine-man-preview+json"}})}});i.a.render(n.a.createElement(u.a,{client:xe},n.a.createElement(s.a,null,n.a.createElement(l.d,null,n.a.createElement(l.b,{path:"/",component:be})))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},26:function(e,t,a){e.exports={header:"Repositories_header__3InG9",header__title:"Repositories_header__title__26lKa",repositories_list:"Repositories_repositories_list__2puMD",repositories_list__item:"Repositories_repositories_list__item__S9n-_","repositories_list__item--header":"Repositories_repositories_list__item--header__3hs7C","repositories_list__item--header--title":"Repositories_repositories_list__item--header--title__2unTq","repositories_list__item--header--stars":"Repositories_repositories_list__item--header--stars__2yerm"}},40:function(e,t,a){e.exports={username:"User_username__plpV2",username__input:"User_username__input__fMnfa",username__search:"User_username__search__250qw"}},58:function(e,t,a){e.exports={"avatar--purpleBorder":"Avatar_avatar--purpleBorder__A5qhF",avatar:"Avatar_avatar__WtpwG",avatar__img:"Avatar_avatar__img__3VdY0"}},75:function(e,t,a){e.exports={userDetails:"UserDetails_userDetails__2UDfS",avatar:"UserDetails_avatar__1rfHu",userDetails__name:"UserDetails_userDetails__name__LDTvN"}}},[[140,1,2]]]);
//# sourceMappingURL=main.5d096e94.chunk.js.map