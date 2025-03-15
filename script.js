
const canvas = document.getElementById("carromCanvas");
const ctx = canvas.getContext("2d");

const striker = { x: 300, y: 550, radius: 15, speed: 10 };
const pawns = [
    { x: 300, y: 300, radius: 10, color: "black" },
    { x: 280, y: 300, radius: 10, color: "white" },
    { x: 320, y: 300, radius: 10, color: "white" },
    { x: 300, y: 280, radius: 10, color: "black" }
];

function drawBoard() {
    ctx.fillStyle = "#f5deb3";
    ctx.fillRect(0, 0, 600, 600);

    // Draw pockets
    const pockets = [
        { x: 0, y: 0 },
        { x: 600, y: 0 },
        { x: 0, y: 600 },
        { x: 600, y: 600 }
    ];
    ctx.fillStyle = "#000";
    pockets.forEach(p => {
        ctx.beginPath();
        ctx.arc(p.x, p.y, 15, 0, Math.PI * 2);
        ctx.fill();
    });
}

function drawStriker() {
    ctx.fillStyle = "red";
    ctx.beginPath();
    ctx.arc(striker.x, striker.y, striker.radius, 0, Math.PI * 2);
    ctx.fill();
}

function drawPawns() {
    pawns.forEach(pawn => {
        ctx.fillStyle = pawn.color;
        ctx.beginPath();
        ctx.arc(pawn.x, pawn.y, pawn.radius, 0, Math.PI * 2);
        ctx.fill();
    });
}

function update() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawBoard();
    drawPawns();
    drawStriker();
    requestAnimationFrame(update);
}

document.addEventListener("keydown", (e) => {
    if (e.key === "ArrowLeft" && striker.x - striker.radius > 0) striker.x -= striker.speed;
    if (e.key === "ArrowRight" && striker.x + striker.radius < canvas.width) striker.x += striker.speed;
    if (e.key === " ") {
        striker.y -= 50;
        setTimeout(() => { striker.y = 550; }, 200);
    }
});

update();
