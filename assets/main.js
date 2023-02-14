let i = 1;
let a = 0;

function writeTitle(txt) {
  if (a === 0) {
    document.getElementsByTagName('title')[0].innerHTML = txt.charAt(0);
    a = 1;
  }
  if (i < txt.length) {
    document.getElementsByTagName('title')[0].innerHTML += txt.charAt(i);
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
    document.getElementsByTagName('title')[0].innerHTML = txt;
    setTimeout(() => {
      deleteTitle(txt, txt2);
    }, 200);
  } else {
    i = 1;
    a = 0;
    document.getElementsByTagName('title')[0].innerHTML = txt.charAt(0);
    setTimeout(() => {
      writeTitle(txt2);
    }, 200);
  }
}

function setClipboard(value) {
  const tempInput = document.createElement('input');
  tempInput.style = 'position: absolute; left: -1000px; top: -1000px';
  tempInput.value = value;
  document.body.appendChild(tempInput);
  tempInput.select();
  document.execCommand('copy');
  document.body.removeChild(tempInput);
}

function cBgButton(lightmode, darkmode) {
  // TODO: Add implementation for cBgButton function
}
function update_clock() {
  var currentTime = new Date(),
      hours = currentTime.getHours(),
      minutes = currentTime.getMinutes();
  seconds = currentTime.getSeconds();
  if (minutes < 10) {
      minutes = "0" + minutes;
  }
  if (seconds < 10) {
      seconds = "0" + seconds;
  }

  var clock_element = document.getElementById("clock");

  clock_element.innerHTML = hours + " : " + minutes;
}
setInterval(update_clock, 1000);
