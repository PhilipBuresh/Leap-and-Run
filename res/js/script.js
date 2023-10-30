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
let jumpingId;
let animationIdRight;
let animationIdLeft;

let isJumping = false;
let gravityOn = false;
let isMovingRight = false;
let isMovingLeft = false;

let turnedRight = false;
let turnedLeft = false;

let fps = 60;
let interval = 1000/fps;
let now;
let then = Date.now();
let delta;

//Lokace platform
//                      1  2  3  4  5  6  7  8  9 10 11 12 13 14 15 16 17 18 19 20 21 22 23 24 25 26 27 28 29 30 31 32
let platformLevel1 =    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
                        1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 4, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
                        1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
                        1, 0, 0, 0, 0, 0, 4, 0, 0, 0, 0, 0, 0, 0, 6, 0, 0, 1, 1, 1, 1, 3, 1, 0, 0, 0, 2, 0, 0, 1, 1, 1,  
                        1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 1, 3, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 2, 0, 0, 1, 0, 0, 1, 1, 1,
                        1, 0, 0, 0, 0, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 1, 0, 1, 1, 1, 1,
                        1, 1, 0, 0, 0, 1, 4, 0, 0, 0, 0, 0, 6, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1,
                        1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 6, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1,
                        1, 0, 0, 0, 1, 1, 0, 0, 0, 0, 1, 0, 1, 1, 1, 1, 0, 0, 0, 1, 2, 0, 0, 0, 0, 1, 0, 0, 0, 1, 1, 1,
                        1, 0, 0, 0, 0, 0, 0, 2, 1, 3, 1, 0, 4, 4, 4, 1, 3, 3, 3, 1, 1, 1, 1, 0, 1, 1, 0, 0, 0, 0, 4, 1,
                        1, 1, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 1, 0, 1, 1, 1, 0, 0, 0, 0, 1,
                        1, 1, 3, 1, 2, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1,
                        1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 4, 0, 0, 6, 0, 0, 0, 0, 0, 0, 1, 1, 1,
                        1, 1, 1, 1, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 0, 0, 0, 0, 0, 6, 0, 0, 0, 0, 5, 0, 0, 0, 1,
                        1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1,
                        0, 0, 0, 0, 0, 0, 0, 2, 0, 5, 0, 1, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 1,
                        0, 0, 0, 0, 0, 0, 2, 1, 3, 3, 3, 1, 3, 3, 1, 1, 1, 1, 3, 1, 1, 2, 1, 2, 1, 3, 3, 3, 3, 3, 3, 1,
                        1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
//1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1
//0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,

const originalPlatform1 = [...platformLevel1];

//----------------------------------------Vykreslení platform a překážek

const platformImage = new Image();
platformImage.src = "./res/img/block.png";

const spikeImage = new Image();
spikeImage.src = "./res/img/spike.png";

const spikeFlipImage = new Image();
spikeFlipImage.src = "./res/img/spike_flip.png";

const lavaImage = new Image();
lavaImage.src = "./res/img/lava.png";

const orbImage = new Image();
orbImage.src = "./res/img/orb.png";

const crackedImage = new Image();
crackedImage.src = "./res/img/cracked.png";

let drawPlatform = () => {
    xBlock = 0;
    yBlock = 0;
    for (let index = 0; index < platformLevel1.length; index++) {
        if(platformLevel1[index] == 1){
            p.drawImage(platformImage, xBlock,yBlock,32,32)
        }else if(platformLevel1[index] == 2){
            p.drawImage(spikeImage, xBlock,yBlock,32,32)
        }else if(platformLevel1[index] == 3){
            p.drawImage(lavaImage, xBlock,yBlock,32,32)
        }else if(platformLevel1[index] == 4){
            p.drawImage(spikeFlipImage, xBlock, yBlock, 32, 32)
        }else if(platformLevel1[index] == 5){
            p.drawImage(orbImage, xBlock, yBlock, 32, 32)
        }else if(platformLevel1[index] == 6){
            p.drawImage(crackedImage, xBlock, yBlock, 32, 32)
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
    objectsCollision();
    orbCollision();
    drawPlatform();
};

//----------------------------------------Death funkce

const dead = () => {
    y = 500;
    x = 10;
    if(crouched == true){
        unCrouch();
    }
    platformLevel1 = [...originalPlatform1];
    drawPlatform();
}

//----------------------------------------Kolize OBJEKTŮ

const objectsCollision = () => {
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

//----------------------------------------Skrčení/Postavení hráče

let crouched = false;
let canStandUp = true;
let ahCollision;
let underCollision;

let aboveHeadCollision = () => {
    ahCollision = requestAnimationFrame(aboveHeadCollision);
    if (crouched == true) {
        for (let i = 0; i < platformLevel1.length; i++) {
            if (platformLevel1[i] == 1 || platformLevel1[i] == 6) {
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
let nowDown;
let thenDown = Date.now();
let deltaDown;

let gravity = () => {
    gravityId = requestAnimationFrame(gravity);
    nowDown = Date.now();
    deltaDown = nowDown - thenDown;
    if (deltaDown > interval) {
        thenDown = nowDown - (deltaDown % interval);
        if(crouched == true && velocity >= 0.1){
            unCrouch();
        }
        objectsCollision();
        orbCollision();
        drawPlayer();
        velocity += 0.3;
        y += velocity;
        for (let i = 0; i < platformLevel1.length; i++) {
            if (platformLevel1[i] == 1 || platformLevel1[i] == 6) {
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

let velocityJump
let nowUp;
let thenUp = Date.now();
let deltaUp;

let jump = () => {
    if(stillJumping == false || canOrbJump == true && orbUsed == false){
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
                y = y - velocityJump;
                drawPlayer();
                drawPlatform()
                for (let i = 0; i < platformLevel1.length; i++) {
                    if (platformLevel1[i] == 1 || platformLevel1[i] == 6) {
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
    turnedRight = true;
    turnedLeft = false;
    playerImage.src = "./res/img/player1_right.png";
    drawPlayer();
    velocityRight = 0.2;
    const movingRight = () => {
        animationIdRight = requestAnimationFrame(movingRight);
        nowRight = Date.now();
        deltaRight = nowRight - thenRight;
        if (deltaRight > interval) {
            thenRight = nowRight - (deltaRight % interval);
            if(crouched == true && velocityRight >= 1){
                velocityRight -= 0.12;
            }else{
                if(isMovingRight == true){
                    if(velocityRight <= 4 && crouched == false){
                        velocityRight += 0.12;
                    }else if(velocityRight <= 1 && crouched == true){
                        velocityRight += 0.12;
                    }
                }else if(isMovingRight == false){
                    velocityRight -= 0.2;
                    if(velocityRight <= 0.1){
                        cancelAnimationFrame(animationIdRight);
                    }
                }
            }
            for (let i = 0; i < platformLevel1.length; i++) {
                if (platformLevel1[i] == 1 || platformLevel1[i] == 6) {
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
            drawPlayer();
            drawPlatform();
            if (x >= canvas.width - width) {
                cancelAnimationFrame(animationIdRight);
                x -= velocityRight;
            }
            if(stillJumping == false){
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
    turnedLeft = true;
    turnedRight = false;
    playerImage.src = "./res/img/player1_left.png";
    drawPlayer();
    velocityLeft = 0.2;
    const movingLeft = () => {
        animationIdLeft = requestAnimationFrame(movingLeft);
        nowLeft = Date.now();
        deltaLeft = nowLeft - thenLeft;
        if (deltaLeft > interval) {
            thenLeft = nowLeft - (deltaLeft % interval);
            if(crouched == true && velocityLeft >= 1){
                velocityLeft -= 0.12;
            }else{
                if(isMovingLeft == true){
                    if(velocityLeft <= 4 && crouched == false){
                        velocityLeft += 0.12;
                    }else if(velocityLeft <= 1 && crouched == true){
                        velocityLeft += 0.12;
                    }
                }else if(isMovingLeft == false){
                    velocityLeft -= 0.2;
                    if(velocityLeft <= 0.1){
                        cancelAnimationFrame(animationIdLeft);
                    }
                }
            }
            for (let i = 0; i < platformLevel1.length; i++) {
                if (platformLevel1[i] == 1 || platformLevel1[i] == 6) {
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
            drawPlayer();
            drawPlatform();
            if (x <= 0) {
                cancelAnimationFrame(animationIdLeft);
                x += velocityLeft;
            }
            if(stillJumping == false){
                stillJumping = true;
                cancelAnimationFrame(gravityId);
                gravity();
            }
        }
    };
    movingLeft();
};

//--------------------------Attack/Níčení funkce

const attack = () => {
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
                drawPlayer();
                gravity();
            } else if (
                y + height > platformY &&
                y < platformY + 32 &&
                x < platformX + 42 &&
                x > platformX + 32 && turnedLeft
            ) {
                platformLevel1[i] = 0;
                drawPlayer();
                gravity();
            }
        }
    }
}


//--------------------------Stlačení kláves
let up = "w";
let down = "s";
let right = "d";
let left = "a";
let space = " ";
 
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
    } else if (event.key == space) {
        attack();
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



