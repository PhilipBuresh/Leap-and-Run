const canvas = document.getElementById('cnv');
const p = canvas.getContext('2d'); //Platform
const c = canvas.getContext('2d'); //Character
const text = document.getElementById("text");
const wasd = document.getElementById("wasd");
const buttons = document.getElementById("buttons");
const menuMusic = document.getElementById("menuMusic");
const game = document.getElementById("game");
const black = document.getElementById("black");
const josh = document.getElementById("josh");
const esc = document.getElementById("esc");
const playButton = document.getElementById("playButton");
const startMenu = document.getElementById("startMenu");
const button_back = document.getElementById("button_back");
const button_resume = document.getElementById("button_resume");
const button_retry = document.getElementById("button_retry");
const button_menu = document.getElementById("button_menu");
const button_enter = document.getElementById("button_enter");
const escape_button = document.getElementById("escape_button");

const setVolume = (volume) => {
    if (menuMusic) {
      menuMusic.volume = volume;
    }
}

setVolume(0);

const deviceDetect = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
if (deviceDetect == true) {
    buttons.style.display = "block";
}

let doorsTime = 50000;
let doorTimeout = false;
let setTimeoutDoor;

playButton.onclick = () => {
    playButton.style.animationName = "blink"
    playButton.style.animationPlayState = "running";
    black.style.opacity = "1";
    setTimeout(() => {
        game.style.display = "block";
        startMenu.style.display = "none";
        inGame = true;
        playButton.style.animationName = "none"
        playButton.style.animationPlayState = "none";
        setTimeout(() => {
            black.style.opacity = "0";
        }, 50);
    }, 800);
}

let x;
let y;

let xGhost = 70000; //700
let yGhost = 310

let spawnCords = () => {
    x = 40;
    y = 500;
}
spawnCords();

let spawnGhostCords = () => {
    xGhost;
    yGhost;
}
spawnGhostCords();

let height = 40;
let width = 30;

let gravityId;
let jumpingId;
let animationIdRight;
let animationIdLeft;

let velocityJump = 0

let isJumping = false;
let gravityOn = false;
let isMovingRight = false;
let isMovingLeft = false;

let turnedRight = true;
let turnedLeft = false;

let fps = 55;
let interval = 1000/fps;

let portalCordsX1 = 0;
let portalCordsY1 = 0;
let portalCordsX2 = 0;
let portalCordsY2 = 0;

//Lokace platform
//                      1  2  3  4  5  6  7  8  9 10 11 12 13 14 15 16 17 18 19 20 21 22 23 24 25 26 27 28 29 30 31 32
let platformLevel1 =   [1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  7,  7,  7,  7,  7,  7,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,
                        0,  0,  0,  0, 15,  0,  0,  0,  0,  1,  0,  0, 15,  0,  0,  0,  8, 62,  0,  8,  0,  0,  0,  0,  0,  0, 17, 19, 64,  0,  0,  0,
                       60,  0,  0,  0, 15,  0,  0, 61,  0,  1,  0, 16, 15,  0,  0,  0,  8,  0,  0,  8,  0,  0, 14, 26,  0, 17,  9, 19,  0,  0,  0, 26,
                        0,  0, 26,  0, 14,  0,  0,  0,  0, 13,  0,  0, 15,  0,  0,  0,  7,  7,  7,  7,  0,  0,  9, 26,  1,  1,  1,  1,  1,  1,  0, 26,
                        7,  7, 26,  0,  0,  0,  0,  1,  1,  1,  1,  0, 15,  0, 14,  0, 28,  0,  0, 28,  0,  9,  9, 26, 13,  0,  8,  0,  0,  8,  0, 26,
                        0,  0, 26,  0,  0,  5,  0,  0,  0,  0,  8,  0, 15,  0,  1,  1,  1,  1,  1,  1,  1,  1,  1, 26, 13,  0,  8,  0,  0,  8,  5,  0,
                        0,  0, 26,  0,  0,  0,  0,  0,  0,  0,  8,  0, 14,  0, 19,  0, 28,  0,  0,  0,  0, 19,  1,  1,  1,  0,  8, 63,  0,  8,  0,  0,
                       59,  0,  0,  0,  0,  0, 16,  0,  0,  0, 19,  0,  0,  0, 19, 26, 28,  0,  0,  0,  0, 19,  0,  0,  0,  0,  8,  0,  0,  8,  0, 14,
                        0,  0,  0,  0,  0,  0,  0,  0,  0,  0, 19,  0, 57,  0,  0, 26, 19,  0, 56,  0,  0, 19,  0,  0, 16,  0,  7,  7,  7,  7,  7,  7,
                        7,  7,  7,  0, 14,  0, 58,  0,  0, 14, 28,  0,  0,  0,  0, 26, 19, 18,  0,  0, 17, 17, 17,  0,  0,  0, 28, 55,  0, 28,  0,  11,
                        9, 17, 28,  0, 18,  0,  0,  0,  0,  7,  7,  7,  7,  7,  7,  7,  7,  7,  7,  7,  7,  9,  9, 17,  0,  0, 28,  0,  0, 28,  0,  0,
                        9,  9, 28,  0,  1,  1,  1,  1,  1,  1,  0,  0,  0,  1,  0,  0,  0, 52,  0,  0, 19,  9,  9,  9, 17,  7,  7,  7,  7,  7,  7,  7,
                        1,  1,  1,  1,  1,  0,  0,  0,  0, 51,  0,  0,  0,  1,  0, 16,  0,  0,  0, 26, 19,  7,  7,  7,  7,  7,  0,  8, 54,  0,  8,  0,
                       14,  0,  0,  0,  0,  0, 16,  0, 14,  0,  0, 14,  0,  1,  0,  0,  0,  7,  7, 26, 19,  0,  0,  0,  0, 17,  0,  8,  0,  0,  8, 26,
                        9,  0,  0,  0,  0,  0,  0,  0,  7,  7,  7,  7,  0,  1, 13,  5,  0, 19,  0, 26, 19,  0,  0, 16,  0, 17,  0,  7,  7,  7,  7, 26,
                        9, 17,  0, 50,  0,  0,  7,  0, 28,  0,  0, 28,  0,  1, 13, 13, 14, 19, 17, 26, 28,  0, 53,  0,  0,  9,  9, 17,  0, 12,  0, 26,
                        9, 17, 17,  0,  0, 18, 19,  0, 28,  0,  0, 28,  0, 13, 13, 13, 18, 19,  9, 26, 28, 14,  0,  0, 18,  9,  9,  9, 17,  0,  0, 26,
                        7,  7,  7,  7,  7,  7,  7,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  7,  7,  7,  7,  7,  7,  7,  7,  7,  1,  1,  1,  1,  1,  1]

//1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,
//0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,

let originalPlatform1 = [...platformLevel1];
let lobby = [...platformLevel1];

let map = new Array (15)

map[0] =    [1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,
             0,  0, 15,  0,  0,  0,  8,  0,  1,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,
             0,  0, 14,  0,  0,  0,  8,  0,  1,  0,  0,  0, 16,  0,  0, 17,  0, 16,  0,  0, 17,  0,  0,  0, 16,  0,  0,  0,  0,  0, 11,  0,
             0,  0,  0,  0, 16,  0,  8,  0,  1,  0, 30,  0,  0,  0, 17,  9,  0,  0,  0, 17,  9, 17,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,
             0, 12,  0, 17,  0,  0,  8,  0,  1,  0,  0,  0,  0, 17,  9,  9,  2,  0, 17, 17,  9, 17,  0,  0,  0,  0,  0,  1,  1,  1,  1,  1,
             0,  0, 17,  9,  0,  0,  8,  0,  1,  1,  1,  1,  1,  1,  1,  7,  7,  7,  7,  1,  1,  1,  1,  1,  1,  1,  1,  1,  0,  0,  0,  0,
             0,  9,  9,  9, 17,  0,  7,  7,  1,  1,  0,  0,  0,  0,  1,  0,  0,  0,  0,  0,  0,  0,  0,  8,  0,  8,  0,  0,  0,  0,  0,  0,
             9,  9,  9,  9, 17,  0,  0,  0,  0,  6,  0, 14,  0,  0,  1,  0,  0,  0, 18,  0,  0,  0,  0,  8,  0,  8,  0,  0,  0, 17,  0,  0,
             9,  9,  9,  9,  9, 17,  0,  0,  0,  6,  0, 18,  0,  0,  6,  0,  0,  0,  1,  0, 16,  0,  0,  8,  0,  8,  0,  0, 17, 17,  0, 26,
             1,  1,  1,  1,  1,  7,  7,  7,  7,  7,  1,  1,  1,  0,  6, 14,  0,  0, 21,  0,  0,  0,  0,  8, 14,  8,  0,  1,  1,  1,  1, 26,
             0,  0,  0,  0, 15,  0,  0,  0,  0,  0,  8,  0,  1,  1,  1,  1,  1,  0, 10,  0,  0,  0,  0,  7,  7,  7,  0,  0,  0,  0,  0, 26,
             0,  0,  0,  0, 15,  0,  0,  0,  0,  0,  8,  0,  0,  0,  0,  0,  1,  1,  1,  1,  1,  1,  0,  0,  0,  0,  0,  0,  0,  0,  0, 26,
             0,  0,  0,  0, 15,  0,  0,  0, 16,  0,  8,  0,  0,  0, 16,  0,  0,  0,  8, 19, 19,  8,  0,  0,  0,  0, 16,  0,  0, 14,  0, 26,
            14,  0,  0,  0, 15,  0,  0,  0,  0,  0,  8,  0, 17,  0,  0,  0,  0,  0,  8,  7,  7,  8,  0,  0,  0,  0,  0,  0,  0,  7,  7,  7,
             9,  0,  0,  0, 14,  0,  0,  0,  0,  0,  8, 17, 17,  2,  2,  0, 14,  0,  8,  0,  0,  8,  0, 14,  0,  0,  5,  0,  0,  0, 17,  9,
             9, 25,  0,  0,  0,  0,  0,  0,  0, 14,  7,  7,  7,  7,  7,  7,  1,  1,  7,  7,  7,  7,  1,  1,  0,  0,  0,  0, 17, 17,  9,  9,
             9,  0,  0,  0,  0,  0,  0,  0,  0, 18, 19, 28, 28, 28,  0,  0,  1,  1, 27, 27, 27, 27,  1,  1, 18,  0,  0,  17,  9,  9,  9,  9,
             1,  1,  1,  1,  3,  3,  3,  1,  1,  1,  1,  1,  1,  1,  3,  3,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,]

//platformLevel1 = [...map[0]];
//originalPlatform1 = [...platformLevel1];

map[1] = [1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,
          0,  0,  0,  0,  0,  4,  0,  0,  0,  8,  0,  8,  0, 15,  0,  0,  0,  0, 21,  0,  8,  0,  8,  0,  0,  0, 21,  0,  4, 30,  0,  1,
         18,  0,  0,  0, 14,  6,  0,  0,  0,  8, 10,  8, 16, 15,  0,  0,  0,  0,  0,  0,  8,  0,  8,  0,  0, 10,  0, 10,  0,  0,  0,  1,
          1,  0,  0,  0,  1,  1,  1,  0,  0,  8, 19,  8,  0, 15,  0,  0,  0,  0, 10,  0,  8,  0,  8,  0,  0,  1,  1,  1,  1,  1,  1,  1,
         20,  0,  0,  1,  1,  0,  0,  0,  0,  7,  7,  7,  0, 15,  0, 14,  0, 18,  1,  0,  7,  0,  7,  0,  0,  0,  8,  0,  0,  0,  0,  0,
         20,  5,  0,  0,  0,  0,  0, 16,  0,  0, 15,  0,  0, 15, 24,  1,  7,  7,  1,  0,  0,  0,  0,  0,  0,  0,  8,  0,  0,  0,  0,  0,
         20,  0,  0,  0, 14,  9,  0,  0,  0,  0, 14,  0,  0, 15,  0,  0,  6,  0,  0,  0,  0,  0,  0,  0,  0,  0,  7,  7,  7, 14,  0,  0,
          0,  0,  0, 17,  9,  9, 17,  0,  0,  0,  0,  0,  0, 15,  0,  0,  6,  0, 10, 10,  0,  0, 14,  0,  0,  0,  0,  0,  1,  1,  0,  0,
          0, 16,  1,  1,  1,  1,  1,  1, 10,  0,  0,  0,  0, 15,  0, 14,  1,  7,  7,  1,  0,  0, 18,  0,  0,  0,  0,  0,  0,  0,  0,  5,
          0,  0,  0,  0,  0,  0,  1,  1,  1,  1,  1,  0,  0, 15,  1,  7,  1,  8,  0, 21,  0,  0,  9,  0,  0,  0, 16,  0,  0,  0,  0,  0,
          0,  0,  0,  0,  0,  0,  8,  4, 19,  8,  0, 16,  0, 15,  0,  8,  0,  8,  0,  0,  0,  0,  9, 17,  0,  0,  0,  0,  0,  0, 10,  2,
          0,  0, 16,  0,  18, 0,  8,  0, 19,  8,  0,  0,  0, 15,  0,  8,  6,  8,  0, 10,  0, 17,  9,  9,  0,  0,  0, 24,  1,  1,  1,  1,
         14,  0,  0,  0,  7,  0,  8,  0, 19,  8,  0,  0,  0, 14,  0,  8,  6,  8,  2,  1,  0, 17,  9,  9,  5,  0,  0,  0,  8,  0,  8, 11,
          7,  0,  0,  0,  1,  0,  8, 16,  4,  8,  0,  0,  5,  0,  0,  7,  7,  7,  7,  7,  0, 17,  9,  9,  0,  0,  0,  0,  8,  0,  8,  0,
          0,  0,  0,  0,  1,  0,  8,  0,  0,  8,  0,  0,  0,  0,  0,  0,  8,  0,  0,  0,  0, 17,  9,  9,  2,  0,  0,  0,  8, 14,  8,  0,
          0, 25,  0,  9,  1,  0,  7,  7,  7,  7,  0,  0,  0,  0,  0,  0, 14, 12,  0,  6, 17, 17,  9,  9,  9,  0,  0,  7,  7,  7,  7,  0,
          0,  0,  0,  9,  1,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  6, 17,  9,  9,  9,  9,  2,  0,  0,  0,  0,  0,  0,
          7,  7,  7,  7,  1,  3,  3,  3,  3,  3,  3,  3,  3,  3,  3,  3,  3,  3,  3,  1,  7,  7,  7,  7,  7,  1,  3,  3,  3,  3,  3,  3,]
/*
[1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,
          4,  0,  0,  0,  0,  4,  0,  0,  0,  0,  0,  0,  0,  6,  0, 11,  9,  4,  0, 19,  4,  4,  4,  1,  4,  4,  4,  4, 19,  0,  0,  0,
          0,  0, 16,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  6,  0,  0,  9,  0,  0,  6,  0,  0,  0,  8,  0,  0,  0,  0, 19,  0,  0,  0,
          0,  0,  0,  0,  0,  0,  0,  0,  0, 18,  1,  3,  1,  7,  7,  7,  7,  0,  0,  6,  0,  0,  0,  8,  0, 16,  0,  0,  4,  0, 30,  0,
         14,  0,  0,  0,  9, 14,  0,  2,  1,  1,  1,  1,  1,  0,  0,  0,  0,  0, 14, 19, 18,  2,  0,  8,  0,  0,  0,  0, 10, 14,  0,  0,
         18,  0,  0, 17,  9,  9,  0,  1,  1,  8, 18, 12,  0, 16,  0, 10,  0,  0,  9, 19,  1,  1,  0,  8,  0,  0,  1,  1,  1,  1,  1,  1,
          1,  0,  0, 17,  9,  9,  0,  0,  0, 18, 18,  0,  0,  0, 10, 19, 10, 17,  9, 19,  4,  8,  0,  7,  0,  0,  0,  4, 15,  0,  8,  0,
          4,  0,  0, 19,  1,  1,  0, 14,  0,  7,  7,  7,  7,  7,  1,  1,  1,  1,  1,  1,  0,  8,  0,  0,  0,  0,  0,  0, 15,  0,  7,  0,
          0,  5,  0, 19,  4,  0,  0,  9,  0,  0,  0,  0,  0,  6,  0,  0,  0,  0,  0,  8,  0,  8,  0, 16,  0,  0,  0,  0, 14,  0,  4,  0,
          2,  0,  0,  6,  0, 17,  9,  9, 17,  0, 14,  0,  0,  6,  0,  0,  0,  0,  0,  8,  0,  8,  0,  0, 17,  0,  2,  0,  0,  0,  0,  0,
          1,  0,  0, 10, 17, 17,  1,  1,  1,  0,  7,  7,  0,  1, 18,  0,  0,  1,  0,  8, 14,  8,  0, 17,  9,  0,  1,  0,  5,  0,  0,  0,
          0,  0,  7,  7,  7,  7,  1,  0,  8,  0,  4,  0,  0,  1,  1,  1,  0,  4,  0,  7,  7,  7,  0,  1,  1,  0,  0,  0,  0,  0, 16,  0,
          0,  0,  0,  0,  0,  0,  8,  0,  8,  0,  0,  0,  0,  8,  6,  8,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,
         14,  0,  0, 16,  0,  0,  8,  0,  8,  0,  0,  0,  0,  8,  6,  8,  0,  0, 16,  0,  0, 10, 10,  0,  0,  0,  0,  2,  0,  0,  0, 18,
          9,  0,  0,  0,  0,  0,  7,  7,  7,  0,  0,  0,  0,  7,  7,  7,  0,  0,  0,  0,  7,  7,  7,  7,  0, 14,  0,  1,  0,  5,  0,  7,
          9, 17,  0,  0,  0,  2,  0,  0,  0,  0,  0,  5,  0,  0,  0,  0,  0,  1,  9, 17, 17, 19, 19,  0,  0,  1,  0,  0,  0,  0,  0,  1,
          9, 17, 17,  0, 18,  1,  3,  3,  3,  3,  3,  3,  3,  3,  3,  3,  3,  1,  9,  9, 17, 19, 19,  0, 18,  1,  3,  3,  3,  3,  3,  1,
          7,  7,  7,  7,  7,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,] */

//---------------------------------------- Kolize dvěří do levelů

let doorCol = false;
let helpNum;

const doorsCollision = () => {
    doorCol = false;
    for (let i = 0; i < platformLevel1.length; i++) {
        if (platformLevel1[i] >= 50 && platformLevel1[i] <= 64) {
            let platformX = (i % 32) * 32;
            let platformY = Math.floor(i / 32) * 32;
            if (
                y + height >= platformY &&
                y + height <= platformY + 64 &&
                x + width >= platformX + 24 &&
                x <= platformX + 40
            ) {
                doorCol = true;
                helpNum = platformLevel1[i] - 50;
                c.font = "20px VT323, monospace";
                c.fillStyle = "lime";
                c.fillText("Enter [e]", platformX - 3, platformY);
                if(deviceDetect && inGame){
                    button_enter.style.display = "flex";
                }
                break;
            }
        }
    } 
};

//---------------------------------------Enter Funkce

window.addEventListener('keydown', (event) => {
    if ((event.key == "e" || event.key == "E") && doorCol) {
        enterFunction();
    }
})

const enterFunction = () => {
    inGame = false;
    black.style.opacity = "1";
    if(helpNum >= 2){
        josh.style.display = "block";
    }
    setTimeout(() => {
        inGame = true;
        platformLevel1 = [...map[helpNum]];
        originalPlatform1 = [...platformLevel1];
        spawnCords();
        black.style.opacity = "0";
        gravity();
        menuMusic.play();
        if(helpNum == 0){
            xGhost = 800;
            yGhost = 120;
        }else if(helpNum == 1){
            xGhost = 400;
            yGhost = 240;
        }
        setTimeoutDoor = setTimeout(() => {
            doorTimeout = true;
        }, doorsTime);
            }, 1300);
}

//----------------------------------------Vykreslení platform a překážek

const platformImage = new Image();
platformImage.src = "./res/img/block.png";

const darknessImage = new Image();
darknessImage.src = "./res/img/darkness.png";

const spikeMoveImage = new Image();
spikeMoveImage.src = "./res/img/spike_move.png";

const lavaImage = new Image();
lavaImage.src = "./res/img/lava.png";

const orbImage = new Image();
orbImage.src = "./res/img/orb.png";

const crackedImage = new Image();
crackedImage.src = "./res/img/cracked.png";

const woodImage = new Image();
woodImage.src = "./res/img/wood.png";

const chainImage = new Image();
chainImage.src = "./res/img/chain.png";

const bookImage = new Image();
bookImage.src = "./res/img/bookshelf.png";

const doorImage = new Image();
doorImage.src = "./res/img/door.png";

const chainDoorImage = new Image();
chainDoorImage.src = "./res/img/chain_doors.png";

const portal1Image = new Image();
portal1Image.src = "./res/img/portal1.png";

const portal2Image = new Image();
portal2Image.src = "./res/img/portal2.png";

const blockBackImage = new Image();
blockBackImage.src = "./res/img/block_dark.png";

const lanternImage = new Image();
lanternImage.src = "./res/img/lantern.png";

const chainBackImage = new Image();
chainBackImage.src = "./res/img/chain_back.png";

const torchImage = new Image();
torchImage.src = "./res/img/torch.png"

const bookshelfBackImage = new Image();
bookshelfBackImage.src = "./res/img/bookshelf_back.png"

const barrelImage = new Image();
barrelImage.src = "./res/img/barrel.png"

const woodFlipImage = new Image();
woodFlipImage.src = "./res/img/wood_flip.png"

const ladderImage = new Image();
ladderImage.src = "./res/img/ladder.png"

const woodBackImage = new Image();
woodBackImage.src = "./res/img/wood_back.png"

const woodBackFlipImage = new Image();
woodBackFlipImage.src = "./res/img/wood_back_flip.png"

const doorsImage = new Image();
doorsImage.src = "./res/img/doors.png"

const frameWidth = 30;
const frameHeight = 40;

let sWidth = 30;
let sHeight = 40;
let sX = 30;
let sY = 40;

let cordsPortalX1 = 0;
let cordsPortalY1 = 0;
let cordsPortalX2 = 0;
let cordsPortalY2 = 0;

const drawPlatform = () => {
    xBlock = 0;
    yBlock = 0;
    for (let index = 0; index < platformLevel1.length; index++) {
        if(platformLevel1[index] == 1){
            p.drawImage(platformImage, xBlock,yBlock,32,32)
        }else if(platformLevel1[index] == 2){
            p.drawImage(spikeMoveImage, 4 * 32, 0 * 32, 32, 32, xBlock, yBlock, 32, 32);
        }else if(platformLevel1[index] == 3){
            p.drawImage(lavaImage, frameLava * 32, 0 * 32, 32, 32, xBlock, yBlock, 32, 32);
        }else if(platformLevel1[index] == 4){
            p.drawImage(spikeMoveImage, 4 * 32, 2 * 32, 32, 32, xBlock, yBlock, 32, 32);
        }else if(platformLevel1[index] == 5){
            p.drawImage(orbImage, frameOrb * 32, 0 * 32, 32, 32, xBlock, yBlock, 32, 32);
        }else if(platformLevel1[index] == 6){
            p.drawImage(crackedImage, xBlock, yBlock, 32, 32)
        }else if(platformLevel1[index] == 7){
            p.drawImage(woodImage, xBlock, yBlock, 32, 32)
        }else if(platformLevel1[index] == 8){
            p.drawImage(chainImage, xBlock, yBlock, 32, 32)
        }else if(platformLevel1[index] == 9){
            p.drawImage(bookImage, xBlock, yBlock, 32, 32)
        }else if(platformLevel1[index] == 10){
            p.drawImage(spikeMoveImage, frameSpike * 32, 0 * 32, 32, 32, xBlock, yBlock, 32, 32);
        }else if(platformLevel1[index] == 20){
            p.drawImage(spikeMoveImage, frameSpike * 32, 1 * 32, 32, 32, xBlock, yBlock, 32, 32);
        }else if(platformLevel1[index] == 21){
            p.drawImage(spikeMoveImage, frameSpike * 32, 2 * 32, 32, 32, xBlock, yBlock, 32, 32);
        }else if(platformLevel1[index] == 22){
            p.drawImage(spikeMoveImage, frameSpike * 32, 3 * 32, 32, 32, xBlock, yBlock, 32, 32);
        }else if(platformLevel1[index] == 23){
            p.drawImage(spikeMoveImage, 4 * 32, 1 * 32, 32, 32, xBlock, yBlock, 32, 32);
        }else if(platformLevel1[index] == 24){
            p.drawImage(spikeMoveImage, 4 * 32, 3 * 32, 32, 32, xBlock, yBlock, 32, 32);
        }else if(platformLevel1[index] == 11){
            cordsPortalX1 = xBlock - 32;
            cordsPortalY1 = yBlock + 32;
            p.drawImage(portal1Image, framePortal * 32, 0 * 32, 32, 64, xBlock, yBlock, 32, 64);
        }else if(platformLevel1[index] == 12){
            cordsPortalX2 = xBlock + 32;
            cordsPortalY2 = yBlock + 32;
            p.drawImage(portal2Image, framePortal * 32, 0 * 32, 32, 64, xBlock, yBlock, 32, 64);
        }else if(platformLevel1[index] == 18){
            p.drawImage(barrelImage, xBlock, yBlock, 32, 32)
        }else if(platformLevel1[index] == 19){
            p.drawImage(woodFlipImage, xBlock, yBlock, 32, 32)
        }
        if((index + 1) % 32 == 0){
            xBlock = 0;
            yBlock += 32;
        }else{
            xBlock += 32;
        }
    }
}

const drawBackBlocks = () => {
    xBlock = 0;
    yBlock = 0;
    for (let index = 0; index < platformLevel1.length; index++) {
        if(platformLevel1[index] == 13){
            p.drawImage(blockBackImage, xBlock, yBlock, 32, 32)
        }else if(platformLevel1[index] == 14){
            p.drawImage(lanternImage, frameLantern * 32, 0 * 32, 32, 32, xBlock, yBlock, 32, 32);
        }else if(platformLevel1[index] == 15){
            p.drawImage(chainBackImage, xBlock, yBlock, 32, 32)
        }else if(platformLevel1[index] == 16){
            p.drawImage(torchImage, frameTorch * 32, 0 * 32, 32, 32, xBlock, yBlock, 32, 32);
        }else if(platformLevel1[index] == 17){
            p.drawImage(bookshelfBackImage, xBlock, yBlock, 32, 32)
        }else if(platformLevel1[index] == 25){
            p.drawImage(doorImage, xBlock, yBlock, 64, 64);
        }else if(platformLevel1[index] == 26){
            p.drawImage(ladderImage, xBlock, yBlock, 32, 32);
        }else if(platformLevel1[index] == 27){
            p.drawImage(woodBackImage, xBlock, yBlock, 32, 32);
        }else if(platformLevel1[index] == 28){
            p.drawImage(woodBackFlipImage, xBlock, yBlock, 32, 32);
        }else if(platformLevel1[index] == 30){
            p.drawImage(chainDoorImage, frameDoor * 64, 0 * 32, 64, 64, xBlock, yBlock, 64, 64);
        }
        //Doors
        else if(platformLevel1[index] == 50){
            p.drawImage(doorsImage, 0 * 64, 0 * 32, 64, 64, xBlock, yBlock, 64, 64);
        }else if(platformLevel1[index] == 51){
            p.drawImage(doorsImage, 1 * 64, 0 * 32, 64, 64, xBlock, yBlock, 64, 64);
        }else if(platformLevel1[index] == 52){
            p.drawImage(doorsImage, 2 * 64, 0 * 32, 64, 64, xBlock, yBlock, 64, 64);
        }else if(platformLevel1[index] == 53){
            p.drawImage(doorsImage, 3 * 64, 0 * 32, 64, 64, xBlock, yBlock, 64, 64);
        }else if(platformLevel1[index] == 54){
            p.drawImage(doorsImage, 4 * 64, 0 * 32, 64, 64, xBlock, yBlock, 64, 64);
        }else if(platformLevel1[index] == 55){
            p.drawImage(doorsImage, 5 * 64, 0 * 32, 64, 64, xBlock, yBlock, 64, 64);
        }else if(platformLevel1[index] == 56){
            p.drawImage(doorsImage, 6 * 64, 0 * 32, 64, 64, xBlock, yBlock, 64, 64);
        }else if(platformLevel1[index] == 57){
            p.drawImage(doorsImage, 7 * 64, 0 * 32, 64, 64, xBlock, yBlock, 64, 64);
        }else if(platformLevel1[index] == 58){
            p.drawImage(doorsImage, 8 * 64, 0 * 32, 64, 64, xBlock, yBlock, 64, 64);
        }else if(platformLevel1[index] == 59){
            p.drawImage(doorsImage, 9 * 64, 0 * 32, 64, 64, xBlock, yBlock, 64, 64);
        }else if(platformLevel1[index] == 60){
            p.drawImage(doorsImage, 10 * 64, 0 * 32, 64, 64, xBlock, yBlock, 64, 64);
        }else if(platformLevel1[index] == 61){
            p.drawImage(doorsImage, 11 * 64, 0 * 32, 64, 64, xBlock, yBlock, 64, 64);
        }else if(platformLevel1[index] == 62){
            p.drawImage(doorsImage, 12 * 64, 0 * 32, 64, 64, xBlock, yBlock, 64, 64);
        }else if(platformLevel1[index] == 63){
            p.drawImage(doorsImage, 13 * 64, 0 * 32, 64, 64, xBlock, yBlock, 64, 64);
        }else if(platformLevel1[index] == 64){
            p.drawImage(doorsImage, 14 * 64, 0 * 32, 64, 64, xBlock, yBlock, 64, 64);
        }
        if((index + 1) % 32 == 0){
            xBlock = 0;
            yBlock += 32;
        }else{
            xBlock += 32;
        }
    }
}

//----------------------------------------Vykreslení Hráče a Ducha

let darkness = false;

const dark = () => {
    if(darkness == true){
        c.drawImage(darknessImage, x - 1487, y - 990, 3000, 2000);
    }
}

let playerImage = new Image();
playerImage.src = "./res/img/player.png";

let ghostImage = new Image();
ghostImage.src = "./res/img/ghost.png";

let canDieOnSpike = false;

let ghostVelocity = 2

let ghostFrame1 = 0;
let ghostFrame2 = 2;

const drawGhost = () => {
    ghostImage.src = "./res/img/ghost.png";
    if(ghostVelocity == 2){
        c.drawImage(ghostImage, ghostFrame1 * 30, 0 * 40, 30, 40, xGhost, yGhost, 30, 40);
    }else{
        c.drawImage(ghostImage, ghostFrame2 * 30, 0 * 40, 30, 40, xGhost, yGhost, 30, 40);
    }
    for (let i = 0; i < platformLevel1.length; i++) {
        if (platformLevel1[i] == 1 || platformLevel1[i] == 2 || platformLevel1[i] == 6 || platformLevel1[i] == 7 || platformLevel1[i] == 9 || platformLevel1[i] == 18 || platformLevel1[i] == 19) {
            let platformX = (i % 32) * 32;
            let platformY = Math.floor(i / 32) * 32;
            if (
                yGhost + height > platformY &&
                yGhost < platformY + 32 &&
                xGhost + width + ghostVelocity > platformX &&
                xGhost < platformX + 32
            ) {
                ghostVelocity = -2;
            }else if (platformLevel1[i] == 1 || platformLevel1[i] == 2 || platformLevel1[i] == 6 || platformLevel1[i] == 7 || platformLevel1[i] == 9 || platformLevel1[i] == 18|| platformLevel1[i] == 19) {
                let platformX = (i % 32) * 32;
                let platformY = Math.floor(i / 32) * 32;
                if (
                    yGhost + height > platformY &&
                    yGhost < platformY + 32 &&
                    xGhost + ghostVelocity < platformX + 32 &&
                    xGhost > platformX
                ) {
                    ghostVelocity = 2;
                }
            }
        }
    }
    cancelAnimationFrame(drawingId);
    drawing();
}


//Vykreslení hráče + Animace objektů + Ghost

let nowPlayer, nowLava, nowSpike, nowPortal, nowTorch, nowLantern, nowOrb, now24, now6, now8, now4, nowGhost, nowGhostS, nowDoor;
let deltaPlayer, deltaLava, deltaSpike, deltaPortal, deltaTorch, deltaLantern, deltaOrb, delta24, delta6, delta8, delta4, deltaGhost, deltaGhostS, deltaDoor;
let thenPlayer = Date.now();
let thenLava = Date.now();
let thenSpike = Date.now();
let thenPortal = Date.now();
let thenTorch = Date.now();
let thenLantern = Date.now();
let thenOrb = Date.now();
let then24 = Date.now();
let then6 = Date.now();
let then8 = Date.now();
let then4 = Date.now();
let thenGhost = Date.now();
let thenGhostS = Date.now();
let thenDoor = Date.now();

let drawingId;

let currentFrame = 0;
let currentFrameStand = 0;
let currentFrameRun = 0;
let currentFramePunch = 0;
let currentFrameCrouch = 0;

let frameLava = 0;
let frameSpike = 0;
let framePortal = 0;
let frameTorch = 0;
let frameLantern = 0;
let frameOrb = 0;
let frameDoor = 0;

const drawing = () => {
    drawingId = requestAnimationFrame(drawing);
    //Player
    nowPlayer = Date.now();
    deltaPlayer = nowPlayer - thenPlayer;
    if (deltaPlayer > 1) {
        thenPlayer = nowPlayer - (deltaPlayer % 1);
        drawPlayer();
    }
    //Lava
    nowLava = Date.now();
    deltaLava = nowLava - thenLava;
    if (deltaLava > 150) {
        thenLava = nowLava - (deltaLava % 150);
        frameLava++
        if(frameLava == 3){
            frameLava = 0;
        }
    }
    //Spike
    nowSpike = Date.now();
    deltaSpike = nowSpike - thenSpike;
    if (deltaSpike > 175) {
        thenSpike = nowSpike - (deltaSpike % 175);
        frameSpike++;
        if(frameSpike == 0 || frameSpike >= 10){
            canDieOnSpike = false;
        }else{
            canDieOnSpike = true;
        }
        if(frameSpike == 17){
            frameSpike = 0;
        }
    }
    //Portals
    nowPortal = Date.now();
    deltaPortal = nowPortal - thenPortal;
    if (deltaPortal > 200) {
        thenPortal = nowPortal - (deltaPortal % 200);
        framePortal++;
        if(framePortal == 2){
            framePortal = 0;
        }
    }
    //Torch
    nowTorch = Date.now();
    deltaTorch = nowTorch - thenTorch;
    if (deltaTorch > 200) {
        thenTorch = nowTorch - (deltaTorch % 200);
        frameTorch++;
        if(frameTorch == 5){
            frameTorch = 0;
        }
    }
    //Lantern
    nowLantern = Date.now();
    deltaLantern = nowLantern - thenLantern;
    if (deltaLantern > 200) {
        thenLantern = nowLantern - (deltaLantern % 200);
        frameLantern++;
        if(frameLantern == 4){
            frameLantern = 0;
        }
    }
    //Orb
    nowOrb = Date.now();
    deltaOrb = nowOrb - thenOrb;
    if (deltaOrb > 200) {
        thenOrb = nowOrb - (deltaOrb % 200);
        frameOrb++;
        if(frameOrb == 2){
            frameOrb = 0;
        }
    }
    //Chain Door
    if(doorTimeout == true){
        nowDoor = Date.now();
        deltaDoor = nowDoor - thenDoor;
        if (deltaDoor > 100) {
            thenDoor = nowDoor - (deltaDoor % 100);
            if(frameDoor != 3){
                frameDoor++;
            }else{
                dead();
            }
        }

    }
    //----Sprite sheet Player
    //Animate24 (Stand)
    now24 = Date.now();
    delta24 = now24 - then24;
    if (delta24 > 100) {
        then24 = now24 - (delta24 % 100);
        currentFrameStand++
        if(currentFrameStand % 24 == 0){
            currentFrameStand = 0;
        }
    }
    //Animate6 (Punch)
    now6 = Date.now();
    delta6 = now6 - then6;
    if (delta6 > 100) {
        then6 = now6 - (delta6 % 100);
        if(punched){
            currentFramePunch++;
            if(currentFramePunch % 6 == 0){
                currentFramePunch = 0;
                punchCooldown = false;
                punched = false;
            }
        }
    }
    //Animate8 (Run)
    now8 = Date.now();
    delta8 = now8 - then8;
    if (delta8 > 80) {
        then8 = now8 - (delta8 % 80);
        currentFrameRun++
        if(currentFrameRun % 8 == 0){
            currentFrameRun = 0;
        }
    }
    //Animate4 (Crouch & Climb)
    now4 = Date.now();
    delta4 = now4 - then4;
    if (delta4 > 100) {
        then4 = now4 - (delta4 % 100);
        if(ladderCol == true && velocityGoingDown <= 0.1 && velocityGoingUp <= 0.1 && velocityRight <= 0.1 && velocityLeft <= 0.1){
            currentFrameCrouch = 0
        }else{
            currentFrameCrouch++;
            if(currentFrameCrouch % 4 == 0){
                currentFrameCrouch = 0;
            }
        }
    }
    //---Ghost
    //Ghost Velocity
    nowGhost = Date.now();
    deltaGhost = nowGhost - thenGhost;
    if (deltaGhost > 25) {
        thenGhost = nowGhost - (deltaGhost % 25);
        xGhost += ghostVelocity;
    }
    //Ghost Sprite sheet
    nowGhostS = Date.now();
    deltaGhostS = nowGhostS - thenGhostS;
    if (deltaGhostS > 200) {
        thenGhostS = nowGhostS - (deltaGhostS % 200);
        if (ghostVelocity == 2) {
            ghostFrame1++;
            if(ghostFrame1 == 2){
                ghostFrame1 = 0;
            }
        }else{
            ghostFrame2++;
            if(ghostFrame2 == 4){
                ghostFrame2 = 2;
            }
        }
    }
}

drawing();

let animateTick = 0;
let animateTickStand = 0;
let animateTickPunch = 0;
let animateTickCrouch = 0;

let drawPlayer = () => {
    button_enter.style.display = "none";
    playerImage.src = "./res/img/player.png";
    if(velocity == 0 && velocityJump == 0 && !isMovingRight && !isMovingLeft && turnedRight && !punched && !crouched && !ladderCol){ //Right Stand
        c.clearRect(0, 0, canvas.width, canvas.height);
        drawBackBlocks();
        c.drawImage(playerImage, currentFrameStand * sX, 0 * sY, sWidth, sHeight, x, y, frameWidth, frameHeight)
        cancelAnimationFrame(drawingId);
        drawing();
    }else if(velocity == 0 && velocityJump == 0 && !isMovingRight && !isMovingLeft && turnedLeft && !punched && !crouched && !ladderCol){ //Left Stand
        c.clearRect(0, 0, canvas.width, canvas.height);
        drawBackBlocks();
        c.drawImage(playerImage, currentFrameStand * sX, 1 * sY, sWidth, sHeight, x, y, frameWidth, frameHeight);
        cancelAnimationFrame(drawingId);
        drawing();
    }else if(velocity > 0 && turnedRight && !punched && !crouched && !ladderCol){ //Right Fall
        c.clearRect(0, 0, canvas.width, canvas.height);
        drawBackBlocks();
        c.drawImage(playerImage, 0 * sX, 0 * sY, sWidth, sHeight, x, y, frameWidth, frameHeight);
        cancelAnimationFrame(drawingId);
    }else if(velocity > 0 && turnedLeft && !punched && !crouched && !ladderCol){ //Left Fall
        c.clearRect(0, 0, canvas.width, canvas.height);
        drawBackBlocks();
        c.drawImage(playerImage, 0 * sX, 1 * sY, sWidth, sHeight, x, y, frameWidth, frameHeight);
        cancelAnimationFrame(drawingId);
    }else if(velocityJump > 0 && turnedRight && !punched && !crouched && !ladderCol){ //Right Jump
        c.clearRect(0, 0, canvas.width, canvas.height);
        drawBackBlocks();
        c.drawImage(playerImage, 0 * sX, 4 * sY, sWidth, sHeight, x, y, frameWidth, frameHeight);
        cancelAnimationFrame(drawingId);
    }else if(velocityJump > 0 && turnedLeft && !punched && !crouched && !ladderCol){ //Left Jump
        c.clearRect(0, 0, canvas.width, canvas.height);
        drawBackBlocks();
        c.drawImage(playerImage, 0 * sX, 5 * sY, sWidth, sHeight, x, y, frameWidth, frameHeight);
        cancelAnimationFrame(drawingId);
    }else if(velocity == 0 && velocityJump == 0 && isMovingRight && !punched && !crouched && !ladderCol){ //Right Run
        c.clearRect(0, 0, canvas.width, canvas.height);
        drawBackBlocks();
        c.drawImage(playerImage, currentFrameRun * sX, 2 * sY, sWidth, sHeight, x, y, frameWidth, frameHeight);
        cancelAnimationFrame(drawingId);
        drawing();
    }else if(velocity == 0 && velocityJump == 0 && isMovingLeft && !punched && !crouched && !ladderCol){ //Left Run
        c.clearRect(0, 0, canvas.width, canvas.height);
        drawBackBlocks();
        c.drawImage(playerImage, currentFrameRun * sX, 3 * sY, sWidth, sHeight, x, y, frameWidth, frameHeight);
        cancelAnimationFrame(drawingId);
        drawing();
    }else if(punched && turnedRight && !ladderCol){ //Right Punch
        c.clearRect(0, 0, canvas.width, canvas.height);
        drawBackBlocks();
        c.drawImage(playerImage, currentFramePunch * sX, 8 * sY, sWidth, sHeight, x, y, frameWidth, frameHeight);
        cancelAnimationFrame(drawingId);
        drawing();
    }else if(punched && turnedLeft && !ladderCol){ //Left Punch
        c.clearRect(0, 0, canvas.width, canvas.height);
        drawBackBlocks();
        c.drawImage(playerImage, currentFramePunch * sX, 9 * sY, sWidth, sHeight, x, y, frameWidth, frameHeight);
        cancelAnimationFrame(drawingId);
        drawing();
    }else if(crouched && !isMovingRight && !isMovingLeft && turnedRight && !punched){ //Crouched Right
        c.clearRect(0, 0, canvas.width, canvas.height);
        drawBackBlocks();
        c.drawImage(playerImage, 0 * sX, 6 * sY, sWidth, sHeight, x, y - height, frameWidth, frameHeight);
        cancelAnimationFrame(drawingId);
    }else if(crouched && !isMovingRight && !isMovingLeft && turnedLeft && !punched){ //Crouched Left
        c.clearRect(0, 0, canvas.width, canvas.height);
        drawBackBlocks();
        c.drawImage(playerImage, 0 * sX, 7 * sY, sWidth, sHeight, x, y - height, frameWidth, frameHeight);
        cancelAnimationFrame(drawingId);
    }else if(crouched && isMovingRight && !isMovingLeft && !punched){ //Crouched Right Moving
        c.clearRect(0, 0, canvas.width, canvas.height);
        drawBackBlocks();
        c.drawImage(playerImage, currentFrameCrouch * sX, 6 * sY, sWidth, sHeight, x, y - height, frameWidth, frameHeight);
        cancelAnimationFrame(drawingId);
        drawing();
    }else if(crouched && isMovingLeft && !isMovingRight && !punched){ //Crouched Left Moving
        c.clearRect(0, 0, canvas.width, canvas.height);
        drawBackBlocks();
        c.drawImage(playerImage, currentFrameCrouch * sX, 7 * sY, sWidth, sHeight, x, y - height, frameWidth, frameHeight);
        cancelAnimationFrame(drawingId);
        drawing();
    }else if (ladderCol && !crouched && !punched){ //Climbing
        c.clearRect(0, 0, canvas.width, canvas.height);
        drawBackBlocks();
        c.drawImage(playerImage, currentFrameCrouch * sX, 10 * sY, sWidth, sHeight, x, y, frameWidth, frameHeight);
        cancelAnimationFrame(drawingId);
        drawing();
    }
    drawGhost();
    drawPlatform();
    objectsCollision();
    orbCollision();
    ladderCollision();
    doorsCollision();
    dark();
};
//----------------------------------------SHAKE funkce


const shake = () => {
    setTimeout(() => {
        canvas.style.top = "50.5%";canvas.style.left = "50.5%";
    }, 50);
    setTimeout(() => {
        canvas.style.top = "49.5%";canvas.style.left = "50%";
    }, 100);
    setTimeout(() => {
        canvas.style.top = "50%";canvas.style.left = "50.5%";
    }, 150);
    setTimeout(() => {
        canvas.style.top = "50.5%";canvas.style.left = "49.5%";
    }, 200);
    setTimeout(() => {
        canvas.style.top = "50%";canvas.style.left = "50%";
    }, 250);
}

//----------------------------------------Death funkce

const dead = () => {
    clearTimeout(setTimeoutDoor)
    setTimeoutDoor = setTimeout(() => {
        doorTimeout = true;
    }, doorsTime);
    spawnCords();
    unCrouch();
    platformLevel1 = [...originalPlatform1];
    drawPlatform();
    dark();
    frameSpike = 0;
    frameLava = 0;
    menuMusic.currentTime = 0;
    if(frameDoor == 3){
        shake();
        doorTimeout = false;
        frameDoor = 0;
    }
}

//----------------------------------------ESC Buttons

let backToLobbyEntered = false;

const backToLobby = () => {
    clearTimeout(setTimeoutDoor)
    inGame = false;
    black.style.opacity = "1";
    esc.style.display = "none"; 
    escShowed = false;
    setTimeout(() => {
        inGame = true;
        platformLevel1 = [...lobby];
        black.style.opacity = "0";
        xGhost = 10000;
        yGhost = 10000;
        x = 40;
        y = 500;
        backToLobbyEntered = false;
        gravity();
    }, 1300);
}

button_back.onclick = () => {
    backToLobby();
}
button_resume.onclick = () => {
    esc.style.display = "none"; 
    escShowed = false;
    black.style.opacity = "0";
}
button_menu.onclick = () => {
    inGame = false;
    black.style.opacity = "1";
    esc.style.display = "none"; 
    escShowed = false;
    setTimeout(() => {
        game.style.display = "none";
        startMenu.style.display = "block";
        black.style.opacity = "0";
    }, 1300);
}

//----------------------------------------ESC Button Funkce

const escFunction = () => {
    if(JSON.stringify(lobby) !== JSON.stringify(platformLevel1)){
        button_back.style.display = "block";
        button_resume.style.display = "block";
        button_retry.style.display = "block";
        button_menu.style.display = "none";
        if(!escShowed){
            esc.style.display = "flex"; 
            escShowed = true;
            black.style.opacity = "0.6";
        }else if(escShowed){
            esc.style.display = "none"; 
            escShowed = false;
            black.style.opacity = "0";
        }
    }else if(JSON.stringify(lobby) === JSON.stringify(platformLevel1)){
        button_back.style.display = "none";
        button_resume.style.display = "block";
        button_retry.style.display = "none";
        button_menu.style.display = "block";
        if(!escShowed){
            esc.style.display = "flex"; 
            escShowed = true;
            black.style.opacity = "0.6";
        }else if(escShowed){
            esc.style.display = "none"; 
            escShowed = false;
            black.style.opacity = "0";
        }
    }
}

escape_button.onclick = () => {
    escFunction();
}

//----------------------------------------Kolize OBJEKTŮ

const objectsCollision = () => {
    ghostCollision();
    for (let i = 0; i < platformLevel1.length; i++) {
        if (platformLevel1[i] == 2) {
            let platformX = (i % 32) * 32;
            let platformY = Math.floor(i / 32) * 32;
            if (
                y + height >= platformY + 10 &&
                y + height <= platformY + 32 &&
                x + width >= platformX + 10 &&
                x <= platformX + 22
            ) {
                dead();
            }
        }
        if ((platformLevel1[i] == 2 || platformLevel1[i] == 4 || platformLevel1[i] == 23 || platformLevel1[i] == 24) || (platformLevel1[i] == 10 || platformLevel1[i] == 20 || platformLevel1[i] == 21 || platformLevel1[i] == 22) && canDieOnSpike == true) {
            let platformX = (i % 32) * 32;
            let platformY = Math.floor(i / 32) * 32;
            if (
                y + height >= platformY + 10 &&
                y + height <= platformY + 27 + height &&
                x + width >= platformX + 10 &&
                x <= platformX + 22
            ) {
                dead();
            }
        }
        if (platformLevel1[i] == 3) {
            let platformX = (i % 32) * 32;
            let platformY = Math.floor(i / 32) * 32;
            if (
                y + height >= platformY + 10 &&
                y + height <= platformY + 32 &&
                x + width >= platformX + 10 &&
                x <= platformX + 22
            ) {
                dead();
            }
        }
        
        if (platformLevel1[i] == 11) {
            let platformX = (i % 32) * 32;
            let platformY = Math.floor(i / 32) * 32;
            if (
                y + height >= platformY + 10 &&
                y + height <= platformY + 64 + height &&
                x + width >= platformX + 10 &&
                x <= platformX + 22
            ) {
                x = cordsPortalX2;
                y = cordsPortalY2;
            }
        }
        if (platformLevel1[i] == 12) {
            let platformX = (i % 32) * 32;
            let platformY = Math.floor(i / 32) * 32;
            if (
                y + height >= platformY + 10 &&
                y + height <= platformY + 64 + height &&
                x + width >= platformX + 10 &&
                x <= platformX + 22
            ) {
                x = cordsPortalX1;
                y = cordsPortalY1;
            }
        }

        if (platformLevel1[i] == 30) {
            let platformX = (i % 32) * 32;
            let platformY = Math.floor(i / 32) * 32;
            if (
                y + height > platformY &&
                y < platformY + 32 &&
                x + width + velocityRight > platformX &&
                x < platformX + 32
            ) {
                clearTimeout(setTimeoutDoor);
                menuMusic.pause();
                if(!backToLobbyEntered){
                    backToLobby();
                    backToLobbyEntered = true;
                }
            }
        }
    }
}

//----------------------------------------Kolize ORBŮ
let canOrbJump = false;
let orbUsed = false;

const orbCollision = () => {
    for (let i = 0; i < platformLevel1.length; i++) {
        if (platformLevel1[i] == 5) {
            let platformX = (i % 32) * 32;
            let platformY = Math.floor(i / 32) * 32;
            if (
                y + height >= platformY &&
                y + height <= platformY + 32 + height &&
                x + width >= platformX &&
                x <= platformX + 32
            ) {
                canOrbJump = true;
                break;
            } else {
                canOrbJump = false; 
            }
        }
    }
}

//----------------------------------------Ghost Kolize

const ghostCollision = () => {
    if(
        y + height > yGhost &&
        y < yGhost + 32 &&
        x + width > xGhost + 10 &&
        x < xGhost + 20
    ){
        dead();
    }
}

//----------------------------------------Skrčení/Postavení hráče

let crouched = false;
let canStandUp = true;
let ahCollision;
let underCollision;

let aboveHeadCollision = () => {
    ahCollision = requestAnimationFrame(aboveHeadCollision);
    if (crouched == true) {
        for (let i = 0; i < platformLevel1.length; i++) {
            if (platformLevel1[i] == 1 || platformLevel1[i] == 6 || platformLevel1[i] == 7 || platformLevel1[i] == 9 || platformLevel1[i] == 18 || platformLevel1[i] == 19) {
                let platformX = (i % 32) * 32;
                let platformY = Math.floor(i / 32) * 32;
                if (
                    y + height >= platformY + 64 &&
                    y + height <= platformY + 64 &&
                    x + width >= platformX &&
                    x <= platformX + 32
                ) {
                    canStandUp = false;
                    break;
                }else{
                    canStandUp = true;
                }
            }
        }
    }
};

let crouch = () => {
    crouched = true;
    height = 20;
    y += 20;
    gravity();
    aboveHeadCollision()
}

let unCrouch = () => {
    if (canStandUp == true) {
        height = 40;
        y -= 20;
        crouched = false;
        gravity();
        drawPlayer();
        cancelAnimationFrame(ahCollision);
    }
    canStandUp = true;
};

let wasUnder = true;

let under = () => {
    underCollision = window.requestAnimationFrame(under);
    if(canStandUp == true){
        unCrouch();
        wasUnder = true;
        cancelAnimationFrame(underCollision);
    }
}

//----------------------------------------Kolize SPODKU CANVASU a BLOCKŮ

const bottomCollision = () => {
    for (let i = 0; i < platformLevel1.length; i++) {
        if (platformLevel1[i] == 1 || platformLevel1[i] == 6 || platformLevel1[i] == 7 || platformLevel1[i] == 9 || platformLevel1[i] == 18 || platformLevel1[i] == 19) {
            let platformX = (i % 32) * 32;
            let platformY = Math.floor(i / 32) * 32;
            if (
                y + height >= platformY &&
                y + height <= platformY + 32 &&
                x + width >= platformX &&
                x <= platformX + 32
            ) {
                stillJumping = false;
                y = platformY - height;
                velocity = 0;
                velocityGoingDown = 0;
                orbUsed = false;
                cancelAnimationFrame(gravityId);
                cancelAnimationFrame(goingDownId);
                break;
            }
        }
    }
    if (canvas.height - height < y) {
        y = canvas.height - height;
        velocity = 0;
        velocityGoingDown = 0;
        orbUsed = false;
        stillJumping = false;
        cancelAnimationFrame(goingDownId);
        cancelAnimationFrame(gravityId);
    }
}

//----------------------------------------Kolize VRŠKU CANVASU a BLOCKŮ

const upCollision = () => {
    if (deltaUp > interval) {
        thenUp = nowUp - (deltaUp % interval);
        velocityJump = velocityJump/1.22
        y -= velocityJump;
        for (let i = 0; i < platformLevel1.length; i++) {
            if (platformLevel1[i] == 1 || platformLevel1[i] == 6 || platformLevel1[i] == 7 || platformLevel1[i] == 9 || platformLevel1[i] == 18 || platformLevel1[i] == 19) {
                let platformX = (i % 32) * 32;
                let platformY = Math.floor(i / 32) * 32 + 40;
                if (
                    y + height >= platformY &&
                    y + height <= platformY + 32 &&
                    x + width >= platformX &&
                    x <= platformX + 32
                ) {
                    if(ladderCol == true){
                        y = platformY - 42 - velocityGoingUp + height;
                    }else{
                        y = platformY - 39 - velocityJump + height;
                    }
                    stillJumping == false;
                    headHit = true;
                    velocityJump = 0;
                    velocity = 0;
                    velocityGoingUp = 0;
                    cancelAnimationFrame(goingUpId);
                    cancelAnimationFrame(jumpingId);
                    cancelAnimationFrame(gravityId);
                    gravity();
                    break;
                }
            }
        }
        if(velocityJump <= 0.35 && headHit == false){
            headHit = true;
            velocityJump = 0;
            velocityGoingUp = 0;
            velocity = 0;
            cancelAnimationFrame(goingUpId);
            cancelAnimationFrame(jumpingId);
            cancelAnimationFrame(gravityId);
            gravity();
        }
    }
}

//----------------------------------------Kolize LADDERU

let ladderCol = false;
let canGravityActivate = false;

const ladderCollision = () => {
    for (let i = 0; i < platformLevel1.length; i++) {
        if (platformLevel1[i] == 26) {
            let platformX = (i % 32) * 32;
            let platformY = Math.floor(i / 32) * 32;
            if (
                y + height >= platformY + 22 &&
                y + height <= platformY + 54 &&
                x + width >= platformX + 10 &&
                x <= platformX + 22
            ) {
                if(crouched){
                    unCrouch();
                }
                ladderCol = true;
                cancelAnimationFrame(gravityId)
                canGravityActivate = true;
                break;
            } else {
                width = 30;
                ladderCol = false;
            }
        }
    }
    if(ladderCol == false) {
        cancelAnimationFrame(goingUpId);
        cancelAnimationFrame(goingDownId);
        if(canGravityActivate == true){
            velocity = 0;
            gravity();
            canGravityActivate = false
        }
    }
}

//----------------------------------------Lezení po žebříku nahoru

let goingUpId;
let nowGoingdUp;
let thenGoingdUp = Date.now();
let deltaGoingdUp;

let velocityGoingUp = 0;

const goingUp = () => {
    velocityGoingUp = 2;
    goingUpId = requestAnimationFrame(goingUp);
    nowGoingdUp = Date.now();
    deltaGoingdUp = nowGoingdUp - thenGoingdUp;
    if (deltaGoingdUp > interval) {
        thenGoingdUp = nowGoingdUp - (deltaGoingdUp % interval);
        y -= velocityGoingUp;
        upCollision();
    }
}

//----------------------------------------Lezení po žebříku dolu

let goingDownId;
let nowGoingdDown;
let thenGoingdDown = Date.now();
let deltaGoingdDown;

let velocityGoingDown = 0;

let alreadyGoingDown = false;

const goingDown = () => {
    alreadyGoingDown = true;
    velocityGoingDown = 2
    goingDownId = requestAnimationFrame(goingDown);
    nowGoingdDown = Date.now();
    deltaGoingdDown = nowGoingdDown - thenGoingdDown;
    if (deltaGoingdDown > interval) {
        thenGoingdDown = nowGoingdDown - (deltaGoingdDown % interval);
        y += velocityGoingDown;
        bottomCollision();
    }
}

//----------------------------------------Funkce GRAVITACE hráče

let velocity = 0;
let stillJumping = false;
let nowDown;
let thenDown = Date.now();
let deltaDown;

let gravity = () => {
    gravityId = requestAnimationFrame(gravity);
    nowDown = Date.now();
    deltaDown = nowDown - thenDown;
    if (deltaDown > interval) {
        thenDown = nowDown - (deltaDown % interval);
        if(crouched == true && velocity > 1){
            unCrouch();
        }
        orbCollision();
        //drawPlayer();
        velocity += 0.3;
        y += velocity;
        bottomCollision(); //Podmínka
    }
    
}

gravity();

//----------------------------------------Funkce SKÁKÁNÍ hráče

let headHit;

let nowUp;
let thenUp = Date.now();
let deltaUp;

let jump = () => {
    if((stillJumping == false || canOrbJump == true && orbUsed == false) && ladderCol == false){
        if(crouched == true){
            unCrouch();
        }
        if(canOrbJump == true && velocity >= 0){
            cancelAnimationFrame(gravityId);
            cancelAnimationFrame(jumpingId);
            velocityJump = 0;
            orbUsed = true;
        }
        headHit = false;
        velocityJump = 16;
        stillJumping = true;
        const jumping = () => {
            jumpingId = requestAnimationFrame(jumping);
            nowUp = Date.now();
            deltaUp = nowUp - thenUp;
            if (deltaUp > interval) {
                thenUp = nowUp - (deltaUp % interval);
                upCollision(); //Podmínka
            }
        }
        velocity = 0;
        jumping();
    }
}
//----------------------------------------Funkce hráče CHOZENÍ DO PRAVA

let velocityRight = 0.1;
let nowRight;
let thenRight = Date.now();
let deltaRight;

let moveRight = () => {
    velocityRight = 0.2;
    const movingRight = () => {
        animationIdRight = requestAnimationFrame(movingRight);
        nowRight = Date.now();
        deltaRight = nowRight - thenRight;
        if (deltaRight > interval) {
            thenRight = nowRight - (deltaRight % interval);
            if(crouched == true && velocityRight >= 1){
                velocityRight -= 0.12;
                if(crouched == true){
                    gravity();
                }
            }else{
                if(isMovingRight == true){
                    if(velocityRight <= 4 && crouched == false){
                        velocityRight += 0.12;
                    }else if(velocityRight <= 1 && crouched == true){
                        velocityRight += 0.12;
                        gravity();
                    }
                }else if(isMovingRight == false){
                    velocityRight -= 0.2;
                    if(velocityRight <= 0.1){
                        cancelAnimationFrame(animationIdRight);
                    }
                }
            }
            for (let i = 0; i < platformLevel1.length; i++) {
                if (platformLevel1[i] == 1 || platformLevel1[i] == 6 || platformLevel1[i] == 7 || platformLevel1[i] == 9 || platformLevel1[i] == 18 || platformLevel1[i] == 19) {
                    let platformX = (i % 32) * 32;
                    let platformY = Math.floor(i / 32) * 32;
                    if (
                        y + height > platformY &&
                        y < platformY + 32 &&
                        x + width + velocityRight > platformX &&
                        x < platformX + 32
                    ) {
                        velocityRight = 0;
                        break;
                    }
                }
            }
            x += velocityRight;
            if (x >= canvas.width - width) {
                x = canvas.width - width;
                velocityRight = 0;
                cancelAnimationFrame(animationIdRight);
            }
            if(stillJumping == false && !crouched){
                stillJumping = true;
                cancelAnimationFrame(gravityId);
                gravity();
            }
        }
    };
    movingRight();
};


//----------------------------------------Funkce hráče CHOZENÍ DO LEVA

let velocityLeft = 0.1;
let nowLeft;
let thenLeft = Date.now();
let deltaLeft;

let moveLeft = () => {
    //drawPlayer();
    velocityLeft = 0.2;
    const movingLeft = () => {
        animationIdLeft = requestAnimationFrame(movingLeft);
        nowLeft = Date.now();
        deltaLeft = nowLeft - thenLeft;
        if (deltaLeft > interval) {
            thenLeft = nowLeft - (deltaLeft % interval);
            if(crouched == true && velocityLeft >= 1){
                velocityLeft -= 0.12;
                if(crouched == true){
                    gravity();
                }
            }else{
                if(isMovingLeft == true){
                    if(velocityLeft <= 4 && crouched == false){
                        velocityLeft += 0.12;
                    }else if(velocityLeft <= 1 && crouched == true){
                        velocityLeft += 0.12;
                        gravity();
                    }
                }else if(isMovingLeft == false){
                    velocityLeft -= 0.2;
                    if(velocityLeft <= 0.1){
                        cancelAnimationFrame(animationIdLeft);
                    }
                }
            }
            for (let i = 0; i < platformLevel1.length; i++) {
                if (platformLevel1[i] == 1 || platformLevel1[i] == 6 || platformLevel1[i] == 7 || platformLevel1[i] == 9 || platformLevel1[i] == 18 || platformLevel1[i] == 19) {
                    let platformX = (i % 32) * 32;
                    let platformY = Math.floor(i / 32) * 32;
                    if (
                        y + height > platformY &&
                        y < platformY + 32 &&
                        x - velocityLeft < platformX + 32 &&
                        x > platformX
                    ) {
                        velocityLeft = 0;
                        break;
                    }
                }
            }
            x -= velocityLeft;
            if (x <= 0) {
                x = 0;
                velocityLeft = 0;
                cancelAnimationFrame(animationIdLeft);
            }
            if(stillJumping == false && !crouched){
                stillJumping = true;
                cancelAnimationFrame(gravityId);
                gravity();
            }
        }
    };
    movingLeft();
};

//--------------------------PUNCH funkce

let punched = false;
let alreadyPunched = false;
let punchCooldown = false;

const punch = () => {
    if(!crouched && !punchCooldown){
        punchCooldown = true;
        punched = true;
        for (let i = 0; i < platformLevel1.length; i++) {
            if (platformLevel1[i] == 6) {
                let platformX = (i % 32) * 32;
                let platformY = Math.floor(i / 32) * 32;
                if (
                    y + height > platformY&&
                    y < platformY + 32 && 
                    x + width > platformX - 10 &&
                    x < platformX && turnedRight
                ) {
                    platformLevel1[i] = 0;
                } else if (
                    y + height > platformY &&
                    y < platformY + 32 &&
                    x < platformX + 42 &&
                    x > platformX + 32 && turnedLeft
                ) {
                    platformLevel1[i] = 0;
                }
            }
        }
    }
}

//--------------------------Stlačení kláves
let up = "w";
let down = "s";
let right = "d";
let left = "a";

let UP = "W";
let DOWN = "S";
let RIGHT = "D";
let LEFT = "A";

let space = " ";

let escShowed = false;
let inGame = false;

let downPressed = false;

window.addEventListener('keydown', (event) => {
    if ((event.key == up || event.key == UP) && isJumping == false && canStandUp == true) {
        currentFrame = 0;
        isJumping = true;
        if(ladderCol == true){
            goingUp();
        }else{
            jump();
        }
    } else if ((event.key == right || event.key == RIGHT) && isMovingRight == false) {
        currentFrame = 0;
        isMovingRight = true;
        turnedRight = true;
        turnedLeft = false;
        cancelAnimationFrame(animationIdRight);
        moveRight();
    } else if ((event.key == left || event.key == LEFT) && isMovingLeft == false) {
        currentFrame = 0;
        isMovingLeft = true;
        turnedRight = false;
        turnedLeft = true;
        cancelAnimationFrame(animationIdLeft);
        moveLeft();
    } else if ((event.key == down || event.key == DOWN) && !punched) {
        if(crouched == false && stillJumping == false && downPressed == false && ladderCol == false){
            crouch();
            currentFrame = 0;            
        } else if (ladderCol && !alreadyGoingDown){
            goingDown();
        }
        downPressed = true;
    } else if (event.key == space) {
        if(!alreadyPunched && !ladderCol){
            punch();
        }
        alreadyPunched = true;
    } else if (event.key == "Escape" && inGame) {
        escFunction();
    }
});

//--------------------------Pouštění kláves

window.addEventListener('keyup', (event) => {
    if (event.key == up || event.key == UP) {
        isJumping = false;
        if(ladderCol){
            cancelAnimationFrame(goingUpId);
            velocityGoingUp = 0;
        }
    }
    if (event.key == right || event.key == RIGHT) {
        isMovingRight = false;
    }
    if (event.key == left || event.key == LEFT) {
        isMovingLeft = false;
    }
    if (event.key == down ||event.key == DOWN) {
        downPressed = false;
        if(velocity <= 0.35 && crouched == true && canStandUp == true && ladderCol == false){
            unCrouch();
        }else if(canStandUp == false){
            if(wasUnder == true){
                wasUnder = false;
                under();
            }
        }
        if(ladderCol){
            velocityGoingDown = 0;
            cancelAnimationFrame(goingDownId);
            alreadyGoingDown = false;
        }
    }
    if (event.key == space) {
        alreadyPunched = false;
    }
});

const go_up = () => {
    if (isJumping == false && canStandUp == true) {
        currentFrame = 0;
        isJumping = true;
        if(ladderCol == true){
            goingUp();
        }else{
            jump();
        }
    }
}

const go_punch = () => {
    if(!alreadyPunched && !ladderCol){
        punch();
    }
    alreadyPunched = true;
}

const go_down = () => {
    if (!punched) {
        if(crouched == false && stillJumping == false && downPressed == false && ladderCol == false){
            crouch();
            currentFrame = 0;            
        } else if (ladderCol && !alreadyGoingDown){
            goingDown();
        }
        downPressed = true;
    }
}

const go_down_return = () => {
    downPressed = false;
    if(velocity <= 0.35 && crouched == true && canStandUp == true && ladderCol == false){
        unCrouch();
    }else if(canStandUp == false){
        if(wasUnder == true){
            wasUnder = false;
            under();
        }
    }
    if(ladderCol){
        velocityGoingDown = 0;
        cancelAnimationFrame(goingDownId);
        alreadyGoingDown = false;
    }
}

const go_right = () => {
    if (isMovingRight == false) {
        currentFrame = 0;
        isMovingRight = true;
        turnedRight = true;
        turnedLeft = false;
        cancelAnimationFrame(animationIdRight);
        moveRight();
    }
}

const go_left = () => {
    if (isMovingLeft == false) {
        currentFrame = 0;
        isMovingLeft = true;
        turnedRight = false;
        turnedLeft = true;
        cancelAnimationFrame(animationIdLeft);
        moveLeft();
    }
}