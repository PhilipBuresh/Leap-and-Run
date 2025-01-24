const buttons = document.getElementById("buttons");
const clock = document.getElementById("clock");
const button_up = document.getElementById("button_up");
const button_punch = document.getElementById("button_punch");
const button_down = document.getElementById("button_down");
const button_enter = document.getElementById("button_enter");
const button_left = document.getElementById("button_left");
const button_right = document.getElementById("button_right");

const  goFullScreen = () => {
    const element = document.documentElement;
    if (element.requestFullscreen) {
        element.requestFullscreen();
    } else if (element.mozRequestFullScreen) { // Firefox
        element.mozRequestFullScreen();
    } else if (element.webkitRequestFullscreen) { // Chrome, Safari and Opera
        element.webkitRequestFullscreen();
    } else if (element.msRequestFullscreen) { // IE/Edge
        element.msRequestFullscreen();
    }
}


const deviceDetect = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
if (deviceDetect) {
    playButton.innerHTML = "PLAY!";
    playButtonMulti.style.display = "none";
    clock.style.display = "none";
}

document.body.onclick = () => {
    if(deviceDetect){
        goFullScreen();
    }
}

const go_up = () => {
    afkAchievementProgress();
    button_up.style.filter = "invert(0)";
    if (player1.canStandUp && inGame && !player1.isJumping && !player1.flying) {
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
    }else if(inGame && !player1.isFlying && player1.flying){
        player1.isFlying = true;
        cancelAnimationFrame(player1.animationIdFly);
        flyUpAndDown(player1);
    }
}

const go_up_return = () => {
    button_up.style.filter = "invert(0.15)";
    afkAchievementProgress();
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

const go_punch = () => {
    button_punch.style.filter = "invert(0)";
    afkAchievementProgress();
    if(!player1.alreadyPunched && !player1.ladderCol && !player1.inPipe && inGame){
        punch(player1);
    }
    player1.alreadyPunched = true;
}

const go_punch_return = () => {
    button_punch.style.filter = "invert(0.15)";
    afkAchievementProgress();
    player1.alreadyPunched = false;
}

const go_down = () => {
    button_down.style.filter = "invert(0)";
    afkAchievementProgress();
    if(!player1.crouched && !player1.punched && !player1.downPressed && !player1.ladderCol && inGame){
        crouch(player1);     
    } else if (player1.ladderCol && !player1.alreadyGoingDown){
        sfx_climb.pause();
        goingDown(player1);
    }
    player1.downPressed = true;
}

const go_down_return = () => {
    button_down.style.filter = "invert(0.15)";
    afkAchievementProgress();
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

const go_right = () => {
    button_right.style.filter = "invert(0)";
    afkAchievementProgress();
    if (player1.isMovingRight == false) {
        player1.isMovingRight = true;
        player1.turnedRight = true;
        player1.turnedLeft = false;
        cancelAnimationFrame(player1.animationIdRight);
        moveRight(player1);
    }
}

const go_right_return = () => {
    button_right.style.filter = "invert(0.15)";
    afkAchievementProgress();
    player1.isMovingRight = false;
    if(player1.velocityRight <= player1.velocityLeft && player1.isMovingLeft){ //Fixing switching sides
        player1.turnedLeft = true;
        player1.turnedRight = false;
    }
}

const go_left = () => {
    button_left.style.filter = "invert(0)";
    afkAchievementProgress();
    if (player1.isMovingLeft == false) {
        player1.isMovingLeft = true;
        player1.turnedRight = false;
        player1.turnedLeft = true;
        cancelAnimationFrame(player1.animationIdLeft);
        moveLeft(player1);
    }
}

const go_left_return = () => {
    button_left.style.filter = "invert(0.15)";
    afkAchievementProgress();
    player1.isMovingLeft = false;
    if(player1.velocityRight > player1.velocityLeft && player1.isMovingRight){ //Fixing switching sides
        player1.turnedLeft = false;
        player1.turnedRight = true;
    }
}