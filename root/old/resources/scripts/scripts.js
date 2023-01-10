

function GetDate(hr) {
//Author: Veronica Noone 1/6/2004
//retrieves date for display
//and shows ticking time

var today=new Date()
var strToWrite
var strbreak
var days=new Array("Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday")
var months=new Array("Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec")
var ampm
var hours = today.getHours()//for ticking clock

	if (hr){ //if calling from updateTime function change breaks to hardreturns
		strbreak = " \r"
	}else{
		strbreak = " <br/>"
	}
	
  // make am/pm instaead of 24hr clock
  ampm = " AM";
  if (hours > 12) {
  	hours = hours - 12; ampm = " PM";
  }  


	//strToWrite = days[today.getDay()] + strbreak
	strToWrite = addZeros(today.getMonth()+1) + "." + addZeros(today.getDate()) + "." 
	strToWrite = strToWrite + today.getYear() + " " 
	strToWrite = strToWrite + hours + ":" + addZeros(today.getMinutes()) + ":"
	strToWrite = strToWrite + addZeros(today.getSeconds()) + ampm

	//staticDate = addZeros(today.getMonth()+1) + "." + addZeros(today.getDate()) + "." + today.getYear() + " "  + hours + ":" + addZeros(today.getMinutes()) + ampm
	//return strToWrite;  //turn back on for ticking time, being replaced with static
	//return staticDate
	document.getElementById("date").innerHTML=strToWrite;
	
}

 function updateTime() {
 //doesn't work in netscape 
  	document.all.date.innerText = GetDate(1)
  //document.myForm.myDate.value  = GetDate(1) //using form cause works in net and ie
  setTimeout('updateTime()',1000);
 }   
 
 function addZeros(x){
 	var str
 	str = x.toString()
 	if(str.length == 1){
		str = 0 + str;
	}
	return str;	
 }

//MAKING GLOBAL VAR TO HOLD CURRENT WEEK - IT"S NOT PREVENTING ALOT OF HEADACHES for new show hide functions in new scripts. 
curWeek = 0;
function writeCalLinks() {
//Author: Veronica Noone 1/5/2004
//write my links to highliht current week automatically in clendar
// may have bug if semester crosses year, as long as in same year function should be fine

var start=new Date("January 27, 2008"); //Holds first day of semester
var today=new Date()
var days  //going to hold days into the semester
var strToWrite
var weeksInSemester

weeksInSemester = 16

days = -(start - today)/(1000*60*60*24) ; //sec*min*hour*days gets me days in semester
strToWrite =  "Week: ";
for(i=1;i<=weeksInSemester;i++){
	if(Math.ceil(days/7)==i) { //what week is it?? highlight week
	curWeek = i //fast fix for newscripts show hide function
		strToWrite = strToWrite + "<a href=\"#\" onclick=\"showCal(" + i + ")\"><span id=\"current\">" + i + "</span></a>";
	}else{
		strToWrite = strToWrite + "<a href=\"#\" onclick=\"showCal(" + i + ")\">" + i + "</a>";
	}
	if(i!=weeksInSemester){	
		strToWrite = strToWrite + " :: " 
	}
}
strToWrite = strToWrite + " :::: <a href=\"#\" onclick=\"showAllCal()\">show all</a>";
return strToWrite;

}

//***************************************
//Pic of the day script for Demo page
//uses add zeros from date functions
//*************************************

function loadPic(x) {
	var today
	var fileName
	//get todays date  OR fake for students!
	if (x) {
	today = x
	} else {
	today = new Date()
	}
	
	//use date to create file name
	fileName = "resources/media/picoftheday/pic" + today.getFullYear() + addZeros(today.getMonth()+1) + ".gif"  
	//set the src of the image to the new filename 
	window.document.images.thePic.src = fileName;

}
function defaultPic(){
//CALLED IF IMAGE DOESN'T LOAD -  LOADs DEFAULT
	window.document.images.thePic.src = "resources/media/picoftheday/default.gif";
}

//fake date function
function fakeDate() {
	var fromPromt = prompt("Please enter a date (Like: Month 99, 9999)","")
	var aDate=new Date(fromPromt)
	loadPic(aDate)
}

function oldPics(picDate) {
	document.images.thePic.src = "resources/media/picoftheday/pic" + picDate + ".gif";
}


function listOldDates() {
	var today=new Date();
	var strToWrite="";
	//<a href="#" onclick="JavaScript:oldPics('200501')">1/2005</a>
	
	//starting 6/2004 diplay link to show older pics
	for(i=2004;i<=today.getFullYear();i++){
		strToWrite= strToWrite + "<h3>"+ i +"</h3>";
		for(j=1;j<=12;j++){
			if(i==2004) { 
			//started 6/2004 so don't show any months earlier
				if (j>=6) {
					//strToWrite= strToWrite + j + "/" + i + " - " ;
					strToWrite= strToWrite + "<a href=\"#\" onmouseover=\"JavaScript:oldPics('"+i+addZeros(j)+"')\">"+ j + "/" + i +"</a> - ";
				}
			} else if (i==today.getFullYear()) {
				//don't show past the current month if this year
				if (j<=today.getMonth()+1) {
					strToWrite= strToWrite + "<a href=\"#\" onmouseover=\"JavaScript:oldPics('"+i+addZeros(j)+"')\">"+ j + "/" + i +"</a> - ";
				}
			} else {
				//everthing else is ok
				strToWrite= strToWrite + "<a href=\"#\" onmouseover=\"JavaScript:oldPics('"+i+addZeros(j)+"')\">"+ j + "/" + i +"</a> - ";
			}
		}
		//alert("add break");
		//strToWrite= strToWrite + "<br />";
	}
	return strToWrite;
}

//** FOR GOOGLE SEARCH 

function googleSearch(strSearch) {
	
	window.location.href = "http://www.google.com/search?hl=en&ie=UTF-8&oe=UTF-8&q=" + strSearch + "+site%3Amarylandnaturalist.org&btnG=Google+Search";
}