"use strick"

function creatClockCanvas() {
  //WIDTHDIV - получаем ширину дива.
  const WIDTHDIV = parseFloat(getComputedStyle(document.querySelector('.clock')).width)
  // HEIGHTDIV - получаем высоту дива.
  const HEIGHTDIV = parseFloat(getComputedStyle(document.querySelector('.clock')).height)
  //RADIUS - будет использован для построения часов, равен меньшему значению из ширины и высоты дива
  const RADIUS = Math.min(WIDTHDIV, HEIGHTDIV) / 2
  // RADIUS_integers - радиус наших ячеек для цифр циферблата
  const RADIUS_integers = RADIUS / 10
  // GRAD - будет задействован в цикле - определяем угол(в радианах) через который будем строить цифры на циферблате.
  const GRAD = 30 * Math.PI / 180;

  //функция для обновления времени и положения стрелок(вычисляется по формуле)
  updateTime()
  setInterval(updateTime, 1000);
  function updateTime() {
    var currTime = new Date();
    var currTimeStr = formatDateTime(currTime);
    // timezone.innerHTML = currTimeStr;
    //положение секундной стрелки
    let secGrade = currTimeStr.slice(6, 8) * 6;
    let secRadian = secGrade * Math.PI / 180; 
    let secHY = 0 + (RADIUS * 9 / 10) * Math.sin(secRadian)
    let secHX = 0 + (RADIUS * 9 / 10) * Math.cos(secRadian)
    let secLastHY = secHY / -10;
    let secLastHX = secHX / -10;

    // положение минутной стрелки
    let minuteGrade = (currTimeStr.slice(3, 5) * 60 + (+currTimeStr.slice(6, 8))) / 10;
    let minuteRadian = minuteGrade*Math.PI / 180; 
    let minHY = 0 + (RADIUS * 8 / 10) * Math.sin(minuteRadian)
    let minHX = 0 + (RADIUS * 8 / 10) * Math.cos(minuteRadian)
    let minLastHY = minHY / -11;
    let minLastHX = minHX / -11;

    //полжоение часовой стрелки
    let hourGrade;
    if (currTimeStr.slice(0, 2) > 12) {
      hourGrade = (currTimeStr.slice(0, 2) - 12)*30+(minuteGrade/12)
    } else {
      hourGrade = currTimeStr.slice(0, 2)*30+(minuteGrade/12)
    }
    let hourRadian = hourGrade*Math.PI / 180; 
    let hourHY = 0 + (RADIUS * 6 / 10) * Math.sin(hourRadian)
    let hourHX = 0 + (RADIUS * 6 / 10) * Math.cos(hourRadian)
    let hourLastHY = hourHY / -13;
    let hourLastHX = hourHX / -13;

    //рисуем часы
    let cvs = document.getElementById('clock_canvas')
    var ctx = cvs.getContext('2d');
    cvs.width = RADIUS*2;
    cvs.height = RADIUS*2;
    ctx.fillStyle = 'rgb(252 202 102)';
    ctx.beginPath();
    ctx.arc(RADIUS, RADIUS, RADIUS, 0, Math.PI * 2, false);
    ctx.fill();
    ctx.fillStyle = 'rgb(72 179 130)';
    let countGrad = 270 * Math.PI / 180
    for (let i = 0; i < 12; i++) {
      let HY = RADIUS + (RADIUS - RADIUS_integers) * Math.sin(countGrad)
      let HX = RADIUS + (RADIUS - RADIUS_integers) * Math.cos(countGrad)
      countGrad += GRAD
      ctx.fillStyle = 'rgb(72 179 130)';
      ctx.beginPath();
      ctx.arc(HX, HY, RADIUS_integers, 0, Math.PI * 2, false);
      ctx.fill();
      ctx.fillStyle = 'black'
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      if (i === 0) {
        ctx.fillText('12', HX, HY)
      } else {
        ctx.fillText(i, HX, HY)
      }
      ctx.textAlign = 'center'
    }
//рисуем стрелки
    ctx.save();
    ctx.translate(RADIUS, RADIUS);
    ctx.rotate(countGrad)

//рисуем часовую стрелку
    ctx.strokeStyle = 'rgb(80, 80, 80)';
    ctx.lineWidth = 7;
    ctx.lineCap = 'round';
    ctx.beginPath();
    ctx.moveTo(hourLastHX, hourLastHY);
    ctx.lineTo(hourHX, hourHY);
    ctx.stroke();

//рисуем минутную стрелку
    ctx.strokeStyle = 'rgb(50, 50, 50)';
    ctx.lineWidth = 5;
    ctx.lineCap = 'round';
    ctx.beginPath();
    ctx.moveTo(minLastHX, minLastHY);
    ctx.lineTo(minHX, minHY);
    ctx.stroke();

//рисуем секундную стрелку
    ctx.strokeStyle = 'rgb(30, 30, 30)';
    ctx.lineWidth = 3;
    ctx.lineCap = 'round';
    ctx.beginPath();
    ctx.moveTo(secLastHX, secLastHY);
    ctx.lineTo(secHX, secHY);
    ctx.stroke();
    ctx.restore()

    //центр часов
    ctx.fillStyle = 'red'
    ctx.fillRect(RADIUS, RADIUS, 1, 1)
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
}
