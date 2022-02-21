



function start() {
    var audio = document.createElement('audio');
    audio.setAttribute('src', 'img/sound.mp3');
    audio.loop = true;
    audio.play();
    document.getElementById("tr").style.animation = "carMove linear 15s infinite";
    document.getElementById("cr").style.animation = "shake linear .9s infinite";
    document.getElementById("trk").style.animation = "carMove linear 13s infinite";
    document.getElementById("w1").style.animation = "wheelRotation linear .26s infinite";
    document.getElementById("w2").style.animation = "wheelRotation linear .26s infinite";
}

function nite() {


    document.getElementById("tr").style.background = "url('img/pg4.jpg') repeat-x";
}
