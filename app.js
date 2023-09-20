//Selecting all the counters
var counter = document.querySelectorAll('.counter');
// Selecting the audio
var startAud=document.getElementById('start-aud');
var stopAud=document.getElementById('stop-aud');
var resetAud=document.getElementById('reset-aud');
//Selecting all the buttons
var buttons = document.querySelectorAll('.buttons');
for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', function (event) {
        if (this.textContent == 'START') {
            //Function call to start the stopwatch
            counterStart();
        }
        else if (this.textContent == 'STOP') {
            //Function call to stop the stop watch
            counterStop();
        }
        else if (this.textContent == 'RESET') {
            //Function call to reset the stop watch
            counterReset();
        };
    });
}
var min = 1;
var sec = 1;
var ms = 0;
var intervalId = 0;
function startInterval() {
    intervalId = setInterval(function () {
        if (ms == 1000) {
            counter[3].innerHTML = '000';
        }
        else {
            counter[3].innerHTML = ms.toString().padStart(3, '0');
        };
        if (ms <= 999) {
            ms++
        }
        else {
            ms = 0;
            if (sec == 60) {
                counter[2].innerHTML = '00';
            }
            else {
                counter[2].innerHTML = sec.toString().padStart(2, '0');
            };
            if (sec <= 59) {
                sec++;
            }
            else {
                sec = 1;
                if (min == 60) {
                    counter[1].innerHTML = '00';
                }
                else {
                    counter[1].innerHTML = min.toString().padStart(2, '0');
                };
                if (min <= 59) {
                    min++;
                }
                else {
                    min = 1;
                    counter[0].innerHTML = hour.toString().padStart(3, '0');
                };
            };
            clearInterval(intervalId);
            startInterval();
        };
    }, 1);
};


// Funtion to start the counter
function counterStart() {
    buttons[0].disabled = true;
    buttons[1].disabled = false;
    buttons[2].disabled = false;
    startAud.play()
    startInterval();
};
//Function to stop the stopwatch
function counterStop() {
    clearInterval(intervalId);
    buttons[1].disabled = true;
    buttons[0].disabled = false;
    buttons[2].disabled = false;
    stopAud.play()
}
//Function to Reset the watch
function counterReset() {
    clearInterval(intervalId);
    buttons[0].disabled = false;
    buttons[1].disabled = false;
    buttons[2].disabled = true;
    min = 1;
    sec = 1;
    ms = 0;
    counter[0].innerHTML = '00';
    counter[1].innerHTML = '00';
    counter[2].innerHTML = '00';
    counter[3].innerHTML = '000';
    
    resetAud.play()
};