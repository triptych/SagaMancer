console.log("game.js loading");
window.addEventListener("load", function(){
  console.log("window load called");
  var tileSize = 80; // px size of tiles
  var numRows = 4;
  var numCols = 5;
  var tileSpacing = 10; // in px
  var tilesArray = [];
  var selectedArray = [];

  var game = new Phaser.Game(500,500);
  var playGame = function(game){}
  playGame.prototype = {
    preload: function(){
      console.log("in preload");
      game.load.spritesheet('tiles', 'tiles3.png', tileSize, tileSize);
    },
    create: function(){
      console.log("In playGame.prototype");
      //game.add.image(0,0,"tiles");
      this.placeTiles();
    },
    placeTiles: function(){
      console.log("in placeTiles");
      var leftSpace = (game.width - (numCols * tileSize) - ((numCols - 1) * tileSpacing)) / 2;
      var topSpace = (game.height - (numRows * tileSize)  - ((numRows - 1) * tileSpacing)) / 2;

      for(var i = 0; i < numRows * numCols; i++) {
       tilesArray.push(Math.floor(i / 2));
      }
      console.log("my tile values: " + tilesArray);

      for(i = 0; i < numRows * numCols; i++){
        var from = game.rnd.between(0,tilesArray.length-1);
        var to = game.rnd.between(0, tilesArray.length-1);
        var temp = tilesArray[from];
        tilesArray[from] = tilesArray[to];
        tilesArray[to] = temp;
      }


      for(var i=0; i < numCols; i++){
        for (var j=0; j<numRows; j++){

          var tile = game.add.button(
            leftSpace + i * (tileSize + tileSpacing),
            topSpace + j * (tileSize + tileSpacing), "tiles",
            this.showTile, this);

          tile.frame = 10;
          tile.value = tilesArray[j * numCols + i];
        }
      }
    },
    showTile: function(target){
      console.log("show me!");
      console.log("this tile has value = " + target.value);
      if(selectedArray.length < 2 && selectedArray.indexOf(target) == -1){
        target.frame = target.value;
        selectedArray.push(target);
      }

      if(selectedArray.length == 2){
        game.time.events.add(Phaser.Timer.SECOND, this.checkTiles, this);
      }

    },
    checkTiles: function(){
      if(selectedArray[0].value == selectedArray[1].value){
        selectedArray[0].destroy();
        selectedArray[1].destroy();
      }
      else{
        selectedArray[0].frame = 10;
        selectedArray[1].frame = 10;
      }
      selectedArray.length = 0;

    }
  }

  game.state.add("Playgame", playGame);
  game.state.start("Playgame");
});
