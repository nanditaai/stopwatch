let time = document.querySelector(".time");
let startButton = document.querySelector(".start");
let stopButton = document.querySelector(".stop");
let resetButton = document.querySelector(".reset");
let breakButton = document.querySelector(".break");

//Add 1/100th of a second to the time.
function updateTime() {
    time.textContent = (Number(time.textContent) + .01).toFixed(2);
}

let intervalCode = null;

startButton.addEventListener("click", function() {
    intervalCode = setInterval(updateTime, 10); //save the code!
    startButton.classList.toggle("hidden");
    stopButton.classList.toggle("hidden");
});

stopButton.addEventListener("click", function() {
    clearInterval(intervalCode);
    startButton.classList.toggle("hidden");
    stopButton.classList.toggle("hidden");
});
 
resetButton.addEventListener("click", function() {
    if (time.textContent == "0.00")
        return; 
    addToHistory(time.textContent); 
    time.textContent = "0.00"; 
}); 

breakButton.addEventListener("click", function() { 
    location.href = "index2.html";
});

