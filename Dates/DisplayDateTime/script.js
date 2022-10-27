let dayOfWeekEle = document.getElementById("dayOfWeek");
let dateEle = document.getElementById('date');
let monthEle = document.getElementById('month');
let yearEle = document.getElementById('year');
let hourEle = document.getElementById('hour');
let minutesEle = document.getElementById('minutes');
let secondsEle = document.getElementById('seconds');
function timer(){
    let dateToday = new Date();
dayNumb = dateToday.getDay();
// console.log(dayNumb);
    switch(dayNumb){
        case 0: dayOfWeekEle.innerHTML ="SUN";
        break;
        case 1: dayOfWeekEle.innerHTML="MON";
        break;
        case 2: dayOfWeekEle.innerHTML="TUE";
        break;
        case 3: dayOfWeekEle.innerHTML="WED";
        break;
        case 4: dayOfWeekEle.innerHTML="THU";
        break;
        case 5: dayOfWeekEle.innerHTML="FRI";
        break;
        case 6: dayOfWeekEle.innerHTML="SAT";
        break;
    }

yearNum = dateToday.getFullYear();
 yearEle.innerHTML = yearNum;
// console.log(yearNum)
dateNum = dateToday.getDate();
dateEle.innerHTML = dateNum;

month = dateToday.getMonth();
    switch(month){
        case 0: monthEle.innerHTML = "JAN";
        break;
        case 1: monthEle.innerHTML = "FEB";
        break;
        case 2: monthEle.innerHTML = "MAR";
        break;
        case 3: monthEle.innerHTML = "APR";
        break;
        case 4: monthEle.innerHTML = "MAY";
        break;
        case 5: monthEle.innerHTML = "JUN";
        break;
        case 6: monthEle.innerHTML = "JUL";
        break;
        case 7: monthEle.innerHTML = "AUG";
        break;
        case 8: monthEle.innerHTML = "SEP";
        break;
        case 9: monthEle.innerHTML = "OCT";
        break;
        case 10: monthEle.innerHTML = "NOV";
        break;
        case 11: monthEle.innerHTML = "DEC";
        break; 
    }

    hour = dateToday.getHours();
    hourEle.innerHTML = hour + ':';

    minutes = dateToday.getMinutes();
    minutesEle.innerHTML = minutes+ ':';

    seconds = dateToday.getSeconds();
    secondsEle.innerHTML = seconds;

}
setInterval(timer,1000);


