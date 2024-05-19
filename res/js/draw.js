//--------------DRAW-----------------

const platformImage = new Image();
platformImage.src = "./res/img/block.png";

const spikeMoveImage = new Image();
spikeMoveImage.src = "./res/img/spike_move.png";

const lavaImage = new Image();
lavaImage.src = "./res/img/lava.png";

const orbImage = new Image();
orbImage.src = "./res/img/orb.png";

const jumpPadImage = new Image();
jumpPadImage.src = "./res/img/jump_pad.png";

const crackedImage = new Image();
crackedImage.src = "./res/img/cracked.png";

const woodsImage = new Image();
woodsImage.src = "./res/img/woods.png";

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

const ladderImage = new Image();
ladderImage.src = "./res/img/ladder.png"

const doorsImage = new Image();
doorsImage.src = "./res/img/doors.png"

const bossImage = new Image();
bossImage.src = "./res/img/boss_s.png"

const keyImage = new Image();
keyImage.src = "./res/img/key.png"

const ironImage = new Image();
ironImage.src = "./res/img/iron.png"

const ironKeyImage = new Image();
ironKeyImage.src = "./res/img/iron_key.png"

const trophyImage = new Image();
trophyImage.src = "./res/img/trophy.png"

const honeyImage = new Image();
honeyImage.src = "./res/img/honey_wood.png"

const ironBlockImage = new Image();
ironBlockImage.src = "./res/img/block_iron.png"

const copperBlockImage = new Image();
copperBlockImage.src = "./res/img/copper_block.png"

const brickBlockImage = new Image();
brickBlockImage.src = "./res/img/brick_block.png"

const ironSticksImage = new Image();
ironSticksImage.src = "./res/img/iron_sticks.png"

const ropeImage = new Image();
ropeImage.src = "./res/img/rope.png"

const smallCircleImage = new Image();
smallCircleImage.src = "./res/img/small_circle.png"

const bigCircleImage = new Image();
bigCircleImage.src = "./res/img/big_circle.png"

const frameWidth = 30;
const frameHeight = 40;

let sWidth = 30;
let sHeight = 40;
let sX = 30;
let sY = 40;

let cordsPortalX1 = 0;
let cordsPortalY1 = 0;
let cordsPortalX2 = 0;
let cordsPortalY2 = 0

//----------------------------------- Blocks

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
// 29 = Jump Pad
// 30 = Doors (Finish)
// 31 = Key
// 32 = Iron Block
// 33 = Iron Block with Key hole
// 34 = Doors - Boss (Finish)
// 35 = Trophy
// 36 = Honey Left
// 37 = Honey Right
// 50 - 64 = Doors in the Lobby (Level 1 - 15)

//-----------------------------Drawing Platform

const drawPlatform = () => {
    xBlock = 0;
    yBlock = 0;
    for (let index = 0; index < platformLevel1.length; index++) {
//-----------------------------------------------------------
// CASTLE DUNGEON
//-----------------------------------------------------------
        if(!playingSteamPunk){
            if(platformLevel1[index] == 1){
                c.drawImage(platformImage, xBlock, yBlock, 32, 32)
            }else if(platformLevel1[index] == 2){
                c.drawImage(spikeMoveImage, 4 * 32, 0 * 32, 32, 32, xBlock, yBlock, 32, 32);
            }else if(platformLevel1[index] == 3){
                c.drawImage(lavaImage, frameLava * 32, 0 * 32, 32, 32, xBlock, yBlock, 32, 32);
            }else if(platformLevel1[index] == 4){
                c.drawImage(spikeMoveImage, 4 * 32, 2 * 32, 32, 32, xBlock, yBlock, 32, 32);
            }else if(platformLevel1[index] == 5){
                c.drawImage(orbImage, frameOrb * 32, 0 * 32, 32, 32, xBlock, yBlock, 32, 32);
            }else if(platformLevel1[index] == 6){
                c.drawImage(crackedImage, xBlock, yBlock, 32, 32)
            }else if(platformLevel1[index] == 7){
                c.drawImage(woodsImage, 0 * 32, 0, 32, 32, xBlock, yBlock, 32, 32)
            }else if(platformLevel1[index] == 8){
                c.drawImage(chainImage, xBlock, yBlock, 32, 32)
            }else if(platformLevel1[index] == 9){
                c.drawImage(bookImage, xBlock, yBlock, 32, 32)
            }else if(platformLevel1[index] == 10){
                c.drawImage(spikeMoveImage, frameSpike * 32, 0 * 32, 32, 32, xBlock, yBlock, 32, 32);
            }else if(platformLevel1[index] == 20){
                c.drawImage(spikeMoveImage, frameSpike * 32, 1 * 32, 32, 32, xBlock, yBlock, 32, 32);
            }else if(platformLevel1[index] == 21){
                c.drawImage(spikeMoveImage, frameSpike * 32, 2 * 32, 32, 32, xBlock, yBlock, 32, 32);
            }else if(platformLevel1[index] == 22){
                c.drawImage(spikeMoveImage, frameSpike * 32, 3 * 32, 32, 32, xBlock, yBlock, 32, 32);
            }else if(platformLevel1[index] == 23){
                c.drawImage(spikeMoveImage, 4 * 32, 1 * 32, 32, 32, xBlock, yBlock, 32, 32);
            }else if(platformLevel1[index] == 24){
                c.drawImage(spikeMoveImage, 4 * 32, 3 * 32, 32, 32, xBlock, yBlock, 32, 32);
            }else if(platformLevel1[index] == 32){
                c.drawImage(ironImage, 0 * 32, 0 * 32, 32, 32, xBlock, yBlock, 32, 32);
            }else if(platformLevel1[index] == 33){
                c.drawImage(ironKeyImage, 0 * 32, 0 * 32, 32, 32, xBlock, yBlock, 32, 32);
            }else if(platformLevel1[index] == 18){
                c.drawImage(barrelImage, xBlock, yBlock, 32, 32)
            }else if(platformLevel1[index] == 19){
                c.drawImage(woodsImage, 1 * 32, 0, 32, 32, xBlock, yBlock, 32, 32)
            }else if(platformLevel1[index] == 29){
                c.drawImage(jumpPadImage, frameOrb * 32, 0, 32, 32, xBlock, yBlock, 32, 32)
            }else if(platformLevel1[index] == 36){
                c.drawImage(honeyImage, 0 * 32, 0, 32, 32, xBlock, yBlock, 32, 32)
            }else if(platformLevel1[index] == 37){
                c.drawImage(honeyImage, 1 * 32, 0, 32, 32, xBlock, yBlock, 32, 32)
            }
//-----------------------------------------------------------
// STEAMPUNK DUNGEON
//-----------------------------------------------------------
        }else if(playingSteamPunk){
            if(platformLevel1[index] == 1){
                c.drawImage(ironBlockImage, 0 * 32, 0 * 32, 32, 32, xBlock, yBlock, 32, 32)
            }else if(platformLevel1[index] == 2){
                c.drawImage(spikeMoveImage, 4 * 32, 0 * 32, 32, 32, xBlock, yBlock, 32, 32);
            }else if(platformLevel1[index] == 3){
                c.drawImage(lavaImage, frameLava * 32, 0 * 32, 32, 32, xBlock, yBlock, 32, 32);
            }else if(platformLevel1[index] == 4){
                c.drawImage(spikeMoveImage, 4 * 32, 2 * 32, 32, 32, xBlock, yBlock, 32, 32);
            }else if(platformLevel1[index] == 5){
                c.drawImage(orbImage, frameOrb * 32, 0 * 32, 32, 32, xBlock, yBlock, 32, 32);
            }else if(platformLevel1[index] == 6){
                c.drawImage(crackedImage, xBlock, yBlock, 32, 32)
            }else if(platformLevel1[index] == 7){
                c.drawImage(woodsImage, 0 * 32, 1 * 32, 32, 32, xBlock, yBlock, 32, 32)
            }else if(platformLevel1[index] == 19){
                c.drawImage(woodsImage, 1 * 32, 1 * 32, 32, 32, xBlock, yBlock, 32, 32)
            }else if(platformLevel1[index] == 29){
                c.drawImage(jumpPadImage, frameOrb * 32, 0, 32, 32, xBlock, yBlock, 32, 32)
            }else if(platformLevel1[index] == 12){
                c.drawImage(brickBlockImage, xBlock, yBlock, 32, 32)
            }else if(platformLevel1[index] == 68){
                c.drawImage(brickBlockImage, 0 * 32, 0 * 32, 32, 32, xBlock, yBlock, 32, 32)
            }else if(platformLevel1[index] == 69){
                c.drawImage(ironSticksImage, 1 * 32, 0 * 32, 32, 32, xBlock, yBlock, 32, 32)
            }else if(platformLevel1[index] == 70){
                c.drawImage(ironSticksImage, 0 * 32, 0 * 32, 32, 32, xBlock, yBlock, 32, 32)
            }else if(platformLevel1[index] == 8){
                c.drawImage(chainImage, xBlock, yBlock, 32, 32)
            }else if(platformLevel1[index] == 72){
                c.drawImage(ropeImage, xBlock, yBlock, 32, 32)
            }else if(platformLevel1[index] == 18){
                c.drawImage(barrelImage, xBlock, yBlock, 32, 32)
            }else if(platformLevel1[index] == 71){
                c.drawImage(copperBlockImage, 0 * 32, 0 * 32, 32, 32, xBlock, yBlock, 32, 32)
            }else if(platformLevel1[index] == 10){
                c.drawImage(spikeMoveImage, frameSpike * 32, 0 * 32, 32, 32, xBlock, yBlock, 32, 32);
            }else if(platformLevel1[index] == 20){
                c.drawImage(spikeMoveImage, frameSpike * 32, 1 * 32, 32, 32, xBlock, yBlock, 32, 32);
            }else if(platformLevel1[index] == 21){
                c.drawImage(spikeMoveImage, frameSpike * 32, 2 * 32, 32, 32, xBlock, yBlock, 32, 32);
            }else if(platformLevel1[index] == 22){
                c.drawImage(spikeMoveImage, frameSpike * 32, 3 * 32, 32, 32, xBlock, yBlock, 32, 32);
            }else if(platformLevel1[index] == 23){
                c.drawImage(spikeMoveImage, 4 * 32, 1 * 32, 32, 32, xBlock, yBlock, 32, 32);
            }else if(platformLevel1[index] == 24){
                c.drawImage(spikeMoveImage, 4 * 32, 3 * 32, 32, 32, xBlock, yBlock, 32, 32);
            }else if(platformLevel1[index] == 65){
                c.save();
                c.translate(xBlock, yBlock);
                c.rotate(rotationAngle * -1);
                c.drawImage(bigCircleImage, -32, -32, 64, 64);
                c.restore();
            }else if(platformLevel1[index] == 66){
                c.save();
                c.translate(xBlock, yBlock);
                c.rotate(rotationAngle);
                c.drawImage(smallCircleImage, -16, -16, 32, 32);
                c.restore();
            }
        }
        
        if((index + 1) % 32 == 0){
            xBlock = 0;
            yBlock += 32;
        }else{
            xBlock += 32;
        }
    }
}

//-----------------------------Drawing Blocks in background

let frameDoorFinal = 3;

const drawBackBlocks = () => {
    xBlock = 0;
    yBlock = 0;
    for (let index = 0; index < platformLevel1.length; index++) {
//-----------------------------------------------------------
// CASTLE DUNGEON
//-----------------------------------------------------------
        if(!playingSteamPunk){
            if(platformLevel1[index] == 13){
                c.drawImage(blockBackImage, xBlock, yBlock, 32, 32)
            }else if(platformLevel1[index] == 11){
                cordsPortalX1 = xBlock - 32;
                cordsPortalY1 = yBlock + 22;
                c.drawImage(portal1Image, framePortal * 32, 0 * 32, 32, 64, xBlock, yBlock, 32, 64);
            }else if(platformLevel1[index] == 12){
                cordsPortalX2 = xBlock + 32;
                cordsPortalY2 = yBlock + 22;
                c.drawImage(portal2Image, framePortal * 32, 0 * 32, 32, 64, xBlock, yBlock, 32, 64);
            }else if(platformLevel1[index] == 14){
                c.drawImage(lanternImage, frameLantern * 32, 0 * 32, 32, 32, xBlock, yBlock, 32, 32);
            }else if(platformLevel1[index] == 15){
                c.drawImage(chainBackImage, xBlock, yBlock, 32, 32)
            }else if(platformLevel1[index] == 16){
                c.drawImage(torchImage, frameTorch * 32, 0 * 32, 32, 32, xBlock, yBlock, 32, 32);
            }else if(platformLevel1[index] == 17){
                c.drawImage(bookshelfBackImage, xBlock, yBlock, 32, 32)
            }else if(platformLevel1[index] == 25){
                c.drawImage(doorImage, xBlock, yBlock, 64, 64);
            }else if(platformLevel1[index] == 26){
                c.drawImage(ladderImage, xBlock, yBlock, 32, 32);
            }else if(platformLevel1[index] == 27){
                c.drawImage(woodsImage, 2 * 32, 0, 32, 32, xBlock, yBlock, 32, 32)
            }else if(platformLevel1[index] == 28){
                c.drawImage(woodsImage, 3 * 32, 0, 32, 32, xBlock, yBlock, 32, 32)
            }else if(platformLevel1[index] == 30){
                c.drawImage(chainDoorImage, frameDoor * 64, 0 * 32, 64, 64, xBlock, yBlock, 64, 64);
            }else if(platformLevel1[index] == 31){
                c.drawImage(keyImage, 0 * 64, 0 * 32, 64, 64, xBlock, yBlock, 64, 64);
            }else if(platformLevel1[index] == 34){
                c.drawImage(chainDoorImage, frameDoorFinal * 64, 0 * 32, 64, 64, xBlock, yBlock, 64, 64);
            }else if(platformLevel1[index] == 35){
                c.drawImage(trophyImage, xBlock, yBlock, 32, 32);
            }
            //---DOORS IN MENU
            if (platformLevel1[index] >= 50 && platformLevel1[index] <= 64) {
                c.drawImage(doorsImage, (platformLevel1[index] - 50) * 64, finished[platformLevel1[index] - 50] * 64, 64, 64, xBlock, yBlock, 64, 64);
            }
//-----------------------------------------------------------
// STEAMPUNK DUNGEON
//-----------------------------------------------------------
        }else if(playingSteamPunk){
            if(platformLevel1[index] == 13){
                c.drawImage(ironBlockImage, 1 * 32, 0 * 32, 32, 32, xBlock, yBlock, 32, 32)
            }else if(platformLevel1[index] == 14){
                c.drawImage(lanternImage, frameLantern * 32, 0 * 32, 32, 32, xBlock, yBlock, 32, 32);
            }else if(platformLevel1[index] == 15){
                c.drawImage(chainBackImage, xBlock, yBlock, 32, 32)
            }else if(platformLevel1[index] == 27){
                c.drawImage(woodsImage, 2 * 32, 1 * 32, 32, 32, xBlock, yBlock, 32, 32)
            }else if(platformLevel1[index] == 28){
                c.drawImage(woodsImage, 3 * 32, 1 * 32, 32, 32, xBlock, yBlock, 32, 32)
            }else if(platformLevel1[index] == 17){
                c.drawImage(copperBlockImage, 1 * 32, 0 * 32, 32, 32, xBlock, yBlock, 32, 32)
            }else if(platformLevel1[index] == 67){
                c.drawImage(brickBlockImage, 1 * 32, 0 * 32, 32, 32, xBlock, yBlock, 32, 32)
            }else if(platformLevel1[index] == 26){
                c.drawImage(ladderImage, xBlock, yBlock, 32, 32);
            }
            if (platformLevel1[index] >= 50 && platformLevel1[index] <= 64) {
                c.drawImage(doorsImage, (platformLevel1[index] - 50) * 64, finished[platformLevel1[index] - 50] * 64, 64, 64, xBlock, yBlock, 64, 64);
            }
        }
        if((index + 1) % 32 == 0){
            xBlock = 0;
            yBlock += 32;
        }else{
            xBlock += 32;
        }
    }
}

//----------------------------------------Drawing Darkness

let darkness = false;

let gradient2;

const dark = () => {
    if (darkness) {
        c_d.clearRect(0, 0, canvas.width, canvas.height);
        c_d.fillStyle = "black";
        c_d.fillRect(0, 0, canvas.width, canvas.height);
        
        const gradient1 = c_d.createRadialGradient(player1.x + 10, player1.y + 15, 0, player1.x + 10, player1.y + 15, 150);
        gradient1.addColorStop(0, 'rgba(0, 0, 0, 1)');
        gradient1.addColorStop(1, 'rgba(0, 0, 0, 0)');

        if(playingMultiplayer){
            gradient2 = c_d.createRadialGradient(player2.x + 10, player2.y + 15, 0, player2.x + 10, player2.y + 15, 150);
            gradient2.addColorStop(0, 'rgba(0, 0, 0, 1)');
            gradient2.addColorStop(1, 'rgba(0, 0, 0, 0)');
        }

        c_d.globalCompositeOperation = 'destination-out';
        
        c_d.fillStyle = gradient1;
        c_d.beginPath();
        c_d.arc(player1.x + 10, player1.y + 15, 150, 0, Math.PI * 2);
        c_d.closePath();
        c_d.fill();

        if(playingMultiplayer){
            c_d.fillStyle = gradient2;
            c_d.beginPath();
            c_d.arc(player2.x + 10, player2.y + 15, 150, 0, Math.PI * 2);
            c_d.closePath();
            c_d.fill();
        }
        
        c_d.globalCompositeOperation = 'source-over';
    } else {
        c_d.clearRect(0, 0, canvas.width, canvas.height);
    }
};



//----------------------------------------Drawing Ghost

let ghostImage = new Image();
ghostImage.src = "./res/img/ghost.png";

let canDieOnSpike = false;

let ghostVelocity = 2

let ghostFrame1 = 0;
let ghostFrame2 = 2;

//Ghost COORDINATES
let xGhost = 70000;
let yGhost = 310

//This will spawn the Ghost
let spawnGhostCords = () => {
    xGhost = 10000;
    yGhost = 10000;
}

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
                yGhost + player1.height >= platformY &&
                yGhost <= platformY + 32 &&
                xGhost + player1.width + ghostVelocity >= platformX &&
                xGhost <= platformX + 32
            ) {
                ghostVelocity = -2;
            }else if (
                yGhost + player1.height >= platformY &&
                yGhost <= platformY + 32 &&
                xGhost + ghostVelocity <= platformX + 32 &&
                xGhost >= platformX
            ) {
                ghostVelocity = 2;
            }
        }
    }
}

//----------------------------------------Drawing Moving Platform

let movingPlatformImage = new Image();
movingPlatformImage.src = "./res/img/moving_platform.png";

let movingPlatformVelocity = 1;

//Moving Platform COORDINATES
let xMovingPlatform = 600;
let yMovingPlatform = 282;

//This will spawn the Ghost
let spawnMovingPlatformCords = () => {
    xMovingPlatform = 10000;
    yMovingPlatform = 10000;
}

spawnMovingPlatformCords();

const drawMovingPlatform = () => {
    movingPlatformImage.src = "./res/img/moving_platform.png";
    c.drawImage(movingPlatformImage, 0 * 64, 0 * 32, 64, 32, xMovingPlatform, yMovingPlatform, 64, 32);
    for (let i = 0; i < platformLevel1.length; i++) {
        if (platformLevel1[i] == 1 || platformLevel1[i] == 6 || platformLevel1[i] == 7 ||
            platformLevel1[i] == 9 || platformLevel1[i] == 18 || platformLevel1[i] == 19 ||
            platformLevel1[i] == 32 || platformLevel1[i] == 33 || platformLevel1[i] == 36 ||
            platformLevel1[i] == 37 || platformLevel1[i] == 71 || platformLevel1[i] == 68) {
            let platformX = (i % 32) * 32;
            let platformY = Math.floor(i / 32) * 32;
            if (
                yMovingPlatform + player1.height >= platformY &&
                yMovingPlatform <= platformY + 32 &&
                xMovingPlatform + player1.width + movingPlatformVelocity >= platformX - 32 &&
                xMovingPlatform <= platformX + 32
            ) {
                movingPlatformVelocity = -1;
            }else if (
                yMovingPlatform + player1.height >= platformY &&
                yMovingPlatform <= platformY + 32 &&
                xMovingPlatform + movingPlatformVelocity <= platformX + 32 &&
                xMovingPlatform >= platformX
            ) {
                movingPlatformVelocity = 1;
            }
        }
    }
}

//----------------------------------------Drawing Saw

let sawImage = new Image();
sawImage.src = "./res/img/saw.png";

let sawVelocity = 1.5;

//SAW COORDINATES
let xSaw = 600;
let ySaw = 462;

//This will spawn the Ghost
let spawnSawCords = () => {
    xSaw = 10000;
    ySaw = 10000;
}

spawnSawCords();

let rotationAngle = 0;

const drawSaw = () => {
    
    rotationAngle -= Math.PI / 120;
    c.save();
    c.translate(xSaw + 32, ySaw + 32);
    c.rotate(rotationAngle);
    c.drawImage(sawImage, -32, -32, 64, 64);
    c.restore();

    for (let i = 0; i < platformLevel1.length; i++) {
        if (platformLevel1[i] == 1 || platformLevel1[i] == 2 || platformLevel1[i] == 6 || platformLevel1[i] == 7 || platformLevel1[i] == 9 || platformLevel1[i] == 18 || platformLevel1[i] == 19) {
            let platformX = (i % 32) * 32;
            let platformY = Math.floor(i / 32) * 32;
            if (
                ySaw + player1.height >= platformY &&
                ySaw <= platformY + 32 &&
                xSaw + player1.width + sawVelocity >= platformX - 32 &&
                xSaw <= platformX + 32
            ) {
                sawVelocity = -1.5;
            } else if (
                ySaw + player1.height >= platformY &&
                ySaw <= platformY + 32 &&
                xSaw + sawVelocity <= platformX + 32 &&
                xSaw >= platformX
            ) {
                sawVelocity = 1.5;
            }
        }
    }
}

//----------------------------------------Drawing BOSS

let bossPunchedNumber = 0;

const drawBoss = () => {
    bossImage.src = "./res/img/boss_s.png";
    if(!bossAttacking){
        c.drawImage(bossImage, currentFrameBoss * 130, (0 + bossPunchedNumber) * 130, 130, 130, bossX, bossY, 80, 80)
    }else{
        c.drawImage(bossImage, currentFrameBoss * 130, (1 + bossPunchedNumber) * 130, 130, 130, bossX, bossY, 80, 80)
    }
}

//----------------------------------------SPRITE SHEET ANIMATIONS

let deltaPlayer, deltaLava, deltaSpike, deltaPortal, deltaTorch, deltaLantern, deltaOrb, delta24, delta6, delta8, delta4, deltaGhost, deltaGhostS, deltaDoor, deltaBoss, deltaMP, deltaSaw;
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
let thenBoss = Date.now();
let thenMP = Date.now();
let thenSaw = Date.now();

let drawingId;

let currentFrameBoss = 0;

let frameLava = 0;
let frameSpike = 0;
let framePortal = 0;
let frameTorch = 0;
let frameLantern = 0;
let frameOrb = 0;
let frameDoor = 0;

let nowRise;
let thenRise = Date.now();
let deltaRise;

let risingPercent = -148;
let risingPercentOriginal = -148;
let lavaY = 576;
let risingLavaActivated = false;
let lavaIncreaseValue = 3.6;
let risingIncreaseValue = 0.6;

const drawing = () => {

    const now = Date.now();

    drawingId = requestAnimationFrame(drawing);

    // Player
    deltaPlayer = now - thenPlayer;
    if (deltaPlayer > 1) {
        thenPlayer = now - (deltaPlayer % 1);
        drawPlayer();
    }

    // Lava
    deltaLava = now - thenLava;
    if (deltaLava > 150) {
        thenLava = now - (deltaLava % 150);
        frameLava = (frameLava + 1) % 3;
    }

    // Spike
    deltaSpike = now - thenSpike;
    if (deltaSpike > 175) {
        thenSpike = now - (deltaSpike % 175);
        frameSpike = (frameSpike + 1) % 17;
        canDieOnSpike = frameSpike > 0 && frameSpike < 10;
    }

    // Portals
    deltaPortal = now - thenPortal;
    if (deltaPortal > 200) {
        thenPortal = now - (deltaPortal % 200);
        framePortal = (framePortal + 1) % 2;
    }

    // Torch
    deltaTorch = now - thenTorch;
    if (deltaTorch > 200) {
        thenTorch = now - (deltaTorch % 200);
        frameTorch = (frameTorch + 1) % 5;
    }

    // Lantern
    deltaLantern = now - thenLantern;
    if (deltaLantern > 200) {
        thenLantern = now - (deltaLantern % 200);
        frameLantern = (frameLantern + 1) % 4;
    }

    // Orb
    deltaOrb = now - thenOrb;
    if (deltaOrb > 200) {
        thenOrb = now - (deltaOrb % 200);
        frameOrb = (frameOrb + 1) % 2;
    }

    // Chain Door
    if (doorTimeout) {
        deltaDoor = now - thenDoor;
        if (deltaDoor > 100) {
            thenDoor = now - (deltaDoor % 100);
            if (frameDoor < 3) {
                frameDoor++;
            } else {
                if (playingBossFight) {
                    hearts = 0;
                }
                dead();
            }
        }
    }

    // Rising Lava
    if (risingLavaActivated) {
        deltaRise = now - thenRise;
        if (deltaRise > 200) {
            thenRise = now - (deltaRise % 200);
            risingPercent += playingBossFight ? risingIncreaseValue : 0.3;
            rising.style.bottom = risingPercent + "%";
            lavaY -= playingBossFight ? lavaIncreaseValue : 1.8;

            if ((player1.y + player1.height >= lavaY) ||
                (playingMultiplayer && (player1.y + player1.height >= lavaY || player2.y + player2.height >= lavaY))) {
                if (playingBossFight) {
                    resistence = false;
                }
                dead();
            }
        }
    }

    // Sprite sheet Player
    delta24 = now - then24;
    if (delta24 > 100) {
        then24 = now - (delta24 % 100);
        player1.currentFrameStand = (player1.currentFrameStand + 1) % 24;
        if (playingMultiplayer) {
            player2.currentFrameStand = (player2.currentFrameStand + 1) % 24;
        }
    }

    delta6 = now - then6;
    if (delta6 > 100) {
        then6 = now - (delta6 % 100);
        if (player1.punched) {
            player1.currentFramePunch = (player1.currentFramePunch + 1) % 6;
            if (player1.currentFramePunch === 0) {
                player1.punchCooldown = false;
                player1.punched = false;
            }
        }
        if (playingMultiplayer && player2.punched) {
            player2.currentFramePunch = (player2.currentFramePunch + 1) % 6;
            if (player2.currentFramePunch === 0) {
                player2.punchCooldown = false;
                player2.punched = false;
            }
        }
    }

    delta8 = now - then8;
    if (delta8 > 80) {
        then8 = now - (delta8 % 80);
        player1.currentFrameRun = (player1.currentFrameRun + 1) % 8;
        if (playingMultiplayer) {
            player2.currentFrameRun = (player2.currentFrameRun + 1) % 8;
        }
    }

    delta4 = now - then4;
    if (delta4 > 100) {
        then4 = now - (delta4 % 100);
        if (player1.ladderCol && player1.velocityGoingDown <= 0.1 && player1.velocityGoingUp <= 0.1 && player1.velocityRight <= 0.1 && player1.velocityLeft <= 0.1) {
            player1.currentFrameCrouch = 0;
        } else {
            player1.currentFrameCrouch = (player1.currentFrameCrouch + 1) % 4;
        }
        if (playingMultiplayer) {
            if (player2.ladderCol && player2.velocityGoingDown <= 0.1 && player2.velocityGoingUp <= 0.1 && player2.velocityRight <= 0.1 && player2.velocityLeft <= 0.1) {
                player2.currentFrameCrouch = 0;
            } else {
                player2.currentFrameCrouch = (player2.currentFrameCrouch + 1) % 4;
            }
        }
    }

    // Ghost Velocity
    deltaGhost = now - thenGhost;
    if (deltaGhost > 25) {
        thenGhost = now - (deltaGhost % 25);
        xGhost += ghostVelocity;
    }

    // Moving Platform Velocity
    deltaMP = now - thenMP;
    if (deltaMP > 25) {
        thenMP = now - (deltaMP % 25);
        xMovingPlatform += movingPlatformVelocity;
    }

    // Saw Velocity
    deltaSaw = now - thenSaw;
    if (deltaSaw > 25) {
        thenSaw = now - (deltaSaw % 25);
        xSaw += sawVelocity;
    }

    // Ghost Sprite sheet
    deltaGhostS = now - thenGhostS;
    if (deltaGhostS > 200) {
        thenGhostS = now - (deltaGhostS % 200);
        if (ghostVelocity == 2) {
            ghostFrame1 = (ghostFrame1 + 1) % 2;
        } else {
            ghostFrame2 = (ghostFrame2 + 1) % 4;
            if (ghostFrame2 < 2) ghostFrame2 = 2;
        }
    }

    // Boss Sprite sheet
    deltaBoss = now - thenBoss;
    if (deltaBoss > 250) {
        thenBoss = now - (deltaBoss % 250);
        currentFrameBoss++;
        if (currentFrameBoss === 6) {
            sfx.src = "./res/sfx/boss_slash.mp3";
            sfx.play();
        }
        if (currentFrameBoss % 4 === 0 && !bossAttacking) {
            currentFrameBoss = 0;
        } else if (currentFrameBoss % 13 === 0 && bossAttacking) {
            bossAttacking = false;
            bossVelocity = 1;
            currentFrameBoss = 0;
        }
    }
}

//----------------------------------------Drawing Player

let playerOneImage = new Image();
playerOneImage.src = "./res/img/rioter.png";

let playerTwoImage = new Image();
playerTwoImage.src = "./res/img/ruby.png";

let drawPlayer = () => {
    playerOneImage.src = player;
    c.clearRect(0, 0, canvas.width, canvas.height);
    drawBackBlocks();
    if(player1.velocity == 0 && player1.velocityJump == 0 && !player1.isMovingRight && !player1.isMovingLeft && player1.turnedRight && !player1.punched && !player1.crouched && !player1.ladderCol){ //Right Stand
        c.drawImage(playerOneImage, player1.currentFrameStand * sX, 0 * sY, sWidth, sHeight, player1.x, player1.y, frameWidth, frameHeight);
    }else if(player1.velocity == 0 && player1.velocityJump == 0 && !player1.isMovingRight && !player1.isMovingLeft && player1.turnedLeft && !player1.punched && !player1.crouched && !player1.ladderCol){ //Left Stand
        c.drawImage(playerOneImage, player1.currentFrameStand * sX, 1 * sY, sWidth, sHeight, player1.x, player1.y, frameWidth, frameHeight);
    }else if(player1.velocity > 0 && player1.turnedRight && !player1.punched && !player1.crouched && !player1.ladderCol && !player1.canSlideOnWall){ //Right Fall
        c.drawImage(playerOneImage, 0 * sX, 0 * sY, sWidth, sHeight, player1.x, player1.y, frameWidth, frameHeight);
    }else if(player1.velocity > 0 && player1.turnedLeft && !player1.punched && !player1.crouched && !player1.ladderCol && !player1.canSlideOnWall){ //Left Fall
        c.drawImage(playerOneImage, 0 * sX, 1 * sY, sWidth, sHeight, player1.x, player1.y, frameWidth, frameHeight);
    }else if(player1.turnedRight && !player1.punched && !player1.crouched && !player1.ladderCol && player1.canSlideOnWall && player1.velocityJump <= 0.2){ //Right Slide
        c.drawImage(playerOneImage, 1 * sX, 11 * sY, sWidth, sHeight, player1.x, player1.y, frameWidth, frameHeight);
    }else if(player1.turnedLeft && !player1.punched && !player1.crouched && !player1.ladderCol && player1.canSlideOnWall && player1.velocityJump <= 0.2){ //Left Slide
        c.drawImage(playerOneImage, 0 * sX, 11 * sY, sWidth, sHeight, player1.x, player1.y, frameWidth, frameHeight);
    }else if(player1.velocityJump > 0 && player1.turnedRight && !player1.punched && !player1.crouched && !player1.ladderCol){ //Right Jump
        c.drawImage(playerOneImage, 0 * sX, 4 * sY, sWidth, sHeight, player1.x, player1.y, frameWidth, frameHeight);
    }else if(player1.velocityJump > 0 && player1.turnedLeft && !player1.punched && !player1.crouched && !player1.ladderCol){ //Left Jump
        c.drawImage(playerOneImage, 0 * sX, 5 * sY, sWidth, sHeight, player1.x, player1.y, frameWidth, frameHeight);
    }else if(player1.velocity == 0 && player1.turnedRight && player1.velocityJump == 0 && player1.isMovingRight && !player1.punched && !player1.crouched && !player1.ladderCol){ //Right Run
        c.drawImage(playerOneImage, player1.currentFrameRun * sX, 2 * sY, sWidth, sHeight, player1.x, player1.y, frameWidth, frameHeight);
    }else if(player1.velocity == 0 && player1.turnedLeft && player1.velocityJump == 0 && player1.isMovingLeft && !player1.punched && !player1.crouched && !player1.ladderCol){ //Left Run
        c.drawImage(playerOneImage, player1.currentFrameRun * sX, 3 * sY, sWidth, sHeight, player1.x, player1.y, frameWidth, frameHeight);
    }else if(player1.punched && player1.turnedRight && !player1.ladderCol){ //Right Punch
        c.drawImage(playerOneImage, player1.currentFramePunch * sX, 8 * sY, sWidth, sHeight, player1.x, player1.y, frameWidth, frameHeight);
    }else if(player1.punched && player1.turnedLeft && !player1.ladderCol){ //Left Punch
        c.drawImage(playerOneImage, player1.currentFramePunch * sX, 9 * sY, sWidth, sHeight, player1.x, player1.y, frameWidth, frameHeight);
    }else if((!player1.isMovingRight && !player1.isMovingLeft && player1.crouched && player1.turnedRight && !player1.punched) || (player1.isMovingRight && player1.isMovingLeft && player1.crouched && player1.turnedRight)){ //Crouched Right
        c.drawImage(playerOneImage, 0 * sX, 6 * sY, sWidth, sHeight, player1.x, player1.y - player1.height, frameWidth, frameHeight);
    }else if((!player1.isMovingRight && !player1.isMovingLeft && player1.crouched && player1.turnedLeft && !player1.punched) || (player1.isMovingRight && player1.isMovingLeft && player1.crouched && player1.turnedLeft)){ //Crouched Left
        c.drawImage(playerOneImage, 0 * sX, 7 * sY, sWidth, sHeight, player1.x, player1.y - player1.height, frameWidth, frameHeight);
    }else if(player1.isMovingRight && !player1.isMovingLeft && player1.crouched && !player1.punched && player1.turnedRight){ //Crouched Right Moving
        c.drawImage(playerOneImage, player1.currentFrameCrouch * sX, 6 * sY, sWidth, sHeight, player1.x, player1.y - player1.height, frameWidth, frameHeight);
    }else if(player1.crouched && player1.isMovingLeft && !player1.isMovingRight && !player1.punched && player1.turnedLeft){ //Crouched Left Moving
        c.drawImage(playerOneImage, player1.currentFrameCrouch * sX, 7 * sY, sWidth, sHeight, player1.x, player1.y - player1.height, frameWidth, frameHeight);
    }else if (player1.ladderCol && !player1.crouched){ //Climbing
        c.drawImage(playerOneImage, player1.currentFrameCrouch * sX, 10 * sY, sWidth, sHeight, player1.x, player1.y, frameWidth, frameHeight);
    }else{
        c.drawImage(playerOneImage, player1.currentFrameStand * sX, 0 * sY, sWidth, sHeight, player1.x, player1.y, frameWidth, frameHeight);
    }
    //--------------------------------------------------------------------
    // SECOND PLAYER 
    //--------------------------------------------------------------------
    if(playingMultiplayer){
        if(player2.velocity == 0 && player2.velocityJump == 0 && !player2.isMovingRight && !player2.isMovingLeft && player2.turnedRight && !player2.punched && !player2.crouched && !player2.ladderCol){ //Right Stand
            c.drawImage(playerTwoImage, player2.currentFrameStand * sX, 0 * sY, sWidth, sHeight, player2.x, player2.y, frameWidth, frameHeight);
        }else if(player2.velocity == 0 && player2.velocityJump == 0 && !player2.isMovingRight && !player2.isMovingLeft && player2.turnedLeft && !player2.punched && !player2.crouched && !player2.ladderCol){ //Left Stand
            c.drawImage(playerTwoImage, player2.currentFrameStand * sX, 1 * sY, sWidth, sHeight, player2.x, player2.y, frameWidth, frameHeight);
        }else if(player2.velocity > 0 && player2.turnedRight && !player2.punched && !player2.crouched && !player2.ladderCol && !player2.canSlideOnWall){ //Right Fall
            c.drawImage(playerTwoImage, 0 * sX, 0 * sY, sWidth, sHeight, player2.x, player2.y, frameWidth, frameHeight);
        }else if(player2.velocity > 0 && player2.turnedLeft && !player2.punched && !player2.crouched && !player2.ladderCol && !player2.canSlideOnWall){ //Left Fall
            c.drawImage(playerTwoImage, 0 * sX, 1 * sY, sWidth, sHeight, player2.x, player2.y, frameWidth, frameHeight);
        }else if(player2.turnedRight && !player2.punched && !player2.crouched && !player2.ladderCol && player2.canSlideOnWall && player2.velocityJump <= 0.2){ //Right Slide
            c.drawImage(playerTwoImage, 1 * sX, 11 * sY, sWidth, sHeight, player2.x, player2.y, frameWidth, frameHeight);
        }else if(player2.turnedLeft && !player2.punched && !player2.crouched && !player2.ladderCol && player2.canSlideOnWall && player2.velocityJump <= 0.2){ //Left Slide
            c.drawImage(playerTwoImage, 0 * sX, 11 * sY, sWidth, sHeight, player2.x, player2.y, frameWidth, frameHeight);
        }else if(player2.velocityJump > 0 && player2.turnedRight && !player2.punched && !player2.crouched && !player2.ladderCol){ //Right Jump
            c.drawImage(playerTwoImage, 0 * sX, 4 * sY, sWidth, sHeight, player2.x, player2.y, frameWidth, frameHeight);
        }else if(player2.velocityJump > 0 && player2.turnedLeft && !player2.punched && !player2.crouched && !player2.ladderCol){ //Left Jump
            c.drawImage(playerTwoImage, 0 * sX, 5 * sY, sWidth, sHeight, player2.x, player2.y, frameWidth, frameHeight);
        }else if(player2.velocity == 0 && player2.turnedRight && player2.velocityJump == 0 && player2.isMovingRight && !player2.punched && !player2.crouched && !player2.ladderCol){ //Right Run
            c.drawImage(playerTwoImage, player2.currentFrameRun * sX, 2 * sY, sWidth, sHeight, player2.x, player2.y, frameWidth, frameHeight);
        }else if(player2.velocity == 0 && player2.turnedLeft && player2.velocityJump == 0 && player2.isMovingLeft && !player2.punched && !player2.crouched && !player2.ladderCol){ //Left Run
            c.drawImage(playerTwoImage, player2.currentFrameRun * sX, 3 * sY, sWidth, sHeight, player2.x, player2.y, frameWidth, frameHeight);
        }else if(player2.punched && player2.turnedRight && !player2.ladderCol){ //Right Punch
            c.drawImage(playerTwoImage, player2.currentFramePunch * sX, 8 * sY, sWidth, sHeight, player2.x, player2.y, frameWidth, frameHeight);
        }else if(player2.punched && player2.turnedLeft && !player2.ladderCol){ //Left Punch
            c.drawImage(playerTwoImage, player2.currentFramePunch * sX, 9 * sY, sWidth, sHeight, player2.x, player2.y, frameWidth, frameHeight);
        }else if((!player2.isMovingRight && !player2.isMovingLeft && player2.crouched && player2.turnedRight && !player2.punched) || (player2.isMovingRight && player2.isMovingLeft && player2.crouched && player2.turnedRight)){ //Crouched Right
            c.drawImage(playerTwoImage, 0 * sX, 6 * sY, sWidth, sHeight, player2.x, player2.y - player2.height, frameWidth, frameHeight);
        }else if((!player2.isMovingRight && !player2.isMovingLeft && player2.crouched && player2.turnedLeft && !player2.punched) || (player2.isMovingRight && player2.isMovingLeft && player2.crouched && player2.turnedLeft)){ //Crouched Left
            c.drawImage(playerTwoImage, 0 * sX, 7 * sY, sWidth, sHeight, player2.x, player2.y - player2.height, frameWidth, frameHeight);
        }else if(player2.isMovingRight && !player2.isMovingLeft && player2.crouched && !player2.punched && player2.turnedRight){ //Crouched Right Moving
            c.drawImage(playerTwoImage, player2.currentFrameCrouch * sX, 6 * sY, sWidth, sHeight, player2.x, player2.y - player2.height, frameWidth, frameHeight);
        }else if(player2.crouched && player2.isMovingLeft && !player2.isMovingRight && !player2.punched && player2.turnedLeft){ //Crouched Left Moving
            c.drawImage(playerTwoImage, player2.currentFrameCrouch * sX, 7 * sY, sWidth, sHeight, player2.x, player2.y - player2.height, frameWidth, frameHeight);
        }else if (player2.ladderCol && !player2.crouched){ //Climbing
            c.drawImage(playerTwoImage, player2.currentFrameCrouch * sX, 10 * sY, sWidth, sHeight, player2.x, player2.y, frameWidth, frameHeight);
        }else{
            c.drawImage(playerTwoImage, player2.currentFrameStand * sX, 0 * sY, sWidth, sHeight, player2.x, player2.y, frameWidth, frameHeight);
        }
    }
    cancelAnimationFrame(drawingId);
    drawing();
    drawPlatform();
    if(!playingSteamPunk){
        drawGhost();
    }else{
        drawMovingPlatform();
        drawSaw();
    }
    objectsCollision(player1);
    orbCollision(player1);
    jumpPadCollision(player1);
    ladderCollision(player1);
    doorsCollision(player1);
    if(playingMultiplayer){
        orbCollision(player2);
        jumpPadCollision(player2);
        ladderCollision(player2);
        objectsCollision(player2);
        doorsCollision(player2);
    }
    if(!playingMultiplayer){
        drawBoss();
    }
    dark();
};