(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{132:function(e,a,t){e.exports=t(297)},137:function(e,a,t){},138:function(e,a,t){},183:function(e,a){},185:function(e,a){},2:function(e,a,t){(function(a){var n=t(182);var r=new Date,l=Math.round(r.getTime()),i=new Date,s=i.getFullYear()+"-"+(i.getMonth()+1)+"-"+i.getDate();var c=function(e){var a=e.replace(/ /g,"+");return a=(a=a.replace(/,/g,"%2C")).replace(/(\r\n|\n|\r)/gm,"")};e.exports={url:"https://jazztv.pk/jazzlive/index.php/services/webservices/",ucipUrl:"http://header.jazztv.pk/ucip/index.php/api/",streamIpUrl:"https://ip.jazztv.pk:8989/address.php",headerToken:"774a719yycaa6xc44bg12e5hf5buj69dmkcdt46dl",version:"beta",decryptData:function(e){return function(e,t){var n=a.from(e,"hex"),r=t.createDecipheriv("aes-256-cbc","0k3fe880499l4k31e8999b14d9c5lkmn","spfjtrbhgijlenpy"),l=r.update(n);return l=a.concat([l,r.final()]),JSON.parse(l.toString())}(e,n)},currentEpocTime:l,currentDate:s,getAdTagUrlParams:function(e){return function(e){var a=e.split("?iu=/");return(a=(a=a[1].split("&"))[0].split("/"))[0]+","+a[1]}(e)},getDateDiff:function(e,a){return function(e,a){var t=e.split("-"),n=a.split("-"),r=new Date(t[0],t[1]-1,t[2]),l=(new Date(n[0],n[1]-1,n[2])-r)/1e3/60/60/24;return Math.trunc(l/365)}(e,a)},customAdTagUrl:function(e,a){return function(e,a){return e+"&cust_params=placement_channel%3D"+c(a.placement_channel)+"%26placement_program%3D"+c(a.placement_program)+"%26placement_genre%3D"+c(a.placement_genre)+"%26user_gender%3D"+c(a.user_gender)+"%26user_age%3D"+c(a.user_age.toString())+"%26user_interest%3D"+c(a.user_interest)+"%26user_type%3D"+c(a.user_type)+"%26user_behavior%3D"+c(a.user_behavior.toString())}(e,a)}}}).call(this,t(17).Buffer)},218:function(e,a){},219:function(e,a){},281:function(e,a){},297:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),l=t(38),i=t.n(l),s=t(24),c=(t(137),t(31)),o=(t(138),t(9)),u=t(15),d=t(13),m=t(12),g=t(6),p=t(14),h=t(10),v=t.n(h),f=t(3),_=t.n(f),E=t(25),w=t.n(E),b=(t(157),t(126)),k=t.n(b),D=t(1),y=t.n(D),L=t(33),N=function(e){function a(){var e;return Object(o.a)(this,a),(e=Object(d.a)(this,Object(m.a)(a).call(this))).logout=function(){y.a.remove("userData"),y.a.set("isLoggedOut",!0),window.location.href="/"},e.handleSearchFocus=function(){_()(".search_fld").focus()},e.removeAppInstallBanner=function(){_()("#smartbanner").hide()},e.handleSearchSubmit=function(e){e.preventDefault(),_()(".search_fld").val().length>1&&(window.location.href="/search/"+_()(".search_fld").val())},window.reactGA=L.a.initialize("UA-141129558-1"),e.logout=e.logout.bind(Object(g.a)(e)),e}return Object(p.a)(a,e),Object(u.a)(a,[{key:"componentDidMount",value:function(){if(window.ga_client_id=y.a.get("ga_client_id"),null==y.a.get("ga_client_id")){var e="";L.a.ga(function(a){e=a.get("clientId"),console.log("GA CLIENT ID: ",e),window.ga_client_id=e,y.a.set("ga_client_id",e)})}}},{key:"componentWillUnmount",value:function(){_()(".uk-offcanvas-close").click()}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("header",{"uk-sticky":"true"},r.a.createElement("div",{className:"uk-container uk-container-expand"},r.a.createElement("a",{href:"/",className:"logo"},r.a.createElement("img",{src:"../../images/logo.svg",alt:"Tamasha"}))," ",r.a.createElement("a",{className:"mob_search_btn","uk-toggle":"target: .mob_search_box; animation: uk-animation-fade",href:"javascript:;"},r.a.createElement("img",{src:"../../images/search.svg?v=1","uk-svg":""})),r.a.createElement("div",{className:"mob_search_box","aria-hidden":"true",style:{},hidden:!0},r.a.createElement("div",{className:"mob_search_box_inner"},r.a.createElement("form",{className:!0},r.a.createElement("input",{className:"mob_search_fld",type:"search",placeholder:"Search...",autoFocus:!0}))),r.a.createElement("a",{className:"close_btn","uk-toggle":"target: .mob_search_box; animation: uk-animation-fade",href:"/"},r.a.createElement("img",{src:"../../images/close.svg","uk-svg":""}))),r.a.createElement("div",{className:"right_header"},r.a.createElement("form",{className:"search_box",onSubmit:this.handleSearchSubmit},r.a.createElement("input",{type:"search",className:"search_fld",name:!0,placeholder:"Search"}),r.a.createElement("button",{className:"search_btn",onClick:this.handleSearchFocus},r.a.createElement("img",{src:"../../images/search.svg?v=1","uk-svg":""})))))))}}]),a}(r.a.Component),S=function(){return r.a.createElement("footer",null,r.a.createElement("div",{className:"uk-container uk-container-expand"},r.a.createElement("ul",{className:"frt_link"},r.a.createElement("li",null,r.a.createElement("a",{target:"_blank",href:"https://www.jazz.com.pk/explore/mobile-apps/mobile-tv/"},"About")),r.a.createElement("li",null,r.a.createElement("a",{target:"_blank",href:"https://www.jazz.com.pk/postpaid/mobile-tv/#terms-and-conditions"},"Terms of use")),r.a.createElement("li",null,r.a.createElement("a",{target:"_blank",href:"https://www.jazz.com.pk/help/customer-privacy-policy/"},"Privacy policy"))),r.a.createElement("div",{className:"download_box"},r.a.createElement("p",null,"Watch on your phone or tablet"),r.a.createElement("div",{className:"download_btn"},r.a.createElement("a",{target:"_blank",href:"https://play.google.com/store/apps/details?id=com.spbtv.mobilinktv&referrer=utm_source%3DJazzTV%26utm_medium%3DPlayStore_Button%26utm_campaign%3DAppTransformation"},r.a.createElement("img",{src:"http://tv.jazz.com.pk/images/googleplay.png",alt:!0})),r.a.createElement("a",{target:"_blank",href:"https://click.google-analytics.com/redirect?tid=UA-141129558-1&url=https%3A%2F%2Fitunes.apple.com%2Fpk%2Fapp%2Fjazz-tv%2Fid976208250&aid=com.spbtv.tv.mobilink&idfa=%{idfa})&cs=JazzTV&cm=JazzTV_Button&cn=AppTransformation"},r.a.createElement("img",{src:"http://tv.jazz.com.pk/images/appstore.png",alt:!0})),r.a.createElement("a",{target:"_blank",href:"https://appgallery.huawei.com/#/app/C100857935"},r.a.createElement("img",{src:"http://tv.jazz.com.pk/images/huawei.png",alt:!0}))))))},C=function(){return r.a.createElement("div",{className:"loader_sec"},r.a.createElement("div",{className:"loader-inner line-scale-pulse-out"},r.a.createElement("div",null),r.a.createElement("div",null),r.a.createElement("div",null),r.a.createElement("div",null),r.a.createElement("div",null)))},x=t(2),j=t.n(x),A=t(11),T=t(127),V=function(e){return r.a.createElement(T.a,null,r.a.createElement("meta",{charSet:"utf-8"}),r.a.createElement("title",null,e.title))},z=function(e){function a(){var e;return Object(o.a)(this,a),(e=Object(d.a)(this,Object(m.a)(a).call(this))).callGetStreamIp=function(){var a=Object(g.a)(e);console.log("Call Get Stream IP"),v.a.get(j.a.streamIpUrl).then(function(e){if(y.a.set("streamIp",e.data.ip),""!==a.props.location.search){var t=k.a.parse(a.props.location.search),n=new FormData;n.set("utm_source",t.utm_source),n.set("utm_medium",t.utm_medium),n.set("utm_campaign",t.utm_campaign),n.set("url",a.props.location.search),n.set("ip",e.data.ip),console.log("Campaign Param",t.campaign),y.a.set("utm",{utm_source:t.utm_source,utm_medium:t.utm_medium,utm_campaign:t.utm_campaign,url:a.props.location.search,ip:e.data.ip,campaign:t.campaign,tp:t.tp,txid:t.txid,tid:t.tid}),null!==y.a.get("userData")?a.callGetUserApi():y.a.get("isLoggedOut"),v.a.post(j.a.url+"add_refer_logs",n,{headers:{token:"774a719yycaa6xc44bg12e5hf5buj69dmkcdt46dl"}}).then(function(e){})}else null!==y.a.get("userData")?a.callGetUserApi():y.a.get("isLoggedOut")})},e.callHeaderEnrichmentApi=function(){var a=Object(g.a)(e);v.a.get(j.a.ucipUrl+"check_header?auth_id="+(new Date).getTime()).then(function(e){e.data.status?a.callSignInApi(e.data.data.number):null!=y.a.get("utm")&&"jazz"===y.a.get("utm").campaign&&(window.matchMedia("(max-width: 240px)").matches?this.props.history.push("/signin"):window.location.href="/signin")})},e.callSignInApi=function(a){var t=Object(g.a)(e),n=new FormData;n.set("mobile",a),n.set("phone_details",navigator.userAgent+" - "+y.a.get("streamIp")),n.set("is_header_enrichment","yes");var r=j.a.url+"signIn";null!=y.a.get("utm")&&(n.set("utm_source",y.a.get("utm").utm_source),n.set("utm_medium",y.a.get("utm").utm_medium),n.set("utm_campaign",y.a.get("utm").utm_campaign),n.set("url",y.a.get("utm").url),n.set("ip",y.a.get("utm").ip),"jazz"===y.a.get("utm").campaign&&(r=j.a.url+"campaignSignIn")),v.a.post(r,n,{headers:{token:"774a719yycaa6xc44bg12e5hf5buj69dmkcdt46dl"}}).then(function(e){if(e.data=j.a.decryptData(e.data.eData),"SUCCESS"===e.data.status){if(y.a.set("userData",e.data.data),!0===y.a.get("userData").subscription.auto_subscribe)if(w.a.modal.alert(y.a.get("userData").subscription.packageDetails.alert),_()(".uk-modal").addClass("uk-flex-top"),_()(".uk-modal-dialog").addClass("uk-margin-auto-vertical"),r===j.a.url+"campaignSignIn")if("9"===y.a.get("userData").subscription.packageDetails.id||"10"===y.a.get("userData").subscription.packageDetails.id){if("afl"===y.a.get("utm").tp){var n=j.a.url+"campaignApi?msisdn="+a+"&txid="+y.a.get("utm").txid+"&status=false";console.log("TP URL",n),v.a.get(n).then(function(e){console.log("Affiliate Mkt Response: ",e)})}window.dataLayer.push({event:"startTrial",conversionValue:0}),window.fbq("track","StartTrial",{currency:"PKR",value:0})}else{if(console.log("TP",y.a.get("utm").tp),"afl"===y.a.get("utm").tp){var l=j.a.url+"campaignApi?msisdn="+a+"&txid="+y.a.get("utm").txid+"&status=true";console.log("TP URL",l),v.a.get(l).then(function(e){console.log("Affiliate Mkt Response: ",e)}),v.a.get(j.a.url+"affiliateApi?mid=1569&tid="+y.a.get("utm").tid).then(function(e){console.log("Affiliate Mkt Big Response: ",e)})}window.dataLayer.push({event:"purchase",conversionValue:y.a.get("userData").subscription.packageDetails.price}),window.fbq("track","Subscribe",{currency:"PKR",value:y.a.get("userData").subscription.packageDetails.price})}else window.dataLayer.push({event:"startTrial",conversionValue:0}),window.fbq("track","StartTrial",{currency:"PKR",value:0});window.gtag("event","conversion",{send_to:"AW-965021408/ceAtCMfYhqMBEOCdlMwD"}),window.fbq("track","CompleteRegistration"),window.gtag("event","conversion",{send_to:"AW-965021408/vqAVCP-D9bcBEOCdlMwD"}),window.fbq("track","InitiateCheckout"),A.a.notify("You have successfully Logged In"),t.props.history.push("/")}else A.a.notify("Error in submitting request")})},e.callHomeApi=function(){var a=Object(g.a)(e);v.a.get(j.a.url+"home",{headers:{token:"774a719yycaa6xc44bg12e5hf5buj69dmkcdt46dl","Content-Type":"multipart/form-data"}}).then(function(e){e.data=j.a.decryptData(e.data.eData),a.setState({channels:{isLoaded:!0,list:e.data.data.channels,channelsTypeList:e.data.data.allCategories},banners:{isLoaded:!0,list:e.data.data.slider}})}).then(function(e){})},e.callGetUserApi=function(){Object(g.a)(e);var a=new FormData;a.set("user_id",y.a.get("userData").uid),a.set("mobile",y.a.get("userData").mobile),a.set("phone_details",navigator.userAgent+" - "+y.a.get("streamIp")),v.a.post(j.a.url+"getUser",a,{headers:{token:j.a.headerToken}}).then(function(e){e.data=j.a.decryptData(e.data.eData),"SUCCESS"===e.data.status&&(y.a.remove("userData"),y.a.set("userData",e.data.data),e.data.data.subscription.bundle_subscribe&&(w.a.modal.alert(e.data.data.subscription.bundle_message),_()(".uk-modal").addClass("uk-flex-top"),_()(".uk-modal-dialog").addClass("uk-margin-auto-vertical")))})},e.handleBannerList=function(){return e.state.banners.list.map(function(a){return r.a.createElement("li",null,r.a.createElement("a",{onClick:function(){return e.handleChannelLink(a.channelSlug)},href:"javascript:;"},r.a.createElement("div",{className:"uk-panel"},r.a.createElement("picture",null,r.a.createElement("source",{srcSet:a.banner,type:"image/png"}),r.a.createElement("img",{src:"/images/"+a.image})))))})},e.handleChannelLink=function(a){null!==y.a.get("userData")?e.props.history.push("/"+a):(y.a.set("notification","You need to Login first to get access"),window.matchMedia("(max-width: 240px)").matches?e.props.history.push("/signin"):window.location.href=a)},e.handleChannelsList=function(){var a="";return!0===e.state.channels.isLoaded&&(a=e.state.channels.list.map(function(a){return r.a.createElement("li",{className:a.channelType.join(" ")+" all"},r.a.createElement("a",{href:"javascript:;",onClick:function(){return e.handleChannelLink(a.channelSlug)},className:"channel_box"},r.a.createElement("picture",null,r.a.createElement("source",{srcSet:a.thumbnail,type:"image/png"}),r.a.createElement("img",{src:"/images/"+a.image,alt:a.channelName})),r.a.createElement("div",{className:"hvr_lv"},r.a.createElement("h3",{className:"h3tag"},r.a.createElement("div",{className:"mdl"},r.a.createElement("div",{className:"mdl_inner"},a.channelName.length>14?a.channelName.substr(0,14)+"...":a.channelName))))))})),a},e.handleChannelsTypeList=function(){var a="";return!0===e.state.channels.isLoaded&&(a=e.state.channels.channelsTypeList.map(function(e){return r.a.createElement("li",{"uk-filter-control":"."+e.categoryName},r.a.createElement("a",{href:"#"},e.categoryName))})),a},e.state={banners:{isLoaded:!1,msg:"Loading...",list:[]},channels:{isLoaded:!1,msg:"Loading...",list:[],channelsTypeList:[]}},e}return Object(p.a)(a,e),Object(u.a)(a,[{key:"componentDidMount",value:function(){this.callHomeApi(),_()(".explore_box a").click(function(){_()(".explore_box").hide(),_()(".fltr_lst").addClass("fltr_ht")}),this.callGetStreamIp(),null!=y.a.get("ga_client_id")?window.tagManagerEvent("Home Screen","Home","Home",{placement_channel:"",placement_program:"",placement_genre:"",user_gender:y.a.get("userData")&&y.a.get("userData").gender?y.a.get("userData").gender:"Unknown",user_age:y.a.get("userData")&&y.a.get("userData").dob?j.a.getDateDiff(y.a.get("userData").dob,j.a.currentDate):"",user_type:y.a.get("userData")&&y.a.get("userData").mobile?"real":"temp",user_behavior:j.a.currentEpocTime,custom_ga_client_id:""!==window.ga_client_id?window.ga_client_id:"",email:y.a.get("userData")&&y.a.get("userData").email?y.a.get("userData").email:"",name:y.a.get("userData")&&y.a.get("userData").first_name?y.a.get("userData").first_name:"",number:y.a.get("userData")&&y.a.get("userData").mobile?y.a.get("userData").mobile:"",search_keyword:"",user_custom_id:y.a.get("userData")&&y.a.get("userData").uid?y.a.get("userData").uid:"",user_device_id:""}):(L.a.initialize("UA-141129558-1"),L.a.ga(function(e){var a=e.get("clientId");window.ga_client_id=a,y.a.set("ga_client_id",a),window.tagManagerEvent("Home Screen","Home","Home",{placement_channel:"",placement_program:"",placement_genre:"",user_gender:y.a.get("userData")&&y.a.get("userData").gender?y.a.get("userData").gender:"Unknown",user_age:y.a.get("userData")&&y.a.get("userData").dob?j.a.getDateDiff(y.a.get("userData").dob,j.a.currentDate):"",user_type:y.a.get("userData")&&y.a.get("userData").mobile?"real":"temp",user_behavior:j.a.currentEpocTime,custom_ga_client_id:""!==window.ga_client_id?window.ga_client_id:"",email:y.a.get("userData")&&y.a.get("userData").email?y.a.get("userData").email:"",name:y.a.get("userData")&&y.a.get("userData").first_name?y.a.get("userData").first_name:"",number:y.a.get("userData")&&y.a.get("userData").mobile?y.a.get("userData").mobile:"",search_keyword:"",user_custom_id:y.a.get("userData")&&y.a.get("userData").uid?y.a.get("userData").uid:"",user_device_id:""})}))}},{key:"render",value:function(){return r.a.createElement("div",null,!1===this.state.banners.isLoaded?r.a.createElement(C,null):"",r.a.createElement(V,{title:"Home Screen"}),r.a.createElement(N,null),r.a.createElement("section",{className:"home_slider"},r.a.createElement("div",{className:"uk-position-relative uk-visible-toggle uk-light",tabIndex:-1,"uk-slider":"center: true; autoplay: true"},r.a.createElement("ul",{className:"uk-slider-items"},this.handleBannerList()),r.a.createElement("a",{className:"uk-position-center-left uk-position-small uk-hidden-hover prevnxt_btn",href:"#","uk-slider-item":"previous"},r.a.createElement("img",{src:"images/prev.svg","uk-svg":""})),r.a.createElement("a",{className:"uk-position-center-right uk-position-small uk-hidden-hover prevnxt_btn",href:"#","uk-slider-item":"next"},r.a.createElement("img",{src:"images/next.svg","uk-svg":""})))),r.a.createElement("section",{className:"channels_sec"},r.a.createElement("div",{className:"channel_fltr","uk-filter":"target: .js-filter"},r.a.createElement("div",{className:"filt_btn"},r.a.createElement("div",{className:"uk-container uk-container-expand"},r.a.createElement("div",{"uk-slider":"{'finite':false}",className:"uk-position-relative uk-slider uk-slider-container cat"},r.a.createElement("ul",{className:"uk-slider-items"},r.a.createElement("li",{"uk-filter-control":".all"},r.a.createElement("a",{href:"#"},"All")),this.handleChannelsTypeList()),r.a.createElement("a",{className:"uk-position-center-left uk-position-small uk-hidden-hover ",href:"#","uk-slider-item":"previous"},r.a.createElement("img",{src:"images/prev.svg","uk-svg":""})),r.a.createElement("a",{className:"uk-position-center-right uk-position-small uk-hidden-hover ",href:"#","uk-slider-item":"next"},r.a.createElement("img",{src:"images/next.svg","uk-svg":""}))))),r.a.createElement("div",{className:"fltr_lst_sec"},r.a.createElement("div",{className:"uk-container uk-container-expand uk-text-center"},r.a.createElement("ul",{className:"js-filter fltr_lst"},this.handleChannelsList()),r.a.createElement("div",{className:"explore_box"},r.a.createElement("a",{href:"javascript:;"},r.a.createElement("span",null,"EXPLORE MORE")," ",r.a.createElement("img",{src:"images/down.svg","uk-svg":""})," ")))))),r.a.createElement(S,null))}}]),a}(r.a.Component),O=function(e){return e.list.map(function(e){return r.a.createElement("li",null,r.a.createElement("a",{href:"/"+e.channelSlug,className:"channel_box"},r.a.createElement("picture",null,r.a.createElement("source",{srcSet:e.thumbnail,type:"image/png"}),r.a.createElement("img",{src:"/images/"+e.image,alt:e.channelName})),r.a.createElement("div",{className:"hvr_lv"},r.a.createElement("h3",{className:"h3tag"},r.a.createElement("div",{className:"mdl"},r.a.createElement("div",{className:"mdl_inner"},e.channelName.length>14?e.channelName.substr(0,14)+"...":e.channelName))))))})},I=function(e){function a(){var e;return Object(o.a)(this,a),(e=Object(d.a)(this,Object(m.a)(a).call(this))).getLiveViews=function(){var a=Object(g.a)(e);setInterval(function(){console.log("LIVE VIEWS UDPATED: "+a.state.liveViews),_()("#liveViews").html(a.state.liveViews+" Watching Now")},5e3)},e.callGetStreamIp=function(){var a=Object(g.a)(e);v.a.get(j.a.streamIpUrl).then(function(e){console.log("Live Channel"),y.a.set("streamIp",e.data.ip),a.callLiveChannelApi()})},e.callLiveChannelApi=function(){var a=e.props.match.params.slug,t=new FormData;t.set("slug",a),t.set("ip",y.a.get("streamIp")),t.set("user_id",null!==y.a.get("userData")?y.a.get("userData").uid:"9999999999"),t.set("mobile",null!==y.a.get("userData")?y.a.get("userData").mobile:"9999999999"),t.set("package_id",null!==y.a.get("userData")?y.a.get("userData").subscription.packageDetails.id:"9999999999"),console.log(y.a.get("userData"));var n=Object(g.a)(e);v()({method:"POST",url:j.a.url+"singleChannel",data:t,headers:{token:"774a719yycaa6xc44bg12e5hf5buj69dmkcdt46dl"}}).then(function(e){e.data=j.a.decryptData(e.data.eData),console.log(e.data),n.setState({isLoaded:!0,msg:"Data Loaded.",data:{channelDescription:e.data.data,allChannels:e.data.data.channels},metas:{title:e.data.data.ChannelName+" - TV Channel"}}),window.tagManagerEvent(e.data.data.ChannelName+" - TV Channel","Live TV",e.data.data.ChannelName,{placement_channel:e.data.data.ChannelName,placement_program:"",placement_genre:e.data.data.channelType,user_gender:y.a.get("userData")&&y.a.get("userData").gender?y.a.get("userData").gender:"Unknown",user_age:y.a.get("userData")&&y.a.get("userData").dob?j.a.getDateDiff(y.a.get("userData").dob,j.a.currentDate):"",user_type:y.a.get("userData")&&y.a.get("userData").mobile?"real":"temp",user_behavior:j.a.currentEpocTime,custom_ga_client_id:""!==window.ga_client_id?window.ga_client_id:"",email:y.a.get("userData")&&y.a.get("userData").email?y.a.get("userData").email:"",name:y.a.get("userData")&&y.a.get("userData").first_name?y.a.get("userData").first_name:"",number:y.a.get("userData")&&y.a.get("userData").mobile?y.a.get("userData").mobile:"",search_keyword:"",user_custom_id:y.a.get("userData")&&y.a.get("userData").uid?y.a.get("userData").uid:"",user_device_id:""}),n.initializePlayer()}).then(function(e){}),_()("footer").addClass("frt_style_live"),_()("header").addClass("hdr_style_live")},e.handleAllChannelsList=function(){return e.state.data.allChannels.map(function(e){return r.a.createElement("li",{className:"active",key:e.channelID},r.a.createElement("a",{href:"/"+e.channelSlug},r.a.createElement("div",{className:"chnl_img"},r.a.createElement("picture",null,r.a.createElement("source",{srcSet:e.thumbnail,type:"image/png"}),r.a.createElement("img",{src:"/images/"+e.image,alt:e.channelName})))))})},e.handleChannelDescription=function(){return r.a.createElement("div",null,r.a.createElement("div",{className:"vid_compo"},r.a.createElement("div",{className:"dtl_img"},r.a.createElement("picture",null,r.a.createElement("source",{srcSet:e.state.data.channelDescription.ChannelImage,type:"image/png"}),r.a.createElement("img",{src:"/images/"+e.state.data.channelDescription.image,alt:e.state.data.channelDescription.ChannelName})),r.a.createElement("div",{className:"dtl_img_bdr"})),r.a.createElement("div",{className:"dtl_txt"},r.a.createElement("h1",{className:"h1fordramadetail"},e.state.data.channelDescription.ChannelName),r.a.createElement("h3",null,e.state.data.channelDescription.channelType)),r.a.createElement("div",{className:"watching_now"},r.a.createElement("p",null,e.state.data.channelDescription.views," Views"))),r.a.createElement("div",{className:"dtl_wb"},r.a.createElement("div",{className:"dtl_txt"},r.a.createElement("p",null,e.state.data.channelDescription.ChannelDescription))))},e.initializePlayer=function(){console.log("INITIALIZE PLAYER CALLED");var a=Object(g.a)(e),t={licenseKey:"Kl8lNz1pPTBiPTR2KzJ5ZWk/cm9tNWRhc2lzMzBkYjBBJV8q",src:{hls:e.state.data.channelDescription.ChannelStreamingUrl},backupSrc:{hls:e.state.data.channelDescription.ChannelStreamingUrl},autoHeightMode:!0,pip:!0,delayToFade:3e3,gaLabel:"Live TV",logoWatermark:!0,logoPosition:"topleft",sharing:!0,speed:"Speed",isLive:!0,googleCast:!0,airplay:!0,hlsJSMaxBufferLength:24,hlsJSLiveSyncDuration:18,hlsJSStartLevel:-1,hlsJSMinAutoBitrate:1e5,hlsJSAbrBandWidthFactor:.9,hlsJSAbrBandWidthUpFactor:.7,hlsJSLiveBackBufferLength:0,detectAutoplayCapabilities:!0,autoplay:!0,srcChangeAutoplay:!0,playsInline:!0,skin:"s3",skinBackgroundColor:"rgba(0, 0, 0, 0.7)",skinButtonColor:"FFFFFF",skinAccentColor:"FFA52D",ads:!0,nav:!0,adBlockerDetection:!0,adEnablePreloading:!0,adBlockerDetectedMessage:"Ad-blocker software detected. Please disable Ad-blocker to watch stream.",quickRewind:10,adTagUrl:e.state.addTagUrl,adAutoAlign:!1},n=window.initializeRMP("rmpPlayer");console.log("RMP: "+n);var r=document.getElementById("rmpPlayer");r.addEventListener("ready",function(){console.log("player ready")}),r.addEventListener("playing",function(){a.stopPlayer(r),window.dataLayer.push({event:"playing",conversionValue:1})}),r.addEventListener("error",function(){window.dataLayer.push({event:"error",conversionValue:1})}),r.addEventListener("warning",function(){window.dataLayer.push({event:"warning",conversionValue:1})}),r.addEventListener("destroycompleted",function(){var e=r.parentNode;if(e)try{e.removeChild(r)}catch(a){console.log(a)}window.dataLayer.push({event:"destroycompleted",conversionValue:1})}),r.addEventListener("ready",function(){window.dataLayer.push({event:"ready",conversionValue:1})}),r.addEventListener("play",function(){window.dataLayer.push({event:"play",conversionValue:1})}),r.addEventListener("ended",function(){window.dataLayer.push({event:"ended",conversionValue:1})}),r.addEventListener("enterfullscreen",function(){window.dataLayer.push({event:"enterfullscreen",conversionValue:1})}),r.addEventListener("enterpictureinpicture",function(){window.dataLayer.push({event:"enterpictureinpicture",conversionValue:1})}),r.addEventListener("leavepictureinpicture",function(){window.dataLayer.push({event:"leavepictureinpicture",conversionValue:1})}),r.addEventListener("exitfullscreen",function(){window.dataLayer.push({event:"exitfullscreen",conversionValue:1})}),r.addEventListener("seeking",function(){window.dataLayer.push({event:"seeking",conversionValue:1})}),r.addEventListener("srcchanged",function(){window.dataLayer.push({event:"srcchanged",conversionValue:1})}),r.addEventListener("volumechange",function(){window.dataLayer.push({event:"volumechange",conversionValue:1})}),r.addEventListener("adimpression",function(){window.dataLayer.push({event:"adimpression",conversionValue:1})}),r.addEventListener("adclick",function(){window.dataLayer.push({event:"adclick",conversionValue:1})}),r.addEventListener("bufferstalled",function(){window.dataLayer.push({event:"bufferstalled",conversionValue:1})}),r.addEventListener("buffernotstalledanymore",function(){window.dataLayer.push({event:"buffernotstalledanymore",conversionValue:1})}),r.addEventListener("ratechange",function(){window.dataLayer.push({event:"ratechange",conversionValue:1})}),r.addEventListener("hlsmanifestloaded",function(){window.dataLayer.push({event:"hlsmanifestloaded",conversionValue:1})}),r.addEventListener("hlserror",function(){window.dataLayer.push({event:"hlserror",conversionValue:1})}),r.addEventListener("adcomplete",function(){window.dataLayer.push({event:"adcomplete",conversionValue:1})}),r.addEventListener("adskipped",function(){window.dataLayer.push({event:"adskipped",conversionValue:1})}),r.addEventListener("enterfullscreen",function(){console.log("Entered in Full Screen"),window.matchMedia("(max-width: 240px)").matches&&(n.setControls(!1),_()("body").css("cursor","none")),window.fullScreenPlayer()}),r.addEventListener("exitfullscreen",function(){n.setControls(!0),_()("body").css("cursor","pointer"),window.exitFullScreenPlayer()}),n.init(t),window.RMP=n,window.RMPCONTAINER=r},e.stopPlayer=function(a){var t=Object(g.a)(e);setTimeout(function(){window.RMP.pause(),_()(".download_app").show();var e=t.state.data;e.channelDescription.ChannelStreamingUrl="",t.setState({data:e});var n=a.parentNode;if(n)try{n.removeChild(a)}catch(r){console.log(r)}},5e3)},e.initializePlayer=e.initializePlayer.bind(Object(g.a)(e)),e.getLiveViews=e.getLiveViews.bind(Object(g.a)(e)),e.state={isLoaded:!1,msg:"Loading...",data:{channelDescription:[],allChannels:[],popularVideos:[],latestVideos:[]},channelUrl:{isLoaded:!1,url:"",is_playback:"",backup_live_stream_url:"",addTagUrl:"",ad_start_time:1e4,ad_repeat_time:1e4,ad_horizontal:"",ad_vertical:""},liveViews:0,metas:{title:""}},e}return Object(p.a)(a,e),Object(u.a)(a,[{key:"componentDidMount",value:function(){null===y.a.get("userData")?(y.a.set("notification","You need to Login first to get access"),window.matchMedia("(max-width: 240px)").matches?this.props.history.push("/signin"):this.callGetStreamIp()):this.callGetStreamIp(),_()(window).scrollTop(0);this.props.match.params.slug;this.getLiveViews(),document.addEventListener("keydown",function(e){console.log("Evt Key",e.key),"SoftRight"==e.key?window.exitFullScreenPlayer():"BackSpace"==e.key?window.exitFullScreenPlayer():console.log("Other key")})}},{key:"componentWillUnmount",value:function(){this.props.match.params.slug}},{key:"render",value:function(){return r.a.createElement("div",null,!1===this.state.isLoaded?r.a.createElement(C,null):"",r.a.createElement(V,{title:this.state.metas.title}),r.a.createElement(N,null),r.a.createElement("div",{className:"list_side"},r.a.createElement("h4",{className:"h4fordramadetail"},"Live Channels"),r.a.createElement("div",{className:"channel_list",style:{}},r.a.createElement("ul",null,this.handleAllChannelsList()))),r.a.createElement("div",{className:"uk-text-center"},r.a.createElement("div",{className:"vidplayer_container uk-flex-center pd_spl",id:"after_load"},r.a.createElement("div",{className:"video_player"},r.a.createElement("div",{className:"download_app",style:{display:"none"}},r.a.createElement("div",{className:"mdl_btn"},r.a.createElement("div",{className:"mdl_inner"},r.a.createElement("div",{className:"logo uk-text-center"},r.a.createElement("img",{src:"logo.svg"})),r.a.createElement("div",{className:"btn"},r.a.createElement("p",null,"Download App to continue watching"),r.a.createElement("a",{href:"https://tamashaweb.com/landing/downloads/tamasha.apk?utm_source=Tamasha&utm_medium=Tamasha_Button&utm_campaign=AppDownload"},"Download Now"))))),r.a.createElement("div",{id:"rmpPlayer"}),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-sm-12 margin-top-10"},r.a.createElement("button",{id:"getSrc",style:{display:"none"}}),r.a.createElement("span",{id:"getSrcResult"}))),r.a.createElement("div",{id:"fullscreenbutton",style:{display:"none"},className:"rmp-fullscreen rmp-i rmp-i-resize-full after_max",tabIndex:0,role:"button","aria-label":"Enter fullscreen"})))),r.a.createElement("section",{className:"live_sec uk-padding-remove-top m_h_auto"},r.a.createElement("div",{className:"vidplayer_container uk-flex-center uk-margin-remove-top"},this.handleChannelDescription())),r.a.createElement("section",{className:"channels_sec channel_m_live_player"},r.a.createElement("div",{className:"channel_fltr","uk-filter":"target: .js-filter"},r.a.createElement("div",{className:"fltr_lst_sec"},r.a.createElement("div",{className:"uk-container uk-container-expand uk-text-center"},r.a.createElement("ul",{className:"js-filter search_lst"},r.a.createElement(O,{list:this.state.data.allChannels})))))),r.a.createElement(S,null))}}]),a}(r.a.Component),P=t(53),U=t.n(P),M=(r.a.Component,function(e){function a(){var e;return Object(o.a)(this,a),(e=Object(d.a)(this,Object(m.a)(a).call(this))).handleChannelsList=function(){var a="";return!0===e.state.channels.isLoaded&&(a=e.state.channels.list.map(function(e){return r.a.createElement("li",null,r.a.createElement("a",{href:"/"+e.slug,className:"channel_box"},r.a.createElement("img",{src:"/images/"+e.image,alt:e.name}),r.a.createElement("div",{className:"hvr_lv"},r.a.createElement("h3",{className:"h3tag"},r.a.createElement("div",{className:"mdl"},r.a.createElement("div",{className:"mdl_inner"},e.name))))))})),a},e.state={isLoaded:!1,channels:{isLoaded:!1,list:[]},metas:{title:""}},e}return Object(p.a)(a,e),Object(u.a)(a,[{key:"componentDidMount",value:function(){var e=this.props.match.params.keyword;this.callSearchApi(e),this.setState({metas:{title:e+" keyword"}}),window.tagManagerEvent(e+" keyword","Search",e,{placement_channel:"",placement_program:"",placement_genre:"",user_gender:y.a.get("userData")&&y.a.get("userData").gender?y.a.get("userData").gender:"Unknown",user_age:y.a.get("userData")&&y.a.get("userData").dob?j.a.getDateDiff(y.a.get("userData").dob,j.a.currentDate):"",user_type:y.a.get("userData")&&y.a.get("userData").mobile?"real":"temp",user_behavior:j.a.currentEpocTime,custom_ga_client_id:""!==window.ga_client_id?window.ga_client_id:"",email:y.a.get("userData")&&y.a.get("userData").email?y.a.get("userData").email:"",name:y.a.get("userData")&&y.a.get("userData").first_name?y.a.get("userData").first_name:"",number:y.a.get("userData")&&y.a.get("userData").mobile?y.a.get("userData").mobile:"",search_keyword:e,user_custom_id:y.a.get("userData")&&y.a.get("userData").uid?y.a.get("userData").uid:"",user_device_id:""})}},{key:"callSearchApi",value:function(e){var a=new FormData,t=this;a.set("word",e),a.set("user_id",null===y.a.get("userData")?"":y.a.get("userData").uid),v.a.post(j.a.url+"customSearchNew",a,{headers:{token:j.a.headerToken}}).then(function(e){e.data=j.a.decryptData(e.data.eData),"SUCCESS"===e.data.status?t.setState({isLoaded:!0,channels:{isLoaded:!0,list:e.data.data}}):t.setState({isLoaded:!0})})}},{key:"render",value:function(){return r.a.createElement("div",null,!1===this.state.isLoaded?r.a.createElement(C,null):"",r.a.createElement(V,{title:this.state.metas.title}),r.a.createElement(N,null),r.a.createElement("section",{className:"channels_sec"},r.a.createElement("div",{className:"channel_fltr","uk-filter":"target: .js-filter"},r.a.createElement("div",{className:"fltr_lst_sec"},r.a.createElement("div",{className:"uk-container uk-container-expand uk-text-center"},r.a.createElement("ul",{className:"js-filter search_lst"},this.handleChannelsList(),this.state.channels.list.length<1?"No Result found!":""))))),r.a.createElement(S,null))}}]),a}(r.a.Component));t(296),r.a.Component,r.a.Component;var F=function(){return r.a.createElement(c.c,null,r.a.createElement(c.a,{exact:!0,path:"/",component:z}),r.a.createElement(c.a,{exact:!0,path:"/:slug",component:I}),r.a.createElement(c.a,{path:"/search/:keyword",component:M}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(s.a,null,r.a.createElement(F,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[132,1,2]]]);
//# sourceMappingURL=main.400210f0.chunk.js.map
