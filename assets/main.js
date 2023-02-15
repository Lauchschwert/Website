let i = 1;
let a = 0;

function writeTitle(txt) {
  if (a === 0) {
    document.getElementsByTagName("title")[0].innerHTML = txt.charAt(0);
    a = 1;
  }
  if (i < txt.length) {
    document.getElementsByTagName("title")[0].innerHTML += txt.charAt(i);
    i++;
    setTimeout(() => {
      writeTitle(txt);
    }, 200);
  } else {
    txt = txt;
    const txt2 = txt;
    setTimeout(() => {
      deleteTitle(txt, txt2);
    }, 200);
  }
}

function deleteTitle(txt, txt2) {
  if (i > 1) {
    i--;
    txt = txt.slice(0, -1);
    document.getElementsByTagName("title")[0].innerHTML = txt;
    setTimeout(() => {
      deleteTitle(txt, txt2);
    }, 200);
  } else {
    i = 1;
    a = 0;
    document.getElementsByTagName("title")[0].innerHTML = txt.charAt(0);
    setTimeout(() => {
      writeTitle(txt2);
    }, 200);
  }
}

function setClipboard(value) {
  const tempInput = document.createElement("input");
  tempInput.style = "position: absolute; left: -1000px; top: -1000px";
  tempInput.value = value;
  document.body.appendChild(tempInput);
  tempInput.select();
  document.execCommand("copy");
  document.body.removeChild(tempInput);
}

function lightmode() {
  if (document.getElementById("body").classList.contains('darkmode')) {
    document.getElementById("body").classList.remove('darkmode');
    document.getElementById("body").classList.add('lightmode');
    document.getElementById("darkandlight").onclick = darkmode;
  }
}
function darkmode() {
  if (document.getElementById("body").classList.contains('lightmode')) {
    document.getElementById("body").classList.remove('lightmode');
    document.getElementById("body").classList.add('darkmode');
    document.getElementById("darkandlight").onclick = lightmode;
  }
}

function update_clock() {
  var currentTime = new Date(),
    hours = currentTime.getHours(),
    minutes = currentTime.getMinutes(),
    seconds = currentTime.getSeconds();
  var ampm = hours >= 12 ? "pm" : "am";
  hours = hours % 12;
  hours = hours ? hours : 12;

  if (minutes < 10) {
    minutes = "0" + minutes;
  }
  if (seconds < 10) {
    seconds = "0" + seconds;
  }

  var clock_element = document.getElementById("clock");

  clock_element.innerHTML = hours + " : " + minutes + " " + ampm;
}

setInterval(update_clock, 1000);
