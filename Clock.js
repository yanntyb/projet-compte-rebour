let DigitClock = function(interval){
    this.minutes= "00";
    this.secondes = "05";
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
        let digit = this.div.getElementsByClassName("front")
        for(let i of digit){
            i.style.animationName = "flash";
            i.style.animationDuration = "0.5s";
            i.style.animationIterationCount = "infinite"
        }
    }
    else{
        let digit = this.div.getElementsByClassName("front");
        for(let i of digit){
            i.style.animationName = "none";
        }
    }
}

DigitClock.prototype.checkNull = function (){
    if(parseInt(this.secondes) > 0){
        if(this.run){
            this.secondes -= 1;
        }
        if(this.secondes === 60){
            this.secondes = 0;
        }
        if(parseInt(this.secondes) < 10){
            this.secondes  = "0" + this.secondes;
        }
    }
    else if(parseInt(this.minutes) > 0){
        this.minutes -=1;
        if(parseInt(this.minutes) < 10){
            this.minutes  = "0" + parseInt(this.minutes);
        }
        this.secondes = 59;
    }
    if(this.minutes < 10){
        if(this.minutes.toString().length < 2){
            this.minutes = "0" + parseInt(this.minutes);
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
    this.lauch.className = "button";
    this.lauch.innerHTML = "START";
    this.lauch.style.cssText = "position: absolute; aligne-self: flex-start; left: 15px; top: 20px; padding:1%";
    this.lauch.addEventListener("click",function(){
        _this.run = true;
    })

    this.addHours = document.createElement("div");
    this.addHours.className = "button";
    this.addHours.innerHTML = "ADD MINUTES";
    this.addHours.style.cssText = "position: absolute; aligne-self: flex-start; left: 15px; top: 60px; padding:1%";
    this.addHours.addEventListener("click",function (){
        _this.minutes ++;
        _this.checkNull();
    })

    this.removeHours = document.createElement("div");
    this.removeHours.className = "button";
    this.removeHours.innerHTML = "REMOVE MINUTES";
    this.removeHours.style.cssText = "position: absolute; aligne-self: flex-start; left: 15px; top: 100px; padding:1%";
    this.removeHours.addEventListener("click",function (){
        if(_this.minutes > 0){
            _this.minutes --;
        }

        _this.checkNull();
    })

    this.addMinutes = document.createElement("div");
    this.addMinutes.className = "button";
    this.addMinutes.innerHTML = "ADD SECONDE";
    this.addMinutes.style.cssText = "position: absolute; aligne-self: flex-start; left: 15px; top: 140px; padding:1%";
    this.addMinutes.addEventListener("click",function (){
        _this.secondes ++;
        _this.checkNull();
    })

    this.removeMinutes = document.createElement("div");
    this.removeMinutes.className = "button";
    this.removeMinutes.innerHTML = "REMOVE SECONDE";
    this.removeMinutes.style.cssText = "position: absolute; aligne-self: flex-start; left: 15px; top: 180px; padding:1%";
    this.removeMinutes.addEventListener("click",function (){
        if(_this.secondes > 1){
            _this.secondes --;
        }
        else{
            _this.secondes = "00"
        }

        _this.checkNull();
    })

    this.stop = document.createElement("div");
    this.stop.className = "button";
    this.stop.innerHTML = "STOP";
    this.stop.style.cssText = "position: absolute; aligne-self: flex-start; left: 15px; top: 220px; padding:1%";
    this.stop.addEventListener("click",function(){
        _this.run = false;
    })

    this.div.append(this.lauch);
    this.div.append(this.addHours);
    this.div.append(this.removeHours);
    this.div.append(this.addMinutes);
    this.div.append(this.removeMinutes);
    this.div.append(this.stop);
}

DigitClock.prototype.printAll= function (){
    this.initDiv();
    this.initDigit();
    this.chooseTime();
    this.changeDigitFrontTimeOut();
    document.body.appendChild(this.div);
}

export {DigitClock};