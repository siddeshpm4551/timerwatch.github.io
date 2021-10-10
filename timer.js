let count=0;
let minutes=0;
let seconds=0;
let milliseconds=0;
let interval=0;
let timeRun=false;
let setTimer=()=>{
    count++;
    minutes=Math.floor((count/100)/60);
    seconds=Math.floor((count/100)-(minutes*60));
    milliseconds=Math.floor((count)-(seconds*100)-(minutes*6000));
    document.querySelector('#minutes').innerText=addZero(minutes);
    document.querySelector('#seconds').innerText=addZero(seconds);
    document.querySelector('#milliseconds').innerText=addZero(milliseconds);
};

let startBtn=document.querySelector('#start-btn');
startBtn.addEventListener('click',function(){
if(!timeRun){
    interval=setInterval(setTimer,10);
    timeRun=true;
}
});


let stopBtn=document.querySelector('#stop-btn');
stopBtn.addEventListener('click',function(){
    clearInterval(interval);
});


let resetBtn=document.querySelector('#reset-btn');
resetBtn.addEventListener('click',function(){
    clearInterval(interval);
    count=0;
    minutes=0;
    seconds=0;
    milliseconds=0;
    interval=0;
    timeRun=false;
    document.querySelector('#minutes').innerText="00";
    document.querySelector('#seconds').innerText="00";
    document.querySelector('#milliseconds').innerText="00";
});

let addZero=(time)=>{
    if(time<=9){
        return "0"+time                                
    }
    else{
        return time;
    }
};