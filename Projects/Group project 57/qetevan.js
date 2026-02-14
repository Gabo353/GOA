let score = 0
let lives = 3
let level = 1
let speed = 1200
let gameinterval
let highscore = 0

document.getElementById("highscore").textContent = highscore

function createbox(type){
    const box = document.createElement("div")
    box.classList.add("box", type)

    movebox(box)
    document.getElementById("gamearea").appendChild(box)

    box.addEventListener("click", () =>{
        if (type === "normal"){
            score += 10
        } 
        else if (type === "bomb"){
            lives--
        } 

        updatestats()
        box.remove()
    })

    return box
}

function movebox(box){
    const area = document.getElementById("gamearea")
    const maxx = area.clientWidth - 50
    const maxy = area.clientHeight - 50

    box.style.left = Math.random() * maxx + "px"
    box.style.top = Math.random() * maxy + "px"
}

function spawnboxes(){
    const area = document.getElementById("gamearea")
    area.innerHTML = ""

    for (let i = 0; i < level; i++){
        createbox("normal")
    }

    if (Math.random() < 0.4) createbox("bomb")
    if (Math.random() < 0.3) createbox("power")

    lives--
    updatestats()

    if (lives <= 0) endgame()
}

function updatestats() {
    document.getElementById("score").textContent = score
    document.getElementById("lives").textContent = lives
    document.getElementById("level").textContent = level

    if (score >= level * 100){
        level++
        speed *= 0.9
    }
}

function startgame() {
    score = 0
    lives = 3
    level = 1
    speed = 1200

    updatestats()
    clearInterval(gameinterval)

    gameinterval = setInterval(spawnboxes, speed)
}

function endgame() {
    clearInterval(gameinterval)
    alert("Game Over! Score: " + score)

    if (score > highscore) {
        highscore = score
        document.getElementById("highscore").textContent = highscore
    }
}