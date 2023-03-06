
var buttons = document.getElementsByClassName("breathe-button");
var breatheButton = buttons[0];
var stopButton = document.querySelector("a");
var progressBar = document.getElementsByClassName("inner-progress-bar");
var counter = document.getElementsByClassName("counter");
var inhaleExhale = document.getElementsByClassName("inhale-exhale");

breatheButton.addEventListener("click", () => {
    //progressBar[0].style.width="90%";
    breatheButton.style.display = "none";
    stopButton.style.display = "inline";
    var i=0;
    var counter = document.getElementsByClassName("counter");
    counter[0].textContent= i + "/6";
    inhaleExhale[0].style.opacity = "100%";
    updateBar(i);
})

function updateBar(i) {
    var progressBar = document.getElementsByClassName("inner-progress-bar");
    var width=0
    var intervalId = setInterval(frame, 50);
    function frame() {
        if (width===100) {
            clearInterval(intervalId);
            inhaleExhale[0].textContent = "Exhale";
            fadeIn(inhaleExhale[0]);
            outdateBar(i);
        } else {
            width++;
            progressBar[0].style.width= width +"%";
            inhaleExhale[0].textContent = "Inhale";
        }
    }
}

function outdateBar(i) {
    var progressBar = document.getElementsByClassName("inner-progress-bar");
    var width=100
    var intervalId = setInterval(frame, 50);
    function frame() {
        if (width===0) {
            if (i<5) {
                i++;
                counter[0].textContent= i + "/6";
                clearInterval(intervalId);
                inhaleExhale[0].textContent = "Inhale";
                fadeIn(inhaleExhale[0]);
                updateBar(i);
            }
            else {
                //width=0
                //progressBar[0].style.width= width +"%";
                //i=0
                //counter[0].textContent= "";
                //clearInterval(intervalId);
                location.reload();
            }
        } else {
            width--;
            progressBar[0].style.width= width +"%";
            //inhaleExhale[0].textContent = "Exhale";
        }
    }
}