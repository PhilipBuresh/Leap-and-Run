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

    loadCreditsInAlienBoss();
    
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
