const timerContainer = document.querySelector(".js-timer");
const timerTitle = timerContainer.querySelector("h1");

//목표 시간이 있는지 확인하기
//없다면 시간 받아오기
//시, 분 ,초 입력받기
//입력받은 시, 분, 초를 초로 변환후 합함
//현재 시간의 시, 분, 초를 초로 변환 후 합함
//현재시간과 입력받은 시간을 더해서 목표 시간 지정, 저장
//목표 시간에서 현재 시간을 뺀다
//위의 값을 시, 분, 초로 변환

const time = {
    hours: 0,
    minutes: 1,
    seconds: 90
}


function convertTime(_time){
    if(_time.hours > 59){
        _time.m += _time.s / 60;
        _time.s = _time.s % 60;
    }
    if(_time.minutes > 59){
        _time.h += _time.m / 60;
        _time.m = _time.m % 60;
    }
}


function timeUpdate(){
    const date = new Date();
    const timeNow = date.getHours() * 60 * 60 + date.getMinutes() * 60 + seconds;
    

    // // 초가 10 이하일 때는 앞에 0을 붙여주기
    // // clockTitle.innerText = `${hours}:${minutes}:${seconds < 10 ? `0${seconds}` : seconds}`;
    // clockTitle.innerText = `${hours < 10? `0${hours}` : hours}:${minutes < 10? `0${minutes}` : minutes}:${seconds < 10 ? `0${seconds}` : seconds}`;

    time.seconds--;
    if(time.seconds < "0"){
        time.minutes--;
        time.seconds = 59;
    }

    // convertTime(time);
    console.log(time.hours);
    console.log(time.minutes);
    console.log(time.seconds);
    timerTitle.innerText = `${time.hours < 10? `0${time.hours}` : time.hours}:${time.minutes < 10? `0${time.minutes}` : time.minutes}:${time.seconds < 10 ? `0${time.seconds}` : time.seconds}`;
}

function init(){
    timeUpdate();
    setInterval(timeUpdate, 1000);
}

init(); 