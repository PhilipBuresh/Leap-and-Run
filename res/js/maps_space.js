let playingSpace;

//--------------MAPS-----------------

const setDungeonToSpace = () => {

     document.body.style.backgroundImage = "url(./res/img/wall_space_dark.png)";

     lobbyMusic = "./res/music_spaceship/lobby_spaceship.mp3";

     playingSpace = true;
     playingCastle = false;
     playingSteamPunk = false;

     rising.src = "./res/gif/rising_slime.gif"

     let spawnCords = () => {
          player1.x = 40;
          player1.y = 500;
          player2.x = 70;
          player2.y = 500;
     }
     spawnCords();

     let spawnMovingPlatformCords = () => {
          xMovingPlatform = 600;
          yMovingPlatform = 384;
     }
      
     spawnMovingPlatformCords();

     //---------------------------------------------------------- Lobby

     currentPlatform = [  1,  1,  1,  1,  1,  1,  1,  1,  7,  7,  7,  7,  7,  7,  7,  7, 41, 41, 41,  7,  7,  7,  7,  7,  7,  7,  7,  7,  7,  7,  7,  7,
                        40, 14,  0, 42,  0,  0,  0,  1,  0,  0,  0,  0,  0, 61,  0,  0,  0,  1,  0,  0,  0, 14,  0, 39,  0,  0,  0, 87,  0, 14,  0,  0,
                        40,  0,  0, 19,  0, 44,  0,  1,  0,  0,  0,  0,  0,  0,  0, 45, 26, 38,  0,  0,  0,  0,  0, 39, 49,  0,  0,  0,  0,  0,  0,  0,
                        40,  0,  0, 19,  0,  0,  0,  1, 60,  0, 97,  0, 95,  1,  1,  1, 26, 42, 62,  0, 94, 63,  0, 39,  0,  0, 87, 87, 87,  0, 64,  0,
                        40, 44,  0, 19, 96, 45, 45, 13,  0,  0, 46, 47, 48,  1, 13,  1, 26, 42,  0,  0, 68,  0,  0, 39,  0,  0, 43,  0,  0,  0,  0,  0,
                        40,  0,  0, 41, 41, 41, 41, 41,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1, 38, 38,  7,  7,  7,  1,  0,  0,  0,  0,  0,  0,  1,  1,
                        40,  0,  0, 36, 42, 41,  0, 14, 39,  0,  0,  0,  0,  0,  0, 40,  0, 14, 19, 14,  0, 40,  0, 13, 55,  0,  0,  0,  0,  0,  1, 13,
                        40,  0,  0, 36, 41, 41,  0,  0, 39,  0,  0,  0, 89, 57,  0, 40,  0,  0, 19,  0,  0, 40,  0, 13,  0, 45, 45,  0,  0,  0,  1,  1,
                        40,  0, 59,  0,  0,  0, 58,  0, 39,  0, 45, 89, 71,  0,  0, 40,  0,  0, 19,  0,  0, 40,  0,  1,  7,  7,  1,  0,  0,  0, 14,  0,
                        40,  0,  0,  0, 45, 45,  0,  0, 39,  0,  1,  1,  1, 41, 41, 37,  0,  0, 19,  0,  0, 40,  0, 19,  0,  0, 14,  0,  0,  0,  0,  0,
                         1,  1, 38, 38,  1,  1,  7,  7, 38,  0, 39, 14,  0,  0,  0, 41, 56,  0, 38,  0,  0, 40,  0, 19,  0, 49,  0,  0,  0, 88, 88, 88,
                        13, 13, 13, 13, 13,  1,  0, 14,  0,  0, 39, 51,  0,  0,  0, 41,  0,  0,  0,  0,  0, 40,  0, 19,  0,  0,  0,  0,  0,  0,  0,  0,
                         1,  1, 38, 38,  1,  1, 43,  0,  0,  0, 39,  0,  0, 97, 26, 41,  1,  1, 43,  0,  0, 40,  0, 19, 95,  0, 46, 48,  0,  0,  0,  0,
                         0,  0, 39, 14,  0,  0,  0,  0,  0,  0, 38,  7,  7, 38, 26, 41,  0,  0,  0,  0,  0, 40,  0,  1,  7,  7,  7,  7,  7, 42, 42, 42,
                         0,  0, 39,  0,  0,  0,  0,  0,  0, 17, 19, 42, 42, 19, 26, 38,  0,  0,  0, 94,  0, 40,  0, 53,  0, 40, 39,  0, 14,  0,  0, 71,
                        89,  0, 39, 50,  0,  0, 96,  0,  0, 17, 19, 42, 42, 19, 26, 42, 52,  0,  0, 68, 67, 40,  0,  0,  0, 40, 39, 54,  0,  0,  0, 71,
                        71, 89, 39,  0, 45, 45, 46, 48,  0, 17, 19, 42, 42, 19, 26, 42,  0,  0, 68, 68, 67, 40,  1,  1,  1,  1, 39,  0,  0,  0, 29, 71,
                         7,  7,  7,  7,  7,  7, 41, 41, 41, 41, 19, 42, 42, 19, 41, 41, 41,  1,  1,  1,  1,  1,  1, 13, 13,  1,  1,  1,  1,  1,  1,  1,
     ],

//1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,
//0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,

originalPlatform1 = [...currentPlatform];
lobby = [...currentPlatform];

setTimeout(() => {
     loadSpaceMaps();
}, 200);
}