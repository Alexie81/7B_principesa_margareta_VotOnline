window.onload = function() {
  window.scrollTo(0, 0)
}
/*====================================================
                    SMOOTH SCROLLING
====================================================*/
$(function () {

    $("a.smooth-scroll").click(function (event) {

        event.preventDefault();

        // get/return id like #about, #work, #team and etc
        var section = $(this).attr("href");

        $('html, body').animate({
            scrollTop: $(section).offset().top
        }, 1250, "easeInOutExpo");
    });
});

$(document).ready(function(){
  // Initialize select2
    $("#selUser").select2();
});

function ver1(){
  if(document.getElementById('selUser').value === '' || document.getElementById('selUser').value === null){alert('Selectati o materie din lista !')}else{document.getElementById('name_main').style.display = 'block';}
}

function ver2(){
  if(document.getElementById('name_input').value === '' || document.getElementById('name_input').value === null){
    alert('Scrieti numele !');
  } else {
    localStorage.setItem('numele: ', document.getElementById('name_input').value);
    localStorage.setItem('materia: ', document.getElementById('selUser').value);
    window.location.href = "alege/index.html";
  }
}
