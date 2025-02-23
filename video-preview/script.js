function startVidoe(element){
    if (element.muted) {
        element.muted = false;
    }
    else if (element.paused) {
        element.play();
    } else {
        element.pause();
    }
}
function mouseover(element){
    element.play();
    element.muted = true;
}
function mouseout(element){
    element.pause()
}