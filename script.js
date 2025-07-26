let panelBtm = document.querySelector("#pbtm");
let hitnumBox = document.querySelector("#hitNum");
let timerBox = document.querySelector("#timer");
let scoreBox = document.querySelector("#score");

let HitRdmNum = 0;
let time = 60;
let score = 0;


// Generate bubbles
let generateBubbles = (count) => {
  let clutter = '';
  for (let i = 0; i <= count; i++) {
    let rdmNum = Math.floor(Math.random() * 10);
    clutter += `<div class="bubble">${rdmNum}</div>`;
  }
  panelBtm.innerHTML = clutter;
};

// Set a random hit number
let hitNum = () => {
  HitRdmNum = Math.floor(Math.random() * 10);
  hitnumBox.textContent = HitRdmNum;
};

// Start the game timer
let startTimer = () => {
 let  intervalId = setInterval(() => {
    if (time > 0) {
      time--;
      timerBox.textContent = time;
    } else {
      clearInterval(intervalId);
      endGame();
    }
  }, 1000);
};

// Game over
let endGame = () => {
  panelBtm.innerHTML = `Game Over! Your Score is: ${score}`;
  panelBtm.removeEventListener("click", handleBubbleClick);
  showRestartButton();
};

// Handle score and logic when bubbles are clicked
let handleBubbleClick = (e) => {
  if (e.target.classList.contains("bubble")) {
    if (Number(e.target.textContent) === HitRdmNum) {
      score += 10;
    } else {
      score -= 5;
    }
    scoreBox.textContent = score;
    hitNum();
    generateBubbles(getBubbleCount());
  }
};

// Restart Button
let showRestartButton = () => {
  let button = document.createElement("button");
  button.textContent = "Restart";
  button.classList.add("restart");
  button.addEventListener("click", () => {
    location.reload();
  });
  panelBtm.appendChild(button);
};

// Decide bubble count based on screen size
let getBubbleCount = () => {
  return window.innerWidth <= 768 ? 62 : 104;
};


// Initialize Game
generateBubbles(getBubbleCount());
hitNum();
startTimer();
panelBtm.addEventListener("click", handleBubbleClick);
