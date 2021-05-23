window.onload = function() {
  document.getElementById('main_content').style.display = "none";
  document.getElementById('signIn').style.display = "block";
  // setTimeout(function(){console.clear();}, 500)
}
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

let scores = null, keys = null;
firebase.database().ref("database/").on('value', snap => {
  console.log("New Data !");
 scores = snap.val();
 let dict = ["Andreea", "Cristescu", "Raisa", "Simon", "Victor"];
 let real_names = ["Drumea Andreea", "Cristescu Eduard", "Sandu Raisa", "Pirlogea Simon", "Zorila Victor"];
 const main_dict = new Map();
 keys = scores ? Object.keys(scores) : [];
 for(var i=0; i<keys.length; i++) {
       var k = keys[i];
       var val = scores[k].val
       main_dict.set(real_names[i], val)
       console.log(main_dict)
 }

 main_dict[Symbol.iterator] = function* () {
     yield* [...this.entries()].sort((a, b) => b[1] - a[1]);
 }

 for (let [key, value] of main_dict) {// get data sorted
     console.log(key + ' --> ' + value);
 }


 // Show output
 $("#key_1").text([...main_dict][0][0]);
 $("#val_1").text([...main_dict][0][1]);

 $("#key_2").text([...main_dict][1][0]);
 $("#val_2").text([...main_dict][1][1]);

 $("#key_3").text([...main_dict][2][0]);
 $("#val_3").text([...main_dict][2][1]);

 $("#key_4").text([...main_dict][3][0]);
 $("#val_4").text([...main_dict][3][1]);

 $("#key_5").text([...main_dict][4][0]);
 $("#val_5").text([...main_dict][4][1]);
 console.log([...main_dict]);

});


//Main content id: "main_content"
const inputs = document.querySelectorAll('.input');

function focusFunc(){
    let parent = this.parentNode.parentNode;
    parent.classList.add('focus');
}

function blurFunc(){
    let parent = this.parentNode.parentNode;
    if(this.value == ""){
        parent.classList.remove('focus');
    }
}

inputs.forEach(input => {
    input.addEventListener('focus', focusFunc);
    input.addEventListener('blur', blurFunc);
});
// fields[0].addEventListener("keyup",check);
// fields[1].addEventListener("keyup",check);

// document.querySelector(".show-password").addEventListener("click",function(){
//   if(this.classList[2] == "fa-eye-slash"){
//     this.classList.remove("fa-eye-slash");
//     this.classList.add("fa-eye");
//     fields[1].type = "text";
//   }else{
//     this.classList.remove("fa-eye");
//     this.classList.add("fa-eye-slash");
//     fields[1].type = "password";
//   }
// });
