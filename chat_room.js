var firebaseConfig = {
    apiKey: "AIzaSyC3IykHoY5LE_1M2yp9loOQ5YvoFoFoZ3Y",
    authDomain: "practice-605e9.firebaseapp.com",
    databaseURL: "https://practice-605e9-default-rtdb.firebaseio.com",
    projectId: "practice-605e9",
    storageBucket: "practice-605e9.appspot.com",
    messagingSenderId: "590692284352",
    appId: "1:590692284352:web:68ec072a67da1bec5bba25"
  };
  firebase.initializeApp(firebaseConfig);

  function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
    Room_names = childKey;
   });});}
getData();
