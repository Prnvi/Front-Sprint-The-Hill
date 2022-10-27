/**Using timestamps, find the exact time and date we will be in 80000 hours.

Write a function to display the time and date for any amount of hours given in the future. Create a number input for the hours and listen for keyup events, dynamically display the date in the number of hours given by the input.

 */

function futureDate(){
    let hoursAdded =parseInt(document.getElementById("inputHours").value);
    console.log(hoursAdded);
    para = document.querySelector('p');
    let todayDate = new Date().getTime();
    let differenceDate = hoursAdded*60*60*1000;
    // console.log(differenceDate);
    let newDate = new Date(todayDate+differenceDate);
    // console.log(newDate)
    console.log(newDate.toLocaleString());
    para.innerHTML = newDate.toLocaleString();
}