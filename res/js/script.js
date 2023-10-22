const canvas = document.getElementById('cnv');
const c = canvas.getContext('2d');
const p = canvas.getContext('2d');
canvas.style.background = "#CCCCCC";

canvas.width = 1024 ;
canvas.height = 576;

let y = 500;
let x = 10;
let height = 40;
let width = 30;

let gravityId;
let platfromId;
let jumpingId;
let animationIdRight;
let animationIdLeft;

let isJumping = false;
let gravityOn = false;
let isMovingRight = false;
let isMovingLeft = false;

//Lokace platform
//                      1  2  3  4  5  6  7  8  9 10 11 12 13 14 15 16 17 18 19 20 21 22 23 24 25 26 27 28 29 30 31 32
const platfromLevel1 = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
                        1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 4, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
                        1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
                        1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 3, 1, 0, 0, 0, 2, 0, 0, 1, 1, 1,  
                        1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 3, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 2, 0, 0, 1, 0, 0, 1, 1, 1,
                        1, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 1, 0, 1, 1, 1, 1,
                        1, 1, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1,
                        1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1,
                        1, 0, 0, 0, 1, 1, 0, 0, 0, 0, 1, 1, 0, 1, 1, 1, 0, 0, 0, 1, 2, 0, 0, 0, 0, 1, 0, 0, 0, 1, 1, 1,
                        1, 0, 0, 0, 0, 0, 0, 2, 1, 3, 1, 4, 0, 4, 4, 1, 3, 3, 3, 1, 1, 1, 1, 0, 1, 1, 0, 0, 0, 0, 0, 1,
                        1, 1, 2, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 1,
                        1, 1, 1, 1, 2, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 1,
                        1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1,
                        1, 1, 1, 1, 4, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 1, 0, 1, 1, 1, 1, 0, 0, 1, 1, 1, 0, 0, 0, 1, 1, 1,
                        1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 2, 0, 0, 0, 1, 0, 1, 0, 1, 1, 1,
                        0, 0, 0, 4, 0, 0, 1, 3, 3, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 1, 0, 1, 1, 1,
                        0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 2, 1, 1, 1, 1, 1, 3, 3, 3, 3, 3, 1, 2, 1, 1, 1,
                        1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
//1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1
//0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,

//----------------------------------------Vykreslení platform a překážek

const platformImage = new Image();
platformImage.src = "./res/img/block.png";

const spikeImage = new Image();
spikeImage.src = "./res/img/spike.png";

const spikeFlipImage = new Image();
spikeFlipImage.src = "./res/img/spike_flip.png";

const lavaImage = new Image();
lavaImage.src = "./res/img/lava.png";

let drawPlatform = () => {
    xBlock = 0;
    yBlock = 0;
    for (let index = 0; index < platfromLevel1.length; index++) {
        if(platfromLevel1[index] == 1){
            p.drawImage(platformImage, xBlock,yBlock,32,32)
        }else if(platfromLevel1[index] == 2){
            p.drawImage(spikeImage, xBlock,yBlock,32,32)
        }else if(platfromLevel1[index] == 3){
            p.drawImage(lavaImage, xBlock,yBlock,32,32)
        }else if(platfromLevel1[index] == 4){
            p.drawImage(spikeFlipImage, xBlock, yBlock, 32, 32)
        }
        if((index + 1) % 32 == 0){
            xBlock = 0;
            yBlock += 32;
        }else{
            xBlock += 32;
        }
            
    }  
}
drawPlatform()

//----------------------------------------Vykreslení hráče

let playerImage = new Image();
playerImage.src = "./res/img/player1_right.png";

playerImage.onload = () => {
    drawPlayer();
};

let drawPlayer = () => {
    c.clearRect(0, 0, canvas.width, canvas.height);
    c.drawImage(playerImage, x, y, width, height);
    deathCollision();
    drawPlatform();
};

//----------------------------------------Death funkce

const dead = () => {
    y = 500;
    x = 10;
    if(crouched == true){
        unCrouch();
    }
}

//----------------------------------------Death kolize

const deathCollision = () => {
    for (let i = 0; i < platfromLevel1.length; i++) {
        if (platfromLevel1[i] == 2) {
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
        if (platfromLevel1[i] == 3) {
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
        if (platfromLevel1[i] == 4) {
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
        for (let i = 0; i < platfromLevel1.length; i++) {
            if (platfromLevel1[i] == 1) {
                let platformX = (i % 32) * 32;
                let platformY = Math.floor(i / 32) * 32;
                if (
                    y + height >= platformY + 64 &&
                    y + height <= platformY + 64 &&
                    x + width >= platformX &&
                    x <= platformX + 32
                ) {
                    //console.log("krčim se")
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
    height /= 2;
    y += height;
    crouched = true;
    drawPlayer();
    aboveHeadCollision()
}

let unCrouch = () => {
    if (canStandUp == true) {
        crouched = false;
        height *= 2;
        y -= height / 2;
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

let gravity = () => {
    if(crouched == true && velocity >= 0.1){
        unCrouch();
    }
    deathCollision();
    drawPlayer();
    velocity += 0.1;
    y += velocity;
    gravityId = window.requestAnimationFrame(gravity);
    for (let i = 0; i < platfromLevel1.length; i++) {
        if (platfromLevel1[i] == 1) {
            let platformX = (i % 32) * 32;
            let platformY = Math.floor(i / 32) * 32;
            if (
                y + height >= platformY &&
                y + height <= platformY + 32 &&
                x + width >= platformX &&
                x <= platformX + 32
            ) {
                //console.log("X: " + platformX);
                //console.log("Y: " + platformY);
                stillJumping = false;
                y = platformY - height;
                velocity = 0;
                cancelAnimationFrame(gravityId);
                break;
            }
        }
    }
    if (canvas.height - height < y) {
        y = canvas.height - height;
        velocity = 0;
        stillJumping = false;
        cancelAnimationFrame(gravityId);
    }
    drawPlatform();
}
gravity();

//----------------------------------------Funkce SKÁKÁNÍ hráče

let jump = () => {
    if(stillJumping == false){
        let headHit = false;
        let velocityJump = 8;
        stillJumping = true;
        const jumping = () => {
            velocityJump = velocityJump/1.11
            y = y - velocityJump;
            drawPlayer();
            drawPlatform()
            //gravityOn = false;
            jumpingId = requestAnimationFrame(jumping);
            for (let i = 0; i < platfromLevel1.length; i++) {
                if (platfromLevel1[i] == 1) {
                    let platformX = (i % 32) * 32;
                    let platformY = Math.floor(i / 32) * 32 + 40;
                    if (
                        y + height >= platformY &&
                        y + height <= platformY + 32 &&
                        x + width >= platformX &&
                        x <= platformX + 32
                    ) {
                        y = platformY - 39 - velocityJump + height;
                        //console.log("Y: " + platformY);
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
                cancelAnimationFrame(jumpingId);
                gravity();
            }
        }
        jumping();
    }
}
//----------------------------------------Funkce hráče CHOZENÍ DO PRAVA

let moveRight = () => {
    playerImage.src = "./res/img/player1_right.png";
    drawPlayer();
    let velocityStart = 0.1;
    const movingRight = () => {
        animationIdRight = requestAnimationFrame(movingRight);
        if(crouched == true && velocityStart >= 1){
            velocityStart = velocityStart - 0.06;
        }else{
            if(isMovingRight == true){
                if(velocityStart <= 2 && crouched == false){
                    velocityStart += 0.06;
                }else if(velocityStart <= 1 && crouched == true){
                    velocityStart += 0.06;
                }
            }else if(isMovingRight == false){
                velocityStart = velocityStart - 0.06;
                if(velocityStart <= 0.1){
                    cancelAnimationFrame(animationIdRight);
                }
            }
        }
        
        for (let i = 0; i < platfromLevel1.length; i++) {
            if (platfromLevel1[i] == 1) {
                let platformX = (i % 32) * 32;
                let platformY = Math.floor(i / 32) * 32;
                if (
                    y + height > platformY &&
                    y < platformY + 32 &&
                    x + width + velocityStart > platformX &&
                    x < platformX + 32
                ) {
                    velocityStart = 0;
                    break;
                }
            }
        }
        x += velocityStart;
        drawPlayer();
        drawPlatform();
        if (x >= canvas.width - width) {
            cancelAnimationFrame(animationIdRight);
            x -= velocityStart;
        }
        if(stillJumping == false){
            stillJumping = true;
            cancelAnimationFrame(gravityId);
            gravity();
        }
    };
    movingRight();
};


//----------------------------------------Funkce hráče CHOZENÍ DO LEVA

let moveLeft = () => {
    playerImage.src = "./res/img/player1_left.png";
    drawPlayer();
    let velocityStart = 0.1;
    const movingLeft = () => {
        animationIdLeft = requestAnimationFrame(movingLeft);
        if(crouched == true && velocityStart >= 1){
            velocityStart = velocityStart - 0.06;
        }else{
            if(isMovingLeft == true){
                if(velocityStart <= 2 && crouched == false){
                    velocityStart += 0.06;
                }else if(velocityStart <= 1 && crouched == true){
                    velocityStart += 0.06;
                }
            }else if(isMovingLeft == false){
                velocityStart = velocityStart - 0.06;
                if(velocityStart <= 0.1){
                    cancelAnimationFrame(animationIdLeft);
                }
            }
        }
        for (let i = 0; i < platfromLevel1.length; i++) {
            if (platfromLevel1[i] == 1) {
                let platformX = (i % 32) * 32;
                let platformY = Math.floor(i / 32) * 32;
                if (
                    y + height > platformY &&
                    y < platformY + 32 &&
                    x - velocityStart < platformX + 32 &&
                    x > platformX
                ) {
                    velocityStart = 0;
                    break;
                }
            }
        }
        x -= velocityStart;
        drawPlayer();
        drawPlatform();
        if (x <= 0) {
            cancelAnimationFrame(animationIdLeft);
            x += velocityStart;
        }
        if(stillJumping == false){
            stillJumping = true;
            cancelAnimationFrame(gravityId);
            gravity();
        }
    };
    movingLeft();
};

//--------------------------Stlačení kláves
let up = "w";
let down = "s";
let right = "d";
let left = "a";

let downPressed = false;

window.addEventListener('keydown', (event) => {
    if (event.key == up && isJumping == false && canStandUp == true) {
        if(crouched == true){
            unCrouch();
        }
        isJumping = true;
        jump();
    } else if (event.key == right && isMovingRight == false) {
        isMovingRight = true;
        cancelAnimationFrame(animationIdRight);
        moveRight();
    } else if (event.key == left && isMovingLeft == false) {
        isMovingLeft = true;
        cancelAnimationFrame(animationIdLeft);
        moveLeft();
    } else if (event.key == down) {
        if(crouched == false && velocity == 0 && stillJumping == false && downPressed == false){
            crouch();
        }
        downPressed = true;
        
    }
});

//--------------------------Pouštění kláves

window.addEventListener('keyup', (event) => {
    if (event.key == right) {
        isMovingRight = false;
    }
    if (event.key == left) {
        isMovingLeft = false;
    }
    if (event.key == up) {
        isJumping = false;
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
});



