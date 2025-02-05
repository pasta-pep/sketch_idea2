let signaturePath = [];
let t = 0;
let sharpieX, sharpieY;
let constitution, sharpie, trumpSignature, tequila, lobster, animatedSig1;
let signatureCompleted = false;
let startTime;

function preload() {
    // Load images
    constitution = loadImage('constitution.png');  
    sharpie = loadImage('sharpie.png');  
    trumpSignature = loadImage('trumpSignature.png');  
    lobster = loadImage('lobster.png');
    tequila = loadImage('tequila.png');
    animatedSig1 = loadImage('animatedSig1.gif'); 
}

function setup() {
    createCanvas(2000, 1400);

    // Define signature path
    signaturePath = [
        createVector(500, 600),
        createVector(550, 580),
        createVector(600, 590),
        createVector(650, 570),
        createVector(700, 580),
        createVector(750, 590),
        createVector(800, 570)
    ];

    resetAnimation();
}

function draw() {
    background(255);

    // Draw the paper
    image(constitution, 400, 250, 800, 400);
    image(lobster, 400, 250, 800, 400);
    image(tequila, 400, 250, 800, 400);

    // Calculate animation progress
    let animationDuration = 2000; // Adjust to match GIF duration
    let currentTime = millis() - startTime;
    let progress = min(currentTime / animationDuration, 1);

    // Update sharpie position
    if (progress < 1) {
        t = progress * (signaturePath.length - 1);
        let idx = int(t);
        let nextIdx = min(idx + 1, signaturePath.length - 1);
        let lerpAmount = t - idx;

        let p1 = signaturePath[idx];
        let p2 = signaturePath[nextIdx];

        if (p1 && p2) {
            sharpieX = lerp(p1.x, p2.x, lerpAmount);
            sharpieY = lerp(p1.y, p2.y, lerpAmount);
        }
    } else if (!signatureCompleted) {
        signatureCompleted = true;
        setTimeout(resetAnimation, 2000); // Adjusted delay
    }

    // Draw sharpie and animated signature
    image(sharpie, sharpieX - 25, sharpieY - 300, 500, 500);
    image(animatedSig1, 200, 100, 800, 800);
}

function resetAnimation() {
    signatureCompleted = false;
    t = 0;
    startTime = millis(); // Reset the start time
    if (signaturePath.length > 0) {
        sharpieX = signaturePath[0].x;
        sharpieY = signaturePath[0].y;
    }
}
