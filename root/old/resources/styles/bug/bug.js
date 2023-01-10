

	//initialize global variables  
	var bug = new Object;  //create an empy object to store the object to me moved (makes it global)
	var theTimer 
	var xspeed = 0; //starting speed of bug
	var yspeed = 0;
	var delayCounter = 0; //used to delay busg movement
	function moveBug() {
	
	//prevent bug from going to fast
	  if(xspeed>=10||xspeed<=-10){
	  	xspeed=0;
	  }
	  if(yspeed>=10||yspeed<=-10){
	  	yspeed=0;
	  }//
	  delayCounter +=1;
	  if(delayCounter>100){ //wait before flying
	   //influence bug to stay on screen
		  if(parseInt(bug.style.right)>=1200){
			xspeed += Math.floor(Math.random()*3)-2;
		  } else if(parseInt(bug.style.right)<=0){
			xspeed += Math.floor(Math.random()*3);
		  } else {
			xspeed += Math.floor(Math.random()*3)-1;
		  }
		  if(parseInt(bug.style.top)>=1000){
			yspeed += Math.floor(Math.random()*3)-2;
		  } else if(parseInt(bug.style.top)<=0){
			yspeed += Math.floor(Math.random()*3);
		  } else {
			yspeed += Math.floor(Math.random()*3)-1;
		  }
		}else if(delayCounter>150) {
		  //keep bug in same position 
			xspeed = Math.floor(Math.random()*3)-1;
			yspeed = Math.floor(Math.random()*3)-1;
	    } else { 
		 	//do nothing
			xspeed = xspeed;
			yspeed = yspeed;
		}
	  //actually update position
	  bug.style.right = parseInt(bug.style.right) + xspeed + "px";  
	  bug.style.top = parseInt(bug.style.top) + yspeed + "px";  
	if (document.getElementById("debug")) { 
	document.getElementById("debug").innerHTML = 
	  "right = " + parseInt(bug.style.right) + 
	  " xspeed = " + xspeed + 
	 " top = " + parseInt(bug.style.top) + 
	  " yspeed = " + yspeed;
	}
	}
	
	function getBug(){
		if (document.getElementById("bug")) { //if bug doesn't exsist don't bother
			bug = document.getElementById("bug"); // get the object to me moved (store in global)
			bug.style.right = '330px'; // set its initial position have to do this through js for movement to work
			bug.style.top = '290px'; // set its initial position have to do this through js for movement to work
			theTimer = setInterval("moveBug()", 20);  //call moveMe again and again and again every 20ms
		}
	}
	

	window.onload = getBug;
