/* global Phaser */
window.onload = function(){
    var game = new Phaser.Game(500,500);
    var playGame = function(game){};
    playGame.prototype = {
        create: function(){
            console.log("That's my awesome game.");
        }
    }
    game.state.add("PlayGame", playGame);
    game.state.start("PlayGame");
    
}