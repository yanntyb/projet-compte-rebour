let DigitClock = function(){
    this.minutes= "01";
    this.secondes = "01";
}

DigitClock.prototype.initDiv = function (){
    this.div = document.createElement("div");
    this.div.className = "clock";
}

DigitClock.prototype.initDigit = function (){

    let divBack = document.createElement("div");
    divBack.innerHTML = "88:88";
    divBack.className = "digit back";

    this.divDigitFront = document.createElement("div");
    this.divDigitFront.className = "digit front";

    this.div.appendChild(divBack);
    this.div.appendChild(this.divDigitFront);
}

DigitClock.prototype.printDigitFront = function (){
    this.divDigitFront.innerHTML = this.minutes + ":" + this.secondes;
}

DigitClock.prototype.changeDigitFront = function (){
    if(parseInt(this.secondes) > 0){
        this.secondes -= 1;
        if(parseInt(this.secondes) < 10){
            this.secondes  = "0" + this.secondes;
        }
    }else{
        if(this.minutes > 0){
            this.minutes -=1;
            if(parseInt(this.minutes) < 10){
                this.minutes  = "0" + this.minutes;
            }
            this.secondes = 59;
        }
    }
    console.log(parseInt(this.secondes))
    if(parseInt(this.secondes) === 0 && parseInt(this.minutes) === 0){
        let digit = document.getElementsByClassName("digit");
        for(let i of digit){
            console.log("flash");
            i.style.animationName = "flash";
        }
    }
}

DigitClock.prototype.changeDigitFrontTimeOut = function (){
    let _this = this;
    window.setTimeout(function(){
        _this.printDigitFront();
        _this.changeDigitFront();
        _this.changeDigitFrontTimeOut();
    },1000);
}


DigitClock.prototype.printAll= function (){
    this.initDiv();
    this.initDigit();
    this.changeDigitFrontTimeOut();
    document.body.appendChild(this.div);
}


export {DigitClock};