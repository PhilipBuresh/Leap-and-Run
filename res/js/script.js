
const canvas = document.getElementById("canvas");
const canvas_darkness = document.getElementById("canvas_darkness");
const canvas_transition = document.getElementById("canvas_transition");
const canvas_container = document.getElementById("canvas_container");
const container = document.getElementById("container");
const backgroundVideo = document.getElementById("background-video");
const c = canvas.getContext("2d");
const c_d = canvas_darkness.getContext("2d");
const c_t = canvas_transition.getContext("2d");
const text = document.getElementById("text");
const characters = document.getElementById("characters");
const man = document.getElementById("man");
const woman = document.getElementById("woman");
const chooseDungeon = document.getElementById("chooseDungeon");
const castleDungeon = document.getElementById("castleDungeon");
const steampunkDungeon = document.getElementById("steampunkDungeon");
const spaceshipDungeon = document.getElementById("spaceshipDungeon");
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
const sfx_laser = document.getElementById("sfx_laser");
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
const recommend = document.getElementById("recommend");
const credits_list = document.getElementById("credits_list");
const red_cross_credits = document.getElementById("red_cross_credits");
const credits_boss = document.getElementById("credits_boss");
const skip_credits = document.getElementById("skip_credits");
const rising = document.getElementById("rising");
const esc = document.getElementById("esc");
const playButton = document.getElementById("playButton");
const playButtonMulti = document.getElementById("playButtonMulti");
const tutorialButton = document.getElementById("tutorialButton");
const creditsButton = document.getElementById("creditsButton");
const correct_symbol = document.getElementById("correct_symbol");
const hp = document.getElementById("hp");
const myHp = document.getElementById("myHp");
const divider1 = document.getElementById("divider1");
const divider2 = document.getElementById("divider2");
const divider3 = document.getElementById("divider3");
const divider4 = document.getElementById("divider4");
const boss_name = document.getElementById("name");
const alien_divider1 = document.getElementById("alien_divider1");
const alien_divider2 = document.getElementById("alien_divider2");
const alien_divider3 = document.getElementById("alien_divider3");
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
const note = document.getElementById("note");
const music_editor = document.getElementById("music_editor");
const music_editor_back = document.getElementById("music_editor_back");
const steampunkLevelsDone = document.getElementById("steampunkLevelsDone");
const castleLevelsDone = document.getElementById("castleLevelsDone");
const spaceshipLevelsDone = document.getElementById("spaceshipLevelsDone");
const achievementsButton = document.getElementById("achievementsButton");
const achievements_list = document.getElementById("achievements_list");
const tutorials_list = document.getElementById("tutorials_list");
const gate = document.getElementById("gate");
const red_cross_achievements = document.getElementById("red_cross_achievements");
const red_cross_tutorials = document.getElementById("red_cross_tutorials");
const achievement_button = document.getElementById("achievement_button");
const trophy = document.getElementById("trophy");
const first_col = document.getElementById("first_col");
const second_col = document.getElementById("second_col");
const deathCounterShow = document.getElementById("deathCounterShow");
const deadImg = document.getElementById("deadImg");

let helpNum = 0; //Help Number for level detection (doors)

//Timer in menu
const Clock = () => {
    const today = new Date();

    const clockFormatter = new Intl.DateTimeFormat('en-US', {
        hour: '2-digit',
        minute: '2-digit',
        hour12: true
    });

    const clock = clockFormatter.format(today);
    document.getElementById("clock").textContent = clock;
};

setInterval(Clock, 1000); // Aktualizace každou sekundu


//Alien level completed

const alienLevelCompleted = () => {
    canvas_transition.style.display = "block";
    skip_credits.style.animationName = "midToRight_btn";
    skip_credits.style.animationPlayState = "running";
    skip_credits.style.pointerEvents = "none";
    levelCompleted();
}

//Moving Credits in Alien Boss Level
let defaultLocationCreditsY = 100;
let locationCreditsY = 100;
let movingCreditsInterval

const movingCredits = () => {
    if(!btnBackUsedinAlienLevel){
        canvas_transition.style.display = "none";
        music.currentTime = 0;
        music.src = "./res/music_spaceship/ending.mp3";
        music.play();
        credits_boss.style.top = defaultLocationCreditsY + "%";
        credits_boss.style.display = "block";
        skip_credits.style.display = "block";
        skip_credits.style.animationName = "rightToMid_btn";
        skip_credits.style.animationPlayState = "running"
        skip_credits.style.pointerEvents = "auto";
        movingCreditsInterval = setInterval(() => {
            locationCreditsY -= 1.05;
            credits_boss.style.top = locationCreditsY + "%";
            if(music.currentTime >= 103){
                alienLevelCompleted()
                clearInterval(movingCreditsInterval);
            }
        }, 50);
    }
}

skip_credits.onclick = () => {
    alienLevelCompleted();
}


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
    //PLAYER 1
    sfx.volume = sfxVolume;
    sfx_dead.volume = sfxVolume;
    sfx_player.volume = sfxVolume;
    sfx_walk.volume = sfxVolume;
    sfx_climb.volume = sfxVolume;
    sfx_miss.volume = sfxVolume;
    sfx_jump.volume = sfxVolume;
    sfx_punch.volume = sfxVolume;
    sfx_land.volume = sfxVolume;
    sfx_extra_jump.volume = sfxVolume;
    //PLAYER 2
    sfx2.volume = sfxVolume;
    sfx_dead2.volume = sfxVolume;
    sfx_player2.volume = sfxVolume;
    sfx_walk2.volume = sfxVolume;
    sfx_climb2.volume = sfxVolume;
    sfx_miss2.volume = sfxVolume;
    sfx_jump2.volume = sfxVolume;
    sfx_punch2.volume = sfxVolume;
    sfx_extra_jump2.volume = sfxVolume;
    sfx_land2.volume = sfxVolume;
    //EXTRA
    sfx_boss_talk.volume = sfxVolume;
    sfx_boss_laugh.volume = sfxVolume;
    sfx_laser.volume = sfxVolume;
    sfx_achievement.volume = sfxVolume;
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
    if(inGame && !escShowed && !achievementListOpened){
        if(musicEditorOpened){
            music_editor.style.display = "none";
            musicEditorOpened = false;
            black.style.opacity = "0";
            note_button.style.border = "3px solid white";
            note.style.filter = "invert(1)";
        }else{
            music_editor.style.display = "flex";
            musicEditorOpened = true;
            black.style.opacity = "0.6";
            note_button.style.border = "3px solid gray";
            note.style.filter = "invert(0.5)";
        }
    }
}
//Music Editor -> You can here adjust volume of Music or SFX by yourself
music_editor_back.onclick = () => {
    if(musicEditorOpened){
        music_editor.style.display = "none";
        musicEditorOpened = false;
        black.style.opacity = "0";
        note_button.style.border = "3px solid white";
        note.style.filter = "invert(1)";
    }
}

let achievementListOpened = false;

//Achievements list in game
achievement_button.onclick = () => {
    if(inGame && !escShowed && !musicEditorOpened){
        if(achievementListOpened){
            achievementsButtonOffFun();
            achievementListOpened = false;
            black.style.opacity = "0";
            achievement_button.style.pointerEvents = "none";
            fullBlack.style.display = "auto";
            setTimeout(() => {
                achievement_button.style.border = "3px solid white"
                achievement_button.style.pointerEvents = "auto";
                trophy.style.filter = "invert(1)";
            }, 800);
        }else{
            achievementsButtonOnFun();
            achievementListOpened = true;
            black.style.opacity = "0.6";
            achievement_button.style.border = "3px solid gray"
            trophy.style.filter = "invert(0.5)";
            fullBlack.style.display = "none";
        }
    }
}

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

document.body.style.pointerEvents = "none";

window.onresize = function() {
    resizeTimer()

    //Resize Loading Bar and Running Rioter
    loadCountColor = (100 * loadedCount) / gameFiles.length;
    loading_color.style.width = loadCountColor + "%";
    const loadingBarWidth = document.getElementById('loading_bar').offsetWidth;
    runningRioterLocation = (loadingBarWidth * loadCountColor / 100) - running_rioter.width;
    if(runningRioterLocation >= running_rioter.width){
        running_rioter.style.left = runningRioterLocation + "px"
    }
};

let doorsTime = 0;
let doorTimeout = false;
let setTimeoutDoor;

//--------------------------------------------------Play Button
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
    achievementsButton.style.display = "none";
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
    deadImg.src = "./res/img/dead_rioter.png";
    playButton.style.display = "none";
    playButtonMulti.style.animationName = "blink"
    playButtonMulti.style.animationPlayState = "running";
    tutorialButton.style.opacity = "0%";
    tutorialButton.style.pointerEvents = "none";
    playButtonMulti.style.pointerEvents = "none";
    tutorialButton.style.pointerEvents = "none";
    creditsButton.style.display = "none";
    achievementsButton.style.display = "none";
    skins.style.animationName = "midToRightSkins";
    skins.style.animationPlayState = "running";
    skins.style.pointerEvents = "none";
    text.style.opacity = "0";
    note_button.style.zIndex = "3";
    escape_button.style.zIndex = "3";
    selectedRioter = true;
    setSkins();
    setHats();
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
    turnOffButtons();
}

//Credit Button
creditsButton.onclick = () => {
    credits_list.style.display = "block";
    turnOffButtons();
}
//Credits List
red_cross_credits.onclick = () => {
    credits_list.style.display = "none";
    turnOnButtons();
}

//This function will send you to the game

let lobbyMusic = "./res/music_castle/lobby_castle.mp3";

const menuToLobby = () => {
    music.src = lobbyMusic;
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

const achievementsButtonOnFun = () => {
    turnOffButtons();
    achievements_list.style.display = "block";
    achievements_list.style.animationName = "bottomToUp_Achievement"
    achievements_list.style.animationPlayState = "running";
    achievements_list.style.animationDuration = "0.8s";

    gate.style.display = "block";
    gate.style.animationName = "bottomToUp_Gate"
    gate.style.animationPlayState = "running";
    gate.style.animationDuration = "0.8s";

    red_cross_achievements.style.display = "block";
    red_cross_achievements.style.animationName = "bottomToUp_Cross"
    red_cross_achievements.style.animationPlayState = "running";
    red_cross_achievements.style.animationDuration = "0.8s";
    red_cross_achievements.style.pointerEvents = "auto";

    fullBlack.style.display = "none";
}

//Achievements Button
achievementsButton.onclick = () => {
    achievementsButtonOnFun();
}

const achievementsButtonOffFun = () => {
    achievements_list.style.animationName = "upToBottom_Achievement"
    achievements_list.style.animationPlayState = "running";
    achievements_list.style.animationDuration = "0.8s";

    gate.style.animationName = "upToBottom_Gate"
    gate.style.animationPlayState = "running";
    gate.style.animationDuration = "0.8s";

    red_cross_achievements.style.animationName = "upToBottom_Cross"
    red_cross_achievements.style.animationPlayState = "running";
    red_cross_achievements.style.animationDuration = "0.8s";
    red_cross_achievements.style.pointerEvents = "none";

    fullBlack.style.display = "auto";

    setTimeout(() => {
        achievements_list.style.display = "none";
        gate.style.display = "none";
        red_cross_achievements.style.display = "none";
        turnOnButtons();
    }, 1000);
}

red_cross_achievements.onclick = () => {
    achievementsButtonOffFun();
    if(achievementListOpened){
        achievementListOpened = false;
        black.style.opacity = "0";
        achievement_button.style.pointerEvents = "none";
        setTimeout(() => {
            achievement_button.style.border = "3px solid white"
            achievement_button.style.pointerEvents = "auto";
            trophy.style.filter = "invert(1)";
        }, 800);
    }
}

//Tutorials Button Functions

const tutorialsButtonOnFun = () => {
    turnOffButtons();
    tutorials_list.style.display = "block";
    tutorials_list.style.animationName = "bottomToUp_Tutorial"
    tutorials_list.style.animationPlayState = "running";
    tutorials_list.style.animationDuration = "0.8s";

    gate.style.display = "block";
    gate.style.animationName = "bottomToUp_Gate"
    gate.style.animationPlayState = "running";
    gate.style.animationDuration = "0.8s";

    red_cross_tutorials.style.display = "block";
    red_cross_tutorials.style.animationName = "bottomToUp_Cross"
    red_cross_tutorials.style.animationPlayState = "running";
    red_cross_tutorials.style.animationDuration = "0.8s";
    red_cross_tutorials.style.pointerEvents = "auto";

    fullBlack.style.display = "none";
}

//Tutorial Button
tutorialButton.onclick = () => {
    tutorialsButtonOnFun();
}

const tutorialsButtonOffFun = () => {
    tutorials_list.style.animationName = "upToBottom_Tutorial"
    tutorials_list.style.animationPlayState = "running";
    tutorials_list.style.animationDuration = "0.8s";

    gate.style.animationName = "upToBottom_Gate"
    gate.style.animationPlayState = "running";
    gate.style.animationDuration = "0.8s";

    red_cross_tutorials.style.animationName = "upToBottom_Cross"
    red_cross_tutorials.style.animationPlayState = "running";
    red_cross_tutorials.style.animationDuration = "0.8s";
    red_cross_tutorials.style.pointerEvents = "none";

    fullBlack.style.display = "auto";

    setTimeout(() => {
        tutorials_list.style.display = "none";
        gate.style.display = "none";
        red_cross_tutorials.style.display = "none";
        turnOnButtons();
    }, 1000);
}

red_cross_tutorials.onclick = () => {
    tutorialsButtonOffFun();
    black.style.opacity = "0";
    achievement_button.style.pointerEvents = "none";
    setTimeout(() => {
        achievement_button.style.border = "3px solid white"
        achievement_button.style.pointerEvents = "auto";
        trophy.style.filter = "invert(1)";
    }, 800);
}


man.onclick = () => { //Choosing Character - Rioter
    characters.style.display = "none";
    playButton.style.display = "none";
    selectedRioter = true;
    selectedRuby = false;
    setSkins();
    setHats();
    heart1.src = "./res/img/heart_rioter.png";
    heart2.src = "./res/img/heart_rioter.png";
    heart3.src = "./res/img/heart_rioter.png";
    deadImg.src = "./res/img/dead_rioter.png";
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
    setHats();
    heart1.src = "./res/img/heart_ruby.png";
    heart2.src = "./res/img/heart_ruby.png";
    heart3.src = "./res/img/heart_ruby.png";
    deadImg.src = "./res/img/dead_ruby.png";
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

//TURN OFF Al Buttons
const turnOffButtons = () => {
    playButton.style.pointerEvents = "none";
    playButtonMulti.style.pointerEvents = "none";
    achievementsButton.style.pointerEvents = "none";
    tutorialButton.style.pointerEvents = "none";
    creditsButton.style.pointerEvents = "none";
    choose_rioter.style.pointerEvents = "none";
    choose_ruby.style.pointerEvents = "none";

    playButton.style.color = "gray";
    playButtonMulti.style.color = "gray";
    achievementsButton.style.color = "gray";
    tutorialButton.style.color = "gray";
    creditsButton.style.color = "gray";
    choose_rioter.style.color = "gray";
    choose_ruby.style.color = "gray";
}

//TURN ON Al Buttons
const turnOnButtons = () => {
    playButton.style.pointerEvents = "auto";
    playButtonMulti.style.pointerEvents = "auto";
    achievementsButton.style.pointerEvents = "auto";
    tutorialButton.style.pointerEvents = "auto";
    creditsButton.style.pointerEvents = "auto";
    choose_rioter.style.pointerEvents = "auto";
    choose_ruby.style.pointerEvents = "auto";

    playButton.style.color = "white";
    playButtonMulti.style.color = "white";
    achievementsButton.style.color = "white";
    tutorialButton.style.color = "white";
    creditsButton.style.color = "white";
    choose_rioter.style.color = "white";
    choose_ruby.style.color = "white";
}

//Choosing Castle Dungeon
castleDungeon.onclick = () => {
    chooseDungeon.style.pointerEvents = "none";
    setDungeonToCastle();
    movingCharactersAndFullBlack();
}

//Choosing Steampunk Dungeon
steampunkDungeon.onclick = () => {
    chooseDungeon.style.pointerEvents = "none";
    setDungeonToSteamPunk();
    movingCharactersAndFullBlack();
}

//Choosing Spaceship Dungeon
spaceshipDungeon.onclick = () => {
    chooseDungeon.style.pointerEvents = "none";
    setDungeonToSpace();
    movingCharactersAndFullBlack();
}

//If you choose a character -> Transition will be activated and you will be send to the game by function menuToLobby()
const movingCharactersAndFullBlack = () => {
    resetGravity();
    fullBlack.style.display = "block";
    note_button.style.zIndex = "3";
    escape_button.style.zIndex = "3";
    achievement_button.style.zIndex = "3";
    setTimeout(() => {
        fullBlack.style.opacity = "1";
    }, 10);
    setTimeout(() => {
        afkTimer();
        afkTimeCounter = 0;
        characters.style.display = "none";
        menuToLobby();
        drawing();
        fullBlack.style.opacity = "0";
        setTimeout(() => {
            note_button.style.zIndex = "11";
            escape_button.style.zIndex = "11";
            achievement_button.style.zIndex = "11";
        }, 800);
        gravity(player1);
        gravity(player2);
        backgroundVideo.style.opacity = 0;
        chooseDungeon.style.display = "none";
        chooseDungeon.style.animationDuration = "0s";
        chooseDungeon.style.animationName = "midToBottom"
        chooseDungeon.style.animationPlayState = "running";
        setSkins();
        achievementPinkColor();
        if (deviceDetect) {
            buttons.style.display = "block";
        }
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
    for (let i = 0; i < currentPlatform.length; i++) {
        if (currentPlatform[i] >= 50 && currentPlatform[i] <= 64 || currentPlatform[i] == 34) {
            let platformX = (i % 32) * 32;
            let platformY = Math.floor(i / 32) * 32;
            if (
                PLAYER.y + PLAYER.height >= platformY &&
                PLAYER.y + PLAYER.height <= platformY + 64 &&
                PLAYER.x + PLAYER.width >= platformX + 24 &&
                PLAYER.x <= platformX + 40
            ) {
                if(currentPlatform[i] != 34 && inGame){
                    helpNum = currentPlatform[i] - 50;
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
                if((finished_castle[helpNum] == 2 && playingCastle) || (finished_steampunk[helpNum] == 2 && playingSteamPunk) || (finished_spaceship[helpNum] == 2 && playingSpace) || !finalDoorUnlocked && currentPlatform[i] != 34){
                    c.fillStyle = "red";
                    c.fillText("LOCKED", platformX + 7, platformY);
                }else{
                    if((playingSteamPunk && currentPlatform[i] != 34) || (playingCastle && currentPlatform[i] != 34) || (playingSpace && currentPlatform[i] != 34)){
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
                        if(deviceDetect && inGame){
                            button_enter.style.display = "flex";
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
    if ((event.key == "e" || event.key == "E") && player1.doorCol && !entered && ((finished_castle[helpNum] != 2 && playingCastle) || (finished_steampunk[helpNum] != 2 && playingSteamPunk) || (finished_spaceship[helpNum] != 2 && playingSpace)) && finalDoorUnlocked && inGame && canEnter && !playingMultiplayer && (playingSteamPunk && helpNum <= 15 || playingCastle || playingSpace)) {
        entered = true;
        enterFunction();
    } else if ((event.key == "e" || event.key == "E") && player1.doorCol && player2.doorCol && !entered && ((finished_castle[helpNum] != 2 && playingCastle) || (finished_steampunk[helpNum] != 2 && playingSteamPunk) || (finished_spaceship[helpNum] != 2 && playingSpace)) && finalDoorUnlocked && inGame && canEnter && helpNumbers[0] == helpNumbers[1] && (playingSteamPunk && helpNum <= 15 || playingCastle || playingSpace)) {
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
    if(playingSpace){
        lobby = [...currentPlatform];
        frameButtonLobby = frameButton;
    }
    frameDoor = 0;
    music.pause();
    inGame = false;
    ghostVelocity = 2;
    sawVelocity = 1.5;
    fadeInTransition();
    setTimeout(() => {
        inGame = true;
        currentPlatform = [...map[helpNum]];
        originalPlatform1 = [...currentPlatform];
        movingPlatformVelocity = 1;
        if(playingCastle){
            if(helpNum == 0){ //Level 1
                calculateSpawnpointLocation();
                music.src = "./res/music_castle/song1_castle.mp3";
                doorsTime = 30000;
                music.play(); 
                spawnGhostCords = () =>{
                    xGhost = 900;
                    yGhost = 500;
                }
                spawnGhostCords();
            }else if(helpNum == 1){ //Level 2
                calculateSpawnpointLocation();
                music.src = "./res/music_castle/song2_castle.mp3";
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
                music.src = "./res/music_castle/song3_castle.mp3";
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
                music.src = "./res/music_castle/song4_castle.mp3";
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
                music.src = "./res/music_castle/song5_castle.mp3";
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
                music.src = "./res/music_castle/song6_castle.mp3";
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
                music.src = "./res/music_castle/song7_castle.mp3";
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
                music.src = "./res/music_castle/song8_castle.mp3";
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
                music.src = "./res/music_castle/song9_castle.mp3";
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
                music.src = "./res/music_castle/song10_castle.mp3";
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
                music.src = "./res/music_castle/song11_castle.mp3";
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
                music.src = "./res/music_castle/song12_castle.mp3";
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
                music.src = "./res/music_castle/song13_castle.mp3";
                doorsTime = 36000;
                music.play();
                spawnGhostCords = () => {
                    xGhost = 400;
                    yGhost = 200;
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
                music.src = "./res/music_castle/song14_castle.mp3";
                doorsTime = 54000;
                music.play();
                spawnGhostCords = () => {
                    xGhost = 700;
                    yGhost = 310;
                }
                spawnGhostCords();
            }else if(helpNum == 14){ //Level 15 (Boss Fight)
                bossLevel();
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
                music.src = "./res/music_steampunk/song1_steampunk.mp3";
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
                music.src = "./res/music_steampunk/song2_steampunk.mp3";
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
                music.src = "./res/music_steampunk/song3_steampunk.mp3";
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
                music.src = "./res/music_steampunk/song4_steampunk.mp3";
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
                music.src = "./res/music_steampunk/song5_steampunk.mp3";
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
                music.src = "./res/music_steampunk/song6_steampunk.mp3";
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
                music.src = "./res/music_steampunk/song7_steampunk.mp3";
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
                music.src = "./res/music_steampunk/song8_steampunk.mp3";
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
                music.src = "./res/music_steampunk/song9_steampunk.mp3";
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
                music.src = "./res/music_steampunk/song10_steampunk.mp3";
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
                music.src = "./res/music_steampunk/song11_steampunk.mp3";
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
                music.src = "./res/music_steampunk/song12_steampunk.mp3";
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
                music.src = "./res/music_steampunk/song13_steampunk.mp3";
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
                spider1Y = -16;
                music.src = "./res/music_steampunk/song14_steampunk.mp3";
                doorsTime = 51000;
                music.play();
            }else if(helpNum == 14){ //Level 15 STEAMPUNK - Spider Boss
                spiderBossLevel();
            }
        }else{
            if(helpNum == 0){ //Level 1 SPACESHIP
                spawnCords = () =>{
                    player1.x = 80;
                    player1.y = 425;
                    if(playingMultiplayer){
                        player2.x = 80;
                        player2.y = 425;
                    }
                }
                spawnCords();
                spawnMovingPlatformCords = () => {
                    xMovingPlatform = 200;
                    yMovingPlatform = 160;
                }
                spawnMovingPlatformCords();
                music.src = "./res/music_spaceship/song1_spaceship.mp3";
                doorsTime = 32000;
                music.play(); 
            }else if(helpNum == 1){ //Level 2 SPACESHIP
                spawnCords = () =>{
                    player1.x = 80;
                    player1.y = 476;
                    if(playingMultiplayer){
                        player2.x = 80;
                        player2.y = 476;
                    }
                }
                spawnCords();
                spawnMovingPlatformCords = () => {
                    xMovingPlatform = 10000;
                    yMovingPlatform = 10000;
                }
                spawnMovingPlatformCords();
                music.src = "./res/music_spaceship/song2_spaceship.mp3";
                doorsTime = 35000;
                music.play(); 
            }else if(helpNum == 2){ //Level 3 SPACESHIP
                darkness = true;
                spawnCords = () =>{
                    player1.x = canvas.width / 2 - 15;
                    player1.y = 408;
                    if(playingMultiplayer){
                        player2.x = canvas.width / 2 - 15;
                        player2.y = 408;
                    }
                }
                spawnCords();
                spawnMovingPlatformCords = () => {
                    xMovingPlatform = 10000;
                    yMovingPlatform = 10000;
                }
                spawnMovingPlatformCords();
                music.src = "./res/music_spaceship/song3_spaceship.mp3";
                doorsTime = 31000;
                music.play(); 
            }else if(helpNum == 3){ //Level 4 SPACESHIP
                spawnCords = () =>{
                    player1.x = 80;
                    player1.y = 544;
                    if(playingMultiplayer){
                        player2.x = 80;
                        player2.y = 544;
                    }
                }
                spawnCords();
                spawnMovingPlatformCords = () => {
                    xMovingPlatform = 700;
                    yMovingPlatform = 288;
                }
                spawnMovingPlatformCords();
                music.src = "./res/music_spaceship/song4_spaceship.mp3";
                doorsTime = 47000;
                music.play(); 
            }else if(helpNum == 4){ //Level 5 SPACESHIP
                player1.flying = true;
                flyUpAndDown(player1);
                if(playingMultiplayer){
                    player2.flying = true;
                    flyUpAndDown(player2);
                }
                spawnCords = () =>{
                    player1.x = 17;
                    player1.y = 472;
                    if(playingMultiplayer){
                        player2.x = 17;
                        player2.y = 472;
                    }
                }
                spawnCords();
                spawnMovingPlatformCords = () => {
                    xMovingPlatform = 10000;
                    yMovingPlatform = 10000;
                }
                spawnMovingPlatformCords();
                music.src = "./res/music_spaceship/song5_spaceship.mp3";
                doorsTime = 43000;
                music.play(); 
            }else if(helpNum == 5){ //Level 6 SPACESHIP
                spawnCords = () =>{
                    player1.x = 50;
                    player1.y = 512;
                    if(playingMultiplayer){
                        player2.x = 50;
                        player2.y = 512;
                    }
                }
                spawnCords();
                spawnMovingPlatformCords = () => {
                    xMovingPlatform = 10000;
                    yMovingPlatform = 10000;
                }
                spawnMovingPlatformCords();
                music.src = "./res/music_spaceship/song6_spaceship.mp3";
                doorsTime = 43000;
                music.play(); 
            }else if(helpNum == 6){ //Level 7 SPACESHIP
                spawnCords = () => {
                    player1.x = canvas.width / 2 - 15;
                    player1.y = 344;
                    if(playingMultiplayer){
                        player2.x = canvas.width / 2 - 15;
                        player2.y = 344;
                    }
                }
                spawnCords();
                spawnMovingPlatformCords = () => {
                    xMovingPlatform = 250;
                    yMovingPlatform = 288;
                }
                spawnMovingPlatformCords();
                music.src = "./res/music_spaceship/song7_spaceship.mp3";
                doorsTime = 49000;
                music.play(); 
            }else if(helpNum == 7){ //Level 8 SPACESHIP
                darkness = true;
                spawnCords = () => {
                    player1.x = 50;
                    player1.y = 504;
                    if(playingMultiplayer){
                        player2.x = 50;
                        player2.y = 504;
                    }
                }
                spawnCords();
                spawnMovingPlatformCords = () => {
                    xMovingPlatform = 10000;
                    yMovingPlatform = 10000;
                }
                spawnMovingPlatformCords();
                music.src = "./res/music_spaceship/song8_spaceship.mp3";
                doorsTime = 35000;
                music.play(); 
            }else if(helpNum == 8){ //Level 9 SPACESHIP
                spawnCords = () => {
                    player1.x = 50;
                    player1.y = 416;
                    if(playingMultiplayer){
                        player2.x = 50;
                        player2.y = 416;
                    }
                }
                spawnCords();
                spawnMovingPlatformCords = () => {
                    xMovingPlatform = 800;
                    yMovingPlatform = 384;
                }
                spawnMovingPlatformCords();
                music.src = "./res/music_spaceship/song9_spaceship.mp3";
                doorsTime = 32000;
                music.play(); 
            }else if(helpNum == 9){ //Level 10 SPACESHIP
                player1.flying = true;
                flyUpAndDown(player1);
                if(playingMultiplayer){
                    player2.flying = true;
                    flyUpAndDown(player2);
                }
                spawnCords = () =>{
                    player1.x = 50;
                    player1.y = 408;
                    if(playingMultiplayer){
                        player2.x = 50;
                        player2.y = 408;
                    }
                }
                spawnCords();
                spawnMovingPlatformCords = () => {
                    xMovingPlatform = 10000;
                    yMovingPlatform = 10000;
                }
                spawnMovingPlatformCords();
                music.src = "./res/music_spaceship/song10_spaceship.mp3";
                doorsTime = 49000;
                music.play(); 
            }else if(helpNum == 10){ //Level 11 SPACESHIP
                spawnCords = () => {
                    player1.x = 50;
                    player1.y = 128;
                    if(playingMultiplayer){
                        player2.x = 50;
                        player2.y = 128;
                    }
                }
                spawnCords();
                spawnMovingPlatformCords = () => {
                    xMovingPlatform = 10000;
                    yMovingPlatform = 10000;
                }
                spawnMovingPlatformCords();
                music.src = "./res/music_spaceship/song11_spaceship.mp3";
                doorsTime = 37000;
                music.play(); 
            }else if(helpNum == 11){ //Level 12 SPACESHIP
                spawnCords = () => {
                    player1.x = 50;
                    player1.y = 512;
                    if(playingMultiplayer){
                        player2.x = 50;
                        player2.y = 512;
                    }
                }
                spawnCords();
                spawnMovingPlatformCords = () => {
                    xMovingPlatform = 500;
                    yMovingPlatform = 320;
                }
                spawnMovingPlatformCords();
                music.src = "./res/music_spaceship/song12_spaceship.mp3";
                doorsTime = 50000;
                music.play(); 
            }else if(helpNum == 12){ //Level 13 SPACESHIP
                darkness = true;
                spawnCords = () => {
                    player1.x = 150;
                    player1.y = 512;
                    if(playingMultiplayer){
                        player2.x = 150;
                        player2.y = 512;
                    }
                }
                spawnCords();
                spawnMovingPlatformCords = () => {
                    xMovingPlatform = 10000;
                    yMovingPlatform = 10000;
                }
                spawnMovingPlatformCords();
                music.src = "./res/music_spaceship/song13_spaceship.mp3";
                doorsTime = 55000;
                music.play(); 
            }else if(helpNum == 13){ //Level 14 SPACESHIP
                spawnCords = () => {
                    player1.x = 50;
                    player1.y = 512;
                    if(playingMultiplayer){
                        player2.x = 50;
                        player2.y = 512;
                    }
                }
                spawnCords();
                spawnMovingPlatformCords = () => {
                    xMovingPlatform = 10000;
                    yMovingPlatform = 10000;
                }
                spawnMovingPlatformCords();
                music.src = "./res/music_spaceship/song14_spaceship.mp3";
                doorsTime = 56000;
                music.play(); 
            }else if(helpNum == 14){ //Level 15 SPACESHIP - Alien Boss
                let golden_egg = document.getElementById("golden_egg");
                if(achievementEggCompleted){
                    golden_egg.style.display = "none";
                }
                alienBossLevel();
            }
        }
        fadeOutTransition();
        // Save Cords
        saveGhostCordsX = xGhost;
        saveGhostCordsY = yGhost;

        saveMovingPlatformCordsX = xMovingPlatform;
        saveMovingPlatformCordsY = yMovingPlatform;

        saveSawCordsX = xSaw;
        saveSawCordsY = ySaw;

        frameButton = 0;

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
            bossVelocity = 1.3;
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
            for (let i = 0; i < currentPlatform.length; i++) {
                if (solidBlocks.includes(currentPlatform[i]))  {
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
            if(playingSteamPunk){
                rightWallX -= 0.455;
                leftWallX += 0.455;
            }else{
                rightWallX -= 0.262;
                leftWallX += 0.262;
            }
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
        if(warningNum == 1 && !spiderBossWarning && !smokeActivated && bossY == 336 &&  (!spiderBossJumping || !smallSpiderJump)){ // Smoke Attack
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

let resetAlienBossLevel = () => {
    clearAllAlienTimeouts();
    cancelAnimationFrame(wallSpiderMovingId);
    if(usedRetry){
        usedRetry = false;
    }
    cancelPlayerMovement();
    playerOneImage.src = playerSkin1;
    playerTwoImage.src = playerSkin2;
    playerNowFlashing = false;
    clearInterval(flashingInterval);
    player1.flying = false;
    player1.velocityJump = 0;
    player1.velocity = 0;
    cancelAnimationFrame(player1.animationIdFly)
    if(playingMultiplayer){
        player2.flying = false;
        player2.velocityJump = 0;
        player2.velocity = 0;
        cancelAnimationFrame(player2.animationIdFly)
    }
    alienInUfo = false;
    alienInSpace = false;
    cancelAnimationFrame(alienMoveXId);
    cancelAnimationFrame(alienMoveYId);
    offLasersInAlienBossFight();
    frameButton = 0;
    alienBossMode = false;
    alienBossLevel();
}

let deathCounter = 0;

const deathCounterEffect = () => {
    deathCounter++;
    localStorage.setItem('deathCounter', deathCounter);
    deathCounterShow.style.transition = "0s"
    deathCounterShow.style.color = "rgb(241, 89, 89)"
    deathCounterShow.innerHTML = deathCounter + "x";
    setTimeout(() => {
        deathCounterShow.style.transition = "1s"	
        deathCounterShow.style.color = "white"
    }, 10);
}

const dead = () => {
    if(!godMode){
        if(!goingBackToTheLobby){
            if(!playingBossFight || (!alienBossMode && playingSpace)){ //You are not playing BOSS FIGHT
                if(escShowed || usedRetry){
                    escFunction();
                }
                if(playingSpace && helpNum == 14){
                    resetAlienBossLevel();
                    unCrouch(player1);
                    player1.downPressed = false;
                    player1.isMovingRight = false;
                    cancelAnimationFrame(player1.animationIdLeft)
                    cancelAnimationFrame(player1.gravityId)
                    cancelAnimationFrame(player1.animationIdRight)
                    cancelAnimationFrame(player1.jumpingId)
                    if(playingMultiplayer){
                        unCrouch(player2);
                        player2.downPressed = false;
                        player2.isMovingRight = false;
                        cancelAnimationFrame(player2.animationIdLeft)
                        cancelAnimationFrame(player2.gravityId)
                        cancelAnimationFrame(player2.animationIdRight)
                        cancelAnimationFrame(player2.jumpingId)  
                    }
                    deathCounterEffect();
                    player1.y += 40; //Fix spawn bug - Alien boss
                    player2.y += 40; //Fix spawn bug - Alien boss
                }else{
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
                    calculateSpawnpointLocation();
                    deathCounterEffect();
                    achievementNoob();
                    achievementTimer();
                }
                movingPlatformVelocityY = 0;
                frameSpike = 0;
                frameLava = 0;
                frameButton = 0;
                frameLaserCannon = 0;
                sfx_laser.pause();
                laserCannonActivated = false;
                player1.velocity = 0;
                player1.velocityRight = 0;
                player1.velocityLeft = 0;
                player1.velocityJump = 0;
                resetGravity();
                music.currentTime = 0;
                clearTimeout(setTimeoutDoor);
                clearTimeout(laserCannonTimeout);
                beepActivated = false;
                setTimeoutDoor = setTimeout(() => {
                    doorTimeout = true;
                }, doorsTime);
                unCrouch(player1);
                unCrouch(player2);
                clearTimeout(player1.inPipeTimeout)
                clearTimeout(player2.inPipeTimeout)
                clearShakePipes();
                currentPlatform = [...originalPlatform1];
                drawPlatform();
                dark();
                if(!playingSpace){
                    divider1.style.opacity = 1;
                    divider2.style.opacity = 1;
                    divider3.style.opacity = 1;
                    divider4.style.opacity = 1;
                }else{
                    alien_divider1.style.opacity = 1;
                    alien_divider2.style.opacity = 1;
                    alien_divider3.style.opacity = 1;
                }
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
                if(player1.flying){
                    achievementShip();
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
                    cancelPlayerMovement();
                    if(hearts == 0 || frameDoor == 3 || usedRetry || (risingPercent >= -95 && playingCastle)){
                        deathCounterEffect()
                        if(escShowed || usedRetry){
                            escFunction();
                        }
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
                        currentPlatform = [...map[14]]
                        risingLavaActivated = false;
                        risingIncreaseValue = 0.6;
                        lavaIncreaseValue = 3.6;
                        lavaY = 576;
                        risingPercent = risingPercentOriginal;
                        rising.style.bottom = risingPercent + "%"
                        rising.style.display = "none";
                        darkness = false;
                        if(!playingSpace){
                            heart1.style.display = "block";
                            heart2.style.display = "block";
                            heart3.style.display = "block";
                        }
                        cancelPlayerMovement();
                        player1.turnedRight = true;
                        player2.turnedRight = true;
                        player1.turnedLeft = false;
                        player2.turnedLeft = false;
                        if(player1.flying){
                            achievementShip();
                        }
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
                                currentPlatform = [...map[14]];
                                originalPlatform1 = [...currentPlatform];
                                spiderBossLevel();
                            }else if(playingSpace){
                                resetAlienBossLevel();
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
                        cancelPlayerMovement();
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
            achievementHundred();
        }
    }
}

//Fade **IN** Transition Function
const fadeInTransition = () => {
    transitionIsEnabled = true;
    circleSize = 1500;
    circleTransitionValue = -1;
}

//Fade **OUT** Transition Function
const fadeOutTransition = () => {
    circleSize = 1;
    circleTransitionValue = 1;
}

//---------------------------------------- Back to the Lobby (from level)

let backToLobbyEntered = false;
let goingBackToTheLobby = false;

let doorsNumbers = [50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64]

const calculateDoorsLocation = () => {

    let doorLocationXCalc = 0
    let doorLocationYCalc = 0

    for (let index = 0; index < currentPlatform.length; index++) {

        if(doorLocationXCalc % 1024 == 0){
            doorLocationXCalc = 0;
            doorLocationYCalc += 32;
        }

        doorLocationXCalc += 32

        if (doorsNumbers.includes(currentPlatform[index])) {
            for (let i = 0; i < doorsNumbers.length; i++) {
                if(doorsNumbers[i] == currentPlatform[index]){
                    if(helpNum + 50 == doorsNumbers[i]){
                        player1.x = doorLocationXCalc - 15;
                        player1.y = doorLocationYCalc - 8;
                        console.log(player1.x, player1.y)
                        if(playingMultiplayer){
                            player2.x = doorLocationXCalc - 15;
                            player2.y = doorLocationYCalc - 8;
                        }
                    }
                }
            }
        }
    }
}

const calculateSpawnpointLocation = () => {

    let doorLocationXCalc = 0
    let doorLocationYCalc = 0

    for (let index = 0; index < currentPlatform.length; index++) {

        if(doorLocationXCalc % 1024 == 0){
            doorLocationXCalc = 0;
            doorLocationYCalc += 32;
        }

        doorLocationXCalc += 32

        if (25 == currentPlatform[index]) {
            spawnCords = () =>{
                player1.x = doorLocationXCalc - 15;
                player1.y = doorLocationYCalc + 8;
                if(playingMultiplayer){
                    player2.x = doorLocationXCalc - 15;
                    player2.y = doorLocationYCalc + 8;
                }
            }
            spawnCords();
        }
    }
}

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
    clearAllAlienTimeouts();
    restartTimer();
    timer.style.top = "-5%"
    if(usedRetry){
        usedRetry = false;
    }
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
    fadeInTransition();
    esc.style.display = "none"; 
    escShowed = false;
    clearSpiderBossTimeouts();
    clearInterval(spiderBossGenerator);
    currentFrameSpiderBoss = 0;
    shipImage.src = "./res/img/ship.png";
    playerOneImage.src = playerSkin1;
    playerTwoImage.src = playerSkin2;
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
        music.src = lobbyMusic;
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
        player1.flying = false;
        cancelAnimationFrame(player1.animationIdFly);
        if(playingMultiplayer){
            player2.flying = false;
            cancelAnimationFrame(player2.animationIdFly);
        }
        spider1Y = -500;
        spider2Y = -500;
        spider3Y = -500;
        spider4Y = -500;
        bossX = 100000;
        bossY = 100000;
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
        resetGravity();
        alienInUfo = false;
        alienInSpace = false;
        cancelAnimationFrame(alienMoveXId);
        cancelAnimationFrame(alienMoveYId);
        credits_boss.style.display = "none";
        clearInterval(movingCreditsInterval);
        inGame = true;
        frameButton = frameButtonLobby;
        currentPlatform = [...lobby];
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
        }else if(playingSpace){
            spawnMovingPlatformCords = () => {
                xMovingPlatform = 600;
                yMovingPlatform = 384;
           }
           spawnMovingPlatformCords();
        }

        calculateDoorsLocation();

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

let btnBackUsedinAlienLevel = false;

button_back.onclick = () => {
    canEnter = false; //Now you cant spam "e"
    if(playingSpace && currentHp <= 0 && helpNum == 14){
        btnBackUsedinAlienLevel = true;
        alienLevelCompleted();
    }else{
        achievementGiveUp();
        backToLobby();
        escape_button.style.border = "3px solid white";
        first_col.style.filter = "invert(0)";
        second_col.style.filter = "invert(0)";
    }
}
//Resume Function
button_resume.onclick = () => {
    esc.style.display = "none"; 
    escShowed = false;
    black.style.opacity = "0";
    escape_button.style.border = "3px solid white";
    first_col.style.filter = "invert(0)";
    second_col.style.filter = "invert(0)";
}
//Back from Lobby to the Menu Function
button_menu.onclick = () => {
    inGame = false;
    clearInterval(afkTimerInterval);
    afkTimeCounter = 0;
    howManyLevelsDoneFunction();
    text.style.opacity = "1";
    note_button.style.zIndex = "3";
    escape_button.style.zIndex = "3";
    achievement_button.style.zIndex = "3";
    fullBlack.style.opacity = "1";
    black.style.opacity = "1";
    esc.style.display = "none"; 
    escShowed = false;
    tutorialButton.style.pointerEvents = "auto"; //Now I can again click tutorialButton
    tutorialButton.style.opacity = "100%";
    music.currentTime = 0; //OFF Lobby Music 
    music.pause();
    setTimeout(() => {
        backgroundVideo.style.opacity = 1;
        game.style.display = "none";
        startMenu.style.display = "block";
        playButton.style.pointerEvents = "auto";
        playButton.style.display = "block";
        playButtonMulti.style.pointerEvents = "auto";
        if(!deviceDetect){
            playButtonMulti.style.display = "block";
        }
        if (deviceDetect) {
            buttons.style.display = "none";
        }
        creditsButton.style.display = "block";
        achievementsButton.style.display = "block";
        skins.style.animationDuration = "0s";
        skins.style.animationPlayState = "running";
        skins.style.animationName = "rightToMidSkins";
        skins.style.pointerEvents = "auto";
        black.style.opacity = "0";
        fullBlack.style.opacity = "0";
        playingMultiplayer = false;
        note_button.style.border = "3px solid white";
        note.style.filter = "invert(1)";
        achievement_button.style.border = "3px solid white"
        trophy.style.filter = "invert(1)";
        escape_button.style.border = "3px solid white";
        first_col.style.filter = "invert(0)";
        second_col.style.filter = "invert(0)";
        setTimeout(() => {
            skins.style.animationDuration = "1s";
            fullBlack.style.display = "none";
            note_button.style.zIndex = "11";
            escape_button.style.zIndex = "11";
            achievement_button.style.zIndex = "11";
        }, 1000);
    }, 1300);
}

let usedRetry = false;

button_retry.onclick = () => {
    usedRetry = true;
    if(playingMultiplayer){
        clearInterval(targetInterval);
    }
    dead();
}


//----------------------------------------ESC Button Function
 
const escFunction = () => {
    if(JSON.stringify(lobby) !== JSON.stringify(currentPlatform)){ //When Lobby and current level are not same
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
            escape_button.style.border = "3px solid gray";
            first_col.style.filter = "invert(0.5)";
            second_col.style.filter = "invert(0.5)";
        }else if(escShowed){
            esc.style.display = "none"; 
            escShowed = false;
            black.style.opacity = "0";
            escape_button.style.border = "3px solid white";
            first_col.style.filter = "invert(0)";
            second_col.style.filter = "invert(0)";
        }
    }else if(JSON.stringify(lobby) === JSON.stringify(currentPlatform)){ //When Lobby and current level are same
        button_back.style.display = "none";
        button_resume.style.display = "block";
        button_retry.style.display = "none";
        button_menu.style.display = "block";
        if(!escShowed){
            esc.style.display = "flex"; 
            escShowed = true;
            black.style.opacity = "0.6";
            first_col.style.filter = "invert(0.5)";
            second_col.style.filter = "invert(0.5)";
            escape_button.style.border = "3px solid gray";
        }else if(escShowed){
            esc.style.display = "none"; 
            escShowed = false;
            black.style.opacity = "0";
            escape_button.style.border = "3px solid white";
            first_col.style.filter = "invert(0)";
            second_col.style.filter = "invert(0)";
        }
    }
}

escape_button.onclick = () => {
    if(inGame && !musicEditorOpened && !achievementListOpened){
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

//----------------------------------------Finished level

let finished_spaceship = new Array (15)
let doneSpaceshipLevels = 0

for (let index = 0; index < finished_spaceship.length; index++) {
    finished_spaceship[index] = 2;
}

finished_spaceship[helpNum] = 0; // Unlock 1st level

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
    for (let index = 0; index < finished_spaceship.length; index++) {
        if(finished_spaceship[index] != 1){
            finished_spaceship[index] = 0;
        }
    }
}

//unlockAll()

//NORMAL and Boss LEVEL COMPLETED

const levelCompleted = () => {
    achievementThatWasClose();
    achievementSoMuchTime();
    if(helpNum == 14){
        if(playingCastle){
            achievementCastle();
        }else if(playingSteamPunk){
            achievementSteampunk();
        }else{
            achievementSpaceship();
        }
    }
    achievementFriend();
    achievementKing();
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
    }else{
        finished_spaceship[helpNum] = 1; // Level Completed -> Doors are now GREEN
        if(finished_spaceship[helpNum + 1] != 1){
            finished_spaceship[helpNum + 1] = 0; // Another Level is available -> removed LOCK
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
    }else{
        localStorage.setItem("finished_spaceship_" + helpNum, finished_spaceship[helpNum]);
        localStorage.setItem("unlocked_spaceship_" + helpNum, finished_spaceship[helpNum + 1]);
    }
    
    
}

//---------------------------------------- OBJECTS Collision

let frameButton = 0;
let frameButtonLobby = 0;
let buttonIsOn = false;

const objectsCollision = (PLAYER) => {
    if(playingBossFight){
        bossCollision(PLAYER);
        smokeCollision(PLAYER);
        spiderBossCollision(PLAYER);
        alienBossCollision(PLAYER);
        movingWallsSpiderCollision(PLAYER);
        meteoriteCollision(PLAYER);
        lasersHorizontalInSpace.forEach(laser => {
            lasersHorizontalCollision(PLAYER, laser);
        });
        lasersVerticalInSpace.forEach(laser => {
            lasersVerticalCollision(PLAYER, laser);
        });
    }
    boostCollision(PLAYER);
    ghostCollision(PLAYER);
    sawCollision(PLAYER);
    laserAndDetectorCollision(PLAYER);
    spidersCollision(PLAYER, spider1X, spider1Y);
    spidersCollision(PLAYER, spider2X, spider2Y);
    spidersCollision(PLAYER, spider3X, spider3Y);
    spidersCollision(PLAYER, spider4X, spider4Y);
    lasersHorizontal.forEach(laser => {
        lasersHorizontalCollision(PLAYER, laser);
    });
    lasersVertical.forEach(laser => {
        lasersVerticalCollision(PLAYER, laser);
    });
    if(PLAYER.velocityJump <= 0.1){
        movingPlatformCollision(PLAYER);
    }

    PLAYER.canUseButton = false;

    for (let i = 0; i < currentPlatform.length; i++) {
        //Spikes and Moving Spikes
        if ((currentPlatform[i] == 2 || currentPlatform[i] == 4 || currentPlatform[i] == 23 || currentPlatform[i] == 24) || (currentPlatform[i] == 10 || currentPlatform[i] == 20 || currentPlatform[i] == 21 || currentPlatform[i] == 22) && canDieOnSpike == true) {
            let platformX = (i % 32) * 32;
            let platformY = Math.floor(i / 32) * 32;
            if (
                PLAYER.y + PLAYER.height >= platformY + 10 &&
                PLAYER.y + PLAYER.height <= platformY + 27 + PLAYER.height &&
                PLAYER.x + PLAYER.width >= platformX + 10 &&
                PLAYER.x <= platformX + 22
                && !PLAYER.reversedGravity && !PLAYER.flying
                ||
                PLAYER.y + PLAYER.height >= platformY + 10 &&
                PLAYER.y + PLAYER.height <= platformY + 27 + PLAYER.height &&
                PLAYER.x + PLAYER.width + 15 >= platformX + 10 &&
                PLAYER.x - 15 <= platformX + 22
                && !PLAYER.reversedGravity && PLAYER.flying
            ) {
                dead();
                if(currentPlatform[i] == 10 || currentPlatform[i] == 20 || currentPlatform[i] == 21 || currentPlatform[i] == 22){
                    achievementMovingSpike();
                }
            } else if (
                PLAYER.y + PLAYER.height >= platformY &&
                PLAYER.y + PLAYER.height <= platformY + 27 + PLAYER.height &&
                PLAYER.x + PLAYER.width >= platformX + 10 &&
                PLAYER.x <= platformX + 22
                && PLAYER.reversedGravity
            ) {
                dead();
                if(currentPlatform[i] == 10 || currentPlatform[i] == 20 || currentPlatform[i] == 21 || currentPlatform[i] == 22){
                    achievementMovingSpike();
                }
            }
        }
        //Lava and Mini Lasers
        if (currentPlatform[i] == 3 || currentPlatform[i] == 100 || currentPlatform[i] == 101 || currentPlatform[i] == 102) {
            let platformX = (i % 32) * 32;
            let platformY = Math.floor(i / 32) * 32;
            if (
                PLAYER.y + PLAYER.height >= platformY + 10 &&
                PLAYER.y + PLAYER.height <= platformY + 27 + PLAYER.height &&
                PLAYER.x + PLAYER.width >= platformX + 10 &&
                PLAYER.x <= platformX + 22
                && !PLAYER.reversedGravity
            ) {
                if(playingBossFight){
                    resistence = false;
                }
                if(currentPlatform[i] == 3){
                    achievementHot()
                }
                dead();
            } else if (
                PLAYER.y + PLAYER.height >= platformY &&
                PLAYER.y + PLAYER.height <= platformY + 27 + PLAYER.height &&
                PLAYER.x + PLAYER.width >= platformX + 10 &&
                PLAYER.x <= platformX + 22
                && PLAYER.reversedGravity
            ) {
                if(playingBossFight){
                    resistence = false;
                }
                dead();
            }
        }
        //Portal 1
        if (currentPlatform[i] == 11) {
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
                PLAYER.y = cordsPortalY2;
                achievementPortal(PLAYER);
            }
        }
        //Portal 2
        if (currentPlatform[i] == 12) {
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
                PLAYER.y = cordsPortalY1;
                achievementPortal(PLAYER);
            }
        }
        //Closing Doors
        if (currentPlatform[i] == 30 || (currentPlatform[i] == 34 && frameDoorFinal == 0)) {
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
                    levelCompleted();
                }
            } else {
                PLAYER.closingDoorCol = false;
            }
        }
        //Key
        if (currentPlatform[i] == 31) {
            let platformX = (i % 32) * 32;
            let platformY = Math.floor(i / 32) * 32;
            if (
                PLAYER.y + PLAYER.height >= platformY &&
                PLAYER.y + PLAYER.height <= platformY + 64 &&
                PLAYER.x + PLAYER.width >= platformX &&
                PLAYER.x <= platformX + 32
            ) {
                currentPlatform[i] = 0;
                sfx.src = "./res/sfx/key_pick.mp3";
                sfx.play();
                for (let index = 0; index < currentPlatform.length; index++) {
                    if(currentPlatform[index] == 32 || currentPlatform[index] == 33){
                        currentPlatform[index] = 0;
                    }
                }
            }
        }
        //Final Trophy
        if (currentPlatform[i] == 35) {
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
        // Button
        if (currentPlatform[i] == 49) {
            let platformX = (i % 32) * 32;
            let platformY = Math.floor(i / 32) * 32;
            if (
                PLAYER.y + PLAYER.height >= platformY + 22 && 
                PLAYER.y <= platformY + 22 + 32 &&
                PLAYER.x + PLAYER.width >= platformX &&
                PLAYER.x <= platformX + 32
            ) {
                PLAYER.canUseButton = true;
            }
        }
    }
}

const howManyLevelsDoneFunction = () => {

    doneCastleLevels = 0;
    doneSteampunkLevels = 0;
    doneSpaceshipLevels = 0;

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

    for (let index = 0; index < finished_spaceship.length - 1; index++) {
        if(finished_spaceship[index] == 1){
            doneSpaceshipLevels++;
        }
    }

    castleLevelsDone.innerHTML = doneCastleLevels + " / 15"
    steampunkLevelsDone.innerHTML = doneSteampunkLevels + " / 15"
    spaceshipLevelsDone.innerHTML = doneSpaceshipLevels + " / 15"
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
    for (let i = 0; i <= 15; i++) {
        let savedValue = localStorage.getItem("unlocked_spaceship_" + i);
        if (savedValue !== null) {
            finished_spaceship[i + 1] = parseInt(savedValue); // Convert to numbers
        }
    }
    for (let i = 0; i <= 15; i++) {
        let savedValue = localStorage.getItem("finished_spaceship_" + i);
        if (savedValue !== null) {
            finished_spaceship[i] = parseInt(savedValue); // Convert to numbers
        }
    }

    howManyLevelsDoneFunction();
    
    //Load Skins
    selectedRioter = true;
    selectedRuby = true;
    /*
    let savedValueRioter = localStorage.getItem('currentIndexSkinsRioter');
    if (savedValueRioter !== null) {
        currentIndexSkinsRioter = parseInt(savedValueRioter);
    }
    let savedValueRuby = localStorage.getItem('currentIndexSkinsRuby');
    if (savedValueRuby !== null) {
        currentIndexSkinsRuby = parseInt(savedValueRuby);
    }
    */
    const rioterValue = localStorage.getItem('equippedCurrentIndexSkinsRioter');
    const rubyValue = localStorage.getItem('equippedCurrentIndexSkinsRuby');
    const hatP1Value = localStorage.getItem('equippedHatP1');
    const hatP2Value = localStorage.getItem('equippedHatP2');
    
    currentIndexSkinsRioter = rioterValue !== null ? parseInt(rioterValue) : 0;
    currentIndexSkinsRuby = rubyValue !== null ? parseInt(rubyValue) : 0;
    currentIndexHatsRioter = hatP1Value !== null ? parseInt(hatP1Value) : 0;
    currentIndexHatsRuby = hatP2Value !== null ? parseInt(hatP2Value) : 0;

    updateSkins()
    setSkins();

    //Load Hats
    /*
    let savedValueRioterHat = localStorage.getItem('currentIndexHatsRioter');
    if (savedValueRioterHat !== null) {
        currentIndexHatsRioter = parseInt(savedValueRioterHat);
    }
    let savedValueRubyHat = localStorage.getItem('currentIndexHatsRuby');
    if (savedValueRubyHat !== null) {
        currentIndexHatsRuby = parseInt(savedValueRubyHat);
    }*/

    //Load Achievements progress
    player1.portalCounter = parseInt(localStorage.getItem('portalCounterP1')) || 0;
    player2.portalCounter = parseInt(localStorage.getItem('portalCounterP2')) || 0;

    player1.punchWallCounter = parseInt(localStorage.getItem('punchWallCounterP1')) || 0;
    player2.punchWallCounter = parseInt(localStorage.getItem('punchWallCounterP2')) || 0;

    player1.pipeCounter = parseInt(localStorage.getItem('pipeCounterP1')) || 0;
    player2.pipeCounter = parseInt(localStorage.getItem('pipeCounterP2')) || 0;

    player1.jumpPadCounter = parseInt(localStorage.getItem('jumpPadCounterP1')) || 0;
    player2.jumpPadCounter = parseInt(localStorage.getItem('jumpPadCounterP2')) || 0;

    player1.orbGravityCounter = parseInt(localStorage.getItem('orbGravityCounterP1')) || 0;
    player2.orbGravityCounter = parseInt(localStorage.getItem('orbGravityCounterP2')) || 0;

    player1.orbCounter = parseInt(localStorage.getItem('orbCounterP1')) || 0;
    player2.orbCounter = parseInt(localStorage.getItem('orbCounterP2')) || 0;

    deathCounter = parseInt(localStorage.getItem('deathCounter')) || 0;
    deathCounterShow.innerHTML = deathCounter + "x";;

    castleDungeonCompleted = localStorage.getItem('castleDungeonCompleted') === 'true';
    steampunkDungeonCompleted = localStorage.getItem('steampunkDungeonCompleted') === 'true';
    spaceshipDungeonCompleted = localStorage.getItem('spaceshipDungeonCompleted') === 'true';

    achievementsDoneCounter = parseInt(localStorage.getItem('achievementsDoneCounter')) || 0;
    achievements_counter.innerHTML = achievementsDoneCounter + " / 30";
    achievement_counter_in_right.innerHTML = achievementsDoneCounter + " / 30";

    //Load Achievements
    achievementHotCompleted = localStorage.getItem('achievementHotCompleted') === 'true';
    achievementMarioCompleted = localStorage.getItem('achievementMarioCompleted') === 'true';
    achievementShiftCompleted = localStorage.getItem('achievementShiftCompleted') === 'true';
    achievementGiveUpCompleted = localStorage.getItem('achievementGiveUpCompleted') === 'true';
    achievementMovingSpikeCompleted = localStorage.getItem('achievementMovingSpikeCompleted') === 'true';
    achievementShipCompleted = localStorage.getItem('achievementShipCompleted') === 'true';
    achievementNoobCompleted = localStorage.getItem('achievementNoobCompleted') === 'true';
    achievementPinkCompleted = localStorage.getItem('achievementPinkCompleted') === 'true';
    achievementTimerCompleted = localStorage.getItem('achievementTimerCompleted') === 'true';
    achievementShieldCompleted = localStorage.getItem('achievementShieldCompleted') === 'true';
    achievementHeadCompleted = localStorage.getItem('achievementHeadCompleted') === 'true';
    achievementDraezlyrWielderCompleted = localStorage.getItem('achievementDraezlyrWielderCompleted') === 'true';
    achievementPortalCompleted = localStorage.getItem('achievementPortalCompleted') === 'true';
    achievementPunchWallCompleted = localStorage.getItem('achievementPunchWallCompleted') === 'true';
    achievementAfkCompleted = localStorage.getItem('achievementAfkCompleted') === 'true';
    achievementThatWasCloseCompleted = localStorage.getItem('achievementThatWasCloseCompleted') === 'true';
    achievementPipeCompleted = localStorage.getItem('achievementPipeCompleted') === 'true';
    achievementShoesCompleted = localStorage.getItem('achievementShoesCompleted') === 'true';
    achievementJumpPadCompleted = localStorage.getItem('achievementJumpPadCompleted') === 'true';
    achievementGravityOrbCompleted = localStorage.getItem('achievementGravityOrbCompleted') === 'true';
    achievementCastleCompleted = localStorage.getItem('achievementCastleCompleted') === 'true';
    achievementSteampunkCompleted = localStorage.getItem('achievementSteampunkCompleted') === 'true';
    achievementSpaceshipCompleted = localStorage.getItem('achievementSpaceshipCompleted') === 'true';
    achievementSoMuchTimeCompleted = localStorage.getItem('achievementSoMuchTimeCompleted') === 'true';
    achievementJumpOrbCompleted = localStorage.getItem('achievementJumpOrbCompleted') === 'true';
    achievementHundredCompleted = localStorage.getItem('achievementHundredCompleted') === 'true';
    achievementKingCompleted = localStorage.getItem('achievementKingCompleted') === 'true';
    achievementFriendCompleted = localStorage.getItem('achievementFriendCompleted') === 'true';
    achievementGodCompleted = localStorage.getItem('achievementGodCompleted') === 'true';
    achievementEggCompleted = localStorage.getItem('achievementEggCompleted') === 'true';

    loadAchievementsFromStorage();
    
    updateHats()
    setHats();
    selectedRuby = false;

    preloadItems();

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
    }for (let i = 0; i <= 15; i++) {
        localStorage.removeItem("finished_spaceship_" + i);
    }
    for (let i = 0; i <= 15; i++) {
        localStorage.removeItem("unlocked_spaceship_" + i);
    }
}

//resetLocalStorage();

//---------------------------------------- ORB Collision

const orbCollision = (PLAYER) => {
    let isTouchingGravityOrb = false;
    for (let i = 0; i < currentPlatform.length; i++) {
        if (currentPlatform[i] == 5) { // Jump Orb
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

        if (currentPlatform[i] == 44) { // Gravity Orb
            let platformX = (i % 32) * 32;
            let platformY = Math.floor(i / 32) * 32;
            if (
                PLAYER.y + PLAYER.height >= platformY &&
                PLAYER.y + PLAYER.height <= platformY + 32 + PLAYER.height &&
                PLAYER.x + PLAYER.width >= platformX &&
                PLAYER.x <= platformX + 32
            ) {
                PLAYER.canOrbGravity = true;
                isTouchingGravityOrb = true;
                break;
            } else {
                PLAYER.canOrbGravity = false; 
            }
        }
    }

    if (!isTouchingGravityOrb) {
        PLAYER.gravityOrbUsed = false;
    }
}

//Reset Gravity
const resetGravity = () => {
    player1.reversedGravityNumber = 1;
    player1.reversedGravity = false;
    player1.reversedGravityCrouchNum = 0;
    player1.reversedGravityHat = 0;
    player2.reversedGravityNumber = 1;
    player2.reversedGravity = false;
    player2.reversedGravityCrouchNum = 0;
    player2.reversedGravityHat = 0;
}

//---------------------------------------- JUMP PAD Collision

const jumpPadCollision = (PLAYER) => {
    for (let i = 0; i < currentPlatform.length; i++) {
        if (currentPlatform[i] == 29) {
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

//---------------------------------------- Laser Detector Collision

let beepActivated = false;
let laserCannonTimeout;

const laserAndDetectorCollision = (PLAYER) => {
    for (let i = 0; i < currentPlatform.length; i++) {
        if (currentPlatform[i] == 92 || ((currentPlatform[i] == 90 || currentPlatform[i] == 91) && frameLaserCannon == 0)) {
            let platformX = (i % 32) * 32;
            let platformY = Math.floor(i / 32) * 32;
            if (
                PLAYER.y + PLAYER.height >= platformY + 14 &&
                PLAYER.y <= platformY + 32 - 14 &&
                PLAYER.x + PLAYER.width >= platformX &&
                PLAYER.x <= platformX + 32
            ) {
                if(!laserCannonActivated && !beepActivated){
                    beepActivated = true;
                    sfx.src = "./res/sfx/beep.mp3";
                    sfx.play();
                    frameLaserCannon = 1; 
                    laserCannonTimeout = setTimeout(() => {
                        beepActivated = false;
                        laserCannonActivated = true; 
                    }, 500);
                }
            }
        }
        if (currentPlatform[i] == 93 || currentPlatform[i] == 90 || currentPlatform[i] == 91) {
            let platformX = (i % 32) * 32;
            let platformY = Math.floor(i / 32) * 32;
            if (
                PLAYER.y + PLAYER.height >= platformY + 6 &&
                PLAYER.y <= platformY + 32 - 6 &&
                PLAYER.x + PLAYER.width >= platformX &&
                PLAYER.x <= platformX + 32
                && frameLaserCannon >= 7
            ) {
                dead();
            }
        }
    }
}

//---------------------------------------- Stop Slide Collision

const stopSlideDetection = (PLAYER) => {
    for (let i = 0; i < currentPlatform.length; i++) {
        if (currentPlatform[i] == 36 || currentPlatform[i] == 37) {
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
        achievementMario();
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
        PLAYER.onRock = false;
        PLAYER.onMetal = true;
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
        PLAYER.y + PLAYER.height >= spiderY + 352 - 28 && 
        PLAYER.y <= spiderY + 352 + 4 &&
        PLAYER.x + PLAYER.width >= spiderX + 4 &&
        PLAYER.x <= spiderX + 28
    ) {
        dead();
    }
}

const lasersHorizontalCollision = (PLAYER, laser) => {

    let laserWidth = 768;
    let laserHeight = 32;

    if(alienInSpace){
        laserWidth = 1024;
    }

    if (
        PLAYER.x < laser.x + laserWidth &&
        PLAYER.x + PLAYER.width > laser.x &&
        PLAYER.y < laser.y + laserHeight &&
        PLAYER.y + PLAYER.height > laser.y
        &&
        laser.frameLaserHorizontal >= 12 && laser.frameLaserHorizontal <= 15 && !PLAYER.flying
    ) {
        dead();
    }

    if (
        PLAYER.x - 15 < laser.x + laserWidth &&
        PLAYER.x + 45 > laser.x &&
        PLAYER.y < laser.y + laserHeight &&
        PLAYER.y + PLAYER.height > laser.y
        &&
        laser.frameLaserHorizontal >= 12 && laser.frameLaserHorizontal <= 15 && PLAYER.flying
    ) {
        dead();
    }
};

const lasersVerticalCollision = (PLAYER, laser) => {
    let laserWidth = 32;
    let laserHeight = 288;

    if (
        PLAYER.x < laser.x + laserWidth &&
        PLAYER.x + PLAYER.width > laser.x &&
        PLAYER.y < laser.y + laserHeight &&
        PLAYER.y + PLAYER.height > laser.y
        &&
        laser.frameLaserVertical >= 12 && laser.frameLaserVertical <= 15 && !PLAYER.flying
    ) {
        dead();
    }
    if (
        PLAYER.x - 15 < laser.x + laserWidth &&
        PLAYER.x + 45 > laser.x &&
        PLAYER.y < laser.y + laserHeight &&
        PLAYER.y + PLAYER.height > laser.y
        &&
        laser.frameLaserHorizontal >= 12 && laser.frameLaserHorizontal <= 15 && PLAYER.flying
    ) {
        dead();
    }
};

const playerInPipe = (PLAYER) => {
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
    achievementPipe(PLAYER);
}

const pipesCollision = (PLAYER) => {
    if(playingSteamPunk){
        for (let i = 0; i < currentPlatform.length; i++) {
            //Pipe RIGHT
        if (currentPlatform[i] == 80) {
            let platformX = (i % 32) * 32;
            let platformY = Math.floor(i / 32) * 32;
            if (
                PLAYER.y + PLAYER.height > platformY &&
                PLAYER.y < platformY + 32 &&
                PLAYER.x + PLAYER.width + 1 > platformX &&
                PLAYER.x < platformX + 32
                && PLAYER.crouched
            ) {
                playerInPipe(PLAYER);
                PLAYER.inPipeTimeout = setTimeout(() => {
                    unCrouch(PLAYER);
                    PLAYER.inPipe = false;
                    PLAYER.velocity = 0;
                    PLAYER.x = cordsPipeX2;
                    PLAYER.y = cordsPipeY2; 
                }, 2400);
            }
        }
        //Pipe LEFT
        if (currentPlatform[i] == 79) {
            let platformX = (i % 32) * 32;
            let platformY = Math.floor(i / 32) * 32;
            if (
                PLAYER.y + PLAYER.height > platformY &&
                PLAYER.y < platformY + 32 &&
                PLAYER.x - 1 < platformX + 32 &&
                PLAYER.x > platformX
                && PLAYER.crouched
            ) {
                playerInPipe(PLAYER);
                PLAYER.inPipeTimeout = setTimeout(() => {
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

const laserBulletCollision = (PLAYER) => {
    if(playingBossFight
        &&
        PLAYER.laserY >= bossY && 
        PLAYER.laserY <= bossY + 80 &&
        PLAYER.laserX + 25 >= bossX &&
        PLAYER.laserX <= bossX + 160
    ){
        PLAYER.bulletVelocity = 0;
        PLAYER.bulletFrame = 1;
        PLAYER.bulletBossHit = true;

        setTimeout(() => {
            PLAYER.bulletFrame = 2;
            setTimeout(() => {
                PLAYER.laserY = 100000;
                PLAYER.bulletBossHit = false;
            }, 100);
        }, 50);
    }else{
        for (let i = 0; i < currentPlatform.length; i++) {
            if (solidBlocks.includes(currentPlatform[i])) {
                let platformX = (i % 32) * 32;
                let platformY = Math.floor(i / 32) * 32;
                if (
                    PLAYER.laserY + 10 >= platformY && 
                    PLAYER.laserY - 10 <= platformY + 32 &&
                    PLAYER.laserX + 25 >= platformX &&
                    PLAYER.laserX <= platformX + 32
                    && currentPlatform[i] == 6
                ) {
                    currentPlatform[i] = 0;
                    if(PLAYER == player1){
                        sfx_punch.src = "./res/sfx/wall_break.mp3";
                        sfx_punch.play();
                    }else{
                        sfx_punch2.src = "./res/sfx/wall_break.mp3";
                        sfx_punch2.play();
                    }  
                } else if(
                    PLAYER.laserY + 5 >= platformY && 
                    PLAYER.laserY <= platformY + 32 &&
                    PLAYER.laserX + 25 >= platformX &&
                    PLAYER.laserX <= platformX + 32
                ){
                    PLAYER.bulletVelocity = 0;
                    PLAYER.bulletFrame = 1;
                    setTimeout(() => {
                        PLAYER.bulletFrame = 2;
                        setTimeout(() => {
                            PLAYER.laserY = 100000;
                        }, 100);
                    }, 50);
                    if(PLAYER.wasTurnedRight){
                        PLAYER.laserX = platformX - 25 - 1;
                    }else{
                        PLAYER.laserX = platformX + 32 + 1;
                    }
                    break;
                }
            }
        }
    }
}

//---------------------------------------- Crouch and Stand (Player)

//This Function is checking, if you do not have a block above you (then you can stand up)
const aboveHeadCollision = (PLAYER) => {
    PLAYER.ahCollision = window.requestAnimationFrame(() => aboveHeadCollision(PLAYER));
    if (PLAYER.crouched) {
        for (let i = 0; i < currentPlatform.length; i++) {
            if (solidBlocks.includes(currentPlatform[i])) {
                let platformX = (i % 32) * 32;
                let platformY = Math.floor(i / 32) * 32;
                if (
                    PLAYER.y + PLAYER.height >= platformY + 64 &&
                    PLAYER.y + PLAYER.height <= platformY + 64 &&
                    PLAYER.x + PLAYER.width >= platformX &&
                    PLAYER.x <= platformX + 32
                    && !PLAYER.reversedGravity
                    ||
                    PLAYER.y + PLAYER.height >= platformY + 64 - 6 &&
                    PLAYER.y + PLAYER.height <= platformY + 64 - 6 &&
                    PLAYER.x + PLAYER.width >= platformX &&
                    PLAYER.x <= platformX + 32 &&
                    PLAYER.onMovingPlatform && !PLAYER.reversedGravity
                    ||
                    PLAYER.y + PLAYER.height >= platformY - 32 &&
                    PLAYER.y + PLAYER.height <= platformY &&
                    PLAYER.x + PLAYER.width >= platformX &&
                    PLAYER.x <= platformX + 32
                    && PLAYER.reversedGravity
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
    if(!PLAYER.stillJumping && !PLAYER.flying || PLAYER.onMovingPlatform && !PLAYER.ladderCol && !PLAYER.flying){
        PLAYER.crouched = true;
        PLAYER.height = 20;
        if(!PLAYER.reversedGravity){
            PLAYER.y += 20;
        }
        achievementShift(PLAYER);
        aboveHeadCollision(PLAYER);
    };
}

//UnCrouching Function (Stand Up)
let unCrouch = (PLAYER) => {
    if (PLAYER.canStandUp == true) {
        PLAYER.height = 40;
        if(!PLAYER.reversedGravity){
            PLAYER.y -= 20;
        }
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
    if(PLAYER.canStandUp == true && PLAYER.velocity == 0){
        unCrouch(PLAYER);
        PLAYER.wasUnder = true;
        cancelAnimationFrame(PLAYER.underCollision);
    }
}

//---------------------------------------- Collision Canvas BOTTOM and BLOCKS

const bottomCollision = (PLAYER) => {
    for (let i = 0; i < currentPlatform.length; i++) {
        if (solidBlocks.includes(currentPlatform[i])) {
            let platformX = (i % 32) * 32;
            let platformY = Math.floor(i / 32) * 32;
            if (
                PLAYER.y + PLAYER.height >= platformY &&
                PLAYER.y + PLAYER.height <= platformY + 32 &&
                PLAYER.x + PLAYER.width >= platformX &&
                PLAYER.x <= platformX + 32
                && !PLAYER.reversedGravity && !PLAYER.flying
                ||
                PLAYER.y + PLAYER.height >= platformY && 
                PLAYER.y + PLAYER.height <= platformY + 32 &&
                PLAYER.x + PLAYER.width + 15 >= platformX &&
                PLAYER.x - 15 <= platformX + 32
                && !PLAYER.reversedGravity && PLAYER.flying
                ||
                PLAYER.y + PLAYER.height >= platformY &&
                PLAYER.y + PLAYER.height <= platformY + 32 + PLAYER.height &&
                PLAYER.x + PLAYER.width >= platformX &&
                PLAYER.x <= platformX + 32
            ) {
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
                achievementShoes(PLAYER);
                PLAYER.stillJumping = false;
                if(!PLAYER.reversedGravity){
                    PLAYER.y = platformY - PLAYER.height;
                }else{
                    if(!PLAYER.crouched){
                        PLAYER.y = platformY - PLAYER.height + 72;
                    }else{
                        PLAYER.y = platformY - PLAYER.height + 52;
                    }
                    
                }
                PLAYER.velocity = 0;
                PLAYER.velocityFly = 0;
                PLAYER.velocityGoingDown = 0;
                PLAYER.orbUsed = false;
                PLAYER.slideJumped = false;
                let rockSounds, woodSounds, metalSounds;

                if (playingCastle) {
                    rockSounds = castleRockSounds;
                    woodSounds = castleWoodSounds;
                    metalSounds = castleMetalSounds;
                } else if (playingSteamPunk) {
                    rockSounds = steampunkRockSounds;
                    woodSounds = steampunkWoodSounds;
                    metalSounds = steampunkMetalSounds;
                } else if (playingSpace) {
                    rockSounds = spaceshipRockSounds;
                    woodSounds = spaceshipWoodSounds;
                    metalSounds = spaceshipMetalSounds;
                }

                if (rockSounds.includes(currentPlatform[i])) {
                    PLAYER.onRock = true;
                    PLAYER.onMetal = false;
                    PLAYER.onWood = false;
                } else if (woodSounds.includes(currentPlatform[i])) {
                    PLAYER.onRock = false;
                    PLAYER.onMetal = false;
                    PLAYER.onWood = true;
                } else if (metalSounds.includes(currentPlatform[i])) {
                    PLAYER.onRock = false;
                    PLAYER.onMetal = true;
                    PLAYER.onWood = false;
                } else {
                    PLAYER.onRock = true;
                    PLAYER.onMetal = false;
                    PLAYER.onWood = false;
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
        PLAYER.velocityFly = 0;
        PLAYER.velocityGoingDown = 0;
        PLAYER.orbUsed = false;
        PLAYER.stillJumping = false;
        cancelAnimationFrame(PLAYER.goingDownId);
        cancelAnimationFrame(PLAYER.gravityId);
    }
}

let castleRockSounds = [1, 6]
let castleWoodSounds = [7, 9, 18, 19, 36, 37]
let castleMetalSounds = [32, 33]

let steampunkRockSounds = [1, 68]
let steampunkWoodSounds = [7, 19]
let steampunkMetalSounds = [18, 71, 73, 74, 75, 76, 77, 78, 79, 80]

let spaceshipRockSounds = [1, 6, 71, 87]
let spaceshipWoodSounds = [46, 47, 48]
let spaceshipMetalSounds = [7, 19, 32, 33, 36, 37, 38, 41, 68]


//---------------------------------------- Hitting your head to the block Collision

const upCollision = (PLAYER) => {
    if(!PLAYER.flying){
        PLAYER.velocityJump = PLAYER.velocityJump/1.22
        PLAYER.y -= PLAYER.velocityJump * PLAYER.reversedGravityNumber;
    }
    for (let i = 0; i < currentPlatform.length; i++) {
        if (solidBlocks.includes(currentPlatform[i])) {
            let platformX = (i % 32) * 32;
            let platformY = Math.floor(i / 32) * 32 + 42;
            if (
                PLAYER.y + PLAYER.height >= platformY && 
                PLAYER.y + PLAYER.height <= platformY + 32 &&
                PLAYER.x + PLAYER.width >= platformX &&
                PLAYER.x <= platformX + 32
                && !PLAYER.reversedGravity && !PLAYER.flying
                ||
                PLAYER.y + PLAYER.height >= platformY && 
                PLAYER.y + PLAYER.height <= platformY + 34 &&
                PLAYER.x + PLAYER.width + 15 >= platformX &&
                PLAYER.x - 15 <= platformX + 32
                && !PLAYER.reversedGravity && PLAYER.flying
                ||
                PLAYER.y + PLAYER.height >= platformY - 42 && 
                PLAYER.y + PLAYER.height <= platformY - 42 + 32 + PLAYER.height &&
                PLAYER.x + PLAYER.width >= platformX &&
                PLAYER.x <= platformX + 32
            ) {
                if(!PLAYER.flying){
                    if(PLAYER.ladderCol){
                        PLAYER.y = platformY - 42 - PLAYER.velocityGoingUp + PLAYER.height;
                    }else if(PLAYER.boostCollision || PLAYER.velocity < 0){
                        PLAYER.y = platformY - 43 + PLAYER.velocity + PLAYER.height;
                    }else if(PLAYER.reversedGravity){
                        PLAYER.y = platformY + 42 - 86 - PLAYER.height;
                    }else{
                        PLAYER.y = platformY - 39 - PLAYER.velocityJump + PLAYER.height;
                    }
                    PLAYER.reversedGravityValue = 0;
                    //PLAYER.stillJumping = false;
                    PLAYER.headHit = true;
                    achievementHead(PLAYER);
                    PLAYER.velocityJump = 0;
                    PLAYER.velocity = 0;
                    PLAYER.velocityGoingUp = 0;
                    cancelAnimationFrame(PLAYER.goingUpId);
                    cancelAnimationFrame(PLAYER.jumpingId);
                    cancelAnimationFrame(PLAYER.gravityId);
                    gravity(PLAYER);
                }else{
                    PLAYER.velocityFly = -3;
                }
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
    if(PLAYER.y <= 0){
        PLAYER.y = 0;
        PLAYER.velocityFly = -3
        PLAYER.headHit = true;
        PLAYER.velocityJump = 0;
        PLAYER.velocityGoingUp = 0;
        PLAYER.velocity= 0;
        cancelAnimationFrame(PLAYER.jumpingId);
        cancelAnimationFrame(PLAYER.gravityId);
        gravity(PLAYER);
    }
}

//----------------------------------------Ladder Collision

const boostCollision = (PLAYER) => {
    let boostDetected = false;
    
    for (let i = 0; i < currentPlatform.length; i++) {
        if (currentPlatform[i] == 17 && playingSpace) {
            let platformX = (i % 32) * 32;
            let platformY = Math.floor(i / 32) * 32;
            if (
                PLAYER.y + PLAYER.height - 1 >= platformY && 
                PLAYER.y <= platformY + 32 &&
                PLAYER.x + PLAYER.width >= platformX &&
                PLAYER.x <= platformX + 32
            ) {
                if(PLAYER.velocity == 0){
                    gravity(PLAYER);
                }
                PLAYER.reversedGravityValue = -1;
                PLAYER.boostCollision = true;
                PLAYER.onWood = false;
                PLAYER.onRock = false;
                PLAYER.onMetal = false;
                if(PLAYER.crouched){
                    unCrouch(PLAYER);
                }
                boostDetected = true;
            }
        }
    }
    
    if (!boostDetected) {
        if(PLAYER.reversedGravityValue == -1){
            PLAYER.velocity /= 1.;
        }
        PLAYER.boostCollision = false;
        PLAYER.reversedGravityValue = 1.4;
    }
}


const ladderCollision = (PLAYER) => {
    for (let i = 0; i < currentPlatform.length; i++) {
        if (currentPlatform[i] == 26) {
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
                PLAYER.onMetal = false;
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
        if(PLAYER.canGravityActivate){
            PLAYER.velocity = 0;
            gravity(PLAYER);
            PLAYER.canGravityActivate = false
        }
    }
}

// Shoot laser bullet

const laserBulletShot = (PLAYER) => {
    PLAYER.laserBulletId = requestAnimationFrame(() => laserBulletShot(PLAYER));
    PLAYER.nowLaser = Date.now();
    PLAYER.deltaLaser = PLAYER.nowLaser - PLAYER.thenLaser;
    if (PLAYER.deltaLaser > interval) {
        PLAYER.thenLaser = PLAYER.nowLaser - (PLAYER.deltaLaser % interval);
        if(PLAYER.wasTurnedRight){
            PLAYER.laserX += 36 * PLAYER.bulletVelocity;
        }else{
            PLAYER.laserX -= 36 * PLAYER.bulletVelocity;
        } 
    }
}

// Shoot laser bullet

let alienBulletId;
let nowAlienBullet;
let deltaAlienBullet;
let thenAlienBullet = Date.now();

let alienBullets = [];

for (let i = 0; i < 3; i++) {
    alienBullets.push({
        children: []
    });

    for (let j = 0; j < 3; j++) {
        alienBullets[i].children.push({
            x: bossX,
            y: bossY,
        });
    }
}

let whichBullets = 0;

let allBullets = false;
let onlyStraightBullets = false;
let onlySideBullets = false;
let bulletWaveToUp = false;
let bulletWaveToDown = false;

const alienBullet = () => {   
    for (let index = 0; index < 3; index++) {
        alienBullets[index].children[whichBullets].x = bossX - 50;
        alienBullets[index].children[whichBullets].y = bossY + 40;
    }
    const alienBulletShot = () => {
        alienBulletId = requestAnimationFrame(() => alienBulletShot());
        nowAlienBullet = Date.now();
        deltaAlienBullet = nowAlienBullet - thenAlienBullet;
        if (deltaAlienBullet > interval) {
            thenAlienBullet = nowAlienBullet - (deltaAlienBullet % interval);
            if(allBullets){
                if(whichBullets != 0){
                    alienBullets[0].children[0].x -= 12.5;
                    alienBullets[0].children[0].y += 6;
    
                    alienBullets[1].children[0].x -= 12.5;
                    
                    alienBullets[2].children[0].x -= 12.5;
                    alienBullets[2].children[0].y -= 6;
                }
                if(whichBullets != 1){
                    alienBullets[0].children[1].x -= 12.5;
                    alienBullets[0].children[1].y += 6;
        
                    alienBullets[1].children[1].x -= 12.5;
        
                    alienBullets[2].children[1].x -= 12.5;
                    alienBullets[2].children[1].y -= 6;
                }
                if(whichBullets != 2){
                    alienBullets[0].children[2].x -= 12.5;
                    alienBullets[0].children[2].y += 6;
        
                    alienBullets[1].children[2].x -= 12.5;
        
                    alienBullets[2].children[2].x -= 12.5;
                    alienBullets[2].children[2].y -= 6;
                }
            }else if(onlyStraightBullets){
                if(whichBullets != 0){
                    alienBullets[1].children[0].x -= 12.5
                }
                if(whichBullets != 1){
                    alienBullets[1].children[1].x -= 12.5;
                }
                if(whichBullets != 2){
                    alienBullets[1].children[2].x -= 12.5;
                }
            }else if(onlySideBullets){
                if(whichBullets != 0){
                    alienBullets[0].children[0].x -= 12.5;
                    alienBullets[0].children[0].y += 6;

                    alienBullets[2].children[0].x -= 12.5;
                    alienBullets[2].children[0].y -= 6;
                }
                if(whichBullets != 1){
                    alienBullets[0].children[1].x -= 12.5;
                    alienBullets[0].children[1].y += 6;

                    alienBullets[2].children[1].x -= 12.5;
                    alienBullets[2].children[1].y -= 6;
                }
                if(whichBullets != 2){
                    alienBullets[0].children[2].x -= 12.5;
                    alienBullets[0].children[2].y += 6;

                    alienBullets[2].children[2].x -= 12.5;
                    alienBullets[2].children[2].y -= 6;
                }
            }else if(bulletWaveToDown){
                if(whichBullets != 0){  
                    alienBullets[2].children[0].x -= 12.5;
                    alienBullets[2].children[0].y -= 6;
                }
                if(whichBullets != 1){
                    alienBullets[1].children[1].x -= 12.5;
                }
                if(whichBullets != 2){
                    alienBullets[0].children[2].x -= 12.5;
                    alienBullets[0].children[2].y += 6;
                }
            }else if(bulletWaveToUp){
                if(whichBullets != 0){
                    alienBullets[0].children[0].x -= 12.5;
                    alienBullets[0].children[0].y += 6;
                }
                if(whichBullets != 1){
                    alienBullets[1].children[1].x -= 12.5;
                }
                if(whichBullets != 2){      
                    alienBullets[2].children[2].x -= 12.5;
                    alienBullets[2].children[2].y -= 6;
                }
            }
            
        }
    }
    whichBullets++;
    if(whichBullets == 5){
        whichBullets = 0;
    }  
    alienBulletShot();
}

const alienBulletCollision = (PLAYER) => {
    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
            if( playingBossFight
                &&
                PLAYER.y + 30 >= alienBullets[i].children[j].y && 
                PLAYER.y <= alienBullets[i].children[j].y + 50 - 20 &&
                PLAYER.x + 45 >= alienBullets[i].children[j].x &&
                PLAYER.x <= alienBullets[i].children[j].x + 22
            ){
                dead();
            }
        }
    }
}

//----------------------------------------Alien Boss Collision (UFO MODE)
const alienBossCollision = (PLAYER) => {
    if (
        PLAYER.y <= bossY - 50 + 180 &&
        PLAYER.y + PLAYER.height >= bossY - 50 &&
        PLAYER.x + PLAYER.width >= bossX - 50 &&
        PLAYER.x <= bossX - 50 + 180
        && player1.flying && currentHp >= 1
    ) {
        dead();
    }
}

let nowAlienMoveY;
let thenAlienMoveY = Date.now();
let deltaAlienMoveY;
let alienMoveYId;

let alienVelocityY = 0.2;
let alienVelocityYValue = 1;
let alienGoUp = true;
let alienSlowingY = false;

const alienMoveY = () => {
    alienMoveYId = requestAnimationFrame(alienMoveY);

    nowAlienMoveY = Date.now();
    deltaAlienMoveY = nowAlienMoveY - thenAlienMoveY;

    if (deltaAlienMoveY > interval) {
        thenAlienMoveY = nowAlienMoveY - (deltaAlienMoveY % interval);
        if(alienGoUp){
            if(alienVelocityY <= 6 && !alienSlowingY && currentHp > 0){
                alienVelocityY *= 1.05;
            }else{
                alienVelocityY /= 1.05;
                alienSlowingY = true;
                if(alienVelocityY <= 0.2){
                    alienVelocityY = 0.2;
                    alienVelocityYValue = -1;
                    alienGoUp = false;
                    alienSlowingY = false;
                }
            }
        }else{
            if(alienVelocityY <= 6 && !alienSlowingY || currentHp <= 0){
                if(currentHp <= 0){
                    alienVelocityY *= 1.02;
                }else{
                    alienVelocityY *= 1.05;
                }
            }else{
                alienVelocityY /= 1.05;
                alienSlowingY = true;
                if(alienVelocityY <= 0.2){
                    alienVelocityY = 0.2;
                    alienVelocityYValue = 1;
                    alienGoUp = true;
                    alienSlowingY = false;
                }
            }
        }
        bossY -= alienVelocityY * alienVelocityYValue;
        if(player1.bulletBossHit){
            player1.laserY -= alienVelocityY * alienVelocityYValue;
        }
        if(player2.bulletBossHit){
            player2.laserY -= alienVelocityY * alienVelocityYValue;
        }
        if(bossY - 260 >= canvas.height){ // Stop animation when alien is out of map
            cancelAnimationFrame(alienMoveXId);
            cancelAnimationFrame(alienMoveYId);
        }
    }
}

let nowAlienMoveX;
let thenAlienMoveX = Date.now();
let deltaAlienMoveX;
let alienMoveXId;

let alienVelocityX = 0.2;
let alienVelocityXValue = 1;
let alienGoLeft = true;
let alienSlowingX = false;;

const alienMoveX = () => {
    alienMoveXId = requestAnimationFrame(alienMoveX);

    nowAlienMoveX = Date.now();
    deltaAlienMoveX = nowAlienMoveX - thenAlienMoveX;

    if (deltaAlienMoveX > interval) {
        thenAlienMoveX = nowAlienMoveX - (deltaAlienMoveX % interval);
        if(alienGoLeft){
            if(alienVelocityX <= 3 && !alienSlowingX){
                alienVelocityX *= 1.05;
            }else{
                alienVelocityX /= 1.05;
                alienSlowingX = true;
                if(alienVelocityX <= 0.2){
                    alienVelocityX = 0.2;
                    alienVelocityXValue = -1;
                    alienGoLeft = false;
                    alienSlowingX = false;
                }
            }
        }else{
            if(alienVelocityX <= 3 && !alienSlowingX){
                alienVelocityX *= 1.05;
            }else{
                alienVelocityX /= 1.05;
                alienSlowingX = true;
                if(alienVelocityX <= 0.2){
                    alienVelocityX = 0.2;
                    alienVelocityXValue = 1;
                    alienGoLeft = true;
                    alienSlowingX = false;
                }
            }
        }
        bossX -= alienVelocityX * alienVelocityXValue;
    }
}

let nowMeteorite;
let thenMeteorite = Date.now();
let deltaMeteorite;
let meteoriteMovementId;

let meteorite1 = {x: 1300, y: -100, xSpeed: 7, ySpeed: 5, size: 32};
let meteorite2 = {x: 1000, y: -150, xSpeed: 5, ySpeed: 3, size: 64};
let meteorite3 = {x: 800, y: -200, xSpeed: 5, ySpeed: 4, size: 96};

const meteoriteMovement = () => {
    meteoriteMovementId = requestAnimationFrame(meteoriteMovement);
    nowMeteorite = Date.now();
    deltaMeteorite = nowMeteorite - thenMeteorite;
    if (deltaMeteorite > interval) {
        thenMeteorite = nowMeteorite - (deltaMeteorite % interval);

        meteorite1.x -= meteorite1.xSpeed;
        meteorite1.y += meteorite1.ySpeed;

        meteorite2.x -= meteorite2.xSpeed;
        meteorite2.y += meteorite2.ySpeed;

        meteorite3.x -= meteorite3.xSpeed;
        meteorite3.y += meteorite3.ySpeed;
    }
};

const meteoriteCollision = (PLAYER) => {

    /*
    ---Hit BOXES---
    c.strokeStyle = "red";
    c.strokeRect(meteorite1X, meteorite1Y, 32, 32)
    c.strokeRect(meteorite2X, meteorite2Y, 64, 64)
    c.strokeRect(meteorite3X, meteorite3Y, 96, 96)
    */
    const checkCollision = (meteorite) => {
        if (
            PLAYER.y + PLAYER.height >= meteorite.y &&
            PLAYER.y <= meteorite.y + meteorite.size &&
            PLAYER.x + 45 >= meteorite.x &&
            PLAYER.x - 15 <= meteorite.x + meteorite.size
        ) {
            dead();
        }
    };
    checkCollision(meteorite1);
    checkCollision(meteorite2);
    checkCollision(meteorite3);
};

//----------------------------------------Climbing on a Ladder - UP

const goingUp = (PLAYER) => {
    PLAYER.velocityGoingUp = 2;
    PLAYER.goingUpId = requestAnimationFrame(() => goingUp(PLAYER));
    PLAYER.nowGoingUp = Date.now();
    PLAYER.deltaGoingUp = PLAYER.nowGoingUp - PLAYER.thenGoingUp;
    if (PLAYER.deltaGoingUp > interval) {
        PLAYER.thenGoingUp = PLAYER.nowGoingUp - (PLAYER.deltaGoingUp % interval);
        if(PLAYER == player1){
            if(sfx_climb.paused && PLAYER.ladderCol && (!PLAYER.onWood || !PLAYER.onRock || !PLAYER.onMetal)){
                sfx_walk.pause();
                sfx_climb.src = "./res/sfx/ladder.mp3"
                sfx_climb.play();
            }
        }else{
            if(sfx_climb2.paused && PLAYER.ladderCol && (!PLAYER.onWood || !PLAYER.onRock || !PLAYER.onMetal)){
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
    if(!PLAYER.flying){
        if(PLAYER == player1){
            if(sfx_walk.paused && sfx_jump.paused && (PLAYER.onWood || PLAYER.onRock || PLAYER.onMetal) && (PLAYER.velocityRight > 2 || PLAYER.velocityLeft > 2) && !PLAYER.crouched && !PLAYER.ladderCol && PLAYER.velocity< 0.3 && !PLAYER.isJumping && (PLAYER.currentFrameRun % 2 == 0)) {
                if(PLAYER.onWood && !PLAYER.ladderCol){
                    sfx_walk.src = "./res/sfx/wood_steps.mp3"; //Walking on wood SFX
                }else if(PLAYER.onRock && !PLAYER.ladderCol){
                    sfx_walk.src = "./res/sfx/stone_steps.mp3"; //Walking on rock SFX
                }else if(PLAYER.onMetal && !PLAYER.ladderCol){
                    sfx_walk.src = "./res/sfx/metal_steps.mp3"; //Walking on metal SFX
                }
                sfx_walk.play();
            }
        }else{
            if(sfx_walk2.paused && sfx_jump2.paused && (PLAYER.onWood || PLAYER.onRock || PLAYER.onMetal) && (PLAYER.velocityRight > 2 || PLAYER.velocityLeft > 2) && !PLAYER.crouched && !PLAYER.ladderCol && PLAYER.velocity< 0.3 && !PLAYER.isJumping && (PLAYER.currentFrameRun % 2 == 0)) {
                if(PLAYER.onWood && !PLAYER.ladderCol){
                    sfx_walk2.src = "./res/sfx/wood_steps.mp3"; //Walking on wood SFX
                }else if(PLAYER.onRock && !PLAYER.ladderCol){
                    sfx_walk2.src = "./res/sfx/stone_steps.mp3"; //Walking on rock SFX
                }else if(PLAYER.onMetal && !PLAYER.ladderCol){
                    sfx_walk2.src = "./res/sfx/metal_steps.mp3"; //Walking on metal SFX
                }
                sfx_walk2.play();
            }
        }
    } 
}

//---------------------------------------- Gravity Function (Player)

let gravity = (PLAYER) => {
    if(PLAYER.velocityJump < 0.1 && !PLAYER.flying){
        PLAYER.gravityId = requestAnimationFrame(() => gravity(PLAYER));
        PLAYER.nowDown = Date.now();
        PLAYER.deltaDown = PLAYER.nowDown - PLAYER.thenDown;
        if (PLAYER.deltaDown > interval) {
            PLAYER.thenDown = PLAYER.nowDown - (PLAYER.deltaDown % interval);
            if(PLAYER.crouched && (PLAYER.velocity >= 2.5 || PLAYER.velocity <= -2.5)){
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
                if(!sfx_walk.paused && PLAYER.velocityRight <= 2 && PLAYER.velocityLeft <= 2 && (!PLAYER.onWood || !PLAYER.onRock || !PLAYER.onMetal) || PLAYER.crouched || PLAYER.ladderCol || PLAYER.velocity>= 0.3 || PLAYER.isJumping && PLAYER.currentFrameRun != 1){
                    sfx_walk.pause();
                }
            }else{
                if(!sfx_walk2.paused && PLAYER.velocityRight <= 2 && PLAYER.velocityLeft <= 2 && (!PLAYER.onWood || !PLAYER.onRock || !PLAYER.onMetal) || PLAYER.crouched || PLAYER.ladderCol || PLAYER.velocity>= 0.3 || PLAYER.isJumping && PLAYER.currentFrameRun != 1){
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
                PLAYER.velocity += 0.3 * PLAYER.reversedGravityValue * PLAYER.reversedGravityNumber;
            }
            PLAYER.y += PLAYER.velocity;
            if(PLAYER.velocity < 0 && !PLAYER.reversedGravity){
                upCollision(PLAYER);
            }else{
                bottomCollision(PLAYER);
            }
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
        PLAYER.onMetal = false;
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
        if(PLAYER.canOrbJump && (PLAYER.velocity >= 0 || PLAYER.velocity <= 0) || PLAYER.canUseJumpPad && (PLAYER.velocity >= 0 || PLAYER.velocity <= 0)){
            cancelAnimationFrame(PLAYER.gravityId);
            cancelAnimationFrame(PLAYER.jumpingId);
            PLAYER.velocityJump = 0;
            PLAYER.orbUsed = true;
            achievementJumpOrb(PLAYER);
            achievementJumpPad(PLAYER);
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
        PLAYER.velocity = 0;
        jumping();
    }
}

let flyUpAndDown = (PLAYER) => {
    const flyingUpAndDown = () => {
        PLAYER.animationIdFly = requestAnimationFrame(() => flyingUpAndDown())
        PLAYER.nowFly = Date.now();
        PLAYER.deltaFly = PLAYER.nowFly - PLAYER.thenFly;
        if (PLAYER.deltaFly > interval) {
            PLAYER.thenFly = PLAYER.nowFly - (PLAYER.deltaFly % interval);
            if(PLAYER.isFlying){
                if(PLAYER.velocityFly < 3){
                    PLAYER.velocityFly += 0.5;
                }else if(PLAYER.velocityFly + 0.5 >= 3){
                    PLAYER.velocityFly = 3;
                }   
            }else{
                if(PLAYER.velocityFly > -3){
                    PLAYER.velocityFly -= 0.5;
                }else if(PLAYER.velocityFly - 0.5 <= -3){
                    PLAYER.velocityFly = -3;
                }
            }
            PLAYER.y -= PLAYER.velocityFly;

            if(PLAYER.velocityFly <= 0){
                bottomCollision(PLAYER);
            }else{
                upCollision(PLAYER)
            }
        }
    };
    flyingUpAndDown();
};

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
                if(PLAYER.velocityRight < 0){
                    PLAYER.velocityRight = 0
                }
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
                    }else if(PLAYER.velocityRight + 0.12 >= 3.9){
                        PLAYER.velocityRight = 3.9;
                    }else if(PLAYER.velocityRight >= 2 && PLAYER.velocityLeft >= 2){//If you walk to two sides at once, you won't move
                        PLAYER.velocityRight = 0;
                        PLAYER.velocityLeft = 0;
                    }
                    
                }else if(PLAYER.isMovingRight == false){
                    PLAYER.velocityRight -= 0.2;
                    if(PLAYER.velocityRight < 0){
                        PLAYER.velocityRight = 0
                    }
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
            for (let i = 0; i < currentPlatform.length; i++) {
                if (solidBlocks.includes(currentPlatform[i])) {
                    let platformX = (i % 32) * 32;
                    let platformY = Math.floor(i / 32) * 32;
                    if (
                        PLAYER.y + PLAYER.height > platformY &&
                        PLAYER.y < platformY + 32 &&
                        PLAYER.x + PLAYER.width + PLAYER.velocityRight + 0.2 > platformX &&
                        PLAYER.x < platformX + 32
                        && !PLAYER.flying
                        ||
                        PLAYER.y + PLAYER.height > platformY &&
                        PLAYER.y < platformY + 32 &&
                        PLAYER.x + PLAYER.width + 15 + PLAYER.velocityRight + 0.2 > platformX &&
                        PLAYER.x < platformX + 32
                        && PLAYER.flying
                    ) {
                        if(PLAYER.velocityRight > PLAYER.velocityLeft && PLAYER.isMovingRight){ //Fixing switching sides
                            PLAYER.turnedRight = true;
                            PLAYER.turnedLeft = false;
                        }
                        if(PLAYER.velocityRight >= 1 && PLAYER.velocityLeft >= 1){//If you walk to two sides at once, you won't move
                            PLAYER.velocityLeft = 0;
                            PLAYER.velocityRight = 0;
                        }
                        if(!PLAYER.canStandUp && !PLAYER.reversedGravity){ // This condition fixing uncrouch teleport bug
                            PLAYER.x = platformX - PLAYER.width - 0.12;
                        }
                        if(PLAYER.velocityRight > 0.5){
                            PLAYER.velocityRight = 0;
                            if(!PLAYER.flying){
                                PLAYER.x = platformX - PLAYER.width - 1.2;
                            }else{
                                PLAYER.x = platformX - PLAYER.width - 15 - 1.2;
                            }
                            
                        }else{
                            PLAYER.velocityRight = 0;
                        }
                        break;
                    }
                }
            }
            PLAYER.x += PLAYER.velocityRight;
            if(PLAYER.x >= canvas.width - PLAYER.width && !PLAYER.inPipe && !PLAYER.flying) {
                PLAYER.x = canvas.width - PLAYER.width - 1;
                PLAYER.velocityRight = 0;
                cancelAnimationFrame(PLAYER.animationIdRight);
            }else if(PLAYER.x + 15 >= canvas.width - PLAYER.width && PLAYER.flying) {
                PLAYER.x = canvas.width - PLAYER.width - 15;
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
                if(PLAYER.velocityLeft < 0){
                    PLAYER.velocityLeft = 0
                }
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
                    }else if(PLAYER.velocityLeft + 0.12 >= 3.9){
                        PLAYER.velocityLeft = 3.9;
                    }else if(PLAYER.velocityRight >= 2 && PLAYER.velocityLeft >= 2){ //If you walk to two sides at once, you won't move
                        PLAYER.velocityRight = 0;
                        PLAYER.velocityLeft = 0;
                    }
                }else if(PLAYER.isMovingLeft == false){
                    PLAYER.velocityLeft -= 0.2;
                    if(PLAYER.velocityLeft < 0){
                        PLAYER.velocityLeft = 0
                    }
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
            for (let i = 0; i < currentPlatform.length; i++) {
                if (solidBlocks.includes(currentPlatform[i])) {
                    let platformX = (i % 32) * 32;
                    let platformY = Math.floor(i / 32) * 32;
                    if (
                        PLAYER.y + PLAYER.height > platformY &&
                        PLAYER.y < platformY + 32 &&
                        PLAYER.x - PLAYER.velocityLeft < platformX + 32 &&
                        PLAYER.x > platformX
                        && !PLAYER.flying
                        ||
                        PLAYER.y + PLAYER.height > platformY &&
                        PLAYER.y < platformY + 32 &&
                        PLAYER.x - PLAYER.velocityLeft - 15 < platformX + 32 &&
                        PLAYER.x > platformX
                        && PLAYER.flying
                    ) {
                        if(PLAYER.velocityRight <= PLAYER.velocityLeft && PLAYER.isMovingLeft){ //Fixing switching sides
                            PLAYER.turnedLeft = true;
                            PLAYER.turnedRight = false;
                        }
                        if(PLAYER.velocityRight >= 1 && PLAYER.velocityLeft >= 1){//If you walk to two sides at once, you won't move
                            PLAYER.velocityLeft = 0;
                            PLAYER.velocityRight = 0;
                        }
                        if(!PLAYER.canStandUp && !PLAYER.reversedGravity){ // This condition fixing uncrouch teleport bug
                            PLAYER.x = platformX + PLAYER.width + 2.24;
                        }
                        if(PLAYER.velocityLeft > 0.5){
                            PLAYER.velocityLeft = 0;
                            if(!PLAYER.flying){
                                PLAYER.x = platformX + PLAYER.width + 2.2;
                            }else{
                                PLAYER.x = platformX + PLAYER.width + 15 + 2.2;
                            }
                            
                        }else{
                            PLAYER.velocityLeft = 0;
                        }
                        break;
                    }
                }
            }
            PLAYER.x -= PLAYER.velocityLeft;
            if(PLAYER.x <= 0 && !PLAYER.inPipe && !PLAYER.flying) {
                PLAYER.x = 0;
                PLAYER.velocityLeft = 0;
                cancelAnimationFrame(PLAYER.animationIdLeft);
            }else if(PLAYER.x - 15 <= 0 && PLAYER.flying) {
                PLAYER.x = 15;
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

    for (let i = 0; i < currentPlatform.length; i++) {
        if (solidBlocks.includes(currentPlatform[i])) {
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

const soundRandomGenerator = (PLAYER) => {
    const soundsRioter = [
        "./res/sfx/rioter_attack1.mp3",
        "./res/sfx/rioter_attack2.mp3"
    ];

    const soundsRuby = [
        "./res/sfx/ruby_attack1.mp3",
        "./res/sfx/ruby_attack2.mp3"
    ];

    const randomIndex = Math.floor(Math.random() * soundsRioter.length);

    if(playingMultiplayer){
        if(PLAYER == player1){
            sfx_player.src = soundsRioter[randomIndex]; 
            sfx_player.play();
        }else{
            sfx_player2.src = soundsRuby[randomIndex];
            sfx_player2.play();
        }
    }else{
        if(playingAsRuby){
            sfx_player.src = soundsRuby[randomIndex];
        }else if(playingAsRioter){
            sfx_player.src = soundsRioter[randomIndex]; 
        }
        sfx_player.play();
    }
};

let canPlayBreakSound = true;

let currentHp = 100;

let punchedBossTimeout;

const punch = (PLAYER) => {
    if(!PLAYER.crouched && !PLAYER.punchCooldown){
        PLAYER.punchCooldown = true;
        PLAYER.punched = true;
        achievementDraezlyrWielder(PLAYER)

        //-------------------------------
        if(!PLAYER.canUseButton){
            if(!PLAYER.flying){
                soundRandomGenerator(PLAYER)
                if(PLAYER == player1){
                    sfx_miss.src = "./res/sfx/miss.mp3"; 
                    sfx_miss.play();
                }else{
                    
                    sfx_miss2.src = "./res/sfx/miss.mp3"; 
                    sfx_miss2.play();
                }
            }else{
                if(PLAYER == player1){
                    sfx_player.src = "./res/sfx/bullet.mp3"; 
                    sfx_player.play();
                }else{
                    sfx_player2.src = "./res/sfx/bullet.mp3";
                    sfx_player2.play();
                }
            }
            
        }
        if(PLAYER.canAttack && !playingSpace){
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
                    achievementShield();
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
                    achievementShield();
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
            }, 400);
            
            hp.style.width = currentHp + "%";
            if(currentHp <= 0 && !backToLobbyEntered && playingCastle){
                deadBoss();
                finalDoorUnlocked = true;
            }else if(currentHp <= 0 && !backToLobbyEntered && playingSteamPunk){
                finalSceneSpiderBoss();
                deadBoss();
                finalDoorUnlocked = true;
            }
        }else if(PLAYER.canUseButton){ // Button and Hologram
            if(frameButton == 0){
                frameButton = 1;
            }else{
                frameButton = 0;
            }
            for (let i = 0; i < currentPlatform.length; i++) {
                if (currentPlatform[i] == 87) {
                    currentPlatform[i] = 88;
                }else if(currentPlatform[i] == 88){
                    frameHologram = 0;
                    currentPlatform[i] = 87;
                }
            }
            if(PLAYER == player1){
                sfx.src = "./res/sfx/button.mp3";
                sfx.play();
            }else{
                sfx2.src = "./res/sfx/button.mp3";
                sfx2.play();
            }
            gravity(PLAYER)
        }else if(PLAYER.flying){
            PLAYER.laserY = PLAYER.y + 30;
            if(PLAYER.turnedRight){ 
                PLAYER.wasTurnedRight = true;
                PLAYER.wasTurnedLeft = false;
                PLAYER.laserX = PLAYER.x + 30;
                PLAYER.bulletSide = 1;
            }else if(PLAYER.turnedLeft){
                PLAYER.wasTurnedRight = false;
                PLAYER.wasTurnedLeft = true;
                PLAYER.laserX = PLAYER.x - 30;
                PLAYER.bulletSide = 0;
            }
            PLAYER.bulletVelocity = 1;
            PLAYER.bulletFrame = 0;
            laserBulletShot(PLAYER);
        }else{
            for (let i = 0; i < currentPlatform.length; i++) {
                if (currentPlatform[i] == 6) {
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
                        currentPlatform[i] = 0;
                        if(canPlayBreakSound){ //When you hit 2 blocks, sound will be played once
                            canPlayBreakSound = false;
                            if(PLAYER == player1){
                                sfx_punch.src = "./res/sfx/wall_break.mp3";
                                sfx_punch.play();
                            }else{
                                sfx_punch2.src = "./res/sfx/wall_break.mp3";
                                sfx_punch2.play();
                            }
                            achievementPunchWall(PLAYER);
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

const afkAchievementProgress = () => {
    if(inGame && !achievementAfkCompleted){
        clearInterval(afkTimerInterval);
        afkTimeCounter = 0;
        afkTimer();
    }
}

window.addEventListener("keydown", (event) => {
    afkAchievementProgress();
    // W - Jumping / Climbing Up
    if ((event.key == up || event.key == UP) && player1.canStandUp && inGame && !player1.isJumping && !player1.flying) {
        isJumping = true;
        if(player1.ladderCol){
            if(!player1.wPressed){
                player1.wPressed = true;
                goingUp(player1);
            }
        }else{
            if(!player1.jumpIntervalSet && player1.stillJumping){ //Better W pressed detection
                jump(player1)
                if(player1.canOrbGravity && !player1.gravityOrbUsed){
                    if(!player1.reversedGravity){
                        player1.reversedGravityNumber = -1;
                        player1.reversedGravity = true;
                        player1.reversedGravityCrouchNum = 20;
                        player1.reversedGravityHat = 10;
                    }else{
                        player1.reversedGravityNumber = 1;
                        player1.reversedGravity = false;
                        player1.reversedGravityCrouchNum = 0;
                        player1.reversedGravityHat = 0;
                    }
                    achievementGravityOrb(player1);
                    sfx.src = "./res/sfx/gravity_orb.mp3";
                    sfx.play();
                    player1.velocity = 0;
                    player1.gravityOrbUsed = true;
                    setTimeout(() => {
                        player1.gravityOrbUsed = false;
                    }, 700);
                }else{
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
                }
            }else if(!player1.stillJumping && !player1.jumpIntervalSet){
                jump(player1);
            }
            player1.jumpIntervalSet = true;
        }
    }else if((event.key == up || event.key == UP) && inGame && !player1.isFlying && player1.flying){
        player1.isFlying = true;
        cancelAnimationFrame(player1.animationIdFly);
        flyUpAndDown(player1);
    // D - Moving Right / Climbing Right
    }else if ((event.key == right || event.key == RIGHT) && !player1.isMovingRight && inGame) {
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
        if (event.key == "ArrowUp" && player2.canStandUp == true && inGame && !player2.isJumping && !player2.flying) {
            isJumping = true;
            if(player2.ladderCol){
                if(!player2.wPressed){
                    player2.wPressed = true;
                    goingUp(player2);
                }
            }else{
                if(!player2.jumpIntervalSet && player2.stillJumping){ //Better W pressed detection
                    jump(player2)
                    if(player2.canOrbGravity && !player2.gravityOrbUsed){
                        if(!player2.reversedGravity){
                            player2.reversedGravityNumber = -1;
                            player2.reversedGravity = true;
                            player2.reversedGravityCrouchNum = 20;
                            player2.reversedGravityHat = 10;
                        }else{
                            player2.reversedGravityNumber = 1;
                            player2.reversedGravity = false;
                            player2.reversedGravityCrouchNum = 0;
                            player2.reversedGravityHat = 0;
                        }
                        achievementGravityOrb(player2);
                        sfx.src = "./res/sfx/gravity_orb.mp3";
                        sfx.play();
                        player2.velocity = 0;
                        player2.gravityOrbUsed = true;
                        setTimeout(() => {
                            player2.gravityOrbUsed = false;
                        }, 700);
                    }else{
                        player2.jumpInterval = setInterval(() => {
                            if(player2.canOrbJump && player2.velocity== 0 || player2.slideJumped || player2.onMovingPlatform){
                                clearInterval(player2.jumpInterval)
                            }else{
                                jump(player2)
                            }
                        }, 10);  
                        setTimeout(() => {
                            clearInterval(player2.jumpInterval)
                        }, 100);
                    }
                }else if(!player2.stillJumping && !player2.jumpIntervalSet){
                    jump(player2);
                }
                player2.jumpIntervalSet = true;
            }
        }else if(event.key == "ArrowUp" && inGame && !player2.isFlying && player2.flying){
            player2.isFlying = true;
            cancelAnimationFrame(player2.animationIdFly);
            flyUpAndDown(player2);
        // D - Moving Right / Climbing Right
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
        if(!player1.flying){
            player1.isJumping = false;
            player1.jumpIntervalSet = false;
            clearInterval(player1.jumpInterval)
            if(player1.ladderCol && player1.wPressed){
                player1.wPressed = false;
                cancelAnimationFrame(player1.goingUpId);
                sfx_climb.pause();
            }
            player1.velocityGoingUp = 0;
        }else{
            player1.isFlying = false;
            player1.y += 1;
            cancelAnimationFrame(player1.animationIdFly)
            flyUpAndDown(player1);
        }
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
        if(player1.velocity <= 0.35 && player1.crouched == true && player1.canStandUp == true && player1.ladderCol == false){
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
            if(!player2.flying){
                player2.isJumping = false;
                player2.jumpIntervalSet = false;
                clearInterval(player2.jumpInterval)
                if(player2.ladderCol && player2.wPressed){
                    player2.wPressed = false;
                    cancelAnimationFrame(player2.goingUpId);
                    sfx_climb.pause();
                }
                player2.velocityGoingUp = 0;
            }else{
                player2.isFlying = false;
                player2.y += 1;
                cancelAnimationFrame(player2.animationIdFly)
                flyUpAndDown(player2);
        }
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
/*
doorsTime = 10000000;
    timer.style.top = "-5%"
    characters.style.display = "none";
    heart1.src = "./res/img/heart_rioter.png";
    heart2.src = "./res/img/heart_rioter.png";
    heart3.src = "./res/img/heart_rioter.png";
    playingAsRioter = true;
    playingAsRuby = false;
    
    //playingMultiplayer = true;
    selectedRioter = true;
    selectedRuby = false;
    currentIndexHatsRioter = 0;
    setDungeonToSpace();
    //movingCharactersAndFullBlack();
    //darkness = true;
    menuToLobby();
    drawing();
    fullBlack.style.opacity = "0";
    unlockAll();
    //skins.style.display = "none";
    spawnMovingPlatformCords = () => {
        xMovingPlatform = 100000;
        yMovingPlatform = 100000;
    }
    spawnMovingPlatformCords();
    //music.volume = 0;
    
    setTimeout(() => {
        player1.hatNumber = 0;
        playerOneImage.src = "./res/skins/rioter.png"
        setSkins();
        helpNum = 14
        enterFunction()
    }, 200);
    */
