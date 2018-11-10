import Game from './game';
import Player from './player';

// Create the game
var game = new Game(1024, 1024);

// add the tile map to the game
game.addMap();

// Create the player and add it to the game
game.addEntity(new Player(1024/2, 1024/2));

// Start the main game loop
game.loop();
