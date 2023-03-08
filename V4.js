javascript:!function(){var c=0x1f4,d=0x12c,e='#AAA',f=0x1,g=0x20,h='#444',i='#FFF',j='Bookmarklets',k=~~(document['documentElement']['clientWidth']/0x2-c/0x2),l=~~(document['documentElement']['clientHeight']/0x2-d/0x2),m=~~(0.8*g),
n=document['createElement']('DIV');Object['assign'](n['style'],{'position':'absolute','left':k+'px','top':l+'px','zIndex':Number['MAX_SAFE_INTEGER'],'width':c+'px','height':d+'px','background':e,'border':f+'px\x20solid\x20black'});var%20o=document['createElement']('DIV');Object['assign'](o['style'],{'position':'relative','width':c+'px','height':g+'px','background':h,'borderBottom':f+'px\x20solid\x20black'});var%20p=document['createElement']('DIV');Object['assign'](p['style'],{'position':'relative','display':'inline-block','left':0x0,'width':~~(c-0x2*m)+'px','lineHeight':g+'px','color':i,'fontSize':~~(0.667*g)+'px','marginLeft':~~(m/0x3)+'px'}),p['textContent']=j;var%20q=document['createElement']('DIV'),r=~~((g-m)/0x2);Object['assign'](q['style'],{'position':'relative','float':'right','right':r+'px','top':r+'px','width':m+'px','height':m+'px','background':'#F00','border':f+'px\x20solid\x20black','color':'#FFF','lineHeight':m+'px','textAlign':'center','fontSize':m+'px','marginLeft':'auto','marginRight':0x0});var%20s=document['createElement']('DIV');Object['assign'](s['style'],{'padding':'1em'});var%20t=document['createElement']('P');t['textContent']='Click\x20them\x20to\x20inject\x20them\x20into\x20your\x20tab!',s['appendChild'](t);var%20u=document['createElement']('UL');[



//{'name: 'Name','url':'js:'},


{'name':'Blooket Hacks','url':''},


{'name':'Bing','url':'https://www.bing.com'},


{'name':'DuckDuckGO','url':'https://duckduckgo.com'}



]['forEach'](c=%3E{var%20d=document['createElement']('LI'),e=document['createElement']('A');e['setAttribute']('href',c['url']),e['setAttribute']('target','_blank'),e['textContent']=c['name'],d['appendChild'](e),u['appendChild'](d);}),s['appendChild'](u),q['addEventListener']('click',function%20c(d){q['removeEventListener']('click',c,!0x1);o['removeChild'](q);n['removeChild'](o);n['removeChild'](s);document['body']['removeChild'](n);},!0x1),q['textContent']='%C3%97',o['appendChild'](p),o['appendChild'](q),n['appendChild'](o),n['appendChild'](s),document['body']['appendChild'](n),function(c){var%20d=function(c){var%20d=c['getBoundingClientRect'](),e=window['pageXOffset']||document['documentElement']['scrollLeft'],f=window['pageYOffset']||document['documentElement']['scrollTop'];return{'top':d['top']+f,'left':d['left']+e};}(c['parentElement']),e=!0x1,f={'x':0x0,'y':0x0},g={'x':d['left'],'y':d['top']};c['parentElement']['addEventListener']('mousedown',function(d){e=!0x0,f['x']=d['clientX'],f['y']=d['clientY'],c['parentElement']['style']['cursor']='move';}),c['parentElement']['addEventListener']('mouseup',function(d){e=!0x1,g['x']=parseInt(c['parentElement']['style']['left'])||0x0,g['y']=parseInt(c['parentElement']['style']['top'])||0x0,c['parentElement']['style']['cursor']='auto';}),document['addEventListener']('mousemove',function(d){if(!e)return;var%20h={'x':d['clientX']-f['x'],'y':d['clientY']-f['y']},i={'x':g['x']+h['x'],'y':g['y']+h['y']};i['x']%3C0x0?i['x']=0x0:i['x']+c['parentElement']['offsetWidth']%3Edocument['documentElement']['clientWidth']&&(i['x']=document['documentElement']['clientWidth']-c['parentElement']['offsetWidth']);i['y']%3C0x0?i['y']=0x0:i['y']+c['parentElement']['offsetHeight']%3Edocument['documentElement']['clientHeight']&&(i['y']=document['documentElement']['clientHeight']-c['parentElement']['offsetHeight'];c['parentElement']['style']['left']=i['x']+'px',c['parentElement']['style']['top']=i['y']+'px';});}(o);}(window);



(function(window) {
  var links = [{
//    name: 'Name',
//    url: 'Script Fetch'
//  }, {
    
    name: 'Bing',
    url: 'https://www.bing.com'
  }, {
    name: 'DuckDuckGO',
    url: 'https://duckduckgo.com'
  }];
  var props = {
    width: 500,
    height: 300,
    background: '#AAA',
    borderThickness: 1,
    headerHeight: 32,
    headerBackground: '#444',
    headerTitleColor: '#FFF',
    windowTitle: 'Bookmarklet Links'
  };
  var windowPosition = {
    left: ~~((document.documentElement.clientWidth / 2) - (props.width / 2)),
    top: ~~((document.documentElement.clientHeight / 2) - (props.height / 2)),
  }
  var btnSize = ~~(props.headerHeight * 0.8);
  var popupEl = document.createElement('DIV');
  Object.assign(popupEl.style, {
    position: 'absolute',
    left: windowPosition.left + 'px',
    top: windowPosition.top + 'px',
    zIndex: Number.MAX_SAFE_INTEGER,
    width: props.width + 'px',
    height: props.height + 'px',
    background: props.background,
    border: props.borderThickness + 'px solid black'
  });
  var popupHeader = document.createElement('DIV');
  Object.assign(popupHeader.style, {
    position: 'relative',
    width: (props.width) + 'px',
    height: props.headerHeight + 'px',
    background: props.headerBackground,
    borderBottom: props.borderThickness + 'px solid black'
  });
  var popupHeaderTitle = document.createElement('DIV');
  Object.assign(popupHeaderTitle.style, {
    position: 'relative',
    display: 'inline-block',
    left: 0,
    width: ~~(props.width - btnSize * 2) + 'px',
    lineHeight: props.headerHeight + 'px',
    color: props.headerTitleColor,
    fontSize: ~~(props.headerHeight * 0.667) + 'px',
    marginLeft: ~~(btnSize / 3) + 'px'
  });
  popupHeaderTitle.textContent = props.windowTitle;
  var closeButton = document.createElement('DIV');
  var margin = ~~((props.headerHeight - btnSize) / 2);
  Object.assign(closeButton.style, {
    position: 'relative',
    float: 'right',
    right: margin + 'px',
    top: margin + 'px',
    width: btnSize + 'px',
    height: btnSize + 'px',
    background: '#F00',
    border: props.borderThickness + 'px solid black',
    color: '#FFF',
    lineHeight: btnSize + 'px',
    textAlign: 'center',
    fontSize: btnSize + 'px',
    marginLeft: 'auto',
    marginRight: 0
  });
  var popupBody = document.createElement('DIV');
  Object.assign(popupBody.style, {
    padding: '1em'
  });
  var p = document.createElement('P');
  p.textContent = 'Click the links to open a new tab!';
  popupBody.appendChild(p);
  var listEl = document.createElement('UL');
  links.forEach(link => {
    var itemEl = document.createElement('LI');
    var anchorEl = document.createElement('A');
    anchorEl.setAttribute('href', link.url);
    anchorEl.setAttribute('target', '_blank');
    anchorEl.textContent = link.name;
    itemEl.appendChild(anchorEl);
    listEl.appendChild(itemEl);
  });
  popupBody.appendChild(listEl);
  closeButton.addEventListener('click', destroyWindow, false);
  closeButton.textContent = '×';
  popupHeader.appendChild(popupHeaderTitle);
  popupHeader.appendChild(closeButton);
  popupEl.appendChild(popupHeader);
  popupEl.appendChild(popupBody);
  document.body.appendChild(popupEl);
  draggable(popupHeader);
  function destroyWindow(e) {
    closeButton.removeEventListener('click', destroyWindow, false);
    popupHeader.removeChild(closeButton);
    popupEl.removeChild(popupHeader);
    popupEl.removeChild(popupBody);
    document.body.removeChild(popupEl);
  }
  /* Source: https://plainjs.com/javascript/styles/get-the-position-of-an-element-relative-to-the-document-24/ */
  function offset(el) {
    var rect = el.getBoundingClientRect(),
    scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
    scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    return { top: rect.top + scrollTop, left: rect.left + scrollLeft }
  }
  /* Source: https://gist.github.com/remarkablemark/5002d27442600510d454a5aeba370579 */
  function draggable(el) {
    var initialOffset = offset(el.parentElement);
    var isMouseDown = false;
    var currPos = { x : 0, y : 0 };
    var elPos = { x : initialOffset.left, y : initialOffset.top };
    el.parentElement.addEventListener('mousedown', onMouseDown);
    function onMouseDown(event) {
      isMouseDown = true;
      currPos.x = event.clientX;
      currPos.y = event.clientY;
      el.parentElement.style.cursor = 'move';
    }
    el.parentElement.addEventListener('mouseup', onMouseUp);
    function onMouseUp(event) {
      isMouseDown = false;
      elPos.x = parseInt(el.parentElement.style.left) || 0;
      elPos.y = parseInt(el.parentElement.style.top) || 0;
      el.parentElement.style.cursor = 'auto';
    }
    document.addEventListener('mousemove', onMouseMove);
    function onMouseMove(event) {
      if (!isMouseDown) return;
      var delta = { x : event.clientX - currPos.x, y: event.clientY - currPos.y };
      var pos = { x : elPos.x + delta.x, y : elPos.y + delta.y };
      if (pos.x < 0) {
        pos.x = 0;
      } else if (pos.x + el.parentElement.offsetWidth > document.documentElement.clientWidth) {
        pos.x = document.documentElement.clientWidth - el.parentElement.offsetWidth;
      }
      if (pos.y < 0) {
        pos.y = 0;
      } else if (pos.y + el.parentElement.offsetHeight > document.documentElement.clientHeight) {
        pos.y = document.documentElement.clientHeight - el.parentElement.offsetHeight;
      }
      el.parentElement.style.left = pos.x + 'px';
      el.parentElement.style.top = pos.y + 'px';
    }
  }
})(window);
