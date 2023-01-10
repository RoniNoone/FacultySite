// JavaScript Document


function toggleStyleSheet(sheet) {
	//var sheet = document.getElementById('main');

	if (sheet.disabled == true) {
		sheet.disabled = false;
	} else {
		sheet.disabled = true;
	}
	//sheet.parentNode.removeChild(sheet);
}


function removeStyleSheet(sheet) {
		sheet.disabled = true;
	    snowStorm.stop();
}

function addStyleSheet(sheet) {
		sheet.disabled = false;
	    snowStorm.stop();
}


