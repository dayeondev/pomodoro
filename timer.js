const form = document.querySelector(".js-form"); //시간입력
const input = form.querySelector("input"); //

const timerContainer = document.querySelector(".js-timer");
const timerTitle = timerContainer.querySelector("h1");

const TARGET_LS = "targetTime";
const SHOWING_CN = "showing";

//목표 시간이 있는지 확인하기
//없다면 시간 받아오기
//시, 분 ,초 입력받기
//입력받은 시간을 초로 변환후 합함
//현재 시간을 초로 변환 후 합함
//현재시간과 입력받은 시간을 더해서 목표 시간 지정, 저장
//목표 시간에서 현재 시간을 뺀다
//위의 값을 시, 분, 초로 변환

function saveTime(text){
    localStorage.setItem(TARGET_LS, text);
}

function handleSubmit(event){
    event.preventDefault(); // 제출했을 때 새로고침 되는 것을 막는다.
    const currentValue = input.value;
    // console.log(currentValue);
    paintTime(currentValue);
    saveTime(currentValue);
}

function askForTargetTime(){
    console.log("askForTargetTime");
    form.classList.add(SHOWING_CN);
    form.addEventListener("submit", handleSubmit);
}

function paintTime(time){
    console.log("paintTime colled");
    form.classList.remove(SHOWING_CN);
    timerContainer.classList.add(SHOWING_CN);
    timerTitle.innerText = time;
}

function loadTime(){
    console.log("loadTime called");
    const targetTime = localStorage.getItem(TARGET_LS);
    if(targetTime === null){
        askForTargetTime(); //시간 가져오기
    }else{
        paintTime(targetTime); //시간되면 설정시간도 표시
    }
}

function init(){
    loadTime();
}

init(); 