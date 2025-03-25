//----------------------------------------BOSS LEVEL
const bossLevel = () => {

    c.save();
    c.scale(2,2) // 1. Camera
    reaperBossCamera1 = true;
    spiderBossCamera1 = false;
    spiderBossCamera2 = false;
    reaperBossCamera2 = false;
    alienBossCamera1 = false;
    alienBossCamera2 = false;
    cameraMoveXCount = 0;
    cameraX = 0;
    cameraY = 0;
    canCameraStop = false;
    c.translate(-canvas.width / 4, -100)

    boss_name.innerHTML = "Crimson Reaper"
    
    setTimeout(() => {
        cameraMove();   
    }, 500);

    inGame = false;
    firstReaperAttack = true;
    reaperBossNotHere = false;
    reaperBossFlipped = false;
    bossPunchedNumber = 0;
    cancelAnimationFrame(bossMoveXId);
    cancelAnimationFrame(bossMoveYId);
    clearInterval(bossAttackGenerator)

    player1.turnedRight = true;
    player2.turnedRight = true;
    player1.turnedLeft = false;
    player2.turnedLeft = false;

    finalDoorUnlocked = false;
    reaperPhase1 = false;
    reaperPhase2 = false;
    reaperPhase3 = false;
    reaperPhase4 = false;
    reaperPhase5 = false;
    shieldActive = false;

    divider1.style.opacity = 1;
    divider2.style.opacity = 1;
    divider3.style.opacity = 1;
    divider4.style.opacity = 1;

    alien_divider1.style.opacity = 0;
    alien_divider2.style.opacity = 0;
    alien_divider3.style.opacity = 0;

    spider1X = 256;
    spider2X = 416;
    spider3X = 576;
    spider4X = 736;

    if(playingMultiplayer){
        setTarget();
    }
    gravity(player1);
    if(playingMultiplayer){
        gravity(player2)
    }
    myHp.style.display = "flex";
    hps.style.display = "flex";
    heart1.style.display = "block";
    heart2.style.display = "block";
    heart3.style.display = "block";
    hearts = 3;
    bossX = 474;
    bossY = 400;
    playingBossFight = true;
    music.currentTime = 0;
    music.src = "./res/music_castle/reaperboss.mp3";
    doorsTime = 76000;
    music.play();
    setTimeout(() => {
        generatorAttackFunction();
    }, 1200);
    setTimeout(() => {
        sfx_boss_talk.src = "./res/sfx/killyou.mp3";
        sfx_boss_talk.play();
    }, 1500);
    spawnCords = () => {
        player1.x = 485;
        player1.y = 216;
        if(playingMultiplayer){
            player2.x = 515 ;
            player2.y = 216;        
        }
    }
    spawnCords();
    setTimeout(() => {
        inGame = true;
        cancelAnimationFrame(CameraMovingId)
        reaperBossCamera1 = false;
        reaperBossCamera2 = true;
        cameraY = 0;
        cameraMoveXCount = 0;
        cameraScale();
        cameraMove();
        reaperStartMoving = setTimeout(() => {
            bossMoveX();
            bossMoveY();
        }, 1200);
    }, 4000);
    breakBottom = setTimeout(() => {
        for (let index = 0; index < currentPlatform.length; index++) {
            if(currentPlatform[index] == 6){
                currentPlatform[index] = 0;
            }
        }
        shake();
        gravity(player1);
        if(playingMultiplayer){
            gravity(player2)
        }
        divider4.style.opacity = 0;
        reaperPhase2 = true;
        shieldActive = false;
    }, 13000);
    bossLava = setTimeout(() => {
        shake()
        risingLavaActivated = true;
        rising.style.display = "block";
        divider3.style.opacity = 0;
        reaperPhase2 = false;
        reaperPhase3 = true;
        shieldActive = false;
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
        divider2.style.opacity = 0;
        reaperPhase3 = false;
        reaperPhase4 = true;
        shieldActive = false;
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
        divider1.style.opacity = 0;
        reaperPhase4 = false;
        reaperPhase5 = true;
        shieldActive = false;
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

// SPIDER Boss Level

let finalDoorBossInterval;

// Spider Boss Phases
let spiderFirstJump, spiderStartAttacking, startMovingWalls, offSpiderAttack, spiderNowDoLargeJumps, 
spiderBossPhase2, spidersGoingDown, spiderBossPhase3, spidersGoingUp, spiderBossPhase4, offDarknessSpiderBoss, 
spiderStartAttacking2, spiderBossPhase5


const clearSpiderBossTimeouts = () => {
    clearTimeout(spiderFirstJump)
    clearTimeout(spiderStartAttacking)
    clearTimeout(startMovingWalls)
    clearTimeout(offSpiderAttack)
    clearTimeout(spiderNowDoLargeJumps)
    clearTimeout(spiderBossPhase2)
    clearTimeout(spidersGoingDown)
    clearTimeout(spiderBossPhase3)
    clearTimeout(spidersGoingUp)
    clearTimeout(spiderBossPhase4)
    clearTimeout(offDarknessSpiderBoss)
    clearTimeout(spiderStartAttacking2)
    clearTimeout(spiderBossPhase5)
}

const spiderBossLevel = () => {

    c.save();
    c.scale(2,2) // 1. Camera
    spiderBossCamera1 = true
    spiderBossCamera2 = false
    reaperBossCamera1 = false
    reaperBossCamera2 = false
    alienBossCamera1 = false;
    alienBossCamera2 = false;
    cameraMoveXCount = 0;
    cameraX = 0;
    cameraY = 0;
    canCameraStop = false;
    c.translate(0, -200)
    inGame = false;
    cameraMove();

    boss_name.innerHTML = "Robotic Spider"

    player1.turnedRight = true;
    player2.turnedRight = true;
    player1.turnedLeft = false;
    player2.turnedLeft = false;

    divider1.style.opacity = 1;
    divider2.style.opacity = 1;
    divider3.style.opacity = 1;
    divider4.style.opacity = 1;
    shieldActive = false;

    alien_divider1.style.opacity = 0;
    alien_divider2.style.opacity = 0;
    alien_divider3.style.opacity = 0;

    bossPunchedNumber = 0;
    spiderBossDead = false;
    spiderPhase2 = false;
    spiderPhase3 = false;
    spiderPhase4 = false;
    spiderPhase5 = false;
    spiderBossNotHere = false;
    spiderBossFlipped = false;
    generatorInterval = 1000;
    finalDoorUnlocked = false;
    setTimeout(() => { //delete
        gravity(player1);
        if(playingMultiplayer){
            gravity(player2)
        }
    }, 10);
    spawnCords = () => {
        player1.x = 170;
        player1.y = 440;
        if(playingMultiplayer){
            player2.x = 200;
            player2.y = 440;       
        }
    }
    spawnCords();
    spawnMovingPlatformCords = () => {
        xMovingPlatform = 10000;
        yMovingPlatform = 10000;
    }
    spawnMovingPlatformCords();
    spawnSawCords = () => {
        xSaw = 226;
        ySaw = 175;
    }
    spawnSawCords();
    sawVelocitySpeeder = 0;
    myHp.style.display = "flex";
    hps.style.display = "flex";
    heart1.style.display = "block";
    heart2.style.display = "block";
    heart3.style.display = "block";
    hearts = 3;
    bossX = 10000;
    bossY = 450;

    music.currentTime = 0;
    music.src = "./res/music_steampunk/spiderboss.mp3";
    doorsTime = 90000;
    music.play();
    playingBossFight = true;
    
    spiderFirstJump = setTimeout(() => { // Spider First Jump
        smallSpiderJump = false;
        bossX = canvas.width/2 - 40;
        bossY = -100;
        spiderBossJumping = true;
        velocitySpiderJump = 8;
        velocitySpiderDrop = 1;
        spiderJump();
    }, 2200);

    spiderStartAttacking = setTimeout(() => { // Start Attacking - Spider
        generatorSpiderFunction();
    }, 5000);

    startMovingWalls = setTimeout(() => { // Start moving walls
        shake();
        wallSpiderMove();
    }, 12000);

    offSpiderAttack = setTimeout(() => { // OFF Attacking - Spider
        clearInterval(spiderBossGenerator);
    }, 16000);

    spiderNowDoLargeJumps = setTimeout(() => { // Now Spider Boss can do large jumps
        spiderBossNumber = 1;
        currentFrameSpiderBoss = 0;
        setTimeout(() => {
            generatorSpiderFunction();
        }, 4000);
    }, 19800);

    spiderBossPhase2 = setTimeout(() => { // SAW moving ------- PHASE 2
        sawVelocitySpeeder = 1.027;
        shake();
        divider4.style.opacity = 0;
        spiderPhase2 = true;
        shieldActive = false;
    }, 20500);

    spidersGoingDown = setTimeout(() => { // Spiders going down
        spider1Y = -500;
        spider2Y = -500;
        spider3Y = -500;
        spider4Y = -500;
        spider1X = 256;
        spider2X = 416;
        spider3X = 576;
        spider4X = 736;
        spiderGoingDown = true;
        spidersVelocity = 8;
        hangingSpiders();
    }, 34500);
    
    spiderBossPhase3 = setTimeout(() => { // Spiders attacking ------- PHASE 3
        spidersOrderNum = 1;
        startingMovingInSpiderBoss = true;
        canSpidersMoving = true;
        spiderGoingDown = false;
        divider3.style.opacity = 0;
        spiderPhase2 = false;
        spiderPhase3 = true;
        shieldActive = false;
        hangingSpiders();
    }, 36500);

    spidersGoingUp = setTimeout(() => { // Spiders going up
        canSpidersMoving = false;
        spiderGoingDown = false;
        spiderGoingUp = true;
        spidersVelocity = 0.1;
        hangingSpiders();
    }, 51900);

    spiderBossPhase4 = setTimeout(() => { // Darkness and black transition ------- PHASE 4
        sawVelocitySpeeder = 0;
        black.style.transition = "opacity 0s"
        black.style.opacity = 1;
        setTimeout(() => {
            black.style.transition = "opacity 0.3s"
            black.style.opacity = 0;
            darkness = true;
            divider2.style.opacity = 0;
            spiderPhase3 = false;
            spiderPhase4 = true;
            shieldActive = false;
            shake();
        }, 20);
    }, 53800);

    offDarknessSpiderBoss = setTimeout(() => { // OFF Darkness, black transition and spiders going down
        black.style.transition = "opacity 0s"
        black.style.opacity = 1;
        setTimeout(() => {
            black.style.transition = "opacity 0.3s"
            black.style.opacity = 0;
            darkness = false;
            shake();
            spiderGoingUp = false;
            spiderGoingDown = true;
            spider1Y = -500;
            spider2Y = -500;
            spider3Y = -500;
            spider4Y = -500;
            spidersVelocity = 8;
            hangingSpiders();
        }, 20);
    }, 70000);

    spiderStartAttacking2 = setTimeout(() => { // // Spiders attacking
        spidersOrderNum = 1;
        startingMovingInSpiderBoss = true;
        spiderGoingDown = false;
        canSpidersMoving = true;
        hangingSpiders();
    }, 72000);

    spiderBossPhase5 = setTimeout(() => { // Faster Saw and Boss is now more angry ------- PHASE 5
        clearInterval(spiderBossGenerator);
        generatorInterval = 800;
        generatorSpiderFunction();
        sawVelocitySpeeder = 1.027 * 4;
        divider1.style.opacity = 0;
        spiderPhase4 = false;
        spiderPhase5 = true;
        shieldActive = false;
    }, 72500);
}

//Alien Phases
let alienPhase1 = false;
let alienPhase2 = false;
let alienPhase3 = false;
let alienPhase4 = false;

let alienLasers1;
let alienTimeouts = [];

let alienBossMode = false;

const clearAllAlienTimeouts = () => {
    for (let i = 0; i < alienTimeouts.length; i++) {
        clearTimeout(alienTimeouts[i]);
    }
    alienTimeouts = [];
    cancelAnimationFrame(alienBulletId);
    offLasersInAlienBossFight();
    cancelAnimationFrame(meteoriteMovementId);
    meteorite1 = {x: 10000, y: -10000, xSpeed: 1, ySpeed: 1, size: 32};
    meteorite2 = {x: 10000, y: -10000, xSpeed: 1, ySpeed: 1, size: 64};
    meteorite3 = {x: 10000, y: -10000, xSpeed: 1, ySpeed: 1, size: 96};
    clearInterval(alienLasers1);
}

const alienBossLevel = () => {

    c.save();
    c.scale(2,2) // 1. Camera
    cameraX = 0;
    cameraY = 0;
    c.translate(-256, -280)
    inGame = false;
    alienTimeouts.push(setTimeout(() => {
        spiderBossCamera1 = false;
        spiderBossCamera2 = false;
        reaperBossCamera1 = false;
        reaperBossCamera2 = false;
        alienBossCamera1 = true;
        alienBossCamera2 = false;
        cameraMoveXCount = 0;
        canCameraStop = false;
        cameraMove();  
    }, 200));

    alienAngry = 0;
    canAlienHit = true;
    alienHit = 0;
    smokeActivated = false;
    boss_name.innerHTML = "Mechanic Alien"

    risingLavaActivated = false;
    risingIncreaseValue = 0.6;
    lavaIncreaseValue = 4.45;
    lavaY = 576;
    risingPercent = risingPercentOriginal;
    rising.style.bottom = risingPercent + "%"
    rising.style.display = "none";
    spawnMovingPlatformCords = () => {
        xMovingPlatform = 10000;
        yMovingPlatform = 10000;
    }
    spawnMovingPlatformCords();

    //smallDarknessAlienBoss = true
    btnBackUsedinAlienLevel = false;

    player1.turnedRight = true;
    player2.turnedRight = true;
    player1.turnedLeft = false;
    player2.turnedLeft = false;

    divider1.style.opacity = 0;
    divider2.style.opacity = 0;
    divider3.style.opacity = 0;
    divider4.style.opacity = 0;

    alien_divider1.style.opacity = 1;
    alien_divider2.style.opacity = 1;
    alien_divider3.style.opacity = 1;
    shieldActive = false;

    myHp.style.display = "none";
    heart1.style.display = "none";
    heart2.style.display = "none";
    heart3.style.display = "none";
    hearts = 3;
    hps.style.display = "none"

    bossPunchedNumber = 0;
    spiderBossDead = false;
    spiderPhase2 = false;
    spiderPhase3 = false;
    spiderPhase4 = false;
    spiderPhase5 = false;
    spiderBossNotHere = false;
    spiderBossFlipped = false;
    generatorInterval = 1000;
    finalDoorUnlocked = false;

    alienPhase1 = false;
    alienPhase2 = false;
    alienPhase3 = false;
    alienPhase4 = false;
    currentFrameAlienBoss = 4;

    rightWallX = canvas.width - 64;
    leftWallX = -96;

    cancelAnimationFrame(alienBulletId);
    cancelAnimationFrame(alienMoveYId);
    cancelAnimationFrame(alienMoveXId);
    offLasersInAlienBossFight();
    cancelAnimationFrame(meteoriteMovementId);
    meteorite1 = {x: 10000, y: -10000, xSpeed: 1, ySpeed: 1, size: 32};
    meteorite2 = {x: 10000, y: -10000, xSpeed: 1, ySpeed: 1, size: 64};
    meteorite3 = {x: 10000, y: -10000, xSpeed: 1, ySpeed: 1, size: 96};

    spawnCords = () => {
        player1.x = canvas.width / 2 - 15;
        player1.y = 440;
        if(playingMultiplayer){
            player1.x = canvas.width / 2 - 30;
            player1.y = 440;
            player2.x = canvas.width / 2;
            player2.y = 440;       
        }
    }
    spawnCords();
    spawnMovingPlatformCords = () => {
        xMovingPlatform = 10000;
        yMovingPlatform = 10000;
    }

    bossX = canvas.width / 2 - 40;
    bossY = 80;

    music.currentTime = 0;
    //let musicTime = 96000;
    music.src = "./res/music_spaceship/alienboss.mp3";
    doorsTime = 109000;
    music.play();
    playingBossFight = true;

    alienTimeouts.push(setTimeout(() => {
        shake();
        //currentPlatform = [...map[15]];
        smallDarknessAlienBoss = false;
        inGame = true;
        risingLavaActivated = true;
        risingIncreaseValue = 0.75;
        rising.style.display = "block";
    }, 4100));

    alienTimeouts.push(setTimeout(() => {
        wallSpiderMove();
        shake();
    }, 11500));

    alienTimeouts.push(setTimeout(() => {
        risingLavaActivated = false;
        lavaIncreaseValue = 0;
    }, 18000));

    alienTimeouts.push(setTimeout(() => {
        shake();
        risingLavaActivated = false;
        lavaIncreaseValue = 3.6;
        lavaY = 576;
        risingPercent = risingPercentOriginal;
        rising.style.bottom = risingPercent + "%"
        rising.style.display = "none";
        black.style.transition = "opacity 0s"
        black.style.opacity = "1";
        shake();
        currentPlatform = [...map[15]];
        gravity(player1);
        if(playingMultiplayer){
            gravity(player2);
        }

        alienBossMode = true;
        myHp.style.display = "flex";
        heart1.style.display = "block";
        heart2.style.display = "block";
        heart3.style.display = "block";
        hearts = 3;

        alienAngry = 1;
    }, 19000));

    alienTimeouts.push(setTimeout(() => {
        black.style.transition = "opacity 0.3s"
        black.style.opacity = "0";
    }, 19010));

    alienTimeouts.push(setTimeout(() => {
        lasersVertical[1].frameLaserVertical = 0;
        lasersVertical[2].frameLaserVertical = 0;

        lasersVertical[21].frameLaserVertical = 0;
        lasersVertical[22].frameLaserVertical = 0;
    }, 19000));

    alienTimeouts.push(setTimeout(() => {
        lasersVertical[3].frameLaserVertical = 0;
        lasersVertical[4].frameLaserVertical = 0;

        lasersVertical[19].frameLaserVertical = 0;
        lasersVertical[20].frameLaserVertical = 0;
    }, 19250));

    alienTimeouts.push(setTimeout(() => {
        lasersVertical[11].frameLaserVertical = 0;

        lasersVertical[12].frameLaserVertical = 0;
    }, 20000));

    alienTimeouts.push(setTimeout(() => {
        lasersVertical[10].frameLaserVertical = 0;

        lasersVertical[13].frameLaserVertical = 0;
    }, 20250));

    alienTimeouts.push(setTimeout(() => {
        lasersHorizontal[8].frameLaserHorizontal = 0;
    }, 21100));

    alienTimeouts.push(setTimeout(() => {
        lasersHorizontal[7].frameLaserHorizontal = 0;
    }, 21250));

    alienTimeouts.push(setTimeout(() => {
        lasersHorizontal[6].frameLaserHorizontal = 0;
    }, 21400));

    alienTimeouts.push(setTimeout(() => {
        lasersHorizontal[5].frameLaserHorizontal = 0;
    }, 21550));

    alienTimeouts.push(setTimeout(() => {
        lasersHorizontal[4].frameLaserHorizontal = 0;
    }, 21700));

    alienTimeouts.push(setTimeout(() => {
        lasersHorizontal[3].frameLaserHorizontal = 0;
    }, 21850));

    alienTimeouts.push(setTimeout(() => {
        lasersVertical[1].frameLaserVertical = 0;
        lasersVertical[2].frameLaserVertical = 0;
        lasersVertical[3].frameLaserVertical = 0;
        lasersVertical[4].frameLaserVertical = 0;

        lasersVertical[19].frameLaserVertical = 0;
        lasersVertical[20].frameLaserVertical = 0;
        lasersVertical[21].frameLaserVertical = 0;
        lasersVertical[22].frameLaserVertical = 0;
    }, 22100));

    alienTimeouts.push(setTimeout(() => {
        lasersVertical[11].frameLaserVertical = 0;
        lasersVertical[12].frameLaserVertical = 0;
    }, 22800));
    
    alienTimeouts.push(setTimeout(() => {
        lasersVertical[3].frameLaserVertical = 0;
        lasersVertical[4].frameLaserVertical = 0;

        lasersVertical[19].frameLaserVertical = 0;
        lasersVertical[20].frameLaserVertical = 0;
    }, 22900));

    alienTimeouts.push(setTimeout(() => {
        lasersHorizontal[0].frameLaserHorizontal = 0;
        lasersHorizontal[1].frameLaserHorizontal = 0;
    }, 24200));

    alienTimeouts.push(setTimeout(() => {
        lasersHorizontal[2].frameLaserHorizontal = 0;
        lasersHorizontal[3].frameLaserHorizontal = 0;
    }, 24700));

    alienTimeouts.push(setTimeout(() => {
        lasersHorizontal[4].frameLaserHorizontal = 0;
        lasersHorizontal[5].frameLaserHorizontal = 0;
    }, 25200));

    alienTimeouts.push(setTimeout(() => {
        lasersVertical[11].frameLaserVertical = 0;
        lasersVertical[12].frameLaserVertical = 0;
    }, 25700));

    alienTimeouts.push(setTimeout(() => {
        lasersVertical[1].frameLaserVertical = 0;
        lasersVertical[3].frameLaserVertical = 0;

        lasersVertical[22].frameLaserVertical = 0;
        lasersVertical[20].frameLaserVertical = 0;
    }, 26500));

    alienTimeouts.push(setTimeout(() => {
        lasersVertical[2].frameLaserVertical = 0;
        lasersVertical[4].frameLaserVertical = 0;

        lasersVertical[19].frameLaserVertical = 0;
        lasersVertical[21].frameLaserVertical = 0;
    }, 26800));

    alienTimeouts.push(setTimeout(() => {
        lasersHorizontal[8].frameLaserHorizontal = 0;
    }, 27450 ));

    alienTimeouts.push(setTimeout(() => {
        lasersHorizontal[7].frameLaserHorizontal = 0;
    }, 27750 ));

    alienTimeouts.push(setTimeout(() => {
        lasersVertical[11].frameLaserVertical = 0;
        lasersVertical[12].frameLaserVertical = 0;
    }, 28050 ));

    alienTimeouts.push(setTimeout(() => {
        lasersVertical[10].frameLaserVertical = 0;
        lasersVertical[13].frameLaserVertical = 0;
    }, 28300 ));

    alienTimeouts.push(setTimeout(() => {
        lasersVertical[9].frameLaserVertical = 0;
        lasersVertical[14].frameLaserVertical = 0;
    }, 28550 ));

    alienTimeouts.push(setTimeout(() => {
        lasersVertical[4].frameLaserVertical = 0;
        lasersVertical[5].frameLaserVertical = 0;

        lasersVertical[18].frameLaserVertical = 0;
        lasersVertical[19].frameLaserVertical = 0;
    }, 28900 ));

    alienTimeouts.push(setTimeout(() => {
        lasersVertical[2].frameLaserVertical = 0;
        lasersVertical[3].frameLaserVertical = 0;

        lasersVertical[20].frameLaserVertical = 0;
        lasersVertical[21].frameLaserVertical = 0;
    }, 29200 ));

    alienTimeouts.push(setTimeout(() => {
        lasersHorizontal[0].frameLaserHorizontal = 0;
    }, 30000 ));

    alienTimeouts.push(setTimeout(() => {
        lasersHorizontal[1].frameLaserHorizontal = 0;
    }, 30200 ));

    alienTimeouts.push(setTimeout(() => {
        lasersHorizontal[2].frameLaserHorizontal = 0;
    }, 30600 ));

    alienTimeouts.push(setTimeout(() => {
        lasersHorizontal[3].frameLaserHorizontal = 0;
    }, 30800 ));

    alienTimeouts.push(setTimeout(() => {
        lasersHorizontal[4].frameLaserHorizontal = 0;
    }, 31000 ));

    alienTimeouts.push(setTimeout(() => {
        lasersVertical[3].frameLaserVertical = 0;
        lasersVertical[4].frameLaserVertical = 0;
        lasersVertical[5].frameLaserVertical = 0;
        lasersVertical[6].frameLaserVertical = 0;

        lasersVertical[17].frameLaserVertical = 0;
        lasersVertical[18].frameLaserVertical = 0;
        lasersVertical[19].frameLaserVertical = 0;
        lasersVertical[20].frameLaserVertical = 0;
    }, 31100 ));

    alienTimeouts.push(setTimeout(() => {
        alienAngry = 0;
    }, 32400 ));

    alienTimeouts.push(setTimeout(() => {
        alienAngry = 1;
        lasersHorizontal[0].frameLaserHorizontal = 0;

        lasersHorizontal[8].frameLaserHorizontal = 0;
    }, 34000 ));

    alienTimeouts.push(setTimeout(() => {
        lasersVertical[3].frameLaserVertical = 0;
        lasersVertical[4].frameLaserVertical = 0;
        lasersVertical[5].frameLaserVertical = 0;
        lasersVertical[6].frameLaserVertical = 0;

        lasersVertical[17].frameLaserVertical = 0;
        lasersVertical[18].frameLaserVertical = 0;
        lasersVertical[19].frameLaserVertical = 0;
        lasersVertical[20].frameLaserVertical = 0;
    }, 34300 ));

    alienTimeouts.push(setTimeout(() => {
        lasersHorizontal[5].frameLaserHorizontal = 0;
        lasersHorizontal[4].frameLaserHorizontal = 0;
        lasersHorizontal[3].frameLaserHorizontal = 0;
    }, 35000 ));

    alienTimeouts.push(setTimeout(() => {
        lasersVertical[10].frameLaserVertical = 0;
        lasersVertical[11].frameLaserVertical = 0;
        lasersVertical[12].frameLaserVertical = 0;
        lasersVertical[13].frameLaserVertical = 0;
    }, 35150 ));

    alienTimeouts.push(setTimeout(() => {
        lasersHorizontal[0].frameLaserHorizontal = 0;
    }, 36100 ));

    alienTimeouts.push(setTimeout(() => {
        lasersHorizontal[1].frameLaserHorizontal = 0;
    }, 36250 ));

    alienTimeouts.push(setTimeout(() => {
        lasersHorizontal[2].frameLaserHorizontal = 0;
    }, 36400 ));

    alienTimeouts.push(setTimeout(() => {
        lasersHorizontal[3].frameLaserHorizontal = 0;
    }, 36550 ));

    alienTimeouts.push(setTimeout(() => {
        lasersHorizontal[4].frameLaserHorizontal = 0;
    }, 36700 ));

    alienTimeouts.push(setTimeout(() => {
        lasersVertical[11].frameLaserVertical = 0;
        lasersVertical[12].frameLaserVertical = 0;

        lasersVertical[4].frameLaserVertical = 0;
        lasersVertical[5].frameLaserVertical = 0;
        lasersVertical[6].frameLaserVertical = 0;

        lasersVertical[17].frameLaserVertical = 0;
        lasersVertical[18].frameLaserVertical = 0;
        lasersVertical[19].frameLaserVertical = 0;
    }, 37100 ));

    alienTimeouts.push(setTimeout(() => {
        lasersHorizontal[8].frameLaserHorizontal = 0;
    }, 37800 ));

    alienTimeouts.push(setTimeout(() => {
        lasersHorizontal[0].frameLaserHorizontal = 0;
    }, 38100 ));

    alienTimeouts.push(setTimeout(() => {
        lasersVertical[11].frameLaserVertical = 0;
        lasersVertical[12].frameLaserVertical = 0;
    }, 39300 ));

    alienTimeouts.push(setTimeout(() => {
        lasersVertical[9].frameLaserVertical = 0;
        lasersVertical[10].frameLaserVertical = 0;

        lasersVertical[13].frameLaserVertical = 0;
        lasersVertical[14].frameLaserVertical = 0;
    }, 39800 ));

    alienTimeouts.push(setTimeout(() => {
        lasersVertical[7].frameLaserVertical = 0;
        lasersVertical[8].frameLaserVertical = 0;

        lasersVertical[15].frameLaserVertical = 0;
        lasersVertical[16].frameLaserVertical = 0;
    }, 40300 ));

    alienTimeouts.push(setTimeout(() => {
        lasersHorizontal[0].frameLaserHorizontal = 0;
        lasersHorizontal[8].frameLaserHorizontal = 0;
    }, 40700 ));

    alienTimeouts.push(setTimeout(() => {
        lasersVertical[11].frameLaserVertical = 0;
        lasersVertical[12].frameLaserVertical = 0;

        lasersVertical[5].frameLaserVertical = 0;
        lasersVertical[6].frameLaserVertical = 0;

        lasersVertical[17].frameLaserVertical = 0;
        lasersVertical[18].frameLaserVertical = 0;
    }, 41600 ));

    alienTimeouts.push(setTimeout(() => {
        lasersVertical[3].frameLaserVertical = 0;
        lasersVertical[4].frameLaserVertical = 0;

        lasersVertical[19].frameLaserVertical = 0;
        lasersVertical[20].frameLaserVertical = 0;
    }, 41800 ));

    alienTimeouts.push(setTimeout(() => {
        lasersHorizontal[0].frameLaserHorizontal = 0;
        lasersHorizontal[8].frameLaserHorizontal = 0;
    }, 42400 ));

    alienTimeouts.push(setTimeout(() => {
        lasersVertical[9].frameLaserVertical = 0;
        lasersVertical[14].frameLaserVertical = 0;
    }, 43100 ));

    alienTimeouts.push(setTimeout(() => {
        lasersVertical[10].frameLaserVertical = 0;
        lasersVertical[13].frameLaserVertical = 0;
    }, 43300 ));

    alienTimeouts.push(setTimeout(() => {
        lasersVertical[11].frameLaserVertical = 0;
        lasersVertical[12].frameLaserVertical = 0;
    }, 43600 ));

    alienTimeouts.push(setTimeout(() => {
        lasersVertical[1].frameLaserVertical = 0;
        lasersVertical[22].frameLaserVertical = 0;
    }, 43700 ));

    alienTimeouts.push(setTimeout(() => {
        lasersVertical[2].frameLaserVertical = 0;
        lasersVertical[21].frameLaserVertical = 0;
    }, 43800 ));

    alienTimeouts.push(setTimeout(() => {
        lasersVertical[3].frameLaserVertical = 0;
        lasersVertical[20].frameLaserVertical = 0;
    }, 43900 ));

    alienTimeouts.push(setTimeout(() => {
        lasersVertical[4].frameLaserVertical = 0;
        lasersVertical[19].frameLaserVertical = 0;
    }, 44000 ));

    alienTimeouts.push(setTimeout(() => {
        lasersVertical[5].frameLaserVertical = 0;
        lasersVertical[18].frameLaserVertical = 0;
    }, 44100 ));

    alienTimeouts.push(setTimeout(() => {
        lasersVertical[6].frameLaserVertical = 0;
        lasersVertical[17].frameLaserVertical = 0;
    }, 44200 ));

    alienTimeouts.push(setTimeout(() => {
        lasersVertical[7].frameLaserVertical = 0;
        lasersVertical[16].frameLaserVertical = 0;
    }, 44300 ));

    alienTimeouts.push(setTimeout(() => {
        lasersVertical[8].frameLaserVertical = 0;
        lasersVertical[15].frameLaserVertical = 0;
    }, 44400 ));

    alienTimeouts.push(setTimeout(() => {
        alienAngry = 0;
    }, 45500 ));

    alienTimeouts.push(setTimeout(() => {
        shake();
        resetGravity();
        alienInUfo = true;
        currentPlatform = [];
        hps.style.display = "flex";
        player1.flying = true;
        player1.velocityJump = 0;
        player1.velocity = 0;
        flyUpAndDown(player1);
        bossY = 350;
        bossX = 850;
        if(playingMultiplayer){
            player2.flying = true;
            player2.velocityJump = 0;
            player2.velocity = 0;
            flyUpAndDown(player2);
        }
        rightWallX = canvas.width;
        leftWallX = -160;
        smokeActivated = true;
        currentFrameSmoke = 0;
        alienInSpace = true;
        alienVelocityX = 0.2;
        alienVelocityXValue = 1;
        alienGoLeft = true;
        alienSlowingX = false;
        alienVelocityY = 0.2;
        alienVelocityYValue = 1;
        alienGoUp = true;
        alienSlowingY = false;
        alienMoveY();
        alienMoveX();
    }, 49600));

    alienTimeouts.push(setTimeout(() => {
        alienAngry = 1;
        alienPhase1 = true;
        allBullets = false;
        onlyStraightBullets = true;
        onlySideBullets = false;
        bulletWaveToUp = false;
        bulletWaveToDown = false;
        whichBullets = 0;
        alienLasers1 = setInterval(() => {
            if(whichBullets == 2){
                clearInterval(alienLasers1);
                cancelAnimationFrame(alienBulletId);
            }
            alienBullet();
        }, 440);
    }, 52800));

    alienTimeouts.push(setTimeout(() => {
        lasersHorizontalInSpace[0].frameLaserHorizontal = 0;
        lasersHorizontalInSpace[1].frameLaserHorizontal = 0;
        lasersHorizontalInSpace[16].frameLaserHorizontal = 0;
        lasersHorizontalInSpace[17].frameLaserHorizontal = 0;
    }, 53400));

    alienTimeouts.push(setTimeout(() => {
        whichBullets = 0;
        alienLasers1 = setInterval(() => {
            if(whichBullets == 2){
                clearInterval(alienLasers1);
                cancelAnimationFrame(alienBulletId);
                alienAngry = 0;
            }
            alienBullet();
        }, 440);
    }, 54550));

    alienTimeouts.push(setTimeout(() => {
        alienAngry = 1;
        allBullets = false;
        onlyStraightBullets = false;
        onlySideBullets = true;
        bulletWaveToUp = false;
        bulletWaveToDown = false;
        whichBullets = 0;
        whichBullets = 0;
        alienLasers1 = setInterval(() => {
            if(whichBullets == 2){
                clearInterval(alienLasers1);
                cancelAnimationFrame(alienBulletId);
            }
            alienBullet();
        }, 440);
    }, 60200));

    alienTimeouts.push(setTimeout(() => {
        lasersHorizontalInSpace[4].frameLaserHorizontal = 0;
        lasersHorizontalInSpace[12].frameLaserHorizontal = 0;
    }, 60900));

    alienTimeouts.push(setTimeout(() => {
        whichBullets = 0;
        alienLasers1 = setInterval(() => {
            if(whichBullets == 2){
                clearInterval(alienLasers1);
                cancelAnimationFrame(alienBulletId);
                alienAngry = 0;
                alienPhase1 = false;
                alienPhase2 = true;
                alien_divider3.style.opacity = 0;
                shieldActive = false;
            }
            alienBullet();
        }, 440);
    }, 62000));

    alienTimeouts.push(setTimeout(() => {
        alienAngry = 1;
        allBullets = false;
        onlyStraightBullets = false;
        onlySideBullets = false;
        bulletWaveToUp = true;
        bulletWaveToDown = false;
        whichBullets = 0;
        whichBullets = 0;
        whichBullets = 0;
        alienLasers1 = setInterval(() => {
            if(whichBullets == 2){
                clearInterval(alienLasers1);
                cancelAnimationFrame(alienBulletId);
                alienAngry = 0;
            }
            alienBullet();
        }, 440);
    }, 67800));

    alienTimeouts.push(setTimeout(() => {
        lasersHorizontalInSpace[0].frameLaserHorizontal = 0;
        lasersHorizontalInSpace[8].frameLaserHorizontal = 0;
        lasersHorizontalInSpace[17].frameLaserHorizontal = 0;
        lasersVerticalInSpace[16].frameLaserVertical = 0;
    }, 68500));

    alienTimeouts.push(setTimeout(() => {
        whichBullets = 0;
        alienLasers1 = setInterval(() => {
            if(whichBullets == 2){
                clearInterval(alienLasers1);
                cancelAnimationFrame(alienBulletId);
            }
            alienBullet();
        }, 440);
    }, 69600));

    alienTimeouts.push(setTimeout(() => {
        alienAngry = 1;
        allBullets = true;
        onlyStraightBullets = false;
        onlySideBullets = false;
        bulletWaveToUp = false;
        bulletWaveToDown = false;
        whichBullets = 0;
        whichBullets = 0;
        whichBullets = 0;
        alienLasers1 = setInterval(() => {
            if(whichBullets == 2){
                clearInterval(alienLasers1);
                cancelAnimationFrame(alienBulletId);
            }
            alienBullet();
        }, 440);
    }, 75200));

    alienTimeouts.push(setTimeout(() => {
        lasersVerticalInSpace[0].frameLaserVertical = 0;
        lasersVerticalInSpace[7].frameLaserVertical = 0;
        lasersVerticalInSpace[15].frameLaserVertical = 0;
        lasersVerticalInSpace[23].frameLaserVertical = 0;
        lasersVerticalInSpace[31].frameLaserVertical = 0;
    }, 75900));

    alienTimeouts.push(setTimeout(() => {
        whichBullets = 0;
        alienLasers1 = setInterval(() => {
            if(whichBullets == 2){
                clearInterval(alienLasers1);
                cancelAnimationFrame(alienBulletId);
                alienAngry = 0;
                alienPhase2 = false;
                alienPhase3 = true;
                alien_divider2.style.opacity = 0;
                shieldActive = false;
            }
            alienBullet();
        }, 440);
    }, 77000));

    alienTimeouts.push(setTimeout(() => {
        cancelAnimationFrame(meteoriteMovementId);
        meteorite1 = {x: 1300, y: -100, xSpeed: 9, ySpeed: 6, size: 32};
        meteorite2 = {x: 1000, y: -150, xSpeed: 5, ySpeed: 3, size: 64};
        meteorite3 = {x: 800, y: -200, xSpeed: 8, ySpeed: 4, size: 96};
        shake();
        meteoriteMovement();
    }, 79600));

    alienTimeouts.push(setTimeout(() => {
        alienAngry = 1;
        allBullets = false;
        onlyStraightBullets = true;
        onlySideBullets = false;
        bulletWaveToUp = false;
        bulletWaveToDown = false;
        whichBullets = 0;
        alienLasers1 = setInterval(() => {
            if(whichBullets == 2){
                clearInterval(alienLasers1);
                cancelAnimationFrame(alienBulletId);
            }
            alienBullet();
        }, 440);
    }, 82700));

    alienTimeouts.push(setTimeout(() => {
        lasersHorizontalInSpace[0].frameLaserHorizontal = 0;
        lasersHorizontalInSpace[3].frameLaserHorizontal = 0;
        lasersHorizontalInSpace[15].frameLaserHorizontal = 0;
        lasersHorizontalInSpace[17].frameLaserHorizontal = 0;
    }, 83400));

    alienTimeouts.push(setTimeout(() => {
        allBullets = false;
        onlyStraightBullets = true;
        onlySideBullets = false;
        bulletWaveToUp = false;
        bulletWaveToDown = false;
        whichBullets = 0;
        alienLasers1 = setInterval(() => {
            if(whichBullets == 2){
                clearInterval(alienLasers1);
                cancelAnimationFrame(alienBulletId);
                alienAngry = 0;
            }
            alienBullet();
        }, 440);
    }, 84500));

    alienTimeouts.push(setTimeout(() => {
        cancelAnimationFrame(meteoriteMovementId);
        meteorite1 = {x: 1600, y: -100, xSpeed: 11, ySpeed: 3, size: 32};
        meteorite2 = {x: 1300, y: -150, xSpeed: 10, ySpeed: 5, size: 64};
        meteorite3 = {x: 600, y: -200, xSpeed: 5, ySpeed: 7, size: 96};
        shake();
        meteoriteMovement();
    }, 87000));

    alienTimeouts.push(setTimeout(() => {
        alienAngry = 1;
        allBullets = false;
        onlyStraightBullets = false;
        onlySideBullets = true;
        bulletWaveToUp = false;
        bulletWaveToDown = false;
        whichBullets = 0;
        alienLasers1 = setInterval(() => {
            if(whichBullets == 2){
                clearInterval(alienLasers1);
                cancelAnimationFrame(alienBulletId);
            }
            alienBullet();
        }, 440);
    }, 90200));

    alienTimeouts.push(setTimeout(() => {
        lasersVerticalInSpace[1].frameLaserVertical = 0;
        lasersVerticalInSpace[15].frameLaserVertical = 0;
        lasersVerticalInSpace[16].frameLaserVertical = 0;
        lasersVerticalInSpace[30].frameLaserVertical = 0;
        lasersHorizontalInSpace[3].frameLaserHorizontal = 0;
        lasersHorizontalInSpace[15].frameLaserHorizontal = 0;
    }, 90900));

    alienTimeouts.push(setTimeout(() => {
        whichBullets = 0;
        alienLasers1 = setInterval(() => {
            if(whichBullets == 2){
                clearInterval(alienLasers1);
                cancelAnimationFrame(alienBulletId);
                alienAngry = 0;
                alienPhase3 = false;
                alienPhase4 = true;
                alien_divider1.style.opacity = 0;
                shieldActive = false;
            }
            alienBullet();
        }, 440);
    }, 92000));

    alienTimeouts.push(setTimeout(() => {
        cancelAnimationFrame(meteoriteMovementId);
        meteorite1 = {x: 1200, y: -100, xSpeed: 8, ySpeed: 4, size: 32};
        meteorite2 = {x: 1100, y: -150, xSpeed: 8, ySpeed: 2, size: 64};
        meteorite3 = {x: 1000, y: -200, xSpeed: 9, ySpeed: 8, size: 96};
        shake();
        meteoriteMovement();
    }, 94500));

    alienTimeouts.push(setTimeout(() => {
        alienAngry = 1;
        allBullets = false;
        onlyStraightBullets = false;
        onlySideBullets = false;
        bulletWaveToUp = false;
        bulletWaveToDown = true;
        whichBullets = 0;
        whichBullets = 0;
        whichBullets = 0;
        alienLasers1 = setInterval(() => {
            if(whichBullets == 2){
                clearInterval(alienLasers1);
                cancelAnimationFrame(alienBulletId);
            }
            alienBullet();
        }, 440);
    }, 97700));

    alienTimeouts.push(setTimeout(() => {
        lasersHorizontalInSpace[1].frameLaserHorizontal = 0;
        lasersHorizontalInSpace[8].frameLaserHorizontal = 0;
        lasersHorizontalInSpace[16].frameLaserHorizontal = 0;
    }, 98400));

    alienTimeouts.push(setTimeout(() => {
        whichBullets = 0;
        alienLasers1 = setInterval(() => {
            if(whichBullets == 2){
                clearInterval(alienLasers1);
                cancelAnimationFrame(alienBulletId);
                alienAngry = 0;
            }
            alienBullet();
        }, 440);
    }, 99500));

    alienTimeouts.push(setTimeout(() => {
        cancelAnimationFrame(meteoriteMovementId);
        meteorite1 = {x: 1000, y: -100, xSpeed: 10, ySpeed: 4, size: 32};
        meteorite2 = {x: 900, y: -150, xSpeed: 6, ySpeed: 3, size: 64};
        meteorite3 = {x: 1200, y: -200, xSpeed: 9, ySpeed: 7, size: 96};
        shake();
        meteoriteMovement();
    }, 102000));

    alienTimeouts.push(setTimeout(() => {
        alienAngry = 1;
        allBullets = true;
        onlyStraightBullets = false;
        onlySideBullets = false;
        bulletWaveToUp = false;
        bulletWaveToDown = false;
        whichBullets = 0;
        whichBullets = 0;
        whichBullets = 0;
        alienLasers1 = setInterval(() => {
            if(whichBullets == 2){
                clearInterval(alienLasers1);
                cancelAnimationFrame(alienBulletId);
            }
            alienBullet();
        }, 440);
    }, 105200));

    alienTimeouts.push(setTimeout(() => {
        lasersVerticalInSpace[2].frameLaserVertical = 0;
        lasersVerticalInSpace[15].frameLaserVertical = 0;
        lasersVerticalInSpace[16].frameLaserVertical = 0;
        lasersVerticalInSpace[29].frameLaserVertical = 0;
        lasersHorizontalInSpace[3].frameLaserHorizontal = 0;
        lasersHorizontalInSpace[14].frameLaserHorizontal = 0;
    }, 105900));

    alienTimeouts.push(setTimeout(() => {
        whichBullets = 0;
        alienLasers1 = setInterval(() => {
            if(whichBullets == 2){
                clearInterval(alienLasers1);
                cancelAnimationFrame(alienBulletId);
            }
            alienBullet();
        }, 440);
    }, 107000));
}

//---------------------------

const finalSceneSpiderBoss = () => {
    c.save();
    inGame = false;
    music.pause();
    c.scale(2,2)
    spiderBossCamera2 = false;
    c.translate(-canvas.width / 4, -200)
    movingSpiderNumber = 0;
    bossY = 336;
    bossX = 520;
    player1.x = 420;
    player1.y = 376
    player1.turnedRight = true;
    player2.turnedRight = true;
    player1.turnedLeft = false;
    player2.turnedLeft = false;
    if(playingMultiplayer){
        player2.x = 455;
        player2.y = 376
        player1.turnedLeft = false;
        player2.turnedLeft = false;
    }
    setTimeout(() => {
        bossPunchedNumber = 3;
        spiderBossFlipped =  true;
        sfx.src = "./res/sfx/died.mp3";
        sfx.play();
    }, 2800);

    setTimeout(() => {
        bossPunchedNumber = 0;
        cameraMoveXCount = 0;
        spiderBossCamera1 = true;
        cameraMove();
        spiderBossNotHere = true;
    }, 4200);
    setTimeout(() => {
        finalDoorBossInterval = setInterval(() => {
            frameDoorFinal--;
            if(frameDoorFinal == 0){
                clearInterval(finalDoorBossInterval)
            }
        }, 150);
    }, 7000);
}

let castleDungeonCompleted = false;
let steampunkDungeonCompleted = false;
let spaceshipDungeonCompleted = false;

const deadBoss = () => {
    achievementGod();
    if(playingCastle){
        inGame = false;
        castleDungeonCompleted = true;
        localStorage.setItem('castleDungeonCompleted', castleDungeonCompleted.toString());
        black.style.transition = "opacity 0s"
        black.style.opacity = 1;
        spawnCords = () => {
            player1.x = 485;
            player1.y = 216;
            if(playingMultiplayer){
                player2.x = 515 ;
                player2.y = 216;        
            }
        }
        spawnCords();
        bossPunchedNumber = 0;
        bossX = 590;
        bossY = 180;
        currentFrameBoss = 0;
        clearInterval(targetInterval);
        cancelAnimationFrame(bossMoveXId);
        cancelAnimationFrame(bossMoveYId);
        clearInterval(bossAttackGenerator);
        sfx_boss_laugh.pause();
        bossAttacking = false;
        player1.turnedRight = true;
        player2.turnedRight = true;
        player1.turnedLeft = false;
        player2.turnedLeft = false;
        setTimeout(() => {
            black.style.transition = "opacity 0.6s"
            black.style.opacity = 0;
            c.save();
            c.scale(2,2) // 1. Camera
            c.translate(-canvas.width / 4, -100)
            reaperBossCamera1 = true;
            cameraMoveXCount = 0;
            cameraX = 0;
            cameraY = 0;
            canCameraStop = false;
            setTimeout(() => {
                bossPunchedNumber = 1;
                reaperBossFlipped =  true;
                sfx.src = "./res/sfx/died.mp3";
                sfx.play();
            }, 2400);
            setTimeout(() => {
                reaperBossNotHere = true;
                cameraMove();
            }, 3800);
            setTimeout(() => {
                finalDoorBossInterval = setInterval(() => {
                    frameDoorFinal--;
                    if(frameDoorFinal == 0){
                        clearInterval(finalDoorBossInterval)
                    }
                }, 150);
            }, 6000);
            setTimeout(() => {
                black.style.opacity = 1;
                setTimeout(() => {
                    black.style.opacity = 0;
                    c.restore();
                    inGame = true;
                }, 1000);
            }, 7500);
            clearInterval(flashingInterval);
            playerNowFlashing = false;
            divider1.style.opacity = 1;
            divider2.style.opacity = 1;
            divider3.style.opacity = 1;
            divider4.style.opacity = 1;
            shieldActive = false;
            clearTimeout(setTimeoutDoor);
            risingLavaActivated = false;
            lavaIncreaseValue = 3;
            lavaY = 576;
            risingPercent = risingPercentOriginal;
            rising.style.bottom = risingPercent + "%"
            rising.style.display = "none";
            darkness = false;
            clearBossTimeouts();
            spawnCords();
            currentPlatform = [...map[14]];
            originalPlatform1 = [...currentPlatform];
        }, 1500)
    }else if(playingSteamPunk){
        inGame = false;
        steampunkDungeonCompleted = true
        localStorage.setItem('steampunkDungeonCompleted', steampunkDungeonCompleted);
        black.style.transition = "opacity 0s"
        black.style.opacity = 1;
        setTimeout(() => {
            black.style.transition = "opacity 0.6s"
            black.style.opacity = 0;
            let spawnSawCords = () => {
                xSaw = 10000;
                ySaw = 10000;
            }
            spawnSawCords();
            currentFrameSpiderBoss = 0;
            spider1Y = -500;
            spider2Y = -500;
            spider3Y = -500;
            spider4Y = -500;
            spiderGoingDown = false;
            spiderGoingUp = false;
            canSpidersMoving = false;
            generatorInterval = 1000;
            playerNowFlashing = false;
            playerOneImage.src = playerSkin1;
            playerTwoImage.src = playerSkin2;
            clearTimeout(setTimeoutDoor);
            clearInterval(flashingInterval);
            clearInterval(spiderBossGenerator);
            clearSpiderBossTimeouts();
            cancelAnimationFrame(hangingSpidersFunctionId);
            cancelAnimationFrame(spiderJumpingId);
            cancelAnimationFrame(spiderMovingId);
            spidersVelocity = 0.1;
            startingMovingInSpiderBoss = false;
            sawVelocitySpeeder = 1;
            cameraX = 0;
            cameraY = 0;
            darkness = false;
            canCameraStop = false;
            cameraMoveXCount = 0;
            spiderBossCamera1 = true;
            spiderBossCamera2 = false;
            spiderBossNumber = 0;
            spiderBossWarning = false;
            spiderBossAttacking = false
            smallSpiderJump = false;
            smokeActivated = false;
            spiderBossDead = true;
            cancelAnimationFrame(wallSpiderMovingId);
            rightWallX = canvas.width;
            leftWallX = -160;
            for (let index = 0; index < currentPlatform.length; index++) {
                if(currentPlatform[index] == 2){
                    currentPlatform[index] = 0;
                }
            }
            setTimeout(() => {
                black.style.opacity = 1;
                setTimeout(() => {
                    black.style.opacity = 0;
                    inGame = true;
                    c.restore();
                }, 1000);
            }, 9000);
        }, 1000 )
    }else if(playingSpace){
        spaceshipDungeonCompleted = true;
        localStorage.setItem('spaceshipDungeonCompleted', spaceshipDungeonCompleted.toString());
        clearTimeout(setTimeoutDoor);
        alienHit = 2;
        smokeActivated = true;
        black.style.transition = "opacity 0s"
        black.style.opacity = 1;
        setTimeout(() => {
            black.style.transition = "opacity 0.3s"
            black.style.opacity = 0; 
        }, 20);
        setTimeout(() => {
            locationCreditsY = defaultLocationCreditsY;
            movingCredits();
        }, 3000);
    }
    restartTimer();
    timer.style.top = "-5%"
    player1.canAttack = false;
    if(playingMultiplayer){
        player2.canAttack = false;
    }
    cancelPlayerMovement();
    music.pause();
    lives = 3;
    playingBossFight = false;
    if(usedRetry){
        usedRetry = false;
    }
    hp.style.width = currentHp + "%";
    hps.style.display = "none"
    myHp.style.display = "none"
    heart1.style.display = "block";
    heart2.style.display = "block";
    heart3.style.display = "block";
    hearts = 3;
}
