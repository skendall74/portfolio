//Firebase
var config = {
    apiKey: "AIzaSyAgn5Xi2CnIp5cVwNkbRsPh8YCZH4A6vy4",
    authDomain: "portfoliomail-b8b0a.firebaseapp.com",
    databaseURL: "https://portfoliomail-b8b0a.firebaseio.com",
    projectId: "portfoliomail-b8b0a",
    storageBucket: "portfoliomail-b8b0a.appspot.com",
    messagingSenderId: "788417455433"
};
// Initialize Firebase
firebase.initializeApp(config);
var dataRef = firebase.database();
window.onload = function () {
    document.getElementById('contact-form').addEventListener('submit', function (event) {
        event.preventDefault();
        emailjs.sendForm('gmail', 'template_UyMXqtgl', this);
        var params = {
            name: $("#icon_name").val().trim(),
            email: $("#icon_email").val().trim(),
            telephone: $("#icon_telephone").val().trim(),
            domain: $("#icon_domain").val().trim(),
            message: $("#message").val().trim()
        }
        // Submit to firebase
        dataRef.ref().push({
            ...params,
            dateAdded: firebase.database.ServerValue.TIMESTAMP
        });
        alert("Your email has been sent, thank you for reaching out!\nI'll be back to you as soon as possible.\n -Shannon");
    });
}