var i = 1;
var amtSlides = document.getElementsByClassName("slideB");




function changeSlides(a) {
    i += a;
    if(i < 1) {
        i = amtSlides.length;
    }
    if (i > amtSlides.length) {
        i = 1;
    }
    display(i);

}

function display(x) {

    for (j = 0; j < amtSlides.length; j++) {
        amtSlides[j].style.display = "none";
    }
    amtSlides[x-1].style.display = "block";

}   