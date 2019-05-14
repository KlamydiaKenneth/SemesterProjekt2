var quotes = ["\"Never wish life were easier, wish that you were better.\" - Jim Rohn", 
"\"You learn more from failure than from success. Don't let it stop you. Failure builds character.\" - Unkown",
"\"The way to get started is to quit talking and begin doing\" - Walt Disney",
"\"What we think, we become.\" - Buddha",
"\"Success is not tp be pursued; it is to be attracted by the person we become\" - Jim Rohn"];

var playQuote = getElementById(".answer");
createjs.Tween.get(playQuote).to({opacity: 0}, 1000);



    var stage;
    function init(){
        stage = new createjs.Stage(document.getElementById('canvas'));
        createjs.Ticker.addEventListener("tick", handleTick);
        createjs.Ticker.setFPS(60);
        start();
    }

    function start(){
        var text = new createjs.Text("Game Down UNDER", "20px Arial", "#ff7700");
        text.textBaseline = "middle";
        text.textAlign = "center";
        text.x = stage.canvas.width / 2;
        text.y = stage.canvas.height / 2;
        stage.addChild(text);
    }

    function handleTick(e){
		
        stage.update();
    }