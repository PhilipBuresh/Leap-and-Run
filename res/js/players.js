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
    //Moving platform
    onMovingPlatform : false,
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
    //Moving platform
    onMovingPlatform : false,
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