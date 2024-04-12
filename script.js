//variables
let stopWatch;
let hours = 0;
let minutes = 0;
let seconds = 0;
let ss = 0;
let s=0;
let h=0;
let m=0;
let p=0;
let number=1;
//time start function
//main function behind functionality...
function startstopWatch() {
    clearInterval(stopWatch);
    hours = 0;
    minutes = 0;
    seconds = 0;
    ss = 0;
    interval();
    updatestopWatchDisplay();
    document.getElementById('stopButton').innerHTML = 'Stop';
}
//time stop function
//stop button
function stop() {
    let outer = document.getElementById('stopButton').innerHTML;
    if (outer == 'Stop') {
        if(ss != '00' || seconds!='00'){
            clearInterval(stopWatch);
        document.getElementById('stopButton').innerHTML = 'Resume';
        }
        

    } else if (outer == 'Resume') {
        interval();
        document.getElementById('stopButton').innerHTML = 'Stop';
    }
}
//timer upgradation DOM html function
function updatestopWatchDisplay() {
    document.getElementById('hoursDisplay').innerText = timeDigit(hours);
    document.getElementById('minutesDisplay').innerText = timeDigit(minutes);
    document.getElementById('secondsDisplay').innerText = timeDigit(seconds);
    document.getElementById('ss').innerText = timeDigit(ss);
}
//time digit maintaenance function 
function timeDigit(time) {
    if (String(time).length === 1) {
        return '0' + time;
    } else {
        return time;
    }
}
//time Internal upgradation
function interval() {
    stopWatch = setInterval(() => {
        ss++;
        if (ss >= 100) {
            ss = 0;
            seconds++;
        }
        if (seconds >= 60) {
            seconds = 0;
            minutes++;
        } else if (minutes >= 60) {
            minutes = 0;
            hours++;
        }
        updatestopWatchDisplay();
    }, 10);
}
//time reset function
//reset button 
function reset() {
    clearInterval(stopWatch);
    document.getElementById('hoursDisplay').innerText = '00';
    document.getElementById('minutesDisplay').innerText = '00';
    document.getElementById('secondsDisplay').innerText = '00';
    document.getElementById('ss').innerText = '00';
    document.getElementById('stopButton').innerHTML = 'Stop';
    hours = 0;
    minutes = 0;
    seconds = 0;
    ss = 0;
    var elements = document.querySelectorAll('.markbox');
    for(let i=0 ; i<elements.length ;i++ ){
        elements[i].remove();
    }
    number=1;
   
}
//mark checkpoint function
//additional button
function mark(){
    if(ss != '00' || seconds!='00'){ 
         
//main mark div creation inside marktime 
        let newMark = document.createElement('div');
        newMark.innerHTML = `${timeDigit(hours)} : ${timeDigit(minutes)} : ${timeDigit(seconds)} : ${timeDigit(ss)}`;
        document.querySelector('.marktime').appendChild(newMark);
        newMark.classList.add('markbox');
//difference div 
        let diffBox = document.createElement('div'); 
        newMark.appendChild(diffBox); 

 
        let diffHours = hours - h;
        let diffMinutes = minutes - m;
        let diffSeconds = seconds - s;
        let diffSs= ss- p;
                                //CONDITION TO FIND DIFFERENCE in case subtraction is negative
        if(diffSs < 0){
            diffSs += 100;
            diffSeconds -=1;
        }
        if (diffSeconds < 0) {
            diffSeconds += 60;
            diffMinutes -= 1;
        }
        if (diffMinutes < 0) {
            diffMinutes += 60;
            diffHours -= 1;
        }

        diffBox.innerHTML = `+ ${timeDigit(diffHours)} : ${timeDigit(diffMinutes)} : ${timeDigit(diffSeconds)} : ${timeDigit(diffSs)}`;

        s = seconds;
        m = minutes;
        h = hours;
        p=ss;

      //sNo updating
        let sNo= document.createElement('div');
        sNo.innerHTML= number;
        newMark.appendChild(sNo);
        number++;
    }
}

let isDarkMode = false;
function mode() {
    const body = document.querySelector('body');
    if (isDarkMode) {
        body.style.backgroundColor = 'white';
        document.querySelector('h2').style.color="black";
        document.querySelector('footer').style.color="black";
    } else {
        body.style.backgroundColor = 'black';
        document.querySelector('h2').style.color="white";
        document.querySelector('footer').style.color="white";
    }
    isDarkMode = !isDarkMode;
   
}
