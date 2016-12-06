/* global Phaser */
window.onload = function(){
    var game = new Phaser.Game(500,500);
    var playGame = function(game){};
    var tileSize = 80;
    var numRows = 4;
    var numCols = 5;
    var tileSpacing = 10;
    var tilesArray = [];
    
    playGame.prototype = {
        create: function(){
            console.log("in create");
            //game.add.image(0,0,"tiles");
            this.placeTiles();
        },
        preload: function(){
            console.log("in preload")
            game.load.spritesheet("tiles", "tiles3.png", tileSize, tileSize);
        },
        placeTiles: function(){
            //function code goes here
            console.log("placeTiles called");
            var leftSpace = (game.width - (numCols * tileSize) - ((numCols - 1) * tileSpacing))/2;
            var topSpace = (game.height - (numRows * tileSize) - ((numRows - 1) * tileSpacing))/2;
            
            for(var i = 0; i < numRows * numCols; i++){
                tilesArray.push(Math.floor(i/2));
            }
            
            console.log("my tile values: " + tilesArray);
            
            
            for(i = 0; i < numCols; i++){
                for(var j = 0; j < numRows; j++){
                    //var tile = game.add.image(leftSpace+ i * (tileSize + tileSpacing), topSpace + j * (tileSize + tileSpacing), "tiles");
                    var tile = game.add.button(leftSpace + i * (tileSize + tileSpacing), 
                        topSpace + j * (tileSize + tileSpacing), 
                        "tiles", 
                        this.showTile,
                        this);
                        
                    tile.frame = 10;
                    tile.value = tilesArray[j * numCols + 1];
                }    
            }
            
        },
        showTile: function(target){
            console.log("showTile clicked. target value:", target.value);
            target.frame = target.value;
        }
    }
    game.state.add("PlayGame", playGame);
    game.state.start("PlayGame");
    
}