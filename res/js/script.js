const canvas = document.getElementById('cnv');
const p = canvas.getContext('2d'); //Platform
const c = canvas.getContext('2d'); //Character
const text = document.getElementById("text");
const wasd = document.getElementById("wasd");
const buttons = document.getElementById("buttons");
const music = document.getElementById("music");
const game = document.getElementById("game");
const background = document.getElementById("background");
const black = document.getElementById("black");
const rising = document.getElementById("rising");
const esc = document.getElementById("esc");
const playButton = document.getElementById("playButton");
const hp = document.getElementById("hp");
const startMenu = document.getElementById("startMenu");
const button_back = document.getElementById("button_back");
const button_resume = document.getElementById("button_resume");
const button_retry = document.getElementById("button_retry");
const button_menu = document.getElementById("button_menu");
const button_enter = document.getElementById("button_enter");
const escape_button = document.getElementById("escape_button");
const hps = document.getElementById("hps");
const heart1 = document.getElementById("heart1");
const heart2 = document.getElementById("heart2");
const heart3 = document.getElementById("heart3");
const youWin = document.getElementById("youWin");

const setVolume = (volume) => {
    if (music) {
      music.volume = volume;
    }
}

setVolume(1);

const deviceDetect = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
if (deviceDetect == true) {
    buttons.style.display = "block";
}

let doorsTime = 0;
let doorTimeout = false;
let setTimeoutDoor;

playButton.onclick = () => {
    drawing();
    playButton.style.animationName = "blink"
    playButton.style.animationPlayState = "running";
    black.style.opacity = "1";
    setTimeout(() => {
        game.style.display = "block";
        startMenu.style.display = "none";
        inGame = true;
        playButton.style.animationName = "none"
        playButton.style.animationPlayState = "none";
        setTimeout(() => {1
            black.style.opacity = "0";
        }, 50)
    }, 800);
}

let x;
let y;

let xGhost = 70000; //700
let yGhost = 310

let spawnCords = () => {
    x = 50;
    y = 500;
}
spawnCords();

let spawnGhostCords = () => {
    xGhost = 10000;
    yGhost = 10000;
}

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

//----------------------------------------DOORS COLLISION in Menu

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
                if(finished[helpNum] == 2){
                    c.fillStyle = "red";
                    c.fillText("LOCKED", platformX + 7, platformY);
                }else{
                    c.fillStyle = "lime";
                    c.fillText("Enter [e]", platformX - 3, platformY);
                }
                if(deviceDetect && inGame){
                    button_enter.style.display = "flex";
                }
                break;
            }
        }
    } 
};

//---------------------------------------- BOSS Collision
let bossX = 1000000;
let bossY = 0;

let canAttack = false;

const bossCollision = () => {
    if (
        y + height >= bossY &&
        y <= bossY + 80 &&
        x + width >= bossX &&
        x <= bossX + 80
    ) {
        canAttack = true;
        if(currentFrameBoss == 6){
            dead();
        }
    } else {
        canAttack = false;
    }
};

let bossVelocity = 1;

let nowBossMoveY;
let thenBossMoveY = Date.now();
let deltaBossMoveY;
let bossMoveYId;

const bossMoveY = () => {
    bossMoveYId = requestAnimationFrame(bossMoveY)
    nowBossMoveY = Date.now();
    deltaBossMoveY  = nowBossMoveY  - thenBossMoveY ;
    if (deltaBossMoveY > interval) {
        thenBossMoveY = nowBossMoveY - (deltaBossMoveY % interval);
        if(y - 30 >= bossY){
            bossY += bossVelocity;
        }else{
            bossY -= bossVelocity;
        }
    }
}

let nowBossMoveX;
let thenBossMoveX = Date.now();
let deltaBossMoveX;
let bossMoveXId;

const bossMoveX = () => {
    bossMoveXId = requestAnimationFrame(bossMoveX)
    nowBossMoveX = Date.now();
    deltaBossMoveX  = nowBossMoveX  - thenBossMoveX ;
    if (deltaBossMoveX > interval) {
        thenBossMoveX = nowBossMoveX - (deltaBossMoveX % interval);
        if(x - 25 > bossX){
            bossX += bossVelocity;
        }else{
            bossX -= bossVelocity;
        }
    }
}

//---------------------------------------Enter Funkce

let entered = false;

window.addEventListener('keydown', (event) => {
    if ((event.key == "e" || event.key == "E") && doorCol && !entered && finished[helpNum] != 2 && inGame) {
        entered = true;
        enterFunction();
    }
})

let breakBottom, bossLava, endBossLava, bossDarkness, endBossDarkness, bossLava2, endBossLava2;

const enterFunction = () => {
    inGame = false;
    black.style.opacity = "1";
    setTimeout(() => {
        inGame = true;
        platformLevel1 = [...map[helpNum]];
        originalPlatform1 = [...platformLevel1];
        black.style.opacity = "0";
        if(helpNum == 0){
            spawnCords = () =>{
                x = 40;
                y = 500;
            }
            spawnCords();
            setVolume(0.6);
            music.src = "./res/music/song0.mp3";
            doorsTime = 23900;
            music.play();
            spawnGhostCords = () =>{
                xGhost = 900;
                yGhost = 500;
            }
            spawnGhostCords();
        }else if(helpNum == 1){
            spawnCords = () =>{
                x = 40;
                y = 500;
            }
            spawnCords();
            setVolume(0.2);
            music.src = "./res/music/song1.mp3";
            doorsTime = 27900;
            music.play();
            spawnGhostCords = () =>{
                xGhost = 400;
                yGhost = 240;
            }
            spawnGhostCords();
        }else if(helpNum == 2){
            spawnCords = () =>{
                x = 20;
                y = 380;
            }
            spawnCords();
            setVolume(0.3);
            darkness = true;
            music.src = "./res/music/song2.mp3";
            doorsTime = 37100;
            music.play();
        }else if(helpNum == 3){
            spawnCords = () =>{
                x = 40;
                y = 500;
            }
            spawnCords();
            setVolume(0.3);
            music.src = "./res/music/song3.mp3";
            doorsTime = 31000;
            music.play();
            spawnGhostCords = () => {
                xGhost = 700;
                yGhost = 310;
            }
            spawnGhostCords();
        }else if(helpNum == 4){
            rising.style.display = "block";
            risingLavaActivated = true;
            spawnCords = () =>{
                x = 512;
                y = 470;
            }
            spawnCords();
            setVolume(0.4);
            music.src = "./res/music/song4.mp3";
            doorsTime = 23000;
            music.play();
        }else if(helpNum == 5){
            spawnCords = () =>{
                x = 20;
                y = 470;
            }
            spawnCords();
            setVolume(0.25);
            music.src = "./res/music/song5.mp3";
            doorsTime = 30000;
            music.play();
            spawnGhostCords = () => {
                xGhost = 400;
                yGhost = 245;
            }
            spawnGhostCords();
        }else if(helpNum == 6){
            spawnCords = () =>{
                x = 500;
                y = 470;
            }
            spawnCords();
            setVolume(0.3);
            music.src = "./res/music/song6.mp3";
            doorsTime = 31000;
            music.play();
        }else if(helpNum == 7){
            spawnCords = () =>{
                x = 20;
                y = 500;
            }
            spawnCords();
            setVolume(0.3);
            darkness = true;
            music.src = "./res/music/song7.mp3";
            doorsTime = 48000;
            music.play();
        }else if(helpNum == 8){
            spawnCords = () =>{
                x = 20;
                y = 400;
            }
            spawnCords();
            setVolume(0.25);
            music.src = "./res/music/song8.mp3";
            doorsTime = 38000;
            music.play();
        }else if(helpNum == 9){
            rising.style.display = "block";
            risingLavaActivated = true;
            spawnCords = () =>{
                x = 20;
                y = 470;
            }
            spawnCords();
            setVolume(0.25);
            music.src = "./res/music/song9.mp3";
            doorsTime = 28000;
            music.play();
        }else if(helpNum == 10){
            spawnCords = () =>{
                x = 20;
                y = 500;
            }
            spawnCords();
            setVolume(0.2);
            music.src = "./res/music/song10.mp3";
            doorsTime = 30000;
            music.play();
            spawnGhostCords = () => {
                xGhost = 650;
                yGhost = 90;
            }
        }else if(helpNum == 11){
            spawnCords = () =>{
                x = 500;
                y = 80;
            }
            spawnCords();
            setVolume(0.4);
            music.src = "./res/music/song11.mp3";
            doorsTime = 36000;
            music.play();
        }else if(helpNum == 12){
            spawnCords = () =>{
                x = 20;
                y = 510;
            }
            spawnCords();
            setVolume(0.3);
            darkness = true;
            music.src = "./res/music/song12.mp3";
            doorsTime = 36000;
            music.play();
            spawnGhostCords = () => {
                xGhost = 400;
                yGhost = 210;
            }
            spawnGhostCords();
        }else if(helpNum == 13){
            spawnCords = () =>{
                x = 40;
                y = 520;
            }
            spawnCords();
            setVolume(0.3);
            music.src = "./res/music/song13.mp3";
            doorsTime = 54000;
            music.play();
            spawnGhostCords = () => {
                xGhost = 700;
                yGhost = 310;
            }
            spawnGhostCords();
        }else if(helpNum == 14){
            bossLevel();
        }
        saveGhostCordsX = xGhost;
        saveGhostCordsY = yGhost;
        setTimeoutDoor = setTimeout(() => {
            doorTimeout = true;
        }, doorsTime);
        entered = false;
        gravity();
            }, 1300);
}

//BOSS LEVEL
const bossLevel = () => {
    generatorAttackFunction();
    gravity();
    spawnCords = () => {
        x = 472;
        y = 210;
    }
    spawnCords();
    hps.style.display = "block";
    heart1.style.display = "block";
    heart2.style.display = "block";
    heart3.style.display = "block";
    hearts = 3;
    bossX = 452;
    bossY = 450;
    playingBossFight = true;
    music.currentTime = 0;
    setVolume(0.5);
    music.src = "./res/music/finalboss.mp3";
    doorsTime = 76200;
    music.play();
    cancelAnimationFrame(bossMoveXId);
    cancelAnimationFrame(bossMoveYId);
    bossMoveY();
    bossMoveX();
    breakBottom = setTimeout(() => {
        for (let index = 0; index < platformLevel1.length; index++) {
            if(platformLevel1[index] == 6){
                platformLevel1[index] = 0;
            }
        }
        shake();
    }, 13000);
    bossLava = setTimeout(() => {
        shake()
        risingLavaActivated = true;
        rising.style.display = "block";
    }, 25000);
    endBossLava = setTimeout(() => {
        shake();
        black.style.transition = "opacity 0s"
        black.style.opacity = 1;
        risingLavaActivated = false;
        lavaY = 576;
        risingPercent = risingPercentOriginal;
        rising.style.bottom = risingPercent + "%"
        rising.style.display = "none";
        setTimeout(() => {
            black.style.transition = "opacity 0.3s"
            black.style.opacity = 0; 
        }, 20);
    }, 36200);
    bossDarkness = setTimeout(() => {
        shake();
        black.style.transition = "opacity 0s"
        black.style.opacity = 1;
        setTimeout(() => {
            black.style.transition = "opacity 0.3s"
            black.style.opacity = 0; 
        }, 20);
        darkness = true;
    }, 43800);
    endBossDarkness = setTimeout(() => {
        shake();
        black.style.transition = "opacity 0s"
        black.style.opacity = 1;
        setTimeout(() => {
            black.style.transition = "opacity 0.3s"
            black.style.opacity = 0; 
        }, 20);
        darkness = false;
    }, 52000);
    bossLava2 = setTimeout(() => {
        shake()
        risingLavaActivated = true;
        rising.style.display = "block";
    }, 61500);
    endBossLava2 = setTimeout(() => {
        shake();
        black.style.transition = "opacity 0s"
        black.style.opacity = 1;
        risingLavaActivated = false;
        lavaY = 576;
        risingPercent = risingPercentOriginal;
        rising.style.bottom = risingPercent + "%"
        rising.style.display = "none";
        setTimeout(() => {
            black.style.transition = "opacity 0.3s"
            black.style.opacity = 0; 
        }, 20);
    }, 76200);
}

//Boss Attack

let bossAttacking = false;
let attackNum = 0;

let bossAttackGenerator;

const generatorAttackFunction = () => {
    bossAttackGenerator = setInterval(() => {
        attackNum = Math.floor(Math.random() * 2)
        if(attackNum == 1 && !bossAttacking){
            bossVelocity = 1.5;
            currentFrameBoss = 0;
            bossAttacking = true;
        }
    }, 500);
}

//----------------------------------------SHAKE funkce

const shake = () => {
    setTimeout(() => {
        canvas.style.top = "50.5%";canvas.style.left = "50.5%";
        background.style.top = "50.5%";background.style.left = "50.5%";
    }, 50);
    setTimeout(() => {
        canvas.style.top = "49.5%";canvas.style.left = "50%";
        background.style.top = "49.5%";background.style.left = "50%";
    }, 100);
    setTimeout(() => {
        canvas.style.top = "50%";canvas.style.left = "50.5%";
        background.style.top = "50%";background.style.left = "50.5%";
    }, 150);
    setTimeout(() => {
        canvas.style.top = "50.5%";canvas.style.left = "49.5%";
        background.style.top = "50.5%";background.style.left = "49.5%";
    }, 200);
    setTimeout(() => {
        canvas.style.top = "50%";canvas.style.left = "50%";
        background.style.top = "50%";background.style.left = "50%";
    }, 250);
}

//----------------------------------------Death funkce

let playingBossFight = false;
let hearts = 3;

let resistence = false;

const dead = () => {
    if(!playingBossFight){
        if(yGhost < 2000 && xGhost < 2000){ 
            spawnGhostCords();
        }
        if(ghostKilled){
            spawnGhostCords = () => {
                xGhost = saveGhostCordsX;
                yGhost = saveGhostCordsY;
            }
            ghostKilled = false;
            spawnGhostCords();
        }
        frameSpike = 0;
        frameLava = 0;
        music.currentTime = 0;
        clearTimeout(setTimeoutDoor)
        setTimeoutDoor = setTimeout(() => {
            doorTimeout = true;
        }, doorsTime);
        spawnCords();
        unCrouch();
        platformLevel1 = [...originalPlatform1];
        drawPlatform();
        dark();
        if(risingLavaActivated){
            lavaY = 576;
            risingPercent = risingPercentOriginal;
            rising.style.bottom = risingPercent + "%"
        }
        if(frameDoor == 3){
            shake();
            doorTimeout = false;
            frameDoor = 0;
        }
    }else{
        if(!resistence || frameDoor == 3 || usedRetry){
            if(hearts == 3){
                heart3.style.display = "none";
            }else if(hearts == 2){
                heart2.style.display = "none";
            }else if(hearts == 1){
                heart1.style.display = "none";
            }
            resistence = true;
            hearts--;
            if(hearts == 0 || frameDoor == 3 || usedRetry){
                clearInterval(bossAttackGenerator);
                if(usedRetry){
                    usedRetry = false;
                }
                cancelAnimationFrame(bossMoveXId);
                cancelAnimationFrame(bossMoveYId);
                clearTimeout(setTimeoutDoor)
                setTimeoutDoor = setTimeout(() => {
                    doorTimeout = true;
                }, doorsTime);
                currentFrameBoss = 0;
                bossAttacking = false;
                currentHp = 100;
                hp.style.width = currentHp + "%";
                platformLevel1 = [...map[14]]
                risingLavaActivated = false;
                lavaY = 576;
                risingPercent = risingPercentOriginal;
                rising.style.bottom = risingPercent + "%"
                rising.style.display = "none";
                darkness = false;
                heart1.style.display = "block";
                heart2.style.display = "block";
                heart3.style.display = "block";
                hearts = 3;
                clearTimeout(breakBottom);
                clearTimeout(bossLava);
                clearTimeout(bossLava2)
                clearTimeout(endBossLava);
                clearTimeout(endBossLava2);
                clearTimeout(bossDarkness);
                clearTimeout(endBossDarkness);
                bossLevel();
            }
            setTimeout(() => {
                resistence = false
            }, 2000);
            spawnCords();
        }
        if(frameDoor == 3){
            doorTimeout = false;
            frameDoor = 0;
        }
    }
    gravity();
}

//---------------------------------------- ESCButtons

let backToLobbyEntered = false;

const backToLobby = () => {
    clearInterval(bossAttackGenerator);
    clearTimeout(breakBottom);
    clearTimeout(bossLava);
    clearTimeout(bossLava2)
    clearTimeout(endBossLava);
    clearTimeout(endBossLava2);
    clearTimeout(bossDarkness);
    clearTimeout(endBossDarkness);
    clearTimeout(setTimeoutDoor);
    cancelAnimationFrame(bossMoveXId);
    cancelAnimationFrame(bossMoveYId);
    hps.style.display = "none";
    hearts = 3;
    heart1.style.display = "block";
    heart2.style.display = "block";
    heart3.style.display = "block";
    currentHp = 100;
    hp.style.width = currentHp + "%";
    music.pause();
    music.currentTime = 0;
    inGame = false;
    black.style.opacity = "1";
    esc.style.display = "none"; 
    escShowed = false;
    setTimeout(() => {
        if(playingBossFight){
            lives = 3;
            playingBossFight = false;
            bossX = 1000000;
            bossY = 0;
        }
        risingLavaActivated = false;
        lavaY = 576;
        risingPercent = risingPercentOriginal;
        rising.style.bottom = risingPercentOriginal + "%"
        rising.style.display = "none";
        darkness = false;
        inGame = true;
        platformLevel1 = [...lobby];
        black.style.opacity = "0";
        spawnGhostCords = () => {
            xGhost = 20000;
            yGhost = 20000;
        }
        spawnGhostCords();
        if(helpNum == 0){
            x = 120;
            y = 500;
        }else if(helpNum == 1){
            x = 300;
            y = 410
        }else if(helpNum == 2){
            x = 560;
            y = 370
        }else if(helpNum == 3){
            x = 720;
            y = 500
        }else if(helpNum == 4){
            x = 910;
            y = 400
        }else if(helpNum == 5){
            x = 880;
            y = 300;
        }else if(helpNum == 6){
            x = 582;
            y = 290;
        }else if(helpNum == 7){
            x = 400;
            y = 300;
        }else if(helpNum == 8){
            x = 220;
            y = 300;
        }else if(helpNum == 9){
            x = 20;
            y = 260;
        }else if(helpNum == 10){
            x = 20;
            y = 80;
        }else if(helpNum == 11){
            x = 240;
            y = 80;
        }else if(helpNum == 12){
            x = 560;
            y = 50;
        }else if(helpNum == 13){
            x = 880;
            y = 200;
        }else if(helpNum == 14){
            x = 920;
            y = 80;
        }
        
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

let usedRetry = false;

button_retry.onclick = () => {
    usedRetry = true;
    esc.style.display = "none"; 
    escShowed = false;
    black.style.opacity = "0";
    dead();
}


//----------------------------------------ESC Button Funkce

const escFunction = () => {
    youWin.style.display = "none";
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

//----------------------------------------Finished level

let finished = new Array (15)

for (let index = 0; index < finished.length; index++) {
    finished[index] = 2;
}
finished[0] = 0;

//----------------------------------------UNLOCK ALL DOORS FUNCTION

let allUnclocked = false;

const unlockAll = () => {
    for (let index = 0; index < finished.length; index++) {
        if(finished[index] != 1){
            finished[index] = 0;
        }
    }
}

window.addEventListener('keydown', (event) => {
    if (event.key == "Delete" && allUnclocked == false && inGame == true) {
        allUnclocked = true;
        unlockAll();
    }
})

//---------------------------------------- OBJECTS Collision

const objectsCollision = () => {
    if(playingBossFight){
        bossCollision();
    }
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
                if(playingBossFight){
                    resistence = false;
                }
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
                y + height >= platformY &&
                y + height <= platformY + 64 &&
                x + width >= platformX + 24 &&
                x <= platformX + 40
            ) {
                if(!backToLobbyEntered){
                    finished[helpNum] = 1;
                    if(finished[helpNum + 1] != 1){
                        finished[helpNum + 1] = 0;
                    }
                    backToLobby();
                    backToLobbyEntered = true;
                }
            }
        }
        if (platformLevel1[i] == 31) {
            let platformX = (i % 32) * 32;
            let platformY = Math.floor(i / 32) * 32;
            if (
                y + height >= platformY &&
                y + height <= platformY + 64 &&
                x + width >= platformX &&
                x <= platformX + 32
            ) {
                platformLevel1[i] = 0;
                for (let index = 0; index < platformLevel1.length; index++) {
                    if(platformLevel1[index] == 32 || platformLevel1[index] == 33){
                        platformLevel1[index] = 0;
                    }
                }
            }
        }
    }
}

//---------------------------------------- ORB Collision
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

//---------------------------------------- GHOST Collision

let ghostKilled = false;
let bounced = false;
let saveGhostCordsX = 0;
let saveGhostCordsY = 0;

const ghostCollision = () => {
    if(
        y + height > yGhost &&
        y < yGhost + 32 &&
        x + width > xGhost + 10 &&
        x < xGhost + 20
    ){
        dead();
    } else if (
        y + height > yGhost - 20 &&
        y < yGhost + 32 &&
        x + width > xGhost + 10 &&
        x < xGhost + 20
    ){
        spawnGhostCords = () => {
            xGhost = 10000;
            yGhost = 10000;
        }
        ghostKilled = true;
        bounced = true;
        spawnGhostCords();
        jump()
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
            if (platformLevel1[i] == 1 || platformLevel1[i] == 6 || platformLevel1[i] == 7 || platformLevel1[i] == 9 || platformLevel1[i] == 18 || platformLevel1[i] == 19 || platformLevel1[i] == 32 || platformLevel1[i] == 33) {
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
    aboveHeadCollision()
}

let unCrouch = () => {
    if (canStandUp == true) {
        height = 40;
        y -= 20;
        crouched = false;
        cancelAnimationFrame(gravityId);
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
        if (platformLevel1[i] == 1 || platformLevel1[i] == 6 || platformLevel1[i] == 7 || platformLevel1[i] == 9 || platformLevel1[i] == 18 || platformLevel1[i] == 19 || platformLevel1[i] == 32 || platformLevel1[i] == 33) {
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
            if (platformLevel1[i] == 1 || platformLevel1[i] == 6 || platformLevel1[i] == 7 || platformLevel1[i] == 9 || platformLevel1[i] == 18 || platformLevel1[i] == 19 || platformLevel1[i] == 32 || platformLevel1[i] == 33) {
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
    if(velocityJump < 0.1){
        gravityId = requestAnimationFrame(gravity);
        nowDown = Date.now();
        deltaDown = nowDown - thenDown;
        if (deltaDown > interval) {
            thenDown = nowDown - (deltaDown % interval);
            if(crouched == true && velocity > 1){
                unCrouch();
            }
            orbCollision();
            velocity += 0.3;
            y += velocity;
            bottomCollision(); //Podmínka
        }
    } 
}

gravity();

//----------------------------------------Funkce SKÁKÁNÍ hráče

let headHit;

let nowUp;
let thenUp = Date.now();
let deltaUp;

let jump = () => {
    if((stillJumping == false || canOrbJump == true && orbUsed == false) && ladderCol == false || bounced){
        bounced = false;
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
                cancelAnimationFrame(gravityId);
                gravity();
            }else{
                if(isMovingRight == true){
                    if(velocityRight < 4 && crouched == false){
                        velocityRight += 0.12;
                    }else if(velocityRight < 1 && crouched == true){
                        velocityRight += 0.12;
                        cancelAnimationFrame(gravityId);
                        gravity();
                    }else if(velocityRight + 0.12 >= 4){
                        velocityRight = 4;
                    }
                }else if(isMovingRight == false){
                    velocityRight -= 0.2;
                    if(velocityRight <= 0.1){
                        cancelAnimationFrame(animationIdRight);
                    }
                }
            }
            for (let i = 0; i < platformLevel1.length; i++) {
                if (platformLevel1[i] == 1 || platformLevel1[i] == 6 || platformLevel1[i] == 7 || platformLevel1[i] == 9 || platformLevel1[i] == 18 || platformLevel1[i] == 19 || platformLevel1[i] == 32 || platformLevel1[i] == 33) {
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
                    cancelAnimationFrame(gravityId);
                    gravity();
                }
            }else{
                if(isMovingLeft == true){
                    if(velocityLeft < 4 && crouched == false){
                        velocityLeft += 0.12;
                    }else if(velocityLeft <= 1 && crouched == true){
                        velocityLeft += 0.12;
                        cancelAnimationFrame(gravityId);
                        gravity();
                    }else if(velocityLeft + 0.12 >= 4){
                        velocityLeft = 4;
                    }
                }else if(isMovingLeft == false){
                    velocityLeft -= 0.2;
                    if(velocityLeft <= 0.1){
                        cancelAnimationFrame(animationIdLeft);
                    }
                }
            }
            for (let i = 0; i < platformLevel1.length; i++) {
                if (platformLevel1[i] == 1 || platformLevel1[i] == 6 || platformLevel1[i] == 7 || platformLevel1[i] == 9 || platformLevel1[i] == 18 || platformLevel1[i] == 19 || platformLevel1[i] == 32 || platformLevel1[i] == 33) {
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

let currentHp = 100;

const punch = () => {  
    if(!crouched && !punchCooldown){
        punchCooldown = true;
        punched = true;
        if(canAttack){
            currentHp -= 5.5566;
            hp.style.width = currentHp + "%";
            if(currentHp <= 0 && !backToLobbyEntered){
                clearTimeout(setTimeoutDoor);
                music.pause();
                backToLobby();
                backToLobbyEntered = true;
                finished[helpNum] = 1;
            }
        }else{
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
    if ((event.key == up || event.key == UP) && isJumping == false && canStandUp == true && inGame) {
        currentFrame = 0;
        isJumping = true;
        if(ladderCol == true){
            goingUp();
        }else{
            jump();
        }
    } else if ((event.key == right || event.key == RIGHT) && isMovingRight == false && inGame) {
        currentFrame = 0;
        isMovingRight = true;
        turnedRight = true;
        turnedLeft = false;
        cancelAnimationFrame(animationIdRight);
        moveRight();
    } else if ((event.key == left || event.key == LEFT) && isMovingLeft == false && inGame) {
        currentFrame = 0;
        isMovingLeft = true;
        turnedRight = false;
        turnedLeft = true;
        cancelAnimationFrame(animationIdLeft);
        moveLeft();
    } else if ((event.key == down || event.key == DOWN) && !punched) {
        if(crouched == false && stillJumping == false && downPressed == false && ladderCol == false && inGame){
            crouch();
            currentFrame = 0;            
        } else if (ladderCol && !alreadyGoingDown){
            goingDown();
        }
        downPressed = true;
    } else if (event.key == space) {
        if(!alreadyPunched && !ladderCol && inGame){
            punch();
        }
        alreadyPunched = true;
    } else if (event.key == "Escape" && inGame) {
        escFunction();
    }
});

//--------------------------Pouštění kláves

window.addEventListener('keyup', (event) => {
    if (event.key == up || event.key == UP && inGame) {
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
    if (event.key == space && inGame) {
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