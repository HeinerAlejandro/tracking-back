(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{195:function(e,t,a){"use strict";a.r(t);var n=a(358),r=a(21),i=a(30),c=a(24),l=a(22),o=a(23),s=a(1),u=a.n(s),p=function(e){function t(){return Object(r.a)(this,t),Object(c.a)(this,Object(l.a)(t).apply(this,arguments))}return Object(o.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this.props;e.children,Object(n.a)(e,["children"]);return u.a.createElement(u.a.Fragment,null,u.a.createElement("p",null,"footer"))}}]),t}(s.Component);p.defaultProps={},t.default=p},364:function(e,t,a){"use strict";a(60);var n=a(12),r=a(21),i=a(30),c=a(24),l=a(22),o=a(23),s=a(1),u=a.n(s),p=a(40);t.a=function(e){var t=function(t){function a(){return Object(r.a)(this,a),Object(c.a)(this,Object(l.a)(a).apply(this,arguments))}return Object(o.a)(a,t),Object(i.a)(a,[{key:"render",value:function(){return this.props.isSuperuser&&u.a.createElement(e,this.props)||u.a.createElement(n.a,{type:"loading"})}}]),a}(s.Component);return Object(p.b)(function(e){return{isSuperuser:e.data_user.super_user}},null)(t)}},397:function(e,t,a){},405:function(e,t,a){},423:function(e,t,a){},494:function(e,t,a){"use strict";a.r(t);a(181);var n=a(135),r=(a(134),a(62)),i=a(21),c=a(30),l=a(24),o=a(22),s=a(23),u=a(1),p=a.n(u),m=a(13),d=(a(359),a(361)),v=(a(100),a(37)),b=(a(397),v.a.Search),f=d.a.Option,h=(p.a.createElement(d.a,{defaultValue:"G"},p.a.createElement(f,{value:"G"},"G"),p.a.createElement(f,{value:"P"},"P"),p.a.createElement(f,{value:"M"},"M")),function(e){return p.a.createElement(b,{id:"SearchFieldDevice",style:{width:500,marginBottom:20},size:"large",onChange:e.handleFilter,placeholder:"Introduce el serial de dipositivo"})}),g=(a(61),a(25)),O=a(364),E=d.a.Option,D=function(e){return p.a.createElement("td",null,e)},j=function(e){var t=e.type,a=e.values,n=e.forDefault,r=void 0===n?null:n,i=e.optionStyle,c=void 0===i?null:i,l=null;if(console.log(a),"simple"===t&&"string"===typeof a&&(l=D(a)),"select"===t&&Array.isArray(a)&&r){var o=function(e,t){return p.a.createElement(d.a,{style:{width:120},defaultValue:t,name:"status",className:"status"},e)}(a.map(function(e){var t,a;return t=e,a=c,p.a.createElement(E,{value:t,style:a},t)}),r);l=D(o)}return l},y=d.a.Option,C=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(l.a)(this,Object(o.a)(t).call(this,e))).handleClick=function(){var e=a.props,t=e.name;(0,e.selectDevice)(t)},a.getItemChildrenLayoutRenderDevice=a.getItemChildrenLayoutRenderDevice.bind(Object(m.a)(Object(m.a)(a))),a.getDataOptionDevice=a.getDataOptionDevice.bind(Object(m.a)(Object(m.a)(a))),a.getDataColumnsDevice=a.getDataColumnsDevice.bind(Object(m.a)(Object(m.a)(a))),a.handleClick=a.handleClick.bind(Object(m.a)(Object(m.a)(a))),a}return Object(s.a)(t,e),Object(c.a)(t,[{key:"getDataOptionDevice",value:function(){var e=this.props.name;return p.a.createElement(y,{key:e,value:e},e)}},{key:"getDataColumnsDevice",value:function(){var e=this.props,t=e.data,a=e.name,n=Object(O.a)(j);return p.a.createElement(p.a.Fragment,null,p.a.createElement(j,{type:"simple",values:a}),p.a.createElement(j,{type:"simple",values:t.typee}),p.a.createElement(j,{type:"simple",values:t.date_register}),p.a.createElement(n,{type:"select",forDefault:t.status,optionStyle:{width:"100px"},values:["ACTIVO","INACTIVO"]}),p.a.createElement("td",null,p.a.createElement(g.a,{disabled:"ACTIVO"!==t.status,onClick:this.handleClick,style:{background:"none",border:"none"},icon:"eye"})))}},{key:"getItemChildrenLayoutRenderDevice",value:function(){return"row-table"===this.props.type?this.getDataColumnsDevice():this.getDataOptionDevice()}},{key:"render",value:function(){console.log(this.props.type);var e=this.getItemChildrenLayoutRenderDevice();return p.a.createElement(p.a.Fragment,null,e)}}]),t}(u.Component),S=a(133),k=function(e){var t=e.children;return p.a.createElement(S.v,{responsive:!0,striped:!0},t)};k.Header=function(e){var t=e.children;return p.a.createElement("thead",null,p.a.createElement("tr",null,t))},k.Body=function(e){var t=e.children;return p.a.createElement("tbody",null,t)};var T=k,_=function(e){return p.a.createElement(d.a,{onChange:e.selectDevice,name:"select-device",id:"select-device",defaultValue:e.selected},e.children)},F=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(l.a)(this,Object(o.a)(t).call(this,e))).getColumnsDevices=function(){return a.props.columns_header&&a.props.columns_header.map(a.columnOperation)},a.columnOperation=function(e){return p.a.createElement("th",{key:e},e)},a.getDevices=function(){return a.props.devices&&a.props.devices.map(a.deviceOperation)},a.getSimpleList=function(e){return p.a.createElement(d.a.Option,{value:e},e)},a.getItem=function(e){return"table"===a.props.type?p.a.createElement(C,{selectDevice:a.props.selectDevice,key:e[0],name:e[0],data:e[1],type:"row-"+a.props.type}):a.getSimpleList(e[0])},a.deviceOperation=function(e){var t=null;return a.props.filter&&e[0][0]!==a.props.filter||(t=a.getItem(e)),"table"===a.props.type?p.a.createElement("tr",null,t):t},a.getTable=function(e){return p.a.createElement(e,null,p.a.createElement(e.Header,null,a.getColumnsDevices()),p.a.createElement(e.Body,null,a.getDevices()))},a.getSelect=function(e){return p.a.createElement(e,{selectDevice:a.props.selectDevice,selected:a.props.selected},a.getDevices())},a.getColumnsDevices=a.getColumnsDevices.bind(Object(m.a)(Object(m.a)(a))),a.columnOperation=a.columnOperation.bind(Object(m.a)(Object(m.a)(a))),a.getDevices=a.getDevices.bind(Object(m.a)(Object(m.a)(a))),a.deviceOperation=a.deviceOperation.bind(Object(m.a)(Object(m.a)(a))),a.getTable=a.getTable.bind(Object(m.a)(Object(m.a)(a))),a.getSelect=a.getSelect.bind(Object(m.a)(Object(m.a)(a))),a.getItem=a.getItem.bind(Object(m.a)(Object(m.a)(a))),a}return Object(s.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=null;return"table"===this.props.type?e=this.getTable(T):"select"===this.props.type&&(e=this.getSelect(_)),p.a.createElement(p.a.Fragment,null,e)}}]),t}(u.PureComponent),I=function(e){var t=e.icon,a=e.color,n=e.value,r=e.onClick,i=e.type,c=e.fontColor;return p.a.createElement(g.a,{style:{backgroundColor:a,color:c,borderColor:a},size:"large",type:i,icon:t,onClick:r},n)},R=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(l.a)(this,Object(o.a)(t).call(this,e))).getColums=function(){return a.props.role?["Codigo","Tipo","Fecha de registro","Estado",""]:["Codigo","Tipo","Fecha de registro",""]},a.handleClickRegister=function(){return a.props.visible_form?a.props.setVisibleForm(!1):a.props.setVisibleForm(!0)},a.getButtonsOperations=function(){return p.a.createElement(n.a,{gutter:10},p.a.createElement(r.a,{span:4},p.a.createElement(I,{value:"Registrar",icon:"plus-circle",color:"ghost-primary",onClick:a.handleClickRegister,type:"primary"})),p.a.createElement(r.a,{span:4},p.a.createElement(I,{value:"Comprar",icon:"shopping",color:"#fadb14",fontColor:"black",onClick:null,type:"primary"})))},a.getCardTable=function(){var e=a.props.devices;return p.a.createElement(S.c,{style:{width:"1000px",margin:"auto"}},p.a.createElement(S.e,null,"Dispositivos Registrados"),p.a.createElement(S.d,null,p.a.createElement(h,{handleFilter:a.props.handleChangeSearch}),p.a.createElement(F,{columns_header:a.getColums(),devices:e,type:"table",selectDevice:a.props.selectDevice}),a.getButtonsOperations()))},a.getButtonsOperations=a.getButtonsOperations.bind(Object(m.a)(Object(m.a)(a))),a.getCardTable=a.getCardTable.bind(Object(m.a)(Object(m.a)(a))),a.handleClickRegister=a.handleClickRegister.bind(Object(m.a)(Object(m.a)(a))),a.getColums=a.getColums.bind(Object(m.a)(Object(m.a)(a))),a}return Object(s.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this.props.visible?this.getCardTable():this.getButtonsOperations();return p.a.createElement(p.a.Fragment,null,e)}}]),t}(u.Component),w=a(40),x=a(32),V=a(370),A=a.n(V),L=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(l.a)(this,Object(o.a)(t).call(this,e))).componentDidMount=function(){a.props.device||a.props.getDevicesFromServer()},a.handleChangeSearch=function(e){var t=e.target.value;a.props.setFilterSearchDevice(t)},a.isDeviceInList=function(e){var t=a.props.filter_search.toUpperCase();return e[0].search(t)>-1},a.getDevices=function(){return A()(a.props.devices)},a.handleChangeSearch=a.handleChangeSearch.bind(Object(m.a)(Object(m.a)(a))),a.getDevices=a.getDevices.bind(Object(m.a)(Object(m.a)(a))),a}return Object(s.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this.props.filter_search,t=""===e&&this.getDevices()||""!==e&&this.getDevices().filter(this.isDeviceInList),a=this.getDevices().length>0;return p.a.createElement(R,{role:this.props.role,devices:t,handleChangeSearch:this.handleChangeSearch,visible_form:this.props.visible_form,setVisibleForm:this.props.setVisibleForm,visible:a,selectDevice:this.props.selectDevice})}}]),t}(u.Component),M={setFilterSearchDevice:x.n,setVisibleForm:x.o,setDevices:x.m,selectDevice:x.l,getDevicesFromServer:x.h},P=Object(w.b)(function(e){return{role:e.data_user.super_user,devices:e.devices,filter_search:e.filter_search,visible_form:e.visible_form_device}},M)(L),N=(a(194),a(167)),B=(a(371),a(387)),G=(a(80),a(31)),z=(a(405),G.a.Item),H=d.a.Option,U=(p.a.createElement(B.a,{title:"Tipo de dispositivo\nG : valor en modulo\nP = valor en mapa\nS = seguimientos"},p.a.createElement(d.a,{defaultValue:"G"},p.a.createElement(H,{value:"G"},"G"),p.a.createElement(H,{value:"P"},"P"),p.a.createElement(H,{value:"S"},"S"))),G.a.create()(function(e){var t=e.onHandleSubmit;return p.a.createElement(G.a,{className:"register-device",onSubmit:t},p.a.createElement(z,null,p.a.createElement(v.a,{name:"input-create-device",type:"text",maxLength:4,placeholder:"Serial"})),p.a.createElement(z,null,p.a.createElement(g.a,{htmlType:"submit"},"Registrar")))})),J=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(l.a)(this,Object(o.a)(t).call(this,e))).onCancel=function(){a.props.setVisibleForm(!1)},a.onCancel=a.onCancel.bind(Object(m.a)(Object(m.a)(a))),a}return Object(s.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return p.a.createElement(N.a,{width:"500px",centered:!0,visible:this.props.visible_form,footer:null,onCancel:this.onCancel},p.a.createElement("h3",null,"Registra un dispositivo"),p.a.createElement(n.a,{align:"center"},p.a.createElement(r.a,{span:20},p.a.createElement(U,{onHandleSubmit:this.props.onSubmitDevice}))))}}]),t}(u.Component),K=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(l.a)(this,(e=Object(o.a)(t)).call.apply(e,[this].concat(r)))).onSubmitDevice=function(e){e.preventDefault();var t=document.getElementsByName("input-create-device")[0].value;console.log("contenido de input : "+t),a.props.fetchCreateDevice(t)},a}return Object(s.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return p.a.createElement(J,{visible_form:this.props.visible_form,setVisibleForm:this.props.setVisibleForm,onSubmitDevice:this.onSubmitDevice})}}]),t}(p.a.Component),W={setVisibleForm:x.o,fetchCreateDevice:x.g},$=Object(w.b)(function(e){return{visible_form:e.visible_form_device}},W)(K),q=(a(60),a(12)),Q=(a(407),a(487)),X=a(501),Y=a(502),Z=a(493),ee=a(500),te=a(499),ae=a(372),ne=a(412),re=a(413),ie=a(357),ce=a(415),le=a(416),oe=a.n(le);ae.b.add(ce.a),ae.b.add(ce.b);var se=oe()(),ue=p.a.createElement("div",null,p.a.createElement(ne.a,{icon:ce.a,color:se,size:"3x",style:{position:"absolute",bottom:"100%",left:"-7px"}}),p.a.createElement(ne.a,{icon:ce.b,color:"white",size:"1x",style:{position:"absolute",left:"1px",bottom:"250%"}})),pe=Object(re.renderToStaticMarkup)(ue),me=Object(ie.divIcon)({html:pe}),de=(a(417),function(e){var t=e.positions,a=null;a=Array.isArray(t)?t[t.length-1]:t;var n=t&&[a.lat,a.lon];return p.a.createElement(X.a,{className:"map element-operation",center:n||[51.0009,-9e-4],zoom:13},p.a.createElement(Y.a,{url:"https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"}),p.a.createElement(Z.a,{icon:me,position:n},p.a.createElement(ee.a,null,"A pretty CSS3 popup.",p.a.createElement("br",null),"Easily customizable.")),p.a.createElement(te.a,{positions:t,color:"#F9B451"}))}),ve=function(){return p.a.createElement("div",null,p.a.createElement(n.a,{gutter:24},p.a.createElement(r.a,{span:20,offset:4},p.a.createElement(de,null))))},be=function(e){var t=e.devices,a=e.selected,i=e.handleChangeDateTime,c=e.selectDevice;return p.a.createElement("div",{className:"panel-options element-operation"},p.a.createElement(F,{type:"select",devices:t,selectDevice:c,selected:a,filter:"S"}),p.a.createElement(n.a,{gutter:15},p.a.createElement(r.a,{span:3},p.a.createElement("label",{htmlFor:"fi"},"Inicio")),p.a.createElement(r.a,{offset:3},p.a.createElement(v.a,{id:"fi",name:"fi",className:"input-panel-operation",onChange:i,type:"datetime"}))),p.a.createElement(n.a,{gutter:15},p.a.createElement(r.a,{span:3},p.a.createElement("label",{htmlFor:"ff"},"Final")),p.a.createElement(r.a,{offset:3},p.a.createElement(v.a,{id:"ff",name:"ff",className:"input-panel-operation",onChange:i,type:"datetime"}))),p.a.createElement(g.a,null,"Agregar Rango"))},fe={xs:24,md:24,lg:12,xl:16},he={xs:24,md:24,lg:12,xl:8},ge=function(e){var t=e.devices,a=e.positions,i=e.selected,c=e.handleChangeDateTime,l=e.selectDevice;return p.a.createElement("div",null,p.a.createElement(n.a,{gutter:24,justify:"space-between",align:"center"},p.a.createElement(r.a,he,p.a.createElement(be,{handleChangeDateTime:c,selected:i,selectDevice:l,devices:t})),p.a.createElement(r.a,fe,a&&p.a.createElement(de,{positions:a}))))},Oe=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(l.a)(this,Object(o.a)(t).call(this,e))).componentWillMount=function(e,t){console.log(e),console.log(t)},a.componentDidMount=function(){a.props.getLastPosition(a.props.selected)},a.validateRangeDate=function(){var e=new RegExp("^([0-2][0-9]|3[0-1])/(0[1-9]|1[0-2])/(2[0-9]{3}) ([0-1][0-9]|2[0-3]):([0-5][0-9])$");return!(!e.test(a.firstDateTime)||!e.test(a.secondDateTime))&&(a.setDeviceRanges(),!0)},a.obtainDate=function(e){return new Date(e[0],e[1],e[2],e[3],e[4])},a.obtainSplitDate=function(e,t){return e.split(t)},a.setDeviceRanges=function(){var e=new RegExp("[/ :]");a.positions=a.props.positions.filter(function(t){var n=a.obtainSplitDate(t.datetime,e),r=a.obtainDate(n);n=a.obtainSplitDate(a.firstDateTime,e);var i=a.obtainDate(n);n=a.obtainSplitDate(a.secondDateTime,e);var c=a.obtainDate(n);return i<=r&&c>=r}),a.forceUpdate()},a.validInput=function(){return a.firstDateTime&&a.secondDateTime},a.handleChangeDateTime=function(e){"fi"===e.target.name?a.firstDateTime=e.target.value:a.secondDateTime=e.target.value;var t=a.validInput(),n=a.validateRangeDate();if(t&&(a.positions=null),t&&n){a.firstDateTime,a.secondDateTime,a.props.selected;a.props.getIntervalPosition(),a.setDeviceRanges()}},a.getArrayDevices=function(){return A()(a.props.devices)},a.selectDevice=function(e){a.props.selectDevice(e),a.positions=null,a.forceUpdate()},a.addRanges=function(e){},a.firstDateTime=null,a.secondDateTime=null,a.getArrayDevices=a.getArrayDevices.bind(Object(m.a)(Object(m.a)(a))),a.handleChangeDateTime.bind(Object(m.a)(Object(m.a)(a))),a.validateRangeDate=a.validateRangeDate.bind(Object(m.a)(Object(m.a)(a))),a.selectDevice=a.selectDevice.bind(Object(m.a)(Object(m.a)(a))),a.validInput=a.validInput.bind(Object(m.a)(Object(m.a)(a))),a.positions=null,a}return Object(s.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this.positions||this.props.positions[this.props.positions.length-1];return p.a.createElement(ge,{devices:this.getArrayDevices(),positions:e,selectDevice:this.selectDevice,selected:this.props.selected,handleChangeDateTime:this.handleChangeDateTime})}}]),t}(u.Component),Ee={selectDevice:x.l,getLastPosition:x.j,getIntervalPosition:x.i},De=Object(w.b)(function(e){return{devices:e.devices,selected:e.device_selected,positions:e.positions[e.device_selected]}},Ee)(Oe),je=function(){return p.a.createElement("div",null)},ye=(a(423),Q.a.TabPane),Ce=[{title:"Valor en mapa",type:"M",icon:"eye",Module:ve},{title:"Seguimiento",type:"S",icon:"fall",Module:De},{title:"Valor en Modulo",type:"G",icon:"tablet",Module:je}],Se=function(e){e.device_name;var t=e.data_device,a=t&&"ACTIVE"===t.status&&t.type;return console.log(a),p.a.createElement(Q.a,{className:"operation-section",defaultActiveKey:a,activeKey:a},Ce.map(function(e){var t,n,r=e.type,i=e.icon,c=e.Module,l=e.title;return p.a.createElement(ye,{key:r,tab:p.a.createElement("span",null,p.a.createElement(q.a,{type:i})," ",l," "),disabled:(t=a,n=r,t!==n)},p.a.createElement(c,null))}))},ke=function(e){function t(){return Object(i.a)(this,t),Object(l.a)(this,Object(o.a)(t).apply(this,arguments))}return Object(s.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this.props,t=e.device_name,a=e.data_device;return p.a.createElement(Se,{device_name:t,data_device:a})}}]),t}(u.Component),Te=Object(w.b)(function(e){return{device_name:e.device_selected,data_device:e.devices[e.device_selected]}},null)(ke),_e=a(195),Fe=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(l.a)(this,(e=Object(o.a)(t)).call.apply(e,[this].concat(r)))).loading=function(){return p.a.createElement("div",{className:"animated fadeIn pt-1 text-center"},"Loading...")},a}return Object(s.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return p.a.createElement("div",{className:"animated fadeIn"},p.a.createElement(n.a,null,p.a.createElement(r.a,{xs:"12",lg:"0"},p.a.createElement(P,null))),p.a.createElement(n.a,null,p.a.createElement(r.a,{xs:"12",sm:"6"},p.a.createElement($,null))),p.a.createElement(n.a,{justify:"center",span:20},p.a.createElement(r.a,null,p.a.createElement(Te,null))),p.a.createElement(n.a,{justify:"center",span:20},p.a.createElement(r.a,null,p.a.createElement(_e.default,null))))}}]),t}(u.Component);t.default=Fe}}]);
//# sourceMappingURL=5.5b09aed0.chunk.js.map