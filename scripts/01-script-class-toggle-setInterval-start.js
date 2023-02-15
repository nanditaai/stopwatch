let time = document.querySelector(".time");
let history = document.querySelector(".history");
let startButton = document.querySelector(".start");
let stopButton = document.querySelector(".stop");
let resetButton = document.querySelector(".reset");
let markButton = document.querySelector(".mark");

//Add 1/100th of a second to the time.
function updateTime() {
    time.textContent = (Number(time.textContent) + .01).toFixed(2);
}

startButton.addEventListener("click", function() {
    setInterval(updateTime, 10);
    startButton.classList.toggle("hidden");
    stopButton.classList.toggle("hidden");
});
