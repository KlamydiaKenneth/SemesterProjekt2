function onLoad() {
	checkLocal()
	
	var formIn = {};
	var formOut = {};
	//other stuff here
	addSubmitListener();
}

function checkLocal() {
	if (localStorage.UserId) 
	{
		document.getElementById("loggedIn").innerHTML = "You are currently logged is as " + localStorage.UserId+ "," ;
	}
	else
	 {
		document.getElementById("loggedIn").innerHTML = "Please enter username and password to login.";
	}
}



function addSubmitListener() {
	/*function getData() {
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
	
	var form = document.getElementById("signIn");

	form.addEventListener("submit", function(event) {
	event.preventDefault();

    //getData();
	});
}

function onSubmit() {
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
		console.log("Wrong Login")
		localStorage.removeItem("UserId");
	}
	checkLocal() //check if the user is "logged in" (Local Storage:UserID)
	//formIn = document.getElementById("SignIn");
	//formOut = $(formIn).serializeArray();
	//console.log(formOut);
}

/*   form to array
var dataArray = $("#signIn").serializeArray(),  //form name changed
    len = dataArray.length,
    dataObj = {};

for (i=0; i<len; i++) {
  dataObj[dataArray[i].name] = dataArray[i].value;
}

alert(dataObj['title']);  //name of input instead of title
*/
