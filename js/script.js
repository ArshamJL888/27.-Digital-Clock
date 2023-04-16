
// Define and Imports

let hours = document.getElementById('hour');
let minutes = document.getElementById('minute');
let seconds = document.getElementById('second');

//main body time set

setInterval(timeSet, 1000);

    function timeSet() {
    let myTime = new Date();
    hours.innerHTML = (myTime.getHours() < 10) ?("0" +  myTime.getHours()) : myTime.getHours();
    minutes.innerHTML = (myTime.getMinutes() < 10) ? ("0" +  myTime.getMinutes()) : myTime.getMinutes();
    seconds.innerHTML = (myTime.getSeconds() < 10) ? ("0" +  myTime.getSeconds()) : myTime.getSeconds(); 

}


