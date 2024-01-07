//--------------DRAW-----------------

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

//-----------------------------Drawing Platform

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
            cordsPortalY1 = yBlock + 22;
            p.drawImage(portal1Image, framePortal * 32, 0 * 32, 32, 64, xBlock, yBlock, 32, 64);
        }else if(platformLevel1[index] == 12){
            cordsPortalX2 = xBlock + 32;
            cordsPortalY2 = yBlock + 22;
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

//-----------------------------Drawing Blocks in background

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
        //---DOORS IN MENU
        else if(platformLevel1[index] == 50){
            p.drawImage(doorsImage, 0 * 64, finished[0] * 64, 64, 64, xBlock, yBlock, 64, 64);
        }else if(platformLevel1[index] == 51){
            p.drawImage(doorsImage, 1 * 64, finished[1] * 64, 64, 64, xBlock, yBlock, 64, 64);
        }else if(platformLevel1[index] == 52){
            p.drawImage(doorsImage, 2 * 64, finished[2] * 64, 64, 64, xBlock, yBlock, 64, 64);
        }else if(platformLevel1[index] == 53){
            p.drawImage(doorsImage, 3 * 64, finished[3] * 64, 64, 64, xBlock, yBlock, 64, 64);
        }else if(platformLevel1[index] == 54){
            p.drawImage(doorsImage, 4 * 64, finished[4] * 64, 64, 64, xBlock, yBlock, 64, 64);
        }else if(platformLevel1[index] == 55){
            p.drawImage(doorsImage, 5 * 64, finished[5] * 64, 64, 64, xBlock, yBlock, 64, 64);
        }else if(platformLevel1[index] == 56){
            p.drawImage(doorsImage, 6 * 64, finished[6] * 64, 64, 64, xBlock, yBlock, 64, 64);
        }else if(platformLevel1[index] == 57){
            p.drawImage(doorsImage, 7 * 64, finished[7] * 64, 64, 64, xBlock, yBlock, 64, 64);
        }else if(platformLevel1[index] == 58){
            p.drawImage(doorsImage, 8 * 64, finished[8] * 64, 64, 64, xBlock, yBlock, 64, 64);
        }else if(platformLevel1[index] == 59){
            p.drawImage(doorsImage, 9 * 64, finished[9] * 64, 64, 64, xBlock, yBlock, 64, 64);
        }else if(platformLevel1[index] == 60){
            p.drawImage(doorsImage, 10 * 64, finished[10] * 64, 64, 64, xBlock, yBlock, 64, 64);
        }else if(platformLevel1[index] == 61){
            p.drawImage(doorsImage, 11 * 64, finished[11] * 64, 64, 64, xBlock, yBlock, 64, 64);
        }else if(platformLevel1[index] == 62){
            p.drawImage(doorsImage, 12 * 64, finished[12] * 64, 64, 64, xBlock, yBlock, 64, 64);
        }else if(platformLevel1[index] == 63){
            p.drawImage(doorsImage, 13 * 64, finished[13] * 64, 64, 64, xBlock, yBlock, 64, 64);
        }else if(platformLevel1[index] == 64){
            p.drawImage(doorsImage, 14 * 64, finished[14] * 64, 64, 64, xBlock, yBlock, 64, 64);
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

const dark = () => {
    if(darkness){
        c.drawImage(darknessImage, x - 1487, y - 990, 3000, 2000);
    }
}

//----------------------------------------Drawing Ghost

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
                yGhost + height >= platformY &&
                yGhost <= platformY + 32 &&
                xGhost + width + ghostVelocity >= platformX &&
                xGhost <= platformX + 32
            ) {
                ghostVelocity = -2;
            }else if (platformLevel1[i] == 1 || platformLevel1[i] == 2 || platformLevel1[i] == 6 || platformLevel1[i] == 7 || platformLevel1[i] == 9 || platformLevel1[i] == 18|| platformLevel1[i] == 19) {
                let platformX = (i % 32) * 32;
                let platformY = Math.floor(i / 32) * 32;
                if (
                    yGhost + height >= platformY &&
                    yGhost <= platformY + 32 &&
                    xGhost + ghostVelocity <= platformX + 32 &&
                    xGhost >= platformX
                ) {
                    ghostVelocity = 2;
                }
            }
        }
    }
    cancelAnimationFrame(drawingId);
    drawing();
}

//----------------------------------------Drawing BOSS

const drawBoss = () => {
    bossImage.src = "./res/img/boss_s.png";
    if(!bossAttacking){
        c.drawImage(bossImage, currentFrameBoss * 130, 0 * 130, 130, 130, bossX, bossY, 80, 80)
    }else{
        c.drawImage(bossImage, currentFrameBoss * 130, 1 * 130, 130, 130, bossX, bossY, 80, 80)
    }
}

//----------------------------------------SPRITE SHEET ANIMATIONS

let nowPlayer, nowLava, nowSpike, nowPortal, nowTorch, nowLantern, nowOrb, now24, now6, now8, now4, nowGhost, nowGhostS, nowDoor, nowBoss;
let deltaPlayer, deltaLava, deltaSpike, deltaPortal, deltaTorch, deltaLantern, deltaOrb, delta24, delta6, delta8, delta4, deltaGhost, deltaGhostS, deltaDoor, deltaBoss;
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

let drawingId;

let currentFrame = 0;
let currentFrameStand = 0;
let currentFrameRun = 0;
let currentFramePunch = 0;
let currentFrameCrouch = 0;
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
                if(playingBossFight){
                    hearts = 0;
                }
                dead();
            }
        }

    }
    //Rising Lava
    if(risingLavaActivated){
        nowRise = Date.now();
        deltaRise = nowRise - thenRise;
        if (deltaRise > 200) {
            thenRise = nowRise - (deltaRise % 200);
            if(playingBossFight){
                risingPercent += 0.6;
            }else{
                risingPercent += 0.3;
            }
            rising.style.bottom = risingPercent + "%"
            if(playingBossFight){
                lavaY -= 3.6;
            }else{
                lavaY -= 1.8;
            }
            if (y + height >= lavaY) {
                if(playingBossFight){
                    resistence = false;
                }
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
    //--------------------Ghost Sprite sheet
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
    //--------------------BOSS Sprite sheet
    nowBoss = Date.now();
    deltaBoss = nowBoss - thenBoss;
    if (deltaBoss > 250) {
        thenBoss = nowBoss - (deltaBoss % 100);
        currentFrameBoss++
        if(currentFrameBoss % 4 == 0 && !bossAttacking){
            currentFrameBoss = 0;
        }else if(currentFrameBoss % 13 == 0 && bossAttacking){
            bossAttacking = false;
            bossVelocity = 1;
            currentFrameBoss = 0;
        }
    }
}

//----------------------------------------Drawing Player

let playerImage = new Image();
playerImage.src = "./res/img/player.png";

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
    }else if((!isMovingRight && !isMovingLeft && crouched && turnedRight && !punched) || (isMovingRight && isMovingLeft && crouched && turnedRight && !punched)){ //Crouched Right
        c.clearRect(0, 0, canvas.width, canvas.height);
        drawBackBlocks();
        c.drawImage(playerImage, 0 * sX, 6 * sY, sWidth, sHeight, x, y - height, frameWidth, frameHeight);
        cancelAnimationFrame(drawingId);
    }else if((!isMovingRight && !isMovingLeft && crouched && turnedLeft && !punched) || (isMovingRight && isMovingLeft && crouched && turnedLeft && !punched)){ //Crouched Left
        c.clearRect(0, 0, canvas.width, canvas.height);
        drawBackBlocks();
        c.drawImage(playerImage, 0 * sX, 7 * sY, sWidth, sHeight, x, y - height, frameWidth, frameHeight);
        cancelAnimationFrame(drawingId);
    }else if(isMovingRight && !isMovingLeft && crouched && !punched){ //Crouched Right Moving
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
    }else if (ladderCol && !crouched){ //Climbing
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
    drawBoss();
    dark();
};