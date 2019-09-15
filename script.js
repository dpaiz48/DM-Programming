// JavaScript Document
var myDemo = document.getElementById("demoparent");

console.log(myDemo.childNodes.length);

var myDemoTags = document.getElementsByTagName("li");

console.log ("Number of li links: "+ myDemoTags.length);

var linksInMenu = myDemo.getElementsByTagName("li");

console.log ("Number of Li items in Menu: "+ linksInMenu.length);

var myComments = document.getElementById("commentary");

myComments.setAttribute("align", "right");

myComments.setAttribute("style", "color: blue");

var newItem = document.createElement("li");

var newText = document.createTextNode("NEW!");

myDemo.appendChild(newItem);

newItem.appendChild(newText);

// Combining What I have also learned.

function addNumbers (a,b) {
	var addedTotal= a +b;
	return (addedTotal);
	
}

var addNumbers2= addNumbers (6, 12);
alert(addNumbers2);


var studentName= prompt ("What is your name?");
switch (studentName) {
	case "David":
	alert ("Access Granted.");
	break;
		
	case "Elijah":
	alert ("Access Granted.");
	break;
		
	default:
	alert ("Access Denied.");		
}