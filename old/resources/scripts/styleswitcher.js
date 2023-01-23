// JavaScript Document  -  Modified from http://www.alistapart.com/articles/alternate/



function setActiveStyleSheet(title) {
  if(title=="nothing" || title=="null"){
  	// disable all externally linked stylesheets
	for (var i = document.styleSheets.length - 1; i >= 0; i--) {
		document.styleSheets[i].disabled = true;
	}
  } else {
	  
	  //enable layout.css 1 should be replaced becuase code will break if link tags are reorderd
		document.styleSheets[1].disabled = false;
		//}
	  
	  //continur with normal switch
	
		  var i, a, main;
		  for(i=0; (a = document.getElementsByTagName("link")[i]); i++) {
			if(a.getAttribute("rel").indexOf("style") != -1 && a.getAttribute("title")) {
			  a.disabled = true;
			  if(a.getAttribute("title") == title) a.disabled = false;
			}
		  }
		  
  }
}

function getActiveStyleSheet() {
  var i, a;
  for(i=0; (a = document.getElementsByTagName("link")[i]); i++) {
    if(a.getAttribute("rel").indexOf("style") != -1 && a.getAttribute("title") && !a.disabled) return a.getAttribute("title");
  }
  return null;
}

function getPreferredStyleSheet() {
  var i, a;
  for(i=0; (a = document.getElementsByTagName("link")[i]); i++) {
    if(a.getAttribute("rel").indexOf("style") != -1
       && a.getAttribute("rel").indexOf("alt") == -1
       && a.getAttribute("title")
       ) return a.getAttribute("title");
  }
  return null;
}

function createCookie(name,value,days) {
  if (days) {
    var date = new Date();
    date.setTime(date.getTime()+(days*24*60*60*1000));
    var expires = "; expires="+date.toGMTString();
  }
  else expires = "";
  document.cookie = name+"="+value+expires+"; path=/";
}

function readCookie(name) {
  var nameEQ = name + "=";
  var ca = document.cookie.split(';');
  for(var i=0;i < ca.length;i++) {
    var c = ca[i];
    while (c.charAt(0)==' ') c = c.substring(1,c.length);
    if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
  }
  return null;
}

window.onload = function(e) {
	
  var cookie = readCookie("style");
  var title = cookie ? cookie : getPreferredStyleSheet();
//  if(title==null||title=="nothing"){//set's cookie to "nothing" to handled disabled stylesheet.
//	  title="nothing";
 // }
  setActiveStyleSheet(title);
  //alert(cookie);
}

window.onunload = function(e) {
  var title = getActiveStyleSheet();
 // if(title==null||title=="nothing"){//set's cookie to "nothing" to handled disabled stylesheet.
	//  title="nothing";
 // }
  createCookie("style", title, 365);
}

var cookie = readCookie("style");
var title = cookie ? cookie : getPreferredStyleSheet();
setActiveStyleSheet(title);
