//--------------MAPS-----------------

// 1 = Stone Brick
// 2 = Spike on bottom
// 3 = Lava
// 4 = Spike on top
// 5 = Orb
// 6 = Cracked Stone Brick
// 7 = Wood
// 8 = Chain
// 9 = Bookshelf
// 10 = Spike on bottom (Moving)
// 11 = Portal 1
// 12 = Portal 2
// 13 = Stone Brick (Background)
// 14 = Lantern
// 15 = Chain (Background)
// 16 = Torch
// 17 = Bookshelf (Background)
// 18 = Barrel
// 19 = Rotated Wood
// 20 = Spike on left (Moving)
// 21 = Spike on top (Moving)
// 22 = Spike on right (Moving)
// 23 = Spike on left
// 24 = Spike on Right
// 25 = Doors (Start)
// 26 = Ladder
// 27 = Wood (Background)
// 28 = Rotated Wood (Background)
// 30 = Doors (Finish)
// 31 = Key
// 32 = Iron Block
// 33 = Iron Block with Key hole
// 34 = Doors - Boss (Finish)
// 35 = Trophy
// 36 = Honey Left
// 37 = Honey Right
// 50 - 64 = Doors in the Lobby (Level 1 - 15)

let currentPlatform;
let originalPlatform1
let lobby
let map = new Array (16);

let playingCastle;

const setDungeonToCastle = () => {

    document.body.style.backgroundImage = "url(./res/img/wall_dark.png)"

    lobbyMusic = "./res/music_castle/lobby_castle.mp3";

    playingCastle = true;
    playingSteamPunk = false;
    playingSpace = false;
    
    rising.src = "./res/gif/rising.gif";

    let spawnCords = () => {
        player1.x = 35;
        player1.y = 500;
        player2.x = 70;
        player2.y = 500;
    }
    spawnCords();

    let spawnMovingPlatformCords = () => {
        xMovingPlatform = 10000;
        yMovingPlatform = 10000;
    }
    
    spawnMovingPlatformCords();

    //---------------------------------------------------------- Lobby

    currentPlatform =   [1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,
                        0,  0,  0,  0, 15,  0,  0,  0,  0,  1,  0,  0, 15,  0,  0,  0,  8, 62,  0,  8,  0,  0,  0,  0,  0,  0, 17, 19, 64,  0,  0,  0,
                       60,  0,  0,  0, 14,  0,  0, 61,  0,  1,  0, 16, 15,  0,  0,  0,  8,  0,  0,  8,  0,  0, 14, 26, 18, 17,  9, 19,  0,  0,  0, 26,
                        0,  0, 26,  0,  0,  0,  0,  0,  0, 13,  0,  0, 15,  0,  0,  0,  7,  7,  7,  7,  0,  0,  9, 26,  1,  1,  1,  1,  1,  1,  0, 26,
                        7,  7, 26,  0,  5,  0,  0,  1,  1,  1,  1,  1, 15,  0, 14,  0, 28,  0,  0, 28,  0,  9,  9, 26, 13,  0,  8,  0,  0,  8,  0, 26,
                        0,  0, 26,  0,  0,  0,  0,  0,  0,  0,  8,  0, 15,  0,  1,  1,  1,  1,  1,  1,  1,  1,  1, 26, 13,  0,  8,  0,  0,  8,  5,  0,
                        0,  0, 26,  0,  0,  0,  0,  0,  0,  0,  8,  0, 14,  0, 19,  0, 28,  0,  0,  0,  0, 19,  1,  1,  1,  0,  8, 63,  0,  8,  0,  0,
                       59,  0, 14,  0,  0,  0, 16,  0,  0,  0, 19,  0,  0,  0, 19, 26, 28,  0,  0,  0,  0, 19,  0,  0,  0,  0,  8,  0,  0,  8,  0, 14,
                        0,  0, 18,  0,  0,  0,  0,  0,  0,  0, 19,  0, 57,  0,  0, 26, 19,  0, 56,  0,  0, 19,  0,  0, 16,  0,  7,  7,  7,  7,  7,  7,
                        7,  7,  7,  0,  0,  0, 58,  0,  0, 14, 28,  0,  0,  0,  0, 26, 19, 18,  0,  0, 17, 17, 17,  0,  0,  0, 28, 55,  0, 28,  0, 11,
                        9, 17, 19, 29,  0,  0,  0,  0,  0,  7,  7,  7,  7,  7,  7,  7,  7,  7,  7,  7,  7,  9,  9, 17,  0,  0, 28,  0,  0, 28,  0,  0,
                        9,  9, 19,  1,  1,  1,  1,  1,  1,  1,  0,  0,  0,  1, 19,  0, 15,  0,  0,  0, 19,  9,  9,  9, 17,  7,  7,  7,  7,  7,  7,  7,
                        1,  1,  1,  1,  0,  0,  0,  0,  0, 51,  0,  0,  0,  1, 19,  0, 14, 52,  0,  0, 19,  7,  7,  7,  7,  7,  0,  8, 54,  0,  8,  0,
                       14,  0,  0,  0,  0,  0, 16,  0, 14,  0,  0, 14,  0,  1, 37,  0,  0,  0,  0, 26, 19,  0,  0,  0,  0, 17,  0,  8,  0,  0,  8, 26,
                        9,  0,  0,  0,  0,  0,  0,  0,  7,  7,  7,  7,  0,  1, 37,  0,  0,  7,  7, 26, 19,  0,  0, 16,  0, 17, 17,  7,  7,  7,  7, 26,
                        9, 17,  0, 50,  0,  0,  7,  0, 28,  0,  0, 28,  0,  0,  0,  0,  0, 19, 17, 26, 28,  0, 53,  0,  0,  9,  9, 17,  0, 12,  0, 26,
                        9, 17, 17,  0,  0, 18, 19,  0, 28,  0,  0, 28,  0,  0,  0,  0,  0, 19,  9, 26, 28, 14,  0,  0, 18,  9,  9,  9, 17,  0,  0, 26,
                        7,  7,  7,  7,  7,  7,  7,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  7,  7,  7,  7,  7,  7,  7,  7,  7,  1,  1,  1,  1,  1,  1]


//1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,
//0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,

originalPlatform1 = [...currentPlatform];
lobby = [...currentPlatform];

}

setTimeout(() => {
    loadCastleMaps();
}, 200);

setDungeonToCastle();