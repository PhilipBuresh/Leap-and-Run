//--------------------------------------------------Achievements

const achievement = document.getElementById("achievement");
const achievement_img = document.getElementById("achievement_img");
const achievement_text = document.getElementById("achievement_text");
const sfx_achievement = document.getElementById("sfx_achievement");
const achievements_counter = document.getElementById("achievements_counter");
const achievement_counter_in_right = document.getElementById("achievement_counter_in_right");

let achievementDraezlyrWielderCompleted = false;
let achievementThatWasCloseCompleted = false;
let achievementSoMuchTimeCompleted = false;
let achievementMarioCompleted = false;
let achievementNoobCompleted = false;
let achievementHundredCompleted = false;
let achievementShiftCompleted = false;
let achievementTimerCompleted = false;
let achievementCastleCompleted = false;
let achievementJumpOrbCompleted = false;
let achievementJumpPadCompleted = false;
let achievementGravityOrbCompleted = false;
let achievementSteampunkCompleted = false;
let achievementSpaceshipCompleted = false;
let achievementHotCompleted = false;
let achievementGodCompleted = false;
let achievementGiveUpCompleted = false;
let achievementPinkCompleted = false;
let achievementEggCompleted = false;
let achievementShoesCompleted = false;
let achievementHeadCompleted = false;
let achievementPunchWallCompleted = false;
let achievementKingCompleted = false;
let achievementMovingSpikeCompleted = false;
let achievementPipeCompleted = false;
let achievementFriendCompleted = false;
let achievementShieldCompleted = false;
let achievementShipCompleted = false;
let achievementAfkCompleted = false;
let achievementPortalCompleted = false;

let achievementInProgress = false;
let nextAchievement = null;

let achievementsDoneCounter = 0;

const showAchievement = () => {
    achievementInProgress = true;
    correct_symbol.src = "./res/img/correct_transparent.png";
    achievement.style.display = "flex";
    achievement.style.animationDuration = "1000ms";
    achievement_img.style.filter = "grayscale(100%)";
    achievement_img.style.border = "3px dashed black";
    achievement.style.animationName = "rightToMid_achievement";
    achievement.style.animationPlayState = "running";

    setTimeout(() => {
        shakeAchievement();
        achievement.style.filter = "blur(0px)";
        sfx_achievement.src = "./res/sfx/achievement.mp3";
        sfx_achievement.play();
        correct_symbol.src = "./res/img/correct.png";
        achievement_text.style.color = "#044d10";
        achievement_img.style.border = "3px solid #044d10";
        achievement_img.style.filter = "grayscale(0%)";

        achievementsDoneCounter++;
        localStorage.setItem('achievementsDoneCounter', achievementsDoneCounter);
        achievements_counter.innerHTML = achievementsDoneCounter + " / 30";
        achievement_counter_in_right.innerHTML = achievementsDoneCounter + " / 30";
        achievement_counter_in_right.style.transition = "0s";
        achievement_counter_in_right.style.color = "lime";
        setTimeout(() => {
            achievement_counter_in_right.style.transition = "2s ease";
            achievement_counter_in_right.style.color = "white";
        }, 100);
    }, 1100);

    setTimeout(() => {
        hideAchievement();
    }, 4000);
}

let achievementsQueue = [];

const queueAchievement = (imgSrc, text, backImgSrc) => {
    achievementsQueue.push({ imgSrc, text, backImgSrc });
    if (!achievementInProgress) {
        processNextAchievement();
    }
}

const processNextAchievement = () => {
    if (achievementsQueue.length > 0) {
        const { imgSrc, text, backImgSrc } = achievementsQueue.shift();
        achievement_img.src = imgSrc;
        achievement_text.innerHTML = text;
        achievement.style.backgroundImage = `url(${backImgSrc})`;
        showAchievement();
    }
}

const hideAchievement = () => {
    achievement.style.animationName = "midToRight_achievement";
    achievement.style.animationDuration = "1000ms";
    achievement.style.animationPlayState = "running";

    setTimeout(() => {
        achievement.style.display = "none";
        achievementInProgress = false;
        processNextAchievement();
    }, 1050);
}

// Shake Achievement Effect
const shakeAchievement = () => {
    achievement.style.top = "2.5%";
    setTimeout(() => {
        achievement.style.top = "3.5%";
    }, 50);
    setTimeout(() => {
        achievement.style.top = "3%";
    }, 100);
    setTimeout(() => {
        achievement.style.top = "2.5%";
    }, 150);
    setTimeout(() => {
        achievement.style.top = "3%";
    }, 200);
}

const loadAchievementsFromStorage = () => {
    const completedAchievements = JSON.parse(localStorage.getItem('completedAchievements')) || [];
    const achievements = document.querySelectorAll("#achievement_in_list");
    
    achievements.forEach((achievement) => {
        const textElement = achievement.querySelector("p");
        const symbol = achievement.querySelector("#correct_symbol_in_list");
        const achievementImg = achievement.querySelector("#achievement_img_in_list");

        if (completedAchievements.includes(textElement.textContent)) {
            symbol.src = "./res/img/correct.png"; 
            achievementImg.style.border = "4px solid #044d10";
            textElement.style.color = "#044d10";
            achievementImg.style.filter = "grayscale(0%)";
        }
    });
}

//Achievement DONE in the list

const achievementDoneInTheList = (textForComparison) => {
    const achievements = document.querySelectorAll("#achievement_in_list");
    achievements.forEach((achievement) => {
        const textElement = achievement.querySelector("p");
        const symbol = achievement.querySelector("#correct_symbol_in_list");
        const achievementImg = achievement.querySelector("#achievement_img_in_list");

        if (textElement.textContent == textForComparison) {

            let completedAchievements = JSON.parse(localStorage.getItem('completedAchievements')) || [];
            if (!completedAchievements.includes(textForComparison)) {
                completedAchievements.push(textForComparison);
                localStorage.setItem('completedAchievements', JSON.stringify(completedAchievements));
            }

            symbol.src = "./res/img/correct.png"; 
            achievementImg.style.border = "4px solid #044d10";
            textElement.style.color = "#044d10"
            achievementImg.style.filter = "grayscale(0%)";
        }
    });
}

//LIST OF ACHIEVEMENTS - Functions

const achievementHot = () => {
    // Achievement - Hot
    if (!achievementHotCompleted) {
        achievementHotCompleted = true;
        localStorage.setItem('achievementHotCompleted', 'true');
        queueAchievement("./res/achievements/hot.png", "Do you know that lava burns? Now you know.", "./res/img/achievement_bronze.png");
        achievementDoneInTheList("Do you know that lava burns? Now you know.");
    }
}

const achievementMario = () => {
    // Achievement - Don't copy Mario
    if (!achievementMarioCompleted) {
        achievementMarioCompleted = true;
        localStorage.setItem('achievementMarioCompleted', 'true');
        queueAchievement("./res/achievements/mario.png", "Don't copy Mario's mechanic, how embarrassing...", "./res/img/achievement_bronze.png");
        achievementDoneInTheList("Don't copy Mario's mechanic, how embarrassing...");
    }
}

const achievementShift = (PLAYER) => {
    // Achievement - Shift
    if (!achievementShiftCompleted) {
        PLAYER.crouchCounter++;
        if (PLAYER.crouchCounter === 1) {
            setTimeout(() => {
                PLAYER.crouchCounter = 0;
            }, 5000);
        }
        if (PLAYER.crouchCounter === 15) {
            achievementShiftCompleted = true;
            localStorage.setItem('achievementShiftCompleted', 'true');
            queueAchievement("./res/achievements/shift.png", "I... am STEVE!", "./res/img/achievement_bronze.png");
            achievementDoneInTheList("I... am STEVE!");
        }
    }
}

const achievementGiveUp = () => {
    // Achievement - Never Gonna Give You Up
    if (!achievementGiveUpCompleted) {
        achievementGiveUpCompleted = true;
        localStorage.setItem('achievementGiveUpCompleted', 'true');
        queueAchievement("./res/achievements/giveup.png", "Never gonna give you up.", "./res/img/achievement_bronze.png");
        achievementDoneInTheList("Never gonna give you up.");
    }
}

const achievementMovingSpike = () => {
    // Achievement - Moving Spike
    if (!achievementMovingSpikeCompleted) {
        achievementMovingSpikeCompleted = true;
        localStorage.setItem('achievementMovingSpikeCompleted', 'true');
        queueAchievement("./res/achievements/hi.png", "Hey! Did you notice me? I'm hereeeeeee", "./res/img/achievement_bronze.png");
        achievementDoneInTheList("Hey! Did you notice me? I'm hereeeeeee");
    }
}

const achievementShip = () => {
    // Achievement - Ship
    if (!achievementShipCompleted && player1.flying) {
        achievementShipCompleted = true;
        localStorage.setItem('achievementShipCompleted', 'true');
        queueAchievement("./res/achievements/ship.png", "Why did I give you a rocket driver's license?", "./res/img/achievement_bronze.png");
        achievementDoneInTheList("Why did I give you a rocket driver's license?");
    }
}

const achievementNoob = () => {
    // Achievement - Noob
    if (!achievementNoobCompleted) {
        if (doorsTime - seconds * 1000 <= 1000) {
            achievementNoobCompleted = true;
            localStorage.setItem('achievementNoobCompleted', 'true');
            queueAchievement("./res/achievements/noob.png", "How... How could you only survive for ONE second.", "./res/img/achievement_bronze.png");
            achievementDoneInTheList("How... How could you only survive for ONE second.");
        }
    }
}

const achievementPinkColor = () => {
    // Achievement - Pink Color
    if (!achievementPinkCompleted && ((playerSkin1 == "./res/skins/rioter_pink.png" || playerSkin1 == "./res/skins/ruby_pink.png") || (playerSkin2 == "./res/skins/ruby_pink.png" && playingMultiplayer))) {
        achievementPinkCompleted = true;
        localStorage.setItem('achievementPinkCompleted', 'true');
        queueAchievement("./res/achievements/pink.png", "The pink one really suits you", "./res/img/achievement_bronze.png");
        achievementDoneInTheList("The pink one really suits you");
    }
}

const achievementTimer = () => {
    // Achievement - Timer
    if (!achievementTimerCompleted && frameDoor == 3) {
        achievementTimerCompleted = true;
        localStorage.setItem('achievementTimerCompleted', 'true');
        queueAchievement("./res/achievements/timer.png", "Did you notice there is a timer?", "./res/img/achievement_bronze.png");
        achievementDoneInTheList("Did you notice there is a timer?");
    }
}

const achievementShield = () => {
    // Achievement - Shield
    if (!achievementShieldCompleted) {
        achievementShieldCompleted = true;
        localStorage.setItem('achievementShieldCompleted', 'true');
        queueAchievement("./res/achievements/shield.png", "Are you blind? Can't you see he has a shield?", "./res/img/achievement_bronze.png");
        achievementDoneInTheList("Are you blind? Can't you see he has a shield?");
    }
}

const achievementHead = (PLAYER) => {
    // Achievement - Head hit
    if (!achievementHeadCompleted) {
        PLAYER.headHitCounter++;
        if (PLAYER.headHitCounter == 1) {
            setTimeout(() => {
                PLAYER.headHitCounter = 0;
            }, 5000);
        }
        if (PLAYER.headHitCounter == 10) {
            achievementHeadCompleted = true;
            localStorage.setItem('achievementHeadCompleted', 'true');
            queueAchievement("./res/achievements/head.png", "Doesn't it give you a headache?", "./res/img/achievement_bronze.png");
            achievementDoneInTheList("Doesn't it give you a headache?");
        }
    }
}

const achievementDraezlyrWielder = (PLAYER) => {
    // Achievement - Draezlyr Wielder
    if (!achievementDraezlyrWielderCompleted) {
        PLAYER.punchCounter++;
        if (PLAYER.punchCounter == 1) {
            setTimeout(() => {
                PLAYER.punchCounter = 0;
            }, 5000);
        }
        if (PLAYER.punchCounter == 7) {
            achievementDraezlyrWielderCompleted = true;
            localStorage.setItem('achievementDraezlyrWielderCompleted', 'true');
            queueAchievement("./res/achievements/draezlyr.png", "Don't try to be a Draezlyr Wielder", "./res/img/achievement_bronze.png");
            achievementDoneInTheList("Don't try to be a Draezlyr Wielder");
        }
    }
}

const achievementPortal = (PLAYER) => {
    // Achievement - Portal
    if (!achievementPortalCompleted) {
        PLAYER.portalCounter++;
        if(PLAYER == player1){
            localStorage.setItem('portalCounterP1', PLAYER.portalCounter);
        }else{
            localStorage.setItem('portalCounterP2', PLAYER.portalCounter);
        }
        if (PLAYER.portalCounter >= 15) {
            achievementPortalCompleted = true;
            localStorage.setItem('achievementPortalCompleted', 'true');
            queueAchievement("./res/achievements/portal.png", "Let's hope it doesn't teleport you to the Nether", "./res/img/achievement_silver.png");
            achievementDoneInTheList("Let's hope it doesn't teleport you to the Nether");
        }
    }
}

const achievementPunchWall = (PLAYER) => {
    // Achievement - Punch Wall
    if (!achievementPunchWallCompleted) {
        PLAYER.punchWallCounter++;
        if(PLAYER == player1){
            localStorage.setItem('punchWallCounterP1', PLAYER.punchWallCounter);
        }else{
            localStorage.setItem('punchWallCounterP2', PLAYER.punchWallCounter);
        }
        localStorage.setItem('punchWallCounter', PLAYER.punchWallCounter);
        if (PLAYER.punchWallCounter == 10) {
            achievementPunchWallCompleted = true;
            localStorage.setItem('achievementPunchWallCompleted', 'true');
            queueAchievement("./res/achievements/punch.png", "You are stronger than One Punch Man", "./res/img/achievement_silver.png");
            achievementDoneInTheList("You are stronger than One Punch Man");
        }
    }
}

const achievementAfk = () => {
    // Achievement - Afk
    if (!achievementAfkCompleted && afkTimeCounter >= 60) {
        achievementAfkCompleted = true;
        localStorage.setItem('achievementAfkCompleted', 'true');
        queueAchievement("./res/achievements/afk.png", "Well, just sleep, I'll wait...", "./res/img/achievement_silver.png");
        achievementDoneInTheList("Well, just sleep, I'll wait...");
        clearInterval(afkTimerInterval);
    }
}

const achievementThatWasClose = () => {
    // Achievement - That was close
    if (!achievementThatWasCloseCompleted && helpNum != 14) {
        if (seconds <= 3) {
            achievementThatWasCloseCompleted = true;
            localStorage.setItem('achievementThatWasCloseCompleted', 'true');
            queueAchievement("./res/achievements/that_was_close.png", "THAT WAS CLOSE!", "./res/img/achievement_silver.png");
            achievementDoneInTheList("THAT WAS CLOSE!");
        }
    }
}

const achievementPipe = (PLAYER) => {
    // Achievement - Pipe
    if (!achievementPipeCompleted) {
        PLAYER.pipeCounter++;
        if(PLAYER == player1){
            localStorage.setItem('pipeCounterP1', PLAYER.pipeCounter);
        }else{
            localStorage.setItem('pipeCounterP2', PLAYER.pipeCounter);
        }
        if (PLAYER.pipeCounter == 5) {
            achievementPipeCompleted = true;
            localStorage.setItem('achievementPipeCompleted', 'true');
            queueAchievement("./res/achievements/pipe.png", "These pipes are better than the green ones, right?", "./res/img/achievement_silver.png");
            achievementDoneInTheList("These pipes are better than the green ones, right?");
        }
    }
}

const achievementShoes = (PLAYER) => {
    // Achievement - Shoes
    if (!achievementShoesCompleted && PLAYER.velocity >= 15.5 && !PLAYER.inPipe) {
        achievementShoesCompleted = true;
        localStorage.setItem('achievementShoesCompleted', 'true');
        queueAchievement("./res/achievements/shoes.png", "Don't your legs hurt from the fall?", "./res/img/achievement_silver.png");
        achievementDoneInTheList("Don't your legs hurt from the fall?");
    }
}

const achievementJumpPad = (PLAYER) => {
    // Achievement - Jump Pad
    if (!achievementJumpPadCompleted && PLAYER.canUseJumpPad && !PLAYER.canOrbJump) {
        PLAYER.jumpPadCounter++;
        if(PLAYER == player1){
            localStorage.setItem('jumpPadCounterP1', PLAYER.jumpPadCounter);
        }else{
            localStorage.setItem('jumpPadCounterP2', PLAYER.jumpPadCounter);
        }
        if (PLAYER.jumpPadCounter >= 25) {
            achievementJumpPadCompleted = true;
            localStorage.setItem('achievementJumpPadCompleted', 'true');
            queueAchievement("./res/achievements/jump_pad.png", "To infinity and BEYOND!", "./res/img/achievement_silver.png");
            achievementDoneInTheList("To infinity and BEYOND!");
        }
    }
}

const achievementGravityOrb = (PLAYER) => {
    // Achievement - Gravity Orb
    if (!achievementGravityOrbCompleted) {
        PLAYER.orbGravityCounter++;
        if(PLAYER == player1){
            localStorage.setItem('orbGravityCounterP1', PLAYER.orbGravityCounter);
        }else{
            localStorage.setItem('orbGravityCounterP2', PLAYER.orbGravityCounter);
        }
        if (PLAYER.orbGravityCounter >= 25) {
            achievementGravityOrbCompleted = true;
            localStorage.setItem('achievementGravityOrbCompleted', 'true');
            queueAchievement("./res/achievements/gravity_orb.png", "Well, this is not Geometry Dash", "./res/img/achievement_silver.png");
            achievementDoneInTheList("Well, this is not Geometry Dash");
        }
    }
}

const achievementCastle = () => {
    // Achievement - Castle Dungeon Completed
    if (!achievementCastleCompleted) {
        achievementCastleCompleted = true;
        localStorage.setItem('achievementCastleCompleted', 'true');
        queueAchievement("./res/achievements/castle.png", "Castle Dungeon COMPLETED!", "./res/img/achievement_gold.png");
        achievementDoneInTheList("Castle Dungeon COMPLETED!");
    }
}

const achievementSteampunk = () => {
    // Achievement - Steampunk Dungeon Completed
    if (!achievementSteampunkCompleted) {
        achievementSteampunkCompleted = true;
        localStorage.setItem('achievementSteampunkCompleted', 'true');
        queueAchievement("./res/achievements/steampunk.png", "Steampunk Dungeon COMPLETED!", "./res/img/achievement_gold.png");
        achievementDoneInTheList("Steampunk Dungeon COMPLETED!");
    }
}

const achievementSpaceship = () => {
    // Achievement - Spaceship Dungeon Completed
    if (!achievementSpaceshipCompleted) {
        achievementSpaceshipCompleted = true;
        localStorage.setItem('achievementSpaceshipCompleted', 'true');
        queueAchievement("./res/achievements/spaceship.png", "Spaceship Dungeon COMPLETED!", "./res/img/achievement_gold.png");
        achievementDoneInTheList("Spaceship Dungeon COMPLETED!");
    }
}

const achievementSoMuchTime = () => {
    // Achievement - So much time
    if (!achievementSoMuchTimeCompleted && helpNum != 14) {
        if (seconds >= 20) {
            achievementSoMuchTimeCompleted = true;
            localStorage.setItem('achievementSoMuchTimeCompleted', 'true');
            queueAchievement("./res/achievements/so_much_time.png", "So much time to give away...", "./res/img/achievement_gold.png");
            achievementDoneInTheList("So much time to give away...");
        }
    }
}

const achievementJumpOrb = (PLAYER) => {
    // Achievement - Jump Orb
    if (!achievementJumpOrbCompleted && !PLAYER.canUseJumpPad && PLAYER.canOrbJump) {
        PLAYER.orbCounter++;
        if(PLAYER == player1){
            localStorage.setItem('orbCounterP1', PLAYER.orbCounter);
        }else{
            localStorage.setItem('orbCounterP2', PLAYER.orbCounter);
        }
        if (PLAYER.orbCounter >= 100) {
            achievementJumpOrbCompleted = true;
            localStorage.setItem('achievementJumpOrbCompleted', 'true');
            queueAchievement("./res/achievements/jump_orb.png", "Do you finally understand how the Jump Orb works?", "./res/img/achievement_gold.png");
            achievementDoneInTheList("Do you finally understand how the Jump Orb works?");
        }
    }
}

const achievementHundred = () => {
    // Achievement - 100 Deaths
    if (!achievementHundredCompleted) {
        if (deathCounter == 100) {
            achievementHundredCompleted = true;
            localStorage.setItem('achievementHundredCompleted', 'true');
            queueAchievement("./res/achievements/hundred.png", "Congratulations! You have already died 100 times...", "./res/img/achievement_gold.png");
            achievementDoneInTheList("Congratulations! You have already died 100 times...");
        }
    }
}

const achievementKing = () => {
    // Achievement - King
    if (!achievementKingCompleted && castleDungeonCompleted && steampunkDungeonCompleted && spaceshipDungeonCompleted) {
        achievementKingCompleted = true;
        localStorage.setItem('achievementKingCompleted', 'true');
        queueAchievement("./res/achievements/king.png", "Did you beat them all? You are the king of Leap&Run", "./res/img/achievement_gold.png");
        achievementDoneInTheList("Did you beat them all? You are the king of Leap&Run");
    }
}

const achievementFriend = () => {
    //Achievement - Friend
    if (!achievementFriendCompleted && (playingMultiplayer || deviceDetect)) {
        achievementFriendCompleted = true;
        localStorage.setItem('achievementFriendCompleted', 'true');
        queueAchievement("./res/achievements/friend.png", "The Power of FRIENDSHIP!", "./res/img/achievement_silver.png");
        achievementDoneInTheList("The Power of FRIENDSHIP!");
    }
}

const achievementGod = () => {
    // Achievement - God 
    if (!achievementGodCompleted && hearts == 3) {
        achievementGodCompleted = true;
        localStorage.setItem('achievementGodCompleted', 'true');
        queueAchievement("./res/achievements/god.png", "Without any death? I think you are god.", "./res/img/achievement_gold.png");
        achievementDoneInTheList("Without any death? I think you are god.");
    }
}

const achievementGoldenEgg = () => {
    // Achievement - Golden Egg
    if (!achievementEggCompleted) {
        achievementEggCompleted = true;
        localStorage.setItem('achievementEggCompleted', 'true');
        queueAchievement("./res/achievements/golden_egg.png", "You found me... But why did you wait?", "./res/img/achievement_gold.png");
        achievementDoneInTheList("You found me... But why did you wait?");
    }
}
