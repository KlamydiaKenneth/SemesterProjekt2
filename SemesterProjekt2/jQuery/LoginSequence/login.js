$(document).ready(function(){
	
	var userAdmin = "admin";
	var userPass = "12345";
	
	$("#loginSubmit").click(function(){
		var usernameInput = $("#username").val();
		var passwordInput = $("#password").val();
		
		if (usernameInput == userAdmin && passwordInput == userPass){
			$(location).attr("href", "profile.html");
		}
		else {
			$("#warning").html("Wrong username or password");		//Hvis if sætningen ikke passer skal vi vise den givne besked i vores html span
			
			$("#warning").effect("shake");
		}
	});
});	
