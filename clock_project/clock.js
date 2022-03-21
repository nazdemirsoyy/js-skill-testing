const getName = prompt(`isminizi giriniz`);
document.querySelector("#myName").textContent = getName;

let time = new Date();
let currentTime = `${time.getFullYear()}-${time.getMonth()}-${time.getDate()}  ${time.getHours()}:${time.getMinutes()}:${time.getSeconds()}`;
document.querySelector("#myClock").textContent = currentTime;
