// Using setInterval display the word prout one character at a time (one letter per second). Once the word is written on the screen clear the interval.

let i=0;
    
    function loopText(){
        let str = "prout";
        // for (let i = 0; i < str.length; i++) {
        console.log(str[i]);
        i++;
        if(i>4){
            clearInterval(myInteval);
        }
    }
     const myInteval = setInterval(loopText, 1000);
   

    //  Write a function that displays every second that has passed on the page since it was opened. The display should be refreshed every second. If 60 seconds are elapsed, write "a minute has passed", then "2 minutes have passed" (for 120 seconds and more), etc.

        function timer(){
            const date = new Date();
            // console.log(date.toLocaleTimeString());
            const time = Math.floor( Math.abs(browserTime-date)/1000);
        if (time<60)
            console.log(`${time} sec has passed`);
            else
            console.log(`${Math.floor(time/60)} min has passed`);

            // if(sec == Math.round(1)){
            //     console.log("a minute has passed")
            // }else if(sec == Math.round(2)){
            //     console.log("2 minutes have passed")
            // }

        }
        const intrvl = setInterval(timer, 1000);
        
        const browserTime = new Date();
        console.log(browserTime);

        





// function myTimer() {
//   const date = new Date();
//   document.getElementById("demo").innerHTML = date.toLocaleTimeString();

   
  


