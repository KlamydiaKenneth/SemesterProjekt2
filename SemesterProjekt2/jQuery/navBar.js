$(document).ready(function(){
	
	$(".linkLogout").click(function(event){
		event.preventDefault();
		localStorage.removeItem("UserId");
		window.location = "login.html";
	});
	
	
	navBarCheck(); //checker om localstorage har et bruger ID 
	//other stuff here	
});	

function navBarCheck(){
	if (localStorage.UserId) 
	{
		console.log("logged in Hiding logout Element");
		$(".linkContent").show();
		$(".linkProfile").show();
		$(".linkUpload").show();
		$(".linkLogout").show();
		$(".linkLogin").hide();
	}
	else
	{
		console.log("Not logged in Hidding Elements");
		$(".linkContent").hide();
		$(".linkProfile").hide();
		$(".linkUpload").hide();
		$(".linkLogout").hide();
		$(".linkLogin").show();
	}
}


