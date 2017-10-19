var Player = require('../src/player.js')

describe("Player", function() {

    describe("Initialisation", function() {

        it("should have a default name property", function() {
            var player = new Player();
            expect(player.name).toBe("Default");
        });

        it("should allow the user to choose a name on creation", function() {
            var name = "Test";
            var player = new Player(name);
            expect(player.name).toBe("Test");
        });

        it("should be able to handle multiple players and maintain their name state", function() {
            var player1Name = "Player 1";
            var player2Name = "Player 2";
            var player1 = new Player(player1Name);
            var player2 = new Player(player2Name);
            expect(player1.name).toBe("Player 1");
            expect(player2.name).toBe("Player 2")
        });
    });

    describe("Post created properties", function() {

        it("should allow you to update your name using the updateName mathod", function() {
            var player = new Player();
            var name = "Updated name";
            player.updateName(name);
            expect(player.name).toBe("Updated name");
        });
    });
});