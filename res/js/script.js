//Player 1
const player1 = {
    // Coordinates
    x : 0,
    y : 500,
    height : 40,
    width : 30,
    // Frames
    currentFrameStand : 0,
    currentFramePunch : 0,
    currentFrameRun : 0,
    currentFrameCrouch : 0,
    // Help punch variables
    punched : false,
    punchCooldown : false,
    alreadyPunched : false,
    // Velocity
    velocity : 0,
    velocityJump : 0,
    velocityRight : 0,
    velocityLeft : 0,
    velocityGoingDown : 0,
    velocityGoingUp : 0,
    // Help move variables
    isMovingRight : false,
    isMovingLeft : false,
    // Animation
    turnedRight : true,
    turnedLeft : false,
    animationIdRight : null,
    animationIdLeft : null,
    ahCollision : null,
    underCollision : null,
    jumpingId : null,
    goingUpId : null,
    goingDownId : null,
    // NOW THEN DELTA
    nowLeft : null,
    thenLeft : Date.now(),
    deltaLeft : null,
    //
    nowRight : null,
    thenRight : Date.now(),
    deltaRight : null,
    //
    nowDown : null,
    thenDown : Date.now(),
    deltaDown : null,
    //
    nowUp : null,
    thenUp : Date.now(),
    deltaUp : null,
    //
    nowGoingUp : null,
    thenGoingUp : Date.now(),
    deltaGoingUp : null,
    //
    nowGoingDown : null,
    thenGoingDown : Date.now(),
    deltaGoingDown : null,
    // Help Jump variables
    stillJumping : false,
    // Help Crouch variables
    crouched : false,
    downPressed : false,
    canStandUp : true,
    wasUnder : true,
    // Gravity
    onRock : false,
    onWood : false,
    orbUsed : false,
    canOrbJump : false,
    gravityId : null,
    // Ladder
    ladderCol : false,
    canGravityActivate : false,
    alreadyGoingDown : false,
    wPressed : false,
    // Jump
    headHit : null,
    bounced : false,
    jumpInterval : null,
    jumpIntervalSet : false,
    isJumping : null,
    canUseJumpPad : false,
    // Doors
    doorCol : false,
    closingDoorCol : false,
    // Boss
    canAttack : false,
    //Slide
    canSlideOnWall : false,
    slideJumped : false,
}

//Player 2
const player2 = {
    // Coordinates
    x : 0,
    y : 500,
    height : 40,
    width : 30,
    // Frames
    currentFrameStand : 0,
    currentFramePunch : 0,
    currentFrameRun : 0,
    currentFrameCrouch : 0,
    // Help punch variables
    punched : false,
    punchCooldown : false,
    alreadyPunched : false,
    // Velocity
    velocity : 0,
    velocityJump : 0,
    velocityRight : 0,
    velocityLeft : 0,
    velocityGoingDown : 0,
    velocityGoingUp : 0,
    // Help move variables
    isMovingRight : false,
    isMovingLeft : false,
    // Animation
    turnedRight : true,
    turnedLeft : false,
    animationIdRight : null,
    animationIdLeft : null,
    ahCollision : null,
    underCollision : null,
    jumpingId : null,
    goingUpId : null,
    goingDownId : null,
    // NOW THEN DELTA
    nowLeft : null,
    thenLeft : Date.now(),
    deltaLeft : null,
    //
    nowRight : null,
    thenRight : Date.now(),
    deltaRight : null,
    //
    nowDown : null,
    thenDown : Date.now(),
    deltaDown : null,
    //
    nowUp : null,
    thenUp : Date.now(),
    deltaUp : null,
    //
    nowGoingUp : null,
    thenGoingUp : Date.now(),
    deltaGoingUp : null,
    //
    nowGoingDown : null,
    thenGoingDown : Date.now(),
    deltaGoingDown : null,
    // Help Jump variables
    stillJumping : false,
    // Help Crouch variables
    crouched : false,
    downPressed : false,
    canStandUp : true,
    wasUnder : true,
    // Gravity
    onRock : false,
    onWood : false,
    orbUsed : false,
    canOrbJump : false,
    gravityId : null,
    // Ladder
    ladderCol : false,
    canGravityActivate : false,
    alreadyGoingDown : false,
    wPressed : false,
    // Jump
    headHit : null,
    bounced : false,
    jumpInterval : null,
    jumpIntervalSet : false,
    isJumping : null,
    canUseJumpPad : false,
    // Doors
    doorCol : false,
    closingDoorCol : false,
    // Boss
    canAttack : false,
    //Slide
    canSlideOnWall : false,
    slideJumped : false,
}

let playingMultiplayer = false;

//This will spawn you
let spawnCords = () => {
    player1.x = 80;
    player1.y = 500;
    player2.x = 70;
    player2.y = 500;
}
spawnCords();

const canvas = document.getElementById("canvas");
const canvas_darkness = document.getElementById("canvas_darkness");
const canvas_container = document.getElementById("canvas_container");
const container = document.getElementById("container");
const c = canvas.getContext("2d");
const c_d = canvas_darkness.getContext("2d");
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
const sfx2 = document.getElementById("sfx2");
const sfx_land2 = document.getElementById("sfx_land2");
const sfx_miss2 = document.getElementById("sfx_miss2");
const sfx_climb2 = document.getElementById("sfx_climb2");
const sfx_dead2 = document.getElementById("sfx_dead2");
const sfx_player2 = document.getElementById("sfx_player2");
const sfx_walk2 = document.getElementById("sfx_walk2"); 
const sfx_jump2 = document.getElementById("sfx_jump2");
const sfx_punch2 = document.getElementById("sfx_punch2");
const sfx_extra_jump2 = document.getElementById("sfx_extra_jump2");
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
const playButtonMulti = document.getElementById("playButtonMulti");
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
    sfx2.volume = sfxVolume;
    sfx_dead2.volume = sfxVolume;
    sfx_player2.volume = sfxVolume;
    sfx_walk2.volume = sfxVolume;
    sfx_climb2.volume = sfxVolume;
    sfx_miss2.volume = sfxVolume;
    sfx_jump2.volume = sfxVolume;
    sfx_punch2.volume = sfxVolume;
    sfx_extra_jump2.volume = sfxVolume;
    sfx_boss_talk.volume = sfxVolume;
    sfx_boss_laugh.volume = sfxVolume;
    sfx_land.volume = sfxVolume;
    scene.volume = sfxVolume;
}


setMusicVolume();
setSfxVolume();

//music.volume = 0;

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
            canvas.style.filter = "blur(0)"
            background.style.filter = "blur(0)"
            rising.style.filter = "blur(0)"
            music_editor.style.display = "none";
            musicEditorOpened = false;
            black.style.opacity = "0";
        }else{
            canvas.style.filter = "blur(1px)"
            background.style.filter = "blur(1px)"
            rising.style.filter = "blur(1px)"
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
        canvas.style.filter = "blur(0)"
        background.style.filter = "blur(0)"
        rising.style.filter = "blur(0)"
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
    transitionY = (player1.y / 576) * 100 + 3;
    transitionX =  (player1.x / 1024) * 100 + 2;
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
    playButtonMulti.style.display = "none";
    text.style.opacity = "0";
    setTimeout(() => {
        tutorialBtnSliding = false;
        tutorialBtnShowed = true;
    }, 1000);
}

playButtonMulti.onclick = () => {
    playingMultiplayer = true;
    playButton.style.display = "none";
    playButtonMulti.style.animationName = "blink"
    playButtonMulti.style.animationPlayState = "running";
    black.style.opacity = "1";
    tutorialButton.style.opacity = "0%";
    tutorialButton.style.pointerEvents = "none";
    playButtonMulti.style.pointerEvents = "none";
    tutorialButton.style.pointerEvents = "none";
    creditsButton.style.display = "none";
    text.style.opacity = "0";
    setTimeout(() => {
        tutorialBtnSliding = false;
        tutorialBtnShowed = true;
    }, 1000);
    fullBlack.style.display = "block";
    note_button.style.zIndex = "3";
    escape_button.style.zIndex = "3";
    setTimeout(() => {
        fullBlack.style.opacity = "1";
    }, 10);
    setTimeout(() => {
        menuToLobby();
        drawing();
        fullBlack.style.opacity = "0";
        setTimeout(() => {
            note_button.style.zIndex = "11";
            escape_button.style.zIndex = "11";
        }, 800);
    }, 1000);
    player =  "./res/img/rioter.png";
    heart1.src = "./res/img/heart_rioter.png";
    heart2.src = "./res/img/heart_rioter.png";
    heart3.src = "./res/img/heart_rioter.png";
    gravity(player2)
    playingAsRioter = true;
    playingAsRuby = false;
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
    playButtonMulti.style.pointerEvents = "none";
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
            playButtonMulti.style.pointerEvents = "auto";
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
    playButtonMulti.style.animationName = "none"
    playButtonMulti.style.animationPlayState = "none";
    setTimeout(() => {
        black.style.opacity = "0";
    }, 50)
}

//Ghost COORDINATES
let xGhost = 70000;
let yGhost = 310

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

let gravityOn = false;

let fps = 55;
let interval = 1000/fps;

let portalCordsX1 = 0;
let portalCordsY1 = 0;
let portalCordsX2 = 0;
let portalCordsY2 = 0;

//----------------------------------------DOORS COLLISION in Menu

let lobbyDoorCol = false; //Help for sfx door
let finalDoorUnlocked = true; //Can let you go to the Final Door while is boss dead

let helpNumbers = []

//This Function will show you, if you can enter to the level 
const doorsCollision = (PLAYER) => {
    lobbyDoorCol = false;
    PLAYER.doorCol = false;
    for (let i = 0; i < platformLevel1.length; i++) {
        if (platformLevel1[i] >= 50 && platformLevel1[i] <= 64 || platformLevel1[i] == 34) {
            let platformX = (i % 32) * 32;
            let platformY = Math.floor(i / 32) * 32;
            if (
                PLAYER.y + PLAYER.height >= platformY &&
                PLAYER.y + PLAYER.height <= platformY + 64 &&
                PLAYER.x + PLAYER.width >= platformX + 24 &&
                PLAYER.x <= platformX + 40
            ) {
                if(platformLevel1[i] == 34 && frameDoorFinal == 0){
                    helpNum = 15;
                }else if(platformLevel1[i] != 34 && inGame){
                    helpNum = platformLevel1[i] - 50;
                    lobbyDoorCol = true;
                }
                if(helpNumbers.length == 2){
                    helpNumbers.shift()
                    helpNumbers.push(helpNum)
                }else{
                    helpNumbers.push(helpNum)
                }
                PLAYER.doorCol = true;
                c.font = "20px VT323, monospace";
                if(finished[helpNum] == 2 || !finalDoorUnlocked){
                    c.fillStyle = "red";
                    c.fillText("LOCKED", platformX + 7, platformY);
                }else{
                    if(playingMultiplayer){
                        if(player1.doorCol && !player2.doorCol || !player1.doorCol && player2.doorCol || helpNumbers[0] != helpNumbers[1]){
                            c.fillStyle = "yellow";
                            c.fillText("1 / 2", platformX + 11, platformY);
                        }else if(player1.doorCol && player2.doorCol && helpNumbers[0] == helpNumbers[1]){
                            c.fillStyle = "lime";
                            c.fillText("Enter [e]", platformX - 3, platformY);
                        }
                    }else{
                        c.fillStyle = "lime";
                        c.fillText("Enter [e]", platformX - 3, platformY);
                    }
                }
                break;
            }
        }
    } 
}

//---------------------------------------- BOSS Collision
let bossX = 1000000;
let bossY = 0;

//Boss Collision
const bossCollision = (PLAYER) => {
    if (
        PLAYER.y + PLAYER.height >= bossY &&
        PLAYER.y <= bossY + 80 &&
        PLAYER.x + PLAYER.width >= bossX &&
        PLAYER.x <= bossX + 80
    ) {
        PLAYER.canAttack = true;
        if(currentFrameBoss == 6){
            dead();
        }
    } else {
        PLAYER.canAttack = false;
    }
};

//---------------------------------------- BOSS Moving X and Y

let bossVelocity = 1;

let nowBossMoveY;
let thenBossMoveY = Date.now();
let deltaBossMoveY;
let bossMoveYId;

// Mutliplayer Target calculator

let possibleTarget1 = 0;
let possibleTarget2 = 0;

let targetInterval;

let targetX = 0;
let targetY = 0;

const setTarget = () => {
    targetInterval = setInterval(() => {
        possibleTarget1 = 0; 
        possibleTarget2 = 0;
        possibleTarget1 = Math.sqrt(Math.pow(player1.y - bossY, 2) + Math.pow(player1.x - bossX, 2))
        possibleTarget2 = Math.sqrt(Math.pow(player2.y - bossY, 2) + Math.pow(player2.x - bossX, 2))
    }, 1000);
}

//Boss Moving Y
const bossMoveY = () => {
    bossMoveYId = requestAnimationFrame(bossMoveY)
    nowBossMoveY = Date.now();
    deltaBossMoveY  = nowBossMoveY  - thenBossMoveY ;
    if (deltaBossMoveY > interval) {
        thenBossMoveY = nowBossMoveY - (deltaBossMoveY % interval);
        if(playingMultiplayer){
            if(possibleTarget1 <= possibleTarget2){
                targetY = player1.y;
                targetX = player1.x;
            }else{
                targetY = player2.y;
                targetX = player2.x;
            }
        }else{
            targetY = player1.y;
            targetX = player1.x;
        }
        if(targetY - 30 >= bossY){
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

        if(targetX - 25 > bossX){
            bossX += bossVelocity;
        }else{
            bossX -= bossVelocity;
        }
    }
}


//---------------------------------------Enter to the Level Function

let entered = false;

window.addEventListener("keydown", (event) => {
    if ((event.key == "e" || event.key == "E") && player1.doorCol && !entered && finished[helpNum] != 2 && finalDoorUnlocked && inGame && canEnter & !playingMultiplayer ) {
        entered = true;
        enterFunction();
    } else if ((event.key == "e" || event.key == "E") && player1.doorCol && player2.doorCol && !entered && finished[helpNum] != 2 && finalDoorUnlocked && inGame && canEnter && helpNumbers[0] == helpNumbers[1]) {
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
                player1.x = 40;
                player1.y = 500;
                if(playingMultiplayer){
                    player2.x = 40;
                    player2.y = 500;
                }
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
                player1.x = 40;
                player1.y = 515;
                if(playingMultiplayer){
                    player2.x = 40;
                    player2.y = 515;
                }  
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
                player1.x = 20;
                player1.y = 390;
                if(playingMultiplayer){
                    player2.x = 20;
                    player2.y = 390;
                }
            }
            spawnCords();
            darkness = true;
            music.src = "./res/music/song2.mp3";
            doorsTime = 37000;
            music.play();
        }else if(helpNum == 3){ //Level 4
            spawnCords = () =>{
                player1.x = 40;
                player1.y = 515;
                if(playingMultiplayer){
                    player2.x = 40;
                    player2.y = 515;
                }
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
                player1.x = 512;
                player1.y = 485;
                if(playingMultiplayer){
                    player2.x = 512;
                    player2.y = 485;
                }
            }
            spawnCords();
            music.src = "./res/music/song4.mp3";
            doorsTime = 23000;
            music.play();
        }else if(helpNum == 5){ //Level 6
            spawnCords = () =>{
                player1.x = 20;
                player1.y= 485;
                if(playingMultiplayer){
                    player2.x = 20;
                    player2.y= 485;
                }
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
                player1.x = 500;
                player1.y = 485;
                if(playingMultiplayer){
                    player2.x = 500;
                    player2.y = 485;
                }
            }
            spawnCords();
            music.src = "./res/music/song6.mp3";
            doorsTime = 39000;
            music.play();
        }else if(helpNum == 7){ //Level 8
            spawnCords = () =>{
                player1.x = 20;
                player1.y = 515;
                if(playingMultiplayer){
                    player2.x = 20;
                    player2.y = 515;
                }
            }
            spawnCords();
            darkness = true;
            music.src = "./res/music/song7.mp3";
            doorsTime = 48000;
            music.play();
        }else if(helpNum == 8){ //Level 9
            spawnCords = () =>{
                player1.x = 20;
                player1.y = 420;
                if(playingMultiplayer){
                    player2.x = 20;
                    player2.y = 420;
                }
            }
            spawnCords();
            music.src = "./res/music/song8.mp3";
            doorsTime = 40000;
            music.play();
        }else if(helpNum == 9){ //Level 10
            rising.style.display = "block";
            risingLavaActivated = true;
            spawnCords = () =>{
                player1.x = 20;
                player1.y = 485;
                if(playingMultiplayer){
                    player2.x = 20;
                    player2.y = 485;
                }
            }
            spawnCords();
            music.src = "./res/music/song9.mp3";
            doorsTime = 28000;
            music.play();
        }else if(helpNum == 10){ //Level 11
            spawnCords = () =>{
                player1.x = 20;
                player1.y = 515;
                if(playingMultiplayer){
                    player2.x = 20;
                    player2.y = 515;
                }
            }
            spawnCords();
            music.src = "./res/music/song10.mp3";
            doorsTime = 30000;
            music.play();
            spawnGhostCords = () => {
                xGhost = 600;
                yGhost = 150;
            }
            spawnGhostCords();
        }else if(helpNum == 11){ //Level 12
            spawnCords = () =>{
                player1.x = 500;
                player1.y = 70;
                if(playingMultiplayer){
                    player2.x = 500;
                    player2.y = 70;
                }
            }
            spawnCords();
            music.src = "./res/music/song11.mp3";
            doorsTime = 36000;
            music.play();
        }else if(helpNum == 12){ //Level 13
            spawnCords = () =>{
                player1.x = 20;
                player1.y = 515;
                if(playingMultiplayer){
                    player2.x = 20;
                    player2.y = 515;
                }
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
                player1.x = 40;
                player1.y = 515;
                if(playingMultiplayer){
                    player2.x = 40;
                    player2.y = 515;
                }
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
                player1.x = 40;
                player1.y = 515;
                if(playingMultiplayer){
                    player2.x = 40;
                    player2.y = 515;
                }
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
        gravity(player1);
        if(playingMultiplayer){
            gravity(player2)
        }
            }, 1300);
}

//----------------------------------------BOSS LEVEL
const bossLevel = () => {
    finalDoorUnlocked = false;
    if(playingMultiplayer){
        setTarget();
    }
    generatorAttackFunction();
    gravity(player1);
    if(playingMultiplayer){
        gravity(player2)
    }
    spawnCords = () => {
        player1.x = 500;
        player1.y= 220;
        if(playingMultiplayer){
            player2.x = 500;
            player2.y= 220;        
        }
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
        gravity(player1);
        if(playingMultiplayer){
            gravity(player2)
        }
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
            player1.velocity= 0;
            player1.velocityRight = 0;
            player1.velocityLeft = 0;
            player1.velocityJump = 0;
            music.currentTime = 0;
            clearTimeout(setTimeoutDoor)
            setTimeoutDoor = setTimeout(() => {
                doorTimeout = true;
            }, doorsTime);
            spawnCords();
            unCrouch(player1);
            unCrouch(player2);
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
                player1.velocity= 0;
                player1.velocityRight = 0;
                player1.velocityLeft = 0;
                player1.velocityJump = 0;
                if(hearts == 0 || frameDoor == 3 || usedRetry || risingPercent >= -95){
                    if(playingMultiplayer){
                        clearInterval(targetInterval);
                    }
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
        gravity(player1);
        if(playingMultiplayer){
            gravity(player2)
        }
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
    canvas.style.filter = "blur(0)";
    background.style.filter = "blur(0)";
    rising.style.filter = "blur(0)";
    black.style.opacity = "0";
    risingLavaActivated = false;
    finalDoorUnlocked = true;
    player1.canAttack = false;
    if(playingMultiplayer){
        player2.canAttack = false;
    }
    
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
            if(playingMultiplayer){
                clearInterval(targetInterval);
            }
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
            player1.x = 120;
            player1.y = 500;
            if(playingMultiplayer){
                player2.x = 120;
                player2.y = 500;
            }
        }else if(helpNum == 1){
            player1.x = 300;
            player1.y = 410;
            if(playingMultiplayer){
                player2.x = 300;
                player2.y = 410;
            }
        }else if(helpNum == 2){
            player1.x = 560;
            player1.y = 370;
            if(playingMultiplayer){
                player2.x = 560;
                player2.y = 370;
            }
        }else if(helpNum == 3){
            player1.x = 720;
            player1.y = 500;
            if(playingMultiplayer){
                player2.x = 720;
                player2.y = 500;
            }
        }else if(helpNum == 4){
            player1.x = 910;
            player1.y = 400;
            if(playingMultiplayer){
                player2.x = 910;
                player2.y = 400;
            }
        }else if(helpNum == 5){
            player1.x = 880;
            player1.y = 300;
            if(playingMultiplayer){
                player2.x = 880;
                player2.y = 300;
            }
        }else if(helpNum == 6){
            player1.x = 582;
            player1.y = 290;
            if(playingMultiplayer){
                player2.x = 582;
                player2.y = 290;
            }
        }else if(helpNum == 7){
            player1.x = 400;
            player1.y = 300;
            if(playingMultiplayer){
                player2.x = 400;
                player2.y = 300;
            }
        }else if(helpNum == 8){
            player1.x = 220;
            player1.y= 300;
            if(playingMultiplayer){
                player2.x = 220;
                player2.y= 300;
            }
        }else if(helpNum == 9){
            player1.x = 20;
            player1.y = 260;
            if(playingMultiplayer){
                player2.x = 20;
                player2.y = 260;
            }
        }else if(helpNum == 10){
            player1.x = 20;
            player1.y= 80;
            if(playingMultiplayer){
                player2.x = 20;
                player2.y = 80;
            }
        }else if(helpNum == 11){
            player1.x = 240;
            player1.y= 80;
            if(playingMultiplayer){
                player2.x = 240;
                player2.y = 80; 
            }
        }else if(helpNum == 12){
            player1.x = 560;
            player1.y = 50;
            if(playingMultiplayer){
                player2.x = 560;
                player2.y = 50;
            }
        }else if(helpNum == 13){
            player1.x = 880;
            player1.y = 200;
            if(playingMultiplayer){
                player2.x = 880;
                player2.y = 200;
            }
        }else if(helpNum == 14 || helpNum == 15){
            player1.x = 920;
            player1.y = 80;
            if(playingMultiplayer){
                player2.x = 920;
                player2.y = 80;
            }
        }
        setTransitionCords();
        fadeOutTransition()
        backToLobbyEntered = false;
        goingBackToTheLobby = false;
        gravity(player1);
        if(playingMultiplayer){
            gravity(player2)
        }
    }, 1300);
}
//Back from Level to the Lobby
button_back.onclick = () => {
    canEnter = false; //Now you cant spam "e"
    backToLobby();
}
//Resume Function
button_resume.onclick = () => {
    canvas.style.filter = "blur(0)"
    background.style.filter = "blur(0)"
    rising.style.filter = "blur(0)"
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
    canvas.style.filter = "blur(0)";
    background.style.filter = "blur(0)";
    rising.style.filter = "blur(0)";
    setTimeout(() => {
        game.style.display = "none";
        startMenu.style.display = "block";
        playButton.style.pointerEvents = "auto";
        playButton.style.display = "block";
        playButtonMulti.style.pointerEvents = "auto";
        playButtonMulti.style.display = "block";
        creditsButton.style.display = "block";
        black.style.opacity = "0";
        fullBlack.style.opacity = "0";
        playingMultiplayer = false;
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
    if(playingMultiplayer){
        clearInterval(targetInterval);
    }
    black.style.opacity = "0";
    canvas.style.filter = "blur(0)"
    background.style.filter = "blur(0)"
    rising.style.filter = "blur(0)"
    dead();
}


//----------------------------------------ESC Button Function
 
const escFunction = () => {
    canvas.style.filter = "blur(1px)";
    background.style.filter = "blur(1px)";
    rising.style.filter = "blur(1px)";
    if(JSON.stringify(lobby) !== JSON.stringify(platformLevel1)){ //When Lobby and current level are not same
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
            canvas.style.filter = "blur(0)";
            background.style.filter = "blur(0)";
            rising.style.filter = "blur(0)";
            esc.style.display = "none"; 
            escShowed = false;
            black.style.opacity = "0";
        }
    }else if(JSON.stringify(lobby) === JSON.stringify(platformLevel1)){ //When Lobby and current level are same
        button_back.style.display = "none";
        button_resume.style.display = "block";
        button_retry.style.display = "none";
        button_menu.style.display = "block";
        if(!escShowed){
            esc.style.display = "flex"; 
            escShowed = true;
            black.style.opacity = "0.6";
        }else if(escShowed){
            canvas.style.filter = "blur(0)";
            background.style.filter = "blur(0)";
            rising.style.filter = "blur(0)";
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

const objectsCollision = (PLAYER) => {
    if(playingBossFight){
        bossCollision(PLAYER);
    }
    ghostCollision(PLAYER);
    for (let i = 0; i < platformLevel1.length; i++) {
        //Spikes and Moving Spikes
        if ((platformLevel1[i] == 2 || platformLevel1[i] == 4 || platformLevel1[i] == 23 || platformLevel1[i] == 24) || (platformLevel1[i] == 10 || platformLevel1[i] == 20 || platformLevel1[i] == 21 || platformLevel1[i] == 22) && canDieOnSpike == true) {
            let platformX = (i % 32) * 32;
            let platformY = Math.floor(i / 32) * 32;
            if (
                PLAYER.y + PLAYER.height >= platformY + 10 &&
                PLAYER.y + PLAYER.height <= platformY + 27 + PLAYER.height &&
                PLAYER.x + PLAYER.width >= platformX + 10 &&
                PLAYER.x <= platformX + 22
            ) {
                dead();
            }
        }
        //Lava
        if (platformLevel1[i] == 3) {
            let platformX = (i % 32) * 32;
            let platformY = Math.floor(i / 32) * 32;
            if (
                PLAYER.y + PLAYER.height >= platformY + 10 &&
                PLAYER.y + PLAYER.height <= platformY + 32 &&
                PLAYER.x + PLAYER.width >= platformX + 10 &&
                PLAYER.x <= platformX + 22
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
                PLAYER.y + PLAYER.height >= platformY + 10 &&
                PLAYER.y + PLAYER.height <= platformY + 64 + PLAYER.height &&
                PLAYER.x + PLAYER.width >= platformX + 10 &&
                PLAYER.x <= platformX + 22
            ) {
                if(PLAYER == player1){
                    sfx.src = "./res/sfx/portal_sfx.mp3";
                    sfx.play();
                }else{
                    sfx2.src = "./res/sfx/portal_sfx.mp3";
                    sfx2.play();
                }
                PLAYER.x = cordsPortalX2;
                PLAYER.y= cordsPortalY2;
            }
        }
        //Portal 2
        if (platformLevel1[i] == 12) {
            let platformX = (i % 32) * 32;
            let platformY = Math.floor(i / 32) * 32;
            if (
                PLAYER.y + PLAYER.height >= platformY + 10 &&
                PLAYER.y + PLAYER.height <= platformY + 64 + PLAYER.height &&
                PLAYER.x + PLAYER.width >= platformX + 10 &&
                PLAYER.x <= platformX + 22
            ) {
                if(PLAYER == player1){
                    sfx.src = "./res/sfx/portal_sfx.mp3";
                    sfx.play();
                }else{
                    sfx2.src = "./res/sfx/portal_sfx.mp3";
                    sfx2.play();
                }
                PLAYER.x = cordsPortalX1;
                PLAYER.y= cordsPortalY1;
            }
        }
        //Closing Doors
        if (platformLevel1[i] == 30) {
            let platformX = (i % 32) * 32;
            let platformY = Math.floor(i / 32) * 32;
            if (
                PLAYER.y + PLAYER.height >= platformY &&
                PLAYER.y + PLAYER.height <= platformY + 64 &&
                PLAYER.x + PLAYER.width >= platformX + 24 &&
                PLAYER.x <= platformX + 40
            ) {
                PLAYER.closingDoorCol = true;
                if((player1.closingDoorCol && !player2.closingDoorCol || !player1.closingDoorCol && player2.closingDoorCol) && playingMultiplayer){
                    c.font = "20px VT323, monospace";
                    c.fillStyle = "yellow";
                    c.fillText("1 / 2", platformX + 11, platformY);
                }
                if((!backToLobbyEntered && frameDoor < 1 && !playingMultiplayer) || (!backToLobbyEntered && frameDoor < 1 && player1.closingDoorCol && player2.closingDoorCol)){
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
            } else {
                PLAYER.closingDoorCol = false;
            }
        }
        //Key
        if (platformLevel1[i] == 31) {
            let platformX = (i % 32) * 32;
            let platformY = Math.floor(i / 32) * 32;
            if (
                PLAYER.y + PLAYER.height >= platformY &&
                PLAYER.y + PLAYER.height <= platformY + 64 &&
                PLAYER.x + PLAYER.width >= platformX &&
                PLAYER.x <= platformX + 32
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
                PLAYER.y + PLAYER.height >= platformY &&
                PLAYER.y + PLAYER.height <= platformY + 232 &&
                PLAYER.x + PLAYER.width >= platformX &&
                PLAYER.x <= platformX + 32
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

const orbCollision = (PLAYER) => {
    for (let i = 0; i < platformLevel1.length; i++) {
        if (platformLevel1[i] == 5) {
            let platformX = (i % 32) * 32;
            let platformY = Math.floor(i / 32) * 32;
            if (
                PLAYER.y + PLAYER.height >= platformY &&
                PLAYER.y + PLAYER.height <= platformY + 32 + PLAYER.height &&
                PLAYER.x + PLAYER.width >= platformX &&
                PLAYER.x <= platformX + 32
            ) {
                PLAYER.canOrbJump = true;
                break;
            } else {
                PLAYER.canOrbJump = false; 
            }
        }
    }
}

//---------------------------------------- JUMP PAD Collision

const jumpPadCollision = (PLAYER) => {
    for (let i = 0; i < platformLevel1.length; i++) {
        if (platformLevel1[i] == 29) {
            let platformX = (i % 32) * 32;
            let platformY = Math.floor(i / 32) * 32 + 16;
            if (
                PLAYER.y + PLAYER.height >= platformY &&
                PLAYER.y + PLAYER.height <= platformY + PLAYER.height &&
                PLAYER.x + PLAYER.width >= platformX &&
                PLAYER.x <= platformX + 32 &&
                inGame
            ) {
                PLAYER.canUseJumpPad = true;
                jump(PLAYER)
                break;
            } else {
                PLAYER.canUseJumpPad = false;
            }
        }
    }
}

//---------------------------------------- Stop Slide Collision

const stopSlideDetection = (PLAYER) => {
    for (let i = 0; i < platformLevel1.length; i++) {
        if (platformLevel1[i] == 36 || platformLevel1[i] == 37) {
            let platformX = (i % 32) * 32;
            let platformY = Math.floor(i / 32) * 32;
            if (
                PLAYER.y + PLAYER.height > platformY + 10 &&
                PLAYER.y < platformY + 10 &&
                PLAYER.x - PLAYER.velocityLeft < platformX + 32 &&
                PLAYER.x > platformX
                ||
                PLAYER.y + PLAYER.height > platformY + 10 &&
                PLAYER.y < platformY + 10 &&
                PLAYER.x + PLAYER.width + PLAYER.velocityRight + 0.2 > platformX &&
                PLAYER.x < platformX + 32
            ) {
                PLAYER.canSlideOnWall = true;
                break;
            } else {
                PLAYER.canSlideOnWall = false;  
            }
        } 
    }
}

//---------------------------------------- GHOST Collision

let ghostKilled = false;
let saveGhostCordsX = 0;
let saveGhostCordsY = 0;

const ghostCollision = (PLAYER) => {
    if(
        PLAYER.y + PLAYER.height > yGhost &&
        PLAYER.y < yGhost + 32 &&
        PLAYER.x + PLAYER.width > xGhost + 10 &&
        PLAYER.x < xGhost + 20
    ){
        dead();
    } else if (
        PLAYER.y + PLAYER.height > yGhost - 20 &&
        PLAYER.y < yGhost + 32 &&
        PLAYER.x + PLAYER.width > xGhost + 10 &&
        PLAYER.x < xGhost + 20
    ){
        spawnGhostCords = () => {
            xGhost = 10000;
            yGhost = 10000;
        }
        ghostKilled = true;
        PLAYER.bounced = true;
        spawnGhostCords();
        jump(PLAYER)
    }
}

//---------------------------------------- Crouch and Stand (Player)

//This Function is checking, if you do not have a block above you (then you can stand up)
let aboveHeadCollision = (PLAYER) => {
    PLAYER.ahCollision = window.requestAnimationFrame(() => aboveHeadCollision(PLAYER));
    if (PLAYER.crouched == true) {
        for (let i = 0; i < platformLevel1.length; i++) {
            if (platformLevel1[i] == 1 || platformLevel1[i] == 6 || platformLevel1[i] == 7 || platformLevel1[i] == 9 || platformLevel1[i] == 18 || platformLevel1[i] == 19 || platformLevel1[i] == 32 || platformLevel1[i] == 33 || platformLevel1[i] == 36 || platformLevel1[i] == 37) {
                let platformX = (i % 32) * 32;
                let platformY = Math.floor(i / 32) * 32;
                if (
                    PLAYER.y + PLAYER.height >= platformY + 64 &&
                    PLAYER.y + PLAYER.height <= platformY + 64 &&
                    PLAYER.x + PLAYER.width >= platformX &&
                    PLAYER.x <= platformX + 32
                ) {
                    PLAYER.canStandUp = false;
                    break;
                }else{
                    PLAYER.canStandUp = true;
                }
            }
        }
    }
};

//Crouching Function

let crouch = (PLAYER) => {
    if(!PLAYER.stillJumping && !PLAYER.ladderCol){
        PLAYER.crouched = true;
        PLAYER.height = 20;
        PLAYER.y += 20;
        aboveHeadCollision(PLAYER)
    }
}

//UnCrouching Function (Stand Up)
let unCrouch = (PLAYER) => {
    if (PLAYER.canStandUp == true) {
        PLAYER.height = 40;
        PLAYER.y -= 20;
        PLAYER.crouched = false;
        cancelAnimationFrame(PLAYER.gravityId);
        gravity(PLAYER);
        cancelAnimationFrame(PLAYER.ahCollision);
    }
    PLAYER.canStandUp = true;
};

//You will Stand Up if you do not have above you a block
let under = (PLAYER) => {
    PLAYER.underCollision = window.requestAnimationFrame(() => under(PLAYER));
    if(PLAYER.canStandUp == true){
        unCrouch(PLAYER);
        PLAYER.wasUnder = true;
        cancelAnimationFrame(PLAYER.underCollision);
    }
}

//---------------------------------------- Collision Canvas BOTTOM and BLOCKS

const bottomCollision = (PLAYER) => {
    for (let i = 0; i < platformLevel1.length; i++) {
        if (platformLevel1[i] == 1 || platformLevel1[i] == 6 || platformLevel1[i] == 7 || platformLevel1[i] == 9 || platformLevel1[i] == 18 || platformLevel1[i] == 19 || platformLevel1[i] == 32 || platformLevel1[i] == 33 || platformLevel1[i] == 36 || platformLevel1[i] == 37) {
            let platformX = (i % 32) * 32;
            let platformY = Math.floor(i / 32) * 32;
            if (
                PLAYER.y + PLAYER.height >= platformY &&
                PLAYER.y + PLAYER.height <= platformY + 32 &&
                PLAYER.x + PLAYER.width >= platformX &&
                PLAYER.x <= platformX + 32
            ) {
                PLAYER.stillJumping = false;
                if(PLAYER == player1){
                    if(sfx_land.paused && sfx_land.src != "./res/sfx/small_land.mp3" && PLAYER.velocity>= 3 && PLAYER.velocity< 8 && !PLAYER.ladderCol){
                        sfx_land.src = "./res/sfx/small_land.mp3"
                        sfx_land.play();
                    }else if(sfx_land.paused && sfx_land.src != "./res/sfx/large_land.mp3" && PLAYER.velocity>= 8 && !PLAYER.ladderCol){
                        sfx_land.src = "./res/sfx/large_land.mp3"
                        sfx_land.play();
                    }
                    sfx_climb.pause()
                }else{
                    if(sfx_land2.paused && sfx_land.src != "./res/sfx/small_land.mp3" && PLAYER.velocity>= 3 && PLAYER.velocity< 8 && !PLAYER.ladderCol){
                        sfx_land2.src = "./res/sfx/small_land.mp3"
                        sfx_land2.play();
                    }else if(sfx_land2.paused && sfx_land.src != "./res/sfx/large_land.mp3" && PLAYER.velocity>= 8 && !PLAYER.ladderCol){
                        sfx_land2.src = "./res/sfx/large_land.mp3"
                        sfx_land2.play();
                    }
                    sfx_climb2.pause()
                }
                PLAYER.y = platformY - PLAYER.height;
                PLAYER.velocity = 0;
                PLAYER.velocityGoingDown = 0;
                PLAYER.orbUsed = false;
                PLAYER.slideJumped = false;
                if(platformLevel1[i] == 1 || platformLevel1[i] == 6 || platformLevel1[i] == 32 || platformLevel1[i] == 33){ //You are on Rock
                    PLAYER.onRock = true; 
                    PLAYER.onWood = false;
                }else if(platformLevel1[i] == 7 || platformLevel1[i] == 19 || platformLevel1[i] == 18 || platformLevel1[i] == 9){ //You are on Wood
                    PLAYER.onRock = false;
                    PLAYER.onWood = true;
                }
                if(PLAYER.downPressed && !PLAYER.crouched){ //You will still crouch
                    crouch(PLAYER);
                }
                cancelAnimationFrame(PLAYER.gravityId);
                cancelAnimationFrame(PLAYER.goingDownId);
                break;
            }
        }
    }
    //Canvas Bottom detection
    if (canvas.height - PLAYER.height < PLAYER.y) {
        PLAYER.y = canvas.height - PLAYER.height;
        PLAYER.velocity = 0;
        PLAYER.velocityGoingDown = 0;
        PLAYER.orbUsed = false;
        PLAYER.stillJumping = false;
        cancelAnimationFrame(PLAYER.goingDownId);
        cancelAnimationFrame(PLAYER.gravityId);
    }
}

//---------------------------------------- Hitting your head to the block Collision

const upCollision = (PLAYER) => {
    if (PLAYER.deltaUp > interval) {
        PLAYER.thenUp = PLAYER.nowUp - (PLAYER.deltaUp % interval);
        PLAYER.velocityJump = PLAYER.velocityJump/1.22
        PLAYER.y-= PLAYER.velocityJump;
        for (let i = 0; i < platformLevel1.length; i++) {
            if (platformLevel1[i] == 1 || platformLevel1[i] == 6 || platformLevel1[i] == 7 || platformLevel1[i] == 9 || platformLevel1[i] == 18 || platformLevel1[i] == 19 || platformLevel1[i] == 32 || platformLevel1[i] == 33 || platformLevel1[i] == 36 || platformLevel1[i] == 37) {
                let platformX = (i % 32) * 32;
                let platformY = Math.floor(i / 32) * 32 + 42;
                if (
                    PLAYER.y + PLAYER.height >= platformY &&
                    PLAYER.y + PLAYER.height <= platformY + 32 &&
                    PLAYER.x + PLAYER.width >= platformX &&
                    PLAYER.x <= platformX + 32
                ) {
                    if(PLAYER.ladderCol == true){
                        PLAYER.y = platformY - 42 - PLAYER.velocityGoingUp + PLAYER.height;
                    }else{
                        PLAYER.y = platformY - 39 - PLAYER.velocityJump + PLAYER.height;
                    }
                    PLAYER.stillJumping == false;
                    PLAYER.headHit = true;
                    PLAYER.velocityJump = 0;
                    PLAYER.velocity= 0;
                    PLAYER.velocityGoingUp = 0;
                    cancelAnimationFrame(PLAYER.goingUpId);
                    cancelAnimationFrame(PLAYER.jumpingId);
                    cancelAnimationFrame(PLAYER.gravityId);
                    gravity(PLAYER);
                    break;
                }
            }
        }
        if(PLAYER.velocityJump <= 0.35 && PLAYER.headHit == false){
            PLAYER.headHit = true;
            PLAYER.velocityJump = 0;
            PLAYER.velocityGoingUp = 0;
            PLAYER.velocity= 0;
            cancelAnimationFrame(PLAYER.jumpingId);
            cancelAnimationFrame(PLAYER.gravityId);
            gravity(PLAYER);
        }
    }
}

//----------------------------------------Ladder Collision

const ladderCollision = (PLAYER) => {
    for (let i = 0; i < platformLevel1.length; i++) {
        if (platformLevel1[i] == 26) {
            let platformX = (i % 32) * 32;
            let platformY = Math.floor(i / 32) * 32;
            if (
                PLAYER.y + PLAYER.height >= platformY + 22 &&
                PLAYER.y + PLAYER.height <= platformY + 54 &&
                PLAYER.x + PLAYER.width >= platformX + 10 &&
                PLAYER.x <= platformX + 22
            ) {
                if(PLAYER.crouched){
                    unCrouch(PLAYER);
                }
                PLAYER.onRock = false;
                PLAYER.onWood = false;
                PLAYER.ladderCol = true;
                cancelAnimationFrame(PLAYER.gravityId)
                PLAYER.canGravityActivate = true;
                break;
            } else {
                PLAYER.ladderCol = false;
            }
        }
    }
    //Cancel Ladder Functions
    if(PLAYER.ladderCol == false) {
        cancelAnimationFrame(PLAYER.goingUpId);
        cancelAnimationFrame(PLAYER.goingDownId);
        if(PLAYER.canGravityActivate == true){
            PLAYER.velocity= 0;
            gravity(PLAYER);
            PLAYER.canGravityActivate = false
        }
    }
}

//----------------------------------------Climbing on a Ladder - UP

const goingUp = (PLAYER) => {
    PLAYER.velocityGoingUp = 2;
    PLAYER.goingUpId = requestAnimationFrame(() => goingUp(PLAYER));
    PLAYER.nowGoingUp = Date.now();
    PLAYER.deltaGoingUp = PLAYER.nowGoingUp - PLAYER.thenGoingUp;
    if (PLAYER.deltaGoingUp > interval) {
        PLAYER.thenGoingUp = PLAYER.nowGoingUp - (PLAYER.deltaGoingUp % interval);
        if(PLAYER == player1){
            if(sfx_climb.paused && PLAYER.ladderCol && (!PLAYER.onWood || !PLAYER.onRock)){
                sfx_walk.pause();
                sfx_climb.src = "./res/sfx/ladder.mp3"
                sfx_climb.play();
            }
        }else{
            if(sfx_climb2.paused && PLAYER.ladderCol && (!PLAYER.onWood || !PLAYER.onRock)){
                sfx_walk2.pause();
                sfx_climb2.src = "./res/sfx/ladder.mp3"
                sfx_climb2.play();
            }
        }
        
        PLAYER.y -= PLAYER.velocityGoingUp;
        upCollision(PLAYER);
    }
}

//----------------------------------------Climbing on a Ladder - DOWN

const goingDown = (PLAYER) => {
    PLAYER.alreadyGoingDown = true;
    PLAYER.velocityGoingDown = 2;
    PLAYER.goingDownId = requestAnimationFrame(() => goingDown(PLAYER));
    PLAYER.nowGoingDown = Date.now();
    PLAYER.deltaGoingDown = PLAYER.nowGoingDown - PLAYER.thenGoingDown;
    if (PLAYER.deltaGoingDown > interval) {
        PLAYER.thenGoingDown = PLAYER.nowGoingDown - (PLAYER.deltaGoingDown % interval);
        if(PLAYER == player1){
            if(sfx_climb.paused && PLAYER.ladderCol){
                sfx_walk.pause();
                sfx_climb.src = "./res/sfx/ladder.mp3"
                setTimeout(() => {
                    sfx_climb.play();  
                }, 10);
            }
        }else{
            if(sfx_climb2.paused && PLAYER.ladderCol){
                sfx_walk2.pause();
                sfx_climb2.src = "./res/sfx/ladder.mp3"
                setTimeout(() => {
                    sfx_climb2.play();  
                }, 10);
            }
        }
        
        PLAYER.y += PLAYER.velocityGoingDown;
        bottomCollision(PLAYER);
    }
}

//SFX Walk Function


const sfxWalkFunction = (PLAYER) => {
    if(PLAYER == player1){
        if(sfx_walk.paused && sfx_jump.paused && (PLAYER.onWood || PLAYER.onRock) && (PLAYER.velocityRight > 2 || PLAYER.velocityLeft > 2) && !PLAYER.crouched && !PLAYER.ladderCol && PLAYER.velocity< 0.3 && !PLAYER.isJumping && (PLAYER.currentFrameRun % 2 == 0)) {
            if(PLAYER.onWood && !PLAYER.ladderCol){
                sfx_walk.src = "./res/sfx/wood_steps.mp3"; //Walking on wood SFX
            }else if(PLAYER.onRock && !PLAYER.ladderCol){
                sfx_walk.src = "./res/sfx/stone_steps.mp3"; //Walking on rock SFX
            }
            sfx_walk.play();
        }
    }else{
        if(sfx_walk2.paused && sfx_jump2.paused && (PLAYER.onWood || PLAYER.onRock) && (PLAYER.velocityRight > 2 || PLAYER.velocityLeft > 2) && !PLAYER.crouched && !PLAYER.ladderCol && PLAYER.velocity< 0.3 && !PLAYER.isJumping && (PLAYER.currentFrameRun % 2 == 0)) {
            if(PLAYER.onWood && !PLAYER.ladderCol){
                sfx_walk2.src = "./res/sfx/wood_steps.mp3"; //Walking on wood SFX
            }else if(PLAYER.onRock && !PLAYER.ladderCol){
                sfx_walk2.src = "./res/sfx/stone_steps.mp3"; //Walking on rock SFX
            }
            sfx_walk2.play();
        }
    }
    
}

//---------------------------------------- Gravity Function (Player)

let gravity = (PLAYER) => {
    if(PLAYER.velocityJump < 0.1){
        PLAYER.gravityId = requestAnimationFrame(() => gravity(PLAYER));
        PLAYER.nowDown = Date.now();
        PLAYER.deltaDown = PLAYER.nowDown - PLAYER.thenDown;
        if (PLAYER.deltaDown > interval) {
            PLAYER.thenDown = PLAYER.nowDown - (PLAYER.deltaDown % interval);
            if(PLAYER.crouched && PLAYER.velocity> 1){
                unCrouch(PLAYER);
            }
            if(PLAYER.velocity >= 0.6){
                if(PLAYER == player1){
                    sfx_climb.pause();
                }else{
                    sfx_climb2.pause();
                }
            }
            if(PLAYER == player1){
                if(!sfx_walk.paused && PLAYER.velocityRight <= 2 && PLAYER.velocityLeft <= 2 && (!PLAYER.onWood || !PLAYER.onRock) || PLAYER.crouched || PLAYER.ladderCol || PLAYER.velocity>= 0.3 || PLAYER.isJumping && PLAYER.currentFrameRun != 1){
                    sfx_walk.pause();
                }
            }else{
                if(!sfx_walk2.paused && PLAYER.velocityRight <= 2 && PLAYER.velocityLeft <= 2 && (!PLAYER.onWood || !PLAYER.onRock) || PLAYER.crouched || PLAYER.ladderCol || PLAYER.velocity>= 0.3 || PLAYER.isJumping && PLAYER.currentFrameRun != 1){
                    sfx_walk2.pause();
                }
            }
            
            PLAYER.velocityGoingUp = 0;
            orbCollision(PLAYER);
            jumpPadCollision(PLAYER);
            if(PLAYER.canSlideOnWall){
                PLAYER.velocity = 0.5;
            }else{
                PLAYER.velocity += 0.3;
            }
            PLAYER.y += PLAYER.velocity;
            bottomCollision(PLAYER); //Condition
        }
    } 
}

gravity(player1);
if(playingMultiplayer){
    gravity(player2)
}

//---------------------------------------- Jumping Function (Player)

let jump = (PLAYER) => {
    if((PLAYER.stillJumping == false || PLAYER.canOrbJump == true && PLAYER.orbUsed == false) || PLAYER.canUseJumpPad || PLAYER.bounced || PLAYER.canSlideOnWall && !PLAYER.slideJumped){
        if(PLAYER.canSlideOnWall){
            setTimeout(() => {
                PLAYER.slideJumped = false;
            }, 500);
        }
        PLAYER.onRock = false;
        PLAYER.onWood = false;
        if(PLAYER == player1){
            sfx_walk.currentTime = 0;
            if(!sfx_walk.paused) {
                sfx_walk.pause(); //Jumping = OFF SFX Walk
            }
        }else{
            sfx_walk2.currentTime = 0;
            if(!sfx_walk2.paused) {
                sfx_walk2.pause(); //Jumping = OFF SFX Walk
            }
        }
        if(PLAYER.canOrbJump && PLAYER.velocity >= 0 || PLAYER.canUseJumpPad && PLAYER.velocity >= 0){
            cancelAnimationFrame(PLAYER.gravityId);
            cancelAnimationFrame(PLAYER.jumpingId);
            PLAYER.velocityJump = 0;
            PLAYER.orbUsed = true;
            setTimeout(() => {
                PLAYER.orbUsed = false;
            }, 250);
            if(PLAYER == player1){
                sfx_extra_jump.src = "./res/sfx/orb_jump.mp3"
                sfx_extra_jump.play();
            }else{
                sfx_extra_jump2.src = "./res/sfx/orb_jump.mp3"
                sfx_extra_jump2.play();
            }
        }else if(!PLAYER.canOrbJump && !PLAYER.bounced && !PLAYER.ladderCol && !PLAYER.canUseJumpPad){
            if(PLAYER == player1){
                sfx_jump.src = "./res/sfx/jump.mp3"
                sfx_jump.play();
            }else{
                sfx_jump2.src = "./res/sfx/jump.mp3"
                sfx_jump2.play();
            }
        }else if(!PLAYER.canOrbJump && PLAYER.bounced && !PLAYER.ladderCol && !PLAYER.canUseJumpPad){
            if(PLAYER == player1){
                sfx_extra_jump.src = "./res/sfx/bonus_jump.mp3"
                sfx_extra_jump.play();
            }else{
                sfx_extra_jump2.src = "./res/sfx/bonus_jump.mp3"
                sfx_extra_jump2.play();
            }
        }
        PLAYER.bounced = false;
        PLAYER.headHit = false;
        if(PLAYER.canUseJumpPad){
            PLAYER.velocityJump = 30;
        }else{
            PLAYER.velocityJump = 16;
        }
        if(PLAYER.canSlideOnWall){
            PLAYER.slideJumped = true;
        }
        PLAYER.canUseJumpPad = false;
        PLAYER.stillJumping = true;
        if(PLAYER.crouched){
            unCrouch(PLAYER);
        }
        const jumping = () => {
            PLAYER.jumpingId = requestAnimationFrame(() => jumping());
            PLAYER.nowUp = Date.now();
            PLAYER.deltaUp = PLAYER.nowUp - PLAYER.thenUp;
            if (PLAYER.deltaUp > interval) {
                PLAYER.thenUp = PLAYER.nowUp - (PLAYER.deltaUp % interval);
                upCollision(PLAYER); //Podmínka
            }
        }
        PLAYER.velocity= 0;
        jumping();
    }
}
//----------------------------------------Moving Right Function (Player)

let moveRight = (PLAYER) => {
    PLAYER.velocityRight = 0.2;
    const movingRight = () => {
        PLAYER.animationIdRight = requestAnimationFrame(() => movingRight())
        PLAYER.nowRight = Date.now();
        PLAYER.deltaRight = PLAYER.nowRight - PLAYER.thenRight;
        if (PLAYER.deltaRight > interval) {
            PLAYER.thenRight = PLAYER.nowRight - (PLAYER.deltaRight % interval);
            //Crouched
            if(PLAYER.crouched == true && PLAYER.velocityRight >= 1){
                PLAYER.velocityRight -= 0.12;
                cancelAnimationFrame(PLAYER.gravityId);
                gravity(PLAYER);
            }else{ //Not Crouched
                if(PLAYER.isMovingRight == true){
                    sfxWalkFunction(PLAYER);
                    if(PLAYER.velocityRight < 4 && PLAYER.crouched == false){
                        PLAYER.turnedRight = true;
                        PLAYER.velocityRight += 0.12;
                    }else if(PLAYER.velocityRight < 1 && PLAYER.crouched == true){
                        PLAYER.velocityRight += 0.12;
                        cancelAnimationFrame(PLAYER.gravityId);
                        gravity(PLAYER);
                    }else if(PLAYER.velocityRight + 0.12 >= 4){
                        PLAYER.velocityRight = 4;
                    }else if(PLAYER.velocityRight >= 2 && PLAYER.velocityLeft >= 2){//If you walk to two sides at once, you won't move
                        PLAYER.velocityRight = 0;
                        PLAYER.velocityLeft = 0;
                    }
                    
                }else if(PLAYER.isMovingRight == false){
                    PLAYER.velocityRight -= 0.2;
                    if(PLAYER.velocityRight <= 0.1){
                        if(PLAYER.velocityRight > PLAYER.velocityLeft && PLAYER.isMovingRight){ //Fixing switching sides
                            PLAYER.turnedLeft = false;
                            PLAYER.turnedRight = true;
                        }
                        cancelAnimationFrame(PLAYER.animationIdRight);
                    }
                }
            
            }
            for (let i = 0; i < platformLevel1.length; i++) {
                if (platformLevel1[i] == 1 || platformLevel1[i] == 6 || platformLevel1[i] == 7 || platformLevel1[i] == 9 || platformLevel1[i] == 18 || platformLevel1[i] == 19 || platformLevel1[i] == 32 || platformLevel1[i] == 33 || platformLevel1[i] == 36 || platformLevel1[i] == 37) {
                    let platformX = (i % 32) * 32;
                    let platformY = Math.floor(i / 32) * 32;
                    if (
                        PLAYER.y + PLAYER.height > platformY &&
                        PLAYER.y < platformY + 32 &&
                        PLAYER.x + PLAYER.width + PLAYER.velocityRight + 0.2 > platformX &&
                        PLAYER.x < platformX + 32
                    ) {
                        stopSlideDetection(PLAYER);
                        if(PLAYER.velocityRight > PLAYER.velocityLeft && PLAYER.isMovingRight){ //Fixing switching sides
                            PLAYER.turnedLeft = false;
                            PLAYER.turnedRight = true;
                        }
                        if(PLAYER.velocityRight >= 1 && PLAYER.velocityLeft >= 1){//If you walk to two sides at once, you won't move
                            PLAYER.velocityLeft = 0;
                            PLAYER.velocityRight = 0;
                        }
                        if(!PLAYER.canStandUp){ // This condition fixing uncrouch teleport bug
                            PLAYER.x = platformX - PLAYER.width - 0.12;
                        }
                        if(PLAYER.velocityRight > 0.5){
                            PLAYER.velocityRight = 0;
                            PLAYER.x = platformX - PLAYER.width - 1.2;
                        }else{
                            PLAYER.velocityRight = 0;
                        }
                        break;
                    }
                }
            }
            PLAYER.x += PLAYER.velocityRight;
            if  (PLAYER.x >= canvas.width - PLAYER.width) {
                PLAYER.x = canvas.width - PLAYER.width;
                PLAYER.velocityRight = 0;
                cancelAnimationFrame(PLAYER.animationIdRight);
            }
            if(PLAYER.stillJumping == false && !PLAYER.crouched){
                PLAYER.stillJumping = true;
                cancelAnimationFrame(PLAYER.gravityId);
                gravity(PLAYER);
            }
        }
    };
    movingRight();
};


//----------------------------------------Moving Left Function (Player)

let moveLeft = (PLAYER) => {
    PLAYER.velocityLeft = 0.2;
    const movingLeft = () => {
        PLAYER.animationIdLeft = requestAnimationFrame(() => movingLeft());
        PLAYER.nowLeft = Date.now();
        PLAYER.deltaLeft = PLAYER.nowLeft - PLAYER.thenLeft;
        if (PLAYER.deltaLeft > interval) {
            PLAYER.thenLeft = PLAYER.nowLeft - (PLAYER.deltaLeft % interval);
            //Crouched
            if(PLAYER.crouched == true && PLAYER.velocityLeft >= 1){
                PLAYER.velocityLeft -= 0.12;
                cancelAnimationFrame(PLAYER.gravityId);
                gravity(PLAYER);
            }else{ //Not Crouched
                if(PLAYER.isMovingLeft == true){
                    sfxWalkFunction(PLAYER);
                    if(PLAYER.velocityLeft < 4 && PLAYER.crouched == false){
                        PLAYER.turnedRight = false;
                        PLAYER.velocityLeft += 0.12;
                    }else if(PLAYER.velocityLeft <= 1 && PLAYER.crouched == true){
                        PLAYER.velocityLeft += 0.12;
                        cancelAnimationFrame(PLAYER.gravityId);
                        gravity(PLAYER);
                    }else if(PLAYER.velocityLeft + 0.12 >= 4){
                        PLAYER.velocityLeft = 4;
                    }else if(PLAYER.velocityRight >= 2 && PLAYER.velocityLeft >= 2){ //If you walk to two sides at once, you won't move
                        PLAYER.velocityRight = 0;
                        PLAYER.velocityLeft = 0;
                    }
                }else if(PLAYER.isMovingLeft == false){
                    PLAYER.velocityLeft -= 0.2;
                    if(PLAYER.velocityLeft <= 0.1){
                        if(PLAYER.velocityRight <= PLAYER.velocityLeft && PLAYER.isMovingLeft){ //Fixing switching sides
                            PLAYER.turnedLeft = true;
                            PLAYER.turnedRight = false;
                        }
                        cancelAnimationFrame(PLAYER.animationIdLeft);
                    }
                }
            }
            for (let i = 0; i < platformLevel1.length; i++) {
                if (platformLevel1[i] == 1 || platformLevel1[i] == 6 || platformLevel1[i] == 7 || platformLevel1[i] == 9 || platformLevel1[i] == 18 || platformLevel1[i] == 19 || platformLevel1[i] == 32 || platformLevel1[i] == 33 || platformLevel1[i] == 36 || platformLevel1[i] == 37) {
                    let platformX = (i % 32) * 32;
                    let platformY = Math.floor(i / 32) * 32;
                    if (
                        PLAYER.y+ PLAYER.height > platformY &&
                        PLAYER.y< platformY + 32 &&
                        PLAYER.x - PLAYER.velocityLeft < platformX + 32 &&
                        PLAYER.x > platformX 
                    ) {
                        stopSlideDetection(PLAYER);
                        if(PLAYER.velocityRight <= PLAYER.velocityLeft && PLAYER.isMovingLeft){ //Fixing switching sides
                            PLAYER.turnedLeft = true;
                            PLAYER.turnedRight = false;
                        }
                        if(PLAYER.velocityRight >= 1 && PLAYER.velocityLeft >= 1){//If you walk to two sides at once, you won't move
                            PLAYER.velocityLeft = 0;
                            PLAYER.velocityRight = 0;
                        }
                        if(!PLAYER.canStandUp){ // This condition fixing uncrouch teleport bug
                            PLAYER.x = platformX + PLAYER.width + 2.24;
                        }
                        if(PLAYER.velocityLeft > 0.5){
                            PLAYER.velocityLeft = 0;
                            PLAYER.x = platformX + PLAYER.width + 2.2;
                        }else{
                            PLAYER.velocityLeft = 0;
                        }
                        break;
                    }
                }
            }
            PLAYER.x -= PLAYER.velocityLeft;
            if  (PLAYER.x <= 0) {
                PLAYER.x = 0;
                PLAYER.velocityLeft = 0;
                cancelAnimationFrame(PLAYER.animationIdLeft);
            }
            if(PLAYER.stillJumping == false && !PLAYER.crouched){
                PLAYER.stillJumping = true;
                cancelAnimationFrame(PLAYER.gravityId);
                gravity(PLAYER);
            }
        }
    };
    movingLeft();
};

//--------------------------PUNCH Function

let canPlayBreakSound = true;

let currentHp = 100;

let punchedBossTimeout;

const punch = (PLAYER) => {
    if(!PLAYER.crouched && !PLAYER.punchCooldown){
        PLAYER.punchCooldown = true;
        PLAYER.punched = true;
        
        if(playingMultiplayer){
            if(PLAYER == player1){
                sfx_player.src = "./res/sfx/rioter_attack.mp3"; 
                sfx_player.play();
            }else{
                sfx_player2.src = "./res/sfx/ruby_attack.mp3";
                sfx_player2.play();
            }
        }else{
            if(playingAsRuby){
                sfx_player.src = "./res/sfx/ruby_attack.mp3";
            }else if(playingAsRioter){
                sfx_player.src = "./res/sfx/rioter_attack.mp3"; 
            }
            sfx_player.play();
        }
        if(PLAYER == player1){
            sfx_miss.src = "./res/sfx/miss.mp3"; 
            sfx_miss.play();
        }else{
            
            sfx_miss2.src = "./res/sfx/miss.mp3"; 
            sfx_miss2.play();
        }
        if(PLAYER.canAttack){
            if(PLAYER == player1){
                sfx_punch.src = "./res/sfx/punch.mp3";
                sfx_punch.play();
            }else{
                sfx_punch2.src = "./res/sfx/punch.mp3";
                sfx_punch2.play();
            }
            if(playingMultiplayer){
                currentHp -= 5.5566 / 1.5;
            }else{
                currentHp -= 5.5566; //5.5566
            }
            bossPunchedNumber = 2;
            clearTimeout(punchedBossTimeout);
            punchedBossTimeout = setTimeout(() => {
                bossPunchedNumber = 0;
            }, 400);
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
                        (PLAYER.y + PLAYER.height > platformY&&
                        PLAYER.y< platformY + 32 && 
                        PLAYER.x + PLAYER.width > platformX - 10 &&
                        PLAYER.x < platformX &&  PLAYER.turnedRight)
                        ||
                        (PLAYER.y + PLAYER.height > platformY &&
                        PLAYER.y< platformY + 32 &&
                        PLAYER.x < platformX + 42 &&
                        PLAYER.x > platformX + 32 &&  PLAYER.turnedLeft)
                    ) {
                        platformLevel1[i] = 0;
                        if(canPlayBreakSound){ //When you hit 2 blocks, sound will be played once
                            canPlayBreakSound = false;
                            if(PLAYER == player1){
                                sfx_punch.src = "./res/sfx/wall_break.mp3";
                                sfx_punch.play();
                            }else{
                                sfx_punch2.src = "./res/sfx/wall_break.mp3";
                                sfx_punch2.play();
                            }
                            
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
    player1.canAttack = false;
    if(playingMultiplayer){
        player2.canAttack = false;
    }
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
        gravity(player1);
        if(playingMultiplayer){
            gravity(player2)
        }
    });
    clearTimeout(setTimeoutDoor);
    music.pause();
    lives = 3;
    playingBossFight = false;
    clearInterval(targetInterval);
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
    player1.velocity= 0;
    cancelAnimationFrame(player1.gravityId);
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

window.addEventListener("keydown", (event) => {
    // W - Jumping / Climbing Up
    if ((event.key == up || event.key == UP) && player1.canStandUp == true && inGame && !player1.isJumping) {
        isJumping = true;
        if(player1.ladderCol){
            if(!player1.wPressed){
                player1.wPressed = true;
                goingUp(player1);
            }
        }else{
            if(!player1.jumpIntervalSet && player1.stillJumping){ //Better W pressed detection
                jump(player1)
                player1.jumpInterval = setInterval(() => {
                    if(player1.canOrbJump && player1.velocity== 0 && player1.slideJumped){
                        clearInterval(player1.jumpInterval)
                    }else{
                        jump(player1)
                    }
                }, 10);  
                setTimeout(() => {
                    clearInterval(player1.jumpInterval)
                }, 100);
            }else if(!player1.stillJumping && !player1.jumpIntervalSet){
                jump(player1);
            }
            player1.jumpIntervalSet = true;
        }
    // D - Moving Right / Climbing Right
    } else if ((event.key == right || event.key == RIGHT) && !player1.isMovingRight && inGame) {
        player1.isMovingRight = true;
        player1.turnedRight = true;
        player1.turnedLeft = false;
        cancelAnimationFrame(player1.animationIdRight);
        player1.canSlideOnWall = false;
        moveRight(player1);
    // A - Moving Left / Climbing Left
    } else if ((event.key == left || event.key == LEFT) && !player1.isMovingLeft && inGame) {
        player1.isMovingLeft = true;
        player1.turnedRight = false;
        player1.turnedLeft = true;
        cancelAnimationFrame(player1.animationIdLeft);
        player1.canSlideOnWall = false;
        moveLeft(player1);
    // S - Crouching / Climbing Down
    } else if ((event.key == down || event.key == DOWN) && !player1.punched) {
        if(!player1.crouched && !player1.downPressed && !player1.ladderCol && inGame){
            crouch(player1);     
        } else if (player1.ladderCol && !player1.alreadyGoingDown){
            sfx_climb.pause();
            goingDown(player1);
        }
        player1.downPressed = true;
    // SPACE - Punching BOSS / Breaking Cracked Blocks
    } else if (event.key == space) {
        if(!player1.alreadyPunched && !player1.ladderCol && inGame){
            punch(player1);
        }
        player1.alreadyPunched = true;
    } else if (event.key == "Escape" && inGame) {
        if(musicEditorOpened){
            music_editor.style.display = "none";
            musicEditorOpened = false;
            black.style.opacity = "0";
            canvas.style.filter = "blur(0)"
            background.style.filter = "blur(0)"
            rising.style.filter = "blur(0)"
        }else{
            escFunction();
        }
    }
});

//--------------------------------------------------------------------
// SECOND PLAYER ARROW ENTER - ON
//--------------------------------------------------------------------

window.addEventListener("keydown", (event) => {
    if(playingMultiplayer){
        // ArrowUp - Jumping / Climbing Up
        if ( event.key == "ArrowUp" && player2.canStandUp == true && inGame && !player2.isJumping) {
            isJumping = true;
            if(player2.ladderCol){
                if(!player2.wPressed){
                    player2.wPressed = true;
                    goingUp(player2);
                }
            }else{
                if(!player2.jumpIntervalSet && player2.stillJumping){ //Better ArrowUp pressed detection
                    jump(player2)
                    player2.jumpInterval = setInterval(() => {
                        if(player2.canOrbJump && player2.velocity == 0 && player2.slideJumped){
                            clearInterval(player2.jumpInterval)
                        }else{
                            jump(player2)
                        }
                    }, 10);  
                    setTimeout(() => {
                        clearInterval(player2.jumpInterval)
                    }, 100);
                }else if(!player2.stillJumping && !player2.jumpIntervalSet){
                    jump(player2);
                }
                player2.jumpIntervalSet = true;
            }
        // ArrowRight - Moving Right / Climbing Right
        }else if (event.key == "ArrowRight" && !player2.isMovingRight && inGame) {
            player2.isMovingRight = true;
            player2.turnedRight = true;
            player2.turnedLeft = false;
            cancelAnimationFrame(player2.animationIdRight);
            player2.canSlideOnWall = false;
            moveRight(player2);
        // ArrowLeft - Moving Left / Climbing Left
        } else if (event.key == "ArrowLeft" && !player2.isMovingLeft && inGame) {
            player2.isMovingLeft = true;
            player2.turnedRight = false;
            player2.turnedLeft = true;
            cancelAnimationFrame(player2.animationIdLeft);
            player2.canSlideOnWall = false;
            moveLeft(player2);
        // Enter - Punching BOSS / Breaking Cracked Blocks
        } else if (event.key == "Enter") {
            if(!player2.alreadyPunched && !player2.ladderCol && inGame){
                punch(player2);
            }
            player2.alreadyPunched = true;
        // ArrowDown - Crouching / Climbing Down
        } else if (event.key == "ArrowDown" && !player2.punched) {
            if(!player2.crouched && !player2.downPressed && !player2.ladderCol && inGame){
                crouch(player2);     
            } else if (player2.ladderCol && !player2.alreadyGoingDown){
                sfx_climb2.pause();
                goingDown(player2);
            }
            player2.downPressed = true;
        }
    }
});

//-------------------------- Releasing KEYBOARD Buttons

window.addEventListener("keyup", (event) => {
    // W - Stop Climbing UP
    if (event.key == up || event.key == UP && inGame) {
        player1.isJumping = false;
        player1.jumpIntervalSet = false;
        clearInterval(player1.jumpInterval)
        if(player1.ladderCol && player1.wPressed){
            player1.wPressed = false;
            cancelAnimationFrame(player1.goingUpId);
            sfx_climb.pause();
        }
        player1.velocityGoingUp = 0;
    }
    // D - Stop Moving Right
    if (event.key == right || event.key == RIGHT) {
        player1.isMovingRight = false;
        player1.canSlideOnWall = false;
        if(player1.velocityRight <= player1.velocityLeft && player1.isMovingLeft){ //Fixing switching sides
            player1.turnedLeft = true;
            player1.turnedRight = false;
        }
    }
    // A - Stop Moving Left
    if (event.key == left || event.key == LEFT) {
        player1.isMovingLeft = false;
        player1.canSlideOnWall = false;
        if(player1.velocityRight > player1.velocityLeft && player1.isMovingRight){ //Fixing switching sides
            player1.turnedLeft = false;
            player1.turnedRight = true;
        }
    }
    // S - UnCrouch / Stop Climbing Down
    if (event.key == down ||event.key == DOWN) {
        player1.downPressed = false;
        if(player1.velocity<= 0.35 && player1.crouched == true && player1.canStandUp == true && player1.ladderCol == false){
            unCrouch(player1);
        }else if(player1.canStandUp == false){
            if(player1.wasUnder == true){
                player1.wasUnder = false;
                under(player1);
            }
        }
        if(player1.ladderCol){
            player1.velocityGoingDown = 0;
            cancelAnimationFrame(player1.goingDownId);
            player1.alreadyGoingDown = false;
            sfx_climb.pause();
        }
    }
    if (event.key == space && inGame) {
        player1.alreadyPunched = false;
    }
});

//--------------------------------------------------------------------
// SECOND PLAYER ARROW ENTER - OFF
//--------------------------------------------------------------------

window.addEventListener("keyup", (event) => {
    if(playingMultiplayer){
        if (event.key == "ArrowUp" && inGame) {
        player2.isJumping = false;
        player2.jumpIntervalSet = false;
        clearInterval(player2.jumpInterval)
        if(player2.ladderCol && player2.wPressed){
            player2.wPressed = false;
            cancelAnimationFrame(player2.goingUpId);
            sfx_climb2.pause();
        }
        player2.velocityGoingUp = 0;
    }
    if (event.key == "ArrowRight") {
        player2.canSlideOnWall = false;
        player2.isMovingRight = false;
        if(player2.velocityRight <= player2.velocityLeft && player2.isMovingLeft){ //Fixing switching sides
            player2.turnedLeft = true;
            player2.turnedRight = false;
        }
    }
    if (event.key == "ArrowLeft") {
        player2.canSlideOnWall = false;
        player2.isMovingLeft = false;
        if(player2.velocityLeft <= player2.velocityRight && player2.isMovingRight){ //Fixing switching sides
            player2.turnedLeft = true;
            player2.turnedRight = false;
        }
    }
    if (event.key == "ArrowDown") {
        player2.downPressed = false;
        if(player2.velocity <= 0.35 && player2.crouched == true && player2.canStandUp == true && player2.ladderCol == false){
            unCrouch(player2);
        }else if(player2.canStandUp == false){
            if(player2.wasUnder == true){
                player2.wasUnder = false;
                under(player2);
            }
        }
        if(player2.ladderCol){
            player2.velocityGoingDown = 0;
            cancelAnimationFrame(player2.goingDownId);
            player2.alreadyGoingDown = false;
            sfx_climb2.pause();
        }
    }
    if (event.key == "Enter" && inGame) {
        player2.alreadyPunched = false;
    }
    }
});

