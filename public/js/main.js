var firebaseConfig = {
    apiKey: "AIzaSyCnU8iJzJJtceBOkMO1G-1H6XDjmdKcwwM",
    authDomain: "votonline-7bspm.firebaseapp.com",
    databaseURL: "https://votonline-7bspm-default-rtdb.firebaseio.com",
    projectId: "votonline-7bspm",
    storageBucket: "votonline-7bspm.appspot.com",
    messagingSenderId: "85825162949",
    appId: "1:85825162949:web:2a1cfb3f1aece12a2f6aac",
    measurementId: "G-0D6L6RDK1G"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig)
/*====================================================
                    SMOOTH SCROLLING
====================================================*/
window.onload = function() {
  window.scrollTo(0, 0)
}

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

function voteaza() {
var selected_val = $('input[name="demo"]:checked').val();
firebase.database().ref('database/'+selected_val).once('value', snap => {
  var x = parseInt(snap.val().val) + 1;
  firebase.database().ref('database/'+selected_val).update({
    val: x
  })
  localStorage.setItem('votare', 'da');
  setTimeout(function(){window.location.href = "../index.html"}, 1000)
});

}
