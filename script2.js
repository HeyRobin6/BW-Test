function fadeIn(element) {
    let level = 0;
    element.style.opacity = level + "%";
    intervalID2 = setInterval(opacityLeveler, 10);
    
    function opacityLeveler() {
        if(level<101) {
            level=level+1
            element.style.opacity = level + "%";
        } else {
            clearInterval(intervalID2);
        }
    }
}