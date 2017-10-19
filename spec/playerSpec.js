var Player = require('../src/player.js')

describe("Player", function() {

    var player;
    
    beforeEach(function() {
        player = new Player();
    });

    describe("Initialisation", function() {

        it("should have a default name property", function() {
            expect(player.name).toBe("Default");
        });

        it("should allow the user to choose a name on creation", function() {
            var name = "Test";
            var player1 = new Player(name);
            expect(player1.name).toBe("Test");
        });

        it("should be able to handle multiple players and maintain their name state", function() {
            var player1Name = "Player 1";
            var player2Name = "Player 2";
            var player1 = new Player(player1Name);
            var player2 = new Player(player2Name);
            expect(player1.name).toBe("Player 1");
            expect(player2.name).toBe("Player 2")
        });

        it("should have 0 games played on creation", function() {
            expect(player.gamesPlayed).toBe(0);
        });

        it("should have 0 games won on creation", function() {
            expect(player.gamesWon).toBe(0);
        });

        it("should have 0 games lost on creation", function() {
            expect(player.gamesLost).toBe(0);
        });
    });

    describe("Post created properties", function() {

        it("should allow you to update your name using the updateName mathod", function() {
            var name = "Updated name";
            player.updateName(name);
            expect(player.name).toBe("Updated name");
        });

        it("should increase gamesPlayed when a game is played", function() {
            player.gamePlayed();
            expect(player.gamesPlayed).toBe(1);
        });

        it("should allow a player to increase games won using the gameWon method", function() {
            player.gameWon();
            expect(player.gamesWon).toBe(1);
        });

        it("should allow a player to increase games lost using the gameLost method", function() {
            player.gameLost();
            expect(player.gamesLost).toBe(1);
        });

        it("should increment gamesPlayed when a game is won", function() {
            player.gameWon();
            expect(player.gamesPlayed).toBe(1);
        });

        it("should increment gamesPlayed when a game is lost", function() {
            player.gameLost();
            expect(player.gamesPlayed).toBe(1);
        });
    });
});