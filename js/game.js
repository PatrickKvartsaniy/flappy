const cvs = document.getElementById("cvs")
const ctx = cvs.getContext("2d")

const bird       = new Image()
const bg         = new Image()
const fg         = new Image()
const pipeUp     = new Image()
const pipeBottom = new Image()

bird.src = "img/flappy_bird_bird.png"
bg.src = "img/flappy_bird_bg.png"
fg.src = "img/flappy_bird_fg.png"
pipeUp.src = "img/flappy_bird_pipeUp.png"
pipeBottom.src = "img/flappy_bird_pipeBottom.png"

const gap     = 90
const grav    = 1
const clickUp = 22.5

var xPos = 10
    yPos = 150

var pipe = []

pipe[0] = {
    x: cvs.width,
    y: 0
}


function draw(){
    ctx.drawImage(bg, 0, 0)

    for(let i = 0; i < pipe.length; i++)
    {
    ctx.drawImage(pipeUp, pipe[i].x, pipe[i].y)
    ctx.drawImage(pipeBottom, pipe[i].x, pipe[i].y + pipeUp.height + gap)

    pipe[i].x--
    }
    ctx.drawImage(fg, 0, cvs.height - fg.height )
    
    ctx.drawImage(bird, xPos, yPos)

    yPos += grav
    requestAnimationFrame(draw)
    cvs.onclick = () => yPos-=clickUp 
}

pipeBottom.onload = draw