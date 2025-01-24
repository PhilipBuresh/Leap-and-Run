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