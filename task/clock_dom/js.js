"use strick"

function creatClock() {
  if (document.querySelector('.clock_div') !== null) { return }
  var elemMain = document.querySelector('.clock')
  //создаем основной див для часов
  let clock_div = document.createElement('div')
  clock_div.className = "clock_div"
  clock_div.style.cssText = "border-radius: 50%; width: 100%; height: 100%; background-color: #fcca66; position: relative"
  elemMain.append(clock_div)
  //создаем div'ы для цифр циферблата
  let rotate = 0;
  for (let i = 0; i < 12; i++) {
    const integers_div = document.createElement('div');
    integers_div.className = `integers_div`;
    integers_div.style.cssText = `width: 10%; height: 50%;  position: absolute; top: 0%;left: 45%; transform: rotate(${rotate + 'deg'}); transform-origin: 50% 100%;`;
    clock_div.append(integers_div)
    rotate += 30;
  }
  // создаем цифры циферблата
  let arr = document.querySelectorAll('.integers_div')
  let rotateIntegers = 0;
  for (let i = 0; i < arr.length; i++) {
    let integers = document.createElement('div');
    integers.className = `integers`;
    integers.style.cssText = `width: 100%; height: 20%; background-color: #48b382; position: absolute; top: 5%;left: 0%; border-radius: 50%; text-align: center;transform: rotate(${rotateIntegers + 'deg'}); display: flex; justify-content: center; align-items: center`;
    let x;
    if(i===0){x = 12}else{x = i}
    integers.innerHTML = `${x}`;
    arr[i].append(integers);
    rotateIntegers -= 30;
  }
  // центр часов - для наглядности
  let center = document.createElement('div')
  center.className = `enter`;
  center.style.cssText = `width: 1px; height: 1px; background-color: red; border-radius: 50%; position: absolute; top: 50%; left: 50%; z-index: 5; `
  clock_div.append(center)

 

  // меню времени
  let timezone = document.createElement('div')
  timezone.className = `timezone`;
  timezone.style.cssText = `width: 50%; height: 20%; position: absolute; top: 20%; left: 25%; display: flex; justify-content: center; align-items: flex-end`;
  clock_div.append(timezone);


  //функция для обновления времени и положения стрелок(вычисляется по формуле)
 
  setInterval(updateTime, 1000);
  function updateTime() {
    var currTime = new Date();
    var currTimeStr = formatDateTime(currTime);
    timezone.innerHTML = currTimeStr;
    //положение секундной стрелки
    document.querySelector('.secLine').style.transform = 'rotate(' + currTimeStr.slice(6, 8) * 6 + 'deg)';
    //положение минутной стрелки
    let minute = (currTimeStr.slice(3, 5) * 60 + (+currTimeStr.slice(6, 8))) / 10
    document.querySelector(".minuteLine").style.transform = 'rotate(' + minute + 'deg)';
    //положение часовой стрелки
    let hour = 0;
    if (currTimeStr.slice(0, 2) > 12) {
      hour = currTimeStr.slice(0, 2) - 12
    } else {
      hour = currTimeStr.slice(0, 2)
    }
    document.querySelector('.hourLine').style.transform = 'rotate(' + (hour * 30 + (minute / 12)) + 'deg)';
  }

  // форматирует переданную дату-время в формате дд.мм.гггг чч:мм:сс

  function formatDateTime(dt) {
    var year = dt.getFullYear();
    var month = dt.getMonth() + 1;
    var day = dt.getDate();
    var hours = dt.getHours();
    var minutes = dt.getMinutes();
    var seconds = dt.getSeconds();
    return str0l(hours, 2) + ':' + str0l(minutes, 2) + ':' + str0l(seconds, 2);
  }

  // дополняет строку val слева нулями до длины Len
  function str0l(val, len) {
    var strVal = val.toString();
    while (strVal.length < len)
      strVal = '0' + strVal;
    return strVal;
  }
  
  let justNow=new Date()
  let secData = justNow.getSeconds()* 6;
  let minData = (justNow.getMinutes()*60 + justNow.getSeconds())/10;
  let hourData;
  if (justNow.getHours() > 12) {
    hourData = (justNow.getHours()-12)*30+minData/12;
  }else{hourData = justNow.getHours()*30+minData/12}
    
 //часовая стрелка
 let hourLine = document.createElement('div')
 hourLine.className = `hourLine`;
 hourLine.style.cssText = `width: 4%; height: 25%; background-color: black; border-radius: 5px; position: absolute; top: calc(25% + 10px); left: 48%; transform: rotate(${hourData}deg); transform-origin: 50% calc(100% - 10px);`;
 clock_div.append(hourLine)

 //минутная стрелка
 let minuteLine = document.createElement('div')
 minuteLine.className = `minuteLine`;
 minuteLine.style.cssText = `width: 2%; height: 35%; background-color: black; border-radius: 3px; position: absolute; top: calc(15% + 10px); left: 49%;transform: rotate(${minData}deg); transform-origin: 50% calc(100% - 10px)`
  clock_div.append(minuteLine)

 //секундная стрелка
 let secLine = document.createElement('div')
 secLine.className = `secLine`;
 secLine.style.cssText = `width: 1%; height: 50%; background-color: black; border-radius: 2px; position: absolute; top: calc(0% + 10px); left: 49.5%; transform-origin: 50% calc(100% - 10px);transform: rotate(${secData}deg); `
 clock_div.append(secLine)
}

