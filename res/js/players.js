//Player 1
const player1 = {
    // Coordinates
    x : 40,
    y : 500,
    height : 40,
    width : 30,
    castleX : 35,
    steampunkX : 35,
    spaceshipX : 40,
    castleY : 500,
    steampunkY : 500,
    spaceshipY : 500,
    // Frames
    currentFrameStand : 0,
    currentFramePunch : 0,
    currentFrameRun : 0,
    currentFrameCrouch : 0,
    // Help punch variables
    punched : false,
    punchCooldown : false,
    alreadyPunched : false,
    punchCounter : 0,
    punchWallCounter : 0,
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
    crouchCounter : 0,
    // Gravity
    onRock : false,
    onWood : false,
    onMetal : false,
    orbUsed : false,
    canOrbJump : false,
    gravityId : null,
    orbCounter : 0,
    orbGravityCounter : 0,
    portalCounter : 0,
    isTouchingGravityOrb : false,
    // Ladder
    ladderCol : false,
    canGravityActivate : false,
    alreadyGoingDown : false,
    wPressed : false,
    // Jump
    headHit : false,
    bounced : false,
    jumpInterval : null,
    jumpIntervalSet : false,
    isJumping : null,
    canUseJumpPad : false,
    headHitCounter : 0,
    jumpPadCounter : 0,
    // Doors
    doorCol : false,
    closingDoorCol : false,
    // Boss
    canAttack : false,
    //Slide
    canSlideOnWall : false,
    slideJumped : false,
    //Moving platform
    onMovingPlatform : false,
    onMovingPlatformDelaySet : false,
    // Pipe
    inPipe : false,
    pipeCounter : 0,
    inPipeTimeout : null,
    pipeShake : null,
    // Button
    canUseSwitch : false,
    onHologram : false,
    inHologram : false,
    // Boost
    boostCollision : false,
    reversedGravityValue : 0,
    // Reversed Gravity
    reversedGravity : false,
    reversedGravityNumber : 1,
    reversedGravityCrouchNum : 0,
    canOrbGravity : false,
    gravityOrbUsed : false,
    // Flying
    flying : false,
    velocityFly : 0,
    animationIdFly : null,
    nowFly : null,
    thenFly : Date.now(),
    deltaFly : null,
    isFlying : false,
    canFlyUp : true,
    // Laser bullet
    laserBulletId : null,
    nowLaser : null,
    thenLaser : Date.now(),
    deltaLaser : null,
    laserX : 0,
    laserY : 0,
    wasTurnedRight : true,
    wasTurnedLeft : false,
    bulletSide : 0,
    bulletFrame : 0,
    bulletVelocity : 0,
    bulletBossHit : false,
    // Hats
    hatY : 0,
    hatX : 0,
    reversedGravityHat : 0,
    hatNumber : 0,
    saveHatNumber : 0,
    // Shine
    frameShine : 0,
    shineActivated : false,
}
//Player 2
const player2 = {
    // Coordinates
    x : 70,
    y : 500,
    height : 40,
    width : 30,
    castleX : 70,
    steampunkX : 70,
    spaceshipX : 70,
    castleY : 500,
    steampunkY : 500,
    spaceshipY : 500,
    // Frames
    currentFrameStand : 0,
    currentFramePunch : 0,
    currentFrameRun : 0,
    currentFrameCrouch : 0,
    // Help punch variables
    punched : false,
    punchCooldown : false,
    alreadyPunched : false,
    punchCounter : 0,
    punchWallCounter : 0,
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
    crouchCounter : 0,
    // Gravity
    onRock : false,
    onWood : false,
    onMetal : false,
    orbUsed : false,
    canOrbJump : false,
    gravityId : null,
    orbCounter : 0,
    orbGravityCounter : 0,
    portalCounter : 0,
    isTouchingGravityOrb : false,
    // Ladder
    ladderCol : false,
    canGravityActivate : false,
    alreadyGoingDown : false,
    wPressed : false,
    // Jump
    headHit : false,
    bounced : false,
    jumpInterval : null,
    jumpIntervalSet : false,
    isJumping : null,
    canUseJumpPad : false,
    headHitCounter : 0,
    jumpPadCounter : 0,
    // Doors
    doorCol : false,
    closingDoorCol : false,
    // Boss
    canAttack : false,
    //Slide
    canSlideOnWall : false,
    slideJumped : false,
    //Moving platform
    onMovingPlatform : false,
    onMovingPlatformDelaySet : false,
    // Pipe
    inPipe : false,
    pipeCounter : 0,
    inPipeTimeout : null,
    pipeShake : null,
    // Button
    canUseSwitch : false,
    onHologram : false,
    inHologram : false,
    // Boost
    boostCollision : false,
    reversedGravityValue : 0,
    // Reversed Gravity
    reversedGravity : false,
    reversedGravityNumber : 1,
    reversedGravityCrouchNum : 0,
    canOrbGravity : false,
    gravityOrbUsed : false,
    // Flying
    flying : false,
    velocityFly : 0,
    animationIdFly : null,
    nowFly : null,
    thenFly : Date.now(),
    deltaFly : null,
    isFlying : false,
    canFlyUp : true,
    // Laser bullet
    laserBulletId : null,
    nowLaser : null,
    thenLaser : Date.now(),
    deltaLaser : null,
    laserX : 0,
    laserY : 0,
    wasTurnedRight : true,
    wasTurnedLeft : false,
    bulletSide : 0,
    bulletFrame : 0,
    bulletVelocity : 0,
    bulletBossHit : false,
    // Hats
    hatY : 0,
    hatX : 0,
    reversedGravityHat : 0,
    hatNumber : 0,
    saveHatNumber : 0,
    // Shine
    frameShine : 0,
    shineActivated : false,
}

let playingMultiplayer = false;

//This will spawn you
let spawnCords = () => {
    player1.x = 35;
    player1.y = 500;
    player2.x = 70;
    player2.y = 500;
}
spawnCords();

//AFK TIMER
let afkTimerInterval;
let afkTimeCounter;

const afkTimer = () => {
    afkTimerInterval = setInterval(() => {
        if(inGame){
            afkTimeCounter++;
            achievementAfk();
        }
    }, 1000);
}

// SAVE CORDS
const saveCords = () => {
    //console.log("SAVE ", playingCastle, playingSteamPunk, playingSpace)
    if(playingCastle){
        player1.castleX = player1.x;
        player1.castleY = player1.y;
        if(playingMultiplayer){
            player2.castleX = player2.x;
            player2.castleY = player2.y;
        }
        localStorage.setItem("castleCords", JSON.stringify({
            player1X: player1.castleX,
            player1Y: player1.castleY,
            player2X: player2.castleX,
            player2Y: player2.castleY
        }));
    }else if(playingSteamPunk){
        player1.steampunkX = player1.x;
        player1.steampunkY = player1.y;
        if(playingMultiplayer){
            player2.steampunkX = player2.x;
            player2.steampunkY = player2.y;
        }
        localStorage.setItem("steampunkCords", JSON.stringify({
            player1X: player1.steampunkX,
            player1Y: player1.steampunkY,
            player2X: player2.steampunkX,
            player2Y: player2.steampunkY
        }));
    }else if(playingSpace){
        player1.spaceshipX = player1.x;
        player1.spaceshipY = player1.y;
        if(playingMultiplayer){
            player2.spaceshipX = player2.x;
            player2.spaceshipY = player2.y;
        }
        localStorage.setItem("spaceCords", JSON.stringify({
            player1X: player1.spaceshipX,
            player1Y: player1.spaceshipY,
            player2X: player2.spaceshipX,
            player2Y: player2.spaceshipY
        }));
    }
}

// LOAD CORDS
const loadCords = () => {
    //console.log("LOAD ", playingCastle, playingSteamPunk, playingSpace)
    if(playingCastle){
        let data = JSON.parse(localStorage.getItem("castleCords"));
        if(data){
            player1.castleX = data.player1X;
            player1.castleY = data.player1Y;
            player1.x = player1.castleX;
            player1.y = player1.castleY;
            if(playingMultiplayer){
                player2.castleX = data.player2X;
                player2.castleY = data.player2Y;
                player2.x = player2.castleX;
                player2.y = player2.castleY;
            }else{
                player2.x = 10000;
                player2.y = 10000;
            }
        }else{
            player1.x = player1.castleX;
            player1.y = player1.castleY;
            if(playingMultiplayer){
                player2.x = player2.castleX;
                player2.y = player2.castleY;
            }else{
                player2.x = 10000;
                player2.y = 10000;
            } 
        }
    }else if(playingSteamPunk){
        let data = JSON.parse(localStorage.getItem("steampunkCords"));
        if(data){
            player1.steampunkX = data.player1X;
            player1.steampunkY = data.player1Y;
            player1.x = player1.steampunkX;
            player1.y = player1.steampunkY;
            if(playingMultiplayer){
                player2.steampunkX = data.player2X;
                player2.steampunkY = data.player2Y;
                player2.x = player2.steampunkX;
                player2.y = player2.steampunkY;
            }else{
                player2.x = 10000;
                player2.y = 10000;
            }
        }else{
            player1.x = player1.steampunkX;
            player1.y = player1.steampunkY;
            if(playingMultiplayer){
                player2.x = player2.steampunkX;
                player2.y = player2.steampunkY;
            }else{
                player2.x = 10000;
                player2.y = 10000;
            }   
        }
    }else if(playingSpace){
        let data = JSON.parse(localStorage.getItem("spaceCords"));
        if(data){
            player1.spaceshipX = data.player1X;
            player1.spaceshipY = data.player1Y;
            player1.x = player1.spaceshipX;
            player1.y = player1.spaceshipY;
            if(playingMultiplayer){
                player2.spaceshipX = data.player2X;
                player2.spaceshipY = data.player2Y;
                player2.x = player2.spaceshipX;
                player2.y = player2.spaceshipY;
            }else{
                player2.x = 10000;
                player2.y = 10000;
            }
        }else{
            player1.x = player1.spaceshipX;
            player1.y = player1.spaceshipY;
            if(playingMultiplayer){
                player2.x = player2.spaceshipX;
                player2.y = player2.spaceshipY;
            }else{
                player2.x = 10000;
                player2.y = 10000;
            }
        }
    }
}