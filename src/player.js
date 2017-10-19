'use strict';

function Player(name = "Default") {
    this.name = name;
}

Player.prototype.updateName = function(name) {
    this.name = name;
}

module.exports = Player;