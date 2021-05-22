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
 scores = snap.val();
 let dict = ["Andreea", "Cristescu", "Raisa", "Simon", "Victor"];
 const main_dict = new Map();
 keys = scores ? Object.keys(scores) : [];
 for(var i=0; i<keys.length; i++) {
       var k = keys[i];
       var val = scores[k].val
       main_dict.set(dict[i], val)
       console.log(main_dict)
 }
 main_dict[Symbol.iterator] = function* () {
     yield* [...this.entries()].sort((a, b) => b[1] - a[1]);
 }
 for (let [key, value] of main_dict) {     // get data sorted
     console.log(key + ' --> ' + value);
 }
 console.log([...main_dict]);

});
