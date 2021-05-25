let canvas = document.getElementById("canvas");
let context = canvas.getContext("2d");

canvas.width = 800;
canvas.height = 800;

const twoPI = Math.PI * 2;
const PI = Math.PI;


function showClock() {
    let width = canvas.width;
    let height = canvas.height;
    let date = new Date();
    let hour = date.getHours();
    let min = date.getMinutes();
    let sec = date.getSeconds();
    let theta;
    let secondHandLength = width / 2;

    context.clearRect(0, 0, width, height);

    // hour marks
    for(let i = 0; i < 12; i++) {
        let angle = (i - 3) * (twoPI) / 12;
        context.lineWidth = 1;

        context.beginPath();
        let x1 = (width / 2) + Math.cos(angle) * (secondHandLength);
        let y1 = (height / 2) + Math.sin(angle) * (secondHandLength);
        let x2 = (width / 2) + Math.cos(angle) * ((secondHandLength) - secondHandLength / 7);
        let y2 = (height / 2) + Math.sin(angle) * ((secondHandLength) - (secondHandLength / 7));
        context.moveTo(x1, y1);
        context.lineTo(x2, y2);
        context.strokeStyle = "#fff";
        context.stroke();
    }

    // seconds hand
    let secAngle = (twoPI * (sec / 60)) - (twoPI / 4);
    context.lineWidth = 0.5;

    context.beginPath();
    context.moveTo(width / 2, height / 2);
    context.lineTo(
        (width / 2 - Math.cos(secAngle) * (secondHandLength - (secondHandLength / 6))), 
        (height / 2 - Math.sin(secAngle) * (secondHandLength - (secondHandLength / 6)))
    );
    context.strokeStyle = "yellow";
    context.stroke();

    // minute hand
    let minAngle = (twoPI * (min / 60)) - (PI / 2);
    context.lineWidth = 1;

    context.beginPath();
    context.moveTo(width / 2, height / 2);
    context.lineTo(
        (width / 2 - Math.cos(minAngle) * (secondHandLength - (secondHandLength / 4))), 
        (height / 2 - Math.sin(minAngle) * (secondHandLength - (secondHandLength / 4)))
    );
    context.strokeStyle = "white";
    context.stroke();
    
    // hour hand
    let hourAngle = (twoPI * (hour * 5 + (min / 60) * 5) / 60) - (PI / 2);
    context.lineWidth = 2;

    context.beginPath();
    context.moveTo(width / 2, height / 2);
    context.lineTo(
        (width / 2 - Math.cos(hourAngle) * (secondHandLength - (secondHandLength / 2))), 
        (height / 2 - Math.sin(hourAngle) * (secondHandLength - (secondHandLength / 2)))
    );
    context.strokeStyle = "white";
    context.stroke();
}

showClock();
setInterval(showClock, 1000);