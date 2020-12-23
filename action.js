import {DigitClock} from "./Clock.js";

let button = document.getElementById("add");


let clock = []

button.addEventListener("click",function (){
    let clock = new DigitClock(100);
    clock.printAll()

})

