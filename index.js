

var mainText = document.getElementById("mainText");
var submitBtn = document.getElementById("submitBtn");

function submitClick() {

    var firebase = firebase.database().ref();

    firebaseRef.child("Text").set("Some Value");
    
}