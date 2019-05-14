$(document).ready(function(){
	checkLocal(); //checker om localstorage har et bruger ID 
	var formIn = {};  //  unused i think
	var formOut = {};  // unused i think
	//other stuff here
	addSubmitListener();  // for at tilføje event.preventDefault(); til form submit	
});	

function checkLocal(){
	if (localStorage.UserId) 
	{
		document.getElementById("loggedIn").innerHTML = "du er logget in som " + localStorage.UserId;
	}
	else
	{
		document.getElementById("loggedIn").innerHTML = "insæt brugernavn og password for at logge ind";
	}
}

function addSubmitListener() {
	var form = document.getElementById("signIn");

	form.addEventListener("submit", function(event) {
	event.preventDefault(); //stopper form fra at tilføje input data til URL
	});
}
// når der trykkes på "logind" knappen
function onSubmit() {
	//laver variabler
	var dataArray = $("#signIn").serializeArray(),
    len = dataArray.length,
    dataObj = {};
	//dataObj fylles med data fra form, hvor navn fra form er brugt til key i array'et
	for (i=0; i<len; i++) {
		dataObj[dataArray[i].name] = dataArray[i].value;
	}
		//console.log("user Input:");  //name of input instead of title
		//console.log(dataObj);
		
	
	//mangler for-loop hvis der skal gemmes "nye brugere" til at check dem
	
	//check om det er "admin" bruger login
	//NB! dette er kun for prototypen, ville aldrig gemme rigtige login og password som rå data eller i offenlige filer
	if (dataObj.UserId == "admin" && dataObj.psw == "admin")
	{
		//logget in på admin konto-en
		console.log("Admin Login!");
		
		$("#warning").html("");
		
		localStorage.setItem("UserId", "admin");
	}
	else
	{
		//ved forkert konto information, fjernes den nuværende bruger fra LocalStorage
		console.log("Wrong Login");
		
		$("#warning").html("Forkert Brugernavn eller password");		//Hvis if sĂ¦tningen ikke passer skal vi vise den givne besked i vores html span
		
		$("#warning").effect("shake");
		
		localStorage.removeItem("UserId");
	}
	checkLocal(); 
}

/*
"Wall of text" der er outcommented
for referecer, slet inden upload
*/

	//checker om brugeren er logget ind (Local Storage:UserID)
	//formIn = document.getElementById("SignIn");
	//formOut = $(formIn).serializeArray();
	//console.log(formOut);


/* fra ::addSubmitListener():: 
		function getData() {
		var formData = new FormData(form);

		console.log(formData);
		console.log(formData.getAll());

		console.log(document.getElementById("UserId").value);
		var test = $(form).serializeArray()
		console.log(test);

		for (var pair of formData.entries()) {
		  alert(pair[0] + ': ' + pair[1]);
		}
	}
	*/


/*   form to array
var dataArray = $("#signIn").serializeArray(),  //form name changed
    len = dataArray.length,
    dataObj = {};

for (i=0; i<len; i++) {
  dataObj[dataArray[i].name] = dataArray[i].value;
}

alert(dataObj['title']);  //name of input instead of title
*/

	/*
	var userAdmin = "admin";
	var userPass = "12345";
	
	$("#loginSubmit").click(function(){
		
			console.log("Login Starting?");
		//temp var made
		var dataArray = $("#signIn").serializeArray(),
		len = dataArray.length,
		dataObj = {};
			console.log("variable made");
		//populating dataObj
		for (i=0; i<len; i++) {
			dataObj[dataArray[i].name] = dataArray[i].value;
		}
			console.log("user Input:");  //name of input instead of title
			console.log(dataObj); 
		//check if its admin login
		//should never be checked local
		if (dataObj.UserId == "admin" && dataObj.psw == "admin")
		{
			//login admin account
			console.log("Admin Login!")
			localStorage.setItem("UserId", "admin");
		}
		else
		{
			//"wrong" login, removing the userid from local storage
			console.log("Wrong Login");
			$("#warning").html("Wrong username or password");		//Hvis if sĂ¦tningen ikke passer skal vi vise den givne besked i vores html span
			
			$("#warning").effect("shake");
			localStorage.removeItem("UserId");
		}
		checkLocal(); //check if the user is "logged in" (Local Storage:UserID)
		//formIn = document.getElementById("SignIn");
		//formOut = $(formIn).serializeArray();
		//console.log(formOut);
		
		
		var usernameInput = $("#username").val();
		var passwordInput = $("#password").val();
		
		if (usernameInput == userAdmin && passwordInput == userPass){
			$(location).attr("href", "profile.html");
		}
		else {
			$("#warning").html("Wrong username or password");		//Hvis if sĂ¦tningen ikke passer skal vi vise den givne besked i vores html span
			
			$("#warning").effect("shake");
		}
		
	});*/