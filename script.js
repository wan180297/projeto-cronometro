const buttonPlayClock = document.querySelector(".play");
const buttonPauseClock = document.querySelector(".pause");
const buttonRefreshClock = document.querySelector(".refresh");

let number = 0;
let play 
let clock = document.querySelector(".clock");


function playClock() {
    play = setInterval(() => {

        // Calcula minutos e segundos
        let minutes = Math.floor(number / 60);
        let seconds = number % 60;

        // Formata para sempre mostrar 2 dígitos
        let formattedTime = `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;

        // Exibe o tempo formatado no elemento clock
        clock.innerText = formattedTime;
        number++;
    }, 1000);
    

}
function pauseClock() {
    clearInterval(play);
}
function refreshClock() {
    pauseClock();
    number = 0;
    clock.innerHTML = "00:00";
}



buttonRefreshClock.addEventListener("click", refreshClock);
buttonPauseClock.addEventListener("click", pauseClock);
buttonPlayClock.addEventListener("click", playClock);