'use strict';

function Player(name = "Default") {
    this.name = name;
    this.gamesPlayed = 0;
    this.gamesWon = 0;
    this.gamesLost = 0;
}

Player.prototype.updateName = function(name) {
    this.name = name;
}

Player.prototype.gamePlayed = function() {
    this.gamesPlayed += 1;
}

Player.prototype.gameWon = function() {
    this.gamePlayed();
    this.gamesWon += 1;
}

Player.prototype.gameLost = function() {
    this.gamePlayed();
    this.gamesLost += 1;
}

module.exports = Player;