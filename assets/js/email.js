


//Firebase

// Initialize Firebase

var config = {
    apiKey: "AIzaSyAgn5Xi2CnIp5cVwNkbRsPh8YCZH4A6vy4",
    authDomain: "portfoliomail-b8b0a.firebaseapp.com",
    databaseURL: "https://portfoliomail-b8b0a.firebaseio.com",
    projectId: "portfoliomail-b8b0a",
    storageBucket: "portfoliomail-b8b0a.appspot.com",
    messagingSenderId: "788417455433"
};
firebase.initializeApp(config);

var dataRef = firebase.database();

// Firebase  
var dataRef = firebase.database();
// Initial Values
var name = "";
var domain = "";
var telephone = "";
var email = "";
var comment = "";
// Capture Button Click
$("#contactSubmit").on("click", function (event) {
    event.preventDefault();
    name = $("#icon_name").val().trim();
    domain = $("#icon_domain").val().trim();
    telephone = $("#icon_telephone").val().trim();
    email = $("#icon_email").val().trim();
    comment = $("#message").val().trim();
    // Code for the push
    dataRef.ref().push({
        name: name,
        domain: domain,
        telephone: telephone,
        email: email,
        comment: comment,
        dateAdded: firebase.database.ServerValue.TIMESTAMP
    });
    var template_params = {
        "name": name,
        "email": email,
        "telephone": telephone,
        "domain": domain,
        "message": comment
    }
    emailjs.sendForm('default_service', 'template_UyMXqtgl', template_params);
    console.log('message sent');
    alert("Your email has been sent, thank you for reaching out!\nI'll be back to you as soon as possible.\n -Shannon");
});
//Mail App

// Firebase watcher + initial loader HINT: .on("value")
dataRef.ref().on("child_added", function (snapshot) {
    // Log everything that's coming out of snapshot
    console.log(snapshot.val());
    console.log(snapshot.val().name);
    console.log(snapshot.val().domain);
    console.log(snapshot.val().telephone);
    console.log(snapshot.val().email);
    console.log(snapshot.val().comment);
    // Handle the errors
}, function (errorObject) {
    console.log("Errors handled: " + errorObject.code);
});

