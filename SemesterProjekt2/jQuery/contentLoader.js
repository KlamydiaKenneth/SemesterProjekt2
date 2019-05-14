$(document).ready(function(){
  loadContent();
  //other stuff here
});

//loads a XML file, inserts data it into an Div with the name "main" after converting it to a HTML structure
function loadContent() {
  var xmlhttp = new XMLHttpRequest();
  //to make sure the file is loaded before running the code
  xmlhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
		converter(this);
	}
};
xmlhttp.open("GET", "js/file_catalog.xml", true);
xmlhttp.send();
}
function converter(xml) {
var xmlDoc = xml.responseXML; 
var x = xmlDoc.getElementsByTagName("ADMIN")[0].getElementsByTagName("FILE");//USERID1 is just a temp name for a user
var content = "";
//converts the content of the xml file to HTML
for (i = 0; i <x.length; i++) {
	content += "<div class='item'><img class='img' SRC='";
	content += x[i].getElementsByTagName("IMGSRC")[0].childNodes[0].nodeValue; //Example::  img/SemesterProjektFileIMG.png
	content += "'><p class='name'><img class='fileIcon' SRC='img/SemesterProjektFileIMG.png'>";
	content += x[i].getElementsByTagName("NAME")[0].childNodes[0].nodeValue; //Example::  test_file1.js
	content += "</p><p class='subject'><img class='subjectIcon' SRC='img/BookIcon.png'>";
	content += x[i].getElementsByTagName("SUBJECT")[0].childNodes[0].nodeValue; //Example::  Distribueret programmering
	content += "</p><p class='desc'>";
	content +=  x[i].getElementsByTagName("DESC")[0].childNodes[0].nodeValue; //Example::  a very descriptive description
	content += "</p><a href='#DOWNLOADING' class='loginLink'><img class='downloadIcon' SRC='img/DownloadIcon.png'></a></div>";
}

    var localFiles = JSON.parse(localStorage.getItem("localFiles") || "[]");
	
    localFiles.forEach(function(file, index) {
    console.log("'loading'[" + index + "]: " + file.name);
   
 
	content += "<div class='item'><img class='img' SRC='";
	content += file.IMGSRC; //Example::  img/SemesterProjektFileIMG.png
	content += "'><p class='name'><img class='fileIcon' SRC='img/SemesterProjektFileIMG.png'>";
	content += file.name; //Example::  test_file1.js
	content += "</p><p class='subject'><img class='subjectIcon' SRC='img/BookIcon.png'>";
	content += file.Subject; //Example::  Distribueret programmering
	content += "</p><p class='desc'>";
	content += file.Description; //Example::  a very descriptive description
	content += "</p><a href='#DOWNLOADING' class='loginLink'><img class='downloadIcon' SRC='img/DownloadIcon.png'></a></div>";
} );

//Replaces the content of the Main div with the tags made using the XML
document.getElementById("main").innerHTML = content;
}



// leftover code from copy pasta
/*  
function displayCD(i) {
  document.getElementById("showCD").innerHTML =
  "Artist: " +
  x[i].getElementsByTagName("ARTIST")[0].childNodes[0].nodeValue +
  "<br>Title: " +
  x[i].getElementsByTagName("TITLE")[0].childNodes[0].nodeValue +
  "<br>Year: " + 
  x[i].getElementsByTagName("YEAR")[0].childNodes[0].nodeValue;
}
*/
