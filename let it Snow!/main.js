// let it snow!

'use strict'

//setting up the canvas
let cnv = document.getElementById("myCanvas");

let ctx = cnv.getContext("2d");

cnv.width = 1200;

cnv.height = 800;

document.addEventListener('keydown' , controlWeat);
// Create an array of snowball objects

let snowBalls = [];

for (let i = 0; i < 150; i++){
    snowBalls.push({
        x: Math.floor(Math.random()*cnv.width),
        y: Math.round(Math.random() * cnv.height - 1),
        r: Math.floor(Math.random()*(10-5) + 5),
        speed: Math.random() * 5 + 1,
    });
}

// to add more snowballs
function controlWeat() {
    console.log(event.code);
    if(event.code == 'KeyF') {
        snowBalls.push({
            x: Math.floor(Math.random()*cnv.width),
            y: 0,
            r: Math.floor(Math.random()*(10-5) + 5),
            speed: Math.random() * 5 + 1,

        });

    }else if(event.code == 'Space') {
        snowBalls.pop( {
            x: Math.floor(Math.random()*cnv.width),
            y: 0,
            r: Math.floor(Math.random()*(10-5) + 5),
            speed: Math.random() * 5 + 1,
        });
    }
}






requestAnimationFrame(drawSnow);

// to draw first snowballs
function drawSnow() {

    // Redraw background
    ctx.fillStyle = 'black';
    ctx.fillRect(0, 0, cnv.width, cnv.height);
    
    for (let i = 0; i < snowBalls.length; i++){
        ctx.fillStyle = 'white';
        ctx.beginPath();
        ctx.arc(snowBalls[i].x , snowBalls[i].y , snowBalls[i].r ,0 , 2 * Math.PI );
        ctx.fill();


        if (snowBalls[i]. y < cnv.height) {
            snowBalls[i].y += snowBalls[i].speed;
        } else if (snowBalls[i].y >= cnv.height) {
            snowBalls[i].y = 0;
            snowBalls[i].x = Math.round(Math.random()* cnv.width);
        }
    }




    




    requestAnimationFrame(drawSnow);
}


