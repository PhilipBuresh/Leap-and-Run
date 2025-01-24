const load_container = document.getElementById("load_container");
const loading_color = document.getElementById("loading_color");
const rioter_running = document.getElementById("rioter_running");
const loading_text = document.getElementById("loading_text");

const gameFiles = [
    //CASTLE Music
    "./res/music_castle/lobby_castle.mp3",
    "./res/music_castle/reaperboss.mp3",
    "./res/music_castle/song1_castle.mp3",
    "./res/music_castle/song2_castle.mp3",
    "./res/music_castle/song3_castle.mp3",
    "./res/music_castle/song4_castle.mp3",
    "./res/music_castle/song5_castle.mp3",
    "./res/music_castle/song6_castle.mp3",
    "./res/music_castle/song7_castle.mp3",
    "./res/music_castle/song8_castle.mp3",
    "./res/music_castle/song9_castle.mp3",
    "./res/music_castle/song10_castle.mp3",
    "./res/music_castle/song11_castle.mp3",
    "./res/music_castle/song12_castle.mp3",
    "./res/music_castle/song13_castle.mp3",
    "./res/music_castle/song14_castle.mp3",

    //STEAMPUNK Music
    "./res/music_steampunk/lobby_steampunk.mp3",
    "./res/music_steampunk/spiderboss.mp3",
    "./res/music_steampunk/song1_steampunk.mp3",
    "./res/music_steampunk/song2_steampunk.mp3",
    "./res/music_steampunk/song3_steampunk.mp3",
    "./res/music_steampunk/song4_steampunk.mp3",
    "./res/music_steampunk/song5_steampunk.mp3",
    "./res/music_steampunk/song6_steampunk.mp3",
    "./res/music_steampunk/song7_steampunk.mp3",
    "./res/music_steampunk/song8_steampunk.mp3",
    "./res/music_steampunk/song9_steampunk.mp3",
    "./res/music_steampunk/song10_steampunk.mp3",
    "./res/music_steampunk/song11_steampunk.mp3",
    "./res/music_steampunk/song12_steampunk.mp3",
    "./res/music_steampunk/song13_steampunk.mp3",
    "./res/music_steampunk/song14_steampunk.mp3",

    //SPACESHIP Music
    "./res/music_spaceship/lobby_spaceship.mp3",
    "./res/music_spaceship/alienboss.mp3",
    "./res/music_spaceship/song1_spaceship.mp3",
    "./res/music_spaceship/song2_spaceship.mp3",
    "./res/music_spaceship/song3_spaceship.mp3",
    "./res/music_spaceship/song4_spaceship.mp3",
    "./res/music_spaceship/song5_spaceship.mp3",
    "./res/music_spaceship/song6_spaceship.mp3",
    "./res/music_spaceship/song7_spaceship.mp3",
    "./res/music_spaceship/song8_spaceship.mp3",
    "./res/music_spaceship/song9_spaceship.mp3",
    "./res/music_spaceship/song10_spaceship.mp3",
    "./res/music_spaceship/song11_spaceship.mp3",
    "./res/music_spaceship/song12_spaceship.mp3",
    "./res/music_spaceship/song13_spaceship.mp3",
    "./res/music_spaceship/song14_spaceship.mp3",

    //SFX
    "./res/sfx/achievement.mp3",
    "./res/sfx/beep.mp3",
    "./res/sfx/bonus_jump.mp3",
    "./res/sfx/boss_slash.mp3",
    "./res/sfx/bullet.mp3",
    "./res/sfx/button.mp3",
    "./res/sfx/completed.mp3",
    "./res/sfx/died.mp3",
    "./res/sfx/door.mp3",
    "./res/sfx/explosion.mp3",
    "./res/sfx/gravity_orb.mp3",
    "./res/sfx/jump.mp3",
    "./res/sfx/key_pick.mp3",
    "./res/sfx/killyou.mp3",
    "./res/sfx/ladder.mp3",
    "./res/sfx/large_land.mp3",
    "./res/sfx/laser_impact.mp3",
    "./res/sfx/laser.mp3",
    "./res/sfx/laugh.mp3",
    "./res/sfx/miss.mp3",
    "./res/sfx/orb_jump.mp3",
    "./res/sfx/pipe.mp3",
    "./res/sfx/portal_sfx.mp3",
    "./res/sfx/punch.mp3",
    "./res/sfx/rioter_attack1.mp3",
    "./res/sfx/rioter_attack2.mp3",
    "./res/sfx/ruby_attack1.mp3",
    "./res/sfx/ruby_attack2.mp3",
    "./res/sfx/shield_hit_alien.mp3",
    "./res/sfx/shield_hit.mp3",
    "./res/sfx/small_land.mp3",
    "./res/sfx/smoke.mp3",
    "./res/sfx/spider_jump.mp3",
    "./res/sfx/spider_land.mp3",
    "./res/sfx/stone_steps.mp3",
    "./res/sfx/wall_break.mp3",
    "./res/sfx/wood_steps.mp3",
    "./res/sfx/metal_steps.mp3",

    //Videos
    "./res/vid/room.mp4",

    //Tutorials
    "./res/tutorials/booster.mp4",
    "./res/tutorials/button.mp4",
    "./res/tutorials/crouching.mp4",
    "./res/tutorials/ghost.mp4",
    "./res/tutorials/gravity_orb.mp4",
    "./res/tutorials/jump_pad.mp4",
    "./res/tutorials/jumping_orb.mp4",
    "./res/tutorials/jumping.mp4",
    "./res/tutorials/key.mp4",
    "./res/tutorials/ladder.mp4",
    "./res/tutorials/laser.mp4",
    "./res/tutorials/moving_platform.mp4",
    "./res/tutorials/moving_spikes.mp4",
    "./res/tutorials/pipes.mp4",
    "./res/tutorials/portal.mp4",
    "./res/tutorials/punching.mp4",
    "./res/tutorials/ship.mp4",
    "./res/tutorials/sliding.mp4",
    "./res/tutorials/walking.mp4",

    //Images
    "./res/img/achievement_bronze.png",
    "./res/img/achievement_gold.png",
    "./res/img/achievement_silver.png",
    "./res/img/alien_bullet.png",
    "./res/img/arrow.png",
    "./res/img/barrel.png",
    "./res/img/big_circle.png",
    "./res/img/black.png",
    "./res/img/block.png",
    "./res/img/block_dark.png",
    "./res/img/block_iron.png",
    "./res/img/block_metal.png",
    "./res/img/block_metal_simple.png",
    "./res/img/block_stripes.png",
    "./res/img/bookshelf.png",
    "./res/img/bookshelf_back.png",
    "./res/img/boost.png",
    "./res/img/boss_alien.png",
    "./res/img/boss_s.png",
    "./res/img/boss_spider.png",
    "./res/img/brick_block.png",
    "./res/img/bullet.png",
    "./res/img/buttons.png",
    "./res/img/computer.png",
    "./res/img/copper_block.png",
    "./res/img/correct.png",
    "./res/img/correct_transparent.png",
    "./res/img/cracked.png",
    "./res/img/darkness1.png",
    "./res/img/dead_rioter.png",
    "./res/img/dead_ruby.png",
    "./res/img/dj.png",
    "./res/img/door.png",
    "./res/img/doors.png",
    "./res/img/doors_future.png",
    "./res/img/doors_sp.png",
    "./res/img/drawer.png",
    "./res/img/egg.png",
    "./res/img/fence.png",
    "./res/img/gate.png",
    "./res/img/ghost.png",
    "./res/img/gravity_orb.png",
    "./res/img/heart_rioter.png",
    "./res/img/heart_ruby.png",
    "./res/img/hologram.png",
    "./res/img/honey_wood.png",
    "./res/img/chain.png",
    "./res/img/chain_back.png",
    "./res/img/chain_doors.png",
    "./res/img/icon.png",
    "./res/img/iron.png",
    "./res/img/iron_block.png",
    "./res/img/iron_key.png",
    "./res/img/iron_sticks.png",
    "./res/img/jump_pad.png",
    "./res/img/key.png",
    "./res/img/ladder.png",
    "./res/img/lantern.png",
    "./res/img/laser_cannon.png",
    "./res/img/laser_x.png",
    "./res/img/laser_x_in_space.png",
    "./res/img/laser_y.png",
    "./res/img/laser_y_in_space.png",
    "./res/img/lasers.png",
    "./res/img/lava.png",
    "./res/img/lava_lamps.png",
    "./res/img/lock.png",
    "./res/img/meteorite_1x1.png",
    "./res/img/meteorite_2x2.png",
    "./res/img/meteorite_3x3.png",
    "./res/img/moving_platform.png",
    "./res/img/moving_walls.png",
    "./res/img/moving_walls_spaceship.png",
    "./res/img/name.png",
    "./res/img/note.png",
    "./res/img/nothing.png",
    "./res/img/orb.png",
    "./res/img/pipes.png",
    "./res/img/player1_buttons.png",
    "./res/img/player2_buttons.png",
    "./res/img/portal1.png",
    "./res/img/portal2.png",
    "./res/img/red_cross.png",
    "./res/img/rope.png",
    "./res/img/saw.png",
    "./res/img/sfx.png",
    "./res/img/shield.png",
    "./res/img/shine.png",
    "./res/img/ship.png",
    "./res/img/slime_metal_simple.png",
    "./res/img/small_circle.png",
    "./res/img/smoke.png",
    "./res/img/sp_doors.png",
    "./res/img/space_background.png",
    "./res/img/space_background_moving.png",
    "./res/img/space_background1.png",
    "./res/img/space_pipes.png",
    "./res/img/space1_roz.png",
    "./res/img/spaceship_doors.png",
    "./res/img/spiders.png",
    "./res/img/spike.png",
    "./res/img/spike_flip.png",
    "./res/img/spike_move.png",
    "./res/img/spike_move_space.png",
    "./res/img/table.png",
    "./res/img/torch.png",
    "./res/img/transparent_block.png",
    "./res/img/trophy.png",
    "./res/img/trophy_logo.png",
    "./res/img/ufo.png",
    "./res/img/vent.png",
    "./res/img/wall.png",
    "./res/img/wall_dark.png",
    "./res/img/wall_space.png",
    "./res/img/wall_space_dark.png",
    "./res/img/wall_steampunk.png",
    "./res/img/wall_steampunk_dark.png",
    "./res/img/wall_verydark.png",
    "./res/img/window.png",
    "./res/img/woods.png",
    
    // Skins
    "./res/skins/black_rioter.png",
    "./res/skins/black_ruby.png",
    "./res/skins/blue_rioter.png",
    "./res/skins/blue_ruby.png",
    "./res/skins/bronze_rioter.png",
    "./res/skins/bronze_ruby.png",
    "./res/skins/gold_rioter.png",
    "./res/skins/gold_ruby.png",
    "./res/skins/green_rioter.png",
    "./res/skins/green_ruby.png",
    "./res/skins/pink_rioter.png",
    "./res/skins/pink_ruby.png",
    "./res/skins/purple_rioter.png",
    "./res/skins/purple_ruby.png",
    "./res/skins/red_rioter.png",
    "./res/skins/red_ruby.png",
    "./res/skins/rioter.png",
    "./res/skins/rioter_black.png",
    "./res/skins/rioter_blue.png",
    "./res/skins/rioter_bronze.png",
    "./res/skins/rioter_gold.png",
    "./res/skins/rioter_green.png",
    "./res/skins/rioter_pink.png",
    "./res/skins/rioter_purple.png",
    "./res/skins/rioter_silver.png",
    "./res/skins/rioter_white.png",
    "./res/skins/rioter_yellow.png",
    "./res/skins/ruby.png",
    "./res/skins/ruby_black.png",
    "./res/skins/ruby_blue.png",
    "./res/skins/ruby_bronze.png",
    "./res/skins/ruby_gold.png",
    "./res/skins/ruby_green.png",
    "./res/skins/ruby_pink.png",
    "./res/skins/ruby_purple.png",
    "./res/skins/ruby_silver.png",
    "./res/skins/ruby_white.png",
    "./res/skins/ruby_yellow.png",
    "./res/skins/silver_rioter.png",
    "./res/skins/silver_ruby.png",
    "./res/skins/white_rioter.png",
    "./res/skins/white_ruby.png",
    "./res/skins/yellow_rioter.png",
    "./res/skins/yellow_ruby.png",

    // Hats
    "./res/hats/bow.png",
    "./res/hats/crown.png",
    "./res/hats/face.png",
    "./res/hats/glasses.png",
    "./res/hats/halo.png",
    "./res/hats/headband.png",
    "./res/hats/headphones.png",
    "./res/hats/horns.png",
    "./res/hats/monocle.png",
    "./res/hats/none.png",
    "./res/hats/rioter_bow.png",
    "./res/hats/rioter_crown.png",
    "./res/hats/rioter_face.png",
    "./res/hats/rioter_glasses.png",
    "./res/hats/rioter_halo.png",
    "./res/hats/rioter_headband.png",
    "./res/hats/rioter_headphones.png",
    "./res/hats/rioter_horns.png",
    "./res/hats/rioter_monocle.png",
    "./res/hats/rioter_none.png",
    "./res/hats/rioter_tophat.png",
    "./res/hats/ruby_bow.png",
    "./res/hats/ruby_crown.png",
    "./res/hats/ruby_face.png",
    "./res/hats/ruby_glasses.png",
    "./res/hats/ruby_halo.png",
    "./res/hats/ruby_headband.png",
    "./res/hats/ruby_headphones.png",
    "./res/hats/ruby_horns.png",
    "./res/hats/ruby_monocle.png",
    "./res/hats/ruby_none.png",
    "./res/hats/ruby_tophat.png",
    "./res/hats/tophat.png",

    // Gifs
    "./res/gif/choose_castle.gif",
    "./res/gif/choose_steampunk.gif",
    "./res/gif/choose_spaceship.gif",
    "./res/gif/rising.gif",
    "./res/gif/rising_slime.gif",
    "./res/gif/shine.gif",

];

const loadedAudios = [];

let loadedCount = 0;
let loadCountColor = 0;

let runningRioterLocation

const loadAudio = (url, onComplete) => {
    const audio = new Audio();
    audio.src = url;
    audio.onloadeddata = () => onComplete();
    audio.onerror = () => console.error(`Error loading audio: ${url}`);
};

const loadImage = (url, onComplete) => {
    const img = new Image();
    img.src = url;
    img.onload = () => onComplete();
    img.onerror = () => console.error(`Error loading image: ${url}`);
};

const loadVideo = (url, onComplete) => {
    const video = document.createElement('video');
    video.src = url;
    video.onloadeddata = () => onComplete();
    video.onerror = () => console.error(`Error loading video: ${url}`);
};

const preloadItems = () => {
    gameFiles.forEach(file => {
        const extension = file.split('.').pop().toLowerCase();
        const onComplete = () => {
            loadedCount++;
            loadCountColor = (100 * loadedCount) / gameFiles.length;
            loading_color.style.width = loadCountColor + "%";
            const loadingBarWidth = document.getElementById('loading_bar').offsetWidth;
            runningRioterLocation = (loadingBarWidth * loadCountColor / 100) - running_rioter.width;
            if(runningRioterLocation >= running_rioter.width){
                running_rioter.style.left = runningRioterLocation + "px"
            }

            if (loadedCount == gameFiles.length) {
                startGame();
            }
        };
        if (['mp3', 'wav', 'ogg'].includes(extension)) {
            loadAudio(file, onComplete);
        } else if (['png', 'jpg', 'jpeg', 'gif'].includes(extension)) {
            loadImage(file, onComplete);
        } else if (['mp4', 'webm', 'ogg'].includes(extension)) {
            loadVideo(file, onComplete);
        } else {
            console.warn(`Unknown file type: ${file}`);
            onComplete();
        }
    });
};

const startGame = () => {
    loading_text.innerHTML = "Loaded!"
    loading_color.style.backgroundImage = "linear-gradient(to right, rgb(0, 255, 64) , rgb(0, 255, 64))";
    clearInterval(loadingInterval);
    setTimeout(() => {
        load_container.style.opacity = "0";
        setTimeout(() => {
            fullBlack.style.opacity = "0";
            document.body.style.pointerEvents = "auto";
        }, 1000);
    }, 300);
};

let loadingDotNum = 1;

const loadingInterval = setInterval(() => {
    if(loadingDotNum == 1){
        loading_text.innerHTML = "Loading."
        loadingDotNum = 2;
    }else if(loadingDotNum == 2){
        loading_text.innerHTML = "Loading.."
        loadingDotNum = 3;
    }else if(loadingDotNum == 3){
        loading_text.innerHTML = "Loading..."
        loadingDotNum = 1;
    }
}, 200);
