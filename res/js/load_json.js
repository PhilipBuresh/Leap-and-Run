//------------------------------------------------------------ LOAD CREDITS in Menu

const loadCredits = async () => {
    const response = await fetch("./res/json/credits.json");
    const credits = await response.json();
    
    const creditsList = document.getElementById("credits_list");

    credits.forEach(credit => {
        const songBox = document.createElement("div");
        songBox.id = "song_box";

        const creditDiv = document.createElement("div");

        const creditTitle = document.createElement("h3");
        creditTitle.textContent = credit.object;

        const creditInfo = document.createElement("p");
        creditInfo.textContent = credit.name + " - " + credit.author;

        creditDiv.appendChild(creditTitle);
        creditDiv.appendChild(creditInfo);
        songBox.appendChild(creditDiv);  
        creditsList.appendChild(songBox);
    });
}

loadCredits();

//------------------------------------------------------------ LOAD CREDITS in Alien Boss

const loadCreditsInAlienBoss = async () => {
    const response = await fetch("./res/json/credits.json");
    const credits = await response.json();
    
    const creditsList = document.getElementById("credits_boss");

    credits.forEach(credit => {
        const creditDiv = document.createElement("div");

        const creditTitle = document.createElement("h3");
        creditTitle.textContent = credit.object;

        const creditInfo = document.createElement("p");
        creditInfo.textContent = credit.name + " - " + credit.author;

        creditDiv.appendChild(creditTitle);
        creditDiv.appendChild(creditInfo);

        creditsList.appendChild(creditDiv);
    });
    //EASTER EGG
    let goldenEgg = document.createElement("img");
    goldenEgg.id = "golden_egg";
    goldenEgg.src = "./res/img/egg.png";
    goldenEgg.alt = "egg";
    goldenEgg.draggable = false;
    goldenEgg.zIndex = 3;
    creditsList.appendChild(goldenEgg);

    goldenEgg.onclick = () => {
        achievementGoldenEgg()
        goldenEgg.style.display = "none";
    };
}

loadCreditsInAlienBoss();

//------------------------------------------------------------ LOAD TUTORIALS
const loadTutorials = async () => {
    const response = await fetch("./res/json/tutorials.json");
    const tutorials = await response.json();

    const tutorialsList = document.getElementById("tutorials_list");

    tutorials.forEach((tutorial, index) => {
        const tutorialBox = document.createElement("div");
        tutorialBox.id = "tutorial";

        if (index === tutorials.length - 1) {
            tutorialBox.style.paddingBottom = "5vw";
        }

        const tutorialName = document.createElement("p");
        tutorialName.textContent = tutorial.name;
        tutorialName.id = "tutorial_name";

        const tutorialVideo = document.createElement("video");
        tutorialVideo.src = tutorial.video;
        tutorialVideo.type = "video/webm";
        tutorialVideo.autoplay = true;
        tutorialVideo.loop = true;
        tutorialVideo.muted = true;
        tutorialVideo.id = "tutorial_video";

        tutorialBox.appendChild(tutorialName);
        tutorialBox.appendChild(tutorialVideo);

        tutorialsList.appendChild(tutorialBox);
    });
};

loadTutorials();


