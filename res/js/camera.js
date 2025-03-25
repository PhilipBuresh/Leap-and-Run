let nowCamera
let thenCamera = Date.now()
let deltaCamera

let CameraMovingId;

let cameraX = 0;
let cameraY = 0;

let cameraMoveXCount = 0;

let canCameraStop = false;

let spiderBossCamera1 = false; // Left to Right
let spiderBossCamera2 = false; // Bottom to Top

let reaperBossCamera1 = false; // Top to Bottom
let reaperBossCamera2 = false; // Bottom to Top

let alienBossCamera1 = false; // Bottom to Top
let alienBossCamera2 = false;

const cameraMove = () => {
    const cameraMoving = () => {
        CameraMovingId = requestAnimationFrame(() => cameraMoving());
        nowCamera = Date.now();
        deltaCamera = nowCamera - thenCamera;
        if (deltaCamera > interval) {
            thenCamera = nowCamera - (deltaCamera % interval);
            // Spider Boss Camera
            if(spiderBossCamera1){
                cameraMoveXCount++;
                if(cameraMoveXCount >= 52){
                    canCameraStop = true;
                    cameraX += 0.1;
                }else{
                    cameraX -= 0.099;
                }
                c.translate(cameraX, 0)
                if(canCameraStop && cameraX >= 0.1){
                    canCameraStop = false;
                    spiderBossCamera1 = false;
                    if(!spiderBossDead){
                        spiderBossCamera2 = true;
                    }
                    cameraMoveXCount = 0;
                    cancelAnimationFrame(CameraMovingId)
                    if(!spiderBossDead){ // CameraScale wont continue in the last scene
                        setTimeout(() => {
                            cameraMove();
                            cameraScale();
                            inGame = true;
                        }, 3000);
                    }
                } 
            }
            if(spiderBossCamera2){
                cameraMoveXCount++;
                if(cameraY <= 9){
                    cameraY += 0.16;
                }else{
                    spiderBossCamera2 = false;
                    cancelAnimationFrame(CameraMovingId)
                }
                c.translate(0, cameraY)
            }

            // Crimson Reaper Boss Camera
            if(reaperBossCamera1){
                cameraMoveXCount++;
                if(cameraMoveXCount >= 41){
                    canCameraStop = true;
                    cameraY += 0.099;
                }else{
                    cameraY -= 0.098;
                }
                c.translate(0, cameraY)
                if(canCameraStop && cameraY >= 0.1){
                    canCameraStop = false;
                    cameraMoveXCount = 0;
                    cancelAnimationFrame(CameraMovingId)
                } 
            }
            if(reaperBossCamera2){
                cameraMoveXCount++;
                if(cameraY <= 14.4){
                    cameraY += 0.36;
                }else{
                    reaperBossCamera2 = false;
                    cancelAnimationFrame(CameraMovingId)
                }
                c.translate(0, cameraY)
            }

            // Alien Boss Camera
            if(alienBossCamera1){
                cameraMoveXCount++;
                if(cameraMoveXCount <= 53){
                    cameraY += 0.098;
                }else{
                    canCameraStop = true;
                    cameraY -= 0.095;
                    
                }
                c.translate(0, cameraY)
                if(canCameraStop && cameraY <= 0.1){
                    canCameraStop = false;
                    cameraMoveXCount = 0;
                    cancelAnimationFrame(CameraMovingId)
                    setTimeout(() => {
                        cameraScale() 
                    }, 450);
                }
            }
        }
    }
    cameraMoving()
}

let nowScale
let thenScale = Date.now()
let deltaScale

let cameraSize = 0.9914;
let cameraSizeCount = 0;

let cameraScalingId;

let cameraIsMoving = false;

const cameraScale = () => {
    const cameraScaling = () => {
        cameraScalingId = requestAnimationFrame(() => cameraScaling());
        nowScale = Date.now();
        deltaScale = nowScale - thenScale;
        if (deltaScale > interval) {
            thenScale = nowScale - (deltaScale % interval);
            //Spider Boss Camera
            c.scale(cameraSize, cameraSize)
            c.translate(4.45, 0)
            cameraSizeCount++;
            if(cameraSizeCount >= 80){
                cameraSizeCount = 0;
                cancelAnimationFrame(cameraScalingId);
                c.restore();
            }
            //
        }
    }
    cameraScaling()
}
