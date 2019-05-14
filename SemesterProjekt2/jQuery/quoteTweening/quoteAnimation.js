
var quotes = ["\"Never wish life were easier, wish that you were better.\" - Jim Rohn",
"\"You learn more from failure than from success. Don't let it stop you. Failure builds character.\" - Unkown",
"\"The way to get started is to quit talking and begin doing\" - Walt Disney",
"\"What we think, we become.\" - Buddha",
"\"Success is not tp be pursued; it is to be attracted by the person we become\" - Jim Rohn",
"\"All our dreams can come true, if we have the courage to pursue them.\" - Walt Disney",
"\"We May Encounter Many Defeats But We Must Not Be Defeated.\" – Maya Angelou",
"\"Live your life, be happy\". - Simone Dalager",
"\"Har de ikke sex foran hans lig?\" - Martin M. Svensson",
"\"Bare lidt...\" - Mira Berg Schmidt"];

var stage,text1;
var timeWait = 10000;
var index = 0;

	if (localStorage["Index"]) 
	{
		index = +localStorage["Index"];
	}

$(document).ready(function(){
	stage = new createjs.Stage(document.getElementById('canvas'));
        createjs.Ticker.addEventListener("tick", handleTick);
        createjs.Ticker.framerate = 60; //"setFPS(60)" is 'outdated' "framerate = 60;" is a substitute
        start();
});

function start(){
	
	text1 = new createjs.Text("SuperCool Text 1", "20px Arial", "#FFFFFF");
	text1.textBaseline = "middle";
	text1.textAlign = "center";
	text1.x = stage.canvas.width / 2;
	text1.y = stage.canvas.height / 2;
	text1.maxWidth = stage.canvas.width;
	
	stage.addChild(text1);
	
	changeText();
	
	createjs.Tween.get(text1,{loop:-1,override:true})
			.wait(timeWait)
			.to({x:text1.x-stage.canvas.width},4000) //go off "stage"
			.to({x:text1.x+stage.canvas.width}) //teleport to other site of "stage"
			.call(changeText) //calls the "changeText" function, to change the text
			.to({x:text1.x},4000); //go back on "stage"
}

function changeText(){
	++index;
	if(index>=quotes.length){index=0;}
	localStorage.setItem("Index", index);
	text1.text = quotes[index];
}

function handleTick(e){
	stage.update();
}