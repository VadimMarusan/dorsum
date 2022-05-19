(function(g){var window=this;'use strict';var YWa=function(a,b){a.Oa("onAutonavCoundownStarted",b)},l3=function(a,b,c){g.O(a.element,"ytp-suggestion-set",!!b.videoId);
var d=b.playlistId;c=b.Se(c?c:"mqdefault.jpg");var e=null,f=null;b instanceof g.vD&&(b.lengthText?(e=b.lengthText||null,f=b.Iq||null):b.lengthSeconds&&(e=g.pJ(b.lengthSeconds),f=g.pJ(b.lengthSeconds,!0)));var k=!!d;d=k&&"RD"===g.rD(d).type;var l=b instanceof g.vD?b.isLivePlayback:null,m=b instanceof g.vD?b.isUpcoming:null;c={title:b.title,author:b.author,author_and_views:b.shortViewCount?b.author+" \u2022 "+b.shortViewCount:b.author,aria_label:b.ariaLabel||g.RF("\u041f\u043e\u0441\u043c\u043e\u0442\u0440\u0435\u0442\u044c $TITLE",
{TITLE:b.title}),duration:e,timestamp:f,url:b.il(),is_live:l,is_upcoming:m,is_list:k,is_mix:d,background:c?"background-image: url("+c+")":"",views_and_publish_time:b.shortViewCount?b.shortViewCount+" \u2022 "+b.publishedTimeText:b.publishedTimeText,autoplayAlternativeHeader:b.Hn};b instanceof g.uD&&(c.playlist_length=b.playlistLength);a.update(c)},m3=function(a){var b=a.V(),c=b.j;
g.W.call(this,{G:"a",L:"ytp-autonav-suggestion-card",W:{href:"{{url}}",target:c?b.J:"","aria-label":"{{aria_label}}","data-is-live":"{{is_live}}","data-is-list":"{{is_list}}","data-is-mix":"{{is_mix}}","data-is-upcoming":"{{is_upcoming}}"},U:[{G:"div",Ga:["ytp-autonav-endscreen-upnext-thumbnail","ytp-autonav-thumbnail-small"],W:{style:"{{background}}"},U:[{G:"div",W:{"aria-label":"{{timestamp}}"},Ga:["ytp-autonav-timestamp"],oa:"{{duration}}"},{G:"div",Ga:["ytp-autonav-live-stamp"],oa:"\u0412 \u044d\u0444\u0438\u0440\u0435"},
{G:"div",Ga:["ytp-autonav-upcoming-stamp"],oa:"\u0421\u043a\u043e\u0440\u043e \u0432 \u044d\u0444\u0438\u0440\u0435"},{G:"div",L:"ytp-autonav-list-overlay",U:[{G:"div",L:"ytp-autonav-mix-text",oa:"\u041c\u0438\u043a\u0441"},{G:"div",L:"ytp-autonav-mix-icon"}]}]},{G:"div",Ga:["ytp-autonav-endscreen-upnext-title","ytp-autonav-title-card"],oa:"{{title}}"},{G:"div",Ga:["ytp-autonav-endscreen-upnext-author","ytp-autonav-author-card"],oa:"{{author}}"},{G:"div",Ga:["ytp-autonav-endscreen-upnext-author",
"ytp-autonav-view-and-date-card"],oa:"{{views_and_publish_time}}"}]});this.I=a;this.suggestion=null;this.j=c;this.Pa("click",this.onClick);this.Pa("keypress",this.onKeyPress)},o3=function(a,b){b=void 0===b?!1:b;
g.W.call(this,{G:"div",L:"ytp-autonav-endscreen-countdown-container"});var c=this;this.J=b;this.D=void 0;this.u=0;b=a.V();var d=b.j;this.I=a;this.suggestion=null;this.onVideoDataChange("newdata",this.I.getVideoData());this.T(a,"videodatachange",this.onVideoDataChange);this.j=new g.W({G:"div",L:"ytp-autonav-endscreen-upnext-container",W:{"aria-label":"{{aria_label}}","data-is-live":"{{is_live}}","data-is-list":"{{is_list}}","data-is-mix":"{{is_mix}}","data-is-upcoming":"{{is_upcoming}}"},U:[{G:"div",
L:"ytp-autonav-endscreen-upnext-header"},{G:"div",L:"ytp-autonav-endscreen-upnext-alternative-header",oa:"{{autoplayAlternativeHeader}}"},{G:"a",L:"ytp-autonav-endscreen-link-container",W:{href:"{{url}}",target:d?b.J:""},U:[{G:"div",L:"ytp-autonav-endscreen-upnext-thumbnail",W:{style:"{{background}}"},U:[{G:"div",W:{"aria-label":"{{timestamp}}"},Ga:["ytp-autonav-timestamp"],oa:"{{duration}}"},{G:"div",Ga:["ytp-autonav-live-stamp"],oa:"\u0412 \u044d\u0444\u0438\u0440\u0435"},{G:"div",Ga:["ytp-autonav-upcoming-stamp"],
oa:"\u0421\u043a\u043e\u0440\u043e \u0432 \u044d\u0444\u0438\u0440\u0435"}]},{G:"div",L:"ytp-autonav-endscreen-video-info",U:[{G:"div",L:"ytp-autonav-endscreen-premium-badge"},{G:"div",L:"ytp-autonav-endscreen-upnext-title",oa:"{{title}}"},{G:"div",L:"ytp-autonav-endscreen-upnext-author",oa:"{{author}}"},{G:"div",L:"ytp-autonav-view-and-date",oa:"{{views_and_publish_time}}"},{G:"div",L:"ytp-autonav-author-and-view",oa:"{{author_and_views}}"}]}]}]});g.H(this,this.j);this.j.Ba(this.element);d||this.T(this.j.Da("ytp-autonav-endscreen-link-container"),
"click",this.PJ);this.I.Bb(this.element,this,115127);this.I.Bb(this.j.Da("ytp-autonav-endscreen-link-container"),this,115128);this.overlay=new g.W({G:"div",L:"ytp-autonav-overlay"});g.H(this,this.overlay);this.overlay.Ba(this.element);this.B=new g.W({G:"div",L:"ytp-autonav-endscreen-button-container"});g.H(this,this.B);this.B.Ba(this.element);this.cancelButton=new g.W({G:"button",Ga:["ytp-autonav-endscreen-upnext-button","ytp-autonav-endscreen-upnext-cancel-button"],W:{"aria-label":"\u041e\u0442\u043c\u0435\u043d\u0438\u0442\u044c \u0430\u0432\u0442\u043e\u0432\u043e\u0441\u043f\u0440\u043e\u0438\u0437\u0432\u0435\u0434\u0435\u043d\u0438\u0435"},
oa:"\u041e\u0442\u043c\u0435\u043d\u0430"});g.H(this,this.cancelButton);this.cancelButton.Ba(this.B.element);this.cancelButton.Pa("click",this.CS,this);this.I.Bb(this.cancelButton.element,this,115129);this.playButton=new g.W({G:"a",Ga:["ytp-autonav-endscreen-upnext-button","ytp-autonav-endscreen-upnext-play-button"],W:{href:"{{url}}",role:"button","aria-label":"\u0412\u043e\u0441\u043f\u0440\u043e\u0438\u0437\u0432\u0435\u0441\u0442\u0438 \u0441\u043b\u0435\u0434\u0443\u044e\u0449\u0435\u0435 \u0432\u0438\u0434\u0435\u043e"},
oa:"\u0412\u043e\u0441\u043f\u0440\u043e\u0438\u0437\u0432\u0435\u0441\u0442\u0438"});g.H(this,this.playButton);this.playButton.Ba(this.B.element);this.playButton.Pa("click",this.PJ,this);this.I.Bb(this.playButton.element,this,115130);this.C=new g.L(function(){n3(c)},500);
g.H(this,this.C);this.OJ();this.T(a,"autonavvisibility",this.OJ)},r3=function(a){var b=a.I.Jj(!0,a.I.isFullscreen());
g.O(a.element,"ytp-autonav-endscreen-small-mode",a.Gf(b));g.O(a.element,"ytp-autonav-endscreen-is-premium",!!a.suggestion&&!!a.suggestion.gC);g.O(a.I.getRootNode(),"ytp-autonav-endscreen-cancelled-state",!a.I.Be());g.O(a.I.getRootNode(),"countdown-running",a.Rh());g.O(a.element,"ytp-player-content",a.I.Be());g.Jm(a.overlay.element,{width:b.width+"px"});if(!a.Rh()){a.I.Be()?p3(a,Math.round(q3(a)/1E3)):p3(a);b=!!a.suggestion&&!!a.suggestion.Hn;var c=a.I.Be()||!b;g.O(a.element,"ytp-autonav-endscreen-upnext-alternative-header-only",
!c&&b);g.O(a.element,"ytp-autonav-endscreen-upnext-no-alternative-header",c&&!b);g.qI(a.B,a.I.Be())}},n3=function(a){var b=q3(a),c=Math,d=c.min;
var e=a.u?Date.now()-a.u:0;c=d.call(c,e,b);p3(a,Math.ceil((b-c)/1E3));500>=b-c&&a.Rh()?a.select(!0):a.Rh()&&a.C.start()},q3=function(a){var b=a.I.lq();
return 0<=b?b:g.aB(a.I.V().experiments,"autoplay_time")||1E4},p3=function(a,b){b=void 0===b?-1:b;
a=a.j.Da("ytp-autonav-endscreen-upnext-header");g.bi(a);if(0<=b){b=String(b);var c="\u0412\u0438\u0434\u0435\u043e \u043d\u0430\u0447\u043d\u0435\u0442\u0441\u044f \u0447\u0435\u0440\u0435\u0437 $SECONDS".match(RegExp("\\$SECONDS","gi"))[0],d="\u0412\u0438\u0434\u0435\u043e \u043d\u0430\u0447\u043d\u0435\u0442\u0441\u044f \u0447\u0435\u0440\u0435\u0437 $SECONDS".indexOf(c);if(0<=d){a.appendChild(g.ai("\u0412\u0438\u0434\u0435\u043e \u043d\u0430\u0447\u043d\u0435\u0442\u0441\u044f \u0447\u0435\u0440\u0435\u0437 $SECONDS".slice(0,
d)));var e=g.$h("span");g.Ap(e,"ytp-autonav-endscreen-upnext-header-countdown-number");g.gi(e,b);a.appendChild(e);a.appendChild(g.ai("\u0412\u0438\u0434\u0435\u043e \u043d\u0430\u0447\u043d\u0435\u0442\u0441\u044f \u0447\u0435\u0440\u0435\u0437 $SECONDS".slice(d+c.length)));return}}g.gi(a,"\u0421\u043b\u0435\u0434\u0443\u044e\u0449\u0435\u0435")},s3=function(a,b){g.W.call(this,{G:"div",
Ga:["html5-endscreen","ytp-player-content",b||"base-endscreen"]});this.created=!1;this.player=a},t3=function(a){g.W.call(this,{G:"div",
Ga:["ytp-upnext","ytp-player-content"],W:{"aria-label":"{{aria_label}}"},U:[{G:"div",L:"ytp-cued-thumbnail-overlay-image",W:{style:"{{background}}"}},{G:"span",L:"ytp-upnext-top",U:[{G:"span",L:"ytp-upnext-header",oa:"\u0421\u043b\u0435\u0434\u0443\u044e\u0449\u0435\u0435"},{G:"span",L:"ytp-upnext-title",oa:"{{title}}"},{G:"span",L:"ytp-upnext-author",oa:"{{author}}"}]},{G:"a",L:"ytp-upnext-autoplay-icon",W:{role:"button",href:"{{url}}","aria-label":"\u0412\u043e\u0441\u043f\u0440\u043e\u0438\u0437\u0432\u0435\u0441\u0442\u0438 \u0441\u043b\u0435\u0434\u0443\u044e\u0449\u0435\u0435 \u0432\u0438\u0434\u0435\u043e"},
U:[{G:"svg",W:{height:"100%",version:"1.1",viewBox:"0 0 72 72",width:"100%"},U:[{G:"circle",L:"ytp-svg-autoplay-circle",W:{cx:"36",cy:"36",fill:"#fff","fill-opacity":"0.3",r:"31.5"}},{G:"circle",L:"ytp-svg-autoplay-ring",W:{cx:"-36",cy:"36","fill-opacity":"0",r:"33.5",stroke:"#FFFFFF","stroke-dasharray":"211","stroke-dashoffset":"-211","stroke-width":"4",transform:"rotate(-90)"}},{G:"path",L:"ytp-svg-fill",W:{d:"M 24,48 41,36 24,24 V 48 z M 44,24 v 24 h 4 V 24 h -4 z"}}]}]},{G:"span",L:"ytp-upnext-bottom",
U:[{G:"span",L:"ytp-upnext-cancel"},{G:"span",L:"ytp-upnext-paused",oa:"\u0410\u0432\u0442\u043e\u0432\u043e\u0441\u043f\u0440\u043e\u0438\u0437\u0432\u0435\u0434\u0435\u043d\u0438\u0435 \u043f\u0440\u0438\u043e\u0441\u0442\u0430\u043d\u043e\u0432\u043b\u0435\u043d\u043e."}]}]});this.api=a;this.cancelButton=null;this.D=this.Da("ytp-svg-autoplay-ring");this.B=this.notification=this.j=this.suggestion=null;this.C=new g.L(this.Lz,5E3,this);this.u=0;var b=this.Da("ytp-upnext-cancel");this.cancelButton=
new g.W({G:"button",Ga:["ytp-upnext-cancel-button","ytp-button"],W:{tabindex:"0","aria-label":"\u041e\u0442\u043c\u0435\u043d\u0438\u0442\u044c \u0430\u0432\u0442\u043e\u0432\u043e\u0441\u043f\u0440\u043e\u0438\u0437\u0432\u0435\u0434\u0435\u043d\u0438\u0435"},oa:"\u041e\u0442\u043c\u0435\u043d\u0430"});g.H(this,this.cancelButton);this.cancelButton.Pa("click",this.DS,this);this.cancelButton.Ba(b);this.cancelButton&&this.api.Bb(this.cancelButton.element,this,115129);g.H(this,this.C);this.api.Bb(this.element,
this,18788);b=this.Da("ytp-upnext-autoplay-icon");this.T(b,"click",this.ES);this.api.Bb(b,this,115130);this.QJ();this.T(a,"autonavvisibility",this.QJ);this.T(a,"mdxnowautoplaying",this.rX);this.T(a,"mdxautoplaycanceled",this.sX);g.O(this.element,"ytp-upnext-mobile",this.api.V().isMobile)},ZWa=function(a,b){return b?b:0<=a.api.lq()?a.api.lq():g.aB(a.api.V().experiments,"autoplay_time")||1E4},u3=function(a,b){b=ZWa(a,b);
var c=Math,d=c.min;var e=(0,g.R)()-a.u;c=d.call(c,e,b);b=0===b?1:Math.min(c/b,1);a.D.setAttribute("stroke-dashoffset",""+-211*(b+1));1<=b&&a.Rh()&&3!==a.api.getPresentingPlayerType()?a.select(!0):a.Rh()&&a.j.start()},v3=function(a){s3.call(this,a,"autonav-endscreen");
this.overlay=this.videoData=null;this.table=new g.W({G:"div",L:"ytp-suggestion-panel",U:[{G:"div",Ga:["ytp-autonav-endscreen-upnext-header","ytp-autonav-endscreen-more-videos"],oa:"\u041f\u043e\u043a\u0430\u0437\u0430\u0442\u044c \u0434\u0440\u0443\u0433\u0438\u0435 \u0432\u0438\u0434\u0435\u043e"}]});this.K=new g.W({G:"div",L:"ytp-suggestions-container"});this.videos=[];this.B=null;this.D=this.J=!1;this.u=new o3(this.player);g.H(this,this.u);this.u.Ba(this.element);a.getVideoData().kc?this.j=this.u:
(this.j=new t3(a),g.gL(this.player,this.j.element,4),g.H(this,this.j));this.overlay=new g.W({G:"div",L:"ytp-autonav-overlay-cancelled-state"});g.H(this,this.overlay);this.overlay.Ba(this.element);this.C=new g.gA(this);g.H(this,this.C);g.H(this,this.table);this.table.Ba(this.element);this.table.show();g.H(this,this.K);this.K.Ba(this.table.element);this.hide()},w3=function(a){var b=a.Be();
b!==a.D&&(a.D=b,a.player.ea("autonavvisibility"),a.D?(a.u!==a.j&&a.u.hide(),a.table.hide()):(a.u!==a.j&&a.u.show(),a.table.show()))},x3=function(a){s3.call(this,a,"subscribecard-endscreen");
this.j=new g.W({G:"div",L:"ytp-subscribe-card",U:[{G:"img",L:"ytp-author-image",W:{src:"{{profilePicture}}"}},{G:"div",L:"ytp-subscribe-card-right",U:[{G:"div",L:"ytp-author-name",oa:"{{author}}"},{G:"div",L:"html5-subscribe-button-container"}]}]});g.H(this,this.j);this.j.Ba(this.element);var b=a.getVideoData();this.subscribeButton=new g.yM("\u041f\u043e\u0434\u043f\u0438\u0441\u0430\u0442\u044c\u0441\u044f",null,"\u041e\u0442\u043c\u0435\u043d\u0438\u0442\u044c \u043f\u043e\u0434\u043f\u0438\u0441\u043a\u0443",
null,!0,!1,b.sj,b.subscribed,"trailer-endscreen",null,null,a);g.H(this,this.subscribeButton);this.subscribeButton.Ba(this.j.Da("html5-subscribe-button-container"));this.T(a,"videodatachange",this.Ka);this.Ka();this.hide()},y3=function(a){var b=a.V(),c=g.kA||g.yC?{style:"will-change: opacity"}:void 0,d=b.j,e=["ytp-videowall-still"];
b.isMobile&&e.push("ytp-videowall-show-text");g.W.call(this,{G:"a",Ga:e,W:{href:"{{url}}",target:d?b.J:"","aria-label":"{{aria_label}}","data-is-live":"{{is_live}}","data-is-list":"{{is_list}}","data-is-mix":"{{is_mix}}"},U:[{G:"div",L:"ytp-videowall-still-image",W:{style:"{{background}}"}},{G:"span",L:"ytp-videowall-still-info",U:[{G:"span",L:"ytp-videowall-still-info-bg",U:[{G:"span",L:"ytp-videowall-still-info-content",W:c,U:[{G:"span",L:"ytp-videowall-still-info-title",oa:"{{title}}"},{G:"span",
L:"ytp-videowall-still-info-author",oa:"{{author_and_views}}"},{G:"span",L:"ytp-videowall-still-info-live",oa:"\u0412 \u044d\u0444\u0438\u0440\u0435"},{G:"span",L:"ytp-videowall-still-info-duration",oa:"{{duration}}"}]}]}]},{G:"span",Ga:["ytp-videowall-still-listlabel-regular","ytp-videowall-still-listlabel"],U:[{G:"span",L:"ytp-videowall-still-listlabel-icon"},"\u041f\u043b\u0435\u0439\u043b\u0438\u0441\u0442",{G:"span",L:"ytp-videowall-still-listlabel-length",U:[" (",{G:"span",oa:"{{playlist_length}}"},
")"]}]},{G:"span",Ga:["ytp-videowall-still-listlabel-mix","ytp-videowall-still-listlabel"],U:[{G:"span",L:"ytp-videowall-still-listlabel-mix-icon"},"\u041c\u0438\u043a\u0441",{G:"span",L:"ytp-videowall-still-listlabel-length",oa:" (50+)"}]}]});this.suggestion=null;this.u=d;this.api=a;this.j=new g.gA(this);g.H(this,this.j);this.Pa("click",this.onClick);this.Pa("keypress",this.onKeyPress);this.j.T(a,"videodatachange",this.onVideoDataChange);a.ah(this.element,this);this.onVideoDataChange()},z3=function(a){s3.call(this,
a,"videowall-endscreen");
var b=this;this.I=a;this.B=0;this.stills=[];this.C=this.videoData=null;this.D=this.K=!1;this.N=null;this.u=new g.gA(this);g.H(this,this.u);this.J=new g.L(function(){g.M(b.element,"ytp-show-tiles")},0);
g.H(this,this.J);var c=new g.W({G:"button",Ga:["ytp-button","ytp-endscreen-previous"],W:{"aria-label":"\u041d\u0430\u0437\u0430\u0434"},U:[g.vI()]});g.H(this,c);c.Ba(this.element);c.Pa("click",this.JS,this);this.table=new g.nI({G:"div",L:"ytp-endscreen-content"});g.H(this,this.table);this.table.Ba(this.element);c=new g.W({G:"button",Ga:["ytp-button","ytp-endscreen-next"],W:{"aria-label":"\u0421\u043b\u0435\u0434\u0443\u044e\u0449\u0435\u0435"},U:[g.wI()]});g.H(this,c);c.Ba(this.element);c.Pa("click",
this.IS,this);a.getVideoData().kc?this.j=new o3(a,!0):this.j=new t3(a);g.H(this,this.j);g.gL(this.player,this.j.element,4);this.hide()},A3=function(a){return g.hL(a.player)&&a.Uv()&&!a.C},B3=function(a){var b=a.Be();
b!==a.K&&(a.K=b,a.player.ea("autonavvisibility"))},C3=function(a){g.tL.call(this,a);
var b=this;this.endScreen=null;this.j=this.u=this.B=!1;this.listeners=new g.gA(this);g.H(this,this.listeners);this.env=a.V();$Wa(a)?(this.B=!0,aXa(this),this.j?this.endScreen=new v3(a):this.endScreen=new z3(this.player)):this.env.Sd?this.endScreen=new x3(this.player):this.endScreen=new s3(this.player);g.H(this,this.endScreen);g.gL(this.player,this.endScreen.element,4);bXa(this);this.listeners.T(a,"videodatachange",this.onVideoDataChange,this);this.listeners.T(a,g.Kw("endscreen"),function(c){b.onCueRangeEnter(c)});
this.listeners.T(a,g.Lw("endscreen"),function(c){b.onCueRangeExit(c)})},aXa=function(a){var b=a.player.getVideoData();
if(!b||a.j===b.oh&&a.u===b.kc)return!1;a.j=b.oh;a.u=b.kc;return!0},$Wa=function(a){a=a.V();
return!a.K&&a.Lb&&!a.Sd},bXa=function(a){a.player.kf("endscreen");
var b=a.player.getVideoData();b=new g.Iw(Math.max(1E3*(b.lengthSeconds-10),0),0x8000000000000,{id:"preload",namespace:"endscreen"});var c=new g.Iw(0x8000000000000,0x8000000000000,{id:"load",priority:8,namespace:"endscreen"});a.player.Qd([b,c])};
g.$K.prototype.lq=g.da(4,function(){return this.app.lq()});
g.NU.prototype.lq=g.da(3,function(){return this.getVideoData().jP});g.v(m3,g.W);m3.prototype.select=function(){(this.I.qk(this.suggestion.videoId,this.suggestion.sessionData,this.suggestion.playlistId,void 0,void 0,this.suggestion.qw||void 0)||this.I.S("web_player_endscreen_double_log_fix_killswitch"))&&this.I.xb(this.element)};
m3.prototype.onClick=function(a){g.SL(a,this.I,this.j,this.suggestion.sessionData||void 0)&&this.select()};
m3.prototype.onKeyPress=function(a){switch(a.keyCode){case 13:case 32:g.xu(a)||(this.select(),g.wu(a))}};g.v(o3,g.W);g.h=o3.prototype;g.h.iz=function(a){this.suggestion!==a&&(this.suggestion=a,l3(this.j,a),this.playButton.Na("url",this.suggestion.il()),r3(this))};
g.h.Rh=function(){return 0<this.u};
g.h.Du=function(){this.Rh()||(this.u=Date.now(),n3(this),YWa(this.I,q3(this)),g.O(this.I.getRootNode(),"countdown-running",this.Rh()))};
g.h.Tq=function(){this.jn();n3(this);var a=this.j.Da("ytp-autonav-endscreen-upnext-header");a&&g.gi(a,"\u0421\u043b\u0435\u0434\u0443\u044e\u0449\u0435\u0435")};
g.h.jn=function(){this.Rh()&&(this.C.stop(),this.u=0)};
g.h.select=function(a){this.I.nextVideo(!1,void 0===a?!1:a);this.jn()};
g.h.PJ=function(a){g.SL(a,this.I)&&(a.currentTarget===this.playButton.element?this.I.xb(this.playButton.element):a.currentTarget===this.j.Da("ytp-autonav-endscreen-link-container")&&(a=this.j.Da("ytp-autonav-endscreen-link-container"),this.I.bb(a,!0),this.I.xb(a)),this.select())};
g.h.CS=function(){this.I.xb(this.cancelButton.element);g.bL(this.I,!0);this.D&&this.I.Oa("innertubeCommand",this.D)};
g.h.onVideoDataChange=function(a,b){var c;this.D=null==(c=b.O_)?void 0:c.command};
g.h.OJ=function(){var a=this.I.Be();this.J&&this.ub!==a&&g.qI(this,a);r3(this);this.I.bb(this.element,a);this.I.bb(this.cancelButton.element,a);this.I.bb(this.j.Da("ytp-autonav-endscreen-link-container"),a);this.I.bb(this.playButton.element,a)};
g.h.Gf=function(a){return 400>a.width||459>a.height};g.v(s3,g.W);g.h=s3.prototype;g.h.create=function(){this.created=!0};
g.h.destroy=function(){this.created=!1};
g.h.Uv=function(){return!1};
g.h.Be=function(){return!1};
g.h.gN=function(){return!1};g.v(t3,g.W);g.h=t3.prototype;g.h.Lz=function(){this.notification&&(this.C.stop(),this.wc(this.B),this.B=null,this.notification.close(),this.notification=null)};
g.h.iz=function(a){this.suggestion=a;l3(this,a,"hqdefault.jpg")};
g.h.QJ=function(){g.qI(this,this.api.Be());this.api.bb(this.element,this.api.Be());this.api.bb(this.Da("ytp-upnext-autoplay-icon"),this.api.Be());this.cancelButton&&this.api.bb(this.cancelButton.element,this.api.Be())};
g.h.AX=function(){window.focus();this.Lz()};
g.h.Du=function(a){var b=this;this.Rh()||(g.Lu("a11y-announce","\u0421\u043b\u0435\u0434\u0443\u044e\u0449\u0435\u0435 "+this.suggestion.title),this.u=(0,g.R)(),this.j=new g.L(function(){u3(b,a)},25),u3(this,a),YWa(this.api,ZWa(this,a)));
g.Dp(this.element,"ytp-upnext-autoplay-paused")};
g.h.hide=function(){g.W.prototype.hide.call(this)};
g.h.Rh=function(){return!!this.j};
g.h.Tq=function(){this.jn();this.u=(0,g.R)();u3(this);g.M(this.element,"ytp-upnext-autoplay-paused")};
g.h.jn=function(){this.Rh()&&(this.j.dispose(),this.j=null)};
g.h.select=function(a){a=void 0===a?!1:a;if(this.api.V().S("autonav_notifications")&&a&&window.Notification&&"function"===typeof document.hasFocus){var b=Notification.permission;"default"===b?Notification.requestPermission():"granted"!==b||document.hasFocus()||(this.Lz(),this.notification=new Notification("\u0421\u043b\u0435\u0434\u0443\u044e\u0449\u0435\u0435",{body:this.suggestion.title,icon:this.suggestion.Se()}),this.B=this.T(this.notification,"click",this.AX),this.C.start())}this.jn();this.api.nextVideo(!1,
a)};
g.h.ES=function(a){!g.fi(this.cancelButton.element,g.ru(a))&&g.SL(a,this.api)&&(this.api.Be()&&this.api.xb(this.Da("ytp-upnext-autoplay-icon")),this.select())};
g.h.DS=function(){this.api.Be()&&this.cancelButton&&this.api.xb(this.cancelButton.element);g.bL(this.api,!0)};
g.h.rX=function(a){this.api.getPresentingPlayerType();this.show();this.Du(a)};
g.h.sX=function(){this.api.getPresentingPlayerType();this.jn();this.hide()};
g.h.ra=function(){this.jn();this.Lz();g.W.prototype.ra.call(this)};g.v(v3,s3);g.h=v3.prototype;g.h.create=function(){s3.prototype.create.call(this);this.C.T(this.player,"appresize",this.zv);this.C.T(this.player,"onVideoAreaChange",this.zv);this.C.T(this.player,"videodatachange",this.onVideoDataChange);this.C.T(this.player,"autonavchange",this.RJ);this.C.T(this.player,"autonavcancel",this.GS);this.onVideoDataChange()};
g.h.show=function(){s3.prototype.show.call(this);(this.J||this.B&&this.B!==this.videoData.clientPlaybackNonce)&&g.bL(this.player,!1);g.hL(this.player)&&this.Uv()&&!this.B?(w3(this),2===this.videoData.autonavState?this.player.V().S("fast_autonav_in_background")&&3===this.player.getVisibilityState()?this.j.select(!0):this.j.Du():3===this.videoData.autonavState&&this.j.Tq()):(g.bL(this.player,!0),w3(this));this.zv()};
g.h.hide=function(){s3.prototype.hide.call(this);this.j.Tq();w3(this)};
g.h.zv=function(){var a=this.player.Jj(!0,this.player.isFullscreen());w3(this);r3(this.u);g.O(this.element,"ytp-autonav-cancelled-small-mode",this.Gf(a));g.O(this.element,"ytp-autonav-cancelled-tiny-mode",this.PA(a));g.O(this.element,"ytp-autonav-cancelled-mini-mode",400>=a.width||360>=a.height);this.overlay&&g.Jm(this.overlay.element,{width:a.width+"px"});if(!this.D){a=g.r(this.videos.entries());for(var b=a.next();!b.done;b=a.next()){var c=g.r(b.value);b=c.next().value;c=c.next().value;g.O(c.element,
"ytp-suggestion-card-with-margin",1===b%2)}}};
g.h.onVideoDataChange=function(){var a=this.player.getVideoData();if(this.videoData!==a&&a){this.videoData=a;if((a=this.videoData.suggestions)&&a.length){this.j.iz(a[0]);this.j!==this.u&&this.u.iz(a[0]);for(var b=0;b<cXa.length;++b){var c=cXa[b];if(a&&a[c]){this.videos[b]=new m3(this.player);var d=this.videos[b];c=a[c];d.suggestion!==c&&(d.suggestion=c,l3(d,c));g.H(this,this.videos[b]);this.videos[b].Ba(this.K.element)}}}this.zv()}};
g.h.RJ=function(a){1===a?(this.J=!1,this.B=this.videoData.clientPlaybackNonce,this.j.jn(),this.ub&&this.zv()):(this.J=!0,this.Be()&&(2===a?this.j.Du():3===a&&this.j.Tq()))};
g.h.GS=function(a){a?this.RJ(1):(this.B=null,this.J=!1)};
g.h.Uv=function(){return 1!==this.videoData.autonavState};
g.h.Gf=function(a){return(910>a.width||459>a.height)&&!this.PA(a)&&!(400>=a.width||360>=a.height)};
g.h.PA=function(a){return 800>a.width&&!(400>=a.width||360>=a.height)};
g.h.Be=function(){return this.ub&&g.hL(this.player)&&this.Uv()&&!this.B};
var cXa=[1,3,2,4];g.v(x3,s3);x3.prototype.Ka=function(){var a=this.player.getVideoData();this.j.update({profilePicture:a.profilePicture,author:a.author});this.subscribeButton.channelId=a.sj;var b=this.subscribeButton;a.subscribed?b.u():b.B()};g.v(y3,g.W);y3.prototype.select=function(){(this.api.qk(this.suggestion.videoId,this.suggestion.sessionData,this.suggestion.playlistId,void 0,void 0,this.suggestion.qw||void 0)||this.api.S("web_player_endscreen_double_log_fix_killswitch"))&&this.api.xb(this.element)};
y3.prototype.onClick=function(a){g.SL(a,this.api,this.u,this.suggestion.sessionData||void 0)&&this.select()};
y3.prototype.onKeyPress=function(a){switch(a.keyCode){case 13:case 32:g.xu(a)||(this.select(),g.wu(a))}};
y3.prototype.onVideoDataChange=function(){var a=this.api.getVideoData(),b=this.api.V();this.u=a.D?!1:b.j};g.v(z3,s3);g.h=z3.prototype;g.h.create=function(){s3.prototype.create.call(this);var a=this.player.getVideoData();a&&(this.videoData=a);this.Ol();this.u.T(this.player,"appresize",this.Ol);this.u.T(this.player,"onVideoAreaChange",this.Ol);this.u.T(this.player,"videodatachange",this.onVideoDataChange);this.u.T(this.player,"autonavchange",this.qD);this.u.T(this.player,"autonavcancel",this.HS);a=this.videoData.autonavState;a!==this.N&&this.qD(a);this.u.T(this.element,"transitionend",this.PY)};
g.h.destroy=function(){g.hv(this.u);g.Af(this.stills);this.stills=[];s3.prototype.destroy.call(this);g.Dp(this.element,"ytp-show-tiles");this.J.stop();this.N=this.videoData.autonavState};
g.h.Uv=function(){return 1!==this.videoData.autonavState};
g.h.show=function(){s3.prototype.show.call(this);g.Dp(this.element,"ytp-show-tiles");this.player.V().isMobile?g.wp(this.J):this.J.start();(this.D||this.C&&this.C!==this.videoData.clientPlaybackNonce)&&g.bL(this.player,!1);A3(this)?(B3(this),2===this.videoData.autonavState?this.player.V().S("fast_autonav_in_background")&&3===this.player.getVisibilityState()?this.j.select(!0):this.j.Du():3===this.videoData.autonavState&&this.j.Tq()):(g.bL(this.player,!0),B3(this))};
g.h.hide=function(){s3.prototype.hide.call(this);this.j.Tq();B3(this)};
g.h.PY=function(a){g.ru(a)===this.element&&this.Ol()};
g.h.Ol=function(){if(this.videoData&&this.videoData.suggestions&&this.videoData.suggestions.length){g.M(this.element,"ytp-endscreen-paginate");var a=this.I.Jj(!0,this.I.isFullscreen()),b=g.XK(this.I);b&&(b=b.bf()?48:32,a.width-=2*b);var c=a.width/a.height,d=96/54,e=b=2,f=Math.max(a.width/96,2),k=Math.max(a.height/54,2),l=this.videoData.suggestions.length,m=Math.pow(2,2);var n=l*m+(Math.pow(2,2)-m);n+=Math.pow(2,2)-m;for(n-=m;0<n&&(b<f||e<k);){var p=b/2,q=e/2,t=b<=f-2&&n>=q*m,w=e<=k-2&&n>=p*m;if((p+
1)/q*d/c>c/(p/(q+1)*d)&&w)n-=p*m,e+=2;else if(t)n-=q*m,b+=2;else if(w)n-=p*m,e+=2;else break}d=!1;n>=3*m&&6>=l*m-n&&(4<=e||4<=b)&&(d=!0);m=96*b;n=54*e;c=m/n<c?a.height/n:a.width/m;c=Math.min(c,2);m=Math.floor(Math.min(a.width,m*c));n=Math.floor(Math.min(a.height,n*c));a=this.table.element;g.Tm(a,m,n);g.Jm(a,{marginLeft:m/-2+"px",marginTop:n/-2+"px"});this.j.iz(this.videoData.suggestions[0]);this.j instanceof o3&&r3(this.j);g.O(this.element,"ytp-endscreen-takeover",A3(this));B3(this);m+=4;n+=4;for(f=
c=0;f<b;f++)for(k=0;k<e;k++)if(q=c,p=0,d&&f>=b-2&&k>=e-2?p=1:0===k%2&&0===f%2&&(2>k&&2>f?0===k&&0===f&&(p=2):p=2),q=g.zh(q+this.B,l),0!==p){t=this.stills[c];t||(t=new y3(this.player),this.stills[c]=t,a.appendChild(t.element));w=Math.floor(n*k/e);var x=Math.floor(m*f/b),y=Math.floor(n*(k+p)/e)-w-4,z=Math.floor(m*(f+p)/b)-x-4;g.Pm(t.element,x,w);g.Tm(t.element,z,y);g.Jm(t.element,"transitionDelay",(k+f)/20+"s");g.O(t.element,"ytp-videowall-still-mini",1===p);g.O(t.element,"ytp-videowall-still-large",
2<p);p=t;q=this.videoData.suggestions[q];p.suggestion!==q&&(p.suggestion=q,t=p.api.V(),w=g.Bp(p.element,"ytp-videowall-still-large")?"hqdefault.jpg":"mqdefault.jpg",l3(p,q,w),g.AC(t)&&(w=q.il(),x={},t.xa&&g.uK(x,t.loaderUrl),w=g.rj(w,g.tK(x,"emb_rel_end")),p.Na("url",w)),(q=(q=q.sessionData)&&q.itct)&&p.api.fk(p.element,q));c++}g.O(this.element,"ytp-endscreen-paginate",c<l);for(b=this.stills.length-1;b>=c;b--)e=this.stills[b],g.di(e.element),g.zf(e);this.stills.length=c}};
g.h.onVideoDataChange=function(){var a=this.player.getVideoData();this.videoData!==a&&(this.B=0,this.videoData=a,this.Ol())};
g.h.IS=function(){this.B+=this.stills.length;this.Ol()};
g.h.JS=function(){this.B-=this.stills.length;this.Ol()};
g.h.gN=function(){return this.j.Rh()};
g.h.qD=function(a){1===a?(this.D=!1,this.C=this.videoData.clientPlaybackNonce,this.j.jn(),this.ub&&this.Ol()):(this.D=!0,this.ub&&A3(this)&&(2===a?this.j.Du():3===a&&this.j.Tq()))};
g.h.HS=function(a){if(a){for(a=0;a<this.stills.length;a++)this.I.bb(this.stills[a].element,!0);this.qD(1)}else this.C=null,this.D=!1;this.Ol()};
g.h.Be=function(){return this.ub&&A3(this)};g.v(C3,g.tL);g.h=C3.prototype;g.h.vr=function(){var a=this.player.getVideoData(),b=!!(a&&a.suggestions&&a.suggestions.length);b=!$Wa(this.player)||b;var c=a.le||g.LC(a.B),d=this.player.zw();a=a.mutedAutoplay;return b&&!c&&!d&&!a};
g.h.Be=function(){return this.endScreen.Be()};
g.h.pV=function(){return this.Be()?this.endScreen.gN():!1};
g.h.ra=function(){this.player.kf("endscreen");g.tL.prototype.ra.call(this)};
g.h.load=function(){var a=this.player.getVideoData();var b=a.JN;if(b&&b.videoId){var c=this.player.tb().Md.get("heartbeat");a&&a.suggestions&&a.suggestions.length&&b.videoId===a.suggestions[0].videoId&&!a.xK?a=!1:(this.player.qk(b.videoId,void 0,void 0,!0,!0,b),c&&c.XA("HEARTBEAT_ACTION_TRIGGER_AT_STREAM_END","HEARTBEAT_ACTION_TRANSITION_REASON_HAS_NEW_STREAM_TRANSITION_ENDPOINT"),a=!0)}else a=!1;a||(g.tL.prototype.load.call(this),this.endScreen.show())};
g.h.unload=function(){g.tL.prototype.unload.call(this);this.endScreen.hide();this.endScreen.destroy()};
g.h.onCueRangeEnter=function(a){this.vr()&&(this.endScreen.created||this.endScreen.create(),"load"===a.getId()&&this.load())};
g.h.onCueRangeExit=function(a){"load"===a.getId()&&this.loaded&&this.unload()};
g.h.onVideoDataChange=function(){bXa(this);this.B&&aXa(this)&&(this.endScreen&&(this.endScreen.hide(),this.endScreen.created&&this.endScreen.destroy(),this.endScreen.dispose()),this.j?this.endScreen=new v3(this.player):this.endScreen=new z3(this.player),g.H(this,this.endScreen),g.gL(this.player,this.endScreen.element,4))};g.sL("endscreen",C3);})(_yt_player);
