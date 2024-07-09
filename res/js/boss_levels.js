//----------------------------------------BOSS LEVEL
const bossLevel = () => {

    c.save();
    c.scale(2,2) // 1. Camera
    reaperBossCamera1 = true;
    spiderBossCamera1 = false;
    spiderBossCamera2 = false;
    reaperBossCamera2 = false;
    cameraMoveXCount = 0;
    cameraX = 0;
    cameraY = 0;
    canCameraStop = false;
    c.translate(-canvas.width / 4, -100)
    
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
    player1.turnedLeft = false;

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

    
    if(playingMultiplayer){
        setTarget();
    }
    gravity(player1);
    if(playingMultiplayer){
        gravity(player2)
    }
    spawnCords = () => {
        player1.x = 485;
        player1.y = 216;
        if(playingMultiplayer){
            player2.x = 515 ;
            player2.y = 216;        
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
    bossY = 400;
    playingBossFight = true;
    music.currentTime = 0;
    music.src = "./res/music/finalboss.mp3";
    doorsTime = 76000;
    music.play();
    setTimeout(() => {
        generatorAttackFunction();
    }, 1200);
    setTimeout(() => {
        sfx_boss_talk.src = "./res/sfx/killyou.mp3";
        sfx_boss_talk.play();
    }, 1500);
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
    cameraMoveXCount = 0;
    cameraX = 0;
    cameraY = 0;
    canCameraStop = false;
    c.translate(0, -200)
    inGame = false;
    cameraMove();

    player1.turnedRight = true;
    player2.turnedRight = true;
    player1.turnedLeft = false;
    player1.turnedLeft = false;

    divider1.style.opacity = 1;
    divider2.style.opacity = 1;
    divider3.style.opacity = 1;
    divider4.style.opacity = 1;
    shieldActive = false;

    spider1X = 256;
    spider2X = 416;
    spider3X = 576;
    spider4X = 736;

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
        player1.y= 390;
        if(playingMultiplayer){
            player2.x = 200;
            player2.y= 390;       
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
    hps.style.display = "block";
    heart1.style.display = "block";
    heart2.style.display = "block";
    heart3.style.display = "block";
    hearts = 3;
    bossX = 10000;
    bossY = 450;
    music.currentTime = 0;
    music.src = "./res/music/spiderboss.mp3";
    doorsTime = 90000;
    music.play();
    playingBossFight = true;
    
    spiderFirstJump = setTimeout(() => { // Spider First Jump
        smallSpiderJump = false;
        bossX = canvas.width/2 - 40;
        bossY = -100;
        spiderBossJumping = true;
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

const deadBoss = () => {
    inGame = false;
    if(playingCastle){
        black.style.transition = "opacity 0s"
        black.style.opacity = 1;
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
        if(playingMultiplayer){
            player1.turnedLeft = false;
            player2.turnedLeft = false;
        }
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
            platformLevel1 = [...map[14]];
            originalPlatform1 = [...platformLevel1];
        }, 1500)
    }else if(playingSteamPunk){
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
            platformLevel1 = [...map[14]];
            originalPlatform1 = [...platformLevel1];
            setTimeout(() => {
                black.style.opacity = 1;
                setTimeout(() => {
                    black.style.opacity = 0;
                    inGame = true;
                    c.restore();
                }, 1000);
            }, 9000);
        }, 1000 )
    }
    restartTimer();
    timer.style.top = "-5%"
    player1.canAttack = false;
    if(playingMultiplayer){
        player2.canAttack = false;
    }
    cancelPlayerMovement();
    inGame = false;
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
