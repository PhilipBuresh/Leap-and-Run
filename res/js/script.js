
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
const chooseDungeon = document.getElementById("chooseDungeon");
const castleDungeon = document.getElementById("castleDungeon");
const steampunkDungeon = document.getElementById("steampunkDungeon");
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
const black = document.getElementById("black");
const fullBlack = document.getElementById("fullBlack");
const paper = document.getElementById("paper");
const recommend = document.getElementById("recommend");
const credits_list = document.getElementById("credits_list");
const transition1 = document.getElementById("transition1");
const transition2 = document.getElementById("transition2");
const rising = document.getElementById("rising");
const esc = document.getElementById("esc");
const playButton = document.getElementById("playButton");
const playButtonMulti = document.getElementById("playButtonMulti");
const tutorialButton = document.getElementById("tutorialButton");
const creditsButton = document.getElementById("creditsButton");
const hp = document.getElementById("hp");
const myHp = document.getElementById("myHp");
const divider1 = document.getElementById("divider1");
const divider2 = document.getElementById("divider2");
const divider3 = document.getElementById("divider3");
const divider4 = document.getElementById("divider4");
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
const leftArrow = document.getElementById("leftArrow");
const rightArrow = document.getElementById("rightArrow");
const leftSkinImg = document.getElementById("leftSkinImg");
const middleSkinImg = document.getElementById("middleSkinImg");
const rightSkinImg = document.getElementById("rightSkinImg");
const chooseSkinBtn = document.getElementById("chooseSkinBtn");
const choose_rioter = document.getElementById("choose_rioter");
const choose_ruby = document.getElementById("choose_ruby");
const skinChangerBox = document.getElementById("skinChangerBox");
const skins = document.getElementById("skins");
const steampunkLevelsDone = document.getElementById("steampunkLevelsDone");
const castleLevelsDone = document.getElementById("castleLevelsDone");

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
            canvas.style.filter = "blur(0)"
            rising.style.filter = "blur(0)"
            music_editor.style.display = "none";
            musicEditorOpened = false;
            black.style.opacity = "0";
        }else{
            canvas.style.filter = "blur(1px)"
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
    skins.style.animationName = "midToRightSkins";
    skins.style.animationPlayState = "running";
    skins.style.pointerEvents = "none";
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
    tutorialButton.style.opacity = "0%";
    tutorialButton.style.pointerEvents = "none";
    playButtonMulti.style.pointerEvents = "none";
    tutorialButton.style.pointerEvents = "none";
    creditsButton.style.display = "none";
    skins.style.animationName = "midToRightSkins";
    skins.style.animationPlayState = "running";
    skins.style.pointerEvents = "none";
    text.style.opacity = "0";
    note_button.style.zIndex = "3";
    escape_button.style.zIndex = "3";
    selectedRioter = true;
    setSkins();
    heart1.src = "./res/img/heart_rioter.png";
    heart2.src = "./res/img/heart_rioter.png";
    heart3.src = "./res/img/heart_rioter.png";
    chooseDungeon.style.animationDuration = "1s";
    chooseDungeon.style.animationName = "bottomToMid"
    chooseDungeon.style.animationPlayState = "running";
    chooseDungeon.style.display = "flex";
    setTimeout(() => {
        chooseDungeon.style.pointerEvents = "auto";
    }, 700);
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

let player;
let playingAsRioter;
let playingAsRuby;

man.onclick = () => { //Choosing Character - Rioter
    characters.style.display = "none";
    playButton.style.display = "none";
    selectedRioter = true;
    selectedRuby = false;
    setSkins();
    heart1.src = "./res/img/heart_rioter.png";
    heart2.src = "./res/img/heart_rioter.png";
    heart3.src = "./res/img/heart_rioter.png";
    playingAsRioter = true;
    playingAsRuby = false;
    characters.style.display = "block";
    characters.style.animationName = "midToBottom"
    characters.style.animationPlayState = "running";
    chooseDungeon.style.animationDuration = "1s";
    setTimeout(() => {
        chooseDungeon.style.display = "flex";
        chooseDungeon.style.animationName = "bottomToMid"
        chooseDungeon.style.animationPlayState = "running";
        setTimeout(() => {
            chooseDungeon.style.pointerEvents = "auto";
        }, 700);
    }, 400);
}
woman.onclick = () => { //Choosing Character - Ruby
    characters.style.display = "none";
    playButton.style.display = "none";
    selectedRioter = false;
    selectedRuby = true;
    setSkins();
    heart1.src = "./res/img/heart_ruby.png";
    heart2.src = "./res/img/heart_ruby.png";
    heart3.src = "./res/img/heart_ruby.png";
    playingAsRioter = false;
    playingAsRuby = true;
    characters.style.display = "block";
    characters.style.animationName = "midToBottom"
    characters.style.animationPlayState = "running";
    chooseDungeon.style.animationDuration = "1s";
    setTimeout(() => {
        chooseDungeon.style.display = "flex";
        chooseDungeon.style.animationName = "bottomToMid"
        chooseDungeon.style.animationPlayState = "running";
        setTimeout(() => {
            chooseDungeon.style.pointerEvents = "auto";
        }, 700);
    }, 400);
}

//Choosing Castle Dungeon
castleDungeon.onclick = () => {
    chooseDungeon.style.pointerEvents = "none";
    setDungeonToCastle();
    movingCharactersAndFullBlack();
}

//Choosing SteamPunk Dungeon
steampunkDungeon.onclick = () => {
    chooseDungeon.style.pointerEvents = "none";
    setDungeonToSteamPunk();
    movingCharactersAndFullBlack();
}

//If you choose a character -> Transition will be activated and you will be send to the game by function menuToLobby()
const movingCharactersAndFullBlack = () => {
    fullBlack.style.display = "block";
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
        gravity(player1);
        gravity(player2);
        chooseDungeon.style.display = "none";
        chooseDungeon.style.animationDuration = "0s";
        chooseDungeon.style.animationName = "midToBottom"
        chooseDungeon.style.animationPlayState = "running";
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
                if(platformLevel1[i] != 34 && inGame){
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
                if((finished_castle[helpNum] == 2 && playingCastle) || (finished_steampunk[helpNum] == 2 && playingSteamPunk) || !finalDoorUnlocked && platformLevel1[i] != 34){
                    c.fillStyle = "red";
                    c.fillText("LOCKED", platformX + 7, platformY);
                }else{
                    if((playingSteamPunk && platformLevel1[i] != 34) || (playingCastle && platformLevel1[i] != 34)){
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
    if ((event.key == "e" || event.key == "E") && player1.doorCol && !entered && ((finished_castle[helpNum] != 2 && playingCastle) || (finished_steampunk[helpNum] != 2 && playingSteamPunk)) && finalDoorUnlocked && inGame && canEnter && !playingMultiplayer && (playingSteamPunk && helpNum <= 15 || playingCastle)) {
        entered = true;
        enterFunction();
    } else if ((event.key == "e" || event.key == "E") && player1.doorCol && player2.doorCol && !entered && ((finished_castle[helpNum] != 2 && playingCastle) || (finished_steampunk[helpNum] != 2 && playingSteamPunk)) && finalDoorUnlocked && inGame && canEnter && helpNumbers[0] == helpNumbers[1] && (playingSteamPunk && helpNum <= 15 || playingCastle)) {
        entered = true;
        enterFunction(); 
    }
})

//Boss Phases
let reaperStartMoving, breakBottom, bossLava, endBossLava, bossDarkness, endBossDarkness, bossLava2, bossLava3;
let nonStopShake;

let canEnter = true;

let timeNow = 0;

const clearBossTimeouts = () => {
    clearTimeout(reaperStartMoving);
    clearTimeout(breakBottom);
    clearTimeout(bossLava);
    clearTimeout(bossLava2);
    clearTimeout(bossLava3);
    clearTimeout(endBossLava);
    clearTimeout(bossDarkness);
    clearTimeout(endBossDarkness);
    clearInterval(nonStopShake);
}

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
    sawVelocity = 1.5;
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
        movingPlatformVelocity = 1;
        if(playingCastle){
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
                finished_castle[14] = 1; //Boss Beated -> Level 15 Doors are now green
                spawnCords();
                music.src = "./res/music/ending.mp3";
                music.play();
            }
        }else if(playingSteamPunk){
            if(helpNum == 0){ //Level 1 STEAMPUNK
                spawnCords = () =>{
                    player1.x = 20;
                    player1.y = 520;
                    if(playingMultiplayer){
                        player2.x = 20;
                        player2.y = 520;
                    }
                }
                spawnMovingPlatformCords = () => {
                    xMovingPlatform = 10000;
                    yMovingPlatform = 10000;
                }
                spawnMovingPlatformCords();
                spawnCords();
                music.src = "./res/music/song0_sp.mp3";
                doorsTime = 31000;
                music.play();
            }else if(helpNum == 1){ //Level 2 STEAMPUNK
                spawnCords = () =>{
                    player1.x = 20;
                    player1.y = 520;
                    if(playingMultiplayer){
                        player2.x = 20;
                        player2.y = 520;
                    }
                }
                spawnCords();
                spawnMovingPlatformCords = () => {
                    xMovingPlatform = 720
                    yMovingPlatform = 346;
                }
                spawnMovingPlatformCords();
                spawnSawCords = () => {
                    ySaw = 142;
                    xSaw = 400;
                }
                spider1Y = -120;
                spider1X = 408;
                spawnSawCords();
                music.src = "./res/music/song1_sp.mp3";
                doorsTime = 30000;
                music.play();
            }else if(helpNum == 2){ //Level 3 STEAMPUNK
                spawnCords = () =>{
                    player1.x = 20;
                    player1.y = 520;
                    if(playingMultiplayer){
                        player2.x = 20;
                        player2.y = 520;
                    }
                }
                spawnCords();
                spawnMovingPlatformCords = () => {
                    xMovingPlatform = 10000
                    yMovingPlatform = 10000;
                }
                spawnMovingPlatformCords();
                music.src = "./res/music/song2_sp.mp3";
                doorsTime = 36000;
                music.play();
                darkness = true;
            }else if(helpNum == 3){ //Level 4 STEAMPUNK
                spawnCords = () =>{
                    player1.x = canvas.width / 2 - player1.width / 2;
                    player1.y = 460;
                    if(playingMultiplayer){
                        player2.x = canvas.width / 2 - player2.width / 2;
                        player2.y = 460;
                    }
                }
                spawnCords();
                spawnMovingPlatformCords = () => {
                    xMovingPlatform = 10000
                    yMovingPlatform = 10000;
                }
                spawnMovingPlatformCords();
                spawnSawCords = () => {
                    ySaw = 303;
                    xSaw = 800;
                }
                spawnSawCords();
                spider1Y = -130;
                spider1X = 128;
                music.src = "./res/music/song3_sp.mp3";
                doorsTime = 30000;
                music.play();
            }else if(helpNum == 4){ //Level 5 STEAMPUNK
                spawnCords = () =>{
                    player1.x = 60;
                    player1.y = 390;
                    if(playingMultiplayer){
                        player2.x = 60;
                        player2.y = 390;
                    }
                }
                spawnCords();
                spawnMovingPlatformCords = () => {
                    yMovingPlatform = 474;
                    xMovingPlatform = -40;
                }
                spawnMovingPlatformCords();
                music.src = "./res/music/song4_sp.mp3";
                doorsTime = 50000;
                music.play();
            }else if(helpNum == 5){ //Level 6 STEAMPUNK
                spawnCords = () =>{
                    player1.x = 60;
                    player1.y = 500;
                    if(playingMultiplayer){
                        player2.x = 60;
                        player2.y = 500;
                    }
                }
                spawnCords();
                spawnMovingPlatformCords = () => {
                    yMovingPlatform = 346;
                    xMovingPlatform = 260;
                }
                spawnMovingPlatformCords();
                spider1X = 13*32;
                spider1Y = -10;
                spider2X = 24*32;
                spider2Y = -200;
                music.src = "./res/music/song5_sp.mp3";
                doorsTime = 30000;
                music.play();
            }else if(helpNum == 6){ //Level 7 STEAMPUNK
                spawnCords = () =>{
                    player1.x = 60;
                    player1.y = 340;
                    if(playingMultiplayer){
                        player2.x = 60;
                        player2.y = 340;
                    }
                }
                spawnCords();
                spawnMovingPlatformCords = () => {
                    xMovingPlatform = 10000
                    yMovingPlatform = 10000;
                }
                spawnMovingPlatformCords();
                music.src = "./res/music/song6_sp.mp3";
                doorsTime = 32000;
                music.play();
            }else if(helpNum == 7){ //Level 8 STEAMPUNK
                spawnCords = () =>{
                    player1.x = 50;
                    player1.y = 500;
                    if(playingMultiplayer){
                        player2.x = 50;
                        player2.y = 500;
                    }
                }
                spawnCords();
                spawnMovingPlatformCords = () => {
                    xMovingPlatform = 10000
                    yMovingPlatform = 10000;
                }
                spawnMovingPlatformCords();
                spawnSawCords = () => {
                    xSaw = 500;
                    ySaw = 175;
                }
                spawnSawCords();
                music.src = "./res/music/song7_sp.mp3";
                doorsTime = 41000;
                music.play();
                darkness = true;
            }else if(helpNum == 8){ //Level 9 STEAMPUNK
                spawnCords = () =>{
                    player1.x = canvas.width / 2 - 15;
                    player1.y = 400;
                    if(playingMultiplayer){
                        player2.x = canvas.width / 2 - 15;
                        player2.y = 400;
                    }
                }
                spawnCords();
                spawnMovingPlatformCords = () => {
                    xMovingPlatform = 10000
                    yMovingPlatform = 10000;
                }
                spawnMovingPlatformCords();
                spawnSawCords = () => {
                    xSaw = 800;
                    ySaw = 335;
                }
                spawnSawCords();
                spider1X = 3*32 - 16;
                spider1Y = -132;
                music.src = "./res/music/song8_sp.mp3";
                doorsTime = 34000;
                music.play();
            }else if(helpNum == 9){ //Level 10 STEAMPUNK
                spawnCords = () =>{
                    player1.x = 20;
                    player1.y = 374;
                    if(playingMultiplayer){
                        player2.x = 20;
                        player2.y = 374;
                    }
                }
                spawnCords();
                spawnMovingPlatformCords = () => {
                    yMovingPlatform = 474;
                    xMovingPlatform = -40;
                }
                spawnMovingPlatformCords();
                spider1X = 14*32;
                spider1Y = -32;
                music.src = "./res/music/song9_sp.mp3";
                doorsTime = 58000;
                music.play();
            }else if(helpNum == 10){ //Level 11 STEAMPUNK
                spawnCords = () =>{
                    player1.x = 500;
                    player1.y = 374;
                    if(playingMultiplayer){
                        player2.x = 500;
                        player2.y = 374;
                    }
                }
                spawnCords();
                spawnMovingPlatformCords = () => {
                    xMovingPlatform = 10000
                    yMovingPlatform = 10000;
                }
                spawnMovingPlatformCords();
                spawnSawCords = () => {
                    xSaw = 100;
                    ySaw = 304;
                }
                spawnSawCords();
                music.src = "./res/music/song10_sp.mp3";
                doorsTime = 44000;
                music.play();
            }else if(helpNum == 11){ //Level 12 STEAMPUNK
                spawnCords = () =>{
                    player1.x = 210;
                    player1.y = 434;
                    if(playingMultiplayer){
                        player2.x = 210;
                        player2.y = 434;
                    }
                }
                spawnCords();
                spawnMovingPlatformCords = () => {
                    xMovingPlatform = 10000
                    yMovingPlatform = 10000;
                }
                spawnMovingPlatformCords();
                music.src = "./res/music/song11_sp.mp3";
                doorsTime = 57000;
                music.play();
            }else if(helpNum == 12){ //Level 13 STEAMPUNK
                spawnCords = () =>{
                    player1.x = 60;
                    player1.y = 520;
                    if(playingMultiplayer){
                        player2.x = 60;
                        player2.y = 520;
                    }
                }
                spawnCords();
                spawnMovingPlatformCords = () => {
                    xMovingPlatform = 10000
                    yMovingPlatform = 10000;
                }
                spawnMovingPlatformCords();
                music.src = "./res/music/song12_sp.mp3";
                doorsTime = 50000;
                music.play();
                darkness = true;
            }else if(helpNum == 13){ //Level 14 STEAMPUNK
                spawnCords = () =>{
                    player1.x = 20;
                    player1.y = 435;
                    if(playingMultiplayer){
                        player2.x = 20;
                        player2.y = 435;
                    }
                }
                spawnCords();
                spawnMovingPlatformCords = () => {
                    xMovingPlatform = 630
                    yMovingPlatform = 506;
                }
                spawnMovingPlatformCords();
                spawnSawCords = () => {
                    xSaw = 800;
                    ySaw = 303;
                }
                spawnSawCords();
                spider1X = 19*32;
                spider1Y = -26;
                music.src = "./res/music/song13_sp.mp3";
                doorsTime = 51000;
                music.play();
            }else if(helpNum == 14){ //Level 15 STEAMPUNK - Spider Boss
                spiderBossLevel();
            }
        }
        
        setTransitionCords();
        fadeOutTransition();
        // Save Cords
        saveGhostCordsX = xGhost;
        saveGhostCordsY = yGhost;

        saveMovingPlatformCordsX = xMovingPlatform;
        saveMovingPlatformCordsY = yMovingPlatform;

        saveSawCordsX = xSaw;
        saveSawCordsY = ySaw;
        //
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
//----------------------------------------Boss Attack Generator

let bossAttacking = false;
let attackNum = 0;

let bossAttackGenerator;

let firstReaperAttack = false;

const generatorAttackFunction = () => {
    bossAttackGenerator = setInterval(() => {
        attackNum = Math.floor(Math.random() * 2)
        if(firstReaperAttack){
            attackNum = 1;
            firstReaperAttack = false;
        }
        if(attackNum == 1 && !bossAttacking){
            bossVelocity = 1.5;
            currentFrameBoss = 0;
            bossAttacking = true;
        }
    }, 500);
}

//----------------------------------------Spider Jump

let spiderJumpingId;
let velocitySpiderJump = 8;
let velocitySpiderDrop = 1;

let nowSpiderUp
let thenSpiderUp = Date.now()
let deltaSpiderUp

let spiderBossJumping = false;

let spiderBossJumpDamage = false;

const spiderJump = () => {
    if(music.currentTime > 3){
        sfx.src = "./res/sfx/spider_jump.mp3";
        sfx.play();
    }
    const spiderJumping = () => {
        spiderJumpingId = requestAnimationFrame(() => spiderJumping());
        nowSpiderUp = Date.now();
        deltaSpiderUp = nowSpiderUp - thenSpiderUp;
        if (deltaSpiderUp > interval) {
            thenSpiderUp = nowSpiderUp - (deltaSpiderUp % interval);
            if(velocitySpiderJump > 1){
                velocitySpiderJump = velocitySpiderJump / 1.05
                bossY -= velocitySpiderJump;
            }else{
                velocitySpiderDrop = velocitySpiderDrop * 1.1
                bossY += velocitySpiderDrop;
                if(bossY >= canvas.height - 5*32 - 80){
                    bossY = canvas.height - 5*32 - 80;
                    velocitySpiderJump = 8;
                    velocitySpiderDrop = 1;
                    spiderBossJumping = false;
                    spiderFell = true;
                    currentFrameSpiderBoss = 0;
                    spiderBossNumber = 1;
                    if(!smallSpiderJump){
                        shake();
                        spiderBossJumpDamage = true;
                        sfx.src = "./res/sfx/spider_land.mp3";
                        sfx.play();
                    }
                    cancelAnimationFrame(spiderJumpingId);
                }
            }
            
        }
    }
    spiderJumping();
}

//----------------------------------------Spider Move X

let spiderMovingId;
let spiderMoveSet = false;
let movingSpiderNumber = 2;
let slowingSpeedSpiderInterval;
let canAddSpiderSpeed = true;
let spiderFell = false;

let nowSpiderX
let thenSpiderX = Date.now()
let deltaSpiderX

const spiderMove = () => {
    const spiderMoving = () => {
        spiderMovingId = requestAnimationFrame(() => spiderMoving());
        nowSpiderX = Date.now();
        deltaSpiderX = nowSpiderX - thenSpiderX;
        if (deltaSpiderX > interval) {
            thenSpiderX = nowSpiderX - (deltaSpiderX % interval);
            if(movingSpiderNumber > -3 && movingSpiderNumber < 3 && canAddSpiderSpeed){
                movingSpiderNumber *= 1.1;
            }else if(canAddSpiderSpeed){
                canAddSpiderSpeed = false;
            }
            bossX += movingSpiderNumber;
            for (let i = 0; i < platformLevel1.length; i++) {
                if ([1, 6, 7, 9, 18, 19, 32, 33, 36, 37, 71, 68, 73, 74, 75, 76, 77, 78, 79, 80].includes(platformLevel1[i])) {
                    let platformX = (i % 32) * 32;
                    let platformY = Math.floor(i / 32) * 32;
                    if (
                        bossY + 80 > platformY &&
                        bossY < platformY + 32 &&
                        bossX - 2 < platformX + 32 && // Spider Moving LEFT Collision
                        bossX > platformX &&
                        movingSpiderNumber < 0
                    ) {
                        bossX = platformX + 32;
                        canAddSpiderSpeed = true;
                        cancelAnimationFrame(spiderMovingId);
                    }else if (
                        bossY + 80 > platformY &&
                        bossY < platformY + 32 &&
                        bossX + 80 > platformX && // Spider Moving RIGHT Collision
                        bossX < platformX + 32 &&
                        movingSpiderNumber > 0
                    ) {
                        bossX = platformX - 80;
                        canAddSpiderSpeed = true;
                        cancelAnimationFrame(spiderMovingId);
                    }
                }
            }
            if(!spiderMoveSet){
                spiderMoveSet = true;
                setTimeout(() => {
                    slowingSpeedSpiderInterval = setInterval(() => {
                        if(smallSpiderJump){
                            movingSpiderNumber /= 1.4;
                        }else{
                            movingSpiderNumber /= 1.08;
                        }
                        
                    }, 20);
                }, 900);
                if(smallSpiderJump){
                    setTimeout(() => {
                        spiderMoveSet = false;
                        canAddSpiderSpeed = true;
                        smallSpiderJump = false;
                        cancelAnimationFrame(spiderMovingId);
                        clearInterval(slowingSpeedSpiderInterval);
                    }, 1500);
                }else{
                    setTimeout(() => {
                        spiderMoveSet = false;
                        canAddSpiderSpeed = true;
                        cancelAnimationFrame(spiderMovingId);
                        clearInterval(slowingSpeedSpiderInterval);
                    }, 1500);
                }
                
            }
        }
    }
    spiderMoving();
}

// Moving Walls in Spider Boss

let noWallX
let thenWallX = Date.now()
let deltaWallrX

let wallSpiderMovingId;

const wallSpiderMove = () => {
    const wallSpiderMoving = () => {
        wallSpiderMovingId = requestAnimationFrame(() => wallSpiderMoving());
        noWallX = Date.now();
        deltaWallrX = noWallX - thenWallX;
        if (deltaWallrX > interval) {
            thenWallX = noWallX - (deltaWallrX % interval);
            rightWallX -= 0.455;
            leftWallX += 0.455;
            if(leftWallX >= 0){
                leftWallX = 0;
                rightWallX = canvas.width - 160;
                shake();
                cancelAnimationFrame(wallSpiderMovingId);
            }
        }
    }
    wallSpiderMoving()
}

//----------------------------------------Spider Boss Generator

let spiderBossWarning = false;
let spiderBossAttacking = false;
let warningNum = 0;

let spiderBossGenerator;
let smallSpiderJump;

let generatorInterval = 1000;

let chasePlayerNum = 0;
let chasedPlayer;

const spiderJumpMoment = () => {
    if(inGame){
        spiderJump();
        spiderBossJumping = true;
        if(!playingMultiplayer){
            if(player1.x + 30 <= bossX + 80){
                movingSpiderNumber = -0.4;
                if(bossX < 175 + 150){
                    movingSpiderNumber = 0.4;
                }
            }else if(player1.x >= bossX){
                movingSpiderNumber = 0.4;
                if(bossX > 830 - 150){
                    movingSpiderNumber = -0.4;
                }
            }
        }else{
            chasePlayerNum = Math.floor(Math.random() * 2 + 1);
            if(chasePlayerNum == 1){
                chasedPlayer = player1.x;
            }else{
                chasedPlayer = player2.x;
            }
            if(chasedPlayer + 30 <= bossX + 80){
                movingSpiderNumber = -0.4;
                if(bossX < 175 + 150){
                    movingSpiderNumber = 0.4;
                }
            }else if(chasedPlayer >= bossX){
                movingSpiderNumber = 0.4;
                if(bossX > 830 - 150){
                    movingSpiderNumber = -0.4;
                }
            }
        }
        spiderMove();
    }

}

const generatorSpiderFunction = () => {
    spiderBossGenerator = setInterval(() => {
        warningNum = Math.floor(Math.random() * 3 + 1)
        if(music.currentTime < 20.5 && warningNum == 2){ // Soon for big jumps
            warningNum = 3;
        }
        if(warningNum == 1 && !spiderBossWarning && !smokeActivated && (!spiderBossJumping || !smallSpiderJump)){ // Smoke Attack
            currentFrameSpiderBoss = 0;
            currentFrameSmoke = 0;
            spiderBossNumber = 2;
            spiderBossWarning = true;
            spiderBossAttacking = true
        }else if(warningNum == 2 && !spiderBossJumping && !spiderMoveSet && !spiderBossWarning){ // Big Jump
            spiderBossNumber = 1;
            currentFrameSpiderBoss = 0;
        }else if(warningNum == 3 && !spiderBossJumping && !spiderMoveSet && !spiderBossWarning){ // Small Jump
            spiderBossNumber = 1;
            currentFrameSpiderBoss = 0;
            smallSpiderJump = true;
            velocitySpiderJump = 3;
        }
    }, generatorInterval);
}

//----------------------------------------Smoke Collision
const smokeCollision = (PLAYER) => {
    if (
        PLAYER.y + PLAYER.height >= bossY - 20 &&
        PLAYER.y <= bossY + 120 - 20 &&
        PLAYER.x + PLAYER.width >= bossX - 20 &&
        PLAYER.x <= bossX + 120 - 20
        && smokeActivated
        && currentFrameSmoke < 2
    ) {
        dead();
    }
};

//----------------------------------------Spider Boss Collision
const spiderBossCollision = (PLAYER) => {
    if (
        PLAYER.y + PLAYER.height >= bossY &&
        PLAYER.y <= bossY + 80 &&
        PLAYER.x + PLAYER.width >= bossX &&
        PLAYER.x <= bossX + 80
        && spiderBossJumpDamage
        && !PLAYER.stillJumping
    ) {
        dead();
    }
};

//----------------------------------------SPIDERS

let hangingSpidersFunctionId;
let nowSpiders;
let thenSpiders = Date.now();
let deltaSpiders;

let spidersVelocity = 0.1;

let spiderGoingDown = false;
let spiderGoingUp = false;
let canSpidersMoving = false;

let spidersOrderNum = 1;
let spidersSlowing = false;

let startingMovingInSpiderBoss = false;

const hangingSpiders = () => {
    const hangingSpidersFunction = () => {
        hangingSpidersFunctionId = requestAnimationFrame(() => hangingSpidersFunction());
        nowSpiders = Date.now();
        deltaSpiders = nowSpiders - thenSpiders;
        if (deltaSpiders > interval) {
            thenSpiders = nowSpiders - (deltaSpiders % interval);
            if(spiderGoingDown){
                if(spider1Y > -220){
                    spidersVelocity /= 1.06;
                    if(spidersVelocity < 0.1){
                        spidersVelocity = 0.1;
                        cancelAnimationFrame(hangingSpidersFunctionId);
                    }
                }
                spider1Y += spidersVelocity;
                spider2Y += spidersVelocity;
                spider3Y += spidersVelocity;
                spider4Y += spidersVelocity;
            }
            if(spiderGoingUp){
                    spidersVelocity *= 1.08;
                    if(spider1Y < - 500){
                        spidersVelocity = 0.1;
                        cancelAnimationFrame(hangingSpidersFunctionId);
                    }
                    spider1Y -= spidersVelocity;
                    spider2Y -= spidersVelocity;
                    spider3Y -= spidersVelocity;
                    spider4Y -= spidersVelocity;
                }
            if(canSpidersMoving){
                if(spidersOrderNum == 1){
                    spider1Y -= spidersVelocity;
                    spider3Y -= spidersVelocity;
                    if(!startingMovingInSpiderBoss){
                        spider2Y += spidersVelocity;
                        spider4Y += spidersVelocity;
                    }
                }else{
                    startingMovingInSpiderBoss = false
                    spider1Y += spidersVelocity;
                    spider2Y -= spidersVelocity;
                    spider3Y += spidersVelocity;
                    spider4Y -= spidersVelocity;
                }
                if(spidersVelocity < 13 && !spidersSlowing){
                    spidersVelocity *= 1.193;
                }else{
                    spidersSlowing = true;
                    spidersVelocity /= 1.193;
                }
                if(spidersVelocity > 0.1 && spidersSlowing){
                    spidersVelocity = 0.1;
                    spidersSlowing = false;
                    if(spidersOrderNum == 1){
                        spidersOrderNum = 2;
                    }else{
                        spidersOrderNum = 1;
                    }
                    
                }
            }
        }
    }
    hangingSpidersFunction();
}

//----------------------------------------SHAKE Function

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

let godMode = false;

const dead = () => {
    if(!godMode){
        if(!goingBackToTheLobby){
            if(!playingBossFight){ //You are not playing BOSS FIGHT
                if(yGhost < 2000 && xGhost < 2000){
                    ghostVelocity = 2;
                    spawnGhostCords();
                }
                // Respawn Ghost, Saw, ...
                if(ghostKilled){
                    spawnGhostCords = () => {
                        xGhost = saveGhostCordsX;
                        yGhost = saveGhostCordsY;
                    }
                    ghostKilled = false;
                    spawnGhostCords();
                }
                spawnMovingPlatformCords = () => {
                    xMovingPlatform = saveMovingPlatformCordsX;
                    yMovingPlatform = saveMovingPlatformCordsY;
                }
                sawVelocity = 1.5;
                spawnMovingPlatformCords();
                spawnSawCords = () => {
                    xSaw = saveSawCordsX;
                    ySaw = saveSawCordsY;
                }
                movingPlatformVelocity = 1;
                spawnSawCords();
                //
                movingPlatformVelocityY = 0;
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
                divider1.style.opacity = 1;
                divider2.style.opacity = 1;
                divider3.style.opacity = 1;
                divider4.style.opacity = 1;
                spiderPhase2 = false;
                spiderPhase3 = false;
                spiderPhase4 = false;
                spiderPhase5 = false;
                shieldActive = false;
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
                    if(!usedRetry){
                        playerFlashing();
                    }
                    hearts--;
                    player1.velocity = 0;
                    player1.velocityRight = 0;
                    player1.velocityLeft = 0;
                    player1.velocityJump = 0;
                    player2.velocity = 0;
                    player2.velocityRight = 0;
                    player2.velocityLeft = 0;
                    player2.velocityJump = 0;
                    if(hearts == 0 || frameDoor == 3 || usedRetry || risingPercent >= -95){
                        playerNowFlashing = false;
                        clearInterval(flashingInterval)
                        if(playingMultiplayer){
                            clearInterval(targetInterval);
                        }
                        clearInterval(bossAttackGenerator);
                        grayScaleEffect();
                        sfx_boss_laugh.pause();
                        if(usedRetry){
                            usedRetry = false;
                        }
                        music.pause();
                        cancelAnimationFrame(bossMoveXId);
                        cancelAnimationFrame(bossMoveYId);
                        clearTimeout(setTimeoutDoor)
                        setTimeoutDoor = setTimeout(() => {
                            doorTimeout = true;
                        }, doorsTime);
                        currentFrameBoss = 0;
                        bossAttacking = false;
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
                        cancelPlayerMovement();
                        player1.turnedRight = true;
                        player2.turnedRight = true;
                        player1.turnedLeft = false;
                        player2.turnedLeft = false;
                        clearBossTimeouts();
                        inGame = false;
                        black.style.transition = "opacity 0s"
                        black.style.opacity = 1;
                        setTimeout(() => {
                            black.style.transition = "opacity 0.3s"
                            black.style.opacity = 0;
                            currentHp = 100;
                            hp.style.width = currentHp + "%";
                            hearts = 3;
                            restartTimer();
                            timerFunction();
                            setTimeout(() => { // Fixing bug
                                currentHp = 100;
                                hp.style.width = currentHp + "%";
                            }, 100);
                            if(playingCastle){
                                bossLevel();
                                inGame = true;
                            }else if(playingSteamPunk){
                                spawnSawCords = () => {
                                    xSaw = 226;
                                    ySaw = 175;
                                }
                                spawnSawCords();
                                sawVelocitySpeeder = 0;
                                currentFrameSpiderBoss = 0;
                                spider1Y = -500;
                                spider2Y = -500;
                                spider3Y = -500;
                                spider4Y = -500;
                                spiderGoingDown = false;
                                spiderGoingUp = false;
                                canSpidersMoving = false;
                                generatorInterval = 1000;
                                playerOneImage.src = playerSkin1;
                                playerTwoImage.src = playerSkin2;
                                clearInterval(flashingInterval);
                                clearInterval(spiderBossGenerator);
                                clearSpiderBossTimeouts();
                                cancelAnimationFrame(hangingSpidersFunctionId);
                                cancelAnimationFrame(spiderJumpingId);
                                cancelAnimationFrame(spiderMovingId);
                                spidersVelocity = 0.1;
                                startingMovingInSpiderBoss = false;
                                cameraX = 0;
                                cameraY = 0;
                                canCameraStop = false;
                                cameraMoveXCount = 0;
                                spiderBossCamera1 = true;
                                spiderBossCamera2 = false;
                                spiderBossNumber = 0;
                                spiderBossWarning = false;
                                spiderBossAttacking = false
                                smallSpiderJump = false;
                                smokeActivated = false;
                                spiderBossDead = false;
                                cancelAnimationFrame(wallSpiderMovingId);
                                rightWallX = canvas.width;
                                leftWallX = -160;
                                platformLevel1 = [...map[14]];
                                originalPlatform1 = [...platformLevel1];
                                spiderBossLevel();
                            }
                        }, 500);
                    }else{
                        if(playingCastle){
                            sfx_boss_laugh.src = "./res/sfx/laugh.mp3";
                            sfx_boss_laugh.play();
                        }
                    }
                    setTimeout(() => {
                        resistence = false
                    }, 2000);
                    if(playingCastle){
                        spawnCords();
                    }
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
                }, 2000);
            }
            gravity(player1);
            if(playingMultiplayer){
                gravity(player2)
            }
        }
    }
}

let playerSkin1 = "./res/img/rioter.png";
let playerSkin2 = "./res/img/ruby.png";

let selectedRioter = true;
let selectedRuby = false;

choose_rioter.onclick = () => {
    skinChangerBox.style.animationName = "bottomToMid";
    skinChangerBox.style.animationPlayState = "running";
    skinChangerBox.style.display = "flex";
    skins.style.animationName = "midToRightSkins";
    skins.style.animationPlayState = "running";
    skins.style.pointerEvents = "none";
    selectedRioter = true;
    selectedRuby = false;
    updateSkins();
}

choose_ruby.onclick = () => {
    skinChangerBox.style.display = "flex";
    skinChangerBox.style.animationName = "bottomToMid";
    skinChangerBox.style.animationPlayState = "running";
    skins.style.animationName = "midToRightSkins";
    skins.style.animationPlayState = "running";
    skins.style.pointerEvents = "none";
    selectedRioter = false;
    selectedRuby = true;
    updateSkins();
}

let redRioter = "./res/img/red_rioter.png";
let whiteRioter = "./res/img/white_rioter.png";
let pinkRioter = "./res/img/pink_rioter.png";
let greenRioter = "./res/img/green_rioter.png";
let yellowRioter = "./res/img/yellow_rioter.png";
let blueRioter = "./res/img/blue_rioter.png";
let purpleRioter = "./res/img/purple_rioter.png";
let blackRioter = "./res/img/black_rioter.png";

let redRuby = "./res/img/red_ruby.png";
let whiteRuby = "./res/img/white_ruby.png";
let pinkRuby = "./res/img/pink_ruby.png";
let greenRuby = "./res/img/green_ruby.png";
let yellowRuby = "./res/img/yellow_ruby.png";
let blueRuby = "./res/img/blue_ruby.png";
let purpleRuby = "./res/img/purple_ruby.png";
let blackRuby = "./res/img/black_ruby.png";

let rioterSkins = [redRioter, whiteRioter, pinkRioter, greenRioter, yellowRioter, blueRioter, purpleRioter, blackRioter];
let rubySkins = [redRuby, whiteRuby, pinkRuby, greenRuby, yellowRuby, blueRuby, purpleRuby, blackRuby];

let currentIndexSkinsRioter = 0;
let currentIndexSkinsRuby = 0;

const setSkins = () => {
    if(selectedRioter){
        switch (currentIndexSkinsRioter) {
            case 0:
                playerSkin1 = "./res/img/rioter.png";
                choose_rioter.src = rioterSkins[currentIndexSkinsRioter];
                man.src = rioterSkins[currentIndexSkinsRioter];
                break;
            case 1:
                playerSkin1 = "./res/img/rioter_white.png";
                choose_rioter.src = rioterSkins[currentIndexSkinsRioter];
                man.src = rioterSkins[currentIndexSkinsRioter];
                break;
            case 2:
                playerSkin1 = "./res/img/rioter_pink.png";
                choose_rioter.src = rioterSkins[currentIndexSkinsRioter];
                man.src = rioterSkins[currentIndexSkinsRioter];
                break;
            case 3:
                playerSkin1 = "./res/img/rioter_green.png";
                choose_rioter.src = rioterSkins[currentIndexSkinsRioter];
                man.src = rioterSkins[currentIndexSkinsRioter];
                break;
            case 4:
                playerSkin1 = "./res/img/rioter_yellow.png";
                choose_rioter.src = rioterSkins[currentIndexSkinsRioter];
                man.src = rioterSkins[currentIndexSkinsRioter];
                break;
            case 5:
                playerSkin1 = "./res/img/rioter_blue.png";
                choose_rioter.src = rioterSkins[currentIndexSkinsRioter];
                man.src = rioterSkins[currentIndexSkinsRioter];
                break;
            case 6:
                playerSkin1 = "./res/img/rioter_purple.png";
                choose_rioter.src = rioterSkins[currentIndexSkinsRioter];
                man.src = rioterSkins[currentIndexSkinsRioter];
                break;
            case 7:
                playerSkin1 = "./res/img/rioter_black.png";
                choose_rioter.src = rioterSkins[currentIndexSkinsRioter];
                man.src = rioterSkins[currentIndexSkinsRioter];
                break;
        }
    }
    if(selectedRuby || playingMultiplayer){
        switch (currentIndexSkinsRuby) {
            case 0:
                if(!playingMultiplayer){
                    playerSkin1 = "./res/img/ruby.png";
                }else{
                    playerSkin2 = "./res/img/ruby.png";
                }
                choose_ruby.src = rubySkins[currentIndexSkinsRuby];
                woman.src = rubySkins[currentIndexSkinsRuby];
                break;
            case 1:
                if(!playingMultiplayer){
                    playerSkin1 = "./res/img/ruby_white.png";
                }else{
                    playerSkin2 = "./res/img/ruby_white.png";
                }
                choose_ruby.src = rubySkins[currentIndexSkinsRuby];
                woman.src = rubySkins[currentIndexSkinsRuby];
                break;
            case 2:
                if(!playingMultiplayer){
                    playerSkin1 = "./res/img/ruby_pink.png";
                }else{
                    playerSkin2 = "./res/img/ruby_pink.png";
                }
                choose_ruby.src = rubySkins[currentIndexSkinsRuby];
                woman.src = rubySkins[currentIndexSkinsRuby];
                break;
            case 3:
                if(!playingMultiplayer){
                    playerSkin1 = "./res/img/ruby_green.png";
                }else{
                    playerSkin2 = "./res/img/ruby_green.png";
                }
                choose_ruby.src = rubySkins[currentIndexSkinsRuby];
                woman.src = rubySkins[currentIndexSkinsRuby];
                break;
            case 4:
                if(!playingMultiplayer){
                    playerSkin1 = "./res/img/ruby_yellow.png";
                }else{
                    playerSkin2 = "./res/img/ruby_yellow.png";
                }
                choose_ruby.src = rubySkins[currentIndexSkinsRuby];
                woman.src = rubySkins[currentIndexSkinsRuby];
                break;
            case 5:
                if(!playingMultiplayer){
                    playerSkin1 = "./res/img/ruby_blue.png";
                }else{
                    playerSkin2 = "./res/img/ruby_blue.png";
                }
                choose_ruby.src = rubySkins[currentIndexSkinsRuby];
                woman.src = rubySkins[currentIndexSkinsRuby];
                break;
            case 6:
                if(!playingMultiplayer){
                    playerSkin1 = "./res/img/ruby_purple.png";
                }else{
                    playerSkin2 = "./res/img/ruby_purple.png";
                }
                choose_ruby.src = rubySkins[currentIndexSkinsRuby];
                woman.src = rubySkins[currentIndexSkinsRuby];
                break;
            case 7:
                if(!playingMultiplayer){
                    playerSkin1 = "./res/img/ruby_black.png";
                }else{
                    playerSkin2 = "./res/img/ruby_black.png";
                }
                choose_ruby.src = rubySkins[currentIndexSkinsRuby];
                woman.src = rubySkins[currentIndexSkinsRuby];
                break; 
        }
    }
    
};

chooseSkinBtn.onclick = () => {
    middleSkinImg.style.filter = "drop-shadow(1px 1px 0 lime) drop-shadow(-1px -1px 0 lime) drop-shadow(1px -1px 0 lime) drop-shadow(-1px 1px 0 lime)";
    skinChangerBox.style.pointerEvents = "none";
    chooseSkinBtn.innerHTML = "EQUIPPED"
    chooseSkinBtn.style.color = "rgb(200, 200, 200)"
    chooseSkinBtn.style.backgroundColor = "black";
    setTimeout(() => {
        skinChangerBox.style.animationName = "midToBottom";
        skinChangerBox.style.animationPlayState = "running";
        skins.style.animationName = "rightToMidSkins";
        skins.style.animationPlayState = "running";
        setTimeout(() => {
            skinChangerBox.style.pointerEvents = "auto";
            skinChangerBox.style.display = "none";
            chooseSkinBtn.innerHTML = "EQUIP"
            chooseSkinBtn.style.color = "white"
            chooseSkinBtn.style.backgroundColor = "rgba(0, 0, 0, 0)";
            middleSkinImg.style.filter = "drop-shadow(1px 1px 0 white) drop-shadow(-1px -1px 0 white) drop-shadow(1px -1px 0 white) drop-shadow(-1px 1px 0 white)";
            skins.style.pointerEvents = "auto";
        }, 1200);
    }, 500);
    setSkins();
};

const updateSkins = () => {
    if(selectedRioter && !selectedRuby){
        leftSkinImg.src = rioterSkins[(currentIndexSkinsRioter + rioterSkins.length - 1) % rioterSkins.length];
        middleSkinImg.src = rioterSkins[currentIndexSkinsRioter];
        rightSkinImg.src = rioterSkins[(currentIndexSkinsRioter + 1) % rioterSkins.length];
        localStorage.setItem('currentIndexSkinsRioter', currentIndexSkinsRioter);
    }else if(selectedRuby && !selectedRioter){
        leftSkinImg.src = rubySkins[(currentIndexSkinsRuby + rubySkins.length - 1) % rubySkins.length];
        middleSkinImg.src = rubySkins[currentIndexSkinsRuby];
        rightSkinImg.src = rubySkins[(currentIndexSkinsRuby + 1) % rubySkins.length];
        localStorage.setItem('currentIndexSkinsRuby', currentIndexSkinsRuby);
    }
};

leftArrow.onclick = () => {
    if(selectedRioter){
        currentIndexSkinsRioter = (currentIndexSkinsRioter + rioterSkins.length - 1) % rioterSkins.length;
    }else{
        currentIndexSkinsRuby = (currentIndexSkinsRuby + rubySkins.length - 1) % rubySkins.length;
    }
    updateSkins();
}

rightArrow.onclick = () => {
    if(selectedRioter){
        currentIndexSkinsRioter = (currentIndexSkinsRioter + 1) % rioterSkins.length;
    }else{
        currentIndexSkinsRuby = (currentIndexSkinsRuby + 1) % rubySkins.length;
    }
    updateSkins();
}

// PLAYER Flashing

let flashingInterval;
let playerNowFlashing = false;

const playerFlashing = () => {
    playerSkin1 = playerOneImage.src;
    playerSkin2 = playerTwoImage.src;
    flashingInterval = setInterval(() => {
        if(!playerNowFlashing){
            playerOneImage.src = "./res/img/nothing.png"
            playerTwoImage.src = "./res/img/nothing.png"
            playerNowFlashing = true;
        }else{
            playerOneImage.src = playerSkin1;
            playerTwoImage.src = playerSkin2;
            playerNowFlashing = false;
        }
    }, 100);
    setTimeout(() => {
        playerNowFlashing = false;
        clearInterval(flashingInterval) 
    }, 2000);
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
    bossX = 100000;
    bossY = 100000;
    restartTimer();
    timer.style.top = "-5%"
    transition2.addEventListener("ended", () => {
        canEnter = true;
    });
    if(usedRetry){
        usedRetry = false;
    }
    canvas.style.filter = "blur(0)";
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
    clearSpiderBossTimeouts();
    clearInterval(spiderBossGenerator);
    currentFrameSpiderBoss = 0;
    playerNowFlashing = false;
    clearInterval(flashingInterval);
    cameraX = 0;
    cameraY = 0;
    canCameraStop = false;
    cameraMoveXCount = 0;
    spiderBossCamera1 = false;
    spiderBossCamera2 = false;
    spiderBossNumber = 0;
    spiderBossWarning = false;
    spiderBossAttacking = false
    smallSpiderJump = false;
    smokeActivated = false;
    spiderBossDead = true;
    setTimeout(() => {
        music.src = "./res/music/lobby_music.mp3";
        music.play();
        movingPlatformVelocity = 1;
        movingPlatformVelocityY = 0;
        if(playingBossFight){
            lives = 3;
            playingBossFight = false;
            if(playingMultiplayer){
                clearInterval(targetInterval);
            }
            bossX = 1000000;
            bossY = 0;
        }
        spider1Y = -500;
        spider2Y = -500;
        spider3Y = -500;
        spider4Y = -500;
        spiderGoingDown = false;
        spiderGoingUp = false;
        canSpidersMoving = false;
        cancelAnimationFrame(wallSpiderMovingId);
        rightWallX = canvas.width;
        leftWallX = -160;
        sawVelocitySpeeder = 1;
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
        if(playingSteamPunk){
            spawnMovingPlatformCords = () => {
                xMovingPlatform = 600;
                yMovingPlatform = 282;
            }
            spawnMovingPlatformCords();
            spawnSawCords = () => {
                xSaw = 10000;
                ySaw = 10000;
            }
            spawnSawCords();
        }
        if(playingCastle){
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
                    player2.y = 4095;
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
        }else if(playingSteamPunk){
            if(helpNum == 0){ // Go to lobby From Levels 1 - 15
                player1.x = 120;
                player1.y = 500;
                if(playingMultiplayer){
                    player2.x = 120;
                    player2.y = 500;
                }
            }else if(helpNum == 1){
                player1.x = 240;
                player1.y = 405;
                if(playingMultiplayer){
                    player2.x = 240;
                    player2.y = 405;
                }
            }else if(helpNum == 2){
                player1.x = 400;
                player1.y = 500;
                if(playingMultiplayer){
                    player2.x = 400;
                    player2.y = 500;
                }
            }else if(helpNum == 3){
                player1.x = 660;
                player1.y = 340;
                if(playingMultiplayer){
                    player2.x = 660;
                    player2.y = 340;
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
                player1.y = 210;
                if(playingMultiplayer){
                    player2.x = 880;
                    player2.y = 210;
                }
            }else if(helpNum == 6){
                player1.x = 660;
                player1.y = 180;
                if(playingMultiplayer){
                    player2.x = 660;
                    player2.y = 180;
                }
            }else if(helpNum == 7){
                player1.x = 432;
                player1.y = 214;
                if(playingMultiplayer){
                    player2.x = 432;
                    player2.y = 214;
                }
            }else if(helpNum == 8){
                player1.x = 272;
                player1.y= 214;
                if(playingMultiplayer){
                    player2.x = 272;
                    player2.y= 214;
                }
            }else if(helpNum == 9){
                player1.x = 20;
                player1.y = 278;
                if(playingMultiplayer){
                    player2.x = 20;
                    player2.y = 278;
                }
            }else if(helpNum == 10){
                player1.x = 20;
                player1.y= 118;
                if(playingMultiplayer){
                    player2.x = 20;
                    player2.y = 118;
                }
            }else if(helpNum == 11){
                player1.x = 242;
                player1.y = 86;
                if(playingMultiplayer){
                    player2.x = 242;
                    player2.y = 86; 
                }
            }else if(helpNum == 12){
                player1.x = 500;
                player1.y = 86;
                if(playingMultiplayer){
                    player2.x = 500;
                    player2.y = 86;
                }
            }else if(helpNum == 13){
                player1.x = 820;
                player1.y = 86;
                if(playingMultiplayer){
                    player2.x = 820;
                    player2.y = 86;
                }
            }else if(helpNum == 14 || helpNum == 15){
                player1.x = 980;
                player1.y = 80;
                if(playingMultiplayer){
                    player2.x = 980;
                    player2.y = 80;
                }
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

const tellLocation = () => {
    setInterval(() => {
        console.log(player1.x, player1.y)
    }, 100);
}

//tellLocation()

//Back from Level to the Lobby
button_back.onclick = () => {
    canEnter = false; //Now you cant spam "e"
    backToLobby();
}
//Resume Function
button_resume.onclick = () => {
    canvas.style.filter = "blur(0)"
    rising.style.filter = "blur(0)"
    esc.style.display = "none"; 
    escShowed = false;
    black.style.opacity = "0";
}
//Back from Lobby to the Menu Function
button_menu.onclick = () => {
    inGame = false;
    howManyLevelsDoneFunction();
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
    rising.style.filter = "blur(0)";
    setTimeout(() => {
        game.style.display = "none";
        startMenu.style.display = "block";
        playButton.style.pointerEvents = "auto";
        playButton.style.display = "block";
        playButtonMulti.style.pointerEvents = "auto";
        playButtonMulti.style.display = "block";
        creditsButton.style.display = "block";
        skins.style.animationDuration = "0s";
        skins.style.animationPlayState = "running";
        skins.style.animationName = "rightToMidSkins";
        skins.style.pointerEvents = "auto";
        black.style.opacity = "0";
        fullBlack.style.opacity = "0";
        playingMultiplayer = false;
        setTimeout(() => {
            skins.style.animationDuration = "1s";
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
    rising.style.filter = "blur(0)"
    dead();
}


//----------------------------------------ESC Button Function
 
const escFunction = () => {
    canvas.style.filter = "blur(1px)";
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

let finished_castle = new Array (15)
let doneCastleLevels = 0

for (let index = 0; index < finished_castle.length; index++) {
    finished_castle[index] = 2;
}

finished_castle[helpNum] = 0; // Unlock 1st level

//----------------------------------------Finished level

let finished_steampunk = new Array (15)
let doneSteampunkLevels = 0

for (let index = 0; index < finished_steampunk.length; index++) {
    finished_steampunk[index] = 2;
}

finished_steampunk[helpNum] = 0; // Unlock 1st level

//----------------------------------------UNLOCK ALL DOORS FUNCTION

const unlockAll = () => {
    for (let index = 0; index < finished_castle.length; index++) {
        if(finished_castle[index] != 1){
            finished_castle[index] = 0;
        }
    }
    for (let index = 0; index < finished_steampunk.length; index++) {
        if(finished_steampunk[index] != 1){
            finished_steampunk[index] = 0;
        }
    }
}

//unlockAll()

//---------------------------------------- OBJECTS Collision

const objectsCollision = (PLAYER) => {
    if(playingBossFight){
        bossCollision(PLAYER);
        smokeCollision(PLAYER);
        spiderBossCollision(PLAYER);
        movingWallsSpiderCollision(PLAYER);
        spidersCollision(PLAYER, spider2X, spider2Y);
        spidersCollision(PLAYER, spider3X, spider3Y);
        spidersCollision(PLAYER, spider4X, spider4Y);
    }
    ghostCollision(PLAYER);
    sawCollision(PLAYER);
    spidersCollision(PLAYER, spider1X, spider1Y);
    if(PLAYER.velocityJump <= 0.1){
        movingPlatformCollision(PLAYER);
    }
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
        if (platformLevel1[i] == 30 || (platformLevel1[i] == 34 && frameDoorFinal == 0)) {
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
                    if(playingCastle){
                        finished_castle[helpNum] = 1; // Level Completed -> Doors are now GREEN
                        if(finished_castle[helpNum + 1] != 1){
                            finished_castle[helpNum + 1] = 0; // Another Level is available -> removed LOCK
                        }
                    }else if(playingSteamPunk){
                        finished_steampunk[helpNum] = 1; // Level Completed -> Doors are now GREEN
                        if(finished_steampunk[helpNum + 1] != 1){
                            finished_steampunk[helpNum + 1] = 0; // Another Level is available -> removed LOCK
                        }
                    }
                    backToLobby();
                    backToLobbyEntered = true;
                    if(usedRetry){
                        usedRetry = false;
                    }
                    if(playingCastle){
                        localStorage.setItem("finished_castle_" + helpNum, finished_castle[helpNum]);
                        localStorage.setItem("unlocked_castle_" + helpNum, finished_castle[helpNum + 1]);
                    }else if(playingSteamPunk){
                        localStorage.setItem("finished_steampunk_" + helpNum, finished_steampunk[helpNum]);
                        localStorage.setItem("unlocked_steampunk_" + helpNum, finished_steampunk[helpNum + 1]);
                    }
                    
                    
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

const howManyLevelsDoneFunction = () => {

    doneCastleLevels = 0;
    doneSteampunkLevels = 0;

    for (let index = 0; index < finished_castle.length - 1; index++) {
        if(finished_castle[index] == 1){
            doneCastleLevels++;
        }
    }

    for (let index = 0; index < finished_steampunk.length - 1; index++) {
        if(finished_steampunk[index] == 1){
            doneSteampunkLevels++;
        }
    }
    castleLevelsDone.innerHTML = doneCastleLevels + " / 15"
    steampunkLevelsDone.innerHTML = doneSteampunkLevels + " / 15"
}

window.onload =  () => {

    window.scrollTo(0, 0);

    //This will load you progress which was saved
    //Load Levels
    for (let i = 0; i <= 15; i++) {
        let savedValue = localStorage.getItem("unlocked_castle_" + i);
        if (savedValue !== null) {
            finished_castle[i + 1] = parseInt(savedValue); // Convert to numbers
        }
    }
    for (let i = 0; i <= 15; i++) {
        let savedValue = localStorage.getItem("finished_castle_" + i);
        if (savedValue !== null) {
            finished_castle[i] = parseInt(savedValue); // Convert to numbers
        }
    }
    for (let i = 0; i <= 15; i++) {
        let savedValue = localStorage.getItem("unlocked_steampunk_" + i);
        if (savedValue !== null) {
            finished_steampunk[i + 1] = parseInt(savedValue); // Convert to numbers
        }
    }
    for (let i = 0; i <= 15; i++) {
        let savedValue = localStorage.getItem("finished_steampunk_" + i);
        if (savedValue !== null) {
            finished_steampunk[i] = parseInt(savedValue); // Convert to numbers
        }
    }

    howManyLevelsDoneFunction();
    
    //Load Skins
    selectedRioter = true;
    selectedRuby = true;
    let savedValueRioter = localStorage.getItem('currentIndexSkinsRioter');
    if (savedValueRioter !== null) {
        currentIndexSkinsRioter = parseInt(savedValueRioter);
    }
    let savedValueRuby = localStorage.getItem('currentIndexSkinsRuby');
    if (savedValueRuby !== null) {
        currentIndexSkinsRuby = parseInt(savedValueRuby);
    }
    updateSkins()
    setSkins();
    selectedRuby = false;

    fullBlack.style.opacity = 0;

    setTimeout(() => {
        fullBlack.style.display = "none";
        fullBlack.style.pointerEvents = "auto";
    }, 1000);

}

//Reset Local Storage Function
const resetLocalStorage = () => {
    for (let i = 0; i <= 15; i++) {
        localStorage.removeItem("finished_castle_" + i);
    }
    for (let i = 0; i <= 15; i++) {
        localStorage.removeItem("unlocked_castle_" + i);
    }
    for (let i = 0; i <= 15; i++) {
        localStorage.removeItem("finished_steampunk_" + i);
    }
    for (let i = 0; i <= 15; i++) {
        localStorage.removeItem("unlocked_steampunk_" + i);
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
                PLAYER.x < platformX + 32.5 &&
                PLAYER.x > platformX
                ||
                PLAYER.y + PLAYER.height > platformY + 10 &&
                PLAYER.y < platformY + 10 &&
                PLAYER.x + PLAYER.width > platformX - 1 &&
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

let saveMovingPlatformCordsX = 0;
let saveMovingPlatformCordsY = 0;

const movingPlatformCollision = (PLAYER) => {
    if (
        (PLAYER.y + PLAYER.height >= yMovingPlatform - PLAYER.velocity) &&
        (PLAYER.y <= yMovingPlatform - 39) &&
        (PLAYER.x + PLAYER.width >= xMovingPlatform) &&
        (PLAYER.x <= xMovingPlatform + 64)
        ||
        (PLAYER.y + PLAYER.height >= yMovingPlatform - PLAYER.velocity) &&
        (PLAYER.y <= yMovingPlatform - 19) &&
        (PLAYER.x + PLAYER.width >= xMovingPlatform) &&
        (PLAYER.x <= xMovingPlatform + 64)
    ){
        sidesCollision(PLAYER);
        cancelAnimationFrame(PLAYER.gravityId);
        PLAYER.y = yMovingPlatform - PLAYER.height;
        PLAYER.onMovingPlatform = true;
        PLAYER.onWood = false;
        PLAYER.onRock = true;
        if(PLAYER.downPressed && !PLAYER.crouched){ //You will still crouch
            crouch(PLAYER);
        }
        if(!sfx_walk.paused && PLAYER.velocityRight <= 2 && PLAYER.velocityLeft <= 2 || PLAYER.velocity >= 0.3 || PLAYER.isJumping){
            sfx_walk.pause();
        }
        if(PLAYER.velocity > 0){
            if(PLAYER == player1){
                if(sfx_land.paused && sfx_land.src != "./res/sfx/small_land.mp3" && PLAYER.velocity >= 3 && PLAYER.velocity < 8 && !PLAYER.ladderCol){
                    sfx_land.src = "./res/sfx/small_land.mp3"
                    sfx_land.play();
                }else if(sfx_land.paused && sfx_land.src != "./res/sfx/large_land.mp3" && PLAYER.velocity >= 8 && !PLAYER.ladderCol){
                    sfx_land.src = "./res/sfx/large_land.mp3"
                    sfx_land.play();
                }
                sfx_climb.pause()
            }else{
                if(sfx_land2.paused && sfx_land.src != "./res/sfx/small_land.mp3" && PLAYER.velocity >= 3 && PLAYER.velocity < 8 && !PLAYER.ladderCol){
                    sfx_land2.src = "./res/sfx/small_land.mp3"
                    sfx_land2.play();
                }else if(sfx_land2.paused && sfx_land.src != "./res/sfx/large_land.mp3" && PLAYER.velocity >= 8 && !PLAYER.ladderCol){
                    sfx_land2.src = "./res/sfx/large_land.mp3"
                    sfx_land2.play();
                }
                sfx_climb2.pause()
            }
        }
        PLAYER.velocity = 0;
    } else if (PLAYER.onMovingPlatform && !PLAYER.crouched)  {
        PLAYER.onMovingPlatform = false;
        gravity(PLAYER);
    }
}

let saveSawCordsX = 0
let saveSawCordsY = 0

const sawCollision = (PLAYER) => {
    if (
        (PLAYER.y + 5 + PLAYER.height - 10 >= ySaw) &&
        (PLAYER.y + 5 <= ySaw + 69) &&
        (PLAYER.x + 5 + PLAYER.width - 10 >= xSaw) &&
        (PLAYER.x + 5 <= xSaw + 64)
    ){
        dead()
    }
}

const spidersCollision = (PLAYER, spiderX, spiderY) => {
    if (
        PLAYER.y + PLAYER.height >= spiderY + 352 - 32 && 
        PLAYER.y <= spiderY + 352 &&
        PLAYER.x + PLAYER.width >= spiderX &&
        PLAYER.x <= spiderX + 32
    ) {
        dead();
    }
}

const pipesCollision = (PLAYER) => {
    if(playingSteamPunk){
        for (let i = 0; i < platformLevel1.length; i++) {
            //Pipe RIGHT
        if (platformLevel1[i] == 80) {
            let platformX = (i % 32) * 32;
            let platformY = Math.floor(i / 32) * 32;
            if (
                PLAYER.y + PLAYER.height > platformY &&
                PLAYER.y < platformY + 32 &&
                PLAYER.x + PLAYER.width + 1 > platformX &&
                PLAYER.x < platformX + 32
                && PLAYER.crouched
            ) {
                shakePipes();
                PLAYER.inPipe = true;
                PLAYER.x = -100000;
                PLAYER.y = -100000;
                if(PLAYER == player1){
                    sfx.src = "./res/sfx/pipe.mp3";
                    sfx.play();
                }else{
                    sfx2.src = "./res/sfx/pipe.mp3";
                    sfx2.play();
                }
                setTimeout(() => {
                    unCrouch(PLAYER);
                    PLAYER.inPipe = false;
                    PLAYER.velocity = 0;
                    PLAYER.x = cordsPipeX2;
                    PLAYER.y = cordsPipeY2; 
                }, 2400);
            }
        }
        //Pipe LEFT
        if (platformLevel1[i] == 79) {
            let platformX = (i % 32) * 32;
            let platformY = Math.floor(i / 32) * 32;
            if (
                PLAYER.y + PLAYER.height > platformY &&
                PLAYER.y < platformY + 32 &&
                PLAYER.x - 1 < platformX + 32 &&
                PLAYER.x > platformX
                && PLAYER.crouched
            ) {
                shakePipes();
                PLAYER.inPipe = true;
                PLAYER.x = 100000;
                PLAYER.y = -100000;
                if(PLAYER == player1){
                    sfx.src = "./res/sfx/pipe.mp3";
                    sfx.play();
                }else{
                    sfx2.src = "./res/sfx/pipe.mp3";
                    sfx2.play();
                }
                setTimeout(() => {
                    unCrouch(PLAYER);
                    PLAYER.inPipe = false;
                    PLAYER.velocity = 0;
                    PLAYER.x = cordsPipeX1;
                    PLAYER.y = cordsPipeY1;  
                }, 2400);
            }
        }
    }
}
}

const movingWallsSpiderCollision = (PLAYER) => {
    if(
        PLAYER.x < leftWallX + 155 || PLAYER.x + 30 > rightWallX + 5
    ){
        dead();
    }
}

//---------------------------------------- Crouch and Stand (Player)

//This Function is checking, if you do not have a block above you (then you can stand up)
const aboveHeadCollision = (PLAYER) => {
    PLAYER.ahCollision = window.requestAnimationFrame(() => aboveHeadCollision(PLAYER));
    if (PLAYER.crouched) {
        for (let i = 0; i < platformLevel1.length; i++) {
            if ([1, 6, 7, 9, 18, 19, 32, 33, 36, 37, 71, 68, 73, 74, 75, 76, 77, 78, 79, 80].includes(platformLevel1[i])) {
                let platformX = (i % 32) * 32;
                let platformY = Math.floor(i / 32) * 32;
                if (
                    PLAYER.y + PLAYER.height >= platformY + 64 &&
                    PLAYER.y + PLAYER.height <= platformY + 64 &&
                    PLAYER.x + PLAYER.width >= platformX &&
                    PLAYER.x <= platformX + 32
                    ||
                    PLAYER.y + PLAYER.height >= platformY + 64 - 6&&
                    PLAYER.y + PLAYER.height <= platformY + 64 - 6 &&
                    PLAYER.x + PLAYER.width >= platformX &&
                    PLAYER.x <= platformX + 32 &&
                    PLAYER.onMovingPlatform
                ) {
                    PLAYER.canStandUp = false;
                    break;
                }else{
                    PLAYER.canStandUp = true;
                }
            }
        }
    }
}

//Crouching Function
let crouch = (PLAYER) => {
    if(!PLAYER.stillJumping || PLAYER.onMovingPlatform && !PLAYER.ladderCol){
        PLAYER.crouched = true;
        PLAYER.height = 20;
        PLAYER.y += 20;
        aboveHeadCollision(PLAYER);
    };
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
    if(PLAYER.canStandUp == true && PLAYER.velocity <= 0){
        unCrouch(PLAYER);
        PLAYER.wasUnder = true;
        cancelAnimationFrame(PLAYER.underCollision);
    }
}

//---------------------------------------- Collision Canvas BOTTOM and BLOCKS

const bottomCollision = (PLAYER) => {
    for (let i = 0; i < platformLevel1.length; i++) {
        if ([1, 6, 7, 9, 18, 19, 32, 33, 36, 37, 71, 68, 73, 74, 75, 76, 77, 78, 79, 80].includes(platformLevel1[i])) {
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
                if(platformLevel1[i] == 1 || platformLevel1[i] == 6 || platformLevel1[i] == 32 ||
                    platformLevel1[i] == 33 || platformLevel1[i] == 68 || platformLevel1[i] == 71){ //You are on Rock
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
            if ([1, 6, 7, 9, 18, 19, 32, 33, 36, 37, 71, 68, 73, 74, 75, 76, 77, 78, 79, 80].includes(platformLevel1[i])) {
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
            if(PLAYER.crouched && PLAYER.velocity >= 2.5){
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
            if(PLAYER.onMovingPlatform){
                PLAYER.onMovingPlatform = false;
            }
            movingPlatformCollision(PLAYER);
            stopSlideDetection(PLAYER)
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
    if((PLAYER.stillJumping == false || PLAYER.canOrbJump == true && PLAYER.orbUsed == false) || PLAYER.canUseJumpPad || PLAYER.bounced || PLAYER.canSlideOnWall && !PLAYER.slideJumped || PLAYER.onMovingPlatform){
        if(PLAYER.canSlideOnWall){
            setTimeout(() => {
                PLAYER.slideJumped = false;
            }, 500);
        }
        PLAYER.onRock = false;
        PLAYER.onWood = false;
        PLAYER.onMovingPlatform = false;
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
                if(!PLAYER.onMovingPlatform){
                    gravity(PLAYER);
                }
            }else{ //Not Crouched
                if(PLAYER.isMovingRight == true){
                    sfxWalkFunction(PLAYER);
                    if(PLAYER.velocityRight < 4 && PLAYER.crouched == false){
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
            pipesCollision(PLAYER);
            for (let i = 0; i < platformLevel1.length; i++) {
                if ([1, 6, 7, 9, 18, 19, 32, 33, 36, 37, 71, 68, 73, 74, 75, 76, 77, 78, 79, 80].includes(platformLevel1[i])) {
                    let platformX = (i % 32) * 32;
                    let platformY = Math.floor(i / 32) * 32;
                    if (
                        PLAYER.y + PLAYER.height > platformY &&
                        PLAYER.y < platformY + 32 &&
                        PLAYER.x + PLAYER.width + PLAYER.velocityRight + 0.2 > platformX &&
                        PLAYER.x < platformX + 32
                    ) {
                        if(PLAYER.velocityRight > PLAYER.velocityLeft && PLAYER.isMovingRight){ //Fixing switching sides
                            PLAYER.turnedRight = true;
                            PLAYER.turnedLeft = false;
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
            if  (PLAYER.x >= canvas.width - PLAYER.width && !PLAYER.inPipe) {
                PLAYER.x = canvas.width - PLAYER.width;
                PLAYER.velocityRight = 0;
                cancelAnimationFrame(PLAYER.animationIdRight);
            }
            if(PLAYER.x > rightWallX - 2){
                    PLAYER.velocityRight = 0;
                    PLAYER.x = rightWallX - 1.8;
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
            pipesCollision(PLAYER);
            for (let i = 0; i < platformLevel1.length; i++) {
                if ([1, 6, 7, 9, 18, 19, 32, 33, 36, 37, 71, 68, 73, 74, 75, 76, 77, 78, 79, 80].includes(platformLevel1[i])) {
                    let platformX = (i % 32) * 32;
                    let platformY = Math.floor(i / 32) * 32;
                    if (
                        PLAYER.y+ PLAYER.height > platformY &&
                        PLAYER.y< platformY + 32 &&
                        PLAYER.x - PLAYER.velocityLeft < platformX + 32 &&
                        PLAYER.x > platformX
                    ) {
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
            if  (PLAYER.x <= 0 && !PLAYER.inPipe) {
                PLAYER.x = 0;
                PLAYER.velocityLeft = 0;
                cancelAnimationFrame(PLAYER.animationIdLeft);
            }
            if(playingBossFight && playingSteamPunk){
                if(PLAYER.x < leftWallX + 128){
                    PLAYER.velocityLeft = 0;
                    PLAYER.x = leftWallX + 128.2;
                }
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

let sidesCol = false;
let sideRightCol = false;
let sideLeftCol = false;

const sidesCollision = (PLAYER) => {
    sidesCol = false;
    sideRightCol = false;
    sideLeftCol = false;

    for (let i = 0; i < platformLevel1.length; i++) {
        if ([1, 6, 7, 9, 18, 19, 32, 33, 36, 37, 71, 68].includes(platformLevel1[i])) {
            let platformX = (i % 32) * 32;
            let platformY = Math.floor(i / 32) * 32;
            if (
                PLAYER.y + PLAYER.height > platformY &&
                PLAYER.y < platformY + 32 &&
                PLAYER.x + PLAYER.width + 2 > platformX &&
                PLAYER.x < platformX + 32
            ) {
                sidesCol = true;
                sideLeftCol = true;
            }
            if (
                PLAYER.y + PLAYER.height > platformY &&
                PLAYER.y < platformY + 32 &&
                PLAYER.x < platformX + 32 + 2 &&
                PLAYER.x > platformX
            ) {
                sidesCol = true;
                sideRightCol = true;
            }
        }
    }
}


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
                if(shieldActive){
                    setTimeout(() => {
                        sfx_punch.src = "./res/sfx/shield_hit.mp3";
                        sfx_punch.play();
                    }, 100);
                }else{
                    sfx_punch.src = "./res/sfx/punch.mp3";
                    sfx_punch.play();
                }
            }else{
                if(shieldActive){
                    setTimeout(() => {
                        sfx_punch2.src = "./res/sfx/shield_hit.mp3";
                        sfx_punch2.play();
                    }, 100);
                }else{
                    sfx_punch2.src = "./res/sfx/punch.mp3";
                    sfx_punch2.play();
                }
            }
            if(playingCastle && helpNum == 14){ // Crimson Reaper Boss Hit
                if(currentHp == 85 && !reaperPhase2){
                    currentHp -= 5;
                    setTimeout(() => {
                        shieldActive = true; 
                    }, 10);
                }else if(currentHp == 65 && !reaperPhase3 && reaperPhase2){
                    currentHp -= 5;
                    setTimeout(() => {
                        shieldActive = true; 
                    }, 10);
                }else if(currentHp == 45 && !reaperPhase4 && reaperPhase3){
                    currentHp -= 5;
                    setTimeout(() => {
                        shieldActive = true; 
                    }, 10);
                }else if(currentHp == 25 && !reaperPhase5 && reaperPhase4){
                    currentHp -= 5;
                    setTimeout(() => {
                        shieldActive = true; 
                    }, 10);
                }else if(shieldActive){
                    currentHp -= 0;
                }else{
                    currentHp -= 5;
                }
            }else if(playingSteamPunk && helpNum == 14){ // Spider Boss Hit
                if(currentHp == 85 && !spiderPhase2){
                    currentHp -= 5;
                    setTimeout(() => {
                        shieldActive = true; 
                    }, 10);
                }else if(currentHp == 65 && !spiderPhase3 && spiderPhase2){
                    currentHp -= 5;
                    setTimeout(() => {
                        shieldActive = true; 
                    }, 10);
                }else if(currentHp == 45 && !spiderPhase4 && spiderPhase3){
                    currentHp -= 5;
                    setTimeout(() => {
                        shieldActive = true; 
                    }, 10);
                }else if(currentHp == 25 && !spiderPhase5 && spiderPhase4){
                    currentHp -= 5;
                    setTimeout(() => {
                        shieldActive = true; 
                    }, 10);
                }else if(shieldActive){
                    currentHp -= 0;
                }else{
                    currentHp -= 5;
                }
            }
            if(playingCastle && !shieldActive){
                bossPunchedNumber = 2;
            }else if(playingSteamPunk && !shieldActive){
                bossPunchedNumber = 3;
            }
            clearTimeout(punchedBossTimeout);
            punchedBossTimeout = setTimeout(() => {
                bossPunchedNumber = 0;
            }, 400);;
            
            hp.style.width = currentHp + "%";
            if(currentHp <= 0 && !backToLobbyEntered && playingCastle){
                deadBoss();
                finalDoorUnlocked = true;
            }else if(currentHp <= 0 && !backToLobbyEntered && playingSteamPunk){
                finalSceneSpiderBoss();
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
                        PLAYER.x > platformX + 32 && PLAYER.turnedLeft)
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

const cancelPlayerMovement = () => {
    player1.velocity = 0;
    player1.velocityRight = 0;
    player1.velocityLeft = 0;
    player1.velocityJump = 0;
    player2.velocity = 0;
    player2.velocityRight = 0;
    player2.velocityLeft = 0;
    player2.velocityJump = 0;
    sfx_walk.pause();
    sfx_walk2.pause();
    cancelAnimationFrame(player1.animationIdRight);
    cancelAnimationFrame(player1.animationIdLeft);
    cancelAnimationFrame(player2.animationIdRight);
    cancelAnimationFrame(player2.animationIdLeft);
    player1.isMovingRight = false;
    player1.isMovingLeft = false;
    player2.isMovingRight = false;
    player2.isMovingLeft = false;
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
                    if(player1.canOrbJump && player1.velocity== 0 || player1.slideJumped || player1.onMovingPlatform){
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
        moveRight(player1);
    // A - Moving Left / Climbing Left
    } else if ((event.key == left || event.key == LEFT) && !player1.isMovingLeft && inGame) {
        player1.isMovingLeft = true;
        player1.turnedRight = false;
        player1.turnedLeft = true;
        cancelAnimationFrame(player1.animationIdLeft);
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
        if(!player1.alreadyPunched && !player1.ladderCol && !player1.inPipe && inGame){
            punch(player1);
        }
        player1.alreadyPunched = true;
    } else if (event.key == "Escape" && inGame) {
        if(musicEditorOpened){
            music_editor.style.display = "none";
            musicEditorOpened = false;
            black.style.opacity = "0";
            canvas.style.filter = "blur(0)"
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
                        if(player2.canOrbJump && player2.velocity == 0 || player2.slideJumped || player2.onMovingPlatform){
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
            moveRight(player2);
        // ArrowLeft - Moving Left / Climbing Left
        } else if (event.key == "ArrowLeft" && !player2.isMovingLeft && inGame) {
            player2.isMovingLeft = true;
            player2.turnedRight = false;
            player2.turnedLeft = true;
            cancelAnimationFrame(player2.animationIdLeft);
            moveLeft(player2);
        // Enter - Punching BOSS / Breaking Cracked Blocks
        } else if (event.key == "Enter") {
            if(!player2.alreadyPunched && !player2.ladderCol && !player2.inPipe && inGame){
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
        if(player1.velocityRight <= player1.velocityLeft && player1.isMovingLeft){ //Fixing switching sides
            player1.turnedLeft = true;
            player1.turnedRight = false;
        }
    }
    // A - Stop Moving Left
    if (event.key == left || event.key == LEFT) {
        player1.isMovingLeft = false;
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
        player2.isMovingRight = false;
        if(player2.velocityRight <= player2.velocityLeft && player2.isMovingLeft){ //Fixing switching sides
            player2.turnedLeft = true;
            player2.turnedRight = false;
        }
    }
    if (event.key == "ArrowLeft") {
        player2.isMovingLeft = false;
        if(player2.velocityLeft <= player2.velocityRight && player2.isMovingRight){ //Fixing switching sides
            player2.turnedLeft = false;
            player2.turnedRight = true;
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