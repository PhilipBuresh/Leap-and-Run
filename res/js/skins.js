const leftArrow = document.getElementById("leftArrow");
const rightArrow = document.getElementById("rightArrow");
const leftSkinImg = document.getElementById("leftSkinImg");
const middleSkinImg = document.getElementById("middleSkinImg");
const middleSkinImgWithHat = document.getElementById("middleSkinImgWithHat");
const rightSkinImg = document.getElementById("rightSkinImg");
const chooseSkinBtn = document.getElementById("chooseSkinBtn");
const choose_rioter = document.getElementById("choose_rioter");
const choose_ruby = document.getElementById("choose_ruby");
const skinChangerBox = document.getElementById("skinChangerBox");
const skins = document.getElementById("skins");
const leftArrowHat = document.getElementById("leftArrowHat");
const rightArrowHat = document.getElementById("rightArrowHat");
const leftHatImg = document.getElementById("leftHatImg");
const middleHatImg = document.getElementById("middleHatImg");
const rightHatImg = document.getElementById("rightHatImg");
const choose_rioter_hat = document.getElementById("choose_rioter_hat");
const choose_ruby_hat = document.getElementById("choose_ruby_hat");
const man_hat = document.getElementById("man_hat");
const woman_hat = document.getElementById("woman_hat");
const middleSkinImgShine = document.getElementById("middleSkinImgShine");
const choose_rioter_shine = document.getElementById("choose_rioter_shine");
const choose_ruby_shine = document.getElementById("choose_ruby_shine");
const man_shine = document.getElementById("man_shine");
const woman_shine = document.getElementById("woman_shine");
const lock_text = document.getElementById("lock_text");
const locked = document.getElementById("locked");

let playerSkin1 = "./res/skins/rioter.png";
let playerSkin2 = "./res/skins/ruby.png";

let selectedRioter = true;
let selectedRuby = true;

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
    updateHats();
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
    updateHats();
}

// Skins
let redRioter = "./res/skins/red_rioter.png";
let whiteRioter = "./res/skins/white_rioter.png";
let pinkRioter = "./res/skins/pink_rioter.png";
let greenRioter = "./res/skins/green_rioter.png";
let yellowRioter = "./res/skins/yellow_rioter.png";
let blueRioter = "./res/skins/blue_rioter.png";
let purpleRioter = "./res/skins/purple_rioter.png";
let blackRioter = "./res/skins/black_rioter.png";
let bronzeRioter = "./res/skins/bronze_rioter.png";
let silverRioter = "./res/skins/silver_rioter.png";
let goldRioter = "./res/skins/gold_rioter.png";

let redRuby = "./res/skins/red_ruby.png";
let whiteRuby = "./res/skins/white_ruby.png";
let pinkRuby = "./res/skins/pink_ruby.png";
let greenRuby = "./res/skins/green_ruby.png";
let yellowRuby = "./res/skins/yellow_ruby.png";
let blueRuby = "./res/skins/blue_ruby.png";
let purpleRuby = "./res/skins/purple_ruby.png";
let blackRuby = "./res/skins/black_ruby.png";
let bronzeRuby = "./res/skins/bronze_ruby.png";
let silverRuby = "./res/skins/silver_ruby.png";
let goldRuby = "./res/skins/gold_ruby.png";

let rioterSkins = [redRioter, whiteRioter, pinkRioter, greenRioter, yellowRioter, blueRioter, purpleRioter, blackRioter, bronzeRioter, silverRioter, goldRioter];
let rubySkins = [redRuby, whiteRuby, pinkRuby, greenRuby, yellowRuby, blueRuby, purpleRuby, blackRuby, bronzeRuby, silverRuby, goldRuby];

let currentIndexSkinsRioter = 0;
let currentIndexSkinsRuby = 0;

// Hats

let rioterNone = "./res/hats/none.png";
let rioterCrown = "./res/hats/rioter_crown.png";
let rioterMonocle = "./res/hats/rioter_monocle.png";
let rioterHeadphones = "./res/hats/rioter_headphones.png";
let rioterGlasses = "./res/hats/rioter_glasses.png";
let rioterBow = "./res/hats/rioter_bow.png";
let rioterTophat = "./res/hats/rioter_tophat.png";
let rioterHalo = "./res/hats/rioter_halo.png";
let rioterHorns = "./res/hats/rioter_horns.png";
let rioterFace = "./res/hats/rioter_face.png";
let rioterHeadband = "./res/hats/rioter_headband.png";

let rubyNone = "./res/hats/none.png";
let rubyCrown = "./res/hats/ruby_crown.png";
let rubyMonocle = "./res/hats/ruby_monocle.png";
let rubyHeadphones = "./res/hats/ruby_headphones.png";
let rubyGlasses = "./res/hats/ruby_glasses.png";
let rubyBow = "./res/hats/ruby_bow.png";
let rubyTophat = "./res/hats/ruby_tophat.png";
let rubyHalo = "./res/hats/ruby_halo.png";
let rubyHorns = "./res/hats/ruby_horns.png";
let rubyFace = "./res/hats/ruby_face.png";
let rubyHeadband = "./res/hats/ruby_headband.png";

let rioterHats = [rioterNone, rioterCrown, rioterMonocle, rioterHeadphones, rioterGlasses, rioterBow, rioterTophat, rioterHalo, rioterHorns, rioterFace, rioterHeadband];
let rubyHats = [rubyNone, rubyCrown, rubyMonocle, rubyHeadphones, rubyGlasses, rubyBow, rubyTophat, rubyHalo, rubyHorns, rubyFace, rubyHeadband];

let currentIndexHatsRioter = 0;
let currentIndexHatsRuby = 0;

let middleSkinImgWithHat_forRioter = "./res/hats/rioter_none.png"
let middleSkinImgWithHat_forRuby = "./res/hats/ruby_none.png"

const setHats = () => {
    if(selectedRioter){
        switch (currentIndexHatsRioter) {
            case 0:
                player1.hatNumber = 0;
                man_hat.src = "./res/img/nothing.png";
                choose_rioter_hat.src = "./res/img/nothing.png";
                middleSkinImgWithHat.src = "./res/img/nothing.png";
                break;
            case 1:
                player1.hatNumber = 1;
                man_hat.src = "./res/hats/crown.png";
                choose_rioter_hat.src = "./res/hats/crown.png";
                middleSkinImgWithHat.src = "./res/hats/crown.png";
                break;
            case 2:
                player1.hatNumber = 2;
                man_hat.src = "./res/hats/monocle.png";
                choose_rioter_hat.src = "./res/hats/monocle.png";
                middleSkinImgWithHat.src = "./res/hats/monocle.png";
                break;
            case 3:
                player1.hatNumber = 3;
                man_hat.src = "./res/hats/headphones.png";
                choose_rioter_hat.src = "./res/hats/headphones.png";
                middleSkinImgWithHat.src = "./res/hats/headphones.png";
                break;
            case 4:
                player1.hatNumber = 4;
                man_hat.src = "./res/hats/glasses.png";
                choose_rioter_hat.src = "./res/hats/glasses.png";
                middleSkinImgWithHat.src = "./res/hats/glasses.png";
                break;
            case 5:
                player1.hatNumber = 5;
                man_hat.src = "./res/hats/bow.png";
                choose_rioter_hat.src = "./res/hats/bow.png";
                middleSkinImgWithHat.src = "./res/hats/bow.png";
                break;
            case 6:
                player1.hatNumber = 6;
                man_hat.src = "./res/hats/tophat.png";
                choose_rioter_hat.src = "./res/hats/tophat.png";
                middleSkinImgWithHat.src = "./res/hats/tophat.png";
                break;
            case 7:
                player1.hatNumber = 7;
                man_hat.src = "./res/hats/halo.png";
                choose_rioter_hat.src = "./res/hats/halo.png";
                middleSkinImgWithHat.src = "./res/hats/halo.png";
                break;
            case 8:
                player1.hatNumber = 8;
                man_hat.src = "./res/hats/horns.png";
                choose_rioter_hat.src = "./res/hats/horns.png";
                middleSkinImgWithHat.src = "./res/hats/horns.png";
                break;
            case 9:
                player1.hatNumber = 9;
                man_hat.src = "./res/hats/face.png";
                choose_rioter_hat.src = "./res/hats/face.png";
                middleSkinImgWithHat.src = "./res/hats/face.png";
                break;
            case 10:
                player1.hatNumber = 10;
                man_hat.src = "./res/hats/headband.png";
                choose_rioter_hat.src = "./res/hats/headband.png";
                middleSkinImgWithHat.src = "./res/hats/headband.png";
                break;
        }
        middleSkinImgWithHat_forRioter = middleSkinImgWithHat.src;
    }
    if(selectedRuby || playingMultiplayer){
        switch (currentIndexHatsRuby) {
            case 0:
                if(!playingMultiplayer){
                    player1.hatNumber = 0;
                }else{
                    player2.hatNumber = 0;
                }
                woman_hat.src = "./res/img/nothing.png";
                choose_ruby_hat.src = "./res/img/nothing.png";
                middleSkinImgWithHat.src = "./res/img/nothing.png";
                break;
            case 1:
                if(!playingMultiplayer){
                    player1.hatNumber = 1;
                }else{
                    player2.hatNumber = 1;
                }
                woman_hat.src = "./res/hats/crown.png";
                choose_ruby_hat.src = "./res/hats/crown.png";
                middleSkinImgWithHat.src = "./res/hats/crown.png";
                break;
            case 2:
                if(!playingMultiplayer){
                    player1.hatNumber = 2;
                }else{
                    player2.hatNumber = 2;
                }
                woman_hat.src = "./res/hats/monocle.png";
                choose_ruby_hat.src = "./res/hats/monocle.png";
                middleSkinImgWithHat.src = "./res/hats/monocle.png";
                break;
            case 3:
                if(!playingMultiplayer){
                    player1.hatNumber = 3;
                }else{
                    player2.hatNumber = 3;
                }
                woman_hat.src = "./res/hats/headphones.png";
                choose_ruby_hat.src = "./res/hats/headphones.png";
                middleSkinImgWithHat.src = "./res/hats/headphones.png";
                break;
            case 4:
                if(!playingMultiplayer){
                    player1.hatNumber = 4;
                }else{
                    player2.hatNumber = 4;
                }
                woman_hat.src = "./res/hats/glasses.png";
                choose_ruby_hat.src = "./res/hats/glasses.png";
                middleSkinImgWithHat.src = "./res/hats/glasses.png";
                break;
            case 5:
                if(!playingMultiplayer){
                    player1.hatNumber = 5;
                }else{
                    player2.hatNumber = 5;
                }
                woman_hat.src = "./res/hats/bow.png";
                choose_ruby_hat.src = "./res/hats/bow.png";
                middleSkinImgWithHat.src = "./res/hats/bow.png";
                break;
            case 6:
                if(!playingMultiplayer){
                    player1.hatNumber = 6;
                }else{
                    player2.hatNumber = 6;
                }
                woman_hat.src = "./res/hats/tophat.png";
                choose_ruby_hat.src = "./res/hats/tophat.png";
                middleSkinImgWithHat.src = "./res/hats/tophat.png";
                break;
            case 7:
                if(!playingMultiplayer){
                    player1.hatNumber = 7;
                }else{
                    player2.hatNumber = 7;
                }
                woman_hat.src = "./res/hats/halo.png";
                choose_ruby_hat.src = "./res/hats/halo.png";
                middleSkinImgWithHat.src = "./res/hats/halo.png";
                break;
            case 8:
                if(!playingMultiplayer){
                    player1.hatNumber = 8;
                }else{
                    player2.hatNumber = 8;
                }
                woman_hat.src = "./res/hats/horns.png";
                choose_ruby_hat.src = "./res/hats/horns.png";
                middleSkinImgWithHat.src = "./res/hats/horns.png";
                break; 
            case 9:
                if(!playingMultiplayer){
                    player1.hatNumber = 9;
                }else{
                    player2.hatNumber = 9;
                }
                woman_hat.src = "./res/hats/face.png";
                choose_ruby_hat.src = "./res/hats/face.png";
                middleSkinImgWithHat.src = "./res/hats/face.png";
                break;
            case 10:
                if(!playingMultiplayer){
                    player1.hatNumber = 10;
                }else{
                    player2.hatNumber = 10;
                }
                woman_hat.src = "./res/hats/headband.png";
                choose_ruby_hat.src = "./res/hats/headband.png";
                middleSkinImgWithHat.src = "./res/hats/headband.png";
                break;
        }
        middleSkinImgWithHat_forRuby = middleSkinImgWithHat.src;
    }
};

leftArrowHat.onclick = () => {
    if(selectedRioter){
        currentIndexHatsRioter = (currentIndexHatsRioter + rioterHats.length - 1) % rioterHats.length;
    }else{
        currentIndexHatsRuby = (currentIndexHatsRuby + rubyHats.length - 1) % rubyHats.length;
    }
    updateHats();
    setHats();
}

rightArrowHat.onclick = () => {
    if(selectedRioter){
        currentIndexHatsRioter = (currentIndexHatsRioter + 1) % rioterHats.length;
    }else{
        currentIndexHatsRuby = (currentIndexHatsRuby + 1) % rubyHats.length;
    }
    updateHats();
    setHats();
}

let equippedCurrentIndexSkinsRioter = 0
let equippedCurrentIndexSkinsRuby = 0

let equippedHatP1 = 0;
let equippedHatP2 = 0;

const setSkins = () => {
    if(selectedRioter){
        switch (currentIndexSkinsRioter) {
            case 0:
                playerSkin1 = "./res/skins/rioter.png";
                choose_rioter.src = rioterSkins[currentIndexSkinsRioter];
                man.src = rioterSkins[currentIndexSkinsRioter];
                break;
            case 1:
                playerSkin1 = "./res/skins/rioter_white.png";
                choose_rioter.src = rioterSkins[currentIndexSkinsRioter];
                man.src = rioterSkins[currentIndexSkinsRioter];
                break;
            case 2:
                playerSkin1 = "./res/skins/rioter_pink.png";
                choose_rioter.src = rioterSkins[currentIndexSkinsRioter];
                man.src = rioterSkins[currentIndexSkinsRioter];
                break;
            case 3:
                playerSkin1 = "./res/skins/rioter_green.png";
                choose_rioter.src = rioterSkins[currentIndexSkinsRioter];
                man.src = rioterSkins[currentIndexSkinsRioter];
                break;
            case 4:
                playerSkin1 = "./res/skins/rioter_yellow.png";
                choose_rioter.src = rioterSkins[currentIndexSkinsRioter];
                man.src = rioterSkins[currentIndexSkinsRioter];
                break;
            case 5:
                playerSkin1 = "./res/skins/rioter_blue.png";
                choose_rioter.src = rioterSkins[currentIndexSkinsRioter];
                man.src = rioterSkins[currentIndexSkinsRioter];
                break;
            case 6:
                playerSkin1 = "./res/skins/rioter_purple.png";
                choose_rioter.src = rioterSkins[currentIndexSkinsRioter];
                man.src = rioterSkins[currentIndexSkinsRioter];
                break;
            case 7:
                playerSkin1 = "./res/skins/rioter_black.png";
                choose_rioter.src = rioterSkins[currentIndexSkinsRioter];
                man.src = rioterSkins[currentIndexSkinsRioter];
                break;
            case 8:
                playerSkin1 = "./res/skins/rioter_bronze.png";
                choose_rioter.src = rioterSkins[currentIndexSkinsRioter];
                man.src = rioterSkins[currentIndexSkinsRioter];
                break;
            case 9:
                playerSkin1 = "./res/skins/rioter_silver.png";
                choose_rioter.src = rioterSkins[currentIndexSkinsRioter];
                man.src = rioterSkins[currentIndexSkinsRioter];
                break;
            case 10:
                playerSkin1 = "./res/skins/rioter_gold.png";
                choose_rioter.src = rioterSkins[currentIndexSkinsRioter];
                man.src = rioterSkins[currentIndexSkinsRioter];
                break;
        }
    }
    if(selectedRuby || playingMultiplayer){
        switch (currentIndexSkinsRuby) {
            case 0:
                if(!playingMultiplayer){
                    playerSkin1 = "./res/skins/ruby.png";
                }else{
                    playerSkin2 = "./res/skins/ruby.png";
                }
                choose_ruby.src = rubySkins[currentIndexSkinsRuby];
                woman.src = rubySkins[currentIndexSkinsRuby];
                break;
            case 1:
                if(!playingMultiplayer){
                    playerSkin1 = "./res/skins/ruby_white.png";
                }else{
                    playerSkin2 = "./res/skins/ruby_white.png";
                }
                choose_ruby.src = rubySkins[currentIndexSkinsRuby];
                woman.src = rubySkins[currentIndexSkinsRuby];
                break;
            case 2:
                if(!playingMultiplayer){
                    playerSkin1 = "./res/skins/ruby_pink.png";
                }else{
                    playerSkin2 = "./res/skins/ruby_pink.png";
                }
                choose_ruby.src = rubySkins[currentIndexSkinsRuby];
                woman.src = rubySkins[currentIndexSkinsRuby];
                break;
            case 3:
                if(!playingMultiplayer){
                    playerSkin1 = "./res/skins/ruby_green.png";
                }else{
                    playerSkin2 = "./res/skins/ruby_green.png";
                }
                choose_ruby.src = rubySkins[currentIndexSkinsRuby];
                woman.src = rubySkins[currentIndexSkinsRuby];
                break;
            case 4:
                if(!playingMultiplayer){
                    playerSkin1 = "./res/skins/ruby_yellow.png";
                }else{
                    playerSkin2 = "./res/skins/ruby_yellow.png";
                }
                choose_ruby.src = rubySkins[currentIndexSkinsRuby];
                woman.src = rubySkins[currentIndexSkinsRuby];
                break;
            case 5:
                if(!playingMultiplayer){
                    playerSkin1 = "./res/skins/ruby_blue.png";
                }else{
                    playerSkin2 = "./res/skins/ruby_blue.png";
                }
                choose_ruby.src = rubySkins[currentIndexSkinsRuby];
                woman.src = rubySkins[currentIndexSkinsRuby];
                break;
            case 6:
                if(!playingMultiplayer){
                    playerSkin1 = "./res/skins/ruby_purple.png";
                }else{
                    playerSkin2 = "./res/skins/ruby_purple.png";
                }
                choose_ruby.src = rubySkins[currentIndexSkinsRuby];
                woman.src = rubySkins[currentIndexSkinsRuby];
                break;
            case 7:
                if(!playingMultiplayer){
                    playerSkin1 = "./res/skins/ruby_black.png";
                }else{
                    playerSkin2 = "./res/skins/ruby_black.png";
                }
                choose_ruby.src = rubySkins[currentIndexSkinsRuby];
                woman.src = rubySkins[currentIndexSkinsRuby];
                break;
            case 8:
                if(!playingMultiplayer){
                    playerSkin1 = "./res/skins/ruby_bronze.png";
                }else{
                    playerSkin2 = "./res/skins/ruby_bronze.png";
                }
                choose_ruby.src = rubySkins[currentIndexSkinsRuby];
                woman.src = rubySkins[currentIndexSkinsRuby];
                break;
            case 9:
                if(!playingMultiplayer){
                    playerSkin1 = "./res/skins/ruby_silver.png";
                }else{
                    playerSkin2 = "./res/skins/ruby_silver.png";
                }
                choose_ruby.src = rubySkins[currentIndexSkinsRuby];
                woman.src = rubySkins[currentIndexSkinsRuby];
                break;
            case 10:
                if(!playingMultiplayer){
                    playerSkin1 = "./res/skins/ruby_gold.png";
                }else{
                    playerSkin2 = "./res/skins/ruby_gold.png";
                }
                choose_ruby.src = rubySkins[currentIndexSkinsRuby];
                woman.src = rubySkins[currentIndexSkinsRuby];
                break;
        }
    }
    // Activate Shine Effect P1 P2
    if(playerSkin1.includes("gold") || playerSkin1.includes("silver") || playerSkin1.includes("bronze")){
        player1.shineActivated = true;
    }else{
        player1.shineActivated = false;
    }
    if(playerSkin2.includes("gold") || playerSkin2.includes("silver") || playerSkin2.includes("bronze")){
        player2.shineActivated = true;
    }else{
        player2.shineActivated = false;
    }
};

chooseSkinBtn.onclick = () => {
    middleSkinImg.style.filter = "drop-shadow(1px 1px 0 lime) drop-shadow(-1px -1px 0 lime) drop-shadow(1px -1px 0 lime) drop-shadow(-1px 1px 0 lime)";
    skinChangerBox.style.pointerEvents = "none";
    chooseSkinBtn.innerHTML = "EQUIPPED"
    chooseSkinBtn.style.color = "rgb(200, 200, 200)"
    chooseSkinBtn.style.backgroundColor = "black";

    equippedCurrentIndexSkinsRioter = currentIndexSkinsRioter;
    equippedCurrentIndexSkinsRuby = currentIndexSkinsRuby;
    equippedHatP1 = currentIndexHatsRioter;
    equippedHatP2 = currentIndexHatsRuby;

    localStorage.setItem('equippedCurrentIndexSkinsRioter', equippedCurrentIndexSkinsRioter.toString());
    localStorage.setItem('equippedCurrentIndexSkinsRuby', equippedCurrentIndexSkinsRuby.toString());
    localStorage.setItem('equippedHatP1', equippedHatP1.toString());
    localStorage.setItem('equippedHatP2', equippedHatP2.toString());


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
    setHats();
};

const updateSkins = () => {
    if(selectedRioter){
        leftSkinImg.src = rioterSkins[(currentIndexSkinsRioter + rioterSkins.length - 1) % rioterSkins.length];
        middleSkinImg.src = rioterSkins[currentIndexSkinsRioter];
        rightSkinImg.src = rioterSkins[(currentIndexSkinsRioter + 1) % rioterSkins.length];
        localStorage.setItem('currentIndexSkinsRioter', currentIndexSkinsRioter);
        if(currentIndexSkinsRioter >= 8 && currentIndexSkinsRioter <= 10){
            middleSkinImgShine.style.display = "block";
            choose_rioter_shine.style.display = "block";
            man_shine.style.display = "block";
        }else{
            choose_rioter_shine.style.display = "none";
            middleSkinImgShine.style.display = "none";
            man_shine.style.display = "none";
        }
    }
    if(selectedRuby){
        leftSkinImg.src = rubySkins[(currentIndexSkinsRuby + rubySkins.length - 1) % rubySkins.length];
        middleSkinImg.src = rubySkins[currentIndexSkinsRuby];
        rightSkinImg.src = rubySkins[(currentIndexSkinsRuby + 1) % rubySkins.length];
        localStorage.setItem('currentIndexSkinsRuby', currentIndexSkinsRuby);
        if(currentIndexSkinsRuby >= 8 && currentIndexSkinsRuby <= 10){
            middleSkinImgShine.style.display = "block";
            choose_ruby_shine.style.display = "block";
            woman_shine.style.display = "block";
        }else{
            middleSkinImgShine.style.display = "none";
            choose_ruby_shine.style.display = "none";
            woman_shine.style.display = "none";
        }
    }
    if(
        achievementsDoneCounter <= 4 && (currentIndexSkinsRioter == 8 && selectedRioter || currentIndexSkinsRuby == 8 && selectedRuby)
        ||
        achievementsDoneCounter <= 9 && (currentIndexSkinsRioter == 9 && selectedRioter || currentIndexSkinsRuby == 9 && selectedRuby)
        ||
        achievementsDoneCounter <= 19 && (currentIndexSkinsRioter == 10 && selectedRioter || currentIndexSkinsRuby == 10 && selectedRuby)
    ){
        chooseSkinBtn.style.display = "none";
        locked.style.display = "block";
    }else{
        locked.style.display = "none";
        chooseSkinBtn.style.display = "block";
    }

    if(currentIndexSkinsRioter == 8 || currentIndexSkinsRuby == 8){
        lock_text.innerHTML = "Get 5 Achievements (you have " + achievementsDoneCounter + ")"
    }else if(currentIndexSkinsRioter == 9 || currentIndexSkinsRuby == 9){
        lock_text.innerHTML = "Get 10 Achievements (you have " + achievementsDoneCounter + ")"
    }else if(currentIndexSkinsRioter == 10 || currentIndexSkinsRuby == 10){
        lock_text.innerHTML = "Get 20 Achievements (you have " + achievementsDoneCounter + ")"
    }
};

const updateHats = () => {
    if(selectedRioter && !selectedRuby){
        leftHatImg.src = rioterHats[(currentIndexHatsRioter + rioterHats.length - 1) % rioterHats.length];
        middleHatImg.src = rioterHats[currentIndexHatsRioter];
        rightHatImg.src = rioterHats[(currentIndexHatsRioter + 1) % rioterHats.length];
        middleSkinImgWithHat.src = middleSkinImgWithHat_forRioter;
        localStorage.setItem('currentIndexHatsRioter', currentIndexHatsRioter);
    }else if(selectedRuby && !selectedRioter){
        leftHatImg.src = rubyHats[(currentIndexHatsRuby + rubyHats.length - 1) % rubyHats.length];
        middleHatImg.src = rubyHats[currentIndexHatsRuby];
        rightHatImg.src = rubyHats[(currentIndexHatsRuby + 1) % rubyHats.length];
        middleSkinImgWithHat.src = middleSkinImgWithHat_forRuby;
        localStorage.setItem('currentIndexHatsRuby', currentIndexHatsRuby);
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
    clearInterval(flashingInterval) 
    playerSkin1 = playerOneImage.src;
    playerSkin2 = playerTwoImage.src;
    player1.saveHatNumber = player1.hatNumber;
    player2.saveHatNumber = player2.hatNumber;
    flashingInterval = setInterval(() => {
        if(!playerNowFlashing){
            playerOneImage.src = "./res/img/nothing.png"
            playerTwoImage.src = "./res/img/nothing.png"
            shineImage.src = "./res/img/nothing.png"
            shipImage.src = "./res/img/nothing.png"
            player1.hatNumber = 0;
            player2.hatNumber = 0;
            playerNowFlashing = true;
        }else{
            playerOneImage.src = playerSkin1;
            playerTwoImage.src = playerSkin2;
            shipImage.src = "./res/img/ship.png";
            shineImage.src = "./res/img/shine.png"
            player1.hatNumber = player1.saveHatNumber;
            player2.hatNumber = player2.saveHatNumber;
            playerNowFlashing = false;
        }
    }, 100);
    setTimeout(() => {
        playerOneImage.src = playerSkin1;
        playerTwoImage.src = playerSkin2;
        shipImage.src = "./res/img/ship.png";
        shineImage.src = "./res/img/shine.png"
        player1.hatNumber = player1.saveHatNumber;
        player2.hatNumber = player2.saveHatNumber;
        playerNowFlashing = false;
        clearInterval(flashingInterval) 
    }, 2000);
}
