
      function addListeners(eventObject) {
	  // alert(eventObject.type + " just got fired. \n It was fired by " + eventObject.target); uncomment to see event happening
	  
	  clearPage();
	  // document.getElementById("calendar").style.display = 'block'; //start page with syllbus
		  if (curWeek > 1) {
			  //if semester hasn't started yet show syllabus - based on curWek gloabl var
			 showContent("calendar");
		  } else {
			 showContent("syllabus"); 
		  }
	  }
	  

      function addEvent(elm, evType, fn, useCapture) 
      // cross-browser event handling for IE5+, NS6+ and Mozilla/Gecko
      // By Scott Andrew modified by Veronica Noone
      {
        if (elm.addEventListener) {  
		//if browser supports the w3c spec that call 
          elm.addEventListener(evType, fn, useCapture); 
		  //for the load it becomes  window.addEventListener('load', addListeners, false); 
		  //for the keyup it becomes textarea.addEventListener('keyup', aKeyWasPressed, false); 
          return true; 
        } else if (elm.attachEvent) {
		//if IE's attacheEvent is supported then use that
		  var evType = "on" + evType; //add "on" to event i.e. onload instead of load
          elm.attachEvent(evType, fn); 
		//  return r;  //returns elm.attachEvent(onwhatever, addListeners) and makes the call
        } else {
		//if the browser doesn't support either - assign the event listener to the element using onwhatever (replaces any other event handlers that were attached
          elm['on' + evType] = fn; //window.onwhatever = addListeners;
        }
      }
	  
	  function clearPage(){
		 //initialize page
		 
		 //set up array to hold content areas
		  content = new Array();
			content[0] = "syllabus";
			content[1] = "calendar";
			content[2] = "students";
			content[3] = "grades";
		
		//loop through and hide them all
		for(i=0;i<=3;i++){
		document.getElementById(content[i]).style.display = 'none';
		}
		
	  }
	  
	  function showContent(s){
		  clearPage();
		  document.getElementById(s).style.display = 'block';
		  if(s=="calendar"){
			  clearCal();
			  //REPLACED ALL GOD BELOW WITH GLOBAL VAR curWeek set in scripts.js
			  //get cur week and show that one
			//curEl= document.getElementById("current");
			//alert(curEl.parentNode); //return http://student.ccbcmd.edu/~vnoone/_working/webt143.htmlw#3 - not sure why, but I'll use it
			//var curWeek = " " + curEl.parentNode; //fast way of converting it to a string
			//curWeek=curWeek.substr(curWeek.search("#w")+2);
			//curWeek="w"+curWeek;
			//alert(curWeek);
			  showCal(curWeek)
		  }
	  }
	  
	 
	 function clearCal(){
		for(i=1;i<=16;i++){
			document.getElementById("w"+i).style.display = 'none';
		}

	 }
	 function showAllCal(){
		for(i=1;i<=16;i++){
			document.getElementById("w"+i).style.display = 'block';
		}

	 }
	 function showCal(s){
		 clearCal()
		 var w = "w"+s;
		 document.getElementById(w).style.display = 'block';
	  }
	  
	 addEvent(window, 'load', addListeners, false); //Call the addEvent function passing parameters for addEventListener function