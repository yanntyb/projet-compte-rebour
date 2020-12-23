import {DigitClock} from "./Clock.js";

let button = document.getElementById("add");


let clock = []

button.addEventListener("click",function (){
    let clock = new DigitClock(1000);
    clock.printAll()

})

