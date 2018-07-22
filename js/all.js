var canvas = document.getElementById("mycanvas");
var ctx = canvas.getContext("2d");

var ww = window.innerWidth;
var wh = window.innerHeight;

canvas.width = ww;
canvas.height = wh;

var ship = {
    x:0,
    y:0,
    deg:0,
    r:60
}

function init(){
    ship.deg=45;

}
function update(){

    ship.deg=mousePos.x/50;
    console.log(mousePos);
    
}
function draw(){
    ctx.fillStyle= "#001D2E";
    ctx.fillRect(0,0,ww,wh);
    
    //line
    let span= 50;
    ctx.beginPath();
    for(var i=0;i<ww;i+=span){
        ctx.moveTo(i,0);
        ctx.lineTo(i,wh);
    }
    for(var i=0;i<wh;i+=span){
        ctx.moveTo(0,i);
        ctx.lineTo(ww,i);
    }
    ctx.strokeStyle="rgba(255,255,255,0.2)";
    ctx.stroke();
    
    
    //ship
    ctx.save();
    
        ctx.translate(ww/2,wh/2);
        ctx.rotate(ship.deg);
        
        ctx.fillStyle="white";
        ctx.fillRect(100,-25/2,25,25);
        
        ctx.beginPath();
        ctx.arc(0,0,ship.r,0,Math.PI*2);
        ctx.strokeStyle="white";
        ctx.lineWidth=15;
    
        ctx.shadowBlur=20;
        ctx.shadowColor="white";
    
        ctx.stroke();
    
        
        
        for(var i=0;i<3;i++){
            ctx.lineWidth=5;
            ctx.beginPath();
            ctx.moveTo(0,0);
            ctx.lineTo(0,-ship.r)
            ctx.stroke();
            ctx.rotate(Math.PI*2/3);
        }
    ctx.restore();
    
    //stoneYellow
    ctx.save();
        ctx.translate(ww-100,200);
        ctx.fillStyle="#F5AF5F";
        ctx.beginPath();
        ctx.arc(0,0,ship.r,0,Math.PI*2);
        ctx.fill();
    ctx.restore();
    
    //stoneBlue
    ctx.save();
        ctx.translate(ww-400,wh-200);
        ctx.fillStyle="#3676BB";
        ctx.beginPath();
        ctx.moveTo(150,180);
        ctx.lineTo(100,100);
        ctx.lineTo(200,100);
        ctx.closePath;
        ctx.fill();
    ctx.restore();
    
    //stoneRed
    ctx.save();
        ctx.translate(100,50);
        ctx.fillStyle="#E7465D";
        ctx.beginPath();
        ctx.moveTo(110,100);
        ctx.lineTo(200,100);
        ctx.lineTo(225,150);
        ctx.lineTo(200,230);
        ctx.lineTo(90,230);
        ctx.lineTo(40,150);
        ctx.closePath;
        ctx.fill();
    ctx.restore();
    
    requestAnimationFrame(draw);
}

init();
let fps=60;
setInterval(update,1000/fps);
requestAnimationFrame(draw);

var mousePos={
    x:0,
    y:0
}
canvas.addEventListener("mousemove",function(evt){
    //console.log(evt.x,evt.y);
    mousePos.x=evt.x;
    mousePos.y=evt.y;
})