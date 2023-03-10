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
		],
		[{
				name: "Page 2",
				url: "js:Title"
			},
			{
				name: "Page Nuker",
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
