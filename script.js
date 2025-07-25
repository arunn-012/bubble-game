let panelBtm=document.querySelector("#pbtm");
let hitnumBox = document.querySelector("#hitNum");
let HitRdmNum = 0
let timerBox = document.querySelector("#timer");
let time = 60;
let score = 0;
let scoreBox = document.querySelector("#score");
let balls = () => {
let clutter = '';

for (let i = 0; i <= 105; i++) {
    let rdmNum = Math.floor(Math.random() * 10);
    clutter += `<div class="bubble">${rdmNum}</div>`;
    panelBtm.innerHTML = clutter;
}
}
balls();
let hitNum = () => {
    HitRdmNum = Math.floor(Math.random() * 10);
    hitnumBox.textContent = HitRdmNum;
} 
hitNum();
let timer = () => { 
    setInterval(() => {
        if(time > 0){
            time--;
            timerBox.textContent = time;
        }
        else {
            clearInterval(timer);
            pbtm.innerHTML = `Game Over! Your Score is: ${score}`;
        }
    }, 1000);
}
timer();
let scoreIncrease = () => {
   pbtm.addEventListener("click", (e) => {
    if(Number(e.target.textContent) === HitRdmNum){
        score +=10;
        scoreBox.textContent = score;
    }
    else{
        score -= 5;
        scoreBox.textContent = score;
    }
     hitNum();
   balls();
   })
}
scoreIncrease();
const mediaQuery = window.matchMedia("(max-width: 768px)");

mediaQuery.addEventListener("change", (e) => {
  if (e.matches) {
   let balls = () => {
let clutter = '';

for (let i = 0; i <= 62; i++) {
    let rdmNum = Math.floor(Math.random() * 10);
    clutter += `<div class="bubble">${rdmNum}</div>`;
    panelBtm.innerHTML = clutter;
}
}
balls();
  } else {
    // Screen is larger than 768px
    console.log("Now in desktop view");
  }
});
