const canvas = document.getElementById('cnv');
const p = canvas.getContext('2d'); //Platform
const c = canvas.getContext('2d'); //Character
const text = document.getElementById("text");
const wasd = document.getElementById("wasd");
const buttons = document.getElementById("buttons");

const deviceDetect = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
if (deviceDetect == true) {
    buttons.style.display = "block";
}

let x;
let y;

let xMob;
let yMob;

let spawnCords = () => {
    x = 40;
    y = 500;
}
spawnCords();

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
let now;
let then = Date.now();
let delta;

let portalCordsX1 = 0;
let portalCordsY1 = 0;
let portalCordsX2 = 0;
let portalCordsY2 = 0;


//Lokace platform
//                      1  2  3  4  5  6  7  8  9 10 11 12 13 14 15 16 17 18 19 20 21 22 23 24 25 26 27 28 29 30 31 32
let platformLevel1 =   [ 1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,
                         4,  0,  0,  0,  0,  4,  0,  0,  0,  0,  0,  0,  0,  6,  0, 11,  9,  4,  0,  1,  4,  4,  4,  1,  4,  4,  4,  4,  1,  0,  0,  0,
                         0,  0, 16,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  6,  0,  0,  9,  0,  0,  6,  0,  0,  0,  8,  0,  0,  0,  0,  1,  0,  0,  0,
                         0,  0,  0,  0,  0,  0,  0,  0,  0, 18,  1,  3,  1,  7,  7,  7,  7,  0,  0,  6,  0,  0,  0,  8,  0, 16,  0,  0,  4,  0, 30,  0,
                        14,  0,  0,  0,  9, 14,  0,  2,  1,  1,  1,  1,  1,  0,  0,  0,  0,  0, 14,  1, 18,  2,  0,  8,  0,  0,  0,  0, 10,  0,  0,  0,
                        18,  0,  0, 17,  9,  9,  0,  1,  1,  8, 18, 12,  0, 16,  0, 10,  0,  0,  9,  1,  1,  1,  0,  8,  0,  0,  1,  1,  1,  1,  1,  1,
                         1,  0,  0, 17,  9,  9,  0,  0,  0, 18, 18,  0,  0,  0, 10,  1, 10, 17,  9,  1,  4,  8,  0,  7,  0,  0,  0,  4, 15,  0,  8,  0,
                         4,  0,  0,  1,  1,  1,  0, 14,  0,  7,  7,  7,  7,  7,  1,  1,  1,  1,  1,  1,  0,  8,  0,  0,  0,  0,  0,  0, 15,  0,  7,  0,
                         0,  5,  0,  1,  4,  0,  0,  9,  0,  0,  0,  0,  0,  6,  0,  0,  0,  0,  0,  8,  0,  8,  0, 16,  0,  0,  0,  0, 14,  0,  4,  0,
                         2,  0,  0,  6,  0, 17,  9,  9, 17,  0, 14,  0,  0,  6,  0,  0,  0,  0,  0,  8,  0,  8,  0,  0, 17,  0,  2,  0,  0,  0,  0,  0,
                         1,  0,  0, 10, 17, 17,  1,  1,  1,  0,  7,  7,  0,  1, 18,  0,  0,  1,  0,  8, 14,  8,  0, 17,  9,  0,  1,  0,  5,  0,  0,  0,
                         0,  0,  7,  7,  7,  7,  1,  0,  8,  0,  4, 15,  0,  1,  1,  1,  0,  4,  0,  7,  7,  7,  0,  1,  1,  0,  0,  0,  0,  0, 16,  0,
                         0,  0,  0,  0,  0,  0,  8,  0,  8,  0,  0, 14,  0,  8,  6,  8,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,
                        14,  0,  0, 16,  0,  0,  8,  0,  8,  0,  0,  0,  0,  8,  6,  8,  0,  0, 16,  0,  0, 10, 10,  0,  0,  0,  0,  2,  0,  0,  0, 18,
                         9,  0,  0,  0,  0,  0,  7,  7,  7,  0,  0,  0,  0,  7,  7,  7,  0,  0,  0,  0,  7,  7,  7,  7,  0, 14,  0,  1,  0,  5,  0,  7,
                         9, 17,  0,  0,  0,  2,  0,  0,  0,  0,  0,  5,  0,  0,  0,  0,  0,  1,  9, 17, 17,  7,  7,  0,  0,  1,  0,  0,  0,  0,  0,  1,
                         9, 17, 17,  0, 18,  1,  3,  3,  3,  3,  3,  3,  3,  3,  3,  3,  3,  1,  9,  9, 17,  7,  7,  0, 18,  1,  3,  3,  3,  3,  3,  1,
                         7,  7,  7,  7,  7,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,]

//1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,
// 0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,

const originalPlatform1 = [...platformLevel1];

//----------------------------------------Vykreslení platform a překážek

const platformImage = new Image();
platformImage.src = "./res/img/block.png";

const spikeImage = new Image();
spikeImage.src = "./res/img/spike.png";

const spikeFlipImage = new Image();
spikeFlipImage.src = "./res/img/spike_flip.png";

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

const portal1Image = new Image();
portal1Image.src = "./res/img/portal1.png";

const portal2Image = new Image();
portal2Image.src = "./res/img/portal2.png";

const blockBackImage = new Image();
blockBackImage.src = "./res/img/block_back.png";

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

let currentFrame = 0;
let currentFramePunch = 0;

let currentFrameLava = 0;
let currentFrameSpike = 0;
let currentFramePortal = 0;

let animateTickLava = 0;
let animateTickSpike = 0;
let animateTickPortal = 0;

let frameLava = 0;
let intervalLava = 0;
let frameSpike = 0;
let intervalSpike = 0;
let framePortal = 0;
let intervalPortal = 0;

const frameWidth = 30;
const frameHeight = 40;

let sWidth = 30;
let sHeight = 40;
let sX = 30;
let sY = 40;

const animateLava = () => {
    animateTickLava++;
        if(animateTickLava == 10){
            currentFrameLava++
            if(currentFrameLava % 4 == 0){
                currentFrameLava = 0;
            }
            animateTickLava = 0;
        }
}

const aniamteSpike = () => {
    animateTickSpike++;
        if(animateTickSpike == 2){
            currentFrameSpike++
            if(currentFrameSpike % 4 == 0){
                currentFrameSpike = 0;
            }
            animateTickSpike = 0;
        }
}

const aniamtePortal = () => {
    animateTickPortal++;
        if(animateTickPortal == 10){
            currentFramePortal++
            if(currentFramePortal % 2 == 0){
                currentFramePortal = 0;
            }
            animateTickPortal = 0;
        }
}

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
            p.drawImage(spikeImage, xBlock,yBlock,32,32)
        }else if(platformLevel1[index] == 3){
            p.drawImage(lavaImage, frameLava * 32, 0 * 32, 32, 32, xBlock, yBlock, 32, 32);
            animateLava();
        }else if(platformLevel1[index] == 4){
            p.drawImage(spikeFlipImage, xBlock, yBlock, 32, 32)
        }else if(platformLevel1[index] == 5){
            p.drawImage(orbImage, xBlock, yBlock, 32, 32)
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
            animateLava();
        }else if(platformLevel1[index] == 11){
            cordsPortalX1 = xBlock - 32;
            cordsPortalY1 = yBlock + 32;
            p.drawImage(portal1Image, framePortal * 32, 0 * 32, 32, 64, xBlock, yBlock, 32, 64);
            aniamtePortal();
        }else if(platformLevel1[index] == 12){
            cordsPortalX2 = xBlock + 32;
            cordsPortalY2 = yBlock + 32;
            p.drawImage(portal2Image, framePortal * 32, 0 * 32, 32, 64, xBlock, yBlock, 32, 64);
            aniamtePortal();
        }else if(platformLevel1[index] == 18){
            p.drawImage(barrelImage, xBlock, yBlock, 32, 32)
        }else if(platformLevel1[index] == 30){
            p.drawImage(doorImage, xBlock, yBlock, 64, 64)
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
            p.drawImage(lanternImage, xBlock, yBlock, 32, 32)
        }else if(platformLevel1[index] == 15){
            p.drawImage(chainBackImage, xBlock, yBlock, 32, 32)
        }else if(platformLevel1[index] == 16){
            p.drawImage(torchImage, xBlock, yBlock, 32, 32)
        }else if(platformLevel1[index] == 17){
            p.drawImage(bookshelfBackImage, xBlock, yBlock, 32, 32)
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

let playerImage = new Image();
playerImage.src = "./res/img/player.png";

let ghostImage = new Image();
ghostImage.src = "./res/img/ghost.png";

let canDieOnSpike = false;

let ghostVelocity = 0.25

let spawnGhostCords = () => {
    xGhost = 630;
    yGhost = 310;
}
spawnGhostCords();

let ghostFrame1 = 0;
let ghostFrame2 = 2;

setInterval(() => {
    if (ghostVelocity == 0.25) {
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
}, 300);

const drawGhost = () => {
    ghostImage.src = "./res/img/ghost.png";
    xGhost += ghostVelocity;
    if(ghostVelocity == 0.25){
        c.drawImage(ghostImage, ghostFrame1 * 30, 0 * 40, 30, 40, xGhost, yGhost, 30, 40);
    }else{
        c.drawImage(ghostImage, ghostFrame2 * 30, 0 * 40, 30, 40, xGhost, yGhost, 30, 40);
    }
    for (let i = 0; i < platformLevel1.length; i++) {
        if (platformLevel1[i] == 1 || platformLevel1[i] == 2 || platformLevel1[i] == 6 || platformLevel1[i] == 7 || platformLevel1[i] == 9 || platformLevel1[i] == 18) {
            let platformX = (i % 32) * 32;
            let platformY = Math.floor(i / 32) * 32;
            if (
                yGhost + height > platformY &&
                yGhost < platformY + 32 &&
                xGhost + width + ghostVelocity > platformX &&
                xGhost < platformX + 32
            ) {
                ghostVelocity = -0.25
            }else if (platformLevel1[i] == 1 || platformLevel1[i] == 2 || platformLevel1[i] == 6 || platformLevel1[i] == 7 || platformLevel1[i] == 9 || platformLevel1[i] == 18) {
                let platformX = (i % 32) * 32;
                let platformY = Math.floor(i / 32) * 32;
                if (
                    yGhost + height > platformY &&
                    yGhost < platformY + 32 &&
                    xGhost + ghostVelocity < platformX + 32 &&
                    xGhost > platformX
                ) {
                    ghostVelocity = 0.25;
                }
            }
        }
    }
}


//Vykreslení hráče + Animace objektů + Ghost

setInterval(() => {
    //Hráč
    drawPlayer();
    //Platformy
    drawPlatform();
    //Lava
    intervalLava++;
    if(intervalLava == 70){
        frameLava++;
        intervalLava = 0;
        if(frameLava == 3){
            frameLava = 0;
        }
    }
    //Spike
    intervalSpike++;
    if(intervalSpike == 30){
        frameSpike++;
        intervalSpike = 0;
        if(frameSpike == 0 || frameSpike >= 10){
            canDieOnSpike = false;
        }else{
            canDieOnSpike = true;
        }
        if(frameSpike == 17){
            frameSpike = 0;
        }
    }
    //Portaly
    intervalPortal++;
    if(intervalPortal == 70){
        framePortal++;
        intervalPortal = 0;
        if(framePortal == 2){
            framePortal = 0;
        }
    }
}, 1);

let animateTick = 0;
let animateTickStand = 0;
let animateTickPunch = 0;
let animateTickCrouch = 0;

const animate24 = () => {
    animateTickStand++;
    if(animateTickStand == 30){
            currentFrame++
            if(currentFrame % 24 == 0){
                currentFrame = 0;
            }
        animateTickStand = 0;
    }
}

const animate8 = () => {
    animateTick++;
        if(animateTick == 20){
                currentFrame++
                if(currentFrame % 8 == 0){
                currentFrame = 0;
                }
            animateTick = 0;
        }
}

const animate6 = () => {
    animateTickPunch++;
        if(animateTickPunch == 15){
                currentFramePunch++
                if(currentFramePunch % 6 == 0){
                currentFramePunch = 0;
                punched = false;
                }
            animateTickPunch = 0;
        }
}

const animate4 = () => {
    animateTickCrouch++;
        if(animateTickCrouch == 30){
                currentFrame++
                if(currentFrame % 4 == 0){
                currentFrame = 0;
                }
            animateTickCrouch = 0;
        }
}

let drawPlayer = () => {
    playerImage.src = "./res/img/player.png";
    if(velocity == 0 && velocityJump == 0 && !isMovingRight && !isMovingLeft && turnedRight && !punched && !crouched){ //Right Stand
        c.clearRect(0, 0, canvas.width, canvas.height);
        drawBackBlocks();
        c.drawImage(playerImage, currentFrame * sX, 0 * sY, sWidth, sHeight, x, y, frameWidth, frameHeight);
        animate24();
    }else if(velocity == 0 && velocityJump == 0 && !isMovingRight && !isMovingLeft && turnedLeft && !punched && !crouched){ //Left Stand
        c.clearRect(0, 0, canvas.width, canvas.height);
        drawBackBlocks();
        c.drawImage(playerImage, currentFrame * sX, 1 * sY, sWidth, sHeight, x, y, frameWidth, frameHeight);
        animate24();
    }else if(velocity > 0 && turnedRight && !punched && !crouched){ //Right Fall
        c.clearRect(0, 0, canvas.width, canvas.height);
        drawBackBlocks();
        c.drawImage(playerImage, 0 * sX, 0 * sY, sWidth, sHeight, x, y, frameWidth, frameHeight);
    }else if(velocity > 0 && turnedLeft && !punched && !crouched){ //Left Fall
        c.clearRect(0, 0, canvas.width, canvas.height);
        drawBackBlocks();
        c.drawImage(playerImage, 0 * sX, 1 * sY, sWidth, sHeight, x, y, frameWidth, frameHeight);
    }else if(velocityJump > 0 && turnedRight && !punched && !crouched){ //Right Jump
        c.clearRect(0, 0, canvas.width, canvas.height);
        drawBackBlocks();
        c.drawImage(playerImage, 0 * sX, 4 * sY, sWidth, sHeight, x, y, frameWidth, frameHeight);
    }else if(velocityJump > 0 && turnedLeft && !punched && !crouched){ //Left Jump
        c.clearRect(0, 0, canvas.width, canvas.height);
        drawBackBlocks();
        c.drawImage(playerImage, 0 * sX, 5 * sY, sWidth, sHeight, x, y, frameWidth, frameHeight);
    }else if(velocity == 0 && velocityJump == 0 && isMovingRight && !punched && !crouched ){ //Right Run
        c.clearRect(0, 0, canvas.width, canvas.height);
        drawBackBlocks();
        c.drawImage(playerImage, currentFrame * sX, 2 * sY, sWidth, sHeight, x, y, frameWidth, frameHeight);
        animate8();
    }else if(velocity == 0 && velocityJump == 0 && isMovingLeft && !punched && !crouched){ //Left Run
        c.clearRect(0, 0, canvas.width, canvas.height);
        drawBackBlocks();
        c.drawImage(playerImage, currentFrame * sX, 3 * sY, sWidth, sHeight, x, y, frameWidth, frameHeight);
        animate8();
    }else if(punched && turnedRight){ //Right Punch
        c.clearRect(0, 0, canvas.width, canvas.height);
        drawBackBlocks();
        c.drawImage(playerImage, currentFramePunch * sX, 8 * sY, sWidth, sHeight, x, y, frameWidth, frameHeight);
        animate6();
    }else if(punched && turnedLeft){ //Left Punch
        c.clearRect(0, 0, canvas.width, canvas.height);
        drawBackBlocks();
        c.drawImage(playerImage, currentFramePunch * sX, 9 * sY, sWidth, sHeight, x, y, frameWidth, frameHeight);
        animate6();
    }else if(crouched && !isMovingRight && !isMovingLeft && turnedRight){ //Crouched Right
        c.clearRect(0, 0, canvas.width, canvas.height);
        drawBackBlocks();
        c.drawImage(playerImage, 0 * sX, 6 * sY, sWidth, sHeight, x, y - height, frameWidth, frameHeight);
    }else if(crouched && !isMovingRight && !isMovingLeft && turnedLeft){ //Crouched Left
        c.clearRect(0, 0, canvas.width, canvas.height);
        drawBackBlocks();
        c.drawImage(playerImage, 0 * sX, 7 * sY, sWidth, sHeight, x, y - height, frameWidth, frameHeight);
    }else if(crouched && isMovingRight && !isMovingLeft){ //Crouched Right Moving
        c.clearRect(0, 0, canvas.width, canvas.height);
        drawBackBlocks();
        c.drawImage(playerImage, currentFrame * sX, 6 * sY, sWidth, sHeight, x, y - height, frameWidth, frameHeight);
        animate4();
    }else if(crouched && isMovingLeft && !isMovingRight){ //Crouched Left Moving
        c.clearRect(0, 0, canvas.width, canvas.height);
        drawBackBlocks();
        c.drawImage(playerImage, currentFrame * sX, 7 * sY, sWidth, sHeight, x, y - height, frameWidth, frameHeight);
        animate4();
    }
    drawPlatform();
    drawGhost();
    objectsCollision();
    orbCollision();
};
//----------------------------------------SHAKE funkce


const shake = () => {
    setTimeout(() => {
        canvas.style.top = "50.5%";canvas.style.left = "50.5%";
        setTimeout(() => {
            canvas.style.top = "49.5%";canvas.style.left = "49.5%";
            setTimeout(() => {
                canvas.style.top = "50.5%";canvas.style.left = "49.5%";
                setTimeout(() => {
                    canvas.style.top = "49.5%";canvas.style.left = "50.5%";
                    setTimeout(() => {
                        canvas.style.top = "50%";canvas.style.left = "50%"; 
                    }, 50);
                }, 50);
            }, 50);
        }, 50);
    }, 50);
}

//----------------------------------------Death funkce

const dead = () => {
    spawnCords();
    unCrouch();
    platformLevel1 = [...originalPlatform1];
    drawPlatform();
    frameSpike = 0;
    frameLava = 0;
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
        if (platformLevel1[i] == 10 && canDieOnSpike == true) {
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
        if (platformLevel1[i] == 4) {
            let platformX = (i % 32) * 32;
            let platformY = Math.floor(i / 32) * 32;
            if (
                y + height >= platformY + 10 &&
                y + height <= platformY + 32 + height &&
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
                canvas.style.display = "none";
                text.innerText = "lol ty si to dal wp";
                wasd.style.display = "none";
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
            if (platformLevel1[i] == 1 || platformLevel1[i] == 6 || platformLevel1[i] == 7 || platformLevel1[i] == 9) {
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
        objectsCollision();
        orbCollision();
        //drawPlayer();
        velocity += 0.3;
        y += velocity;
        for (let i = 0; i < platformLevel1.length; i++) {
            if (platformLevel1[i] == 1 || platformLevel1[i] == 6 || platformLevel1[i] == 7 || platformLevel1[i] == 9 || platformLevel1[i] == 18) {
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
                    orbUsed = false;
                    cancelAnimationFrame(gravityId);
                    break;
                }
            }
        }
        if (canvas.height - height < y) {
            y = canvas.height - height;
            velocity = 0;
            orbUsed = false;
            stillJumping = false;
            cancelAnimationFrame(gravityId);
        }
        drawPlatform();
    }
    
}

gravity();

//----------------------------------------Funkce SKÁKÁNÍ hráče

let nowUp;
let thenUp = Date.now();
let deltaUp;

let jump = () => {
    if(stillJumping == false || canOrbJump == true && orbUsed == false){
        if(crouched == true){
            unCrouch();
        }
        if(canOrbJump == true && velocity >= 0){
            cancelAnimationFrame(gravityId);
            cancelAnimationFrame(jumpingId);
            velocity = 0;
            velocityJump = 0;
            orbUsed = true;
        }
        let headHit = false;
        velocityJump = 16;
        stillJumping = true;
        const jumping = () => {
            jumpingId = requestAnimationFrame(jumping);
            now = Date.now();
            delta = now - then;
            if (delta > interval) {
                then = now - (delta % interval);
                velocityJump = velocityJump/1.22
                y -= velocityJump;
                //drawPlayer();
                drawPlatform()
                for (let i = 0; i < platformLevel1.length; i++) {
                    if (platformLevel1[i] == 1 || platformLevel1[i] == 6 || platformLevel1[i] == 7 || platformLevel1[i] == 9 || platformLevel1[i] == 18) {
                        let platformX = (i % 32) * 32;
                        let platformY = Math.floor(i / 32) * 32 + 40;
                        if (
                            y + height >= platformY &&
                            y + height <= platformY + 32 &&
                            x + width >= platformX &&
                            x <= platformX + 32
                        ) {
                            y = platformY - 39 - velocityJump + height;
                            stillJumping == false;
                            headHit = true;
                            velocityJump = 0;
                            velocity = 0;
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
                    cancelAnimationFrame(jumpingId);
                    gravity();
                }
            }
        }
        jumping();
    }
}
//----------------------------------------Funkce hráče CHOZENÍ DO PRAVA

let velocityRight = 0.1;
let nowRight;
let thenRight = Date.now();
let deltaRight;


let moveRight = () => {
    //drawPlayer();
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
                if (platformLevel1[i] == 1 || platformLevel1[i] == 6 || platformLevel1[i] == 7 || platformLevel1[i] == 9 || platformLevel1[i] == 18) {
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
            //drawPlayer();
            drawPlatform();
            if (x >= canvas.width - width) {
                cancelAnimationFrame(animationIdRight);
                x -= velocityRight;
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
                if (platformLevel1[i] == 1 || platformLevel1[i] == 6 || platformLevel1[i] == 7 || platformLevel1[i] == 9 || platformLevel1[i] == 18) {
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
            //drawPlayer();
            drawPlatform();
            if (x <= 0) {
                cancelAnimationFrame(animationIdLeft);
                x += velocityLeft;
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

const punch = () => {
    if(!crouched){
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
                    //drawPlayer();
                    gravity();
                } else if (
                    y + height > platformY &&
                    y < platformY + 32 &&
                    x < platformX + 42 &&
                    x > platformX + 32 && turnedLeft
                ) {
                    platformLevel1[i] = 0;
                    //drawPlayer();
                    gravity();
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
 
let downPressed = false;

window.addEventListener('keydown', (event) => {
    if ((event.key == up || event.key == UP) && isJumping == false && canStandUp == true) {
        currentFrame = 0;
        isJumping = true;
        jump();
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
    } else if ((event.key == down ||event.key == DOWN) && !punched) {
        if(crouched == false && stillJumping == false && downPressed == false){
            crouch();
            currentFrame = 0;            
        }
        downPressed = true;
    } else if (event.key == space) {
        if(!alreadyPunched){
            punch();
        }
        alreadyPunched = true;
        
    } 
});

//--------------------------Pouštění kláves

window.addEventListener('keyup', (event) => {
    if (event.key == up) {
        isJumping = false;
    }
    if (event.key == right) {
        isMovingRight = false;
    }
    if (event.key == left) {
        isMovingLeft = false;
    }
    if (event.key == down) {
        downPressed = false;
        if(velocity <= 0.35 && crouched == true && canStandUp == true){
            unCrouch();
        }else if(canStandUp == false){
            if(wasUnder == true){
                wasUnder = false;
                under();
            }
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
        jump();
    }
}

const go_punch = () => {
    if(!alreadyPunched){
        punch();
    }
    alreadyPunched = true;
}

const go_down = () => {
    if (!punched) {
        if(crouched == false && stillJumping == false && downPressed == false){
            crouch();
            currentFrame = 0;            
        }
        downPressed = true;
    }
}

const go_down_return = () => {
    downPressed = false;
    if(velocity <= 0.35 && crouched == true && canStandUp == true){
        unCrouch();
    }else if(canStandUp == false){
        if(wasUnder == true){
            wasUnder = false;
            under();
        }
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