/* global Phaser */
window.onload = function(){
    var game = new Phaser.Game(500,500);
    var playGame = function(game){};
    var tileSize = 80;
    playGame.prototype = {
        create: function(){
            console.log("That's my awesome game.");
        },
        preload: function(){
            game.load.spritesheet("tiles", "tiles3.png", tileSize, tileSize);
        }
    }
    game.state.add("PlayGame", playGame);
    game.state.start("PlayGame");
    
}