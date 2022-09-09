var i = 1;
var a = 0;



function writetitle(txt) {

    if (a == 0) {
        
        document.getElementsByTagName("title")[0].innerHTML = txt.charAt(0);
        a = 1;
    }
    if (i < txt.length) {
        document.getElementsByTagName("title")[0].innerHTML += txt.charAt(i);
        i++;
        setTimeout(() => {
            writetitle(txt);
        }, 200);

    } else {

        txt = txt;
        var txt2 = txt;
        setTimeout(() => {
            deletetitle(txt, txt2);
        }, 200);
    }
}

function deletetitle(txt, txt2) {
    if (i > 0) {
        i--;
        txt = txt.slice(0, -1);
        document.getElementsByTagName("title")[0].innerHTML = txt;
        setTimeout(() => {
            deletetitle(txt, txt2);
        }, 200);
    } else {
        i = 1;
        a = 0;
        document.getElementsByTagName("title")[0].innerHTML = txt.charAt(0);
        setTimeout(() => {
            writetitle(txt2);
        }, 200);
    }



}

function cBgButton(lightmode, darkmode) {
    if 
}

