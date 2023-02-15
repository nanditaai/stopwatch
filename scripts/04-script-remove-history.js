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

markButton.addEventListener("click", function() {
    addToHistory(time.textContent);
});

function addToHistory(count){
    let record = document.createElement("li");
    record.textContent = count;
    history.appendChild(record);
    record.addEventListener("click", function(){
        record.remove();
    });
}
