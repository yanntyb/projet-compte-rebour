let DigitClock = function(interval){
    this.minutes= "00";
    this.secondes = "10";
    this.interval = interval
    this.run = false;
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
    this.checkNull()
  
    if(parseInt(this.secondes) === 0 && parseInt(this.minutes) === 0){
        let digit = document.getElementsByClassName("digit");
        for(let i of digit){
            i.style.animationName = "flash";
        }
    }
}

DigitClock.prototype.checkNull = function (){
    if(parseInt(this.secondes) > 0){
        if(this.run){
            this.secondes -= 1;
        }
        if(parseInt(this.secondes) < 10){
            this.secondes  = "0" + this.secondes;
        }
    }
    else if(parseInt(this.minutes) > 0){
        this.minutes -=1;
        if(parseInt(this.minutes) < 10){
            this.minutes  = "0" + this.minutes;
        }
        this.secondes = 59;
    }
    if(this.minutes < 10){
        if(this.minutes.toString().length < 2){
            this.minutes = "0" + this.minutes
        }

    }


}

DigitClock.prototype.changeDigitFrontTimeOut = function (){
    let _this = this;
    window.setTimeout(function(){
        _this.printDigitFront();
        if(_this.run){
            _this.changeDigitFront();
        }
        _this.changeDigitFrontTimeOut();
    },this.interval);
}

DigitClock.prototype.chooseTime = function(){
    let _this = this;
    this.lauch = document.createElement("div");
    this.lauch.innerHTML = "START";
    this.lauch.style.position = "absolute";
    this.lauch.style.alignSelf = "flex-start";
    this.lauch.style.left = "20px";
    this.lauch.style.top = "20px"

    this.lauch.addEventListener("click",function(){
        _this.run = true;
    })

    this.addHours = document.createElement("div");
    this.addHours.innerHTML = "ADD MINUTES";
    this.addHours.style.position = "absolute";
    this.addHours.style.alignSelf = "flex-start";
    this.addHours.style.left = "20px";
    this.addHours.style.top = "40px"


    this.addHours.addEventListener("click",function (){
        _this.minutes ++;
        _this.checkNull();
    })

    this.removeHours = document.createElement("div");
    this.removeHours.innerHTML = "REMOVE MINUTES";
    this.removeHours.style.position = "absolute";
    this.removeHours.style.alignSelf = "flex-start";
    this.removeHours.style.left = "20px";
    this.removeHours.style.top = "60px"


    this.removeHours.addEventListener("click",function (){
        if(_this.minutes > 0){
            _this.minutes --;
        }

        _this.checkNull();
    })

    this.addMinutes = document.createElement("div");
    this.addMinutes.innerHTML = "ADD SECONDE";
    this.addMinutes.style.position = "absolute";
    this.addMinutes.style.alignSelf = "flex-start";
    this.addMinutes.style.left = "20px";
    this.addMinutes.style.top = "80px"


    this.addMinutes.addEventListener("click",function (){
        _this.secondes ++;
        _this.checkNull();
    })

    this.removeMinutes = document.createElement("div");
    this.removeMinutes.innerHTML = "REMOVE SECONDE";
    this.removeMinutes.style.position = "absolute";
    this.removeMinutes.style.alignSelf = "flex-start";
    this.removeMinutes.style.left = "20px";
    this.removeMinutes.style.top = "100px"


    this.removeMinutes.addEventListener("click",function (){
        if(_this.secondes > 1){
            _this.secondes --;
        }
        else{
            _this.secondes = "00"
        }

        _this.checkNull();
    })
    this.div.append(this.lauch);
    this.div.append(this.addHours);
    this.div.append(this.removeHours);
    this.div.append(this.addMinutes);
    this.div.append(this.removeMinutes);
}


DigitClock.prototype.printAll= function (){
    this.initDiv();
    this.initDigit();
    this.chooseTime();
    this.changeDigitFrontTimeOut();
    document.body.appendChild(this.div);
}


export {DigitClock};