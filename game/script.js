const canvas = document.getElementById("pongCanvas");
const ctx = canvas.getContext("2d");
canvas.width = 800;
canvas.height = 400;

let player1Score = 0;
let player2Score = 0;
let finalScore = 5;
let level = 1;

let ballSpeedX = 5,
  ballSpeedY = 5;
const paddleWidth = 10,
  paddleHeight = 100;
const ballRadius = 10;
let ballX = canvas.width / 2,
  ballY = canvas.height / 2;

const paddle1 = { x: 0, y: canvas.height / 2 - paddleHeight / 2, speed: 10 };
const paddle2 = {
  x: canvas.width - paddleWidth,
  y: canvas.height / 2 - paddleHeight / 2,
  speed: 3 + level,
};

function drawRect(x, y, w, h, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, w, h);
}

function drawCircle(x, y, r, color) {
  ctx.fillStyle = color;
  ctx.beginPath();
  ctx.arc(x, y, r, 0, Math.PI * 2, false);
  ctx.closePath();
  ctx.fill();
}

function drawNet() {
  ctx.strokeStyle = "white";
  ctx.setLineDash([10, 15]);
  ctx.lineWidth = 2;
  ctx.beginPath();
  ctx.moveTo(canvas.width / 2, 0);
  ctx.lineTo(canvas.width / 2, canvas.height);
  ctx.stroke();
  ctx.setLineDash([]);
}

function resetBall() {
  ballX = canvas.width / 2;
  ballY = canvas.height / 2;
  ballSpeedX = Math.random() > 0.5 ? 5 + level : -5 - level;
  ballSpeedY = (Math.random() * 3 - 1.5) * level;
  paddle2.y = canvas.height / 2 - paddleHeight / 2; // Reset opponent paddle position
}

function moveBall() {
  ballX += ballSpeedX;
  ballY += ballSpeedY;

  if (ballY + ballRadius > canvas.height || ballY - ballRadius < 0) {
    ballSpeedY = -ballSpeedY;
  }

  if (ballX - ballRadius < 0) {
    player2Score++;
    updateScore();
    resetBall();
  } else if (ballX + ballRadius > canvas.width) {
    player1Score++;
    updateScore();
    resetBall();
  }

  let paddle = ballX < canvas.width / 2 ? paddle1 : paddle2;
  if (
    ballX - ballRadius < paddle.x + paddleWidth &&
    ballX + ballRadius > paddle.x &&
    ballY > paddle.y &&
    ballY < paddle.y + paddleHeight
  ) {
    ballSpeedX = -ballSpeedX;
    ballSpeedX *= 1.05;
    ballSpeedY += Math.random() * 2 - 1;
  }
}

function moveOpponentPaddle() {
  const targetY = ballY - paddleHeight / 2;
  const maxPaddleSpeed = 2 + level;

  if (paddle2.y < targetY - maxPaddleSpeed) {
    paddle2.y += maxPaddleSpeed;
  } else if (paddle2.y > targetY + maxPaddleSpeed) {
    paddle2.y -= maxPaddleSpeed;
  }
  paddle2.y = Math.max(Math.min(paddle2.y, canvas.height - paddleHeight), 0);
}

function updateScore() {
  if (player1Score >= finalScore) {
    alert("Player 1 wins!");
    resetGame();
  } else if (player2Score >= finalScore) {
    alert("Player 2 wins!");
    resetGame();
  }
}

function resetGame() {
  player1Score = 0;
  player2Score = 0;
  level = 1;
  resetBall();
}

function handleKeyDown(event) {
  switch (event.key) {
    case "ArrowUp":
      paddle1.y = Math.max(paddle1.y - paddle1.speed, 0);
      break;
    case "ArrowDown":
      paddle1.y = Math.min(
        paddle1.y + paddle1.speed,
        canvas.height - paddleHeight
      );
      break;
    case "1":
      finalScore = 5;
      break;
    case "2":
      finalScore = 10;
      break;
    case "+":
      level++;
      break;
  }
}

function draw() {
  drawRect(0, 0, canvas.width, canvas.height, "#4CAF50");
  drawNet();
  drawRect(paddle1.x, paddle1.y, paddleWidth, paddleHeight, "white");
  drawRect(paddle2.x, paddle2.y, paddleWidth, paddleHeight, "white");
  drawCircle(ballX, ballY, ballRadius, "white");

  ctx.fillStyle = "white";
  ctx.font = "20px Arial";
  ctx.fillText("Player 1: " + player1Score, 20, 20);
  ctx.fillText("Player 2: " + player2Score, canvas.width - 120, 20);
  ctx.fillText("Level: " + level, canvas.width / 2 - 40, 20);
  ctx.fillText("Final Score: " + finalScore, canvas.width / 2 - 50, 50);
}

function gameLoop() {
  moveBall();
  moveOpponentPaddle();
  draw();
}

document.addEventListener("keydown", handleKeyDown);
setInterval(gameLoop, 1000 / 60);
