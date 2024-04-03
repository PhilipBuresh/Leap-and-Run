const canvas = document.getElementById("canvas");
const canvas_container = document.getElementById("canvas_container");
const container = document.getElementById("container");
const c = canvas.getContext("2d");
const text = document.getElementById("text");
const characters = document.getElementById("characters");
const man = document.getElementById("man");
const woman = document.getElementById("woman");
const music = document.getElementById("music");
const timer = document.getElementById("timer");
const sfx = document.getElementById("sfx");
const sfx_land = document.getElementById("sfx_land");
const sfx_miss = document.getElementById("sfx_miss");
const sfx_climb = document.getElementById("sfx_climb");
const sfx_dead = document.getElementById("sfx_dead");
const sfx_player = document.getElementById("sfx_player");
const sfx_walk = document.getElementById("sfx_walk"); 
const sfx_jump = document.getElementById("sfx_jump");
const sfx_punch = document.getElementById("sfx_punch");
const sfx_extra_jump = document.getElementById("sfx_extra_jump");
const sfx_boss_talk = document.getElementById("sfx_boss_talk");
const sfx_boss_laugh = document.getElementById("sfx_boss_laugh");
const game = document.getElementById("game");
const background = document.getElementById("background");
const black = document.getElementById("black");
const fullBlack = document.getElementById("fullBlack");
const paper = document.getElementById("paper");
const recommend = document.getElementById("recommend");
const credits_list = document.getElementById("credits_list");
const transition1 = document.getElementById("transition1");
const transition2 = document.getElementById("transition2");
const scene = document.getElementById("scene");
const rising = document.getElementById("rising");
const esc = document.getElementById("esc");
const playButton = document.getElementById("playButton");
const tutorialButton = document.getElementById("tutorialButton");
const creditsButton = document.getElementById("creditsButton");
const hp = document.getElementById("hp");
const myHp = document.getElementById("myHp");
const startMenu = document.getElementById("startMenu");
const button_back = document.getElementById("button_back");
const button_resume = document.getElementById("button_resume");
const button_retry = document.getElementById("button_retry");
const button_menu = document.getElementById("button_menu");
const escape_button = document.getElementById("escape_button");
const hps = document.getElementById("hps");
const heart1 = document.getElementById("heart1");
const heart2 = document.getElementById("heart2");
const heart3 = document.getElementById("heart3");
const invertArrow1 = document.getElementById("invert_arrow1");
const invertArrow2 = document.getElementById("invert_arrow2");
const notInvertArrow1 = document.getElementById("not_invert_arrow1");
const notInvertArrow2 = document.getElementById("not_invert_arrow2");
const music_value = document.getElementById("music_value");
const sfx_value = document.getElementById("sfx_value");
const note_button = document.getElementById("note_button");
const music_editor = document.getElementById("music_editor");
const music_editor_back = document.getElementById("music_editor_back");

let helpNum = 0; //Help Number for level detection (doors)

//Setting default volume
let musicVolume = 0.5;
let sfxVolume = 0.5; 
let currentMusicValue = 50;
let currentSfxValue = 50;

//Adjust Music Volume
const setMusicVolume = () => {
    music.volume = musicVolume;
}

//Adjust SFX volume
const setSfxVolume = () => {
    sfx.volume = sfxVolume;
    sfx_dead.volume = sfxVolume;
    sfx_player.volume = sfxVolume;
    sfx_walk.volume = sfxVolume;
    sfx_climb.volume = sfxVolume;
    sfx_miss.volume = sfxVolume;
    sfx_jump.volume = sfxVolume;
    sfx_punch.volume = sfxVolume;
    sfx_extra_jump.volume = sfxVolume;
    sfx_boss_talk.volume = sfxVolume;
    sfx_boss_laugh.volume = sfxVolume;
    sfx_land.volume = sfxVolume;
    scene.volume = sfxVolume;
}

setMusicVolume();
setSfxVolume();

//Turn Music UP by 5%
notInvertArrow1.onclick = () => {
    if(currentMusicValue >= 0 && currentMusicValue < 100){
        musicVolume += 0.05
        currentMusicValue += 5;
        music_value.innerHTML = currentMusicValue + "%";
        setMusicVolume(musicVolume);
    }
}
//Turn SFX UP by 5%
notInvertArrow2.onclick = () => {
    if(currentSfxValue >= 0 && currentSfxValue < 100){
        sfxVolume += 0.05
        currentSfxValue += 5;
        sfx_value.innerHTML = currentSfxValue + "%";
        setSfxVolume(sfxVolume);
    }
}
//Turn Music DOWN by 5%
invertArrow1.onclick = () => {
    if(currentMusicValue > 0 && currentMusicValue <= 100){
        musicVolume -= 0.05
        currentMusicValue -= 5;
        music_value.innerHTML = currentMusicValue + "%";
        setMusicVolume(musicVolume);
    }
}
//Turn SFX DOWN by 5%
invertArrow2.onclick = () => {
    if(currentSfxValue > 0 && currentSfxValue <= 100){
        sfxVolume -= 0.05
        currentSfxValue -= 5;
        sfx_value.innerHTML = currentSfxValue + "%";
        setSfxVolume(sfxVolume);
    }
}

let musicEditorOpened = false;

//Note Button -> Will open Music Editor
note_button.onclick = () => {
    if(inGame && !escShowed){
        if(musicEditorOpened){
            music_editor.style.display = "none";
            musicEditorOpened = false;
            black.style.opacity = "0";
        }else{
            music_editor.style.display = "flex";
            musicEditorOpened = true;
            black.style.opacity = "0.6";
        }
    }
}

//Music Editor -> You can here adjust volume of Music or SFX by yourself
music_editor_back.onclick = () => {
    if(musicEditorOpened){
        music_editor.style.display = "none";
        musicEditorOpened = false;
        black.style.opacity = "0";
    }
}

let transitionY = 576
let transitionX = 1024

const resizeTimer = () => {
    let widthCalculator = window.innerWidth;
    let newSize = widthCalculator * 0.02; // Pravidlo pro zmenšení/zvětšení textu můžete upravit podle potřeby
    timer.style.fontSize = newSize + "px";
}

resizeTimer();

let seconds = 0

let timerInterval;
let colorInterval;
let secondsInterval;

const timerFunction = () => {
    timer.style.top = "3%";
    seconds = timeNow;
    timer.innerHTML = `Time: ${seconds}s`
    timerInterval = setInterval(() => {
        seconds--
        timer.innerHTML = `Time: ${seconds}s`
        if(seconds == 9){
            notEnoughTime();
        }else if(seconds == 0){
            clearInterval(timerInterval)
        }
    }, 1000);
}

let colorIntervalNumber = 1;

const notEnoughTime = () => {
    colorIntervalNumber = 1;
    colorInterval = setInterval(() => {
        colorIntervalNumber++;
        if(colorIntervalNumber % 2 == 0){
            timer.style.backgroundColor = "rgb(143, 19, 19)"
            timer.style.padding = "2px 10px";
        }else{
            timer.style.backgroundColor = "rgb(45, 3, 3)"
            timer.style.padding = "2px 5px";
        }
    }, 300);
}

const restartTimer = () => {
    seconds = 0
    timer.style.backgroundColor = "rgb(45, 3, 3)"
    clearInterval(colorInterval)
    clearInterval(timerInterval)
}

window.onresize = function() {
    resizeTimer()
};

//Adjusts the position of the transition on you
const setTransitionCords = () => {
    transitionY = (y / 576) * 100 + 3;
    transitionX = (x / 1024) * 100 + 2;
    transition1.style.top = transitionY + "%";
    transition1.style.left = transitionX + "%";
    transition2.style.top = transitionY + "%";
    transition2.style.left = transitionX + "%";
}

let doorsTime = 0;
let doorTimeout = false;
let setTimeoutDoor;

//Play Button
playButton.onclick = () => {
    playButton.style.animationName = "blink"
    playButton.style.animationPlayState = "running";
    black.style.opacity = "1";
    tutorialButton.style.opacity = "0%";
    tutorialButton.style.pointerEvents = "none";
    characters.style.display = "block";
    characters.style.animationName = "bottomToMid"
    characters.style.animationPlayState = "running";
    playButton.style.pointerEvents = "none";
    tutorialButton.style.pointerEvents = "none";
    creditsButton.style.display = "none";
    text.style.opacity = "0";
    setTimeout(() => {
        tutorialBtnSliding = false;
        tutorialBtnShowed = true;
    }, 1000);
}

let tutorialBtnShowed = false;
let tutorialBtnSliding = false;

//Tutorial Button -> Will show you Tutorial Paper
tutorialButton.onclick = () => {
    tutorialBtnSliding = true;
    paper.style.display = "block";
    paper.style.animationName = "rightToMid"
    paper.style.animationPlayState = "running";
    playButton.style.pointerEvents = "none";
    tutorialButton.style.pointerEvents = "none";
    creditsButton.style.pointerEvents = "none";
    setTimeout(() => {
        tutorialBtnSliding = false;
        tutorialBtnShowed = true;
    }, 1000);
}

//Tutorial Paper will dissapear
paper.onclick = () => {
    if(tutorialBtnShowed){
        tutorialBtnSliding = true;
        paper.style.display = "block";
        paper.style.animationName = "midToLeft"
        paper.style.animationPlayState = "running";
        setTimeout(() => {
            tutorialBtnSliding = false;
            tutorialBtnShowed = false;
            playButton.style.pointerEvents = "auto";
            tutorialButton.style.pointerEvents = "auto";
            creditsButton.style.pointerEvents = "auto";
        }, 1000);
    }
}

//Credit Button
creditsButton.onclick = () => {
    credits_list.style.display = "block";
    recommend.style.display = "none";
}
//Credits List
credits_list.onclick = () => {
    credits_list.style.display = "none";
    recommend.style.display = "block";
}

//This function will send you to the game
const menuToLobby = () => {
    music.src = "./res/music/lobby_music.mp3";
    music.play();
    game.style.display = "block";
    startMenu.style.display = "none";
    inGame = true;
    playButton.style.animationName = "none"
    playButton.style.animationPlayState = "none";
    setTimeout(() => {
        black.style.opacity = "0";
    }, 50)
}

//Player COORDINATES
let x;
let y;

//Ghost COORDINATES
let xGhost = 70000;
let yGhost = 310

//This will spawn you
let spawnCords = () => {
    x = 50;
    y = 500;
}
spawnCords();

//This will spawn the Ghost
let spawnGhostCords = () => {
    xGhost = 10000;
    yGhost = 10000;
}

let player;
let playingAsRioter;
let playingAsRuby;

man.onclick = () => { //Choosing Character - Rioter
    characters.style.display = "none";
    player =  "./res/img/rioter.png";
    heart1.src = "./res/img/heart_rioter.png";
    heart2.src = "./res/img/heart_rioter.png";
    heart3.src = "./res/img/heart_rioter.png";
    playingAsRioter = true;
    playingAsRuby = false;
    movingCharactersAndFullBlack();
}
woman.onclick = () => { //Choosing Character - Ruby
    characters.style.display = "none";
    player =  "./res/img/ruby.png";
    heart1.src = "./res/img/heart_ruby.png";
    heart2.src = "./res/img/heart_ruby.png";
    heart3.src = "./res/img/heart_ruby.png";
    playingAsRioter = false;
    playingAsRuby = true;
    movingCharactersAndFullBlack();
}

//If you choose a character -> Transition will be activated and you will be send to the game by function menuToLobby()
const movingCharactersAndFullBlack = () => {
    characters.style.display = "block";
    characters.style.animationName = "midToBottom"
    characters.style.animationPlayState = "running";
    fullBlack.style.display = "block";
    playButton.style.display = "none";
    note_button.style.zIndex = "3";
    escape_button.style.zIndex = "3";
    setTimeout(() => {
        fullBlack.style.opacity = "1";
    }, 10);
    setTimeout(() => {
        characters.style.display = "none";
        menuToLobby();
        drawing();
        fullBlack.style.opacity = "0";
        setTimeout(() => {
            note_button.style.zIndex = "11";
            escape_button.style.zIndex = "11";
        }, 800);
    }, 1000);
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

let lobbyDoorCol = false; //Help for sfx door
let finalDoorUnlocked = true; //Can let you go to the Final Door while is boss dead
let doorCol = false;

//This Function will show you, if you can enter to the level 
const doorsCollision = () => {
    lobbyDoorCol = false;
    doorCol = false;
    for (let i = 0; i < platformLevel1.length; i++) {
        if (platformLevel1[i] >= 50 && platformLevel1[i] <= 64 || platformLevel1[i] == 34) {
            let platformX = (i % 32) * 32;
            let platformY = Math.floor(i / 32) * 32;
            if (
                y + height >= platformY &&
                y + height <= platformY + 64 &&
                x + width >= platformX + 24 &&
                x <= platformX + 40
            ) {
                if(platformLevel1[i] == 34 && frameDoorFinal == 0){
                    helpNum = 15;
                }else if(platformLevel1[i] != 34 && inGame){
                    helpNum = platformLevel1[i] - 50;
                    lobbyDoorCol = true;
                }
                doorCol = true;
                c.font = "20px VT323, monospace";
                if(finished[helpNum] == 2 || !finalDoorUnlocked){
                    c.fillStyle = "red";
                    c.fillText("LOCKED", platformX + 7, platformY);
                }else{
                    c.fillStyle = "lime";
                    c.fillText("Enter [e]", platformX - 3, platformY);
                }
                break;
            }
        }
    } 
}

//---------------------------------------- BOSS Collision
let bossX = 1000000;
let bossY = 0;

let canAttack = false;

//Boss Collision
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

//---------------------------------------- BOSS Moving X and Y

let bossVelocity = 1;

let nowBossMoveY;
let thenBossMoveY = Date.now();
let deltaBossMoveY;
let bossMoveYId;

//Boss Moving Y
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

//Boss Moving X
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

//---------------------------------------Enter to the Level Function

let entered = false;

window.addEventListener("keydown", (event) => {
    if ((event.key == "e" || event.key == "E") && doorCol && !entered && finished[helpNum] != 2 && finalDoorUnlocked && inGame && canEnter) {
        entered = true;
        enterFunction();
    }
})

//Boss Phases
let breakBottom, bossLava, endBossLava, bossDarkness, endBossDarkness, bossLava2, bossLava3;
let nonStopShake;

let canEnter = true;

let timeNow = 0;

//Enter Function
const enterFunction = () => {
    if(lobbyDoorCol){
        sfx.src = "./res/sfx/door.mp3";
        sfx.play();
    }
    frameDoor = 0;
    music.pause();
    inGame = false;
    ghostVelocity = 2;
    setTransitionCords();
    fadeInTransition();
    setTimeout(() => {
        transition2.currentTime = 0;
        transition2.style.opacity = "0";
        transition2.pause(); 
    }, 100);
    setTimeout(() => {
        inGame = true;
        platformLevel1 = [...map[helpNum]];
        originalPlatform1 = [...platformLevel1];
        if(helpNum == 0){ //Level 1
            spawnCords = () =>{
                x = 40;
                y = 515
            }
            spawnCords();
            music.src = "./res/music/song0.mp3";
            doorsTime = 30000;
            music.play();
            spawnGhostCords = () =>{
                xGhost = 900;
                yGhost = 500;
            }
            spawnGhostCords();
        }else if(helpNum == 1){ //Level 2
            spawnCords = () =>{
                x = 40;
                y = 515;
            }
            spawnCords();
            music.src = "./res/music/song1.mp3";
            doorsTime = 28000;
            music.play();
            spawnGhostCords = () =>{
                xGhost = 400;
                yGhost = 240;
            }
            spawnGhostCords();
        }else if(helpNum == 2){ //Level 3
            spawnCords = () =>{
                x = 20;
                y = 390;
            }
            spawnCords();
            darkness = true;
            music.src = "./res/music/song2.mp3";
            doorsTime = 37000;
            music.play();
        }else if(helpNum == 3){ //Level 4
            spawnCords = () =>{
                x = 40;
                y = 515;
            }
            spawnCords();
            music.src = "./res/music/song3.mp3";
            doorsTime = 31000;
            music.play();
            spawnGhostCords = () => {
                xGhost = 670;
                yGhost = 310;
            }
            spawnGhostCords();
        }else if(helpNum == 4){ //Level 5
            rising.style.display = "block";
            risingLavaActivated = true;
            spawnCords = () =>{
                x = 512;
                y = 485;
            }
            spawnCords();
            music.src = "./res/music/song4.mp3";
            doorsTime = 23000;
            music.play();
        }else if(helpNum == 5){ //Level 6
            spawnCords = () =>{
                x = 20;
                y = 485;
            }
            spawnCords();
            music.src = "./res/music/song5.mp3";
            doorsTime = 30000;
            music.play();
            spawnGhostCords = () => {
                xGhost = 400;
                yGhost = 245;
            }
            spawnGhostCords();
        }else if(helpNum == 6){ //Level 7
            spawnCords = () =>{
                x = 500;
                y = 485;
            }
            spawnCords();
            music.src = "./res/music/song6.mp3";
            doorsTime = 39000;
            music.play();
        }else if(helpNum == 7){ //Level 8
            spawnCords = () =>{
                x = 20;
                y = 515;
            }
            spawnCords();
            darkness = true;
            music.src = "./res/music/song7.mp3";
            doorsTime = 48000;
            music.play();
        }else if(helpNum == 8){ //Level 9
            spawnCords = () =>{
                x = 20;
                y = 420;
            }
            spawnCords();
            music.src = "./res/music/song8.mp3";
            doorsTime = 40000;
            music.play();
        }else if(helpNum == 9){ //Level 10
            rising.style.display = "block";
            risingLavaActivated = true;
            spawnCords = () =>{
                x = 20;
                y = 485;
            }
            spawnCords();
            music.src = "./res/music/song9.mp3";
            doorsTime = 28000;
            music.play();
        }else if(helpNum == 10){ //Level 11
            spawnCords = () =>{
                x = 20;
                y = 515;
            }
            spawnCords();
            music.src = "./res/music/song10.mp3";
            doorsTime = 30000;
            music.play();
            spawnGhostCords = () => {
                xGhost = 600;
                yGhost = 90;
            }
            spawnGhostCords();
        }else if(helpNum == 11){ //Level 12
            spawnCords = () =>{
                x = 500;
                y = 70;
            }
            spawnCords();
            music.src = "./res/music/song11.mp3";
            doorsTime = 36000;
            music.play();
        }else if(helpNum == 12){ //Level 13
            spawnCords = () =>{
                x = 20;
                y = 515;
            }
            spawnCords();
            darkness = true;
            music.src = "./res/music/song12.mp3";
            doorsTime = 36000;
            music.play();
            spawnGhostCords = () => {
                xGhost = 400;
                yGhost = 210;
            }
            spawnGhostCords();
        }else if(helpNum == 13){ //Level 14
            spawnCords = () =>{
                x = 40;
                y = 515;
            }
            spawnCords();
            music.src = "./res/music/song13.mp3";
            doorsTime = 54000;
            music.play();
            spawnGhostCords = () => {
                xGhost = 700;
                yGhost = 310;
            }
            spawnGhostCords();
        }else if(helpNum == 14){ //Level 15 (Boss Fight)
            bossLevel();
        }else if(helpNum == 15){ // Level 16 (Trophy Room)
            spawnCords = () =>{
                x = 40;
                y = 515;
            }
            finished[14] = 1; //Boss Beated -> Level 15 Doors are now green
            spawnCords();
            music.src = "./res/music/ending.mp3";
            music.play();
        }
        setTransitionCords();
        fadeOutTransition();
        saveGhostCordsX = xGhost;
        saveGhostCordsY = yGhost;
        if(helpNum != 15){
            timeNow = doorsTime/1000;
            timerFunction();
        }
        if(helpNum != 15){
            setTimeoutDoor = setTimeout(() => {
                doorTimeout = true;
            }, doorsTime);
        }
        entered = false;
        gravity();
            }, 1300);
}

//----------------------------------------BOSS LEVEL
const bossLevel = () => {
    finalDoorUnlocked = false;
    generatorAttackFunction();
    gravity();
    spawnCords = () => {
        x = 500;
        y = 220;
    }
    spawnCords();
    myHp.style.display = "flex";
    hps.style.display = "block";
    heart1.style.display = "block";
    heart2.style.display = "block";
    heart3.style.display = "block";
    hearts = 3;
    bossX = 474;
    bossY = 450;
    playingBossFight = true;
    sfx_boss_talk.src = "./res/sfx/killyou.mp3";
    sfx_boss_talk.play();
    music.currentTime = 0;
    music.src = "./res/music/finalboss.mp3";
    doorsTime = 76000;
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
        lavaIncreaseValue = 3.6;
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
    bossLava3 = setTimeout(() => {
        shake()
        risingLavaActivated = true;
        rising.style.display = "block";
        risingIncreaseValue = 1.32;
        lavaIncreaseValue = 7.92;
        nonStopShake = setInterval(() => {
            shake()
        }, 300);
    }, 67000);
}

//----------------------------------------Boss Attack Generator

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

//----------------------------------------SHAKE Function

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

//----------------------------------------Death Effects

let playingBossFight = false;
let hearts = 3;

let resistence = false;
let deadSoundCanBeUse = true;

const grayScaleEffect = () => {
    canvas.style.filter = "grayscale(1)";
    rising.style.filter = "grayscale(1)";
    setTimeout(() => {
        canvas.style.transition = "filter 0.5s";
        canvas.style.filter = "grayscale(0)";
        rising.style.transition = "filter 0.5s";
        rising.style.filter = "grayscale(0)";
        setTimeout(() => {
            canvas.style.transition = "filter 0s";
            rising.style.transition = "filter 0s";
        }, 250);
    },500);
}

//---------------------------------------- Death Function (Player)

const dead = () => {
    if(!goingBackToTheLobby){
        if(!playingBossFight){ //You are not playing BOSS FIGHT
            if(yGhost < 2000 && xGhost < 2000){
                ghostVelocity = 2;
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
            velocity = 0;
            velocityRight = 0;
            velocityLeft = 0;
            velocityJump = 0;
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
                risingIncreaseValue = 0.6;
                lavaIncreaseValue = 3.6;
                lavaY = 576;
                risingPercent = risingPercentOriginal;
                rising.style.bottom = risingPercent + "%"
            }
            if(frameDoor == 3){
                shake();
                doorTimeout = false;
                frameDoor = 0;
            }
            grayScaleEffect();
            restartTimer();
            timerFunction();
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
                if(hearts == 0 || frameDoor == 3 || usedRetry || risingPercent >= -95){
                    clearInterval(bossAttackGenerator);
                    grayScaleEffect();
                    sfx_boss_laugh.pause();
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
                    setTimeout(() => { // Fixing bug
                        currentHp = 100;
                        hp.style.width = currentHp + "%";
                    }, 100);
                    platformLevel1 = [...map[14]]
                    risingLavaActivated = false;
                    risingIncreaseValue = 0.6;
                    lavaIncreaseValue = 3.6;
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
                    clearTimeout(bossLava2);
                    clearTimeout(bossLava3);
                    clearTimeout(endBossLava);
                    clearTimeout(bossDarkness);
                    clearTimeout(endBossDarkness);
                    clearInterval(nonStopShake);
                    restartTimer();
                    timerFunction();
                    bossLevel();
                }else{
                    sfx_boss_laugh.src = "./res/sfx/laugh.mp3";
                    sfx_boss_laugh.play();
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
        if(deadSoundCanBeUse){
            sfx_dead.src = "./res/sfx/died.mp3";
            sfx_dead.play();
            deadSoundCanBeUse = false;
            setTimeout(() => {
                deadSoundCanBeUse = true;
            }, 300);
        }
    
        gravity();
    }
}

//Fade **IN** Transition Function
//transition1 = Fade In
const fadeInTransition = () => {
    setTimeout(() => {
        transition2.currentTime = 0;
    }, 30);
    transition2.style.opacity = "0";
    transition2.pause();   
    transition1.currentTime = 0;
    setTimeout(() => {
        transition1.style.opacity = "1";
        transition1.play(); 
    }, 30);
    setTimeout(() => {
    }, 100);
}

//Fade **OUT** Transition Function
//transition2 = Fade Out
const fadeOutTransition = () => {
    transition2.currentTime = 0;
    setTimeout(() => {
        transition2.style.opacity = "1";
        transition2.play();  
    }, 30);
    setTimeout(() => {
        transition1.currentTime = 0;
        setTimeout(() => {
            transition1.style.opacity = "0";
            transition1.pause();   
        }, 30);
    }, 100);
}

//---------------------------------------- Back to the Lobby (from level)

let backToLobbyEntered = false;
let goingBackToTheLobby = false;

const backToLobby = () => {
    goingBackToTheLobby = true;
    clearInterval(bossAttackGenerator);
    clearTimeout(breakBottom);
    clearTimeout(bossLava);
    clearTimeout(bossLava2);
    clearTimeout(bossLava3);
    clearTimeout(endBossLava);
    clearTimeout(bossDarkness);
    clearTimeout(endBossDarkness);
    clearInterval(nonStopShake);
    clearTimeout(setTimeoutDoor);
    cancelAnimationFrame(bossMoveXId);
    cancelAnimationFrame(bossMoveYId)
    restartTimer();
    timer.style.top = "-5%"
    transition2.addEventListener("ended", () => {
        canEnter = true;
    });
    if(usedRetry){
        usedRetry = false;
    }
    black.style.opacity = "0";
    risingLavaActivated = false;
    finalDoorUnlocked = true;
    canAttack = false;
    myHp.style.display = "none";
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
    setTransitionCords();
    fadeInTransition();
    esc.style.display = "none"; 
    escShowed = false;
    setTimeout(() => {
        music.src = "./res/music/lobby_music.mp3";
        music.play();
        if(playingBossFight){
            lives = 3;
            playingBossFight = false;
            bossX = 1000000;
            bossY = 0;
        }
        frameDoorFinal = 3;
        risingIncreaseValue = 0.6;
        lavaIncreaseValue = 3.6;
        lavaY = 576;
        risingPercent = risingPercentOriginal;
        rising.style.bottom = risingPercentOriginal + "%"
        rising.style.display = "none";
        darkness = false;
        inGame = true;
        platformLevel1 = [...lobby];
        spawnGhostCords = () => {
            xGhost = 20000;
            yGhost = 20000;
        }
        spawnGhostCords();
        if(helpNum == 0){ // Go to lobby From Levels 1 - 15
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
        }else if(helpNum == 14 || helpNum == 15){
            x = 920;
            y = 80;
        }
        setTransitionCords();
        fadeOutTransition()
        backToLobbyEntered = false;
        goingBackToTheLobby = false;
        gravity();
    }, 1300);
}
//Back from Level to the Lobby
button_back.onclick = () => {
    canEnter = false; //Now you cant spam "e"
    backToLobby();
}
//Resume Function
button_resume.onclick = () => {
    esc.style.display = "none"; 
    escShowed = false;
    black.style.opacity = "0";
}
//Back from Lobby to the Menu Function
button_menu.onclick = () => {
    inGame = false;
    text.style.opacity = "1";
    note_button.style.zIndex = "3";
    escape_button.style.zIndex = "3";
    fullBlack.style.opacity = "1";
    black.style.opacity = "1";
    esc.style.display = "none"; 
    escShowed = false;
    tutorialButton.style.pointerEvents = "auto"; //Now I can again click tutorialButton
    tutorialButton.style.opacity = "100%";
    music.currentTime = 0; //OFF Lobby Music 
    music.pause();
    setTimeout(() => {
        game.style.display = "none";
        startMenu.style.display = "block";
        playButton.style.pointerEvents = "auto";
        playButton.style.display = "block";
        creditsButton.style.display = "block";
        black.style.opacity = "0";
        fullBlack.style.opacity = "0";
        setTimeout(() => {
            fullBlack.style.display = "none";
            note_button.style.zIndex = "11";
            escape_button.style.zIndex = "11";
        }, 1000);
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


//----------------------------------------ESC Button Function
 
const escFunction = () => {
    if(JSON.stringify(lobby) !== JSON.stringify(platformLevel1)){
        button_back.style.display = "block";
        button_resume.style.display = "block";
        button_retry.style.display = "block";
        if(helpNum == 15 || currentHp <= 0){
            button_retry.style.display = "none";
        }
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
    if(inGame && !musicEditorOpened){
        escFunction();
    }
}

//----------------------------------------Finished level

let finished = new Array (15)

for (let index = 0; index < finished.length; index++) {
    finished[index] = 2;
}

finished[helpNum] = 0; // Unlock 1st level

//----------------------------------------UNLOCK ALL DOORS FUNCTION

const unlockAll = () => {
    for (let index = 0; index < finished.length; index++) {
        if(finished[index] != 1){
            finished[index] = 0;
        }
    }
}

//unlockAll()

//---------------------------------------- OBJECTS Collision

const objectsCollision = () => {
    if(playingBossFight){
        bossCollision();
    }
    ghostCollision();
    for (let i = 0; i < platformLevel1.length; i++) {
        //Spikes and Moving Spikes
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
        //Lava
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
        //Portal 1
        if (platformLevel1[i] == 11) {
            let platformX = (i % 32) * 32;
            let platformY = Math.floor(i / 32) * 32;
            if (
                y + height >= platformY + 10 &&
                y + height <= platformY + 64 + height &&
                x + width >= platformX + 10 &&
                x <= platformX + 22
            ) {
                sfx.src = "./res/sfx/portal_sfx.mp3";
                sfx.play();
                x = cordsPortalX2;
                y = cordsPortalY2;
            }
        }
        //Portal 2
        if (platformLevel1[i] == 12) {
            let platformX = (i % 32) * 32;
            let platformY = Math.floor(i / 32) * 32;
            if (
                y + height >= platformY + 10 &&
                y + height <= platformY + 64 + height &&
                x + width >= platformX + 10 &&
                x <= platformX + 22
            ) {
                sfx.src = "./res/sfx/portal_sfx.mp3";
                sfx.play();
                x = cordsPortalX1;
                y = cordsPortalY1;
            }
        }
        //Closing Doors
        if (platformLevel1[i] == 30) {
            let platformX = (i % 32) * 32;
            let platformY = Math.floor(i / 32) * 32;
            if (
                y + height >= platformY &&
                y + height <= platformY + 64 &&
                x + width >= platformX + 24 &&
                x <= platformX + 40
            ) {
                if(!backToLobbyEntered && frameDoor < 1){
                    restartTimer();
                    timer.style.top = "-5%"
                    canEnter = false; //Now you cant spam "e"
                    sfx.src = "./res/sfx/completed.mp3";
                    sfx.play();
                    finished[helpNum] = 1; // Level Completed -> Doors are now GREEN
                    if(finished[helpNum + 1] != 1){
                        finished[helpNum + 1] = 0; // Another Level is available -> removed LOCK
                    }
                    backToLobby();
                    backToLobbyEntered = true;
                    if(usedRetry){
                        usedRetry = false;
                    }
                    localStorage.setItem("finished_" + helpNum, finished[helpNum]);
                    localStorage.setItem("unlocked_" + helpNum, finished[helpNum + 1]);
                }
            }
        }
        //Key
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
                sfx.src = "./res/sfx/key_pick.mp3";
                sfx.play();
                for (let index = 0; index < platformLevel1.length; index++) {
                    if(platformLevel1[index] == 32 || platformLevel1[index] == 33){
                        platformLevel1[index] = 0;
                    }
                }
            }
        }
        //Final Trophy
        if (platformLevel1[i] == 35) {
            let platformX = (i % 32) * 32;
            let platformY = Math.floor(i / 32) * 32;
            if (
                y + height >= platformY &&
                y + height <= platformY + 232 &&
                x + width >= platformX &&
                x <= platformX + 32
            ) {
                c.font = "80px VT323, monospace";
                c.fillStyle = "lime";
                c.fillText("Thanks For Playing <3", 20, 130);
                c.font = "30px VT323, monospace";
                c.fillStyle = "lime";
                c.fillText("Game By: Philip B.", 30, 160);
            }
        }
    }
}


//This will load you progress which was saved
window.onload =  () => {
    for (let i = 0; i <= 15; i++) {
        let savedValue = localStorage.getItem("unlocked_" + i);
        if (savedValue !== null) {
            finished[i + 1] = parseInt(savedValue); // Convert to numbers
        }
    }
    for (let i = 0; i <= 15; i++) {
        let savedValue = localStorage.getItem("finished_" + i);
        if (savedValue !== null) {
            finished[i] = parseInt(savedValue); // Convert to numbers
        }
    }
}

//Reset Local Storage Function
const resetLocalStorage = () => {
    for (let i = 0; i <= 15; i++) {
        localStorage.removeItem("finished_" + i);
    }
    for (let i = 0; i <= 15; i++) {
        localStorage.removeItem("unlocked_" + i);
    }
}

//resetLocalStorage();

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

//---------------------------------------- Crouch and Stand (Player)

let crouched = false;
let canStandUp = true;
let ahCollision;
let underCollision;

//This Function is checking, if you do not have a block above you (then you can stand up)
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

//Crouching Function
let crouch = () => {
    crouched = true;
    height = 20;
    y += 20;
    aboveHeadCollision()
}

//UnCrouching Function (Stand Up)
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

//You will Stand Up if you do not have above you a block
let under = () => {
    underCollision = window.requestAnimationFrame(under);
    if(canStandUp == true){
        unCrouch();
        wasUnder = true;
        cancelAnimationFrame(underCollision);
    }
}

//---------------------------------------- Collision Canvas BOTTOM and BLOCKS

let onRock = false;
let onWood = false;

let onBottom = false;

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
                if(sfx_land.paused && sfx_land.src != "./res/sfx/small_land.mp3" && velocity >= 3 && velocity < 8 && !ladderCol){
                    sfx_land.src = "./res/sfx/small_land.mp3"
                    sfx_land.play();
                }else if(sfx_land.paused && sfx_land.src != "./res/sfx/large_land.mp3" && velocity >= 8 && !ladderCol){
                    sfx_land.src = "./res/sfx/large_land.mp3"
                    sfx_land.play();
                }
                sfx_climb.pause()
                y = platformY - height;
                velocity = 0;
                velocityGoingDown = 0;
                orbUsed = false;
                if(platformLevel1[i] == 1 || platformLevel1[i] == 6 || platformLevel1[i] == 32 || platformLevel1[i] == 33){ //You are on Rock
                    onRock = true; 
                    onWood = false;
                }else if(platformLevel1[i] == 7 || platformLevel1[i] == 19 || platformLevel1[i] == 18 || platformLevel1[i] == 9){ //You are on Wood
                     onRock = false;
                     onWood = true;
                }
                onBottom = true;
                cancelAnimationFrame(gravityId);
                cancelAnimationFrame(goingDownId);
                break;
            } else {
                onBottom = false;
            }
        }
    }
    //Canvas Bottom detection
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

//---------------------------------------- Hitting your head to the block Collision

const upCollision = () => {
    if (deltaUp > interval) {
        thenUp = nowUp - (deltaUp % interval);
        velocityJump = velocityJump/1.22
        y -= velocityJump;
        for (let i = 0; i < platformLevel1.length; i++) {
            if (platformLevel1[i] == 1 || platformLevel1[i] == 6 || platformLevel1[i] == 7 || platformLevel1[i] == 9 || platformLevel1[i] == 18 || platformLevel1[i] == 19 || platformLevel1[i] == 32 || platformLevel1[i] == 33) {
                let platformX = (i % 32) * 32;
                let platformY = Math.floor(i / 32) * 32 + 42;
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

//----------------------------------------Ladder Collision

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
                onRock = false;
                onWood = false;
                ladderCol = true;
                cancelAnimationFrame(gravityId)
                canGravityActivate = true;
                break;
            } else {
                ladderCol = false;
            }
        }
    }
    //Cancel Ladder Functions
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

//----------------------------------------Climbing on a Ladder - UP

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
        if(sfx_climb.paused && ladderCol && (!onWood || !onRock)){
            sfx_walk.pause();
            sfx_climb.src = "./res/sfx/ladder.mp3"
            sfx_climb.play();
        }
        y -= velocityGoingUp;
        upCollision();
    }
}

//----------------------------------------Climbing on a Ladder - DOWN
let goingDownId;
let nowGoingdDown;
let thenGoingdDown = Date.now();
let deltaGoingdDown;

let velocityGoingDown = 0;

let alreadyGoingDown = false;

const goingDown = () => {
    alreadyGoingDown = true;
    velocityGoingDown = 2;
    goingDownId = requestAnimationFrame(goingDown);
    nowGoingdDown = Date.now();
    deltaGoingdDown = nowGoingdDown - thenGoingdDown;
    if (deltaGoingdDown > interval) {
        thenGoingdDown = nowGoingdDown - (deltaGoingdDown % interval);
        if(sfx_climb.paused && ladderCol && !onBottom){
            sfx_walk.pause();
            sfx_climb.src = "./res/sfx/ladder.mp3"
            sfx_climb.play();
        }
        y += velocityGoingDown;
        bottomCollision();
    }
}

//---------------------------------------- Gravity Function (Player)

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
            //SFX Walking
            if(sfx_walk.paused && sfx_jump.paused && (onWood || onRock) && (velocityRight > 1 || velocityLeft > 1) && !crouched && !ladderCol && velocity < 0.3 && !isJumping) {
                if(onWood && !ladderCol){
                    sfx_walk.src = "./res/sfx/wood_steps.mp3"; //Walking on wood SFX
                }else if(onRock && !ladderCol){
                    sfx_walk.src = "./res/sfx/stone_steps.mp3"; //Walking on rock SFX
                }
                setTimeout(() => {
                    sfx_walk.play(); 
                }, 3);
            }else if(!sfx_walk.paused && velocityRight <= 1 && velocityLeft <= 1 && (!onWood || !onRock) || crouched || ladderCol || velocity >= 0.3 || isJumping){
                sfx_walk.pause();
            }
            if(crouched && velocity > 1){
                unCrouch();
            }
            if(velocity >= 0.6){
                sfx_climb.pause();
            }
            velocityGoingUp = 0;
            orbCollision();
            velocity += 0.3;
            y += velocity;
            bottomCollision(); //Condition
        }
    } 
}

gravity();

//---------------------------------------- Jumping Function (Player)

let headHit;

let nowUp;
let thenUp = Date.now();
let deltaUp;

let jump = () => {
    if((stillJumping == false || canOrbJump == true && orbUsed == false) && ladderCol == false || bounced){
        onRock = false;
        onWood = false;
        if(!sfx_walk.paused) {
            sfx_walk.pause(); //Jumping = OFF SFX Walk
        }
        if(crouched == true){
            unCrouch(); //No crouching while you jumping
        }
        if(canOrbJump && velocity >= 0){
            cancelAnimationFrame(gravityId);
            cancelAnimationFrame(jumpingId);
            velocityJump = 0;
            velocityJump = 0;
            orbUsed = true;
            setTimeout(() => {
                orbUsed = false;
            }, 250);
            sfx_extra_jump.src = "./res/sfx/orb_jump.mp3"
            sfx_extra_jump.play();
        }else if(!canOrbJump && !bounced && !ladderCol){
            sfx_jump.src = "./res/sfx/jump.mp3"
            sfx_jump.play();
        }else if(!canOrbJump && bounced && !ladderCol){
            sfx_extra_jump.src = "./res/sfx/bonus_jump.mp3"
            sfx_extra_jump.play();
        }
        bounced = false;
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
//----------------------------------------Moving Right Function (Player)

let velocityRight = 0;

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
            //Crouched
            if(crouched == true && velocityRight >= 1){
                velocityRight -= 0.12;
                cancelAnimationFrame(gravityId);
                gravity();
            }else{ //Not Crouched
                if(isMovingRight == true){
                    if(velocityRight < 4 && crouched == false){
                        velocityRight += 0.12;
                    }else if(velocityRight < 1 && crouched == true){
                        velocityRight += 0.12;
                        cancelAnimationFrame(gravityId);
                        gravity();
                    }else if(velocityRight + 0.12 >= 4){
                        velocityRight = 4;
                    }else if(velocityRight >= 2 && velocityLeft >= 2){//If you walk to two sides at once, you won't move
                        velocityRight = 0;
                        velocityLeft = 0;
                    }
                    
                }else if(isMovingRight == false){
                    velocityRight -= 0.2;
                    if(velocityRight <= 0.1){
                        if(velocityRight > velocityLeft && isMovingRight){ //Fixing switching sides
                            turnedLeft = false;
                            turnedRight = true;
                        }
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
                        x + width + velocityRight + 0.2 > platformX &&
                        x < platformX + 32
                    ) {
                        if(velocityRight > velocityLeft && isMovingRight){ //Fixing switching sides
                            turnedLeft = false;
                            turnedRight = true;
                        }
                        if(velocityRight >= 1 && velocityLeft >= 1){//If you walk to two sides at once, you won't move
                            velocityLeft = 0;
                            velocityRight = 0;
                        }
                        if(!canStandUp){ // This condition fixing uncrouch teleport bug
                            x = platformX - width - 0.12;
                        }
                        if(velocityRight > 0.5){
                            velocityRight = 0;
                            x = platformX - width - 1.2;
                        }else{
                            velocityRight = 0;
                        }
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


//----------------------------------------Moving Left Function (Player)

let velocityLeft = 0;

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
            //Crouched
            if(crouched == true && velocityLeft >= 1){
                velocityLeft -= 0.12;
                cancelAnimationFrame(gravityId);
                gravity();
            }else{ //Not Crouched
                if(isMovingLeft == true){
                    if(velocityLeft < 4 && crouched == false){
                        velocityLeft += 0.12;
                    }else if(velocityLeft <= 1 && crouched == true){
                        velocityLeft += 0.12;
                        cancelAnimationFrame(gravityId);
                        gravity();
                    }else if(velocityLeft + 0.12 >= 4){
                        velocityLeft = 4;
                    }else if(velocityRight >= 2 && velocityLeft >= 2){ //If you walk to two sides at once, you won't move
                        velocityRight = 0;
                        velocityLeft = 0;
                    }
                }else if(isMovingLeft == false){
                    velocityLeft -= 0.2;
                    if(velocityLeft <= 0.1){
                        if(velocityRight <= velocityLeft && isMovingLeft){ //Fixing switching sides
                            turnedLeft = true;
                            turnedRight = false;
                        }
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
                        if(velocityRight <= velocityLeft && isMovingLeft){ //Fixing switching sides
                            turnedLeft = true;
                            turnedRight = false;
                        }
                        if(velocityRight >= 1 && velocityLeft >= 1){//If you walk to two sides at once, you won't move
                            velocityLeft = 0;
                            velocityRight = 0;
                        }
                        if(!canStandUp){ // This condition fixing uncrouch teleport bug
                            x = platformX + width + 2.24;
                        }
                        if(velocityLeft > 0.5){
                            velocityLeft = 0;
                            x = platformX + width + 2.2;
                        }else{
                            velocityLeft = 0;
                        }
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

//--------------------------PUNCH Function

let punched = false;
let alreadyPunched = false;
let punchCooldown = false;
let canPlayBreakSound = true;

let currentHp = 100;

const punch = () => {
    if(!crouched && !punchCooldown){
        punchCooldown = true;
        punched = true;
        if(playingAsRuby){
            sfx_player.src = "./res/sfx/ruby_attack.mp3";
        }else if(playingAsRioter){
            sfx_player.src = "./res/sfx/rioter_attack.mp3"; 
        }
        sfx_player.play();
        sfx_miss.src = "./res/sfx/miss.mp3"; 
        sfx_miss.play();
        if(canAttack){
            sfx_punch.src = "./res/sfx/punch.mp3";
            sfx_punch.play();
            currentHp -= 5.5566; //5.5566
            hp.style.width = currentHp + "%";
            if(currentHp <= 0 && !backToLobbyEntered){
                deadBoss();
                finalDoorUnlocked = true;
            }
        }else{
            for (let i = 0; i < platformLevel1.length; i++) {
                if (platformLevel1[i] == 6) {
                    let platformX = (i % 32) * 32;
                    let platformY = Math.floor(i / 32) * 32;
                    if (
                        (y + height > platformY&&
                        y < platformY + 32 && 
                        x + width > platformX - 10 &&
                        x < platformX && turnedRight)
                        ||
                        (y + height > platformY &&
                        y < platformY + 32 &&
                        x < platformX + 42 &&
                        x > platformX + 32 && turnedLeft)
                    ) {
                        platformLevel1[i] = 0;
                        if(canPlayBreakSound){ //When you hit 2 blocks, sound will be played once
                            canPlayBreakSound = false;
                            sfx_punch.src = "./res/sfx/wall_break.mp3";
                            sfx_punch.play();
                            setTimeout(() => {
                                canPlayBreakSound = true;
                            }, 500);
                        }
                    } 
                } 
            }
        }
    }
}

//--------------------------Dead Boss Function

const deadBoss = () => {
    restartTimer();
    timer.style.top = "-5%"
    canAttack = false;
    inGame = false;
    sfx_boss_laugh.pause();
    black.style.opacity = "1";
    setTimeout(() => {
        frameDoorFinal = 0; 
    }, 2000);
    scene.addEventListener("ended", () => {
        scene.style.display = "none";
        black.style.opacity = "0";
        inGame = true;
        spawnCords();
        gravity();
    });
    clearTimeout(setTimeoutDoor);
    music.pause();
    lives = 3;
    playingBossFight = false;
    bossX = 1000000;
    bossY = 0;
    if(playingAsRioter){
        scene.src = "./res/vid/rioter_scene.mp4";
    }else{
        scene.src = "./res//vid/ruby_scene.mp4";
    }
    scene.style.display = "block";
    scene.play();
    clearInterval(bossAttackGenerator);
    if(usedRetry){
        usedRetry = false;
    }
    cancelAnimationFrame(bossMoveXId);
    cancelAnimationFrame(bossMoveYId);
    clearTimeout(setTimeoutDoor)
    bossAttacking = false;
    hp.style.width = currentHp + "%";
    hps.style.display = "none"
    myHp.style.display = "none"
    risingLavaActivated = false;
    lavaIncreaseValue = 3;
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
    clearTimeout(bossLava2);
    clearTimeout(bossLava3);
    clearTimeout(endBossLava);
    clearTimeout(bossDarkness);
    clearTimeout(endBossDarkness);
    clearInterval(nonStopShake);
    spawnCords();
    velocity = 0;
    cancelAnimationFrame(gravityId);
    platformLevel1 = [...map[14]];
    originalPlatform1 = [...platformLevel1];
}

//-------------------------- Pressing KEYBOARD Buttons
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

window.addEventListener("keydown", (event) => {
    // W - Jumping / Climbing Up
    if ((event.key == up || event.key == UP) && isJumping == false && canStandUp == true && inGame) {
        currentFrame = 0;
        isJumping = true;
        if(ladderCol){
            goingUp();
        }else{
            jump();
        }
    // D - Moving Right / Climbing Right
    } else if ((event.key == right || event.key == RIGHT) && isMovingRight == false && inGame) {
        currentFrame = 0;
        isMovingRight = true;
        turnedRight = true;
        turnedLeft = false;
        cancelAnimationFrame(animationIdRight);
        moveRight();
    // A - Moving Left / Climbing Left
    } else if ((event.key == left || event.key == LEFT) && isMovingLeft == false && inGame) {
        currentFrame = 0;
        isMovingLeft = true;
        turnedRight = false;
        turnedLeft = true;
        cancelAnimationFrame(animationIdLeft);
        moveLeft();
    // S - Crouching / Climbing Down
    } else if ((event.key == down || event.key == DOWN) && !punched) {
        if(crouched == false && stillJumping == false && downPressed == false && ladderCol == false && inGame){
            crouch();
            currentFrame = 0;            
        } else if (ladderCol && !alreadyGoingDown){
            sfx_climb.pause();
            goingDown();
        }
        downPressed = true;
    // SPACE - Punching BOSS / Breaking Cracked Blocks
    } else if (event.key == space) {
        if(!alreadyPunched && !ladderCol && inGame){
            punch();
        }
        alreadyPunched = true;
    } else if (event.key == "Escape" && inGame) {
        if(musicEditorOpened){
            music_editor.style.display = "none";
            musicEditorOpened = false;
            black.style.opacity = "0";
        }else{
            escFunction();
        }
    }
});

//-------------------------- Releasing KEYBOARD Buttons

window.addEventListener("keyup", (event) => {
    // W - Stop Climbing UP
    if (event.key == up || event.key == UP && inGame) {
        isJumping = false;
        if(ladderCol){  
            cancelAnimationFrame(goingUpId);
            sfx_climb.pause();
        }
        velocityGoingUp = 0;
    }
    // D - Stop Moving Right
    if (event.key == right || event.key == RIGHT) {
        isMovingRight = false;
        if(velocityRight <= velocityLeft && isMovingLeft){ //Fixing switching sides
            turnedLeft = true;
            turnedRight = false;
        }
    }
    // A - Stop Moving Left
    if (event.key == left || event.key == LEFT) {
        isMovingLeft = false;
        if(velocityRight > velocityLeft && isMovingRight){ //Fixing switching sides
            turnedLeft = false;
            turnedRight = true;
        }
    }
    // S - UnCrouch / Stop Climbing Down
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
            sfx_climb.pause();
        }
    }
    if (event.key == space && inGame) {
        alreadyPunched = false;
    }
});