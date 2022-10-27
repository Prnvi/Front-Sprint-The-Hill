/*Find the timezones of :

Anchorage (USA)
Reykjavik (Iceland)
Saint-Petersburg (Russia)
And display the date and time of these cities along with the time and date of Brussels.*/

let brusselsDate  = new Date().toLocaleString();
console.log(brusselsDate+" "+"Brussels");
document.body.write() = (brusselsDate+" "+"Brussels");


let usaTime = new Date().toLocaleString('en-UK',{timeZone: 'America/Anchorage' })
console.log(usaTime+" "+"USA")

let iceLandTime = new Date().toLocaleString('en-UK',{timeZone: 'Atlantic/Reykjavik' })
console.log(iceLandTime+" "+"Reykjavik, Iceland")


let russiaTime = new Date().toLocaleTimeString('en-UK',{timeZone: 'Europe/Moscow' })
console.log(russiaTime+" "+"Saint-Petersburg, Russia")
