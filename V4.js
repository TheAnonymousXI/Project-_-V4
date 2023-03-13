/*
 __     __   ______   ____    _____     __      _   _     _______   __    __   _____     ____       ___
|  \   /  | |  __  | |  _ \  |   __|   |  |    | | | |   |__   __| |  |  |  | |   __|   |  _ \     / _ \
|   \_/   | | |__| | | | \ | |  |__    |  |_   \ \_/ /      | |    |  |__|  | |  |__    | |_| |   | | |_|
|         | |  __  | | | | | |   __|   |  _ \   \   /       | |    |   __   | |   __|   |   _/    | |  _
|  |\_/|  | | |  | | | |_/ | |  |__    | |_| |   | |        | |    |  |  |  | |  |__    |  |    _ | |_| | _
|__|   |__| |_|  |_| |____/  |_____|   |____/    |_|        |_|    |__|  |__| |_____|   |__|   |_| \___/ |_|
*/

javascripts:

(function() {
	var currentPage = 1;
	var numPages = 2;
	var pages = [
		[{
				name: "Page 1",
				url: "js:Title"
			},
			{
				name: "Mario Cursor",
				url: "javascript:(function(){ var style = document.createElement(%27style%27), styleContent = document.createTextNode(%27* { cursor: url(https://l413.github.io/Cursor-Changer/icons/mario.gif) 12 12, auto !important}%27); style.appendChild(styleContent ); var caput = document.getElementsByTagName(%27head%27); caput[0].appendChild(style); })();"
			},
			{
				name: "Paintdrip Cursor",
				url: "javascript:(function(){ var style = document.createElement(%27style%27), styleContent = document.createTextNode(%27* { cursor: url(https://l413.github.io/Cursor-Changer/icons/paint-pink.gif) 12 12, auto !important}%27); style.appendChild(styleContent ); var caput = document.getElementsByTagName(%27head%27); caput[0].appendChild(style); })();"
			},
			{
				name: "Set Rotation to 0",
				url: "javascript:(function(){['', '-ms-', '-webkit-', '-o-', '-moz-'].map(function(prefix){document.body.style[prefix + 'transform'] = 'rotate(0deg)';});}())"
			},
			{
				name: "Set Rotation to 90",
				url: "javascript:(function(){['', '-ms-', '-webkit-', '-o-', '-moz-'].map(function(prefix){document.body.style[prefix + 'transform'] = 'rotate(90deg)';});}())"
			},
			{
				name: "Set Rotation to 180",
				url: "javascript:(function(){['', '-ms-', '-webkit-', '-o-', '-moz-'].map(function(prefix){document.body.style[prefix + 'transform'] = 'rotate(180deg)';});}())"
			},
			{
				name: "Set Rotation to 270",
				url: "javascript:(function(){['', '-ms-', '-webkit-', '-o-', '-moz-'].map(function(prefix){document.body.style[prefix + 'transform'] = 'rotate(270deg)';});}())"
			},
			{
				name: "Snow",
				url: "javascript:(t=>{function i(){this.D=function(){const t=h.atan(this.i/this.d);l.save(),l.translate(this.b,this.a),l.rotate(-t),l.scale(this.e,this.e*h.max(1,h.pow(this.j,.7)/15)),l.drawImage(m,-v/2,-v/2),l.restore()}}window;const h=Math,r=h.random,a=document,o=Date.now;e=t=>{l.clearRect(0,0,_,f),l.fill(),requestAnimationFrame(e);const i=.001*y.et;y.r();const s=L.et*g;for(var n=0;n<C.length;++n){const t=C[n];t.i=h.sin(s+t.g)*t.h,t.j=h.sqrt(t.i*t.i+t.f),t.a+=t.d*i,t.b+=t.i*i,t.a>w&&(t.a=-u),t.b>b&&(t.b=-u),t.b<-u&&(t.b=b),t.D()}},s=t=>{for(var e=0;e<p;++e)C[e].a=r()*(f+u),C[e].b=r()*_},n=t=>{c.width=_=innerWidth,c.height=f=innerHeight,w=f+u,b=_+u,s()};class d{constructor(t,e=!0){this._ts=o(),this._p=!0,this._pa=o(),this.d=t,e&&this.s()}get et(){return this.ip?this._pa-this._ts:o()-this._ts}get%20rt(){return%20h.max(0,this.d-this.et)}get%20ip(){return%20this._p}get%20ic(){return%20this.et%3E=this.d}s(){return%20this._ts=o()-this.et,this._p=!1,this}r(){return%20this._pa=this._ts=o(),this}p(){return%20this._p=!0,this._pa=o(),this}st(){return%20this._p=!0,this}}const%20c=a.createElement(%22canvas%22);H=c.style,H.position=%22fixed%22,H.left=0,H.top=0,H.width=%22100vw%22,H.height=%22100vh%22,H.zIndex=%22100000%22,H.pointerEvents=%22none%22,a.body.insertBefore(c,a.body.children[0]);const%20l=c.getContext(%222d%22),p=300,g=5e-4,u=20;let%20_=c.width=innerWidth,f=c.height=innerHeight,w=f+u,b=_+u;const%20v=15.2,m=a.createElement(%22canvas%22),E=m.getContext(%222d%22),x=E.createRadialGradient(7.6,7.6,0,7.6,7.6,7.6);x.addColorStop(0,%22hsla(255,255%,255%,1)%22),x.addColorStop(1,%22hsla(255,255%,255%,0)%22),E.fillStyle=x,E.fillRect(0,0,v,v);let%20y=new%20d(0,!0),C=[],L=new%20d(0,!0);for(var%20j=0;j%3Cp;++j){const%20t=new%20i;t.a=r()*(f+u),t.b=r()*_,t.c=1*(3*r()+.8),t.d=.1*h.pow(t.c,2.5)*50*(2*r()+1),t.d=t.d%3C65?65:t.d,t.e=t.c/7.6,t.f=t.d*t.d,t.g=r()*h.PI/1.3,t.h=15*t.c,t.i=0,t.j=0,C.push(t)}s(),EL=a.addEventListener,EL(%22visibilitychange%22,(()=%3EsetTimeout(n,100)),!1),EL(%22resize%22,n,!1),e()})();"
			},
			{
				name: "Bookmarklet Maker",
				url: "https://caiorss.github.io/bookmarklet-maker/"
			},
			{
				name: "TheAnonymousXI's Website",
				url: "https://github.com/TheAnonymousXI"
			},
		],
		[{
				name: "Page 2",
				url: "js:Title"
			},
			{
				name: "Page Nucker",
				url: "javascript:var KICKASSVERSION='2.0';var s = document.createElement('script');s.type='text/javascript';document.body.appendChild(s);s.src='//hi.kickassapp.com/kickass.js';void(0);"
			},
			{
				name: "Blur",
				url: "javascript: (function () { document.body.style.filter = 'blur(5px)'; })();"
			},
			{
				name: "Edit Webpage",
				url: "javascript:(function(){  document.designMode='on';  const s=document.createElement('style');  s.innerHTML=`body::before{content:'✏%EF%B8%8F Edit Mode (ESC to end)';z-index:64;padding:1em;background:white;color:black;display:block;margin:1em;font-size:30px;border:5px solid green;}`;  document.body.appendChild(s);  window.scrollTo(0,0);  document.addEventListener('keyup',e => {    if(e.key==='Escape'){      document.designMode='off';      s.remove();      document.removeEventListener('keyup',e);    }  });})();"
			},
			{
				name: "Show Password",
				url: "javascript:(function(){ var IN,F;IN=document.getElementsByTagName('input'); for(var i=0;i<IN.length;i++){F=IN[i]; if(F.type.toLowerCase()=='password'){ try{F.type='text'}catch(r){ var n,Fa;n=document.createElement('input'); Fa=F.attributes;for(var ii=0;ii<Fa.length;ii++){ var k,knn,knv;k=Fa[ii];knn=k.nodeName;knv=k.nodeValue; if(knn.toLowerCase()!='type'){ if(knn!='height'&&knn!='width'&!!knv)n[knn]=knv}}; F.parentNode.replaceChild(n,F)}}}})()"
			},
			{
				name: "Blank",
				url: "js:Blank"
			},
			{
				name: "Blank",
				url: "js:Blank"
			},
			{
				name: "Blank",
				url: "js:Blank"
			},
			{
				name: "Bookmarklet Maker",
				url: "https://caiorss.github.io/bookmarklet-maker/"
			},
			{
				name: "TheAnonymousXI's Website",
				url: "https://github.com/TheAnonymousXI"
			},
		]
	];

	function createMenu() {
		var menu = document.createElement("div");
		menu.setAttribute("style", "position:fixed;top:5px;right:5px;background-color:#000;color:#0f0 !important;padding:5px;border-radius:10px;z-index:9999;font-family:monospace !important;font-size:16px !important;width:250px;height:600px;");
		menu.innerHTML = '<div style="text-align:right;"><button style="background-color:red !important;padding:5px !important;border-radius:5px !important;border:none;cursor:pointer;" onclick="document.body.removeChild(this.parentNode.parentNode);">X</button></div><h3 style="color:red !important;margin-top:0;">Project ﷺ - V4</h3>';
		var pageList = document.createElement("ul");
		pageList.setAttribute("style", "list-style:none;padding:0;margin:0;");
		for (var i = 0; i < pages[currentPage - 1].length; i++) {
			var item = pages[currentPage - 1][i];
			var listItem = document.createElement("li");
			var link = document.createElement("a");
			link.setAttribute("href", item.url);
			link.textContent = item.name;
			listItem.appendChild(link);
			pageList.appendChild(listItem);
		}
		menu.appendChild(pageList);
		var pageNav = document.createElement("div");
		pageNav.setAttribute("style", "text-align:center;");
		for (var i = 1; i <= numPages; i++) {
			var button = document.createElement("button");
			button.setAttribute("style", "margin:5px !important; border-radius:0px !important;");
			if (i === currentPage) {
				button.textContent = "[" + i + "]";
			} else {
				button.textContent = i;
				button.addEventListener("click", function(e) {
					currentPage = parseInt(e.target.textContent);
					document.body.removeChild(menu);
					createMenu();
				});
			}	
			pageNav.appendChild(button);
		}
		menu.appendChild(pageNav);
		document.body.appendChild(menu);
	}
	createMenu();
})();
