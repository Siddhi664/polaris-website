function openSearch(){

document.getElementById("searchOverlay").style.display="flex";

}

function closeSearch(){

document.getElementById("searchOverlay").style.display="none";

}

function playSound(){

var sound=document.getElementById("clickSound");
sound.currentTime=0;
sound.play();

}