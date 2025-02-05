// let signaturePath = [];
// let t = 0;
// let sharpieX, sharpieY;
// let constitution, sharpie, trumpSignature, tequila, lobster, animatedSig;
// let signatureCompleted = false;  

// function preload() {
//     // Load images
//     constitution = loadImage('constitution.png');  
//     sharpie = loadImage('sharpie.png');  
//     animatedSig = loadImage('animatedSig.gif');  
//     lobster = loadImage('lobster.png');
//     tequila = loadImage('tequila.png');
// }

// function setup() {
//     createCanvas(2000, 1400);

//     // Define signature path (adjusted for better flow)
//     signaturePath = [
//         createVector(500, 600),
//         createVector(550, 580),
//         createVector(600, 590),
//         createVector(650, 570),
//         createVector(700, 580),
//         createVector(750, 590),
//         createVector(800, 570)
//     ];

//     resetAnimation();
// }

// function draw() {
//     background(255);  // White background

//     // Draw the paper
//     image(constitution, 400, 250, 800, 400);

//     image(lobster, 400, 250, 800, 400);

//     image(tequila, 400, 250, 800, 400);

//     // Draw the progressive signature
//     //drawSignature();

//    image(animatedSig, 200, 100, 800, 800);   

//     // Draw the sharpie at the current position
//     image(sharpie, sharpieX - 25, sharpieY - 300, 500, 500); // Smaller sharpie
// }

// // // Function to progressively reveal the signature image
// // function drawSignature() {
// //     if (t > 0) {
// //         let sigWidth = trumpSignature.width * 0.5 * (t / signaturePath.length); // Show only a portion
// //         let sigHeight = trumpSignature.height * 0.5;
// //         image(trumpSignature, 550, 200, sigWidth, sigHeight);
// //     }
// // }

// // Animate the sharpie along the signature path
//     if (t < signaturePath.length - 1) {
//         t += 0.03;  // Adjust speed

//         let idx = int(t);
//         let nextIdx = min(idx + 1, signaturePath.length - 1);
//         let lerpAmount = t - idx;

//         let p1 = signaturePath[idx];
//         let p2 = signaturePath[nextIdx];

//         if (p1 && p2) {
//             sharpieX = lerp(p1.x, p2.x, lerpAmount);
//             sharpieY = lerp(p1.y, p2.y, lerpAmount);
//         }
//     } else {
//         if (!signatureCompleted) {
//             signatureCompleted = true;
//             setTimeout(resetAnimation, 2000);
//         }
//     }    

// // Reset animation
// function resetAnimation() {
//     signatureCompleted = false; // Reset flag
//     t = 0;

//     if(signaturePath.length > 0) {
//         sharpieX = signaturePath[0].x;  
//         sharpieY = signaturePath[0].y;
// }

// }


// let signaturePath = [];
// let t = 0;
// let sharpieX, sharpieY;
// let constitution, sharpie, trumpSignature, tequila, lobste, animatedSig;
// let signatureCompleted = false;  

// function preload() {
//     // Load images
//     constitution = loadImage('constitution.png');  
//     sharpie = loadImage('sharpie.png');  
//     trumpSignature = loadImage('trumpSignature.png');  
//     lobster = loadImage('lobster.png');
//     tequila = loadImage('tequila.png');
//     animatedSig = loadImage('animatedSig.gif'); 

// }

// function setup() {
//     createCanvas(2000, 1400);

//     // Define signature path (adjusted for better flow)
//     signaturePath = [
//         createVector(500, 600),
//         createVector(550, 580),
//         createVector(600, 590),
//         createVector(650, 570),
//         createVector(700, 580),
//         createVector(750, 590),
//         createVector(800, 570)
//     ];

//     resetAnimation();
// }

// function draw() {
//     background(255);  // White background

//     // Draw the paper
//     image(constitution, 400, 250, 800, 400);

//     image(lobster, 400, 250, 800, 400);

//     image(tequila, 400, 250, 800, 400);

//     // Draw the progressive signature
//     //drawSignature();

//     // Animate the sharpie along the signature path
//     if (t < signaturePath.length - 1) {
//         t += 0.05;  // Adjust speed

//         let idx = int(t);
//         let nextIdx = min(idx + 1, signaturePath.length - 1);
//         let lerpAmount = t - idx;

//         let p1 = signaturePath[idx];
//         let p2 = signaturePath[nextIdx];

//         if (p1 && p2) {
//             sharpieX = lerp(p1.x, p2.x, lerpAmount);
//             sharpieY = lerp(p1.y, p2.y, lerpAmount);
//         }
//     } else {
//         if (!signatureCompleted) {
//             signatureCompleted = true;
//             setTimeout(resetAnimation, 2000);
//         }
//     }    

//     // Draw the sharpie at the current position
//     image(sharpie, sharpieX - 25, sharpieY - 300, 500, 500); // Smaller sharpie
//     image(animatedSig, 200, 100, 800, 800); 
// }

// // Function to progressively reveal the signature image
// function drawSignature() {
//     if (t > 0) {
//         let sigWidth = trumpSignature.width * 0.5 * (t / signaturePath.length); // Show only a portion
//         let sigHeight = trumpSignature.height * 0.5;
//         image(trumpSignature, 550, 200, sigWidth, sigHeight);
//     }
// }

// // Reset animation
// function resetAnimation() {
//     signatureCompleted = false; // Reset flag
//     t = 0;

//     if(signaturePath.length > 0) {
//         sharpieX = signaturePath[0].x;  
//         sharpieY = signaturePath[0].y;
// }

// }



let signaturePath = [];
let t = 5;
let sharpieX, sharpieY;
let constitution, sharpie, trumpSignature, tequila, lobste, animatedSig;
let signatureCompleted = false;  
let startTime; // Add timing control

function preload() {
    // Load images
    constitution = loadImage('constitution.png');  
    sharpie = loadImage('sharpie.png');  
    trumpSignature = loadImage('trumpSignature.png');  
    lobster = loadImage('lobster.png');
    tequila = loadImage('tequila.png');
    animatedSig = loadImage('animatedSig.gif'); 
}

function setup() {
    createCanvas(2000, 1400);
    // Define signature path (adjusted for better flow)
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

    // Calculate animation progress based on time
    let animationDuration = 2000; // Duration in milliseconds - adjust to match your GIF duration
    let currentTime = millis() - startTime;
    let progress = min(currentTime / animationDuration, 1);
    
    // Update sharpie position based on progress
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
        setTimeout(resetAnimation, 100); // Shorter delay before reset
    }
    
    // Draw the sharpie and signature
    image(sharpie, sharpieX - 25, sharpieY - 300, 500, 500);
    image(animatedSig, 200, 100, 800, 800); 
}

function resetAnimation() {
    signatureCompleted = false;
    t = 0;
    startTime = millis(); // Reset the start time
    if(signaturePath.length > 0) {
        sharpieX = signaturePath[0].x;  
        sharpieY = signaturePath[0].y;
    }
}