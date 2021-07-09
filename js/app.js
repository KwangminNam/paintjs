const canvas = document.getElementById('jsCanvas');
const ctx = canvas.getContext('2d');
const colors =document.getElementsByClassName('jsColor');
const range = document.getElementById('jsRange');

canvas.width = 700;
canvas.height = 700;

ctx.strokeStyle ="#2c2c2c";
ctx.lineWidth = 2.5; 

let painting = false;

function stopPainting(){
    painting = false;
}

function startPainting(){
    painting = true;
}


function onMouseMove(event){
    const x = event.offsetX;
    const y = event.offsetY;
    if(!painting){
        ctx.beginPath();
        ctx.moveTo(x,y);
    }else{
        ctx.lineTo(x,y);
        ctx.stroke();
    }
}

function onMouseDown(event){
    painting = true;
}

function onMouseUp(event){
    stopPainting()
}


function changeColor(event){
   const bgcolor = event.target.style.backgroundColor;
   ctx.strokeStyle =bgcolor ;
}


if(canvas){
    canvas.addEventListener('mousemove',onMouseMove);
    canvas.addEventListener('mousedown',startPainting);
    canvas.addEventListener('mouseup',stopPainting);
    canvas.addEventListener('mouseleave', stopPainting);
}

Array.from(colors).forEach(color => color.addEventListener("click",changeColor))