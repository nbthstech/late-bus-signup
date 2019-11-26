const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");
const links = document.querySelector(".nav-links li");

hamburger.addEventListener('click', ()=>{
    navLinks.classList.toggle('open');
    
});



function checkResponse(val) {
    var dropdown = document.querySelector('#selAct');
    var val = dropdown.value;
    var specifyInput = document.getElementById('specify');
    var teacher = document.getElementById('teacher');
    var specifyInputRow = document.getElementById('specifyRow');
    var teacherRow = document.getElementById('teacherRow');
    teacher.style.display='inline-block';
    teacherRow.style.display='block';
    if(val=='club' || val=='sport' || val=='other') {
        specifyInput.style.display='inline-block';
        specifyInputRow.style.display='block';
    }
    else {
        specifyInput.style.display='none';
        specifyInputRow.style.display='none';
    }

    if(val=='club') {
        teacher.placeholder = "Club Adviser";
    }
    else if(val=='sport') {
        teacher.placeholder = "Coach";
    }
    else{
        teacher.placeholder = "Teacher";
    }
}



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