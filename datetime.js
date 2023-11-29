const clock = document.querySelector("span#datetime");

function getClock(){
    const date = new Date();
    const hours = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");
    clock.innerText = `${hours}:${minutes}`;
}

getClock(); // 바로 현재 시각 표시됨
setInterval(getClock, 1000); //1초뒤에 출력되며 1초마다 갱신