var params = {
    name: $("#icon_name").val().trim(),
    email: $("#icon_email").val().trim(),
    telephone: $("#icon_telephone").val().trim(),
    domain: $("#icon_domain").val().trim(),
    message: $("#message").val().trim()
}

window.onload = function () {
    document.getElementById('contact-form').addEventListener('submit', function (event) {
        event.preventDefault();
        emailjs.sendForm('gmail', 'template_UyMXqtgl', this);
        console.log('message sent');

        alert("Your email has been sent, thank you for reaching out!\nI'll be back to you as soon as possible.\n -Shannon");
    });
}