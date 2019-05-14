var formData;
var formIn = {};
var formOut = {};

$(document).ready(function(){
  addAutoComplete();
  
  //other stuff here
  addSubmitListener();
});

//adds the autocomplete to the 2 input fields
function addAutoComplete() {
	
    var FolderTags = [
      "SemesterProjekt",
      "Lektier",
      "Private",
      "Gruppe"
    ];
	
	var CoopTags = [
      "Nikkerlaj",
      "PrettyBoy1",
      "NameHere",
      "UnkownUser",
      "USERID1",
      "USERID2",
      "MartinWasHere!"
    ];
	
    function split( val ) {
      return val.split( /,\s*/ );
    }
    function extractLast( term ) {
      return split( term ).pop();
    }
	//modified Default fra JqueryUI Autocomplete
	$( "#autoFolder" ).autocomplete({
	  minLength: 0,
      source: FolderTags
	});
	//Multiple values fra JqueryUI Autocomplete
    $( "#autoCoop" )
      // don't navigate away from the field on tab when selecting an item
      .on( "keydown", function( event ) {
        if ( event.keyCode === $.ui.keyCode.TAB &&
            $( this ).autocomplete( "instance" ).menu.active ) {
          event.preventDefault();
        }
      })
      .autocomplete({
        minLength: 0,
        source: function( request, response ) {
          // delegate back to autocomplete, but extract the last term
          response( $.ui.autocomplete.filter(
            CoopTags, extractLast( request.term ) ) );
        },
        focus: function() {
          // prevent value inserted on focus
          return false;
        },
        select: function( event, ui ) {
          var terms = split( this.value );
          // remove the current input
          terms.pop();
          // add the selected item
          terms.push( ui.item.value );
          // add placeholder to get the comma-and-space at the end
          terms.push( "" );
          this.value = terms.join( ", " );
          return false;
        }
      });
  }
function addSubmitListener() {
  function getData() {
    formData = new FormData(form);

	console.log(formData);
	console.log(formData.getAll());

	console.log(document.getElementById("UserId").value);
	var test = $(form).serializeArray()
	console.log(test);

    for (var pair of formData.entries()) {
      alert(pair[0] + ': ' + pair[1]);
	  
	  
	  
    }
  }

  var form = document.getElementById("uploadForm");
//	console.log($("form").serializeArray());

  form.addEventListener("submit", function(event) {
    event.preventDefault();

    //getData();
  });
}

function onSubmit() {
	formIn = document.getElementById("uploadForm");
	formOut = $(formIn).serializeArray();
	console.log(formOut);
	
	console.log(formOut[0].value + "test for username"); //UserId
	
	addContent();

}

function addContent() {
	
    // Loading
    var localFiles = JSON.parse(localStorage.getItem("localFiles") || "[]");
    console.log("# of localFiles: " + localFiles.length);
    localFiles.forEach(function(file, index) {
        console.log("[" + index + "]: " + file.name);
    });
	var fileName
	
    fileName = $('input[type="file"]')[0].files[0].name;
			
    // Modifying
    var file = {
        name: fileName,
		IMGSRC: "img/SemesterProjektFileIMG.png",
		Subject : formOut[1].value,
		Description:formOut[5].value
    };
    localFiles.push(file);
    console.log("Added file " + file.name);

    // Saving
    localStorage.setItem("localFiles", JSON.stringify(localFiles));
	
/* 	
	
	var temp = formOut[0].value;
	var localFiles = {  temp : temp, 'two': formOut[0].value, 'three': 3 };

	// Put the object into storage
	localStorage.setItem('localFiles', JSON.stringify(localFiles));

	// Retrieve the object from storage
	var retrievedObject = localStorage.getItem('localFiles');

	console.log('retrievedObject: ', JSON.parse(retrievedObject));
 */
}

/*   //from content, function name is changed
//loads a XML file, inserts data it into an Div with the name "main" after converting it to a HTML structure
function addContent() {
  var xmlhttp = new XMLHttpRequest();
  //to make sure the file is loaded before running the code
  xmlhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
		uploader(this);
	}
};
xmlhttp.open("GET", "js/file_catalog.xml", true);
xmlhttp.send();
}
function uploader(xml) {
var xmlDoc = xml.responseXML; 
var x = xmlDoc.getElementsByTagName("USERID1")[0].getElementsByTagName("FILE");//USERID1 is just a temp name for a user
content = "";
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
//Replaces the content of the Main div with the tags made using the XML
document.getElementById("main").innerHTML = content;
}
*/


/*   //form to array
var dataArray = $("#uploadForm").serializeArray(),  //form name changed
    len = dataArray.length,
    dataObj = {};

for (i=0; i<len; i++) {
  dataObj[dataArray[i].name] = dataArray[i].value;
}

alert(dataObj['title']);  //name of input instead of title
*/
