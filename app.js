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
        specifyInput.placeholder='Club Name';
        teacher.placeholder = "Club Adviser";
    }
    else if(val=='sport') {
        specifyInput.placeholder='Sport Name';
        teacher.placeholder = "Coach";
    }
    else{
        specifyInput.placeholder='Specify';
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

function sendAlert() {
    var x = document.getElementsByTagName("form");

    x[0].submit();// Form submission
    var selection = document.getElementById('selAct').value;
    if(selection == "club" || selection == 'sport' || selection == 'other'){
        if(document.getElementById('specify').value != ""
        && document.getElementById('teacher').value != "" && document.getElementById('ID').value != ""
        && document.getElementById('EMail').value != "" && document.getElementById('Name').value != ""
        && document.getElementById('pickBus').value != "") {
            alert('You have submitted!'); 
        }
    }
    else if(selection == "extra_help" || selection == "detention"){
        if(document.getElementById('teacher').value != "" && document.getElementById('ID').value != ""
        && document.getElementById('EMail').value != "" && document.getElementById('Name').value != ""
        && document.getElementById('pickBus').value != "") {
            alert('You have submitted!'); 
        }
    }

    else {
        alert('Invalid submission.');
    }

    if(!(/Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent)) ) {
        signOut();
    } 

}

